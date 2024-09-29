import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutpageComponent } from './aboutpage.component';
import { Apollo } from 'apollo-angular';
import { of } from 'rxjs';

describe('AboutpageComponent', () => {
  let component: AboutpageComponent;
  let fixture: ComponentFixture<AboutpageComponent>;

  beforeEach(async () => {
    let apolloSpy = jasmine.createSpyObj('Apollo', ['watchQuery']);

    await TestBed.configureTestingModule({
      imports: [AboutpageComponent],
      providers: [{ provide: Apollo, useValue: apolloSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutpageComponent);
    component = fixture.componentInstance;
    apolloSpy.watchQuery.and.returnValue({
      valueChanges: of({}),
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
