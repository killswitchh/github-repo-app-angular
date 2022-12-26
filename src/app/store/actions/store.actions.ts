import { createAction, props } from '@ngrx/store';
import { GithubRepository, Owner } from 'src/app/models/github-repositories.dto';


export const setSearchString = createAction('[Search String] Set', props<{searchString: string}>());
export const setUserInfo = createAction('[UserInfo] set userInfo,', props<{userInfo: Owner | null}>());
export const setRepositories = createAction('[Repositories] set repositories', props<{userRepositories: GithubRepository[]}>());
export const setError = createAction('[Error] set error', props<{error: string}>());