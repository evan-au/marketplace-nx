import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { UserInterface } from '../interfaces/user.interface';

interface AuthState {
  users: UserInterface[];
}

const initialState: AuthState = {
  users: [],
};

@Injectable()
export class AuthStore extends ComponentStore<AuthState> {
  constructor() {
    // Set state eagerly for Auth state
    super(initialState);
  }
}
