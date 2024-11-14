import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorridosComponent } from './corridos.component';

describe('CorridosComponent', () => {
  let component: CorridosComponent;
  let fixture: ComponentFixture<CorridosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorridosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorridosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
