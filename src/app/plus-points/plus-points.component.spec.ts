import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusPointsComponent } from './plus-points.component';

describe('PlusPointsComponent', () => {
  let component: PlusPointsComponent;
  let fixture: ComponentFixture<PlusPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlusPointsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlusPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
