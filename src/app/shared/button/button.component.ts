import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent implements OnInit {
  @Input() buttonText: string;
  @Input() disabledCondition: boolean;
  @Output() clicked = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onClicked() {
    this.clicked.emit();
  }
}
