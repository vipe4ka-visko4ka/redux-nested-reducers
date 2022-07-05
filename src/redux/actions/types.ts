import { Settings } from "../types";

export interface BaseSettingPayload {
  accountId: string;
}

export interface CreateSettingPayload extends BaseSettingPayload  {
  setting: Settings;
}
