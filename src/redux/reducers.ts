import { createReducer } from "typesafe-actions";
import accountActions from "./actions/account.action";
import settingsAction from "./actions/settings.action";

import { Account, Settings } from "./types";

const settings = createReducer<
  Settings[],
  any
>([])
  .handleAction(settingsAction.addSettings, (state: any, action: any) => {
    return [...state, action.payload];
  });

export const account = createReducer<
  Record<string, Account>,
  any
>({
  'uniqueId': { settings: [{}] },
})
  .handleAction(accountActions.addAccount, (state: any) => {
    const id = Math.floor(Math.random() * 10000).toString();

    return {
      ...state,
      [id]: { settings: [] },
    };
  })
  .handleAction(Object.values(settingsAction), (state: any, action: any) => {
    const id = action.payload.accountId;
    
    const account = state[id];
    
    const reducedSettings = settings(account.settings, action);

    return {
      ...state,
      [id]: { ...account, settings: reducedSettings },
    };
  });

