import {createAction, props} from "@ngrx/store";
import {Setting} from "../../../../../models/setting";

export const getSettings = createAction('[SETTINGS] GET ALL SETTINGS');
export const getSettingsFail = createAction('[SETTINGS] GET ALL SETTINGS FAIL',
  props<{ payload: any }>());
export const getSettingsSuccess = createAction('[SETTINGS] GET ALL SETTINGS SUCCESS',
  props<{ payload: Setting[] }>());

export const addSetting = createAction('[SETTINGS] ADD SETTING', props<{ payload: { key: string, value: string } }>());
export const addSettingFail = createAction('[SETTINGS] ADD SETTING FAIL', props<{ payload: any }>());
export const addSettingSuccess = createAction('[SETTINGS] ADD SETTING SUCCESS', props<{ payload: Setting }>());

export const getSettingById = createAction('[SETTINGS] GET SETTING BY ID', props<{ payload: number }>());
export const getSettingByIdFail = createAction('[SETTINGS] GET SETTING BY ID FAIL', props<{ payload: any }>());
export const getSettingByIdSuccess = createAction('[SETTINGS] GET SETTING BY IDG SUCCESS', props<{ payload: Setting }>());

export const deleteSetting = createAction('[SETTINGS] DELETE SETTING', props<{ payload: number }>());
export const deleteSettingFail = createAction('[SETTINGS] DELETE SETTING FAIL', props<{ payload: any }>());
export const deleteSettingSuccess = createAction('[SETTINGS] DELETE SETTING SUCCESS', props<{ payload: Setting }>());

export const updateSetting = createAction('[SETTINGS] UPDATE SETTING', props<{ payload: Setting }>());
export const updateSettingFail = createAction('[SETTINGS] UPDATE SETTING FAIL', props<{ payload: any }>());
export const updateSettingSuccess = createAction('[SETTINGS] UPDATE SETTING SUCCESS', props<{ payload: Setting }>());

export const showAddForm = createAction('[SETTINGS] SHOW ADD FORM');
export const hideAddForm = createAction('[SETTINGS] HIDE ADD FORM');
