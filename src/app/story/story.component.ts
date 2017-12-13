import { Component, OnInit } from '@angular/core';
import { Story } from './../story.model';
import { Router } from '@angular/router';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  providers: [StoryService]
})
export class StoryComponent implements OnInit {
  userName:string = "Bob";
  stories: Story[];
  originStory: Story;

  constructor(private router: Router, private storyService: StoryService) { }

  ngOnInit() {
    this.stories = this.storyService.getStories();
    this.originStory = this.stories[0];
    console.log(this.originStory.options);
  }

  progressStory(clickedOption: number) {
    this.router.navigate(['story', clickedOption])
  }

}
