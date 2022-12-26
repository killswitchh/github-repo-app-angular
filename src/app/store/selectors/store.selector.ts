import { StoreObject } from './../reducer/store.reducer';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const getState = createFeatureSelector<StoreObject>('store');

export const getSearchString = createSelector(getState, (state: StoreObject) => state.searchString);
export const getUserInfo = createSelector(getState, (state: StoreObject) => state.userInfo);
export const getUserRepositories = createSelector(getState, (state: StoreObject) => state.userRepositories);

