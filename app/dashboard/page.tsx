import DojoHeader from '@/components/dojo/DojoHeader';
import DailyPulse from '@/components/dojo/DailyPulse';
import PillarsStructure from '@/components/dojo/PillarsStructure';
import OrbitSubscription from '@/components/dojo/OrbitSubscription';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#0d0f12] text-[#e2e8f0] px-4 py-8 md:px-12 max-w-7xl mx-auto space-y-8">
      {/* 1. 时空原点锚点区 */}
      <DojoHeader />

      {/* 2. 今日动态脉搏（含解包动画与镜像对谈） */}
      <DailyPulse />

      {/* 3. 四柱存在结构与五行均衡因子 */}
      <PillarsStructure />

      {/* 4. 52周重力痕迹与自然周期对齐 */}
      <OrbitSubscription />
    </main>
  );
}
