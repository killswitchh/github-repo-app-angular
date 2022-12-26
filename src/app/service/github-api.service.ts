import { setError } from './../store/actions/store.actions';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, map, Observable, throwError } from 'rxjs';
import { GithubRepository } from '../models/github-repositories.dto';
import { StoreObject } from '../store/reducer/store.reducer';
import { GITHUB_API_URLS } from './../models/constants';

@Injectable({ providedIn: 'root' })
export class GithubAPIService {
  store$!: Observable<StoreObject>;

  constructor(private httpClient: HttpClient, private store: Store<{ store: StoreObject }>) {
    this.store$ = store.select('store');
  }

  getRepositories(userName: string): Observable<GithubRepository[]> {
    console.log(this.store);
    const url = GITHUB_API_URLS.GITHUB_GET_REPOS_URL(userName)
    return this.httpClient.get<GithubRepository[]>(url)
      .pipe(
        map((res) => {
          if (!res || res.length === 0) {
            throw new Error('User has no repositories')
          }
          else {
            this.store.dispatch(setError({error: ''}));
          }
          return res
        }),
        catchError(err => this.handleError(err, this.store))
      )
  }

  handleError(err: HttpErrorResponse | Error, store: Store<{ store: StoreObject }>): Observable<never> {
    if (err instanceof Error) {
      store.dispatch(setError({error: err.message}));
    }
    if (err instanceof HttpErrorResponse) {
      store.dispatch(setError({error: err.error.message}));
    }
    
    return throwError(() => err);
  }

}