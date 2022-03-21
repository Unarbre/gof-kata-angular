import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextGenerationButtonComponent } from './next-generation-button.component';

describe('RunButtonComponent', () => {
  let component: NextGenerationButtonComponent;
  let fixture: ComponentFixture<NextGenerationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextGenerationButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextGenerationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
