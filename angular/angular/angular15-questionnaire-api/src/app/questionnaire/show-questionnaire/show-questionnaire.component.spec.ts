import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowQuestionnaireComponent } from './show-questionnaire.component';

describe('ShowQuestionnaireComponent', () => {
  let component: ShowQuestionnaireComponent;
  let fixture: ComponentFixture<ShowQuestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowQuestionnaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
