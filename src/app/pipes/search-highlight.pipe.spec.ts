import { SearchHighlightPipe } from './search-highlight.pipe';

describe(`SearchHighlightPipe`, () => {
  describe(`transform`, () => {
      it(`should return the positions of the search term in the given text`, () => {
          // Arrange:
          const pipe: SearchHighlightPipe = new SearchHighlightPipe();
          const searchTerm = 'fox';
          const searchableText: string = 'Fox! Yesterday we saw a fox';

          // Act:
          const result = pipe.transform(searchableText, searchTerm);

          // Assert:
          expect(result).toBeTruthy();
          expect(result.positions.length).toBe(2);

          expect(result.positions[0].startPos).toBe(0);
          expect(result.positions[0].endPos).toBe(3);
          expect(result.positions[1].startPos).toBe(24);
          expect(result.positions[1].endPos).toBe(27);
      });

      it(`should determine the count of search hits as expected`, () => {
          // Arrange:
          const pipe: SearchHighlightPipe = new SearchHighlightPipe();
          const searchTerm = 'fox';
          const searchableText: string = 'Fox! Yesterday we saw a fox';
          const expectedValue: number = 2;

          // Act:
          const result = pipe.transform(searchableText, searchTerm);

          // Assert:
          expect(result.count).toBe(expectedValue);
      });

      it(`should mark each instance of the searchTerm`, () => {
          // Arrange:
          const pipe: SearchHighlightPipe = new SearchHighlightPipe();
          const searchTerm = 'fox';
          const searchableText: string = 'Fox! Yesterday we saw a fox';
          const expectedValue: string = '<mark>Fox</mark>! Yesterday we saw a <mark>fox</mark>';

          // Act:
          const result = pipe.transform(searchableText, searchTerm);

          // Assert:
          expect(result.value).toBe(expectedValue);
      });

      it(`should not mark any text if no search term was given`, () => {
          // Arrange:
          const pipe: SearchHighlightPipe = new SearchHighlightPipe();
          const searchTerm = '';
          const searchableText: string = 'Fox! Yesterday we saw a fox';

          // Act:
          const result = pipe.transform(searchableText, searchTerm);

          // Assert:
          expect(result.value).toBe(searchableText);
          expect(result.count).toBe(0);
          expect(result.positions).toBeNull();
      });
  });
});

