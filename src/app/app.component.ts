import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent implements OnInit {

  @Input() defaultValue = 'square';

  @Output() selectedValue = new EventEmitter<string>();

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      shape: new FormControl(this.defaultValue)
    });
  }

  submit() {
    this.selectedValue.emit(this.form.value);
  }
}
