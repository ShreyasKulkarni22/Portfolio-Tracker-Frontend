import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsanalysisComponent } from './newsanalysis.component';

describe('NewsanalysisComponent', () => {
  let component: NewsanalysisComponent;
  let fixture: ComponentFixture<NewsanalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsanalysisComponent]
    });
    fixture = TestBed.createComponent(NewsanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
