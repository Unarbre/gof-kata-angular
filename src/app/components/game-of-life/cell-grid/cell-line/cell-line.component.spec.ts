import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellLineComponent } from './cell-line.component';

describe('CellLinesComponent', () => {
  let component: CellLineComponent;
  let fixture: ComponentFixture<CellLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
