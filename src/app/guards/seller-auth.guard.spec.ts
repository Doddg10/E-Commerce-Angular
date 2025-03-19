import { TestBed } from '@angular/core/testing';
import { sellerAuthGuard } from './seller-auth.guard';
import { SellerSignupService } from '../services/seller-signup.service';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

describe('sellerAuthGuard', () => {
  let guard: sellerAuthGuard;
  let sellerSignupServiceMock: jasmine.SpyObj<SellerSignupService>;
  let isLoggedInSubject: BehaviorSubject<boolean>;

  beforeEach(() => {
    isLoggedInSubject = new BehaviorSubject<boolean>(true);  // Mocking the BehaviorSubject

    sellerSignupServiceMock = jasmine.createSpyObj('SellerSignupService', ['isSellerLoggedIn']);
    sellerSignupServiceMock.isSellerLoggedIn = isLoggedInSubject;  // Providing mocked BehaviorSubject

    TestBed.configureTestingModule({
      providers: [
        sellerAuthGuard,
        { provide: SellerSignupService, useValue: sellerSignupServiceMock },
      ]
    });
    guard = TestBed.inject(sellerAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });


  it('should allow activation if customer is logged in', () => {
    spyOn(localStorage, 'getItem').and.returnValue('admin');  // Mocking localStorage
    
    // Mocking ActivatedRouteSnapshot and RouterStateSnapshot
    const route: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
    const state: RouterStateSnapshot = {} as RouterStateSnapshot;

    const result = guard.canActivate(route, state);
    
    expect(result).toBeTrue();  // Expect result to be true directly without subscribing
  });
});