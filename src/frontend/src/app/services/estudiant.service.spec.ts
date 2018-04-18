import { TestBed, inject } from '@angular/core/testing';

import { EstudiantService } from './estudiant.service';

describe('EstudiantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstudiantService]
    });
  });

  it('should be created', inject([EstudiantService], (service: EstudiantService) => {
    expect(service).toBeTruthy();
  }));
});
