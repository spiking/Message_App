import {Message} from "./message";
import {Http, Headers} from "angular2/http";
import {Injectable} from "angular2/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
// Encapsulates all non-user-interface logic.
@Injectable()
export class MessageService {
	messages: Message[] = [];

    constructor(private _http: Http) {
        
    }
	
	addMessage(message: Message) {
        // Turn msg object to string
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        // Observable, configured but not sent
        return this._http.post('http://localhost:3000/message', body, {headers: headers}).map(response => response.json()).catch(error => Observable.throw(error.json()));
	}
	
	getMessages() {
		return this.messages;
	}

	editMessage(message: Message) {
		this.messages[this.messages.indexOf(message)] = new Message('Edited', null, 'Dummy User');
	}

	deleteMessage(message: Message) {
		this.messages.splice(this.messages.indexOf(message), 1);
	}
}