import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import * as moment from "moment";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  public searchTerm: string = "";
  public items: any;
  public things: any;

  // todate: any;
  // today: any;
  // selectedDate: any;
  // modifiedData: any;
  

  constructor(private dataService: DataService) {
    // this.today = new Date().toISOString();
  }
  
  ngOnInit() {
    this.setFilteredItems();
    this.checkDataForChart();
  }

  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);
    const filterDateAndTotal= this.items.sort(function (a, b) {
      return  b.total_visits - a.total_visits
    }).slice(0,5);
    this.things = filterDateAndTotal;
  }

  checkDataForChart(){
    console.log("check chart data",this.things)
  }

  // parseDate() {
  //   this.todate = moment(this.selectedDate).format("DD/MM/YYYY");
  // }

}