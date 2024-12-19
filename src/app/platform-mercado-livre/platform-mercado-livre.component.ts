import { Component, Inject, Injectable } from '@angular/core';
import { DadosUsuario } from './dadosusuario';
import { DOCUMENT } from '@angular/common';
import { ClientModel } from '../client/client-model';
import { Observable } from 'rxjs';
import { ClientService } from '../client/client.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-platform-mercado-livre',
  templateUrl: './platform-mercado-livre.component.html',
  styleUrls: ['./platform-mercado-livre.component.css'],
  imports: [FormsModule]
})
export class PlatformMercadoLivreComponent {

  ML_AUTHORIZATION_URL = 'https://auth.mercadolivre.com.br/authorization'
  REDIRECT_URL = 'http://localhost:4200/platform-mercado-livre/authentication'

  constructor(
    // private service: PlatformMercadoLivreService,
    private clientService: ClientService,
    @Inject(DOCUMENT) private document: Document
    ) { }

  dadosUsuario: DadosUsuario = new DadosUsuario()

  salvaCliente(dadosUsuario: DadosUsuario):Observable<ClientModel> {
    var clientModel = new ClientModel();
    clientModel.appId = dadosUsuario.appId;
    clientModel.appRedirectUrl = this.REDIRECT_URL;
    clientModel.appSecretKey = dadosUsuario.appSecretKey;
    clientModel.userName = dadosUsuario.name;
    return this.clientService.create(clientModel);
  }

  redirecionaComDadosDoUsuario(dadosUsuario: DadosUsuario): void {
    console.log("Redirecionando...")
    this.salvaCliente(dadosUsuario)
    .subscribe(clientModel => this.redirecionaParaPaginaML(clientModel.id))
  }

  redirecionaParaPaginaML(clientId?: String) {
    this.document.location.href = `${this.ML_AUTHORIZATION_URL}?response_type=code&client_id=${clientId}&redirect_uri=${this.REDIRECT_URL}`
  }

}
