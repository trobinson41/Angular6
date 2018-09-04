import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from '../../node_modules/rxjs';
import { resolve } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectStatuses = ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup;
  forbiddenProjectNames = ['Test'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectname': new FormControl(null, Validators.required, this.forbiddenProjects.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectstatus': new FormControl('Stable')
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  // forbiddenProjects(control: FormControl): { [s: string]: boolean } {
  //   if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
  //     return { 'nameIsForbidden': true};
  //   }
  //   return null;
  // }

  forbiddenProjects(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value ==='Test') {
          resolve({'nameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 5000);
    });
    return promise;
  }
}
