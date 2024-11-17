import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LouderComponent } from './louder.component';

describe('LouderComponent', () => {
  let component: LouderComponent;
  let fixture: ComponentFixture<LouderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LouderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LouderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
