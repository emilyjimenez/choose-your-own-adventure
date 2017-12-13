import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Story } from './../story.model';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-mid-story',
  templateUrl: './mid-story.component.html',
  styleUrls: ['./mid-story.component.css'],
  providers: [StoryService]
})
export class MidStoryComponent implements OnInit {
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
    this.router.navigate(['endstory', clickedOption]);
  }
}
