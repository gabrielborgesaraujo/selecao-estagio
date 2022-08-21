import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ContatoModel } from '../contato/contato-model';
import { ContatoService } from '../contato/contato.service';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  myForm!: FormGroup;

  contato: ContatoModel = new ContatoModel();

  file!: File;

  constructor(private contatoService: ContatoService, private modalService: BsModalService, private formBuilder: FormBuilder) { 

    this.myForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(14)]],
      dataNascimento: ['', [Validators.required]],
      imgPath: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }


  saveContato(): void {
    console.log(this.contato);
    if (this.myForm.valid) {
      this.contatoService.createContato(this.contato, this.file).subscribe(
        data => { this.goToContatoList(); },
        err => { console.log(err); }
      );
    }else{
      alert('Preencha todos os campos corretamente');
    }
  }

  goToContatoList(): void {
    this.modalService.hide();
  }

  onSubmit(): void {
    this.saveContato();
  }

}
