import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { faFemale, faMale } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  @ViewChild("userDetailsForm", { static: false }) userDetailsForm: NgForm;
  userDetailsHeader = "הפרטים שלי - 1/4";
  genders = ["זכר", "נקבה"];
  formTxt = "המשיכו";
  faFemale = faFemale;
  faMale = faMale;
  datePattern =
    "(0?[1-9]|[12]d|30|31)[^wd\r\n:](0?[1-9]|1[0-2])[^wd\r\n:]([1]{1}[0-9]{3}|[2]{1}[0]{1}[0-1]{1}[0-9]{1})|([1]{1}[0-9]{3}|[2]{1}[0]{1}[0-1]{1}[0-9]{1})";
  @Input() maleClicked: boolean = false;
  @Input() femaleClicked: boolean = false;

  constructor() {}

  ngOnInit() {}

  onClickGender(gender: string) {
    if (gender === "male") {
      this.maleClicked = true;
      this.femaleClicked = false;
    }

    if (gender === "female") {
      this.femaleClicked = true;
      this.maleClicked = false;
    }
  }

  onSubmitUserDetailsForm() {
    console.log(this.userDetailsForm.value);
  }
}
