import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

import { PhotoService } from '../photo/photo.service';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';

@Injectable({ providedIn: 'root'})
export class PhotoListResouver implements Resolve<Observable<Photo[]>>{
    resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Observable<Photo[]> | Observable<Observable<Photo[]>> | Promise<Observable<Photo[]>> {
        const userName = route.params.userName;
        return this.service.listFromUser(userName);
    }
    constructor(private service: PhotoService) {}
}