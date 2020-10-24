import { Component, OnInit, Output, Input, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'app-text-search-toolbar',
    templateUrl: './text-search-toolbar.html',
    styleUrls: ['./text-search-toolbar.scss']
})

export class TextSearchToolbarComponent implements OnInit, OnDestroy {
    @Output() searchTermChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() scrollTo: EventEmitter<string> = new EventEmitter<string>();
    @Input() currentItem: number;
    @Input() totalItems: number;

    public formGroup: FormGroup;
    private searchTextChangesSubsription: Subscription;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
      this.formGroup = this.formBuilder.group({
        searchText: ''
      });

      this.searchTextChangesSubsription = this.searchText.valueChanges.pipe(debounceTime(400), distinctUntilChanged()).subscribe((searchTerm: string) => {
        this.searchTermChanged.emit(searchTerm);
      });
    }

    public get searchText(): FormControl {
      return this.formGroup.get('searchText') as FormControl;
    }

    public onClick(direction: string): void {
        if (this.searchText.value && this.searchText.value.length > 0) {
            this.scrollTo.emit(direction);
        }
    }

    public reset(): void {
      this.searchText.reset();
    }

    ngOnDestroy(): void {
        if (this.searchTextChangesSubsription) {
            this.searchTextChangesSubsription.unsubscribe();
        }
    }

}
