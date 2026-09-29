'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import FieldHeader from '@/components/field/FieldHeader';
import DailyPulse from '@/components/field/DailyPulse';
import PillarsStructure from '@/components/field/PillarsStructure';
import OrbitSubscription from '@/components/field/OrbitSubscription';

export default function DashboardPage() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  const [userRole, setUserRole] = useState<'guest' | 'member'>('guest');

  useEffect(() => {
    try {
      const hasTested = localStorage.getItem('chrono_has_tested');
      const role = (localStorage.getItem('chrono_user_role') as 'guest' | 'member') || 'guest';

      // 若未建立生辰原点，重定向回首页
      if (hasTested !== 'true') {
        router.replace('/');
        return;
      }

      setUserRole(role);
      setIsReady(true);
    } catch (e) {
      console.error('Failed to read spatiotemporal origin:', e);
      setIsReady(true);
    }
  }, [router]);

  if (!isReady) {
    return (
      <div className="min-h-screen bg-[#0d0f12] text-[#e2e8f0] flex items-center justify-center font-mono text-xs tracking-widest">
        <span className="animate-pulse">LOADING SPATIOTEMPORAL FIELD...</span>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0d0f12] text-[#e2e8f0] px-4 py-8 md:px-12 max-w-7xl mx-auto space-y-8 animate-fade-in">
      {/* 1. 时空原点锚点区 */}
      <FieldHeader />

      {/* 2. 今日动态脉搏 */}
      <DailyPulse />

      {/* 3. 四柱存在结构 */}
      <PillarsStructure />

      {/* 4. 52周重力痕迹与解锁订阅 */}
      <OrbitSubscription userRole={userRole} />
    </main>
  );
}
