import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import { LocalStorage } from '@ngx-pwa/local-storage';
// import { LocalStorageService } from 'ngx-store';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpForNowService {
  private localUrl = 'http://59.110.52.133:9010/';
  // private localUrl = 'http://202.117.54.88:9000/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private router: Router) {
    console.log(this.headers);
    const token = localStorage.getItem('token');
    this.headers = new Headers({'Content-Type': 'application/json', 'X-CSRFToken': token});
  }

    /**
   * 本函数统一处理系统发生的错误，弹出模态框提示用户
   * @param error
   * @returns {Promise<never>}
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    console.log(error.status);
    if (error.status === '401') {
      // alert('未授权的访问');
      this.router.navigate(['/authentication/login']);
    }

    return Promise.reject(error.message || error); // ?
  }

  setToken(token) {
    this.headers = new Headers({'Content-Type': 'application/json', 'X-CSRFToken': token});
    // this.headers.set('X-CSRFToken', token);
    console.log('set:', token);
  }
  deleteToken() {
    this.headers = new Headers({'Content-Type': 'application/json'});
    // this.headers.delete('X-CSRFToken');
  }
  checkToken(): boolean {
    return this.headers.has('X-CSRFToken');
  }
  // --------------------------------------------- Account related API begin----------------------------------------------//
  login(username, password) {
    const params = {
      username,
      password
    };
    return this.http.post(this.localUrl + 'account/login/', JSON.stringify(params), {headers: this.headers})
    .toPromise().then(response => {
      console.log(response.json());
     return response.json();
    })
    .catch(this.handleError);
  }

  logout() {
    return this.http.post(this.localUrl + 'account/logout/', '', {headers: this.headers})
    .toPromise().then(response => {
      console.log(response.json());
     return response.json();
    })
    .catch(this.handleError);
  }

  changePassword(oldPassword, newPassword) {
    const params = {
      old_password: oldPassword,
      new_password: newPassword,
      modify_password: '1'
    };
    return this.http.put(this.localUrl + 'account/user/', JSON.stringify(params), {headers: this.headers})
    .toPromise().then(response => {
      console.log(response.json());
      return response.json();
    })
    .catch(this.handleError);
  }

  getUser() {
    return this.http.get(this.localUrl + 'account/user/', {headers: this.headers})
    .toPromise().then(response => {
      console.log(response.json());
      return response.json();
    })
    .catch(this.handleError);
  }

  getUserList(username: string, start: number, sorted_key, filters, offset): Promise<any> {
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
    return this.http.post(this.localUrl + 'account/userList/', JSON.stringify(params), { headers: this.headers })
      .toPromise().then(response => {
        console.log(response);
       return response.json();
      })
      .catch(this.handleError);
  }

  signUpUser(username, first_name, last_name, community, password, email, id_card): Promise<any> {
    const params = {
      username,
      first_name,
      last_name,
      community,
      password,
      email,
      id_card
    };
    return this.http.post(this.localUrl + 'account/user/', JSON.stringify(params), { headers: this.headers })
      .toPromise().then(response => {
        console.log(response.json());
       return response.json();
      })
      .catch(this.handleError);
  }

  deleteUser(username): Promise<any> {
    const params = {
      username
    };
    return this.http.delete(this.localUrl + 'account/user/', { headers: this.headers, body: params})
      .toPromise().then(response => {
        console.log(response.json());
       return response.json();
      })
      .catch(this.handleError);
  }

  changeSystemSettings(system_theme) {
    const params = {
      system_theme,
      modify_password: '0'
    };
    return this.http.put(this.localUrl + 'account/user/', JSON.stringify(params), {headers: this.headers})
    .toPromise().then(response => {
      console.log(response.json());
      return response.json();
    })
    .catch(this.handleError);
  }

  // --------------------------------------------- Account related API end----------------------------------------------//

  // --------------------------------------------- Email related API begin----------------------------------------------//
  getEmailList(start, UserID, filter_dict, offset) {
    const params = {
      start,
      UserID,
      filter_dict,
      offset
    };
    return this.http.post(this.localUrl + 'email/emailList/', JSON.stringify(params), {headers: this.headers})
    .toPromise().then(response => {
      console.log(response.json());
     return response.json();
    })
    .catch(this.handleError);
  }

  getUsers2Email(id) {
    const params = {
      Username: id
    };
    return this.http.get(this.localUrl + 'email/getUser2Email/', {
      // params: 'q=' + JSON.stringify(params),
      headers: this.headers
    }).toPromise().then(response => {
      console.log(response.json());
     return response.json();
    })
    .catch(this.handleError);
  }

  readEmail(eid) {
    const params = {
      EID: eid
    };
    return this.http.get(this.localUrl + 'email/emailOp/', {
      params: 'q=' + JSON.stringify(params),
      headers: this.headers
    }).toPromise().then(response => {
      console.log(response.json());
     return response.json();
    })
    .catch(this.handleError);
  }

  sendEmail(receiver_ID, theme, content) {
    const params = {
      // sender_ID,
      receiver_ID,
      theme,
      content
    };
    return this.http.post(this.localUrl + 'email/emailOp/', JSON.stringify(params), {headers: this.headers})
    .toPromise().then(response => {
      console.log(response.json());
     return response.json();
    })
    .catch(this.handleError);
  }

  deleteEmail(eid) {
    const params = {
      EID: eid
    };
    console.log('delete ', params);
    return this.http.delete(this.localUrl + 'email/emailOp/', {
      body: JSON.stringify(params),
      headers: this.headers
    }).toPromise().then(response => {
      console.log(response.json());
     return response.json();
    })
    .catch(this.handleError);
  }

  checkUnread(UserID) {
    const params = {
      UserID
    };
    return this.http.post(this.localUrl + 'email/emailUnread/', '', {
      // params: 'q=' + JSON.stringify(params),
      headers: this.headers
    }).toPromise().then(response => {
      console.log(response.json());
     return response.json();
    })
    .catch(this.handleError);
  }

  getDRResult(conf) {
    // const params = {
    //   indexes,
    //   dimensions,
    //   isDataProjection,
    //   tsneConfiguration: {
    //     randomState: tsneConfiguration.randomState
    //   }
    // };
    // return this.http.post('http://59.110.52.133:3111/getDRResult', JSON.stringify(conf), {headers: this.headers}).toPromise()
    return this.http.post('http://202.117.54.92:5000/getDRResult', JSON.stringify(conf), {headers: this.headers}).toPromise()
      .then(res => {
        return res.json();
      })
      .catch(this.handleError);
  }

  getDimsData(dims) {
    console.log(dims);
    const queryDims1 = dims.filter(function (s) {
      if (!!s && s.includes('part1')) {
        return s && s.trim(); // 注：IE9(不包含IE9)以下的版本没有trim()方法
      }
    });
    const queryDims2 = dims.filter(function (s) {
      if (!!s && s.includes('part2')) {
        return s && s.trim(); // 注：IE9(不包含IE9)以下的版本没有trim()方法
      }
    });
    if (queryDims1.length > 0) {
      console.log(queryDims1);
      const Query1 = this.http.get('http://202.117.16.95:8080/oa/patients1/' + queryDims1).toPromise().then(res => {
        return res.json();
      })
        .catch(this.handleError);
      if (queryDims2.length > 0) {
        const Query2 = this.http.get('http://202.117.16.95:8080/oa/patients1/' + queryDims2).toPromise().then(res => {
          return res.json();
        })
          .catch(this.handleError);
        return Promise.all([Query1, Query2]).then(([res1, res2]) => {
          console.log(res1);
          console.log(res2);
          const res = [];
          for (let i = 0; i < res1.data.length; i++) {
            res.push({...res1.data[i], ...res2.data[i]});
          }
          console.log(res);
          return res;
        });
      }else {
        return Promise.all([Query1]).then(([data1]) => {
          console.log(data1);
          return data1.data;
        });
      }
    }else   {
      if (queryDims2.length > 0) {
        const Query2 = this.http.get('http://202.117.16.95:8080/oa/patients1/' + queryDims2).toPromise().then(res => {
          return res.json();
        })
          .catch(this.handleError);
        return Promise.all([ Query2]).then(([data2]) => {
          console.log(data2);
          return data2.data;
        });
      }
    }
  }

  getDimvals(dim) {
    const params = {
      'dim': dim
    };
    const opts = {headers: new Headers({'Content-Type': 'application/json'})};
    // console.log(params);
    return this.http.post('http://202.117.16.95:8080/oa/patients2/dim', JSON.stringify(params), opts).toPromise()
      .then(res => {
        return res.json();
      })
      .catch(this.handleError);
  }

  // --------------------------------------------- Email related API end ----------------------------------------------//
}
