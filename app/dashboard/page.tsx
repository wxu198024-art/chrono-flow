import FieldHeader from '@/components/field/FieldHeader';
import DailyPulse from '@/components/field/DailyPulse';
import PillarsStructure from '@/components/field/PillarsStructure';
import OrbitSubscription from '@/components/field/OrbitSubscription';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#0d0f12] text-[#e2e8f0] px-4 py-8 md:px-12 max-w-7xl mx-auto space-y-8">
      {/* 1. 时空原点锚点区 */}
      <FieldHeader />

      {/* 2. 今日动态脉搏 */}
      <DailyPulse />

      {/* 3. 四柱存在结构 */}
      <PillarsStructure />

      {/* 4. 52周重力痕迹 */}
      <OrbitSubscription />
    </main>
  );
}
