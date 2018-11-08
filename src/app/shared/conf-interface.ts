import { Input } from '@angular/core';

export class ConfInterface {
  @Input() conf: any; // 配置项
  public valid_confirmed = false;
  @Input() edit_disabled = false;
}
