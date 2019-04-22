/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Recebe3Component } from './recebe3.component';

describe('Recebe3Component', () => {
  let component: Recebe3Component;
  let fixture: ComponentFixture<Recebe3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recebe3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Recebe3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
