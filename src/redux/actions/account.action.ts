import {createAction} from 'typesafe-actions';

const addAccount = createAction('ADD_ACCOUNT')();

const accountActions = { addAccount };

export default accountActions;
