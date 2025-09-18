/**
 * @file This file contains the configuration for the AI models used in the application.
 * To make changes, please edit the values within the single quotes.
 * 
 * ===================================================================================
 * 
 * 檔案說明：此檔案包含應用程式中使用的 AI 模型設定。
 * 如需修改，請編輯單引號中的模型名稱。
 */

export const AI_CONFIG = {
  /**
   * The model used for generating story text, character interactions, and game logic.
   * 用於生成故事文字、角色互動和遊戲邏輯的模型。
   * 
   * Recommended / 推薦模型: 'gemini-2.5-flash'
   */
  TEXT_MODEL: 'gemini-2.5-flash',

  /**
   * The model used for generating illustrations.
   * 用於生成插圖的模型。
   * 
   * Recommended / 推薦模型: 'imagen-4.0-generate-001'
   */
  IMAGE_MODEL: 'imagen-4.0-generate-001',
};
