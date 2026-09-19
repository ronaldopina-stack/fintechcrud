import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    botaoDesabilitado: boolean = true;
    login:string ="";
    senha:string ="";
    
    validarFormulario(){
      if(this.login.trim() !==''&& this.senha.trim()!== ''){
        this.botaoDesabilitado = false;
      }else{
        this.botaoDesabilitado = true;
      }
    
    }
      fazerLogin(){
        if (this.login == "admin@email.com" && this.senha==="123"){
          alert("login bem sucedido, bem vindo")
        }else{
          alert("login ou senha incorretos. Tente novamente.")
        }
      }
    
    onBotaoclicado(){
      alert("Confirmado!")
    }

    teclaSolta(evento:KeyboardEvent):void{
      alert(`o usuario digitou ${evento.key}`);
    }
  }