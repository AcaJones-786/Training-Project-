import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditQuestionnaireComponent } from './add-edit-questionnaire.component';

describe('AddEditQuestionnaireComponent', () => {
  let component: AddEditQuestionnaireComponent;
  let fixture: ComponentFixture<AddEditQuestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditQuestionnaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
