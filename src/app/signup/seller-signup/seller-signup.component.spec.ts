import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Import HttpClientTestingModule
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule
import { SellerSignupComponent } from './seller-signup.component';

describe('SellerSignupComponent', () => {
  let component: SellerSignupComponent;
  let fixture: ComponentFixture<SellerSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,  // Add HttpClientTestingModule here
        ReactiveFormsModule,      // Add ReactiveFormsModule here
      ],
      declarations: [SellerSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
