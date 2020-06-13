import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Credentials } from 'src/app/Models/interface';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

 authentificationForm:FormGroup;
  erreurCon:boolean;
 
  @Input() set connexionError(val:string){
    if(val=='KO'){
      this.erreurCon=true;
    }
  } 

 @Output() connexionEmitter=new EventEmitter();

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.initAuthForm()
    this.erreurCon=false;
  }

  initAuthForm():void{
    this.authentificationForm=this.formBuilder.group({
      login:['',[Validators.required]],
      pwd:['',[Validators.required]]
    });
  }

  getConnexion(){
    this.erreurCon=false;
     let autModel:Credentials={
       login:this.authentificationForm.get('login').value,
       pwd:this.authentificationForm.get('pwd').value
     }
     this.connexionEmitter.emit(autModel);
  }

}
