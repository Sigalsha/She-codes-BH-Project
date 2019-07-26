import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-verification",
  templateUrl: "./verification.component.html",
  styleUrls: ["./verification.component.scss"]
})
export class VerificationComponent implements OnInit {
  @ViewChild("verificationCodeForm", { static: false })
  verificationCodeForm: NgForm;
  registrationHeader = "הרשמה";

  user = {
    email: String,
    phone: Number,
    agreement: false,
    verificationCode: Number
  };

  registerBtnTxt = "המשיכו";
  verificateBtnTxt = "אישור";

  registrationFormSubmitted = false;
  verificationCodeFormSubmitted = false;
  formSubmitted = false;

  primaryText = "עוד מעט גם אתם תהיו חלק מהסיפור";
  secondaryText = "מוכנים להתחיל?";

  constructor() {}

  ngOnInit() {}

  onSubmitRegistrationForm() {
    this.registrationFormSubmitted = true;
    console.log(this.verificationCodeForm);
    this.user.email = this.verificationCodeForm.value.email;
    this.user.phone = this.verificationCodeForm.value.phone;
    this.user.agreement = this.verificationCodeForm.value.agreement.checked;

    this.verificationCodeForm.reset(this.verificationCodeForm.value);
  }

  onHandleFormSubmitted() {
    this.formSubmitted = true;
  }

  onHandleClick() {
    this.registrationFormSubmitted = true;
  }

  onSubmitVerificationCodeForm() {
    this.verificationCodeFormSubmitted = true;
    this.user.verificationCode = this.verificationCodeForm.value;

    this.verificationCodeForm.reset();
  }
}
