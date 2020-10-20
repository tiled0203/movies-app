import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './media/media.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    MediaComponent,
    SearchComponent
  ],
  exports: [
    SearchComponent,
    MediaComponent,
    FormsModule,
    RouterModule,
    CommonModule
  ],
})
export class SharedModule {}
