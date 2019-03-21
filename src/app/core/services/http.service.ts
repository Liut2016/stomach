import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import { saveAs} from 'file-saver';
import { url } from '@app/../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class HttpService {
  baseUrl = 'http://59.110.52.133:9010/';
  testUrl = url;

  constructor(
    private httpClient: HttpClient,
    private injector: Injector
  ) {}
  getDemo() {
    return '12345';
  }
  downloadFile(params, filename) {
    this.httpClient.post(this.baseUrl + 'disease/exportcsv/', params, {
      responseType: 'blob',
      observe: 'response'
    })
      .subscribe((res: HttpResponse<Blob>) => {
        saveAs(res.body, decodeURI(filename));
      });
  }
  getChinaDivision(file_name) {
    return this.httpClient.get('assets/jsonData/' + file_name + '.json');
  }

  /*getRecordList(condictions): Observable<any> {
    return this.httpClient.post( this.baseUrl + 'disease/recordlist/', JSON.stringify(condictions))
      .pipe( data => { return data; });
  }*/

  /*getRecordList(): Observable<any> {
    return this.httpClient.get('http://202.117.54.92:8080/oa/patients1')
      .pipe( data => { return data; });
  }*/
  getFilterList(pageindex: number, pagesize: number, conditions: any): Observable<any> {
    const params = {
      'pageindex': pageindex,
      'pagesize': pagesize,
      'conditions': conditions,
    };
    return this.httpClient.post(this.testUrl + 'oa/filter1', JSON.stringify(params),
      // return this.httpClient.post(this.Url + 'oa/patients2/filter', JSON.stringify(params),
      {headers: new HttpHeaders().set('Content-Type', 'application/json')})
      .pipe( data =>  data);

  }

  getRecordList(pageindex: number, pagesize: number, condition: any): Observable<any> {
     const params = {
      'pageindex': pageindex,
      'pagesize': pagesize,
      'condition': condition
    };
     return this.httpClient.post(`${this.testUrl}oa/patients1`, JSON.stringify(params),
      {headers: new HttpHeaders().set('Content-Type', 'application/json')})
      .pipe( data =>  data);
  }
  getElasticList(query: any): Observable<any> {
    return this.httpClient.post(`${this.testUrl}oa/es_list/`, JSON.stringify(query),
      {headers: new HttpHeaders().set('Content-Type', 'application/json')})
      .pipe( data =>  data);
  }

  getRFilterList(pageindex: number, pagesize: number, isAll: any, conditions: any, keys): Observable<any> {
    const params = {
      'pageindex': pageindex,
      'pagesize': pagesize,
      'isAll': isAll,
      'conditions': conditions,
      'keys': keys
    };
    return this.httpClient.post(this.testUrl + 'oa/patients1/filter', JSON.stringify(params),
      // return this.httpClient.post(this.Url + 'oa/patients2/filter', JSON.stringify(params),
      {headers: new HttpHeaders().set('Content-Type', 'application/json')})
      .pipe( data =>  data);

  }
  putRecord(params: any): Observable<any> {
    return this.httpClient.put( this.baseUrl + 'disease/recordop/', params)
      .pipe( data =>  data);
  }
  deleteRecord(params: any): Observable<any> {
    return this.httpClient.delete<any> ( this.baseUrl + 'disease/recordop/', params)
      .pipe( data =>  data);
  }
  getRecord(params: any): Observable<any> {
    return this.httpClient.get (this.baseUrl + 'disease/recordop/', { params: { q: JSON.stringify(params)}})
      .pipe( data => data);
  }

  getPatient(params: any, zyh: string): Observable<any> {
    return this.httpClient.get(`${this.testUrl}oa/patient1/${params}/${zyh}`).pipe( data => {
      return data;
    });
  }
  getViewList(): Observable<any> {
    return this.httpClient.get(this.testUrl + 'oa/dashboard_1')
      .pipe( data => {
        return data; });
  }

}
