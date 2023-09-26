import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
// import { rosterEffects, rosterFeature } from '@realworld/roster/data-access';
import { RosterComponent } from './roster.component';
// import { statsResolver } from '@realworld/roster/data-access'; // Assume you have a statsResolver for your Roster stats.

export const ROSTER_ROUTES: Routes = [
  {
    path: '',
    component: RosterComponent,
    // providers: [
    //   provideState(rosterFeature),
    //   provideEffects(rosterEffects),
    // ],
    // resolve: { statsResolver }, // Replace this with your actual resolver for roster stats
  },
];
