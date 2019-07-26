import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  homeBtnTxt = "כניסה";

  constructor(private router: Router) {}

  ngOnInit() {}

  onClickEnter() {
    this.router.navigate(["/login"], {});
  }
}
