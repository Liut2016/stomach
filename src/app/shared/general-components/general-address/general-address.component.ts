import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ConfInterface} from '@app/shared/conf-interface';
import {HttpService} from '@app/core/services/http.service';

@Component({
  selector: 'app-dc-general-address',
  templateUrl: './general-address.component.html',
  styleUrls: ['./general-address.component.css']
})

export class GeneralAddressComponent extends ConfInterface implements OnInit, AfterViewInit {
  provinces = [];
  cities = [];
  areas = [];
  default_value = '';
  city_disabled = true;
  area_disabled = true;
  selected_province_code = '';
  selected_city_code = '';
  ngOnInit() {
    this.disabled_all();
  }
  ngAfterViewInit() {

    this.getProvince();

    this.validator();
  }
  constructor(private service: HttpService) {
    super();
  }
  answerChange() {
    this.city_controler();
    this.area_controler();
    this.validator();
  }
  validator() {
    if (this.conf.required) {
      const key_values = this.conf.key_value;
      let flag = false;
      for (const item of key_values) {
        if (!item._value || item._value === '') {
          flag = true;
        }
      }
      if (flag) { this.valid_confirmed = true; } else { this.valid_confirmed = false; }
      this.conf.valid_confirmed = this.valid_confirmed;
    }
  }

  getProvince() {
    this.service.getChinaDivision('provinces').subscribe(res => {
      let _province: any;
      _province = res;
      this.provinces = _province;
      this.conf.provinces = this.provinces;
    });
  }
  getCity(parentCode) {
    this.service.getChinaDivision('cities').subscribe(res => {
      let _cities: any; _cities = res;
      for (const city of _cities) { if (city.parent_code === parentCode) { this.cities.push(city); this.conf.cities = this.cities; } }
    });
  }
  getArea(parentCode) {
    this.service.getChinaDivision('areas').subscribe( res => {
      let _area: any;  _area = res;
      for (const area of _area) { if (area.parent_code === parentCode) { this.areas.push(area); this.conf.areas = this.areas; } }
    });
  }
  disabled_all() {
    if (this.edit_disabled === true) {
      this.city_disabled = true; this.area_disabled = true;
    } else {
      if (this.conf.key_value[0]._value !== '') { this.city_disabled = false; }
      if (this.conf.key_value[1]._value !== '') { this.area_disabled = false; }
    }
  }
  city_controler() {
    if ( typeof (this.conf.key_value[0]._value) !== 'undefined' && this.conf.key_value[0]._value !== '') {
      for ( const pro of this.provinces ) {
        if ( pro.name === this.conf.key_value[0]._value ) {
          this.selected_province_code = pro.code;
          this.getCity(this.selected_province_code);
          this.city_disabled = false;
          break;
        }
      }
    } else {
      this.city_disabled = true;
      this.conf.key_value[1]._value = '';
    }
  }
  area_controler() {
    if ( typeof (this.conf.key_value[1]._value) !== 'undefined' && this.conf.key_value[1]._value !== '' && this.city_disabled === false) {
      for ( const cit of this.cities) {
        if ( cit.name === this.conf.key_value[1]._value && cit.parent_code === this.selected_province_code) {
          this.selected_city_code = cit.code;
          this.getArea(this.selected_city_code);
          this.area_disabled = false;
          break;
        }
      }
    } else {
      this.area_disabled = true;
      this.conf.key_value[2]._value = '';
    }
  }
}

