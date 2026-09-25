import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { yearPillar, monthPillar, dayPillar, hourPillar, dayGan, energies, isPaid } = body;

    // 获取环境变量中的 Gemini API Key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Gemini API Key missing' }, { status: 500 });
    }

    // 严密高冷的 Co-Star 风格 System Prompt
    const systemPrompt = `
You are an expert in Oriental Spatiotemporal Philosophy and Jungian Archetypal Psychology.
Translate the provided Bazi parameters into a hyper-personalized, poetic, sharp, and cold psychological diagnostic report.

[STRICT GUIDELINES]:
1. NEVER use superstitious terms like "luck", "fortune", "evil spirits", or "divination".
2. Use modern psychological terms:
   - Year Pillar -> The Origin Pillar (Collective Unconscious & Ancestral Gravity)
   - Month Pillar -> The Social Mask (Environmental Armor & Social Ego)
   - Day Pillar -> The Core Ego (True Self & Inner Anchor)
   - Hour Pillar -> The Hidden Horizon (Subconscious & Ultimate Desires)
3. Tone: Analytical, sharp, emotionally resonant, slightly aloof, and deeply insightful (like Co-Star).
4. Output strict JSON only matching the requested schema.
    `;

    const userPrompt = `
Analyze this spatiotemporal matrix:
- Four Pillars: Year (${yearPillar}), Month (${monthPillar}), Day (${dayPillar}), Hour (${hourPillar})
- Core Element (Day Gan): ${dayGan}
- Energy Vectors: ${JSON.stringify(energies)}
- User Payment Status: ${isPaid ? 'PAID (Full 10-page diagnostic)' : 'FREE (Teaser Core Ego only)'}

Return JSON with this structure:
{
  "archetype_title": "A 4-5 word striking title (e.g., The Architect of Silent Waters)",
  "core_quote": "A 1-sentence sharp diagnostic quote",
  "core_ego_reading": "150 words deep diagnostic on their Day Pillar (${dayPillar})",
  "full_report": ${isPaid ? '{\n    "origin_insight": "...",\n    "social_mask_insight": "...",\n    "hidden_horizon_insight": "...",\n    "shadow_element_warning": "..."\n  }' : 'null'}
}
    `;

    // 调用 Gemini API (1.5 Flash)
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          { role: 'user', parts: [{ text: `${systemPrompt}\n\n${userPrompt}` }] }
        ],
        generationConfig: {
          responseMimeType: 'application/json',
          temperature: 0.7,
        }
      })
    });

    const data = await response.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    const parsedJson = JSON.parse(rawText || '{}');

    return NextResponse.json(parsedJson);
  } catch (error) {
    console.error('Gemini Diagnosis Error:', error);
    return NextResponse.json({ error: 'Failed to generate diagnostic payload' }, { status: 500 });
  }
}