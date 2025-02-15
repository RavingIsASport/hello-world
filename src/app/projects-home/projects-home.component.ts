import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-home',
  imports: [],
  templateUrl: './projects-home.component.html',
  styleUrl: './projects-home.component.css',
})
export class ProjectsHomeComponent {
  firstName: string = 'William';
  lastName: string = 'Wallace';
  phoneNumber: string = '(201) 748-6000';
  jobTitle: string = 'Job Title';

  setProperty(event: Event) {
    let target = event.target as HTMLInputElement;
    let property: string = target.id;
    switch (property) {
      case 'firstNameInput':
        this.firstName = target.value;
        break;
      case 'lastNameInput':
        this.lastName = target.value;
        break;
      case 'phoneNumberInput':
        this.phoneNumber = target.value;
        break;
      case 'jobTitleInput':
        this.jobTitle = target.value;
        break;
      default:
        console.warn('No matching ID found!');
        break;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
