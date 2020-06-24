import { Component, OnInit, ViewChild } from "@angular/core";
import { DataService } from "../services/data.service";
// import * as moment from "moment";
import { Chart } from "chart.js";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  @ViewChild("barCanvas", { static: true }) barCanvas;

  barChart: any;
  public searchTerm: string = "";
  public items: any;
  public things: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.setFilteredItems();
    this.barChartMethod();
  }

  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);
    const filterDateAndTotal = this.items
      .sort(function (a, b) {
        return b.total_visits - a.total_visits;
      })
      .slice(0, 5);
    this.things = filterDateAndTotal;
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: [
          this.things[0].Island_name,
          this.things[1].Island_name,
          this.things[2].Island_name,
          this.things[3].Island_name,
          this.things[4].Island_name,
        ],
        datasets: [
          {
            label: "# Total visit based on Date selected",
            data: [
              this.things[0].total_visits,
              this.things[1].total_visits,
              this.things[2].total_visits,
              this.things[3].total_visits,
              this.things[4].total_visits,
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}
