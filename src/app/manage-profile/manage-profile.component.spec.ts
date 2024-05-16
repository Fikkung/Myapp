import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeProfileComponent } from './manage-profile.component';

describe('ManageProfileComponent', () => {
  let component: MangeProfileComponent;
  let fixture: ComponentFixture<MangeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MangeProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MangeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
