export type ItemType = 'equippable' | 'consumable' | 'non-consumable' | 'summon_companion';
export type EquipmentSlot = 'head' | 'body' | 'leftHand' | 'rightHand' | 'feet' | 'waist' | 'companion';
export type Language = 'zh-TW' | 'zh-CN' | 'en' | 'ja' | 'es' | 'ko';
export type AIModel = 'gemini' | 'chatgpt';

export interface Item {
  name: string;
  type: ItemType;
  description: string;
  // The slot this item can be equipped in. Optional, as consumables don't have a slot.
  slot?: EquipmentSlot;
  quantity?: number;
}

export interface EquipmentSlots {
  head: Item | null;
  body: Item | null;
  leftHand: Item | null;
  rightHand: Item | null;
  feet: Item | null;
  waist: Item | null;
  companion: Item | null;
}

export interface Blessing {
  name: string;
  description: string;
}

export interface SuggestedAction {
    action: string;
    hint: string;
}

export interface GameState {
  story: string;
  health: number;
  inventory: Item[];
  equipment: EquipmentSlots;
  luck: number;
  suggestedActions: SuggestedAction[];
  gameOver: boolean;
  win: boolean;
  mood: string;
  actionResult: string;
  turnCount: number;
  chapterTitle: string;
  illustrations: Record<number, string>; // Map turn count to image URL
  strongEnemiesDefeated: number;
  blessings: Blessing[];
}

export interface GameUpdateResponse {
  story: string;
  health: number;
  inventory: Item[];
  equipment: EquipmentSlots;
  luck: number;
  suggested_actions: SuggestedAction[];
  game_over: boolean;
  win: boolean;
  mood:string;
  action_result: string;
  chapter_title: string;
  strong_enemies_defeated: number;
  blessings: Blessing[];
}

export interface PlayerClass {
  id: string;
  name: string;
  description: string;
  initialHealth: number;
  initialLuck: number;
  initialEquipment: EquipmentSlots;
  initialInventory: Item[];
  startingPrompt: string;
  initialBlessings: Blessing[];
}

export interface SaveData {
  gameState: GameState;
  playerClass: PlayerClass;
  language: Language;
  isVoiceoverEnabled: boolean;
  speechRate: number;
  aiModel: AIModel;
}