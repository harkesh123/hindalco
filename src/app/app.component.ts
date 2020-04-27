import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  formGroup = new FormGroup({
    one: new FormControl(),
  });
  source: string = "";
  routes: string = "";
  destation: string = "";
  elements: any = [
    {
      route: "Route One",
      source: "Source Two",
      destation: "Destation Three",
      startTime: "11:00:00 21-April-20",
    },
    {
      route: "Route two",
      source: "Source Three",
      destation: "Destation One",
      startTime: "12:10:00 23-April-20",
    },
    {
      route: "Route One",
      source: "Source One",
      destation: "Destation Three",
      startTime: "21:03:00 20-April-20",
    },
  ];

  historicalElements: any = [
    {
      route: "Route two",
      source: "Source",
      destation: "Destation Three",
      startTime: "13:02:00 03-April-20",
      endTime: "12:00:00 03-April-20",
    },
    {
      route: "Route One",
      source: "Source One",
      destation: "Destation One",
      startTime: "14:03:00 14-April-20",
      endTime: "01:00:00 05-April-20",
    },
    {
      route: "Route Three",
      source: "Source One",
      destation: "Destation One",
      startTime: "21:00:00 23-April-20",
      endTime: "15:00:00 13-April-20",
    },
  ];

  title = "hindalco";

  selectValue(event: any) {
    console.log("var", event);
  }
}
