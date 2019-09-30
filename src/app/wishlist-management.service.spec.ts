import { TestBed } from '@angular/core/testing';

import { WishlistManagementService } from './wishlist-management.service';

describe('WishlistManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WishlistManagementService = TestBed.get(WishlistManagementService);
    expect(service).toBeTruthy();
  });
});
