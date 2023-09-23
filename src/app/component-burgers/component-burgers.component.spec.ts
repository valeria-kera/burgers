import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBurgersComponent } from './component-burgers.component';

describe('ComponentBurgersComponent', () => {
  let component: ComponentBurgersComponent;
  let fixture: ComponentFixture<ComponentBurgersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentBurgersComponent]
    });
    fixture = TestBed.createComponent(ComponentBurgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
