import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, private messageService: MessageService, private _snackBar: MatSnackBar) { 
    this.messageForm = this.formBuilder.group({
      content: ''
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit(messageForm) {
    this.messageService.createMessage({id: null, content : messageForm.content, created: null}).subscribe(message => {
      
      this.form.resetForm();
    
      this._snackBar.open('Message created', null, {
        duration: 2000
      });
    });
  }

}
