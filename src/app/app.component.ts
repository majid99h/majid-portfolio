import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  profileData: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getPortfolioData();
  }

  getPortfolioData() {
    this.http.get('assets/data/portfolio.json').subscribe((data) => {
      this.profileData = data;
      console.log(this.profileData);
    });
  }
}
