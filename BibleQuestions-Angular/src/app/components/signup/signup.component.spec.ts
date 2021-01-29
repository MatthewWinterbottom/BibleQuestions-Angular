import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ]
    })
    .compileComponents();
  });

  let firstName;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
    })
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    firstName = fixture.nativeElement.querySelector('[name="firstName"][type="text"]');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the api post response should return true', () => {
    var response = component.signUp();
    expect(response).toBeTruthy();
  });

  it('should have form fields', () => {
    var firstName = fixture.nativeElement.querySelector('[name="firstName"][type="text"]');
    var surname = fixture.nativeElement.querySelector('[name="surname"][type="text"]');
    var email = fixture.nativeElement.querySelector('[name="email"][type="email"]');
    var password = fixture.nativeElement.querySelector('[name="password"][type="password"]');
    var confirmPassword = fixture.nativeElement.querySelector('[name="confirmPassword"][type="password"]');

    expect(firstName).toBeTruthy();
    expect(surname).toBeTruthy();
    expect(email).toBeTruthy();
    expect(password).toBeTruthy();
    expect(confirmPassword).toBeTruthy();
  });

  it('When first loaded, we should have the default first name', () => {
    expect(firstName.textContent).toBe(component.model.firstName);
  })

  it('When we update the first name in model, it should update in the dom', () => {
    const exampleName = 'Steven';
    component.model.firstName = exampleName;
    fixture.detectChanges();
    expect(firstName.getAttribute('ng-reflect-model')).toContain(exampleName);
  })
});
