/* import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { TextViewerComponent } from './text-viewer.component';
import { SearchHighlightPipe } from 'src/app/pipes/search.pipe';
import { ExtractSearchHighlightPipe } from 'src/app/pipes/extract-search.pipe';
import { Component, EventEmitter, Output, Input, Pipe, PipeTransform } from '@angular/core';
import { StandardDataProvider } from 'src/app/mockDataProviders/standardDataProvider';
import { ISearchResult } from 'src/app/models/local/ISearchResult';

@Pipe({ name: 'safe' })
export class MockSafePipe implements PipeTransform {
  public transform(value: any) {
    return value;
  }
}

@Component({ selector: 'app-text-search-toolbar', template: '', styles: [''] })
export class MockTextSearchToolbarComponent {
  @Output() searchTerm: EventEmitter<any> = new EventEmitter<any>();
  @Output() scrollTo: EventEmitter<string> = new EventEmitter<string>();
  @Input() currentItem: number;
  @Input() totalItems: number;
  @Input() clear: boolean;
}

describe(`TextViewerComponent`, () => {
  let component: TextViewerComponent;
  let fixture: ComponentFixture<TextViewerComponent>;
  let mockSearchHighlighPipe;
  let mockExtractSearchHighlightPipe;
  let dataProvider: StandardDataProvider = new StandardDataProvider();

  beforeEach(async () => {
    mockSearchHighlighPipe = jasmine.createSpyObj(['transform']);
    mockExtractSearchHighlightPipe = jasmine.createSpyObj(['transform']);

    TestBed.configureTestingModule({
      providers: [
        { provide: SearchHighlightPipe, useValue: mockSearchHighlighPipe },
        { provide: ExtractSearchHighlightPipe, useValue: mockExtractSearchHighlightPipe }
      ],
      declarations: [TextViewerComponent, MockTextSearchToolbarComponent, MockSafePipe]
    }).compileComponents();

    fixture = TestBed.createComponent(TextViewerComponent);
    component = fixture.componentInstance;
  });

  afterAll(() => {
    fixture = null;
    component = null;
    dataProvider = null;
    mockSearchHighlighPipe = null;
    mockExtractSearchHighlightPipe = null;
  });

  it(`should create`, () => {
    // Arrange:
    // Act:
    fixture.detectChanges();

    // Assert:
    expect(component).toBeTruthy();
  });

  describe(`selectedAnswerPart`, () => {
    it(`set() should reset class properties`, () => {
      // Arrange:
      fixture.detectChanges();
      component.currentPosition = 123;
      component.totalItems = 100;
      fixture.detectChanges();

      // Act:
      component.selectedAnswerPart = dataProvider.answerPartModels[0];

      // Assert:
      expect(component.currentPosition).toBeNull();
      expect(component.totalItems).toBeNull();
    });
  });

  describe(`ocrContent`, () => {
    it(`should return the property as expected`, () => {
      // Arrange:
      const content = 'TEST';
      component.ocrContent = content;
      fixture.detectChanges();

      // Act:
      const result = component.ocrContent;

      // Assert:
      expect(result).toBe(content);
    });
  });

  describe(`onSearchTerm`, () => {
    it(`should call the searchHighlightPipe`, () => {
      // Arrange:
      fixture.detectChanges();
      mockSearchHighlighPipe.transform.and.returnValue(getEmptySearchHighlightTransformResult());

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

  describe(`ngAfterViewChecked`, () => {
    it(`should call the extractSearchHighlightPipe`, fakeAsync(() => {
      // Arrange:
      fixture.detectChanges();
      mockExtractSearchHighlightPipe.transform.and.returnValue('');
      component.ocrContent = '<div>TEST OCR CONTENT <mark>Test</mark></div>';
      component.selectedAnswerPart = dataProvider.answerPartModels[0];
      fixture.detectChanges();

      // Act:
      component.ngAfterViewChecked();
      tick(250);
      fixture.detectChanges();

      // Assert:
      expect(mockExtractSearchHighlightPipe.transform).toHaveBeenCalled();
    }));
  });
});

function getEmptySearchHighlightTransformResult(): ISearchResult {
  return {
    count: 0,
    value: 'Test',
    positions: []
  };
}
 */
