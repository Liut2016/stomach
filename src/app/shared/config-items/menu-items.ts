import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  saperator?: Saperator[];
  children?: ChildrenItems[];
  rolesCannotSee?: string[];
}

const MENUITEMS = [
  {
    state: 'dashboard',
    name: '数据总览',
    type: 'link',
    icon: 'dashboard',
    rolesCannotSee: []
  },
    {
        state: 'stomach',
        name: '结直肠癌患者管理',
        type: 'sub',
        icon: 'airline_seat_flat_angled',
      children: [
        {state: 'overview', name: '患者数据管理'},
      ],
        rolesCannotSee: []
  },
  {
    state: 'personnel',
    name: '人员管理',
    type: 'link',
    icon: 'perm_contact_calendar',
    rolesCannotSee: ['patient']
  },
  {
        state: 'components_list',
        name: '医疗表单组件',
        type: 'link',
        icon: 'category',
        rolesCannotSee: []
    },  {
    state: 'vis',
    name: '可视分析',
    type: 'link',
    icon: 'dashboard',
    rolesCannotSee: []
  },
];

@Injectable()

export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }

}
