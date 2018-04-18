export class Estudiant {
  constructor(name: string,adress:string,phones1:string){
    this.name = name;
    this.address =adress;
    this.phones = [{name:name,address:phones1}];

  }
  name: string;
  address: string;
  phones: [{name: String, address: String}]
}

