import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs'; // Import for mocking observable values

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,  // Add HttpClientTestingModule here
        ReactiveFormsModule,      // Add ReactiveFormsModule here
      ],
      declarations: [ProductDetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { productId: '123' } },  // Mocked route parameter
            params: of({ productId: '123' })  // Mocking params as observable
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
