import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { LastMessageComponent } from './last-message/last-message.component';
import { CreateMessageComponent } from './create-message/create-message.component';


const routes: Routes = [
  {path: 'messages', component: MessagesComponent},
  {path: 'lastest-message', component: LastMessageComponent},
  {path: 'create-message', component: CreateMessageComponent},
  { path: '',   redirectTo: '/messages', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
