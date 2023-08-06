import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockanalysisComponent } from './stockanalysis.component';

describe('StockanalysisComponent', () => {
  let component: StockanalysisComponent;
  let fixture: ComponentFixture<StockanalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockanalysisComponent]
    });
    fixture = TestBed.createComponent(StockanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
