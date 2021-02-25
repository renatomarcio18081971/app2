import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { OndeFicar } from "./shared/onde-ficar.model";


@Injectable()
export class OndeFicaService {
	
	private API: string = "https://localhost:44347/api/";

	constructor(
					private http: HttpClient
				) {}

	public obterOndeFicaPorId(id: number): Observable<OndeFicar> {
		let pesquisa = this.API.concat('ofertas/ondeficar/', id.toString())
		return this.http.get<OndeFicar>(pesquisa);
	}
}