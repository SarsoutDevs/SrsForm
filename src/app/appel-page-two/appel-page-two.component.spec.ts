import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelPageTwoComponent } from './appel-page-two.component';

describe('AppelPageTwoComponent', () => {
  let component: AppelPageTwoComponent;
  let fixture: ComponentFixture<AppelPageTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppelPageTwoComponent]
    });
    fixture = TestBed.createComponent(AppelPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
