import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { SellerSignupService } from './seller-signup.service';  // Import your service

describe('SellerSignupService', () => {
  let service: SellerSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],  // Add HttpClientModule here
      providers: [SellerSignupService]  // Provide your service here
    });
    service = TestBed.inject(SellerSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
