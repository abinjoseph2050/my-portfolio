import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachPointComponent } from './each-point.component';

describe('EachPointComponent', () => {
  let component: EachPointComponent;
  let fixture: ComponentFixture<EachPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EachPointComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EachPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
