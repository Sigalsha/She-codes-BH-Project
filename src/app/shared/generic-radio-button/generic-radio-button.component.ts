import {
  Component,
  forwardRef,
  OnInit,
  ChangeDetectionStrategy
} from "@angular/core";

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

const TYPE_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => GenericRadioButtonComponent),
  multi: true
};

@Component({
  selector: "app-generic-radio-button",
  templateUrl: "./generic-radio-button.component.html",
  styleUrls: ["./generic-radio-button.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TYPE_CONTROL_ACCESSOR]
})
export class GenericRadioButtonComponent
  implements OnInit, ControlValueAccessor {
  value = "male";
  genders = ["male", "female"];
  private onTouch: Function;
  private onModelChange: Function;

  constructor() {}

  writeValue(obj: string): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  selectType(value: string) {
    this.value = value;
    this.onModelChange(value);
    this.onTouch();
  }

  ngOnInit() {}
}
