import { HttpClientModule} from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ShowQuestionnaireComponent } from './questionnaire/show-questionnaire/show-questionnaire.component';
import { AddEditQuestionnaireComponent } from './questionnaire/add-edit-questionnaire/add-edit-questionnaire.component';
import { QuestionnaireApiService } from './questionnaire-api.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    ShowQuestionnaireComponent,
    AddEditQuestionnaireComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [QuestionnaireApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
