import { TestBed } from '@angular/core/testing';
import { sellerAuthGuard } from './seller-auth.guard'; 
describe('sellerAuthGuard', () => {
  let guard: sellerAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [sellerAuthGuard]  // Provide the guard for testing
    });

    guard = TestBed.inject(sellerAuthGuard);  // Inject the guard instance
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();  // Ensure the guard is created successfully
  });
});
