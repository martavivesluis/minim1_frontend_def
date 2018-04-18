export class User {
  constructor(nombre: string,apellidos:string,rol:string,password: string,estado:string,_id: string) {
    this.nombre = nombre;
    this.apellidos =apellidos;
    this.rol = rol;
    this.password = password;
    this.estado = estado;
    this._id = _id;
  }
  nombre: string;
  apellidos: string;
  rol: string;
  password: string;
  estado: string;
  _id: string

}
