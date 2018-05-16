import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamsesComponent } from './ramses.component';

describe('RamsesComponent', () => {
  let component: RamsesComponent;
  let fixture: ComponentFixture<RamsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
