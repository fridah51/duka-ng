import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsModalComponent } from './ms-modal.component';

describe('MsModalComponent', () => {
  let component: MsModalComponent;
  let fixture: ComponentFixture<MsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
