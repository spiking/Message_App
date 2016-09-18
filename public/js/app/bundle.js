var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("messages/message", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
            exports_1("Message", Message);
        }
    }
});
System.register("messages/message.component", ["angular2/core", "messages/message"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_1, message_1;
    var MessageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            }],
        execute: function() {
            MessageComponent = (function () {
                function MessageComponent() {
                    this.editClicked = new core_1.EventEmitter();
                    this.show = true;
                }
                MessageComponent.prototype.onClick = function () {
                    this.editClicked.emit('Changed');
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', message_1.Message)
                ], MessageComponent.prototype, "message", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MessageComponent.prototype, "editClicked", void 0);
                MessageComponent = __decorate([
                    core_1.Component({
                        selector: 'my-message',
                        template: "\n\t\t\t\t<article class=\"panel panel-default\" *ngIf=\"show\">\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t{{ message.content }}\n\t\t\t\t\t</div>\n\t\t\t\t\t<footer class=\"panel-footer\">\n\t\t\t\t\t\t<div class=\"author\">\n\t\t\t\t\t\t\t{{ message.username }}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"config\">\n\t\t\t\t\t\t\t<a href=\"#\" (click)=\"onClick()\">Edit</a>\n\t\t\t\t\t\t\t<a href=\"#\">Delete</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</footer>\n\t\t\t\t</article>\n\t",
                        styles: ["\n\t\t.author {\n\t\t\tdisplay: inline-block;\n\t\t\tfont-style: italic;\n\t\t\tfont-size: 12px;\n\t\t\twidth: 80%;\n\t\t}\n\t\t.config {\n\t\t\tdisplay: inline-block;\n\t\t\ttext-align: right;\n\t\t\tfont-size: 12px;\n\t\t\twidth: 19%;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageComponent);
                return MessageComponent;
            }());
            exports_2("MessageComponent", MessageComponent);
        }
    }
});
System.register("messages/message-list.component", ["angular2/core", "messages/message.component", "messages/message"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, message_component_1, message_2;
    var MessageListComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (message_component_1_1) {
                message_component_1 = message_component_1_1;
            },
            function (message_2_1) {
                message_2 = message_2_1;
            }],
        execute: function() {
            MessageListComponent = (function () {
                function MessageListComponent() {
                    this.messages = [new message_2.Message('A New Message', null, 'Adam1'),
                        new message_2.Message('A Second Message', null, 'Adam2'),
                        new message_2.Message('A Third Message', null, 'Adam3')
                    ];
                }
                MessageListComponent = __decorate([
                    core_2.Component({
                        selector: 'my-message-list',
                        template: "\n\t\t\t<section class=\"col-md-8 col-md-offset-2\">\n      \t\t\t<my-message *ngFor=\"#message of messages\" [message]=\"message\" (editClicked)=\"message.content = $event\"></my-message>\n\t\t\t</section>\n\t",
                        directives: [message_component_1.MessageComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageListComponent);
                return MessageListComponent;
            }());
            exports_3("MessageListComponent", MessageListComponent);
        }
    }
});
System.register("messages/message-input.component", ["angular2/core", "messages/message"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_3, message_3;
    var MessageInputComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (message_3_1) {
                message_3 = message_3_1;
            }],
        execute: function() {
            MessageInputComponent = (function () {
                function MessageInputComponent() {
                }
                MessageInputComponent.prototype.onCreate = function () {
                    var message = new message_3.Message(content, null, 'Dummy User');
                    console.log(message);
                };
                MessageInputComponent = __decorate([
                    core_3.Component({
                        selector: 'my-message-input',
                        template: "\n\t\t<section class=\"col-md-8 col-md-offset-2\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"content\">Content</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"content\" #input>\n\t\t\t</div>\n\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"onCreate(input.value)\">Send Message</button>\n\t\t</section>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageInputComponent);
                return MessageInputComponent;
            }());
            exports_4("MessageInputComponent", MessageInputComponent);
        }
    }
});
System.register("app.component", ['angular2/core', "messages/message-list.component", "messages/message-input.component"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_4, message_list_component_1, message_input_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (message_list_component_1_1) {
                message_list_component_1 = message_list_component_1_1;
            },
            function (message_input_component_1_1) {
                message_input_component_1 = message_input_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_4.Component({
                        selector: 'my-app',
                        template: "\n\t\t<div class=\"row spacing\">\n\t\t\t<my-message-input></my-message-input>\n\t\t</div>\n  \t\t<div class=\"row spacing\">\n\t\t\t<my-message-list></my-message-list>\n\t\t</div>\n    ",
                        directives: [message_list_component_1.MessageListComponent, message_input_component_1.MessageInputComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_5("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});
System.register("auth/user", [], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
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
            exports_7("User", User);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UudHMiLCJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC50cyIsIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiLCJtZXNzYWdlcy9tZXNzYWdlLWlucHV0LmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIiwiYXV0aC91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFNQyxpQkFBYSxPQUFlLEVBQUUsU0FBa0IsRUFBRSxRQUFpQixFQUFFLE1BQWU7b0JBQ25GLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO29CQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUN0QixDQUFDO2dCQUNGLGNBQUM7WUFBRCxDQVpBLEFBWUMsSUFBQTtZQVpELDZCQVlDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ3lCRDtnQkFBQTtvQkFFVyxnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO29CQUNuRCxTQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUtiLENBQUM7Z0JBSEEsa0NBQU8sR0FBUDtvQkFDQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFORDtvQkFBQyxZQUFLLEVBQUU7O2lFQUFBO2dCQUNSO29CQUFDLGFBQU0sRUFBRTs7cUVBQUE7Z0JBcENWO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSwrZUFlVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyx5UEFhUixDQUFDO3FCQUNGLENBQUM7O29DQUFBO2dCQVVGLHVCQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCwrQ0FRQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNoQ0Q7Z0JBQUE7b0JBQ0UsYUFBUSxHQUFjLENBQUMsSUFBSSxpQkFBTyxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO3dCQUMzRCxJQUFJLGlCQUFPLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQzt3QkFDOUMsSUFBSSxpQkFBTyxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7cUJBQzdDLENBQUM7Z0JBQ1YsQ0FBQztnQkFmRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLFFBQVEsRUFBRSxvTkFJVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztxQkFDOUIsQ0FBQzs7d0NBQUE7Z0JBT0YsMkJBQUM7WUFBRCxDQUxBLEFBS0MsSUFBQTtZQUxELHVEQUtDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ0hEO2dCQUFBO2dCQUtBLENBQUM7Z0JBSkEsd0NBQVEsR0FBUjtvQkFDQyxJQUFNLE9BQU8sR0FBWSxJQUFJLGlCQUFPLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztvQkFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdEIsQ0FBQztnQkFqQkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsa0JBQWtCO3dCQUM1QixRQUFRLEVBQUUscVdBUVQ7cUJBQ0QsQ0FBQzs7eUNBQUE7Z0JBT0YsNEJBQUM7WUFBRCxDQUxBLEFBS0MsSUFBQTtZQUxELHlEQUtDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ0xEO2dCQUFBO2dCQUVBLENBQUM7Z0JBZEQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDRMQU9UO3dCQUNKLFVBQVUsRUFBRSxDQUFDLDZDQUFvQixFQUFFLCtDQUFxQixDQUFDO3FCQUN6RCxDQUFDOztnQ0FBQTtnQkFHRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNiRCxtQkFBUyxDQUFDLDRCQUFZLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7WUNKeEI7Z0JBQ0MsY0FBbUIsS0FBYSxFQUFTLFFBQWdCLEVBQVMsU0FBa0IsRUFBUyxRQUFpQjtvQkFBM0YsVUFBSyxHQUFMLEtBQUssQ0FBUTtvQkFBUyxhQUFRLEdBQVIsUUFBUSxDQUFRO29CQUFTLGNBQVMsR0FBVCxTQUFTLENBQVM7b0JBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUztnQkFBRyxDQUFDO2dCQUNuSCxXQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1QkFFQyxDQUFBIiwiZmlsZSI6Ii4uLy4uLy4uL1NlZWQgUHJvamVjdC9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTWVzc2FnZSB7XHJcblx0Y29udGVudDogc3RyaW5nO1xyXG5cdHVzZXJuYW1lOiBzdHJpbmc7XHJcblx0bWVzc2FnZUlkOiBzdHJpbmc7XHJcblx0dXNlcklkOiBzdHJpbmc7XHJcblx0XHJcblx0Y29uc3RydWN0b3IgKGNvbnRlbnQ6IHN0cmluZywgbWVzc2FnZUlkPzogc3RyaW5nLCB1c2VybmFtZT86IHN0cmluZywgdXNlcklkPzogc3RyaW5nKSB7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG5cdFx0dGhpcy5tZXNzYWdlSWQgPSBtZXNzYWdlSWQ7XHJcblx0XHR0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcblx0XHR0aGlzLnVzZXJJZCA9IHVzZXJJZDtcclxuXHR9XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL21lc3NhZ2VcIlxyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdteS1tZXNzYWdlJyxcclxuXHR0ZW1wbGF0ZTogYFxyXG5cdFx0XHRcdDxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiICpuZ0lmPVwic2hvd1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuXHRcdFx0XHRcdFx0e3sgbWVzc2FnZS5jb250ZW50IH19XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxmb290ZXIgY2xhc3M9XCJwYW5lbC1mb290ZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImF1dGhvclwiPlxyXG5cdFx0XHRcdFx0XHRcdHt7IG1lc3NhZ2UudXNlcm5hbWUgfX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb25maWdcIj5cclxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIChjbGljayk9XCJvbkNsaWNrKClcIj5FZGl0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+RGVsZXRlPC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZm9vdGVyPlxyXG5cdFx0XHRcdDwvYXJ0aWNsZT5cclxuXHRgLFxyXG5cdHN0eWxlczogW2BcclxuXHRcdC5hdXRob3Ige1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHR3aWR0aDogODAlO1xyXG5cdFx0fVxyXG5cdFx0LmNvbmZpZyB7XHJcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0d2lkdGg6IDE5JTtcclxuXHRcdH1cclxuXHRgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnQge1xyXG5cdEBJbnB1dCgpIG1lc3NhZ2U6IE1lc3NhZ2U7XHJcblx0QE91dHB1dCgpIGVkaXRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblx0c2hvdyA9IHRydWU7XHJcblx0IFxyXG5cdG9uQ2xpY2soKSB7XHJcblx0XHR0aGlzLmVkaXRDbGlja2VkLmVtaXQoJ0NoYW5nZWQnKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtNZXNzYWdlQ29tcG9uZW50fSBmcm9tICcuL21lc3NhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCI7XHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnbXktbWVzc2FnZS1saXN0JyxcclxuXHR0ZW1wbGF0ZTogYFxyXG5cdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxyXG4gICAgICBcdFx0XHQ8bXktbWVzc2FnZSAqbmdGb3I9XCIjbWVzc2FnZSBvZiBtZXNzYWdlc1wiIFttZXNzYWdlXT1cIm1lc3NhZ2VcIiAoZWRpdENsaWNrZWQpPVwibWVzc2FnZS5jb250ZW50ID0gJGV2ZW50XCI+PC9teS1tZXNzYWdlPlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0YCwgXHJcblx0ZGlyZWN0aXZlczogW01lc3NhZ2VDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUxpc3RDb21wb25lbnQge1xyXG5cdFx0bWVzc2FnZXM6IE1lc3NhZ2VbXSA9IFtuZXcgTWVzc2FnZSgnQSBOZXcgTWVzc2FnZScsIG51bGwsICdBZGFtMScpLFxyXG5cdFx0XHRcdFx0XHQgICBuZXcgTWVzc2FnZSgnQSBTZWNvbmQgTWVzc2FnZScsIG51bGwsICdBZGFtMicpLFxyXG5cdFx0XHRcdFx0XHQgICBuZXcgTWVzc2FnZSgnQSBUaGlyZCBNZXNzYWdlJywgbnVsbCwgJ0FkYW0zJylcclxuXHRcdFx0XHRcdFx0ICBdO1xyXG59IiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ215LW1lc3NhZ2UtaW5wdXQnLFxyXG5cdHRlbXBsYXRlOiBgXHJcblx0XHQ8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdDxsYWJlbCBmb3I9XCJjb250ZW50XCI+Q29udGVudDwvbGFiZWw+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImNvbnRlbnRcIiAjaW5wdXQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJvbkNyZWF0ZShpbnB1dC52YWx1ZSlcIj5TZW5kIE1lc3NhZ2U8L2J1dHRvbj5cclxuXHRcdDwvc2VjdGlvbj5cclxuXHRgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUlucHV0Q29tcG9uZW50IHtcclxuXHRvbkNyZWF0ZSgpIHtcclxuXHRcdGNvbnN0IG1lc3NhZ2U6IE1lc3NhZ2UgPSBuZXcgTWVzc2FnZShjb250ZW50LCBudWxsLCAnRHVtbXkgVXNlcicpO1xyXG5cdFx0Y29uc29sZS5sb2cobWVzc2FnZSk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtNZXNzYWdlTGlzdENvbXBvbmVudH0gZnJvbSBcIi4vbWVzc2FnZXMvbWVzc2FnZS1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNZXNzYWdlSW5wdXRDb21wb25lbnR9IGZyb20gXCIuL21lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50XCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcblx0XHQ8ZGl2IGNsYXNzPVwicm93IHNwYWNpbmdcIj5cblx0XHRcdDxteS1tZXNzYWdlLWlucHV0PjwvbXktbWVzc2FnZS1pbnB1dD5cblx0XHQ8L2Rpdj5cbiAgXHRcdDxkaXYgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxuXHRcdFx0PG15LW1lc3NhZ2UtbGlzdD48L215LW1lc3NhZ2UtbGlzdD5cblx0XHQ8L2Rpdj5cbiAgICBgLFxuXHRkaXJlY3RpdmVzOiBbTWVzc2FnZUxpc3RDb21wb25lbnQsIE1lc3NhZ2VJbnB1dENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufSIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQpOyIsImV4cG9ydCBjbGFzcyBVc2VyIHtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgZW1haWw6IHN0cmluZywgcHVibGljIHBhc3N3b3JkOiBzdHJpbmcsIHB1YmxpYyBmaXJzdE5hbWU/OiBzdHJpbmcsIHB1YmxpYyBsYXN0TmFtZT86IHN0cmluZykge31cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
