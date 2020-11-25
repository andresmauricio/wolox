import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTechsComponent } from './list-techs.component';

describe('ListTechsComponent', () => {
  let component: ListTechsComponent;
  let fixture: ComponentFixture<ListTechsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTechsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTechsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
