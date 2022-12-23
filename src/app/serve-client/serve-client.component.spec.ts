import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeClientComponent } from './serve-client.component';

describe('ServeClientComponent', () => {
  let component: ServeClientComponent;
  let fixture: ComponentFixture<ServeClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
