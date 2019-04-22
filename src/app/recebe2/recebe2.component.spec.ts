/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Recebe2Component } from './recebe2.component';

describe('Recebe2Component', () => {
  let component: Recebe2Component;
  let fixture: ComponentFixture<Recebe2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recebe2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Recebe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
