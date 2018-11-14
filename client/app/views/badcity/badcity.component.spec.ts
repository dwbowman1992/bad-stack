import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadcityComponent } from './badcity.component';

describe('BadcityComponent', () => {
  let component: BadcityComponent;
  let fixture: ComponentFixture<BadcityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadcityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
