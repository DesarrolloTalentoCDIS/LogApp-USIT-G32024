import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  formularioLog : FormGroup = this.fb.group({
    id: ['', [Validators.required, Validators.minLength(8)]],
    pass: ['', [Validators.required, Validators.minLength(7)]]
  });

  constructor(private fb : FormBuilder,
    private router : Router,
    private authService : AuthService) { }

    login(){
      console.log(this.formularioLog.value);
      console.log(this.formularioLog.valid);
      this.router.navigateByUrl('/dashboard');
    }


}
