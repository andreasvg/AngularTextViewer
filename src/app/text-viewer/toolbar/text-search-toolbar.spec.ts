import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { TextSearchToolbarComponent } from './text-search-toolbar';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

describe(`TextSearchToolbarComponent`, () => {
    let component: TextSearchToolbarComponent;
    let fixture: ComponentFixture<TextSearchToolbarComponent>;

    beforeEach(async() => {
        TestBed.configureTestingModule({
            imports: [
              ReactiveFormsModule
            ],
            providers: [],
            declarations: [
                TextSearchToolbarComponent
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(TextSearchToolbarComponent);
        component = fixture.componentInstance;
    });

    it(`should create`, () => {
        // Arrange:
        // Act:
        fixture.detectChanges();

        // Assert:
        expect(component).toBeTruthy();
    });

    it(`should emit entered keystrokes`, fakeAsync(() => {
        // Arrange:
        fixture.detectChanges();
        const searchInput = fixture.debugElement.query(By.css('#searchInput')).nativeElement;
        spyOn(component.searchTermChanged, 'emit');

        // Act:
        searchInput.value = 'Search Text';
        searchInput.dispatchEvent(new Event('input'));
        searchInput.dispatchEvent(new Event('keyup'));
        fixture.detectChanges();
        tick(450);

        // Assert:
        expect(component.searchTermChanged.emit).toHaveBeenCalled();
    }));

    describe(`reset`, () => {
      it(`should reset the searchText`, () => {
        // Arrange:
        fixture.detectChanges();
        spyOn(component.searchText, 'reset');

        // Act:
        component.reset();

        // Assert:
        expect(component.searchText.reset).toHaveBeenCalled();
      });
    });

    describe(`onClick`, () => {
        it(`should emit the given search direction`, () => {
            // Arrange:
            fixture.detectChanges();
            const direction = 'prev';
            spyOn(component.scrollTo, 'emit');

            // set value of search input element:
            const searchInput = fixture.debugElement.query(By.css('#searchInput')).nativeElement;
            searchInput.value = 'Search Text';
            searchInput.dispatchEvent(new Event('input'));
            fixture.detectChanges();

            // Act:
            component.onClick(direction);
            fixture.detectChanges();

            // Assert:
            expect(component.scrollTo.emit).toHaveBeenCalledWith(direction);
        });
    });
});

