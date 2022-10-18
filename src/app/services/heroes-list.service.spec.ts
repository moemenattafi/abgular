import { TestBed } from '@angular/core/testing';

import { HeroesListService } from './heroes-list.service';

describe('HeroesListService', () => {
  let service: HeroesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
