'use client';

interface PaywallOverlayProps {
  onUnlockSuccess: () => void;
}

export default function PaywallOverlay({ onUnlockSuccess }: PaywallOverlayProps) {
  const handlePaddleCheckout = () => {
    // 阶段四：此处可挂载 Paddle.Checkout.open()
    // 快速测试模拟：点击后模拟支付完成解锁
    console.log('Initiating Paddle $1.99 Checkout...');
    
    // 模拟支付成功履约
    setTimeout(() => {
      onUnlockSuccess();
    }, 1000);
  };

  return (
    <div className="relative border border-neutral-800 bg-neutral-950/90 rounded-2xl p-8 text-center space-y-6 overflow-hidden backdrop-blur-xl">
      {/* 高级遮罩与背景水墨微粒 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

      <div className="relative z-10 space-y-4 max-w-md mx-auto pt-6">
        <div className="inline-block border border-red-900/50 bg-red-950/30 text-red-400 px-3 py-1 rounded-full text-[10px] tracking-[0.25em] uppercase">
          FULL ARCHETYPE MATRIX LOCKED
        </div>

        <h3 className="font-serif-title text-2xl text-neutral-100 tracking-wider">
          UNVEIL YOUR 10-PAGE DEEP DIAGNOSTIC
        </h3>

        <p className="text-xs text-neutral-400 leading-relaxed">
          Unlock your Social Mask (Month Pillar), Ancestral Origin (Year Pillar), Hidden Subconscious Horizon (Hour Pillar), and Elemental Shadow Warnings.
        </p>

        {/* 支付按钮 */}
        <div className="pt-4 space-y-3">
          <button
            onClick={handlePaddleCheckout}
            className="w-full bg-neutral-100 hover:bg-white text-black font-medium py-3.5 px-6 rounded-lg text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-xl"
          >
            Unlock Full Matrix • $1.99 USD
          </button>
          
          <div className="flex items-center justify-center space-x-4 text-[10px] text-neutral-600 tracking-widest uppercase">
            <span>Encrypted Checkout</span>
            <span>•</span>
            <span>Powered by Paddle</span>
            <span>•</span>
            <span>Instant PDF/Web Access</span>
          </div>
        </div>
      </div>
    </div>
  );
}