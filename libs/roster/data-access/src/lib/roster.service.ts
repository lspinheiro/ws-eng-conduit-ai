import { Injectable } from '@angular/core';
import { ApiService } from '@realworld/core/http-client';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Profile, ProfileResponse, Article, ArticleResponse } from '@realworld/core/api-types';
import { HttpParams } from '@angular/common/http';

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
        return {} as any;
        // return this.getUsers().pipe(
        //     switchMap((users: Profile[]) => {
        //         return forkJoin(users.map(user => this.getUserArticles(user.id))).pipe(
        //             map((userArticlesArray: Article[][]) => {
        //                 return users.map((user, index) => {
        //                     const userArticles = userArticlesArray[index];
        //                     return {
        //                         username: user.username,
        //                         profileLink: `/profile/${user.username}`,
        //                         totalArticles: userArticles.length,
        //                         totalLikes: userArticles.reduce((sum, article) => sum + article.favoritesCount, 0),
        //                         dateOfFirstArticle: userArticles.length ? userArticles[0].createdAt : null,
        //                     };
        //                 });
        //             })
        //         );
        //     })
        // );
    }

    private getUsers(): Observable<Profile[]> {
        return this.apiService.get<Profile[]>('/profiles');
    }

    // private getUserArticles(userId: number): Observable<Article[]> {
    //     // Replace with actual backend call using findAll, adapt parameters as needed
    //     const query = new HttpParams().set('userId', userId.toString()); // Example query, you can populate it based on requirements
    //     return this.apiService.get<ArticleResponse[]>('/articles', { params: query });
    // }
}
