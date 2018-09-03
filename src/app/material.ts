import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatDividerModule,
    MatGridListModule, MatCardModule, MatTabsModule, MatTableModule, MatFormFieldModule, MatMenuModule, MatDialogModule, MatSelectModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatDividerModule,
    MatGridListModule, MatCardModule, MatTabsModule, MatTableModule, MatFormFieldModule, MatMenuModule, MatDialogModule, MatSelectModule],
})
export class MaterialModule { }
