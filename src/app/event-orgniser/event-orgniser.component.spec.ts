import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventOrgniserComponent } from './event-orgniser.component';

describe('EventOrgniserComponent', () => {
  let component: EventOrgniserComponent;
  let fixture: ComponentFixture<EventOrgniserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventOrgniserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventOrgniserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
