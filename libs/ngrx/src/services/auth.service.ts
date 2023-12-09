import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {inject} from "@angular/core";
import {Credentials} from "../models/credentials";

export class AuthService {
  private httpClient = inject(HttpClient);

  login(credentials: Credentials): Observable<void> {
    return this.httpClient.post<void>('login', credentials);
  }
}
