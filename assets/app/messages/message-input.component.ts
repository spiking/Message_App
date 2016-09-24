import {Component} from "angular2/core";
import {Message} from "./message";
import {MessageService} from "./message.service";
@Component({
	selector: 'my-message-input',
	template: `
		<section class="col-md-8 col-md-offset-2">
			<form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
				<div class="form-group">
					<label for="content">Content</label>
					<input ngControl="content" type="text" class="form-control" id="content" #input>
				</div>
				<button type="submit" class="btn btn-primary">Send Message</button>
			</form>
		</section>
	`,
})

export class MessageInputComponent {
	
	constructor(private _messageService: MessageService) {
		
	}
	
	onSubmit(form:any) {
		const message: Message = new Message(form.content, null, 'Dummy User');
		this._messageService.addMessage(message).subscribe(
            data => {
                console.log(data);
                this._messageService.messages.push(data); // Push instantly to view, doesnt require reload
            },
            error => console.error(error)
        );
	}
}