import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mother-side',
  templateUrl: './mother-side.component.html',
  styleUrls: ['./mother-side.component.scss']
})
export class MotherSideComponent implements OnInit {
  @ViewChild('motherSideForm', { static: false }) motherSideForm: NgForm;
  motherSideFormHeader = 'הצד של אמא 2/4';

  formTxt = 'המשיכו';

  constructor() {}

  ngOnInit() {}

  onSubmitMotherSideForm() {
    console.log(this.motherSideForm.value);
  }
}
