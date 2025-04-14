import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOption2Component } from './table-option2.component';

describe('TableOption2Component', () => {
  let component: TableOption2Component;
  let fixture: ComponentFixture<TableOption2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableOption2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableOption2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
