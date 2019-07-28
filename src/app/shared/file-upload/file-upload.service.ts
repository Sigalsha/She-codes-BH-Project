import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class FileUploadService {
  constructor(private http: HttpClient) {}

  uploadImage(image: File) {
    console.log(image);
    this.http
      .post("https://she-codes-bh-project.herokuapp.com/resize-image/", image)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
}
