import { SafePipe } from './safe.pipe';
import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

describe(`SafePipe`, () => {
  let pipe: SafePipe;
  let mockDomSanitizer;

  beforeEach(async () => {
    mockDomSanitizer = jasmine.createSpyObj(['bypassSecurityTrustHtml']);

    TestBed.configureTestingModule({
      providers: [SafePipe, { provide: DomSanitizer, useValue: mockDomSanitizer }],
      declarations: []
    }).compileComponents();

    pipe = TestBed.get(SafePipe);
  });

  afterAll(() => {
    pipe = null;
    mockDomSanitizer = null;
  });

  it(`should create`, () => {
    // Arrange:
    // Act:
    // Assert:
    expect(pipe).toBeTruthy();
  });

  describe(`transform`, () => {
    it(`should call bypassSecurityTrustHtml on the sanitizer service`, () => {
      // Arrange:
      const html = '<div>Hello</div>';

      // Act:
      const result = pipe.transform(html);

      // Assert:
      expect(mockDomSanitizer.bypassSecurityTrustHtml).toHaveBeenCalled();
    });
  });
});
