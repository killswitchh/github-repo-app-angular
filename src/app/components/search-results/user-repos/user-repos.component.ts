import { GithubRepository } from './../../../models/github-repositories.dto';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss']
})
export class UserReposComponent {
  @Input() repositories!: GithubRepository[] | null;

}
