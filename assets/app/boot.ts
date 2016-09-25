///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {MessageService} from "./messages/message.service";
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from "angular2/router";
import {provide} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {AuthService} from './auth/auth.service';
// Add providers needed for the app functionality
bootstrap(AppComponent, [MessageService, AuthService, ROUTER_PROVIDERS, provide(LocationStrategy, {useClass:HashLocationStrategy}), HTTP_PROVIDERS]);