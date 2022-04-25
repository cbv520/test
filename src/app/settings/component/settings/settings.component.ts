import { Component, OnDestroy, OnInit } from '@angular/core';
import { SettingsService } from '../../service/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnDestroy {

  updated = false;

  constructor(public settings: SettingsService) { }

  ngOnDestroy(): void {
    if (this.updated) {
      console.log("saving config: ");
      console.log(this.settings.map)
    }
  }

  update(key: string, e:any) {
    if (this.settings.map[key] !== e.target.value) {
      this.settings.map[key] = e.target.value
      this.updated = true
    }
  }

}
