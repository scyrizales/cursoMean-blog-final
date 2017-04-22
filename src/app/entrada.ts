import { Usuario } from './usuario';
export class Entrada {
    id: string;
    titulo: string;
    cuerpo: string;
    imagen: string;
    autor: Usuario;

    constructor(u: any = {}) {
        this.id = u._id;
        this.titulo = u.titulo;
        this.cuerpo = u.cuerpo;
        this.imagen = u.imagen;
        this.autor = u.autor;
    }
}
