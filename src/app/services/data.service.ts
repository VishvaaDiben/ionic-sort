import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable({
  providedIn: "root",
})
export class DataService {
  public items: any = [];

  constructor(public data: AngularFireDatabase) {
    this.getDataFromFireBase();
// subscribe data not returning data to global variable, so the first app loads with static.
// can try remove this.items below, and load app. Then search will populate back data from subscribed database.
    this.items = 
    [
      {
        "Island_name": "Pulau Manukan",
        "Visitor_date": "6/3/2017",
        "total_visits": 4690
      },
      {
        "Island_name": "Pulau Tioman",
        "Visitor_date": "6/3/2017",
        "total_visits": 4454
      },
      {
        "Island_name": "Pulau Sapi",
        "Visitor_date": "4/3/2017",
        "total_visits": 4070
      },
      {
        "Island_name": "Pulau Redang",
        "Visitor_date": "3/3/2017",
        "total_visits": 3687
      },
      {
        "Island_name": "Pulau Dayang",
        "Visitor_date": "1/3/2017",
        "total_visits": 3156
      },
      {
        "Island_name": "Pulau Redang",
        "Visitor_date": "7/3/2017",
        "total_visits": 2880
      },
      {
        "Island_name": "Pulau Mabul",
        "Visitor_date": "7/3/2017",
        "total_visits": 2793
      },
      {
        "Island_name": "Pulau Manukan",
        "Visitor_date": "7/3/2017",
        "total_visits": 2785
      },
      {
        "Island_name": "Pulau Sapi",
        "Visitor_date": "6/3/2017",
        "total_visits": 2758
      },
      {
        "Island_name": "Pulau Sipadan",
        "Visitor_date": "7/3/2017",
        "total_visits": 2710
      },
      {
        "Island_name": "Pulau Sapi",
        "Visitor_date": "7/3/2017",
        "total_visits": 2677
      },
      {
        "Island_name": "Pulau Kapas",
        "Visitor_date": "7/3/2017",
        "total_visits": 2645
      },
      {
        "Island_name": "Pulau Redang",
        "Visitor_date": "5/3/2017",
        "total_visits": 2390
      },
      {
        "Island_name": "Pulau Tioman",
        "Visitor_date": "7/3/2017",
        "total_visits": 2386
      },
      {
        "Island_name": "Pulau Kapas",
        "Visitor_date": "4/3/2017",
        "total_visits": 2374
      },
      {
        "Island_name": "Pulau Cenang",
        "Visitor_date": "5/3/2017",
        "total_visits": 2295
      },
      {
        "Island_name": "Pulau Cenang",
        "Visitor_date": "6/3/2017",
        "total_visits": 2282
      },
      {
        "Island_name": "Pulau Sipadan",
        "Visitor_date": "5/3/2017",
        "total_visits": 2263
      },
      {
        "Island_name": "Pulau Mabul",
        "Visitor_date": "6/3/2017",
        "total_visits": 2223
      },
      {
        "Island_name": "Pulau Cenang",
        "Visitor_date": "3/3/2017",
        "total_visits": 2164
      },
      {
        "Island_name": "Pulau Kapas",
        "Visitor_date": "3/3/2017",
        "total_visits": 2108
      },
      {
        "Island_name": "Pulau Sipadan",
        "Visitor_date": "4/3/2017",
        "total_visits": 2103
      },
      {
        "Island_name": "Pulau Tioman",
        "Visitor_date": "5/3/2017",
        "total_visits": 2090
      },
      {
        "Island_name": "Pulau Cenang",
        "Visitor_date": "7/3/2017",
        "total_visits": 2046
      },
      {
        "Island_name": "Pulau Dayang",
        "Visitor_date": "4/3/2017",
        "total_visits": 2030
      },
      {
        "Island_name": "Pulau Sipadan",
        "Visitor_date": "3/3/2017",
        "total_visits": 2011
      },
      {
        "Island_name": "Pulau Cenang",
        "Visitor_date": "4/3/2017",
        "total_visits": 1986
      },
      {
        "Island_name": "Sinar Harian",
        "Visitor_date": "2/3/2017",
        "total_visits": 1972
      },
      {
        "Island_name": "Sinar Harian",
        "Visitor_date": "3/3/2017",
        "total_visits": 1960
      },
      {
        "Island_name": "Pulau Dayang",
        "Visitor_date": "2/3/2017",
        "total_visits": 1928
      },
      {
        "Island_name": "Pulau Mabul",
        "Visitor_date": "4/3/2017",
        "total_visits": 1927
      },
      {
        "Island_name": "Pulau Mabul",
        "Visitor_date": "2/3/2017",
        "total_visits": 1920
      },
      {
        "Island_name": "Sinar Harian",
        "Visitor_date": "6/3/2017",
        "total_visits": 1909
      },
      {
        "Island_name": "Pulau Manukan",
        "Visitor_date": "1/3/2017",
        "total_visits": 1903
      },
      {
        "Island_name": "Pulau Sipadan",
        "Visitor_date": "6/3/2017",
        "total_visits": 1896
      },
      {
        "Island_name": "Pulau Dayang",
        "Visitor_date": "5/3/2017",
        "total_visits": 1834
      },
      {
        "Island_name": "Pulau Dayang",
        "Visitor_date": "7/3/2017",
        "total_visits": 1827
      },
      {
        "Island_name": "Pulau Manukan",
        "Visitor_date": "2/3/2017",
        "total_visits": 1764
      },
      {
        "Island_name": "Pulau Manukan",
        "Visitor_date": "4/3/2017",
        "total_visits": 1734
      },
      {
        "Island_name": "Pulau Kapas",
        "Visitor_date": "6/3/2017",
        "total_visits": 1707
      },
      {
        "Island_name": "Pulau Sipadan",
        "Visitor_date": "1/3/2017",
        "total_visits": 1706
      },
      {
        "Island_name": "Pulau Kapas",
        "Visitor_date": "1/3/2017",
        "total_visits": 1689
      },
      {
        "Island_name": "Pulau Redang",
        "Visitor_date": "4/3/2017",
        "total_visits": 1684
      },
      {
        "Island_name": "Pulau Tioman",
        "Visitor_date": "1/3/2017",
        "total_visits": 1664
      },
      {
        "Island_name": "Pulau Tioman",
        "Visitor_date": "2/3/2017",
        "total_visits": 1645
      },
      {
        "Island_name": "Pulau Tioman",
        "Visitor_date": "4/3/2017",
        "total_visits": 1634
      },
      {
        "Island_name": "Pulau Manukan",
        "Visitor_date": "5/3/2017",
        "total_visits": 1630
      },
      {
        "Island_name": "Sinar Harian",
        "Visitor_date": "5/3/2017",
        "total_visits": 1564
      },
      {
        "Island_name": "Pulau Cenang",
        "Visitor_date": "1/3/2017",
        "total_visits": 1541
      },
      {
        "Island_name": "Pulau Kapas",
        "Visitor_date": "2/3/2017",
        "total_visits": 1447
      },
      {
        "Island_name": "Pulau Sapi",
        "Visitor_date": "3/3/2017",
        "total_visits": 1400
      },
      {
        "Island_name": "Pulau Sapi",
        "Visitor_date": "1/3/2017",
        "total_visits": 1347
      },
      {
        "Island_name": "Pulau Tioman",
        "Visitor_date": "3/3/2017",
        "total_visits": 1324
      },
      {
        "Island_name": "Sinar Harian",
        "Visitor_date": "7/3/2017",
        "total_visits": 1302
      },
      {
        "Island_name": "Pulau Dayang",
        "Visitor_date": "6/3/2017",
        "total_visits": 1254
      },
      {
        "Island_name": "Pulau Redang",
        "Visitor_date": "6/3/2017",
        "total_visits": 1238
      },
      {
        "Island_name": "Pulau Sipadan",
        "Visitor_date": "2/3/2017",
        "total_visits": 1225
      },
      {
        "Island_name": "Pulau Redang",
        "Visitor_date": "1/3/2017",
        "total_visits": 1149
      },
      {
        "Island_name": "Pulau Mabul",
        "Visitor_date": "5/3/2017",
        "total_visits": 1119
      },
      {
        "Island_name": "Sinar Harian",
        "Visitor_date": "4/3/2017",
        "total_visits": 1063
      },
      {
        "Island_name": "Pulau Manukan",
        "Visitor_date": "3/3/2017",
        "total_visits": 1031
      },
      {
        "Island_name": "Pulau Dayang",
        "Visitor_date": "3/3/2017",
        "total_visits": 1015
      },
      {
        "Island_name": "Pulau Mabul",
        "Visitor_date": "3/3/2017",
        "total_visits": 959
      },
      {
        "Island_name": "Pulau Sapi",
        "Visitor_date": "2/3/2017",
        "total_visits": 943
      },
      {
        "Island_name": "Pulau Cenang",
        "Visitor_date": "2/3/2017",
        "total_visits": 911
      },
      {
        "Island_name": "Sinar Harian",
        "Visitor_date": "1/3/2017",
        "total_visits": 823
      },
      {
        "Island_name": "Pulau Sapi",
        "Visitor_date": "5/3/2017",
        "total_visits": 740
      },
      {
        "Island_name": "Pulau Redang",
        "Visitor_date": "2/3/2017",
        "total_visits": 575
      },
      {
        "Island_name": "Pulau Mabul",
        "Visitor_date": "1/3/2017",
        "total_visits": 500
      },
      {
        "Island_name": "Pulau Kapas",
        "Visitor_date": "5/3/2017",
        "total_visits": 1167
      }
     ]

  }



  getDataFromFireBase() {
    this.data
      .list("/")
      .valueChanges()
      .subscribe((fireBaseData:any) => {
        this.items = fireBaseData;
      },
      ( error: any) => {
        console.log(error);
      });
      return this.items
  }



  filterItems(searchTerm) {
    return this.items.filter((item) => {
      return (
        item.Visitor_date.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      );
    });
  }
}

