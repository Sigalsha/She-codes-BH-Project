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
  selector: "app-generic-checkbox",
  templateUrl: "./generic-checkbox.component.html",
  styleUrls: ["./generic-checkbox.component.scss"]
})
export class GenericCheckboxComponent
  implements ControlValueAccessor, Validator, OnInit {
  @ViewChild("checkbox", { static: false }) checkbox: ElementRef;

  disabled;
  @Input() type = "checkbox";
  @Input() isRequired: boolean = false;

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

  onChange() {}

  onTouched() {}

  writeValue(obj: any): void {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(c: AbstractControl): { [key: string]: any } {
    const validators: ValidatorFn[] = [];
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    return validators;
  }
}
