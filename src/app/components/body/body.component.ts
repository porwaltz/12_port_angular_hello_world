import { Component } from "@angular/core";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html"
})
export class BodyComponent {
  mostrar: boolean = true;

  frase: any = {
    autor: "Mastropiero",
    mensaje: "que nos esta pasando? Rudy?"
  };

  placer: string = "ingrese un personaje";

  personajes: string[] = ["Gunther Fragger", "Cantalicio Luna", "Sven Kunsen"];

  adherir(nuevo) {
    if (nuevo !== "") {
      this.personajes.push(nuevo);
      this.placer = "ingrese un personaje";
    } else {
      this.placer = "ERROR: no escribio nada";
    }
  }
  borrar(chau) {
    this.personajes = this.personajes.filter((p) => p !== chau);
  }
}
