import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajout-poste',
  templateUrl: './ajout-poste.component.html',
  styleUrls: ['./ajout-poste.component.css']
})
export class AjoutPosteComponent implements OnInit {
  id;
  loginForm = this.fb.group({
    titre: [null],
    societe: [null],
    salaire: [null]
  });
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onSubmit(event){
    this.http.post('127.0.0.1:8000/ajouter_poste?titre=' + event.target.titre.value
    + '&societe=' + event.target.societe.value
    + '&salaire=' + event.target.salaire.value
    , JSON.stringify('')).subscribe((response: any) => {
      this.router.navigate(['/supprime_poste']);
    });
  }

}
