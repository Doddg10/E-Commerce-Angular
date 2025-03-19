import { TestBed } from '@angular/core/testing';
import { customerAuthGuard } from './customer-auth.guard'; 

describe('customerAuthGuard', () => {
  let guard: customerAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [customerAuthGuard]  // Provide the guard for testing
    });

    guard = TestBed.inject(customerAuthGuard);  // Inject the guard instance
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();  // Ensure the guard is created successfully
  });
});
