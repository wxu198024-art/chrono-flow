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

    // 调试模式开关：当前调优阶段强行开启全量生成；上线时切回 checkPaid = isPaid
    const DEBUG_FORCE_FULL = true;
    const isUnlocked = DEBUG_FORCE_FULL || isPaid;

    // 严密高冷的 Co-Star 风格 System Prompt
    const systemPrompt = `
You are an expert in Oriental Spatiotemporal Philosophy, Chrono-Dynamics, and Jungian Archetypal Psychology.
Translate the provided Bazi parameters into a hyper-personalized, poetic, sharp, and cold psychological diagnostic report.

[STRICT GUIDELINES]:
1. NEVER use superstitious terms like "luck", "fortune", "evil spirits", or "divination".
2. Use modern psychological terms and spatiotemporal mechanics.
3. Tone: Analytical, sharp, emotionally resonant, slightly aloof, and deeply insightful (Co-Star style).
4. Output strict JSON matching the requested L1-L9 schema.
    `;

    const userPrompt = `
Analyze this spatiotemporal matrix:
- Four Pillars: Year (${yearPillar}), Month (${monthPillar}), Day (${dayPillar}), Hour (${hourPillar})
- Core Element (Day Gan): ${dayGan}
- Energy Vectors: ${JSON.stringify(energies)}
- Access Mode: ${isUnlocked ? 'FULL_SPECTRUM (Generate L1 to L9 complete diagnostic)' : 'TIERED (Generate L1 to L5 only)'}

Return JSON with this exact structure:
{
  "archetype_title": "A 4-5 word striking title",
  "core_quote": "A 1-sentence sharp diagnostic quote",
  "levels": [
    { "level": 1, "title": "L1 时空场域锚定", "content": "100 words diagnostic content", "unlocked": true },
    { "level": 2, "title": "L2 能量拓扑与五行占比", "content": "100 words diagnostic content", "unlocked": true },
    { "level": 3, "title": "L3 境象与灵魂解构", "content": "100 words diagnostic content", "unlocked": true },
    { "level": 4, "title": "L4 临界点与阻力警告", "content": "100 words diagnostic content", "unlocked": true },
    { "level": 5, "title": "L5 秩序与节律矩阵", "content": "100 words diagnostic content", "unlocked": true },
    { "level": 6, "title": "L6 高阶因果流转", "content": "${isUnlocked ? '100 words diagnostic content' : ''}", "unlocked": ${isUnlocked} },
    { "level": 7, "title": "L7 深度决策路线图", "content": "${isUnlocked ? '100 words diagnostic content' : ''}", "unlocked": ${isUnlocked} },
    { "level": 8, "title": "L8 暗物质阻力避坑", "content": "${isUnlocked ? '100 words diagnostic content' : ''}", "unlocked": ${isUnlocked} },
    { "level": 9, "title": "L9 终极秩序合相", "content": "${isUnlocked ? '100 words diagnostic content' : ''}", "unlocked": ${isUnlocked} }
  ]
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
