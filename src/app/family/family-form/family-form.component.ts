import { Component, OnInit, forwardRef } from "@angular/core";
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormGroup,
  FormControl,
  Validator,
  Validators,
  AbstractControl,
  ValidationErrors
} from "@angular/forms";

@Component({
  selector: "app-family-form",
  templateUrl: "./family-form.component.html",
  styleUrls: ["./family-form.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FamilyFormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FamilyFormComponent),
      multi: true
    }
  ]
})
export class FamilyFormComponent
  implements OnInit, ControlValueAccessor, Validator {
  public familyForm: FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    youthName: new FormControl(""),
    gender: new FormControl("", [Validators.required]),
    birthDate: new FormControl("", [Validators.required]),
    birthPlace: new FormControl("", [Validators.required]),
    isAlive: new FormControl(""),
    deathDate: new FormControl(""),
    deathPlace: new FormControl("")
  });

  genders = ["male", "female"];
  datePattern =
    "(0?[1-9]|[12]d|30|31)[^wd\r\n:](0?[1-9]|1[0-2])[^wd\r\n:]([1]{1}[0-9]{3}|[2]{1}[0]{1}[0-1]{1}[0-9]{1})|([1]{1}[0-9]{3}|[2]{1}[0]{1}[0-1]{1}[0-9]{1})";
  isAlive = true;

  constructor() {}

  ngOnInit() {}

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    val && this.familyForm.setValue(val, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    console.log("on change");
    this.familyForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.familyForm.disable() : this.familyForm.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    console.log("family validation");
    return this.familyForm.valid
      ? null
      : {
          invalidForm: {
            valid: false,
            message: "family fields are invalid"
          }
        };
  }
}
