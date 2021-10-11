import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerInfoDialog } from './worker-info-dialog.component';

describe('WorkerInfoDialogComponent', () => {
  let component: WorkerInfoDialog;
  let fixture: ComponentFixture<WorkerInfoDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerInfoDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerInfoDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
