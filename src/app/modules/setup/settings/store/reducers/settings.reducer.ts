import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {Setting} from "../../../../../models/setting";
import {
  addSetting,
  addSettingFail,
  addSettingSuccess,
  deleteSetting,
  deleteSettingFail,
  deleteSettingSuccess,
  getSettingById,
  getSettingByIdFail,
  getSettingByIdSuccess,
  getSettings,
  getSettingsFail,
  getSettingsSuccess, hideAddForm, showAddForm,
  updateSetting,
  updateSettingFail,
  updateSettingSuccess
} from "../actions/settings.actions";


export interface ISettingState extends EntityState<Setting> {
  selectedSettingId: number | null;
  isLoading: boolean;
  isSaving: boolean;
  errorMessage: string;
  successMessage: string;
  errors: any;
  selectedSetting: Setting | null;
  showAddForm: boolean
}

export const adapter: EntityAdapter<Setting> = createEntityAdapter<Setting>();

export const initialState: ISettingState = adapter.getInitialState({
  selectedSettingId: null,
  isLoading: false,
  isSaving: false,
  errorMessage: '',
  successMessage: '',
  errors: null,
  selectedSetting: null,
  showAddForm: false
});

const reducer = createReducer(
  initialState,
  on(getSettings, (state) => {
    return { ...state, isLoading: true };
  }),
  on(getSettingsSuccess, (state, { payload }) => {
    return adapter.setAll(payload, {...state, isLoading: false});
  }),
  on(getSettingsFail, (state, { payload }) => {
    return { ...state, errorMessage: payload, isLoading: false };
  }),
  on(addSetting, (state, { payload }) => {
    return { ...state, isSaving: true };
  }),
  on(addSettingSuccess, (state, { payload }) => {
    return adapter.addOne(payload, {...state, isSaving: false, showAddForm: false});
  }),
  on(addSettingFail, (state, { payload }) => {
    return { ...state, errorMessage: payload, isSaving: false };
  }),
  on(updateSetting, (state, { payload }) => {
    return { ...state, isSaving: true };
  }),
  on(updateSettingSuccess, (state, { payload }) => {
    return adapter.upsertOne(payload, {...state, isSaving: false});
  }),
  on(updateSettingFail, (state, { payload }) => {
    return { ...state, errorMessage: payload, isSaving: false };
  }),
  on(deleteSetting, (state, { payload }) => {
    return { ...state, isSaving: true };
  }),
  on(deleteSettingSuccess, (state, { payload }) => {
    return adapter.removeOne(payload.id, {...state, isSaving: false});
  }),
  on(deleteSettingFail, (state, { payload }) => {
    return { ...state, errorMessage: payload, isSaving: false };
  }),
  on(getSettingById, (state) => {
    return { ...state, isLoading: true };
  }),
  on(getSettingByIdSuccess, (state, { payload }) => {
    return { ...state, selectedSetting: payload, isLoading: false };
  }),
  on(getSettingByIdFail, (state, { payload }) => {
    return { ...state, errorMessage: payload , isLoading: false};
  }),
  on(showAddForm, (state ) => {
    return { ...state, showAddForm: true};
  }),
  on(hideAddForm, (state ) => {
    return { ...state, showAddForm: false};
  })
);

export function settingReducer(state: ISettingState | undefined, action: Action) {
  return reducer(state, action);
}

export const getSelectedSettingId = (state: ISettingState) => state.selectedSettingId;

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of Settings ids
export const selectSettingsIds = selectIds;

// select the dictionary of Setting entities
export const selectSettingsEntities = selectEntities;

// select the array of Setting
export const selectAllSettings = selectAll;

// select the total Settings count
export const selectSettingsTotal = selectTotal;

export const getErrors = (state: ISettingState) => state.errors;
export const getIsLoading = (state: ISettingState) => state.isLoading;
export const getSelectedSetting = (state: ISettingState) => state.selectedSetting;
