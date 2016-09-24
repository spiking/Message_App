import {Component, OnInit} from "angular2/core";
import {Message} from "./message";
import {MessageService} from "./message.service";
@Component({
    selector: 'my-message-input',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
                <div class="form-group">
                    <label for="content">Content</label>
                    <input ngControl="content" type="text" class="form-control" id="content" #input [ngModel]="message?.content">
                </div>
                <button type="submit" class="btn btn-primary">{{ !message ? 'Send Message' : 'Save Message' }}</button>
                <button type="button" class="btn btn-danger" (click)="onCancel()" *ngIf="message">Cancel</button>
            </form>
        </section>
    `
})
export class MessageInputComponent implements OnInit {
    message: Message = null;

    constructor(private _messageService: MessageService) {}

    onSubmit(form:any) {
        if (this.message) {
            // Edit msg, change field object
            this.message.content = form.content; 
            this._messageService.updateMessage(this.message)
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );
            // New object on property
            this.message = null;
        } else {
            // Not editing
            const message:Message = new Message(form.content, null, 'Dummy');
            this._messageService.addMessage(message)
                .subscribe(
                    data => {
                        console.log(data);
                        this._messageService.messages.push(data);
                    },
                    error => console.error(error)
                );
        }
    }

    onCancel() {
        this.message = null;
    }

    ngOnInit() {
        this._messageService.messageIsEdit.subscribe(
            message => {
                this.message = message;
            }
        );
    }
}