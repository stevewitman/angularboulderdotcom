import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlackInviteComponent } from './slack-invite.component';

describe('SlackInviteComponent', () => {
  let component: SlackInviteComponent;
  let fixture: ComponentFixture<SlackInviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlackInviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlackInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
