import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { HeadersComponent } from './headers.component';  // Import your component

describe('HeadersComponent', () => {
  let component: HeadersComponent;
  let fixture: ComponentFixture<HeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadersComponent],
      imports: [HttpClientModule]  // Add HttpClientModule here
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
