import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { routing } from './app.routing';
import { StoryComponent } from './story/story.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ProgressComponent } from './progress/progress.component';
import { MidStoryComponent } from './mid-story/mid-story.component';
import { EndStoryComponent } from './end-story/end-story.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    StoryComponent,
    UserDetailComponent,
    ProgressComponent,
    MidStoryComponent,
    EndStoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
