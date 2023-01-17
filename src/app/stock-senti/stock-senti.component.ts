import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-stock-senti',
  templateUrl: './stock-senti.component.html',
  styleUrls: ['./stock-senti.component.css'],
})
export class StockSentiComponent implements OnInit {
  Down =
    'https://th.bing.com/th/id/OIP.1OIaU6Z-2_3y5Obm5Y9HqgHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7';
  up =
    'https://th.bing.com/th/id/OIP.qa866g-LILg2wop5l3huUAHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7';
  stockInput = '';
  monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  value = [];
  stockid: string;

  constructor(
    private gser: ApiserviceService,
    private activatedroute: ActivatedRoute,
    private route: Router
  ) {
    this.activatedroute.params.subscribe((param) => {
      console.log(param['id']);
      this.stockid = param['id'];
    });
  }

  ngOnInit() {
    const storedData = localStorage.getItem('data');
    let dataCheck = JSON.parse(storedData);

    this.trackStock(this.stockid);
  }
  trackStock(id) {
    this.gser.getStockById(id).subscribe((res) => {
      this.value.push(res);
      console.log(res);
    });
  }
  redirectDetailsPage() {
    console.log('stock details');
    let url: string = '';
    this.route.navigateByUrl(url);
  }
}
