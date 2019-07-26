import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.scss"]
})
export class PopupComponent implements OnInit {
  @Input() primaryContent: string;
  @Input() secondaryContent: string;
  @Output() fadeOut = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onFadeOut() {
    this.fadeOut.emit();
  }
}
