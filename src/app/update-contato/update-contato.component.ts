import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContatoModel } from '../contato/contato-model';
import { ContatoService } from '../contato/contato.service';
import { PhonePipe } from '../pipes/telefone.pipe';

@Component({
  selector: 'app-update-contato',
  templateUrl: './update-contato.component.html',
  styleUrls: ['./update-contato.component.css']
})
export class UpdateContatoComponent implements OnInit {

  myForm!: FormGroup;
  
  @Input()
  id!: number;

  contato: ContatoModel = new ContatoModel();

  constructor(private contatoService: ContatoService, private modalRef: NgbActiveModal, private formBuilder: FormBuilder) { 
    this.myForm = this.formBuilder.group({
      nome: [this.contato.nome, [Validators.required, Validators.minLength(3)]],
      email: [this.contato.email, [Validators.required, Validators.email]],
      telefone: [this.contato.telefone, [Validators.required, Validators.minLength(11), Validators.maxLength(15)]],
      dataNascimento: [this.contato.dataNascimento, [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.contatoService.getContatoById(this.id).subscribe(
      data => { this.contato = data; },
      err => { console.log(err); }
    );
  }

  onSubmit(): void {
    if(this.myForm.valid){
      this.contatoService.upadateContato(this.id, this.contato).subscribe(
        data => { this.goToContatoList(); },
        err => { console.log(err); }
      );
      alert('Contato atualizado com sucesso!');
    }
  }

  goToContatoList(): void {
    this.modalRef.close();
  }

}
