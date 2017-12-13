import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { StoryComponent } from './story/story.component';
import { ProgressComponent } from './progress/progress.component';
import { MidStoryComponent } from './mid-story/mid-story.component';
import { EndStoryComponent } from './end-story/end-story.component';

const appRoutes: Routes = [
  {
    path: '',
    component: UserFormComponent
  },
  {
    path: 'story',
    component: StoryComponent
  },
  {
    path: 'story/:id',
    component: ProgressComponent
  },
  {
    path: 'midstory/:id',
    component: MidStoryComponent
  },
  {
    path: 'endstory/:id',
    component: EndStoryComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
