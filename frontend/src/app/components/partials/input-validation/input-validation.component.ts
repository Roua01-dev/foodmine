import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

const VALIDATORS_MESSAGES: any = {
  required: 'Should not be empty',
  email: 'Email is not valid',
  minlength: 'Field is too short',
  notMatch: 'Password and Confirm does not match'
};

@Component({
  selector: 'input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.css']
})
export class InputValidationComponent implements OnInit, OnChanges, OnDestroy {
  @Input() control!: AbstractControl;
  @Input() showErrorsWhen: boolean = true;
  errorMessages: string[] = [];

  private statusChangesSubscription: Subscription | undefined;
  private valueChangesSubscription: Subscription | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation();
  }

  ngOnInit(): void {
    if (this.control) {
      this.statusChangesSubscription = this.control.statusChanges.subscribe(() => {
        this.checkValidation();
      });
      this.valueChangesSubscription = this.control.valueChanges.subscribe(() => {
        this.checkValidation();
      });
    }
  }

  ngOnDestroy(): void {
    if (this.statusChangesSubscription) {
      this.statusChangesSubscription.unsubscribe();
    }
    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();


    }
  }

  checkValidation() {
    const errors = this.control.errors;
    this.errorMessages = [];

    if (this.showErrorsWhen && errors) {
      const errorKeys = Object.keys(errors);

      errorKeys.forEach(key => {
        const errorMessage = VALIDATORS_MESSAGES[key];
        if (errorMessage) {
          this.errorMessages.push(errorMessage);
        }
      });
    }
  }
}
