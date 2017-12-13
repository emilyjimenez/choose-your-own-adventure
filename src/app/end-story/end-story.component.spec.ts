import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndStoryComponent } from './end-story.component';

describe('EndStoryComponent', () => {
  let component: EndStoryComponent;
  let fixture: ComponentFixture<EndStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
