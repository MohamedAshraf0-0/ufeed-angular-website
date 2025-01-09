import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {FormControl,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';

@Component({
  selector: 'app-jet',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './jet.component.html',
  styleUrl: './jet.component.scss'
})
export class JetComponent {

// form data 
jetForm:FormGroup= new FormGroup({
  username:new FormControl(null,[ Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
    Validators.pattern(/^(?!.*[_.]{2})[a-zA-Z._]{3,20}$/)
  ]),
  contactNumber:new FormControl(null, [
    Validators.required,
    Validators.pattern(/^(?:\+?\d{1,4}[\s-]?)?(?:\(?\d{1,4}\)?[\s-]?)?\d{7,10}$/)
  ]),
  email: new FormControl(null, [Validators.required, Validators.email]),
  companyName: new FormControl(null, [ Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
    Validators.pattern(/^(?!.*[_.]{2})[a-zA-Z._]{3,20}$/)
  ]),
  companydepartmentNum: new FormControl(null, [
    Validators.required,
    Validators.min(1),    // Set minimum value to 1
    Validators.max(100)    // Set maximum value to 100
  ])

})


// hover elements 
  hoveredIndex: number | null = null;

  onMouseOver(index: number) {
    this.hoveredIndex = index; // Highlight the hovered row
  }

  onMouseOut() {
    this.hoveredIndex = null; // Reset the hover effect
  }
  
}
