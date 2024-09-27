import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutpageComponent } from './aboutpage.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

describe('AboutpageComponent', () => {
  let component: AboutpageComponent;
  let fixture: ComponentFixture<AboutpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutpageComponent, RouterModule, CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
