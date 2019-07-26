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
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-generic-input",
  templateUrl: "./generic-input.component.html",
  styleUrls: ["./generic-input.component.scss"]
})
export class GenericInputComponent
  implements ControlValueAccessor, Validator, OnInit {
  @ViewChild("input", { static: false }) input: ElementRef;
  disabled;

  @Input() type = "text";
  @Input() isRequired: boolean = false;
  @Input() pattern: string = null;
  @Input() label: string = null;
  @Input() placeholder: string;
  @Input() errorMsg: string;
  faCheck = faCheck;
  faTimes = faTimes;

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

    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }

    control.setValidators(validators);
    control.updateValueAndValidity();
  }

  onChange(event) {}

  onTouched() {}

  writeValue(obj: any): void {
    this.input.nativeElement.value = obj;
  }
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
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }

    return validators;
  }
}
