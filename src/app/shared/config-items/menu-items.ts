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
        state: 'mammary',
        name: '乳腺癌患者管理',
        type: 'sub',
        icon: 'airline_seat_flat_angled',
      children: [
          {state: 'overview', name: '患者数据管理'},
      ],
        rolesCannotSee: []
  },
  {
    state: 'follow',
    name: '随访管理',
    type: 'sub',
    icon: 'web',
    children: [
      {state: 'mammaryFollowOverview', name: '乳腺癌患者随访管理'},
    ]
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
        type: 'sub',
        icon: 'category',
        children: [
      {state: 'components', name: '表单组件一览'},
      {state: 'markdown', name: '使用说明'},
    ],
    rolesCannotSee: []
    },
  {
    state: 'vis',
    name: '自定义可视化',
    type: 'link',
    icon: 'dashboard',
    rolesCannotSee: []
  }
];

@Injectable()

export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }

}
