import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class GithubService {

  constructor(private http: Http) { }

  getListOfRepositories() {
    return this.http.get('https://api.github.com/users/rakeshnarvaneni1993/repos');
  }

}
