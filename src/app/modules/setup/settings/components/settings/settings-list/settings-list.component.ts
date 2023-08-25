import {Component, Input, OnInit} from '@angular/core';
import {Setting} from "../../../../../../models/setting";

@Component({
  selector: 'app-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.scss']
})
export class SettingsListComponent implements OnInit {
  @Input() settings: Setting[] | null = [];
  constructor() { }

  ngOnInit(): void {
  }


}
