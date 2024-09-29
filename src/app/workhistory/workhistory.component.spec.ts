import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkhistoryComponent } from './workhistory.component';
import { Apollo } from 'apollo-angular';
import { of } from 'rxjs';

describe('WorkhistoryComponent', () => {
  let component: WorkhistoryComponent;
  let fixture: ComponentFixture<WorkhistoryComponent>;

  beforeEach(async () => {
    let apolloSpy = jasmine.createSpyObj('Apollo', ['watchQuery']);

    await TestBed.configureTestingModule({
      imports: [WorkhistoryComponent],
      providers: [{ provide: Apollo, useValue: apolloSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkhistoryComponent);
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
