import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightCountComponentComponent } from './light-count-component.component';

describe('LightCountComponentComponent', () => {
  let component: LightCountComponentComponent;
  let fixture: ComponentFixture<LightCountComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightCountComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightCountComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
