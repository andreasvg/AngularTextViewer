import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextSearchToolbarComponent } from './text-viewer/toolbar/text-search-toolbar';
import { TextViewerComponent } from './text-viewer/text-viewer.component';
import { SafePipe } from './pipes/safe.pipe';
import { SearchHighlightPipe } from './pipes/search-highlight.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TextSearchToolbarComponent,
    TextViewerComponent,
    SafePipe,
    SearchHighlightPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    SafePipe,
    SearchHighlightPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
