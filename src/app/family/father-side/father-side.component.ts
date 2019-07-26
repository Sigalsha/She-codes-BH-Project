import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-father-side",
  templateUrl: "./father-side.component.html",
  styleUrls: ["./father-side.component.scss"]
})
export class FatherSideComponent implements OnInit {
  @ViewChild("fatherSideForm", { static: false }) fatherSideForm: NgForm;
  fatherSideFormHeader = "הצד של אבא 3/4";

  formTxt = "המשיכו";

  constructor() {}

  ngOnInit() {}

  onSubmitMotherSideForm() {
    console.log(this.fatherSideForm.value);
  }
}
