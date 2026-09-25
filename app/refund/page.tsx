export default function RefundPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-neutral-300 space-y-6 text-xs leading-relaxed">
      <h1 className="font-serif-title text-2xl text-neutral-100 uppercase tracking-widest border-b border-neutral-800 pb-4">
        REFUND & CANCELLATION POLICY
      </h1>
      <p>
        Thank you for purchasing ChronoFlow Archetype Reports (&quot;Digital Products&quot;). Please read this policy carefully before making a purchase.
      </p>
      
      <h2 className="text-sm font-semibold text-neutral-100 uppercase tracking-wider pt-2">1. Nature of Digital Content</h2>
      <p>
        Due to the instant, personalized nature of our AI-generated psychological diagnostics, all sales are generally final once the computation payload is delivered to your browser.
      </p>

      <h2 className="text-sm font-semibold text-neutral-100 uppercase tracking-wider pt-2">2. Refund Eligibility</h2>
      <p>
        You may be eligible for a full refund within 14 days of purchase under the following circumstances:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>A technical failure prevented the generation or delivery of your report.</li>
        <li>You were charged multiple times for a single order due to a checkout error.</li>
      </ul>

      <h2 className="text-sm font-semibold text-neutral-100 uppercase tracking-wider pt-2">3. How to Request a Refund</h2>
      <p>
        As Paddle is our Merchant of Record, you can request a refund directly via Paddle support or by contacting our support email at <strong>support@chronoflow.com</strong> with your order receipt ID.
      </p>
    </div>
  );
}