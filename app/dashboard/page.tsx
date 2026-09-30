'use client';

import React, { useEffect, useState } from 'react';
import FieldHeader from '@/components/field/FieldHeader';
import DailyPulse from '@/components/field/DailyPulse';
import PillarsStructure from '@/components/field/PillarsStructure';
import OrbitSubscription from '@/components/field/OrbitSubscription';

export default function DashboardPage() {
  const [userRole, setUserRole] = useState<'guest' | 'free' | 'subscribed'>('guest');
  const [subPlan, setSubPlan] = useState<'none' | 'monthly' | 'quarterly' | 'annual'>('none');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      // 1. 读取用户角色
      const storedRole = localStorage.getItem('chrono_user_role') as 'guest' | 'free' | 'subscribed' | null;
      if (storedRole) {
        setUserRole(storedRole);
      } else {
        // 默认游客态
        setUserRole('guest');
      }

      // 2. 读取订阅方案
      const storedPlan = localStorage.getItem('chrono_sub_plan') as 'none' | 'monthly' | 'quarterly' | 'annual' | null;
      if (storedPlan) {
        setSubPlan(storedPlan);
      }
    } catch (e) {
      console.error('Failed to parse user role/plan:', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center text-xs font-mono text-[var(--text-muted)]">
        CALIBRATING GRAVITY FIELD...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-transparent text-[var(--text-primary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* 顶部时空坐标头栏 */}
        <FieldHeader userRole={userRole} />

        {/* 今日重力波脉搏 */}
        <DailyPulse userRole={userRole} />

        {/* 四柱存在结构与五维因子 */}
        <PillarsStructure userRole={userRole} />

        {/* 52周重力痕迹与订阅对齐 */}
        <OrbitSubscription userRole={userRole} subPlan={subPlan} />
      </div>
    </main>
  );
}
