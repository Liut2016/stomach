import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataLoadService {

  constructor(private httpClient: HttpClient,) { }

  getFile(api,file_name) {
    return this.httpClient.get(api + file_name);
  }
}
