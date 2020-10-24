import { Pipe, PipeTransform } from '@angular/core';
import { ISearchResult } from '../models/ISearchResult';

@Pipe({
  name: 'searchHighlight'
})
export class SearchHighlightPipe implements PipeTransform {

  public transform (searchableText: string, searchTerm: string): ISearchResult {
    if (!searchTerm) {
        return { value: searchableText, count: 0, positions: null };
    }

    const positions = new Array<any>();
    const re = new RegExp(searchTerm, 'gi');
    let counter: number = 0;

    const text = searchableText.replace(re, (match, p1) => {
        counter++;
        positions.push({ startPos: p1, endPos: p1 + match.length });
        return `<mark>${match}</mark>`;
    });

    return { value: text, count: counter, positions };
}

}
