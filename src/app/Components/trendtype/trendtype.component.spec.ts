import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendtypeComponent } from './trendtype.component';

describe('TrendtypeComponent', () => {
  let component: TrendtypeComponent;
  let fixture: ComponentFixture<TrendtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
