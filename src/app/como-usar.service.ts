import { ComoUsar } from "./shared/como-usar.model";

export class ComoUsarService {

    public ComoUsar: ComoUsar[] = [
        {
			id: 1,
			descricao: "Não é necessário agendar"
		},
		{
			id: 2,
			descricao: "Válido de segunda a quinta das 12h as 23h"
		},
		{
			id: 3,
			descricao: "Não é necessário agendar"
		},
		{
			id: 4,
			descricao: "Necessário agendar com no mínimo 48 horas de antecedência"
		},
		{
			id: 5,
			descricao: "Válido de segunda a sábado das 12h as 23h. Necessário agendamento prévio"
		},
		{
			"id": 6,
			"descricao": "Não é necessário agendar. Sujeito à fila."
		}
    ]

    public obterComoUsarPorId(id: number): ComoUsar {
        let pesquisa = this.ComoUsar.find(x => x.id == id)
        return pesquisa !== undefined ? pesquisa : new ComoUsar(0, '')
    }
    
}