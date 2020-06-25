import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, ValidatorFn, AbstractControl, Validators, FormControl } from '@angular/forms';
import { MessageService } from '../services/message.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss']
})
export class CreateMessageComponent implements OnInit {

  @ViewChild('form') private form: NgForm;

  messageForm;

  constructor(private formBuilder: FormBuilder, private messageService: MessageService, private snackBar: MatSnackBar) {
    this.messageForm = this.formBuilder.group({
      content: new FormControl('', [Validators.required, this.notBlank()])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(messageForm) {

    this.messageService.createMessage({id: null, content : messageForm.content, created: null}).subscribe(message => {
      this.form.resetForm();

      this.snackBar.open('Message created', null, {
        duration: 2000
      });
    });
  }

  get content() { return this.messageForm.get('content'); }

 notBlank(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const value = control.value != null ? control.value.trim() : null;
      return !value ? {blank: {value: control.value}} : null;
    };
  }

}
