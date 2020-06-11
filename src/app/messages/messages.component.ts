import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../common/message';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  messages: Message[]

  displayedColumns: string[] = ['id', 'content', 'created'];
  
  ngOnInit(): void {

    const url = 'http://localhost:8080/api/messages';

    this.messageService.getMessages().subscribe((messages: Message[]) =>{
      this.messages = messages;
    });
  }

}
