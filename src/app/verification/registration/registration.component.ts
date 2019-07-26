import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  @ViewChild("registrationForm", { static: false }) registrationForm: NgForm;
  registrationHeader = "הרשמה";
  formSubmitted = false;

  constructor() {}

  ngOnInit() {}

  onSubmit() {}
}
