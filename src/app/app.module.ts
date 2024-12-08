import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { PasswordModule } from 'primeng/password';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { MenuItem } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
// import { HomeFormComponent } from './home/home-form/home-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { JobformComponent } from './jobform/jobform.component';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
// import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from "./app-routing.module";
// import { ButtonModule } from 'primeng/button';
// import { NewsformComponent } from './newsform/newsform.component';
// import { LoginComponent } from './login/login.component';
// import { AppService } from 'src/shared/AppService';
// import { SharedDataService } from 'src/shared/shared-data-services';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { RoleGuardService } from './auth/role-guard.service';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { DropdownModule } from 'primeng/dropdown';
// import {InputTextareaModule} from 'primeng/inputtextarea';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { environment } from "../environments/environment";
// import {GMapModule} from 'primeng/gmap';


export function getRemoteServiceBaseUrl(): string {
    return environment.baseUrlAPI;
  }
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        AccordionModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FileUploadModule,
        ConfirmDialogModule,
        PasswordModule,
        FormsModule,
        ButtonModule,
        BrowserAnimationsModule,
        ToastModule,
        MessageModule,
        // InputTextareaModule,
        ReactiveFormsModule,
        CardModule,
        MessagesModule,
        DropdownModule,
        // GMapModule

    ],
    providers:[],
    bootstrap: [AppComponent]
})
export class AppModule { }