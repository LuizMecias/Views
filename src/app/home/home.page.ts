import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, AngularDelegate } from '@ionic/angular';

interface Usuario
{
  email: string;
  senha: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public usuarios: Array<Usuario> = [];
  public email: string;
  public senha: string;
  public resultadoPesquisa: string;

  constructor(private router: Router, private alertCtrl: AlertController) {
    this.usuarios = [
      {
        email: 'ze@gmail.com',
        senha: '1234'
      },
      {
        email: 'gustavo@gmail.com',
        senha: '3535'
      },
      {
        email: 'fernando@gmail.com',
        senha: '1818'
      },
      {
        email: 'usuario@email.com',
        senha: 'senha'
      }
    ];
  }
  pesquisarUsuario(){
    let achou = false;
    for(const usuario of this.usuarios){
      if(this.email === usuario.email && this.senha === usuario.senha){
        achou = true;
        break;
      }
    }
    if(achou === false) {
      const alert = this.alertCtrl.create({
        message: 'E-mail e/ou senha incorreto(s)',
        // eslint-disable-next-line @typescript-eslint/no-shadow
        buttons: ['ok']}).then(alert=> alert.present());
    }
    else {
      this.entrar();
    }
  }
  entrar(){
    this.router.navigate(['tela1']);
  }

}
