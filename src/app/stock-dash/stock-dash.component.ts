import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ApiserviceService } from '../apiservice.service';
import { Stock } from '../stock';

@Component({
  selector: 'app-stock-dash',
  templateUrl: './stock-dash.component.html',
  styleUrls: ['./stock-dash.component.css'],
})
export class StockDashComponent implements OnInit {
  stockInput = '';
  data = [];
  Down =
    'https://th.bing.com/th/id/OIP.1OIaU6Z-2_3y5Obm5Y9HqgHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7';
  up =
    'https://th.bing.com/th/id/OIP.qa866g-LILg2wop5l3huUAHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7';

  data1 = JSON.parse(localStorage.getItem('data'));
  constructor(private gser: ApiserviceService) {
    const previousData = localStorage.getItem('previousData');
    let dataCheck = JSON.parse(previousData);
    console.log(JSON.parse(previousData));
    if (!!dataCheck && dataCheck.length > 0) {
      this.data = dataCheck;
    }
  }

  ngOnInit() {}

  trackStock() {
    this.gser.getQandS(this.stockInput).subscribe((res) => {
      console.log('Response Q&S***', res);
      res['searchKeyWord'] = this.stockInput;
      this.data.push(res);
      let storeData = JSON.stringify(this.data);
      localStorage.setItem('previousData', storeData);
      //localStorage.setItem('data', JSON.stringify(this.data));
    });
  }
  remove(item) {
    console.log(item);
    this.data = this.data.filter(
      (elm) => elm['searchKeyWord'] !== item['searchKeyWord']
    );
    let storeData = JSON.stringify(this.data);
    localStorage.setItem('previousData', storeData);
    // localStorage.removeItem('data');
    // this.data.pop();
  }
}
