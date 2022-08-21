import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContatoComponent } from './update-contato.component';

describe('UpdateContatoComponent', () => {
  let component: UpdateContatoComponent;
  let fixture: ComponentFixture<UpdateContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateContatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
