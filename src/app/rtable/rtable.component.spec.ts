import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtableComponent } from './rtable.component';

describe('RtableComponent', () => {
  let component: RtableComponent;
  let fixture: ComponentFixture<RtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
