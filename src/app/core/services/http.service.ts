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
  // testUrl = 'http://202.117.54.13:8080/';
  testUrl = 'http://202.117.16.95:8080/';
  // testUrl = 'http://localhost:8080/';
  testfilterUrl = 'http://202.117.16.95:8080/'
  constructor(
    private httpClient: HttpClient,
    private http: Http,
    private injector: Injector
  ) {}
  getDemo() {
    return '12345';
  }
  downloadFile(params, filename) {
    this.httpClient.post(this.testUrl + 'oa/patients1/exportdata/get', params, {
      responseType: 'blob',
      observe: 'response'
    })
      .subscribe((res: HttpResponse<Blob>) => {
        saveAs(res.body, decodeURI(filename));
      });
  }

  downloadAllFile(ruleid, filename) {
    this.httpClient.get(this.testUrl + 'oa/patients1/exportrule' + ruleid, {
      responseType: 'blob',
      observe: 'response'
    })
      .subscribe((res: HttpResponse<Blob>) => {
        saveAs(res.body, decodeURI(filename));
      });
  }



  /*getRuleList(username: string, start: number, sorted_key, filters, offset): Observable<any> {
    console.log(filters);
    const filter_dict = {
      full_name: filters.name || '',
      role: filters.role || '',
      supervisor: filters.supervisor || '',
      username: filters.id || '',
      date_joined: [filters.startDate || 0,
         filters.endDate || Math.round(new Date().getTime() / 1000)]
    };
    // console.log(new Date().getTime());
    const params = {
      username,
      start,
      sorted_key: sorted_key,
      filter_dict,
      offset
    };
    return this.httpClient.post(this.testUrl + 'oa/patients1/exportrule/getall', JSON.stringify(params),
      // return this.httpClient.post(this.Url + 'oa/patients2/filter', JSON.stringify(params),
      {headers: new HttpHeaders().set('Content-Type', 'application/json')})
      .pipe( data =>  data);
  }*/

  getRuleList(): Observable<any> {
    return this.httpClient.get(this.testUrl + 'oa/patients1/exportrule/getall');
  }

  getRule(pid: number): Observable<any> {
    return this.httpClient.get(`${this.testUrl}oa/patients1/exportrule/get/${pid}`)
    .pipe( data => data);
  }

  saveRule(pid: number, name: string, rule: any, modificator: string): Observable<any> {
    const params = {
      'pid': pid,
      'name': name,
      'rule': rule,
      'user': modificator,
    };

      return this.httpClient.post(this.testUrl + 'oa/patients1/exportrule/update', JSON.stringify(params),
      // return this.httpClient.post(this.Url + 'oa/patients2/filter', JSON.stringify(params),
      {headers: new HttpHeaders().set('Content-Type', 'application/json')})
      .pipe( data =>  data);
  }

  deleteRule(ruleid): Observable<any> {
    console.log(ruleid);
      return this.httpClient.delete<any>(`${this.testUrl}oa/patients1/exportrule/delete/${ruleid}`)
      .pipe( data =>  data);
  }

  initRule(name: string, rule: any, creator: string): Observable<any> {
    console.log(rule);
      const params = {
        'name': name,
        'rule': rule,
        'user': creator,
      };
      console.log(params);
      console.log(JSON.stringify(params));
      return this.httpClient.post(this.testUrl + 'oa/patients1/exportrule/insert', JSON.stringify(params),
      // return this.httpClient.post(this.Url + 'oa/patients2/filter', JSON.stringify(params),
      {headers: new HttpHeaders().set('Content-Type', 'application/json')})
      .pipe( data =>  data);
    }


    getHistory(): Observable<any> {
    return this.httpClient.get(`${this.testUrl}oa/history`).pipe(data => data);
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
  getFilterList(pageindex: number, pagesize: number, keywords: any,  condition_search: any, history_string: any): Observable<any> {
    const params = {
      'pageindex': pageindex,
      'pagesize': pagesize,
      'keywords': keywords,
      'condition_search': condition_search,
      'history': history_string
    };
    return this.httpClient.post(this.testfilterUrl + 'oa/filter1', JSON.stringify(params),
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
    return this.httpClient.post(this.testfilterUrl + 'oa/patients1/filter', JSON.stringify(params),
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
