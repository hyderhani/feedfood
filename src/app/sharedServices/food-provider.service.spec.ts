import { TestBed } from '@angular/core/testing';

import { FoodProviderService } from './food-provider.service';

describe('FoodProviderService', () => {
  let service: FoodProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
