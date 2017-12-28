import { Component, OnInit } from '@angular/core';
import {GithubService} from "../../services/github.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  gitHubData;

  constructor(private gitHub: GithubService) { }

  ngOnInit() {
    this.gitHub.getListOfRepositories()
      .subscribe(
        (data) => {
          this.gitHubData = JSON.parse(data['_body']);
          console.log(JSON.parse(data['_body']));
        },
        (err) => {
          console.log(err);
        }
      );
  }

}
