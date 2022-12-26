import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subject } from 'rxjs';
import { StoreObject } from 'src/app/store/reducer/store.reducer';
import { GithubRepository, Owner } from './../../../models/github-repositories.dto';
import { GithubAPIService } from './../../../service/github-api.service';
import { setRepositories, setUserInfo } from './../../../store/actions/store.actions';
import { getSearchString, getUserRepositories, getUserInfo } from './../../../store/selectors/store.selector';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<boolean>();
  userRepositories!: GithubRepository[] | null;
  owner!: Owner | null;

  constructor(
    private store: Store<{ store: StoreObject }>,
    private githubService: GithubAPIService
  ) {
  }

  ngOnInit() {
    this.store
      .select(getSearchString)
      .pipe(map((searchString) => this.getGithubUser(searchString)))
      .subscribe();
    this.store
      .select(getUserRepositories)
      .pipe(
        map((userRepos) => this.userRepositories = userRepos)
        )
      .subscribe();
    this.store
      .select(getUserInfo)
      .pipe(map((userInfo) => this.owner = userInfo))
      .subscribe();
  }

  getGithubUser(searchString: string): any {
    if (searchString != null && searchString != '') {
      this.githubService
        .getRepositories(searchString)
        .subscribe((res: GithubRepository[]) => {
          this.store.dispatch(setUserInfo({ userInfo: res[0].owner }));
          this.store.dispatch(setRepositories({ userRepositories: res }));
        })
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next(false);
    this.destroyed$.complete();
    this.store.complete();
  }

}
