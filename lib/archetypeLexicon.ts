// lib/archetypeLexicon.ts
export interface ArchetypeNode {
  id: string; // 如 ze_01, ju_12, yu_05
  code: string; // 英文代号如 MIGRATOR
  belongsToLevel: number; // 关联到 L1-L9 的层级，如 level: 4
  name: Record<'zh' | 'en' | 'ja', string>;
  definition: Record<'zh' | 'en' | 'ja', string>;
  vectorCommand: Record<'zh' | 'en' | 'ja', string>; // 高维避障指令
}

export const ZE_64_ARCHETYPES: Record<string, ArchetypeNode> = { /* ... 64者 */ };
export const JU_28_ARCHETYPES: Record<string, ArchetypeNode> = { /* ... 28局 */ };
export const YU_12_ARCHETYPES: Record<string, ArchetypeNode> = { /* ... 12域 */ };