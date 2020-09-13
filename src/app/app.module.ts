import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogDetalhesProdutoComponent } from './components/dialog-detalhes-produto/dialog-detalhes-produto.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { FiltroProdutosPipe } from './filtro-produtos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    FilterComponent,
    HeaderComponent,
    StarRatingComponent,
    DialogDetalhesProdutoComponent,
    FiltroProdutosPipe
  ],
  entryComponents:[DialogDetalhesProdutoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
