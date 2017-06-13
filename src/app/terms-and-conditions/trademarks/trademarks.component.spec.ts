/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrademarksComponent } from './trademarks.component';

describe('TrademarksComponent', () => {
  let component: TrademarksComponent;
  let fixture: ComponentFixture<TrademarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrademarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrademarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
