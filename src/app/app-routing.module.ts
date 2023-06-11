import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CigarComponent } from './cigar/cigar.component';
import { LiquorComponent } from './liquor/liquor.component';
import { PairingComponent } from './pairing/pairing.component';

// Define your routes
const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'cigar', component: CigarComponent },
  { path: 'liquor', component: LiquorComponent },
  { path: 'pairing', component: PairingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
