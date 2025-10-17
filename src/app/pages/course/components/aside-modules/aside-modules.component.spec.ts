import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideModulesComponent } from './aside-modules.component';

describe('AsideModulesComponent', () => {
  let component: AsideModulesComponent;
  let fixture: ComponentFixture<AsideModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideModulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsideModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
