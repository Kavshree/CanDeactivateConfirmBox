import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate } from '@angular/router';
import { FormGroup } from '@angular/forms';



export interface FormComponent {
    myForm: FormGroup;
  }

@Injectable()
export class AuthGuardConfirmation implements CanDeactivate<FormComponent> {
    canDeactivate(component: FormComponent) {
        if (component.myForm.dirty) {
        return window.confirm('Are you sure you want to leave Song Details?');
        }
        return true;
    }
}