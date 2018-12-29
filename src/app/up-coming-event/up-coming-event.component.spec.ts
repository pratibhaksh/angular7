import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpComingEventComponent } from './up-coming-event.component';

describe('UpComingEventComponent', () => {
  let component: UpComingEventComponent;
  let fixture: ComponentFixture<UpComingEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpComingEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpComingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
