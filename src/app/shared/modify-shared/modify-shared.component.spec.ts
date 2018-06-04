import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifySharedComponent } from './modify-shared.component';

describe('ModifySharedComponent', () => {
  let component: ModifySharedComponent;
  let fixture: ComponentFixture<ModifySharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifySharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifySharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
