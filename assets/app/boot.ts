///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {MessageService} from "./messages/message.service";
import {ROUTER_PROVIDERS} from "angular2/router";
// Add providers needed for the app
bootstrap(AppComponent, [MessageService, ROUTER_PROVIDERS]);