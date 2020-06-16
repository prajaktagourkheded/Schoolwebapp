import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  goToPage(page: String): void {
    this.router.navigate([`${page}`]);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
