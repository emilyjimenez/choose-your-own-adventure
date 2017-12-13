import { Injectable } from '@angular/core';
import { STORIES } from './mock-story';

@Injectable()
export class StoryService {

  constructor() { }

  getStories() {
    return STORIES;
  }

  getStoryById(storyId: number) {
    for(var i = 0; i <= STORIES.length - 1; i++) {
      if (STORIES[i].id === storyId){
        return STORIES[i];
      }
    }
  }

}
