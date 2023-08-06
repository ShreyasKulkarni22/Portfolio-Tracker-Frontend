import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyprofileComponent } from './companyprofile.component';

describe('CompanyprofileComponent', () => {
  let component: CompanyprofileComponent;
  let fixture: ComponentFixture<CompanyprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyprofileComponent]
    });
    fixture = TestBed.createComponent(CompanyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
