import { Component, OnInit, Inject, HostListener, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit {
  currentSection = 'home';
  navbarOpen = false;

  product = [
    {
      header: 'School Management',
      image: '../assets/school-management.jpg ',
      content:
        'Schedule Exams for whole year easily Bulk upload of student, subject and teacher data Simple assignment of weightages, time limits &; marks Create question paper randomly from Question Bank Cheat-proof conduct of exams using AI Proctors',
    },
    {
      header: 'Exam Manager',
      image: '../assets/exam-manager.jpg ',
      content:
        'Schedule Exams for whole year easily Bulk upload of student, subject and teacher data Simple assignment of weightages, time limits &; marks Create question paper randomly from Question Bank Cheat-proof conduct of exams using AI Proctors',
    },
    {
      header: 'Teacher',
      image: '../assets/teacher.jpg',
      content:
        'Create Questions manually or from Question Bank Increase classroom engagement with ready to use Pop Up Quiz Auto correct student answers. Huge time saving for teachers Publish Report Cards automatically using vibrant templates',
    },
    {
      header: 'Student',
      image: '../assets/student.jpg ',
      content:
        'Students can take the exams on any device. Voice to Text helps students not great at typing Exam schedule linked to Google/Outlook calendar Answer scripts available online after results Learning Resources',
    },
  ];
  platform = [
    {
      platform: 'Windows',
      image: '../assets/laptop2.jpg',
    },
    {
      platform: 'iOS',
      image: '../assets/ipad.jpg',
    },
    {
      platform: 'Android',
      image: '../assets/apple.jpg',
    },
  ];

  features1 = [
    {
      image: '../assets/easy.png',
      text: 'easy to use',
    },
    {
      image: '../assets/question.png',
      text: 'question bank',
    },
    {
      image: '../assets/engagement.png',
      text: 'engagement',
    },
    {
      image: '../assets/exams.png',
      text: 'easy exams',
    },
    {
      image: '../assets/security.png',
      text: 'fraud proof',
    },
    {
      image: '../assets/ai.png',
      text: 'AI proctor',
    },
    {
      image: '../assets/report.png',
      text: 'report cards',
    },
    {
      image: '../assets/predictive.png',
      text: 'predictive analysis',
    },
  ];

  constructor(private router: Router) {}
  ngOnInit(): void {}

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    // this.route.
  }
  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll($event) {
  //   let element = document.querySelector('.navbar');
  //   if (window.pageYOffset > element.clientHeight) {
  //     element.classList.add('active');
  //   } else {
  //     element.classList.remove('active');
  //   }
  // }
  scrollTo(section) {
    document.querySelector('#' + section).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
    this.currentSection = section;
    this.navbarOpen = false;
  }
  toggleNav() {
    this.navbarOpen = !this.navbarOpen;
  }
  showSwal() {
    Swal.fire({
      icon: 'info',
      title: '',
      text: 'This page is under construction',
      showCancelButton: false,
      confirmButtonText: 'Go Back!',
      backdrop: 'white',
    }).then((res) => {
      // console.log("You said ok");
    });
  }

  goToPage(page: String): void {
    this.router.navigate([`${page}`]);
  }
}
