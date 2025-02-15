import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-home',
  standalone: true,
  imports: [],
  templateUrl: './home-home.component.html',
  styleUrls: ['./home-home.component.css'],
})
export class HomeHomeComponent implements OnInit {
  employeeName = 'Gustavo Garcia';
  empPhone = '(214) 971-2778';
  empEmail = 'gustavogar0622@gmail.com';
  summary = `Software developer with 5 years of experience in full-stack development.
      Proficient in Java, JavaScript, and Python. Strong understanding of
      object-oriented programming and design patterns. Experienced in developing
      web applications using Angular and React. Skilled in developing RESTful
      APIs using Spring Boot and Django. Passionate about learning new
      technologies and applying them to solve real-world problems.`;
  school = 'Western Governors University';
  schoolDate = '04/2024 - Prestent';
  degree = 'Bachelor of Science, Software Engineereing';
  employer = 'Mariposas Ranch';
  jobTitle = 'Front-end Developer';
  employmentDate = '10/23 - Present';
  jobDescription = `I developed the Mariposas Ranch website using ReactJS for dynamic
      interactivity and TailwindCSS for a clean, responsive design. The site
      highlights the ranch's unique offerings, such as stunning landscapes,
      accommodations, and events. I included interactive galleries, a dynamic
      booking system, and an integrated email form for seamless communication
      with visitors. My goal was to create an elegant, user-friendly experience
      that works beautifully across all devices.`;

  constructor() {}
  ngOnInit(): void {}
}
