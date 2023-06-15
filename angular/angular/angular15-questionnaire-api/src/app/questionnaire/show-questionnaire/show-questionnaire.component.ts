import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionnaireApiService } from 'src/app/questionnaire-api.service';


@Component({
  selector: 'app-show-questionnaire',
  templateUrl: './show-questionnaire.component.html',
  styleUrls: ['./show-questionnaire.component.css']
})
export class ShowQuestionnaireComponent {

  questionnaireList$!:Observable<any[]>;
  userList$!:Observable<any[]>;
  userList:any=[];

  // Map to display data associate with foreign keys
  userMap:Map<number, string> = new Map();

  constructor(private service:QuestionnaireApiService) { }

  ngOnInit():void{
    this.questionnaireList$ = this.service.getQuestionnaireList();
  }
}
