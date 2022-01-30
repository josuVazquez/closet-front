import { TestBed } from '@angular/core/testing';

import { KebabMenuService } from './kebab-menu.service';

describe('KebabMenuService', () => {
  let service: KebabMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KebabMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
