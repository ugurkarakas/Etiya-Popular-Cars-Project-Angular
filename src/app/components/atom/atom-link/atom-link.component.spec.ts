/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AtomLinkComponent } from './atom-link.component';

describe('AtomLinkComponent', () => {
  let component: AtomLinkComponent;
  let fixture: ComponentFixture<AtomLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
