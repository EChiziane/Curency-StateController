import { Component, OnInit } from '@angular/core';
import { select, Store} from "@ngrx/store";
import {
  selectSettingIsLoading,
  selectSettings,
  selectShowSettingAddForm
} from "../../store/selectors/settings.selectors";
import {getSettings, hideAddForm, showAddForm} from "../../store/actions/settings.actions";
import {ISettingState} from "../../store/reducers/settings.reducer";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  isLoading$ = this.store.pipe(select(selectSettingIsLoading));
  settings$ = this.store.pipe(select(selectSettings));
  showAddForm$ = this.store.pipe(select(selectShowSettingAddForm));
  showAddForm = false;
  buttonLabel = 'Add New Setting';

  constructor(private store: Store<ISettingState>) { }

  ngOnInit(): void {
    this.store.dispatch(getSettings());
  }

  toogleAddForm() {
    this.showAddForm = !this.showAddForm;

    if (this.showAddForm) {
      this.buttonLabel = 'Hide';
      this.store.dispatch(showAddForm());
    } else {
      this.store.dispatch(hideAddForm());
      this.buttonLabel = 'Add New Setting';
    }
  }
}
