import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSayComponent } from './client-say.component';

describe('ClientSayComponent', () => {
  let component: ClientSayComponent;
  let fixture: ComponentFixture<ClientSayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
