import { Solar } from 'lunar-javascript';

export interface ElementEnergy {
  element: 'Wood' | 'Fire' | 'Earth' | 'Metal' | 'Water';
  archetype: 'Expansion' | 'Visibility' | 'Anchoring' | 'Precision' | 'Adaptation';
  score: number;
}

export interface FourPillarsResult {
  yearPillar: string;
  monthPillar: string;
  dayPillar: string;
  hourPillar: string;
  dayGan: string;
  energies: ElementEnergy[];
}

const GAN_ELEMENT: Record<string, string> = {
  甲: 'Wood', 乙: 'Wood',
  丙: 'Fire', 丁: 'Fire',
  戊: 'Earth', 己: 'Earth',
  庚: 'Metal', 辛: 'Metal',
  壬: 'Water', 癸: 'Water',
};

const ZHI_ELEMENT: Record<string, string> = {
  寅: 'Wood', 卯: 'Wood',
  巳: 'Fire', 午: 'Fire',
  辰: 'Earth', 戌: 'Earth', 丑: 'Earth', 未: 'Earth',
  申: 'Metal', 酉: 'Metal',
  亥: 'Water', 子: 'Water',
};

const ELEMENT_ARCHETYPE_MAP: Record<string, 'Expansion' | 'Visibility' | 'Anchoring' | 'Precision' | 'Adaptation'> = {
  Wood: 'Expansion',
  Fire: 'Visibility',
  Earth: 'Anchoring',
  Metal: 'Precision',
  Water: 'Adaptation',
};

export function calculateChart(birthDateStr: string, birthTimeStr: string): FourPillarsResult {
  const [year, month, day] = birthDateStr.split('-').map(Number);
  const [hour, minute] = birthTimeStr.split(':').map(Number);

  const solar = Solar.fromYmdHms(year, month, day, hour, minute || 0, 0);
  const lunar = solar.getLunar();
  const eightChar = lunar.getEightChar();

  // 1. 修正 API 拼装干支方式
  const yearPillar = `${eightChar.getYearGan()}${eightChar.getYearZhi()}`;
  const monthPillar = `${eightChar.getMonthGan()}${eightChar.getMonthZhi()}`;
  const dayPillar = `${eightChar.getDayGan()}${eightChar.getDayZhi()}`;
  const hourPillar = `${eightChar.getTimeGan()}${eightChar.getTimeZhi()}`;
  const dayGan = eightChar.getDayGan();

  // 2. 统计五行频次
  const rawCounts: Record<string, number> = { Wood: 0, Fire: 0, Earth: 0, Metal: 0, Water: 0 };

  const chars = [
    eightChar.getYearGan(), eightChar.getYearZhi(),
    eightChar.getMonthGan(), eightChar.getMonthZhi(),
    eightChar.getDayGan(), eightChar.getDayZhi(),
    eightChar.getTimeGan(), eightChar.getTimeZhi(),
  ];

  chars.forEach((char) => {
    const elem = GAN_ELEMENT[char] || ZHI_ELEMENT[char];
    if (elem) {
      const weight = char === eightChar.getMonthZhi() ? 1.5 : 1.0;
      rawCounts[elem] += weight;
    }
  });

  const totalWeight = Object.values(rawCounts).reduce((a, b) => a + b, 0) || 1;
  const energies: ElementEnergy[] = (['Wood', 'Fire', 'Earth', 'Metal', 'Water'] as const).map((elem) => ({
    element: elem,
    archetype: ELEMENT_ARCHETYPE_MAP[elem],
    score: Math.round(((rawCounts[elem] || 0) / totalWeight) * 100),
  }));

  return {
    yearPillar,
    monthPillar,
    dayPillar,
    hourPillar,
    dayGan,
    energies,
  };
}