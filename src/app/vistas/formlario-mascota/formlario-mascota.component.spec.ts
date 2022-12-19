import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlarioMascotaComponent } from './formlario-mascota.component';

describe('FormlarioMascotaComponent', () => {
  let component: FormlarioMascotaComponent;
  let fixture: ComponentFixture<FormlarioMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlarioMascotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormlarioMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
