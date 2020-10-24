import { TextViewerComponent } from './text-viewer.component';
import { Component, EventEmitter, Output, Input, Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ISearchResult } from '../models/ISearchResult';
import { SearchHighlightPipe } from '../pipes/search-highlight.pipe';
import { TextSearchToolbarComponent } from './toolbar/text-search-toolbar';
import { IResetable } from './toolbar/IResetable';

@Pipe({ name: 'safe' })
export class MockSafePipe implements PipeTransform {
  public transform(value: any) {
    return value;
  }
}

@Component({ selector: 'app-text-search-toolbar',
  template: '<div></div>',
  styles: [''],
  providers: [
    { provide: TextSearchToolbarComponent, useClass: MockTextSearchToolbarComponent }
  ]
})
export class MockTextSearchToolbarComponent implements IResetable {
  @Output() searchTerm: EventEmitter<any> = new EventEmitter<any>();
  @Output() scrollTo: EventEmitter<string> = new EventEmitter<string>();
  @Input() currentItem: number;
  @Input() totalItems: number;
  @Input() clear: boolean;
  public reset(): void {}
}

describe(`TextViewerComponent`, () => {
  let component: TextViewerComponent;
  let fixture: ComponentFixture<TextViewerComponent>;
  let mockSearchHighlighPipe;

  beforeEach(async () => {
    mockSearchHighlighPipe = jasmine.createSpyObj(['transform']);

    TestBed.configureTestingModule({
      providers: [
        { provide: SearchHighlightPipe, useValue: mockSearchHighlighPipe }
      ],
      declarations: [TextViewerComponent, MockTextSearchToolbarComponent, MockSafePipe]
    }).compileComponents();

    fixture = TestBed.createComponent(TextViewerComponent);
    component = fixture.componentInstance;
  });

  afterAll(() => {
    fixture = null;
    component = null;
    mockSearchHighlighPipe = null;
  });

  it(`should create`, () => {
    // Arrange:
    // Act:
    fixture.detectChanges();

    // Assert:
    expect(component).toBeTruthy();
  });

  describe(`ngOnChanges`, () => {
    it(`should reset the text search toolbar`, () => {
      // Arrange:
      fixture.detectChanges();
      component.searchToolbar = TestBed.createComponent(MockTextSearchToolbarComponent).componentInstance as IResetable;

      spyOn(component.searchToolbar, 'reset');

      // Act:
      component.ngOnChanges(null);

      // Assert:
      expect(component.searchToolbar.reset).toHaveBeenCalled();
    });
  });

  describe(`documentContent`, () => {
    it(`should return the property as expected`, () => {
      // Arrange:
      const content = 'TEST';
      component.documentContent = content;
      fixture.detectChanges();

      // Act:
      const result = component.documentContent;

      // Assert:
      expect(result).toBe(content);
    });
  });

  describe(`onSearchTerm`, () => {
    it(`should call the searchHighlightPipe`, () => {
      // Arrange:
      mockSearchHighlighPipe.transform.and.returnValue(getEmptySearchHighlightTransformResult());
      fixture.detectChanges();

      // Act:
      component.onSearchTerm('search text');

      // Assert:
      expect(mockSearchHighlighPipe.transform).toHaveBeenCalled();
    });
  });

  describe(`onScrollTo`, () => {
    it(`should decrement the current position on "prev"`, () => {
      // Arrange:
      const startingPos = 2;
      component.currentPosition = startingPos;
      fixture.detectChanges();

      // Act:
      component.onScrollTo('prev');

      // Assert:
      expect(component.currentPosition).toBe(startingPos - 1);
    });

    it(`should increment the current position on "next"`, () => {
      // Arrange:
      const startingPos = 2;
      component.currentPosition = startingPos;
      fixture.detectChanges();

      // Act:
      component.onScrollTo('next');

      // Assert:
      expect(component.currentPosition).toBe(startingPos + 1);
    });

    it(`should not increment the current position beyond the total number of items`, () => {
      // Arrange:
      const startingPos = 2;
      component.currentPosition = startingPos;
      component.totalItems = 2;
      fixture.detectChanges();

      // Act:
      component.onScrollTo('next');

      // Assert:
      expect(component.currentPosition).toBe(startingPos);
    });
  });

});

function getEmptySearchHighlightTransformResult(): ISearchResult {
  return {
    count: 0,
    value: 'Test',
    positions: []
  };
}

