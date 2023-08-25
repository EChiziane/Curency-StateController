import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSettings from '../reducers/settings.reducer';
import {ISettingState} from "../reducers/settings.reducer";

export const SETTING_STATE_NAME = 'setting'

export const setupState = createFeatureSelector<ISettingState>(SETTING_STATE_NAME);

export const selectSettingIsLoading = createSelector(
  setupState,
  state => state.isLoading
);

export const selectSettings = createSelector(
  setupState,
  fromSettings.selectAllSettings
);


export const selectShowSettingAddForm = createSelector(
  setupState,
  state => state.showAddForm
);
