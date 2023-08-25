import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ISettingState} from "../../../store/reducers/settings.reducer";
import {addSetting} from "../../../store/actions/settings.actions";


@Component({
  selector: 'app-setting-add',
  templateUrl: './setting-add.component.html',
  styleUrls: ['./setting-add.component.scss']
})
export class SettingAddComponent implements OnInit {
  newKey = '';
  newValue = '';
  constructor(private store: Store<ISettingState>) { }

  ngOnInit(): void {
  }

  onSave(key: string, value: string) {
     this.store.dispatch(addSetting({payload: {key, value}}));
  }

}
