import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { CustomerSignupService } from './customer-signup.service';  // Import your service

describe('CustomerSignupService', () => {
  let service: CustomerSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],  // Add HttpClientModule here
      providers: [CustomerSignupService]  // Provide your service here
    });
    service = TestBed.inject(CustomerSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
