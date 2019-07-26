import { Component, OnInit, ViewChild, Input, ElementRef } from "@angular/core";
import { ControlContainer, NgForm } from "@angular/forms";

@Component({
  selector: "app-mother",
  templateUrl: "./mother.component.html",
  styleUrls: ["./mother.component.scss"],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MotherComponent implements OnInit {
  /* @ViewChild("motherForm", { static: false }) motherForm: NgForm; */
  motherFormHeader = "הצד של אמא 2/4";
  genders = ["male", "female"];
  formTxt = "המשיכו";
  datePattern =
    "(0?[1-9]|[12]d|30|31)[^wd\r\n:](0?[1-9]|1[0-2])[^wd\r\n:]([1]{1}[0-9]{3}|[2]{1}[0]{1}[0-1]{1}[0-9]{1})|([1]{1}[0-9]{3}|[2]{1}[0]{1}[0-1]{1}[0-9]{1})";
  isAlive = true;
  file: File | null;
  uploadBtnTxt = "הוסיפו תמונה";
  @Input() url = "";

  constructor() {}

  ngOnInit() {}

  onUploadFile(event) {
    console.log(event);

    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files[0]);
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
      this.uploadBtnTxt = "שנו תמונה";
    }
  }
  /* 
  onSubmitMotherForm() {
    console.log(this.motherForm.value);
  } */
}
