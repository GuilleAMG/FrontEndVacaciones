import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondigoTrabajoComponent } from './condigo-trabajo.component';

describe('CondigoTrabajoComponent', () => {
  let component: CondigoTrabajoComponent;
  let fixture: ComponentFixture<CondigoTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondigoTrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondigoTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
