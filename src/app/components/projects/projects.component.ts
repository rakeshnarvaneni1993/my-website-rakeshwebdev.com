import {Component,OnInit,ViewChild} from '@angular/core';
import {GithubService} from "../../services/github.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  gitHubData;

  @ViewChild('clickButton') clickButton;

  constructor(private gitHub: GithubService) { }

  ngOnInit() {
    this.clickButton.nativeElement.click();
    this.gitHub.getListOfRepositories()
      .subscribe(
        (data) => {
          this.gitHubData = JSON.parse(data['_body']);
        },
        (err) => {
          alert(err);
        }
      );
  }

}
