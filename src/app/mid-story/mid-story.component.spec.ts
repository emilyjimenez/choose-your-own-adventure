import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidStoryComponent } from './mid-story.component';

describe('MidStoryComponent', () => {
  let component: MidStoryComponent;
  let fixture: ComponentFixture<MidStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
