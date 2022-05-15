import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatRippleModule, MatNativeDateModule} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatStepperModule} from '@angular/material/stepper';
import {MatTreeModule} from '@angular/material/tree'; 
import {MatTabsModule} from '@angular/material/tabs'; 

const MaterialComponents = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatRippleModule,
  MatNativeDateModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule, 
  MatDividerModule,
  MatStepperModule,
  MatTreeModule,
  MatTabsModule
];
@NgModule({
  imports: [MaterialComponents
  ],
  exports: [MaterialComponents
  ]
})
export class MaterialModule { }
