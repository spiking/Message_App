var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("errors/error", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Error;
    return {
        setters:[],
        execute: function() {
            Error = (function () {
                function Error(title, message) {
                    this.title = title;
                    this.message = message;
                }
                return Error;
            }());
            exports_1("Error", Error);
        }
    }
});
System.register("errors/error.service", ["angular2/core", "errors/error"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_1, error_1;
    var ErrorService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (error_1_1) {
                error_1 = error_1_1;
            }],
        execute: function() {
            ErrorService = (function () {
                function ErrorService() {
                    this.errorOccurred = new core_1.EventEmitter();
                }
                ErrorService.prototype.handleError = function (error) {
                    var errorData = new error_1.Error(error.title, error.error.message);
                    this.errorOccurred.emit(errorData);
                };
                return ErrorService;
            }());
            exports_2("ErrorService", ErrorService);
        }
    }
});
System.register("errors/error.component", ["angular2/core", "errors/error.service"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, error_service_1;
    var ErrorComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (error_service_1_1) {
                error_service_1 = error_service_1_1;
            }],
        execute: function() {
            ErrorComponent = (function () {
                function ErrorComponent(_errorService) {
                    this._errorService = _errorService;
                    this.errorDisplay = 'none';
                }
                ErrorComponent.prototype.onErrorHandled = function () {
                    this.errorDisplay = 'none';
                };
                ErrorComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._errorService.errorOccurred.subscribe(function (errorData) {
                        _this.errorData = errorData;
                        _this.errorDisplay = 'block';
                    });
                };
                ErrorComponent = __decorate([
                    core_2.Component({
                        selector: 'my-error',
                        template: "\n        <div class=\"backdrop\" [ngStyle]=\"{'display': errorDisplay}\"></div>\n        <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display': errorDisplay}\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onErrorHandled()\"><span aria-hidden=\"true\">&times;</span></button>\n                        <h4 class=\"modal-title\">{{errorData?.title}}</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                     <p>{{errorData?.message}}</p>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"onErrorHandled()\">Close</button>\n                    </div>\n                </div><!-- /.modal-content -->\n            </div><!-- /.modal-dialog -->\n        </div><!-- /.modal -->  \n    ",
                        styles: ["\n        .backdrop {\n            background-color: rgba(0,0,0,0.6);\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100vh;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [error_service_1.ErrorService])
                ], ErrorComponent);
                return ErrorComponent;
            }());
            exports_3("ErrorComponent", ErrorComponent);
        }
    }
});
System.register("messages/message", [], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var Message;
    return {
        setters:[],
        execute: function() {
            Message = (function () {
                function Message(content, messageId, username, userId) {
                    this.content = content;
                    this.messageId = messageId;
                    this.username = username;
                    this.userId = userId;
                }
                return Message;
            }());
            exports_4("Message", Message);
        }
    }
});
System.register("messages/message.service", ["messages/message", "angular2/http", "angular2/core", 'rxjs/Rx', "rxjs/Observable"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var message_1, http_1, core_3, Observable_1;
    var MessageService;
    return {
        setters:[
            function (message_1_1) {
                message_1 = message_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (_1) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            MessageService = (function () {
                function MessageService(_http) {
                    this._http = _http;
                    this.messages = [];
                    this.messageIsEdit = new core_3.EventEmitter();
                }
                MessageService.prototype.addMessage = function (message) {
                    var body = JSON.stringify(message);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    // Check token
                    var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
                    return this._http.post('http://localhost:3000/message' + token, body, { headers: headers })
                        .map(function (response) {
                        var data = response.json().obj;
                        var message = new message_1.Message(data.content, data._id, data.user.firstName, data.user._id);
                        return message;
                    })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
                };
                MessageService.prototype.getMessages = function () {
                    // Get messages from the backend save to array
                    return this._http.get('http://localhost:3000/message')
                        .map(function (response) {
                        var data = response.json().obj;
                        var objs = [];
                        // Create and push messags from backend to objs array
                        for (var i = 0; i < data.length; i++) {
                            var message = new message_1.Message(data[i].content, data[i]._id, data[i].user.firstName, data[i].user._id);
                            objs.push(message);
                        }
                        ;
                        return objs;
                    })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
                };
                MessageService.prototype.updateMessage = function (message) {
                    var body = JSON.stringify(message);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    // Check token
                    var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
                    return this._http.patch('http://localhost:3000/message/' + message.messageId + token, body, { headers: headers })
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
                };
                MessageService.prototype.editMessage = function (message) {
                    this.messageIsEdit.emit(message);
                };
                MessageService.prototype.deleteMessage = function (message) {
                    this.messages.splice(this.messages.indexOf(message), 1);
                    // Check token
                    var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
                    return this._http.delete('http://localhost:3000/message/' + message.messageId + token)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
                };
                MessageService = __decorate([
                    core_3.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MessageService);
                return MessageService;
            }());
            exports_5("MessageService", MessageService);
        }
    }
});
System.register("messages/message-input.component", ['../../errors/error.service', "angular2/core", "messages/message", "messages/message.service"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var error_service_2, core_4, message_2, message_service_1;
    var MessageInputComponent;
    return {
        setters:[
            function (error_service_2_1) {
                error_service_2 = error_service_2_1;
            },
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (message_2_1) {
                message_2 = message_2_1;
            },
            function (message_service_1_1) {
                message_service_1 = message_service_1_1;
            }],
        execute: function() {
            MessageInputComponent = (function () {
                function MessageInputComponent(_messageService, _errorService) {
                    this._messageService = _messageService;
                    this._errorService = _errorService;
                    this.message = null;
                }
                MessageInputComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    if (this.message) {
                        // Not null, edit msg, change field object
                        this.message.content = form.content;
                        this._messageService.updateMessage(this.message)
                            .subscribe(function (data) { return console.log(data); }, function (error) { return _this._errorService.handleError(error); });
                        // New object on property
                        this.message = null;
                    }
                    else {
                        // Not null, create msg
                        var message = new message_2.Message(form.content, null, 'Dummy');
                        this._messageService.addMessage(message)
                            .subscribe(function (data) {
                            console.log(data);
                            _this._messageService.messages.push(data);
                        }, function (error) { return _this._errorService.handleError(error); });
                    }
                };
                MessageInputComponent.prototype.onCancel = function () {
                    this.message = null;
                };
                MessageInputComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._messageService.messageIsEdit.subscribe(function (message) {
                        _this.message = message;
                    });
                };
                MessageInputComponent = __decorate([
                    core_4.Component({
                        selector: 'my-message-input',
                        template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n                <div class=\"form-group\">\n                    <label for=\"content\">Content</label>\n                    <input ngControl=\"content\" type=\"text\" class=\"form-control\" id=\"content\" #input [ngModel]=\"message?.content\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\">{{ !message ? 'Send Message' : 'Save Message' }}</button>\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\" *ngIf=\"message\">Cancel</button>\n            </form>\n        </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [message_service_1.MessageService, (typeof (_a = typeof error_service_2.ErrorService !== 'undefined' && error_service_2.ErrorService) === 'function' && _a) || Object])
                ], MessageInputComponent);
                return MessageInputComponent;
                var _a;
            }());
            exports_6("MessageInputComponent", MessageInputComponent);
        }
    }
});
System.register("messages/message.component", ['../../errors/error.service', "angular2/core", "messages/message", "messages/message.service"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var error_service_3, core_5, message_3, message_service_2;
    var MessageComponent;
    return {
        setters:[
            function (error_service_3_1) {
                error_service_3 = error_service_3_1;
            },
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (message_3_1) {
                message_3 = message_3_1;
            },
            function (message_service_2_1) {
                message_service_2 = message_service_2_1;
            }],
        execute: function() {
            MessageComponent = (function () {
                function MessageComponent(_messageService, _errorService) {
                    this._messageService = _messageService;
                    this._errorService = _errorService;
                    this.editClicked = new core_5.EventEmitter();
                }
                MessageComponent.prototype.onEdit = function () {
                    this._messageService.editMessage(this.message);
                };
                MessageComponent.prototype.onDelete = function () {
                    var _this = this;
                    this._messageService.deleteMessage(this.message)
                        .subscribe(function (data) { return console.log(data); }, function (error) { return _this._errorService.handleError(error); });
                };
                MessageComponent.prototype.belongsToUser = function () {
                    return localStorage.getItem('userId') == this.message.userId;
                };
                __decorate([
                    core_5.Input(), 
                    __metadata('design:type', message_3.Message)
                ], MessageComponent.prototype, "message", void 0);
                __decorate([
                    core_5.Output(), 
                    __metadata('design:type', Object)
                ], MessageComponent.prototype, "editClicked", void 0);
                MessageComponent = __decorate([
                    core_5.Component({
                        selector: 'my-message',
                        template: "\n        <article class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                {{ message.content }}\n            </div>\n            <footer class=\"panel-footer\">\n                <div class=\"author\">\n                    {{ message.username }}\n                </div>\n                <div class=\"config\" *ngIf=\"belongsToUser()\">\n                    <a (click)=\"onEdit()\">Edit</a>\n                    <a (click)=\"onDelete()\">Delete</a>\n                </div>\n            </footer>\n        </article>\n    ",
                        styles: ["\n        .author {\n            display: inline-block;\n            font-style: italic;\n            font-size: 12px;\n            width: 80%;\n        }\n        .config {\n            display: inline-block;\n            text-align: right;\n            font-size: 12px;\n            width: 19%;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [message_service_2.MessageService, (typeof (_a = typeof error_service_3.ErrorService !== 'undefined' && error_service_3.ErrorService) === 'function' && _a) || Object])
                ], MessageComponent);
                return MessageComponent;
                var _a;
            }());
            exports_7("MessageComponent", MessageComponent);
        }
    }
});
System.register("messages/message-list.component", ['../../errors/error.service', "angular2/core", "messages/message.component", "messages/message.service"], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var error_service_4, core_6, message_component_1, message_service_3;
    var MessageListComponent;
    return {
        setters:[
            function (error_service_4_1) {
                error_service_4 = error_service_4_1;
            },
            function (core_6_1) {
                core_6 = core_6_1;
            },
            function (message_component_1_1) {
                message_component_1 = message_component_1_1;
            },
            function (message_service_3_1) {
                message_service_3 = message_service_3_1;
            }],
        execute: function() {
            MessageListComponent = (function () {
                function MessageListComponent(_messageService, _errorService) {
                    this._messageService = _messageService;
                    this._errorService = _errorService;
                }
                // Called after initialization
                MessageListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._messageService.getMessages()
                        .subscribe(function (messages) {
                        _this.messages = messages;
                        _this._messageService.messages = messages;
                    }, function (error) { return _this._errorService.handleError(error); });
                };
                MessageListComponent = __decorate([
                    core_6.Component({
                        selector: 'my-message-list',
                        template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <my-message *ngFor=\"#message of messages\" [message]=\"message\" (editClicked)=\"message.content = $event\"></my-message>     \n        </section>\n    ",
                        directives: [message_component_1.MessageComponent]
                    }), 
                    __metadata('design:paramtypes', [message_service_3.MessageService, (typeof (_a = typeof error_service_4.ErrorService !== 'undefined' && error_service_4.ErrorService) === 'function' && _a) || Object])
                ], MessageListComponent);
                return MessageListComponent;
                var _a;
            }());
            exports_8("MessageListComponent", MessageListComponent);
        }
    }
});
System.register("messages/messages.component", ["angular2/core", "messages/message-input.component", "messages/message-list.component"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_7, message_input_component_1, message_list_component_1;
    var MessagesComponent;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            },
            function (message_input_component_1_1) {
                message_input_component_1 = message_input_component_1_1;
            },
            function (message_list_component_1_1) {
                message_list_component_1 = message_list_component_1_1;
            }],
        execute: function() {
            MessagesComponent = (function () {
                function MessagesComponent() {
                }
                MessagesComponent = __decorate([
                    core_7.Component({
                        selector: 'my-messages',
                        template: "\n        <div class=\"row spacing\">\n            <my-message-input></my-message-input>\n        </div>\n        <div class=\"row spacing\">\n            <my-message-list></my-message-list>\n        </div> \n    ",
                        directives: [message_list_component_1.MessageListComponent, message_input_component_1.MessageInputComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessagesComponent);
                return MessagesComponent;
            }());
            exports_9("MessagesComponent", MessagesComponent);
        }
    }
});
System.register("auth/user", [], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(email, password, firstName, lastName) {
                    this.email = email;
                    this.password = password;
                    this.firstName = firstName;
                    this.lastName = lastName;
                }
                return User;
            }());
            exports_10("User", User);
        }
    }
});
System.register("auth/auth.service", ["angular2/core", "angular2/http", "rxjs/Observable", 'rxjs/Rx'], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_8, http_2, Observable_2;
    var AuthService;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            },
            function (Observable_2_1) {
                Observable_2 = Observable_2_1;
            },
            function (_2) {}],
        execute: function() {
            AuthService = (function () {
                function AuthService(_http) {
                    this._http = _http;
                }
                AuthService.prototype.signup = function (user) {
                    var body = JSON.stringify(user);
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    return this._http.post('http://localhost:3000/user', body, { headers: headers })
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_2.Observable.throw(error.json()); });
                };
                AuthService.prototype.signin = function (user) {
                    var body = JSON.stringify(user);
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    return this._http.post('http://localhost:3000/user/signin', body, { headers: headers })
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_2.Observable.throw(error.json()); });
                };
                AuthService.prototype.logout = function () {
                    // Clear userId and token
                    localStorage.clear();
                };
                AuthService.prototype.isLoggedIn = function () {
                    return localStorage.getItem('token') !== null;
                };
                AuthService = __decorate([
                    core_8.Injectable(), 
                    __metadata('design:paramtypes', [http_2.Http])
                ], AuthService);
                return AuthService;
            }());
            exports_11("AuthService", AuthService);
        }
    }
});
System.register("auth/signup.component", ['../../errors/error.service', "auth/auth.service", "auth/user", "angular2/core", "angular2/common"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var error_service_5, auth_service_1, user_1, core_9, common_1;
    var SignupComponent;
    return {
        setters:[
            function (error_service_5_1) {
                error_service_5 = error_service_5_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (core_9_1) {
                core_9 = core_9_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            SignupComponent = (function () {
                function SignupComponent(_fb, _authService, _errorService) {
                    this._fb = _fb;
                    this._authService = _authService;
                    this._errorService = _errorService;
                }
                SignupComponent.prototype.onSubmit = function () {
                    var _this = this;
                    var user = new user_1.User(this.myForm.value.email, this.myForm.value.password, this.myForm.value.firstName, this.myForm.value.lastName);
                    this._authService.signup(user).subscribe(function (data) { return console.log(data); }, function (error) { return _this._errorService.handleError(error); });
                };
                SignupComponent.prototype.ngOnInit = function () {
                    this.myForm = this._fb.group({
                        firstName: ['', common_1.Validators.required],
                        lastName: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                this.isEmail
                            ])],
                        password: ['', common_1.Validators.required]
                    });
                };
                SignupComponent.prototype.isEmail = function (control) {
                    // Regex magic, with Js function
                    if (!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")) {
                        return { invalidMail: true };
                    }
                };
                SignupComponent = __decorate([
                    core_9.Component({
                        selector: 'my-signup',
                        template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"firstName\">First Name</label>\n                    <input [ngFormControl]=\"myForm.find('firstName')\" type=\"text\" id=\"firstName\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"lastName\">Last Name</label>\n                    <input [ngFormControl]=\"myForm.find('lastName')\" type=\"text\" id=\"lastName\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input [ngFormControl]=\"myForm.find('email')\" type=\"email\" id=\"email\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input [ngFormControl]=\"myForm.find('password')\" type=\"password\" id=\"password\" class=\"form-control\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">Sign Up</button>\n            </form>\n        </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, auth_service_1.AuthService, (typeof (_a = typeof error_service_5.ErrorService !== 'undefined' && error_service_5.ErrorService) === 'function' && _a) || Object])
                ], SignupComponent);
                return SignupComponent;
                var _a;
            }());
            exports_12("SignupComponent", SignupComponent);
        }
    }
});
System.register("auth/logout.component", ['angular2/router', "auth/auth.service", "angular2/core"], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var router_1, auth_service_2, core_10;
    var LogoutComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_2_1) {
                auth_service_2 = auth_service_2_1;
            },
            function (core_10_1) {
                core_10 = core_10_1;
            }],
        execute: function() {
            LogoutComponent = (function () {
                function LogoutComponent(_authService, _router) {
                    this._authService = _authService;
                    this._router = _router;
                }
                LogoutComponent.prototype.onLogout = function () {
                    this._authService.logout();
                    this._router.navigate(['Signin']);
                };
                LogoutComponent = __decorate([
                    core_10.Component({
                        selector: 'my-logout',
                        template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <button class=\"btn btn-danger\" (click)=\"onLogout()\">Logout</button>\n        </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [auth_service_2.AuthService, router_1.Router])
                ], LogoutComponent);
                return LogoutComponent;
            }());
            exports_13("LogoutComponent", LogoutComponent);
        }
    }
});
System.register("auth/signin.component", ['../../errors/error.service', 'angular2/router', "auth/auth.service", "auth/user", "angular2/core", "angular2/common"], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var error_service_6, router_2, auth_service_3, user_2, core_11, common_2;
    var SigninComponent;
    return {
        setters:[
            function (error_service_6_1) {
                error_service_6 = error_service_6_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            },
            function (auth_service_3_1) {
                auth_service_3 = auth_service_3_1;
            },
            function (user_2_1) {
                user_2 = user_2_1;
            },
            function (core_11_1) {
                core_11 = core_11_1;
            },
            function (common_2_1) {
                common_2 = common_2_1;
            }],
        execute: function() {
            SigninComponent = (function () {
                function SigninComponent(_fb, _authService, _router, _errorService) {
                    this._fb = _fb;
                    this._authService = _authService;
                    this._router = _router;
                    this._errorService = _errorService;
                }
                SigninComponent.prototype.onSubmit = function () {
                    var _this = this;
                    var user = new user_2.User(this.myForm.value.email, this.myForm.value.password);
                    // Try to sign in with auth service
                    this._authService.signin(user).subscribe(function (data) {
                        localStorage.setItem('token', data.token);
                        localStorage.setItem('userId', data.userId);
                        _this._router.navigateByUrl('/');
                    }, function (error) { return _this._errorService.handleError(error); });
                };
                SigninComponent.prototype.ngOnInit = function () {
                    this.myForm = this._fb.group({
                        email: ['', common_2.Validators.compose([
                                common_2.Validators.required,
                                this.isEmail
                            ])],
                        password: ['', common_2.Validators.required]
                    });
                };
                SigninComponent.prototype.isEmail = function (control) {
                    // Regex magic which matches 99.9 % of all emails
                    if (!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")) {
                        return { invalidMail: true };
                    }
                };
                SigninComponent = __decorate([
                    core_11.Component({
                        selector: 'my-signin',
                        template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input [ngFormControl]=\"myForm.find('email')\" type=\"email\" id=\"email\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input [ngFormControl]=\"myForm.find('password')\" type=\"password\" id=\"password\" class=\"form-control\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">Sign Up</button>\n            </form>\n        </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_2.FormBuilder, auth_service_3.AuthService, router_2.Router, (typeof (_a = typeof error_service_6.ErrorService !== 'undefined' && error_service_6.ErrorService) === 'function' && _a) || Object])
                ], SigninComponent);
                return SigninComponent;
                var _a;
            }());
            exports_14("SigninComponent", SigninComponent);
        }
    }
});
System.register("auth/authentication.component", ["auth/auth.service", "angular2/core", "auth/signup.component", "angular2/router", "auth/logout.component", "auth/signin.component"], function(exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var auth_service_4, core_12, signup_component_1, router_3, logout_component_1, signin_component_1;
    var AuthenticationComponent;
    return {
        setters:[
            function (auth_service_4_1) {
                auth_service_4 = auth_service_4_1;
            },
            function (core_12_1) {
                core_12 = core_12_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
            },
            function (logout_component_1_1) {
                logout_component_1 = logout_component_1_1;
            },
            function (signin_component_1_1) {
                signin_component_1 = signin_component_1_1;
            }],
        execute: function() {
            AuthenticationComponent = (function () {
                function AuthenticationComponent(_authService) {
                    this._authService = _authService;
                }
                AuthenticationComponent.prototype.isLoggedIn = function () {
                    return this._authService.isLoggedIn();
                };
                AuthenticationComponent = __decorate([
                    core_12.Component({
                        selector: 'my-auth',
                        template: "\n        <header class=\"row spacing\">\n            <nav class=\"col-md-8 col-md-offset-2\">\n                <ul class=\"nav nav-tabs\">\n                    <li><a [routerLink]=\"['Signup']\">Sign Up</a></li>\n                    <li><a [routerLink]=\"['Signin']\" *ngIf=\"!isLoggedIn()\">Sign In</a></li>\n                    <li><a [routerLink]=\"['Logout']\" *ngIf=\"isLoggedIn()\">Log Out</a></li>\n                </ul>\n            </nav>\n        </header>\n        <div class=\"row spacing\">\n            <router-outlet></router-outlet>\n        </div>\n    ",
                        directives: [router_3.ROUTER_DIRECTIVES],
                        styles: ["\n        .router-link-active: {\n            color: #555;\n            cursor: default;\n            background-color: #fff;\n            border: 1px solid #ddd;\n            border-bottom-color: transparent;\n        }\n    "]
                    }),
                    router_3.RouteConfig([
                        { path: '/signup', name: 'Signup', component: signup_component_1.SignupComponent, useAsDefault: true },
                        { path: '/signin', name: 'Signin', component: signin_component_1.SigninComponent },
                        { path: '/logout', name: 'Logout', component: logout_component_1.LogoutComponent },
                    ]), 
                    __metadata('design:paramtypes', [auth_service_4.AuthService])
                ], AuthenticationComponent);
                return AuthenticationComponent;
            }());
            exports_15("AuthenticationComponent", AuthenticationComponent);
        }
    }
});
System.register("header.component", ["angular2/core", "angular2/router"], function(exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var core_13, router_4;
    var HeaderComponent;
    return {
        setters:[
            function (core_13_1) {
                core_13 = core_13_1;
            },
            function (router_4_1) {
                router_4 = router_4_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                }
                HeaderComponent = __decorate([
                    core_13.Component({
                        selector: 'my-header',
                        template: "\n        <header class=\"row\">\n            <nav class=\"col-md-8 col-md-offset-2\">\n                <ul class=\"nav nav-pills\">\n                    <li><a [routerLink]=\"['Messages']\">Messages</a></li>\n                    <li><a [routerLink]=\"['Auth']\">Authentication</a></li>\n                </ul>\n            </nav>\n        </header>\n    ",
                        directives: [router_4.ROUTER_DIRECTIVES],
                        styles: ["\n        header {\n            margin-bottom: 20px;\n        }\n    \n        ul {\n          text-align: center;  \n        }\n        \n        li {\n            float: none;\n            display: inline-block;\n        }\n        \n        .router-link-active {\n            background-color: #337ab7;\n            color: white;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_16("HeaderComponent", HeaderComponent);
        }
    }
});
System.register("app.component", ["errors/error.component", 'angular2/core', "angular2/router", "messages/messages.component", "auth/authentication.component", "header.component"], function(exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    var error_component_1, core_14, router_5, messages_component_1, authentication_component_1, header_component_1;
    var AppComponent;
    return {
        setters:[
            function (error_component_1_1) {
                error_component_1 = error_component_1_1;
            },
            function (core_14_1) {
                core_14 = core_14_1;
            },
            function (router_5_1) {
                router_5 = router_5_1;
            },
            function (messages_component_1_1) {
                messages_component_1 = messages_component_1_1;
            },
            function (authentication_component_1_1) {
                authentication_component_1 = authentication_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_14.Component({
                        selector: 'my-app',
                        template: "\n\t\t\t<div class=\"container\">\n\t\t\t\t\t<my-header></my-header>\n\t\t\t\t\t<router-outlet></router-outlet>\n\t\t\t<div>\n\t\t\t<my-error></my-error>\n    ",
                        directives: [router_5.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, error_component_1.ErrorComponent]
                    }),
                    router_5.RouteConfig([
                        { path: '/', name: 'Messages', component: messages_component_1.MessagesComponent, useAsDefault: true },
                        { path: '/auth/...', name: 'Auth', component: authentication_component_1.AuthenticationComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_17("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['../errors/error.service', 'angular2/platform/browser', "app.component", "messages/message.service", "angular2/router", "angular2/core", "angular2/http", "auth/auth.service"], function(exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    var error_service_7, browser_1, app_component_1, message_service_4, router_6, core_15, http_3, auth_service_5;
    return {
        setters:[
            function (error_service_7_1) {
                error_service_7 = error_service_7_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (message_service_4_1) {
                message_service_4 = message_service_4_1;
            },
            function (router_6_1) {
                router_6 = router_6_1;
            },
            function (core_15_1) {
                core_15 = core_15_1;
            },
            function (http_3_1) {
                http_3 = http_3_1;
            },
            function (auth_service_5_1) {
                auth_service_5 = auth_service_5_1;
            }],
        execute: function() {
            // Add providers needed for the app functionality
            browser_1.bootstrap(app_component_1.AppComponent, [message_service_4.MessageService, auth_service_5.AuthService, error_service_7.ErrorService, router_6.ROUTER_PROVIDERS, core_15.provide(router_6.LocationStrategy, { useClass: router_6.HashLocationStrategy }), http_3.HTTP_PROVIDERS]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9ycy9lcnJvci50cyIsImVycm9ycy9lcnJvci5zZXJ2aWNlLnRzIiwiZXJyb3JzL2Vycm9yLmNvbXBvbmVudC50cyIsIm1lc3NhZ2VzL21lc3NhZ2UudHMiLCJtZXNzYWdlcy9tZXNzYWdlLnNlcnZpY2UudHMiLCJtZXNzYWdlcy9tZXNzYWdlLWlucHV0LmNvbXBvbmVudC50cyIsIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIiwibWVzc2FnZXMvbWVzc2FnZS1saXN0LmNvbXBvbmVudC50cyIsIm1lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC50cyIsImF1dGgvdXNlci50cyIsImF1dGgvYXV0aC5zZXJ2aWNlLnRzIiwiYXV0aC9zaWdudXAuY29tcG9uZW50LnRzIiwiYXV0aC9sb2dvdXQuY29tcG9uZW50LnRzIiwiYXV0aC9zaWduaW4uY29tcG9uZW50LnRzIiwiYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQudHMiLCJoZWFkZXIuY29tcG9uZW50LnRzIiwiYXBwLmNvbXBvbmVudC50cyIsImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztZQUFBO2dCQUNJLGVBQW1CLEtBQWEsRUFBUyxPQUFlO29CQUFyQyxVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUFTLFlBQU8sR0FBUCxPQUFPLENBQVE7Z0JBQUcsQ0FBQztnQkFDaEUsWUFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQseUJBRUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDQUQ7Z0JBQUE7b0JBQ0ksa0JBQWEsR0FBRyxJQUFJLG1CQUFZLEVBQVMsQ0FBQztnQkFNOUMsQ0FBQztnQkFKRyxrQ0FBVyxHQUFYLFVBQVksS0FBVTtvQkFDbEIsSUFBTSxTQUFTLEdBQUcsSUFBSSxhQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM5RCxJQUFJLENBQUMsYUFBYSxDQUFD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WUFBWSxFQUFFLElBQUksRUFBQzt3QkFDL0UsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGtEQUF1QixFQUFDO3FCQUNyRSxDQUFDOztnQ0FBQTtnQkFHRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsd0NBRUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNkRCxpREFBaUQ7WUFDakQsbUJBQVMsQ0FBQyw0QkFBWSxFQUFFLENBQUMsZ0NBQWMsRUFBRSwwQkFBVyxFQUFFLDRCQUFZLEVBQUUseUJBQWdCLEVBQUUsZUFBTyxDQUFDLHlCQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFDLDZCQUFvQixFQUFDLENBQUMsRUFBRSxxQkFBYyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiIuLi8uLi8uLi9NZXNzYWdlX0FwcC9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0aXRsZTogc3RyaW5nLCBwdWJsaWMgbWVzc2FnZTogc3RyaW5nKSB7fVxufSIsImltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtFcnJvcn0gZnJvbSBcIi4vZXJyb3JcIjtcbmV4cG9ydCBjbGFzcyBFcnJvclNlcnZpY2Uge1xuICAgIGVycm9yT2NjdXJyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEVycm9yPigpO1xuXG4gICAgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBuZXcgRXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmVycm9yT2NjdXJyZWQuZW1pdChlcnJvckRhdGEpO1xuICAgIH1cbn0iLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtFcnJvcn0gZnJvbSBcIi4vZXJyb3JcIjtcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tIFwiLi9lcnJvci5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWVycm9yJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIiBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBlcnJvckRpc3BsYXl9XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzogZXJyb3JEaXNwbGF5fVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiAoY2xpY2spPVwib25FcnJvckhhbmRsZWQoKVwiPjxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPnt7ZXJyb3JEYXRhPy50aXRsZX19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICA8cD57e2Vycm9yRGF0YT8ubWVzc2FnZX19PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiAoY2xpY2spPVwib25FcnJvckhhbmRsZWQoKVwiPkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PjwhLS0gLy5tb2RhbC1jb250ZW50IC0tPlxuICAgICAgICAgICAgPC9kaXY+PCEtLSAvLm1vZGFsLWRpYWxvZyAtLT5cbiAgICAgICAgPC9kaXY+PCEtLSAvLm1vZGFsIC0tPiAgXG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIC5iYWNrZHJvcCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgRXJyb3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGVycm9yRGlzcGxheSA9ICdub25lJztcbiAgICBlcnJvckRhdGE6IEVycm9yO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlKSB7fVxuXG4gICAgb25FcnJvckhhbmRsZWQoKSB7XG4gICAgICAgIHRoaXMuZXJyb3JEaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9lcnJvclNlcnZpY2UuZXJyb3JPY2N1cnJlZC5zdWJzY3JpYmUoXG4gICAgICAgICAgZXJyb3JEYXRhID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5lcnJvckRhdGEgPSBlcnJvckRhdGE7XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JEaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcbiAgICBjb250ZW50OiBzdHJpbmc7XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICBtZXNzYWdlSWQ6IHN0cmluZztcbiAgICB1c2VySWQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yIChjb250ZW50OiBzdHJpbmcsIG1lc3NhZ2VJZD86IHN0cmluZywgdXNlcm5hbWU/OiBzdHJpbmcsIHVzZXJJZD86IHN0cmluZykge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB0aGlzLm1lc3NhZ2VJZCA9IG1lc3NhZ2VJZDtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICB9XG59IiwiaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCI7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQge0luamVjdGFibGUsIEV2ZW50RW1pdHRlcn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XG4gICAgbWVzc2FnZXM6IE1lc3NhZ2VbXSA9IFtdO1xuICAgIG1lc3NhZ2VJc0VkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPE1lc3NhZ2U+KCk7XG4gICAgXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XG5cbiAgICBhZGRNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcbiAgICAgICAgLy8gQ2hlY2sgdG9rZW5cbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/ICc/dG9rZW49JyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogJyc7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbWVzc2FnZScgKyB0b2tlbiwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmo7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShkYXRhLmNvbnRlbnQsIGRhdGEuX2lkLCBkYXRhLnVzZXIuZmlyc3ROYW1lLCBkYXRhLnVzZXIuX2lkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcbiAgICB9XG5cbiAgICBnZXRNZXNzYWdlcygpIHtcbiAgICAgICAgLy8gR2V0IG1lc3NhZ2VzIGZyb20gdGhlIGJhY2tlbmQgc2F2ZSB0byBhcnJheVxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tZXNzYWdlJylcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xuICAgICAgICAgICAgICAgIGxldCBvYmpzOiBhbnlbXSA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhbmQgcHVzaCBtZXNzYWdzIGZyb20gYmFja2VuZCB0byBvYmpzIGFycmF5XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gbmV3IE1lc3NhZ2UoZGF0YVtpXS5jb250ZW50LCBkYXRhW2ldLl9pZCwgZGF0YVtpXS51c2VyLmZpcnN0TmFtZSwgZGF0YVtpXS51c2VyLl9pZCk7XG4gICAgICAgICAgICAgICAgICAgIG9ianMucHVzaChtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmpzO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xuICAgIH1cblxuICAgIHVwZGF0ZU1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSkge1xuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xuICAgICAgICAvLyBDaGVjayB0b2tlblxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gJz90b2tlbj0nICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJztcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBhdGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbWVzc2FnZS8nICsgbWVzc2FnZS5tZXNzYWdlSWQgKyB0b2tlbiwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcbiAgICB9XG5cbiAgICBlZGl0TWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUlzRWRpdC5lbWl0KG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGRlbGV0ZU1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZSh0aGlzLm1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSksIDEpO1xuICAgICAgICAvLyBDaGVjayB0b2tlblxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gJz90b2tlbj0nICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJztcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSgnaHR0cDovL2xvY2FsaG9zdDozMDAwL21lc3NhZ2UvJyArIG1lc3NhZ2UubWVzc2FnZUlkICsgdG9rZW4pXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xuICAgIH1cbn0iLCJpbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSAnLi4vLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2UnO1xuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSBcIi4vbWVzc2FnZS5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LW1lc3NhZ2UtaW5wdXQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoZi52YWx1ZSlcIiAjZj1cIm5nRm9ybVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb250ZW50XCI+Q29udGVudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJjb250ZW50XCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiY29udGVudFwiICNpbnB1dCBbbmdNb2RlbF09XCJtZXNzYWdlPy5jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj57eyAhbWVzc2FnZSA/ICdTZW5kIE1lc3NhZ2UnIDogJ1NhdmUgTWVzc2FnZScgfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgKGNsaWNrKT1cIm9uQ2FuY2VsKClcIiAqbmdJZj1cIm1lc3NhZ2VcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZUlucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBtZXNzYWdlOiBNZXNzYWdlID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHt9XG5cbiAgICBvblN1Ym1pdChmb3JtOmFueSkge1xuICAgICAgICBpZiAodGhpcy5tZXNzYWdlKSB7XG4gICAgICAgICAgICAvLyBOb3QgbnVsbCwgZWRpdCBtc2csIGNoYW5nZSBmaWVsZCBvYmplY3RcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5jb250ZW50ID0gZm9ybS5jb250ZW50OyBcbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLnVwZGF0ZU1lc3NhZ2UodGhpcy5tZXNzYWdlKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgLy8gTmV3IG9iamVjdCBvbiBwcm9wZXJ0eVxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5vdCBudWxsLCBjcmVhdGUgbXNnXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlOk1lc3NhZ2UgPSBuZXcgTWVzc2FnZShmb3JtLmNvbnRlbnQsIG51bGwsICdEdW1teScpO1xuICAgICAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuYWRkTWVzc2FnZShtZXNzYWdlKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5tZXNzYWdlcy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2FuY2VsKCkge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBudWxsO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5tZXNzYWdlSXNFZGl0LnN1YnNjcmliZShcbiAgICAgICAgICAgIG1lc3NhZ2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tICcuLi8uLi9lcnJvcnMvZXJyb3Iuc2VydmljZSc7XG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCI7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9tZXNzYWdlLnNlcnZpY2VcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktbWVzc2FnZScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgIHt7IG1lc3NhZ2UuY29udGVudCB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBtZXNzYWdlLnVzZXJuYW1lIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpZ1wiICpuZ0lmPVwiYmVsb25nc1RvVXNlcigpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJvbkVkaXQoKVwiPkVkaXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJvbkRlbGV0ZSgpXCI+RGVsZXRlPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICBgLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgLmF1dGhvciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICB9XG4gICAgICAgIC5jb25maWcge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogMTklO1xuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZUNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgbWVzc2FnZTpNZXNzYWdlO1xuICAgIEBPdXRwdXQoKSBlZGl0Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHt9XG5cbiAgICBvbkVkaXQoKSB7XG4gICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmVkaXRNZXNzYWdlKHRoaXMubWVzc2FnZSk7XG4gICAgfVxuXG4gICAgb25EZWxldGUoKSB7XG4gICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmRlbGV0ZU1lc3NhZ2UodGhpcy5tZXNzYWdlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgYmVsb25nc1RvVXNlcigpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSA9PSB0aGlzLm1lc3NhZ2UudXNlcklkO1xuICAgIH1cbn0iLCJpbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSAnLi4vLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2UnO1xuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7TWVzc2FnZUNvbXBvbmVudH0gZnJvbSBcIi4vbWVzc2FnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSBcIi4vbWVzc2FnZS5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LW1lc3NhZ2UtbGlzdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgIDxteS1tZXNzYWdlICpuZ0Zvcj1cIiNtZXNzYWdlIG9mIG1lc3NhZ2VzXCIgW21lc3NhZ2VdPVwibWVzc2FnZVwiIChlZGl0Q2xpY2tlZCk9XCJtZXNzYWdlLmNvbnRlbnQgPSAkZXZlbnRcIj48L215LW1lc3NhZ2U+ICAgICBcbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW01lc3NhZ2VDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHt9XG5cbiAgICBtZXNzYWdlczogTWVzc2FnZVtdO1xuICAgIC8vIENhbGxlZCBhZnRlciBpbml0aWFsaXphdGlvblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5nZXRNZXNzYWdlcygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG1lc3NhZ2VzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5tZXNzYWdlcyA9IG1lc3NhZ2VzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG59IiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge01lc3NhZ2VJbnB1dENvbXBvbmVudH0gZnJvbSBcIi4vbWVzc2FnZS1pbnB1dC5jb21wb25lbnRcIjtcbmltcG9ydCB7TWVzc2FnZUxpc3RDb21wb25lbnR9IGZyb20gXCIuL21lc3NhZ2UtbGlzdC5jb21wb25lbnRcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktbWVzc2FnZXMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxuICAgICAgICAgICAgPG15LW1lc3NhZ2UtaW5wdXQ+PC9teS1tZXNzYWdlLWlucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBzcGFjaW5nXCI+XG4gICAgICAgICAgICA8bXktbWVzc2FnZS1saXN0PjwvbXktbWVzc2FnZS1saXN0PlxuICAgICAgICA8L2Rpdj4gXG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbTWVzc2FnZUxpc3RDb21wb25lbnQsIE1lc3NhZ2VJbnB1dENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZXNDb21wb25lbnQge1xuICAgIFxufSIsImV4cG9ydCBjbGFzcyBVc2VyIHtcblx0Y29uc3RydWN0b3IocHVibGljIGVtYWlsOiBzdHJpbmcsIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nLCBwdWJsaWMgZmlyc3ROYW1lPzogc3RyaW5nLCBwdWJsaWMgbGFzdE5hbWU/OiBzdHJpbmcpIHt9XG59IiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi91c2VyXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCAncnhqcy9SeCc7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwKSB7fVxuICAgIFxuICAgIHNpZ251cCh1c2VyOiBVc2VyKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh1c2VyKTtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXInLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xuICAgIH1cblxuICAgIHNpZ25pbih1c2VyOiBVc2VyKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh1c2VyKTtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlci9zaWduaW4nLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xuICAgIH1cbiAgICBcbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIC8vIENsZWFyIHVzZXJJZCBhbmQgdG9rZW5cbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgfVxuICAgIFxuICAgIGlzTG9nZ2VkSW4oKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSAhPT0gbnVsbDtcbiAgICB9XG59IiwiaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gJy4uLy4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi91c2VyJztcbmltcG9ydCAge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgQ29udHJvbEdyb3VwLCBWYWxpZGF0b3JzLCBDb250cm9sfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXNpZ251cCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaXJzdE5hbWVcIj5GaXJzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdmaXJzdE5hbWUnKVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmaXJzdE5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsYXN0TmFtZVwiPkxhc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnbGFzdE5hbWUnKVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsYXN0TmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2VtYWlsJylcIiB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgncGFzc3dvcmQnKVwiIHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgW2Rpc2FibGVkXT1cIiFteUZvcm0udmFsaWRcIj5TaWduIFVwPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbXlGb3JtOiBDb250cm9sR3JvdXA7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjpGb3JtQnVpbGRlciwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcih0aGlzLm15Rm9ybS52YWx1ZS5lbWFpbCwgdGhpcy5teUZvcm0udmFsdWUucGFzc3dvcmQsIHRoaXMubXlGb3JtLnZhbHVlLmZpcnN0TmFtZSwgdGhpcy5teUZvcm0udmFsdWUubGFzdE5hbWUpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2Uuc2lnbnVwKHVzZXIpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICAgICAgICBmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBsYXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICB0aGlzLmlzRW1haWxcbiAgICAgICAgICAgIF0pXSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNFbWFpbChjb250cm9sOiBDb250cm9sKToge1tzOiBzdHJpbmddOiBib29sZWFufSB7XG4gICAgICAgIC8vIFJlZ2V4IG1hZ2ljLCB3aXRoIEpzIGZ1bmN0aW9uXG4gICAgICAgIGlmICghY29udHJvbC52YWx1ZS5tYXRjaChcIlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1wiKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtpbnZhbGlkTWFpbDogdHJ1ZX1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1sb2dvdXQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiAoY2xpY2spPVwib25Mb2dvdXQoKVwiPkxvZ291dDwvYnV0dG9uPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBMb2dvdXRDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcblxuICAgIH1cbiAgICBcbiAgICBvbkxvZ291dCgpIHtcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1NpZ25pbiddKTtcbiAgICB9XG59IiwiaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gJy4uLy4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtVc2VyfSBmcm9tICcuL3VzZXInO1xuaW1wb3J0ICB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAsIFZhbGlkYXRvcnMsIENvbnRyb2x9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktc2lnbmluJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2VtYWlsJylcIiB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgncGFzc3dvcmQnKVwiIHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgW2Rpc2FibGVkXT1cIiFteUZvcm0udmFsaWRcIj5TaWduIFVwPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25pbkNvbXBvbmVudCB7XG4gICAgbXlGb3JtOiBDb250cm9sR3JvdXA7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjpGb3JtQnVpbGRlciwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIodGhpcy5teUZvcm0udmFsdWUuZW1haWwsIHRoaXMubXlGb3JtLnZhbHVlLnBhc3N3b3JkKTtcbiAgICAgICAgLy8gVHJ5IHRvIHNpZ24gaW4gd2l0aCBhdXRoIHNlcnZpY2VcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2Uuc2lnbmluKHVzZXIpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4pO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCBkYXRhLnVzZXJJZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgIHRoaXMuaXNFbWFpbFxuICAgICAgICAgICAgXSldLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0VtYWlsKGNvbnRyb2w6IENvbnRyb2wpOiB7W3M6IHN0cmluZ106IGJvb2xlYW59IHtcbiAgICAgICAgLy8gUmVnZXggbWFnaWMgd2hpY2ggbWF0Y2hlcyA5OS45ICUgb2YgYWxsIGVtYWlsc1xuICAgICAgICBpZiAoIWNvbnRyb2wudmFsdWUubWF0Y2goXCJbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cIikpIHtcbiAgICAgICAgICAgIHJldHVybiB7aW52YWxpZE1haWw6IHRydWV9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHtOZ0lmfSBmcm9tICdhbmd1bGFyMi93ZWJfd29ya2VyL3dvcmtlcic7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7U2lnbnVwQ29tcG9uZW50fSBmcm9tIFwiLi9zaWdudXAuY29tcG9uZW50XCI7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtMb2dvdXRDb21wb25lbnR9IGZyb20gXCIuL2xvZ291dC5jb21wb25lbnRcIjtcbmltcG9ydCB7U2lnbmluQ29tcG9uZW50fSBmcm9tIFwiLi9zaWduaW4uY29tcG9uZW50XCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWF1dGgnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydTaWdudXAnXVwiPlNpZ24gVXA8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnU2lnbmluJ11cIiAqbmdJZj1cIiFpc0xvZ2dlZEluKClcIj5TaWduIEluPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0xvZ291dCddXCIgKm5nSWY9XCJpc0xvZ2dlZEluKClcIj5Mb2cgT3V0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBzcGFjaW5nXCI+XG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIC5yb3V0ZXItbGluay1hY3RpdmU6IHtcbiAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgIGBdXG5cbn0pXG5AUm91dGVDb25maWcoW1xuICAgIHtwYXRoOiAnL3NpZ251cCcsIG5hbWU6ICdTaWdudXAnLCBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlfSxcbiAgICB7cGF0aDogJy9zaWduaW4nLCBuYW1lOiAnU2lnbmluJywgY29tcG9uZW50OiBTaWduaW5Db21wb25lbnR9LFxuICAgIHtwYXRoOiAnL2xvZ291dCcsIG5hbWU6ICdMb2dvdXQnLCBjb21wb25lbnQ6IExvZ291dENvbXBvbmVudH0sXG5dKVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgICBpc0xvZ2dlZEluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xuICAgIH1cbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktaGVhZGVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi1waWxsc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydNZXNzYWdlcyddXCI+TWVzc2FnZXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnQXV0aCddXCI+QXV0aGVudGljYXRpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHVsIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5yb3V0ZXItbGluay1hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XG4gICAgXG59IiwiaW1wb3J0IHtFcnJvckNvbXBvbmVudH0gZnJvbSAnLi9lcnJvcnMvZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge01lc3NhZ2VzQ29tcG9uZW50fSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnRcIjtcbmltcG9ydCB7QXV0aGVudGljYXRpb25Db21wb25lbnR9IGZyb20gXCIuL2F1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50XCI7XG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSBcIi4vaGVhZGVyLmNvbXBvbmVudFwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PG15LWhlYWRlcj48L215LWhlYWRlcj5cblx0XHRcdFx0XHQ8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0PG15LWVycm9yPjwvbXktZXJyb3I+XG4gICAgYCxcblx0XHRkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIEhlYWRlckNvbXBvbmVudCwgRXJyb3JDb21wb25lbnRdXG59KVxuQFJvdXRlQ29uZmlnKFtcblx0e3BhdGg6ICcvJywgbmFtZTogJ01lc3NhZ2VzJywgY29tcG9uZW50OiBNZXNzYWdlc0NvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlfSxcblx0e3BhdGg6ICcvYXV0aC8uLi4nLCBuYW1lOiAnQXV0aCcsIGNvbXBvbmVudDogQXV0aGVudGljYXRpb25Db21wb25lbnR9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbn0iLCJpbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSAnLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2UnO1xuLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuL21lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTLCBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneX0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtwcm92aWRlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4vYXV0aC9hdXRoLnNlcnZpY2UnO1xuLy8gQWRkIHByb3ZpZGVycyBuZWVkZWQgZm9yIHRoZSBhcHAgZnVuY3Rpb25hbGl0eVxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW01lc3NhZ2VTZXJ2aWNlLCBBdXRoU2VydmljZSwgRXJyb3JTZXJ2aWNlLCBST1VURVJfUFJPVklERVJTLCBwcm92aWRlKExvY2F0aW9uU3RyYXRlZ3ksIHt1c2VDbGFzczpIYXNoTG9jYXRpb25TdHJhdGVneX0pLCBIVFRQX1BST1ZJREVSU10pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
