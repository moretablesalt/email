import {Injectable} from "@angular/core";
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, tap} from "rxjs";

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

    return next.handle(modifiedReq).pipe(
      tap(val => {
        if (val.type === HttpEventType.Sent) console.log('Request was sent to server: ', val);
        if (val.type === HttpEventType.Response) console.log('Response received:: ', val);
      })
    );
  }
}
