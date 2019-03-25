import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlaComponent } from './mla.component';

describe('MlaComponent', () => {
  let component: MlaComponent;
  let fixture: ComponentFixture<MlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
