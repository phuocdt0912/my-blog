import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor() {}

  login(credentials: { username: string; password: string }): void {
    // Implement your login logic here
    this.isAuthenticatedSubject.next(true);
  }

  logout(): void {
    // Implement your logout logic here
    this.isAuthenticatedSubject.next(false);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }
}
