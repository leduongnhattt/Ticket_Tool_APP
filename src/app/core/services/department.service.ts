import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Constant } from '../constant/constant';
import { APIRespone, Department } from '../models/API_Models';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getAllDepartment(): Observable<APIRespone> {
    return this.http.get<APIRespone>(environment.API_URL + Constant.API_END_POINT.GET_DEPARTMENT)
  }
  createDepartment(obj: Department): Observable<APIRespone> {
    return this.http.post<APIRespone>(environment.API_URL + Constant.API_END_POINT.CREATE_DEPARTMENT, obj)
  }
  updateDepartment(obj: Department): Observable<APIRespone> {
    return this.http.put<APIRespone>(environment.API_URL + Constant.API_END_POINT.UPDATE_DEPARTMENT, obj)
  }
  deleteDepartment(id: number): Observable<APIRespone> {
    return this.http.delete<APIRespone>(environment.API_URL + Constant.API_END_POINT.DELETE_DEPARTMENT + id)
  }
}
