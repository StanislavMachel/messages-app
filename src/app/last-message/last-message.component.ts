import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Message } from '../common/message';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-last-message',
  templateUrl: './last-message.component.html',
  styleUrls: ['./last-message.component.scss']
})
export class LastMessageComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  lastMessage: Message;
  total: number;

  ngOnInit(): void {

    const url = 'http://localhost:8080/api/messages/latest';

    this.messageService.getLatestMessage().subscribe((response: any) => {
      console.log(response);
      this.lastMessage = response.latest;
      this.total = response.total;
    });


  }

}
