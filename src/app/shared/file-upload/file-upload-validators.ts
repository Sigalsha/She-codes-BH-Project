import { Directive } from "@angular/core";
import {
  NG_VALIDATORS,
  FormControl,
  ValidatorFn,
  Validator
} from "@angular/forms";

@Directive({
  selector: "[fileUploadValidator][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: FileUploadValidator,
      multi: true
    }
  ]
})
export class FileUploadValidator implements Validator {
  validator: ValidatorFn;
  constructor() {
    this.validator = this.fileUploadValidator();
  }
  validate(control: FormControl) {
    return this.validator(control);
  }

  fileUploadValidator(): ValidatorFn {
    return (control: FormControl) => {
      const file = control.value;
      if (file) {
        const types = ["png", "jpg", "svg", "jpeg", "gif", "bmp"];
        const extension = file.split(".")[1].toLowerCase();
        types.forEach(type => {
          if (type.toLowerCase() === extension.toLowerCase()) {
            console.log("safe");
            return null;
          }
          console.log("unsafe");
          return { requiredFileType: true };
        });
      }
      return null;
    };
  }
}

/*  validate(control: AbstractControl): { [key: string]: any } | null {
    const file = control.value;
    if (file) {
      const types = ["png", "jpg", "svg", "jpeg", "gif", "bmp"];
      const extension = file.split(".")[1].toLowerCase();
      types.forEach(type => {
        if (type.toLowerCase() === extension.toLowerCase()) {
          console.log("safe");
          return null;
        }
        console.log("unsafe");
        return { requiredFileType: true };
      });
    }
    return null;
  } */
