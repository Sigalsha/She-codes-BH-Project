import { Component, OnInit, Input, ElementRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FileUploadService } from "./file-upload.service";
/* import { ControlContainer, NgForm } from "@angular/forms"; */

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.scss"]
  /*   viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
   */
})
export class FileUploadComponent implements OnInit {
  uploadBtnTxt = "הוסיפו תמונה";
  @Input() imageTitle: string = "";
  @Input() url = "";
  @Input() fileError: boolean = false;

  constructor(
    private http: HttpClient,
    private fileUploadService: FileUploadService
  ) {}

  ngOnInit() {}

  onUploadFile(event) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    /* const { files } = event.target; */
    if (file) {
      console.log(file);
      if (file.type.split("/")[0].toLowerCase() !== "image") {
        this.fileError = true;
        return;
      } else {
        this.fileError = false;
      }

      reader.readAsDataURL(file);
      reader.onload = (event: any) => {
        this.url = event.target.result;
        console.log(this.url);
      };
      this.uploadBtnTxt = "שנו תמונה";
      this.fileUploadService.uploadImage(file);
    }
  }

  onTouched() {}

  /* writeValue(value: null) {
    this.host.nativeElement.value = "";
    this.file = null;
  }
  registerOnChange(fn: any): void {
    this.imageForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.imageForm.disabled : this.imageForm.enabled;
  } */
}
