export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-neutral-300 space-y-6 text-xs leading-relaxed">
      <h1 className="font-serif-title text-2xl text-neutral-100 uppercase tracking-widest border-b border-neutral-800 pb-4">
        PRIVACY POLICY
      </h1>
      <p>
        At ChronoFlow, we value your privacy. This policy outlines how we handle spatiotemporal and birth data.
      </p>

      <h2 className="text-sm font-semibold text-neutral-100 uppercase tracking-wider pt-2">1. Information We Collect</h2>
      <p>
        We collect birth dates, birth times, and optional location entries solely to compute your Bazi matrix and generate personalized Jungian archetype reports. We do not sell your personal birth metadata.
      </p>

      <h2 className="text-sm font-semibold text-neutral-100 uppercase tracking-wider pt-2">2. Processing via Gemini API</h2>
      <p>
        Your computed four-pillar matrices are transmitted securely via API to Google Gemini models to construct your psychological reading text. No personally identifiable government IDs or financial details are stored on our primary servers.
      </p>
    </div>
  );
}