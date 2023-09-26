import { Injectable } from '@angular/core';
import { ApiService } from '@realworld/core/http-client';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile, ProfileResponse } from '@realworld/core/api-types';
import { Article } from '@realworld/core/api-types';

export interface UserStat {
  username: string;
  profileLink: string;
  totalArticles: number;
  totalLikes: number;
  dateOfFirstArticle: string | null;
}

@Injectable({ providedIn: 'root' })
export class RosterService {
  constructor(private apiService: ApiService) {}

  getUserStats(): Observable<UserStat[]> {
    // Assume getUsers and getUserArticles are methods that fetch users and their articles
    return forkJoin([this.getUsers(), this.getUserArticles()]).pipe(
      map(([users, articles]) => {
        return users.map(user => {
          const userArticles = articles.filter(article => article.author.username === user.username);
          return {
            username: user.username,
            profileLink: `/profile/${user.username}`,
            totalArticles: userArticles.length,
            totalLikes: userArticles.reduce((sum, article) => sum + article.favoritesCount, 0),
            dateOfFirstArticle: userArticles.length ? userArticles[0].createdAt : null,
          };
        });
      })
    );
  }

  // Mock or real API calls
  private getUsers(): Observable<Profile[]> {
    // Replace this with a real API call to fetch all users
    return this.apiService.get<Profile[]>('/users');
  }

  private getUserArticles(): Observable<Article[]> {
    // Replace this with a real API call to fetch articles for all users
    return this.apiService.get<Article[]>('/articles');
  }
}
