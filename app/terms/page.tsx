export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-neutral-300 space-y-6 text-xs leading-relaxed">
      <h1 className="font-serif-title text-2xl text-neutral-100 uppercase tracking-widest border-b border-neutral-800 pb-4">
        TERMS OF SERVICE
      </h1>
      
      <h2 className="text-sm font-semibold text-neutral-100 uppercase tracking-wider pt-2">1. Non-Medical & Psychological Disclaimer</h2>
      <p>
        ChronoFlow provides archetypal and psychological analysis based on historical spatiotemporal algorithms and LLM models. The insights provided are strictly for personal self-reflection, entertainment, and philosophical exploration. <strong>They do not constitute professional psychological counselling, medical diagnosis, or financial advice.</strong>
      </p>

      <h2 className="text-sm font-semibold text-neutral-100 uppercase tracking-wider pt-2">2. Merchant of Record</h2>
      <p>
        Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle provides all customer service inquiries and handles returns.
      </p>

      <h2 className="text-sm font-semibold text-neutral-100 uppercase tracking-wider pt-2">3. Intellectual Property</h2>
      <p>
        All generated diagnostic reports, visual aesthetics, and original code are protected under intellectual property laws. Users are granted a personal, non-exclusive license to use and share their reports.
      </p>
    </div>
  );
}