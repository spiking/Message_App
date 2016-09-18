var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("app.component", ['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.message = {
                        content: 'A Message To You',
                        author: 'Adam'
                    };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t\t<div class=\"row\">\n\t\t\t<section class=\"col-md-8 col-md-offset-2\">\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"message.content\">\n\t\t\t</section>\n\t\t</div>\n  \t\t<div class=\"row\">\n\t\t\t<section class=\"col-md-8 col-md-offset-2\">\n      \t\t\t<article class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t{{ message.content }}\n\t\t\t\t\t</div>\n\t\t\t\t\t<footer class=\"panel-footer\">\n\t\t\t\t\t\t<div class=\"author\">\n\t\t\t\t\t\t\t{{ message.author }}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"config\">\n\t\t\t\t\t\t\t<a href=\"#\">Edit</a>\n\t\t\t\t\t\t\t<a href=\"#\">Delete</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</footer>\n\t\t\t\t</article>\n\t\t\t</section>\n\t\t</div>\n    ",
                        styles: ["\n\t\t.author {\n\t\t\tdisplay: inline-block;\n\t\t\tfont-style: italic;\n\t\t\tfont-size: 12px;\n\t\t\twidth: 80%;\n\t\t}\n\t\t.config {\n\t\t\tdisplay: inline-block;\n\t\t\ttext-align: right;\n\t\t\tfont-size: 12px;\n\t\t\twidth: 19%;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMkNBO2dCQUFBO29CQUNDLFlBQU8sR0FBRzt3QkFDVCxPQUFPLEVBQUUsa0JBQWtCO3dCQUMzQixNQUFNLEVBQUUsTUFBTTtxQkFDZCxDQUFDO2dCQUNILENBQUM7Z0JBL0NEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxxdUJBd0JUO3dCQUNKLE1BQU0sRUFBRSxDQUFDLHlQQWFSLENBQUM7cUJBQ0YsQ0FBQzs7Z0NBQUE7Z0JBTUYsbUJBQUM7WUFBRCxDQUxBLEFBS0MsSUFBQTtZQUxELHVDQUtDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDNUNELG1CQUFTLENBQUMsNEJBQVksQ0FBQyxDQUFDIiwiZmlsZSI6Ii4uLy4uLy4uL1NlZWQgUHJvamVjdC9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcblx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cIm1lc3NhZ2UuY29udGVudFwiPlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdDwvZGl2PlxuICBcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0PHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgIFx0XHRcdDxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG5cdFx0XHRcdFx0XHR7eyBtZXNzYWdlLmNvbnRlbnQgfX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8Zm9vdGVyIGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+XG5cdFx0XHRcdFx0XHRcdHt7IG1lc3NhZ2UuYXV0aG9yIH19XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb25maWdcIj5cblx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5FZGl0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiPkRlbGV0ZTwvYT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZm9vdGVyPlxuXHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0PC9kaXY+XG4gICAgYCxcblx0c3R5bGVzOiBbYFxuXHRcdC5hdXRob3Ige1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0d2lkdGg6IDgwJTtcblx0XHR9XG5cdFx0LmNvbmZpZyB7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHR0ZXh0LWFsaWduOiByaWdodDtcblx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdHdpZHRoOiAxOSU7XG5cdFx0fVxuXHRgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXHRtZXNzYWdlID0ge1xuXHRcdGNvbnRlbnQ6ICdBIE1lc3NhZ2UgVG8gWW91Jyxcblx0XHRhdXRob3I6ICdBZGFtJ1xuXHR9O1xufSIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
