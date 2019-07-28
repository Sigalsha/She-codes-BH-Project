import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Self
} from "@angular/core";

import {
  ControlValueAccessor,
  Validator,
  AbstractControl,
  ValidatorFn,
  Validators,
  NgControl
} from "@angular/forms";

@Component({
  selector: "app-generic-radio-button",
  templateUrl: "./generic-radio-button.component.html",
  styleUrls: ["./generic-radio-button.component.scss"]
})
export class GenericRadioButtonComponent
  implements ControlValueAccessor, Validator, OnInit {
  @ViewChild("radioInput", { static: false }) radioInput: ElementRef;
  @Input() radioValue = "";
  @Input() isRequired: boolean = false;
  @Input() errorMsg: string;
  activeLabel = "בחרו:";
  genders = ["male", "female"];
  genericImagePath: string = "../../../assets/images/{{gender}}.svg";
  chosenImagePath: string = "../../../assets/images/{{this.radioValue}}.svg";
  private onTouch: Function;
  private onModelChange: Function;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit() {
    const { control } = this.controlDir;
    const validators: ValidatorFn[] = control.validator
      ? [control.validator]
      : [];

    if (this.isRequired) {
      validators.push(Validators.required);
    }

    control.setValidators(validators);
    control.updateValueAndValidity();
  }

  selectType(value: string) {
    this.radioInput.nativeElement.value = value;
    this.radioValue = value;
    console.log(this.radioValue);
    this.onModelChange(value);
    this.onTouch();
    this.activeLabel = "שינוי";
  }

  writeValue(obj: string): void {
    this.radioInput.nativeElement.checked = obj;
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  validate(c: AbstractControl): { [key: string]: any } {
    const validators: ValidatorFn[] = [];
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    return validators;
  }
}
