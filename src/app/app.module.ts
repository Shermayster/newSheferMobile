import { MenuModule,MenuItem } from 'primeng/primeng';
import { OdotComponent } from './odot-component/odot-component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import {TabMenuModule} from "primeng/primeng";
import {CheckboxModule} from "primeng/components/checkbox/checkbox";
import {PanelModule} from "primeng/components/panel/panel";
import {TabViewModule} from "primeng/components/tabview/tabview";
import {InputTextModule} from "primeng/components/inputtext/inputtext";
import {ButtonModule} from "primeng/components/button/button";
import {ProgramComponent} from "./protected/program.component/program.component";
import {ProtectedComponent} from "./protected/protected-component/protected-component";
import {FieldsetModule} from "primeng/components/fieldset/fieldset";
import {TaskComponent} from "./protected/task-component/task.component";
import {AccordionModule} from "primeng/components/accordion/accordion";
import {HttpService} from "./services/http.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DataService, FamilyData, IsFirstEnter} from "./services/data.service";
import {ProgramService, ActivitiesGroup, Activity} from "./services/program.service";
import {ResponseComponent} from "./protected/response-component/response-component";
import {Routes, RouterModule} from "@angular/router";

const appRoutes: Routes = [
  {path: 'enter', component: SignInComponent},
  {path: 'protected', component: ProtectedComponent},
  {path: 'task', component: TaskComponent},
  { path: '', redirectTo:'/enter', pathMatch: 'full'},
  {path: 'program', component: ProgramComponent},
  {path: 'response', component: ResponseComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ProgramComponent,
    SignInComponent,
    ProtectedComponent,
    TaskComponent,
    OdotComponent,
    ResponseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TabMenuModule,
    CheckboxModule,
    PanelModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    FieldsetModule,
    AccordionModule,
    MenuModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpService, DataService, FamilyData, ProgramService, ActivitiesGroup, Activity,IsFirstEnter,
  {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
