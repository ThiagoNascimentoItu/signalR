/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecebeComponent } from './recebe.component';

describe('RecebeComponent', () => {
  let component: RecebeComponent;
  let fixture: ComponentFixture<RecebeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecebeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecebeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
