import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, observable } from 'rxjs';
import { Stock } from './stock';

@Injectable()
export class ApiserviceService {
  private link = 'https://finnhub.io/api/v1/quote?symbol=';
  private link1 = 'https://finnhub.io/api/v1/stock/insider-sentiment?symbol=';
  private link2='&from=2022-07-01&to=2022-12-01&token=bu4f8kn48v6uehqi3cqg';
  private key = '&token=bu4f8kn48v6uehqi3cqg';
  public symbolShow:string='';

  // https://finnhub.io/api/v1/search?q=TSLA&token=bu4f8kn48v6uehqi3cqg

  constructor(private http: HttpClient) {}

getQandS(symbol:string){
  const resp1=this.http.get<Stock[]>(`${this.link}` + symbol + `${this.key}`);
  const resp2=this.http.get("https://finnhub.io/api/v1/search?q="+symbol+"&token=bu4f8kn48v6uehqi3cqg");
  return forkJoin([resp1,resp2]);
}

getStockById(id:String){
return this.http.get(`${this.link1}`+id+`${this.link2}`);
}



  // getQuote(symbol: string) {
  //   return this.http.get(`${this.link}` + symbol + `${this.key}`);
  // }

  // getSymbol(symbol:string){
  //   return this.http.get("https://finnhub.io/api/v1/search?q="+symbol+"&token=bu4f8kn48v6uehqi3cqg")
  // }

  // getprofile(id: string) {
  //   return this.http.get(`${this.link1}` + id + `${this.key}`);
  // }
  // removeItem(symbol:string){
  //    return this.http.delete(symbol);
  // }
}
