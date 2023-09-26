import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RosterService, UserStat } from '@realworld/roster/data-access';

// export interface UserStat {
//   username: string;
//   profileLink: string;
//   totalArticles: number;
//   totalLikes: number;
//   dateOfFirstArticle: string | null;
// }
@Component({
  standalone: true,
  selector: 'conduit-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  imports: [CommonModule, RouterModule],
})
export class RosterComponent implements OnInit {
  rosterData: UserStat[] = []; // Replace 'any' with your data model when available

  constructor(private rosterService: RosterService) {}

  ngOnInit() {
    // Simulate data retrieval or other logic
    const users = this.rosterService.getUsers();
    this.rosterData = users.map((user) => {
      return {
        username: user.username,
        profileLink: `/profile/${user.username}`,
        totalArticles: 0,
        totalLikes: 0,
        dateOfFirstArticle: null,
      };
    }
    // this.rosterData = [
    //   { username: 'john', profileLink: "/test", totalArticles: 5, totalLikes: 15, dateOfFirstArticle: '2021-05-23' },
    //   { username: 'sara', profileLink: "/test", totalArticles: 2, totalLikes: 5, dateOfFirstArticle: '2022-02-14' },
    //   // Add more dummy data
    // ];

    // Sort based on likesReceived
    this.rosterData.sort((a, b) => b.totalLikes - a.totalLikes);
  }
}
