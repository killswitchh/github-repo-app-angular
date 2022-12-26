import { createReducer, on } from '@ngrx/store';
import { CONSTANTS } from 'src/app/models/constants';
import { GithubRepository, Owner } from 'src/app/models/github-repositories.dto';
import { setSearchString, setUserInfo, setRepositories, setError } from '../actions/store.actions';

export type StoreObject = {
    searchString: string
    userInfo: Owner | null
    userRepositories: GithubRepository[] | null
    error?: string | null
}

const defaultStoreValue: StoreObject = {
    searchString: CONSTANTS.EMPTY_STRING,
    userInfo: null,
    userRepositories: null,
    error: null
}


export const storeReducer = createReducer(
  defaultStoreValue,
  on(setError, (state, action) => ({...state, error: action.error})),
  on(setUserInfo, (state, action) => ({...state, userInfo: action.userInfo})),
  on(setRepositories, (state, action) => ({...state, userRepositories: action.userRepositories})),
  on(setSearchString, (state, action) => ({...state, searchString: action.searchString}))
);