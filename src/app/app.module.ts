import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { RegistrationComponent } from "./verification/registration/registration.component";
import { EmailCodeComponent } from "./verification/email-code/email-code.component";
import { HeaderComponent } from "./shared/header/header.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { PopupComponent } from "./shared/popup/popup.component";
import { ButtonComponent } from "./shared/button/button.component";
import { GenericInputComponent } from "./shared/generic-input/generic-input.component";
import { GenericCheckboxComponent } from "./shared/generic-checkbox/generic-checkbox.component";
/* import { FileInputValueAccessor } from "./shared/file-input.accessor"; */
import { VerificationComponent } from "./verification/verification.component";
import { UserComponent } from "./user/user.component";
import { MotherComponent } from "./family/mother/mother.component";
import { FatherComponent } from "./family/father/father.component";
import { GrandmotherComponent } from "./family/grandmother/grandmother.component";
import { FileUploadComponent } from "./shared/file-upload/file-upload.component";

import { MotherSideComponent } from "./family/mother-side/mother-side.component";
import { GrandfatherComponent } from "./family/grandfather/grandfather.component";
import { FatherSideComponent } from "./family/father-side/father-side.component";
/* import { FamilyFormComponent } from './family/family-form/family-form.component'; */
import { FileUploadValidator } from "./shared/file-upload/file-upload-validators";
import { GenericRadioButtonComponent } from './shared/generic-radio-button/generic-radio-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    PopupComponent,
    VerificationComponent,
    UserComponent,
    MotherComponent,
    FatherComponent,
    ButtonComponent,
    RegistrationComponent,
    EmailCodeComponent,
    GenericInputComponent,
    GenericCheckboxComponent,
    GrandmotherComponent,
    /* FileInputValueAccessor, */
    FileUploadComponent,
    MotherSideComponent,
    GrandfatherComponent,
    FatherSideComponent,
    FileUploadValidator,
    GenericRadioButtonComponent
    /* FamilyFormComponent  */
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
