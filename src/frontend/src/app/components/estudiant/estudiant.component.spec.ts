import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantComponent } from './estudiant.component';

describe('EstudiantComponent', () => {
  let component: EstudiantComponent;
  let fixture: ComponentFixture<EstudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
