import {createAction} from 'typesafe-actions';

import { CreateSettingPayload } from './types';

const addSettings = createAction('ADD_SETTING')<CreateSettingPayload>();

const settingsAction = { addSettings };

export default settingsAction;
