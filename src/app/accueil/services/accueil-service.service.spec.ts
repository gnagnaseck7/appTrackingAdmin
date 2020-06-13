import { TestBed } from '@angular/core/testing';

import { AccueilServiceService } from './accueil-service.service';

describe('AccueilServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccueilServiceService = TestBed.get(AccueilServiceService);
    expect(service).toBeTruthy();
  });
});
