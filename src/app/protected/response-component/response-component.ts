/**
 * Created by sherm on 11/26/2016.
 */
import { Component, OnInit } from '@angular/core';
import {PatientActivity} from "../../models/pateind.model";
import {ProgramService} from "../../services/program.service";
import {Router} from "@angular/router";
import {MenuItem} from "primeng/components/common/api";

@Component({
    selector: 'response-component',
    templateUrl: './response-component.html'
})
export class ResponseComponent implements OnInit {
    items:MenuItem[];
    activity: PatientActivity;
    constructor(private programService: ProgramService, private router:Router) { }

    ngOnInit() {
      this.activity = this.programService.getActivity();
      this.items = [
        {label: 'עמוד הבית', icon: 'fa-home', routerLink: ['protected']},
        {label: 'יציאה', icon: 'fa-sign-out', routerLink: ['enter']}
      ];
    }

  goToStart() {
      this.router.navigate(['protected'])
  }

}
