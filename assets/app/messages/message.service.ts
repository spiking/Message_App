import {Message} from "./message";
import {Http, Headers} from "angular2/http";
import {Injectable, EventEmitter} from "angular2/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
@Injectable()
export class MessageService {
    messages: Message[] = [];
    messageIsEdit = new EventEmitter<Message>();
    
    constructor (private _http: Http) {}

    addMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        // Check token
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        
        return this._http.post('http://localhost:3000/message' + token, body, {headers: headers})
            .map(response => {
                const data = response.json().obj;
                let message = new Message(data.content, data._id, data.user.firstName, data.user._id);
                return message;
            })
            .catch(error => Observable.throw(error.json()));
    }

    getMessages() {
        // Get messages from the backend save to array
        return this._http.get('http://localhost:3000/message')
            .map(response => {
                const data = response.json().obj;
                let objs: any[] = [];
                // Create and push messags from backend to objs array
                for (let i = 0; i < data.length; i++) {
                    let message = new Message(data[i].content, data[i]._id, data[i].user.firstName, data[i].user._id);
                    objs.push(message);
                };
                return objs;
            })
            .catch(error => Observable.throw(error.json()));
    }

    updateMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        // Check token
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        
        return this._http.patch('http://localhost:3000/message/' + message.messageId + token, body, {headers: headers})
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }

    editMessage(message: Message) {
        this.messageIsEdit.emit(message);
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        // Check token
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        
        return this._http.delete('http://localhost:3000/message/' + message.messageId + token)
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }
}