import { Component, OnInit, Input } from "@angular/core";
import { ControlContainer, NgForm } from "@angular/forms";

@Component({
  selector: "app-grandfather",
  templateUrl: "./grandfather.component.html",
  styleUrls: ["./grandfather.component.scss"],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class GrandfatherComponent implements OnInit {
  @Input() type = "text";
  @Input() isRequired: boolean = false;
  @Input() pattern: string = null;
  @Input() label: string = null;
  @Input() placeholder: string;
  @Input() errorMsg: string;
  @Input() innerFormTitle: string;
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

  /* onUploadFile(event) {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files[0]);
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
        console.log(event.target);
      };
      this.uploadBtnTxt = "שנו תמונה";
    }
  } */
}
