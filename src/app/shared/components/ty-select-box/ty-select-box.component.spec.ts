import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TySelectBoxComponent } from './ty-select-box.component';

describe('TySelectBoxComponent', () => {
  let component: TySelectBoxComponent;
  let fixture: ComponentFixture<TySelectBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TySelectBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TySelectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
