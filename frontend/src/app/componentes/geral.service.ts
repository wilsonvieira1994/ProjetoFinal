import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GeralService {

  constructor(private snackBar: MatSnackBar) { }

  snackBarMensagem(mensagem: string): void{
    this.snackBar.open(mensagem, 'X Fechar',{
      duration: 4000,
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }

}
