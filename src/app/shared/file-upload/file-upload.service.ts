import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class FileUploadService {
  constructor(private http: HttpClient) {}

  uploadImage(image: File) {
    console.log(image);
    this.http
      .post("http://fb307452.ngrok.io", image)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
}
