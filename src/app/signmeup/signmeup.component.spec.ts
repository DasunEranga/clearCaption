/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SignmeupComponent } from './signmeup.component';

describe('SignmeupComponent', () => {
  let component: SignmeupComponent;
  let fixture: ComponentFixture<SignmeupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignmeupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignmeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
