import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Story } from './../story.model';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
  providers: [StoryService]
})
export class ProgressComponent implements OnInit {
  storyId: number;
  storyToDisplay: Story;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private storyService: StoryService
  ){}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.storyId = parseInt(urlParameters['id']);
    });
    this.storyToDisplay = this.storyService.getStoryById(this.storyId);
  }

  progressStoryAgain(clickedOption: number) {
    this.router.navigate(['midstory', clickedOption]);
  }
}
