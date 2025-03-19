import { TestBed } from '@angular/core/testing';
import { customerAuthGuard } from './customer-auth.guard';
import { CustomerSignupService } from '../services/customer-signup.service';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

describe('customerAuthGuard', () => {
  let guard: customerAuthGuard;
  let customerSignupServiceMock: jasmine.SpyObj<CustomerSignupService>;
  let isLoggedInSubject: BehaviorSubject<boolean>;

  beforeEach(() => {
    isLoggedInSubject = new BehaviorSubject<boolean>(true);  // Mocking the BehaviorSubject

    customerSignupServiceMock = jasmine.createSpyObj('CustomerSignupService', ['isCustomerLoggedIn']);
    customerSignupServiceMock.isCustomerLoggedIn = isLoggedInSubject;  // Providing mocked BehaviorSubject

    TestBed.configureTestingModule({
      providers: [
        customerAuthGuard,
        { provide: CustomerSignupService, useValue: customerSignupServiceMock },
      ]
    });
    guard = TestBed.inject(customerAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow activation if customer is logged in', () => {
    spyOn(localStorage, 'getItem').and.returnValue('customer');  // Mocking localStorage
    
    // Mocking ActivatedRouteSnapshot and RouterStateSnapshot
    const route: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
    const state: RouterStateSnapshot = {} as RouterStateSnapshot;

    const result = guard.canActivate(route, state);
    
    expect(result).toBeTrue();  // Expect result to be true directly without subscribing
  });
});
