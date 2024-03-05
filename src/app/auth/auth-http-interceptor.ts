import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor{
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    // cannot access directly so use clone
    const modifiedReq = req.clone({
      withCredentials: true
    });

    console.log(modifiedReq);

    return next.handle(modifiedReq);
  }
}
