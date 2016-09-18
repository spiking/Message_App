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
                    this.message = new message_1.Message('The content', null, 'Max');
                }
                MessageComponent = __decorate([
                    core_1.Component({
                        selector: 'my-message',
                        template: "\n\t\t\t\t<article class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t{{ message.content }}\n\t\t\t\t\t</div>\n\t\t\t\t\t<footer class=\"panel-footer\">\n\t\t\t\t\t\t<div class=\"author\">\n\t\t\t\t\t\t\t{{ message.username }}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"config\">\n\t\t\t\t\t\t\t<a href=\"#\">Edit</a>\n\t\t\t\t\t\t\t<a href=\"#\">Delete</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</footer>\n\t\t\t\t</article>\n\t",
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
System.register("app.component", ['angular2/core', "messages/message.component"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, message_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (message_component_1_1) {
                message_component_1 = message_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_2.Component({
                        selector: 'my-app',
                        template: "\n\t\t<div class=\"row\">\n\n\t\t</div>\n  \t\t<div class=\"row\">\n\t\t\t<section class=\"col-md-8 col-md-offset-2\">\n      \t\t\t<my-message></my-message>\n\t\t\t</section>\n\t\t</div>\n    ",
                        directives: [message_component_1.MessageComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_3("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
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
System.register("auth/user", [], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
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
            exports_5("User", User);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UudHMiLCJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIiwiYXV0aC91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFNQyxpQkFBYSxPQUFlLEVBQUUsU0FBa0IsRUFBRSxRQUFpQixFQUFFLE1BQWU7b0JBQ25GLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO29CQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUN0QixDQUFDO2dCQUNGLGNBQUM7WUFBRCxDQVpBLEFBWUMsSUFBQTtZQVpELDZCQVlDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ3lCRDtnQkFBQTtvQkFDQyxZQUFPLEdBQVksSUFBSSxpQkFBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzVELENBQUM7Z0JBcENEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSwwY0FlVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyx5UEFhUixDQUFDO3FCQUNGLENBQUM7O29DQUFBO2dCQUlGLHVCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCwrQ0FFQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUN2QkQ7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFoQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLG1NQVNUO3dCQUNKLFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO3FCQUM5QixDQUFDOztnQ0FBQTtnQkFHRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNkRCxtQkFBUyxDQUFDLDRCQUFZLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7WUNKeEI7Z0JBQ0MsY0FBbUIsS0FBYSxFQUFTLFFBQWdCLEVBQVMsU0FBa0IsRUFBUyxRQUFpQjtvQkFBM0YsVUFBSyxHQUFMLEtBQUssQ0FBUTtvQkFBUyxhQUFRLEdBQVIsUUFBUSxDQUFRO29CQUFTLGNBQVMsR0FBVCxTQUFTLENBQVM7b0JBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUztnQkFBRyxDQUFDO2dCQUNuSCxXQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1QkFFQyxDQUFBIiwiZmlsZSI6Ii4uLy4uLy4uL1NlZWQgUHJvamVjdC9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTWVzc2FnZSB7XHJcblx0Y29udGVudDogc3RyaW5nO1xyXG5cdHVzZXJuYW1lOiBzdHJpbmc7XHJcblx0bWVzc2FnZUlkOiBzdHJpbmc7XHJcblx0dXNlcklkOiBzdHJpbmc7XHJcblx0XHJcblx0Y29uc3RydWN0b3IgKGNvbnRlbnQ6IHN0cmluZywgbWVzc2FnZUlkPzogc3RyaW5nLCB1c2VybmFtZT86IHN0cmluZywgdXNlcklkPzogc3RyaW5nKSB7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG5cdFx0dGhpcy5tZXNzYWdlSWQgPSBtZXNzYWdlSWQ7XHJcblx0XHR0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcblx0XHR0aGlzLnVzZXJJZCA9IHVzZXJJZDtcclxuXHR9XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCJcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnbXktbWVzc2FnZScsXHJcblx0dGVtcGxhdGU6IGBcclxuXHRcdFx0XHQ8YXJ0aWNsZSBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcblx0XHRcdFx0XHRcdHt7IG1lc3NhZ2UuY29udGVudCB9fVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8Zm9vdGVyIGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhdXRob3JcIj5cclxuXHRcdFx0XHRcdFx0XHR7eyBtZXNzYWdlLnVzZXJuYW1lIH19XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29uZmlnXCI+XHJcblx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5FZGl0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+RGVsZXRlPC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZm9vdGVyPlxyXG5cdFx0XHRcdDwvYXJ0aWNsZT5cclxuXHRgLFxyXG5cdHN0eWxlczogW2BcclxuXHRcdC5hdXRob3Ige1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHR3aWR0aDogODAlO1xyXG5cdFx0fVxyXG5cdFx0LmNvbmZpZyB7XHJcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0d2lkdGg6IDE5JTtcclxuXHRcdH1cclxuXHRgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnQge1xyXG5cdG1lc3NhZ2U6IE1lc3NhZ2UgPSBuZXcgTWVzc2FnZSgnVGhlIGNvbnRlbnQnLCBudWxsLCAnTWF4Jyk7XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge01lc3NhZ2VDb21wb25lbnR9IGZyb20gJy4vbWVzc2FnZXMvbWVzc2FnZS5jb21wb25lbnQnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXG5cdFx0PC9kaXY+XG4gIFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgXHRcdFx0PG15LW1lc3NhZ2U+PC9teS1tZXNzYWdlPlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdDwvZGl2PlxuICAgIGAsIFxuXHRkaXJlY3RpdmVzOiBbTWVzc2FnZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblx0XG59IiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCk7IiwiZXhwb3J0IGNsYXNzIFVzZXIge1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBlbWFpbDogc3RyaW5nLCBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZywgcHVibGljIGZpcnN0TmFtZT86IHN0cmluZywgcHVibGljIGxhc3ROYW1lPzogc3RyaW5nKSB7fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
