import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireApiService {

  readonly questionnaireAPIUrl = "https://localhost:7206/api";

  constructor(private http:HttpClient) { }

  getQuestionnaireList():Observable<any[]>{
    return this.http.get<any>(this.questionnaireAPIUrl + '/questionnairesuser');
  }

  addQuestionnaire(data:any){
    return this.http.post(this.questionnaireAPIUrl + '/questionnairesuser', data);
  }

  updateQuestionnaire(id:number|string, data:any){
    return this.http.put(this.questionnaireAPIUrl + `/questionnairesuser/${id}`, data);
  }

  deleteQuestionnaire(id:number|string){
    return this.http.delete(this.questionnaireAPIUrl + `/questionnairesuser/${id}`)
  }

  // Users
  getUserList():Observable<any[]>{
    return this.http.get<any>(this.questionnaireAPIUrl + '/questionnaires');
  }

  addUser(data:any){
    return this.http.post(this.questionnaireAPIUrl + '/questionnaires', data);
  }

  updateUser(id:number|string, data:any){
    return this.http.put(this.questionnaireAPIUrl + `/questionnaires/${id}`, data);
  }

  deleteUser(id:number|string){
    return this.http.delete(this.questionnaireAPIUrl + `/questionnaires/${id}`)
  }
}
