import { Component, ViewChild, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ISearchResult } from '../models/ISearchResult';
import { SearchHighlightPipe } from '../pipes/search-highlight.pipe';
import { TextSearchToolbarComponent } from './toolbar/text-search-toolbar';


@Component({
  selector: 'app-text-viewer',
  templateUrl: './text-viewer.component.html',
  styleUrls: ['./text-viewer.component.scss']
})
export class TextViewerComponent implements OnChanges {
  private _originalContent: string;
  private _formattedContent: string;
  private _searchResult: ISearchResult;
  private _currentElement: any;

  public totalItems: number;
  public currentPosition: number;
  public clearSearch: boolean;

  @ViewChild('searchToolbar', { static: true}) searchToolbar: TextSearchToolbarComponent;
  @ViewChild('documentRef', { static: false }) documentRef: ElementRef;

  @Input()
  set documentContent(input: string) {
    this._originalContent = input;
    this._formattedContent = input;
  }
  get documentContent(): string {
    return this._formattedContent;
  }

  constructor(private searchHiglightPipe: SearchHighlightPipe) {
    this.currentPosition = 0;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.searchToolbar) {
      this.searchToolbar.reset();
    }
  }

  public onSearchTerm(input: string): void {
    this._searchResult = this.searchHiglightPipe.transform(this._originalContent, input);
    this._formattedContent = this._searchResult.value;
    this.totalItems = this._searchResult.count;
    this.currentPosition = 1;
    this.scrollToElement();
  }

  public onScrollTo(direction: string): void {
    this.currentPosition = direction.toLowerCase() === 'next' ? this.currentPosition + 1 : this.currentPosition - 1;

    if (this.currentPosition > this.totalItems) {
      this.currentPosition = this.totalItems;
    } else if (this.currentPosition < 1) {
      this.currentPosition = 1;
    }

    this.scrollToElement();
  }

  private scrollToElement(): void {
    if (this.documentRef) {
      const children = this.documentRef.nativeElement.children;
      if (children && children.length === 1) {
        const elements = children[0].children;

        this._currentElement = elements[this.currentPosition - 1];

        if (this._currentElement) {
          this.documentRef.nativeElement.scrollTop = this._currentElement.offsetTop - 300;
        }
      }
    }
  }
}

