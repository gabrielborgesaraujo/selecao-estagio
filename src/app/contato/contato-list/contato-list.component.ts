import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ContatoModel } from '../contato-model';
import { ContatoService } from '../contato.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateContatoComponent } from 'src/app/update-contato/update-contato.component';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.css']
})
export class ContatoListComponent implements OnInit {

  contatos: ContatoModel[] = [];

  modalRef?: BsModalRef;

  constructor(private contatoService: ContatoService, private router: Router, private modalService: BsModalService, private modal: NgbModal) { }

  ngOnInit(): void {
    this.getContatos();
  }

  private getContatos(): void {
    this.contatoService.getContatosList().subscribe(
      data => {
        this.contatos = data.filter(v => v.nome != null).sort((a, b) => a.nome.localeCompare(b.nome));
        console.log(data);
      });
  }

  contatoDetail(id: number): void {
    this.router.navigate(['contatos/contato-detail', id]);
  }

  updateContato(id: number): void {
    this.router.navigate(['update-contato', id]);
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
    this.modalRef.onHidden?.subscribe(() => { this.getContatos(); });
  }

  abrirModal(contatoId: number){
    const modalEdit = this.modal.open(UpdateContatoComponent, { size: 'lg' });
    modalEdit.componentInstance.id = contatoId;
    modalEdit.result.then(() => {this.getContatos();})
  }

  confirmModal(id: number): void {
    if (this.contatoService.deleteContato(id).subscribe(
      data => { this.getContatos(); }
    )) {
      alert("Contato excluído com sucesso!");
    }
    this.modalRef?.hide();
  }

  refuseModal(): void {
    this.modalRef?.hide();
  }
}
