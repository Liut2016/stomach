import { Component } from '@angular/core';
import { SettingsService } from '@app/core/services/settings.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public settingsService: SettingsService) {
    this.settingsService.initSettings();
  }
}
