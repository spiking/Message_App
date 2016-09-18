import {Component} from "angular2/core";
import {MessageComponent} from './message.component';
import {Message} from "./message";
@Component({
	selector: 'my-message-list',
	template: `
			<section class="col-md-8 col-md-offset-2">
      			<my-message *ngFor="#message of messages" [message]="message" (editClicked)="message.content = $event"></my-message>
			</section>
	`, 
	directives: [MessageComponent]
})

export class MessageListComponent {
		messages: Message[] = [new Message('A New Message', null, 'Adam1'),
						   new Message('A Second Message', null, 'Adam2'),
						   new Message('A Third Message', null, 'Adam3')
						  ];
}