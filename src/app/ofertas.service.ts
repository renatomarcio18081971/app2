import { Oferta } from './shared/oferta.model'

export class OfertasService {

    public ofertas: Oferta[] = [
        {
            id: 1,
            categoria: "restaurante",
            titulo: "Super Burger",
            descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
            anunciante: "Original Burger",
            valor: 29.90,
            destaque: true,
            imagens: [
                {url: "./assets/ofertas/1/img1.jpg"},
                {url: "./assets/ofertas/1/img2.jpg"},
                {url: "./assets/ofertas/1/img3.jpg"},
                {url: "./assets/ofertas/1/img4.jpg"}
            ]
        },
        {
            id: 2,
            categoria: "restaurante",
            titulo: "Cozinha Mexicana",
            descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
            anunciante: "Mexicana",
            valor: 32.90,
            destaque: true,
            imagens: [
                {url: "./assets/ofertas/2/img1.jpg"},
                {url: "./assets/ofertas/2/img2.jpg"},
                {url: "./assets/ofertas/2/img3.jpg"},
                {url: "./assets/ofertas/2/img4.jpg"}
            ]
        
        },
        {
            id: 4,
            categoria: "diversao",
            titulo: "Estância das águas",
            descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
            anunciante: "Estância das águas",
            valor: 31.90,
            destaque: true,
            imagens: [
                {url: "./assets/ofertas/4/img1.jpg"},
                {url: "./assets/ofertas/4/img2.jpg"},
                {url: "./assets/ofertas/4/img3.jpg"},
                {url: "./assets/ofertas/4/img4.jpg"},
                {url: "./assets/ofertas/4/img5.jpg"},
                {url: "./assets/ofertas/4/img6.jpg"}
            ]
        }
    ]

    public obterOfertas(): Oferta[] {
        return this.ofertas
    }

    public obterOfertasPorCategoria(categoria: string): Oferta[] {
        let pesquisa = this.ofertas.filter(x => x.categoria == categoria)
        return pesquisa
    }

    public obterOfertaPorId(id: number): Oferta{
        let pesquisa = this.ofertas.find(x => x.id == id)
        return pesquisa !== undefined ? pesquisa : new Oferta(10, 'categoria', 'titulo', 'descricao', 'anunciante', 10, true, [])
    }
}