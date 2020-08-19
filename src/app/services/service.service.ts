import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from '../users';
import { Teachers } from '../teachers';


@Injectable({
providedIn: 'root'
})

export class ServiceService{
redirectUrl: string;
baseUrl:string = "http://localhost/capstoneProject/php";
@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();


constructor(private httpClient : HttpClient) { }
public userlogin(username, password) {
alert(username)
return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
.pipe(map(Users => {
this.setToken(Users[0].name);
this.getLoggedInName.emit(true);
return Users;
}));
}

public studentlogin(username, password) {
    alert(username)
    return this.httpClient.post<any>(this.baseUrl + '/login_student.php', { username, password })
    .pipe(map(Users => {
    this.setToken(Users[0].name);
    this.getLoggedInName.emit(true);
    return Users;
    }));
    }

public userregistration(name,email,pwd) {
return this.httpClient.post<any>(this.baseUrl + '/register.php', { name,email, pwd })
.pipe(map(Users => {
    this.setToken(Users[0].name);
this.getLoggedInName.emit(true);
return Users;
}));
}

public courseregistration(cname,cemail) {
    return this.httpClient.post<any>(this.baseUrl + '/course-register.php', { cname,cemail})
    .pipe(map(Users => {
    return Users;
    }));
    }
    

public studentregistration(name,email,pwd) {
    return this.httpClient.post<any>(this.baseUrl + '/register_student.php', { name,email, pwd })
    .pipe(map(Users => {
        this.setToken(Users[0].name);
this.getLoggedInName.emit(true);
    return Users;
    }));
    }

public fileupload(file) {
    return this.httpClient.post<any>(this.baseUrl + '/courses.php', { file })
    .pipe(map(Users => {
    return Users;
    })); 
}

public fileupload1(file) {
    return this.httpClient.post<any>(this.baseUrl + '/upload.php', { file })
    .pipe(map(Users => {
    return Users;
    })); 
}

/*public getContent(){
    return this.httpClient.get<any>(this.baseUrl + '/upload.php', { })
}*/


//token
setToken(token: string) {
localStorage.setItem('token', token);
}
getToken() {
return localStorage.getItem('token');
}
deleteToken() {
localStorage.removeItem('token');
}
isLoggedIn() {
const usertoken = this.getToken();
if (usertoken != null) {
return true
}
return false;
}
}