import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajout-condidature',
  templateUrl: './ajout-condidature.component.html',
  styleUrls: ['./ajout-condidature.component.css']
})
export class AjoutCondidatureComponent implements OnInit {
  id;
  loginForm = this.fb.group({
    email: [null],
    message: [null]
  });

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onSubmit(event){
    this.http.post('127.0.0.1:8000/ajouter_candidature?email=' + event.target.email.value
    + '&msg=' + event.target.msg.value
    , JSON.stringify('')).subscribe((response: any) => {
      this.router.navigate(['/']);
    });
  }
}
