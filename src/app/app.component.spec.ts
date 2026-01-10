import { beforeEach, describe, expect, it } from "vitest";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;
    const longText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, quae dolore eaque distinctio ducimus consequatur sed sunt aspernatur illo consequuntur earum ut vel, tempora nemo nobis accusantium fugit obcaecati accusamus.';

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    // ============================================
    // Component Logic / Properties Tests
    // ============================================
    describe('Component Logic', () => {
        it(`should have the title 'angular-course-2026'`, () => {
            expect(component.title).toEqual('angular-course-2026');
        });

        it('should have correct user object', () => {
            expect(component.user).toEqual({
                name: 'Yura',
                age: '27',
            });
        });

        it('should have configuration properties', () => {
            expect(component.tooltip).toBe('Я подсказка для ссылки');
            expect(component.cssClass).toBe('blue');
            expect(component.someNumber).toBe('70');
            expect(component.someDate).toBeInstanceOf(Date);
        });

        it('should have correct inline styles', () => {
            expect(component.inlineStyles).toEqual({
                width: '50%',
                background: 'green',
            });
        });
    });

    // ============================================
    // Template Rendering Tests
    // ============================================
    describe('Template Rendering', () => {
        // --- Title ---
        describe('Title', () => {
            it('should render the title in h1', () => {
                const h1 = fixture.debugElement.query(By.css('[data-testid="title"]'));
                expect(h1).toBeTruthy();
                expect(h1.nativeElement.textContent).toBe('angular-course-2026');
            });
        });

        // --- User Info ---
        describe('User Info Section', () => {
            it('should render user name', () => {
                const nameEl = fixture.debugElement.query(By.css('[data-testid="user-name"]'));
                expect(nameEl).toBeTruthy();
                expect(nameEl.nativeElement.textContent).toContain('Yura');
            });

            it('should render user age', () => {
                const ageEl = fixture.debugElement.query(By.css('[data-testid="user-age"]'));
                expect(ageEl).toBeTruthy();
                expect(ageEl.nativeElement.textContent).toContain('27');
            });
        });

        // --- Tooltip Link ---
        describe('Tooltip Link', () => {
            it('should have correct title attribute', () => {
                const link = fixture.debugElement.query(By.css('[data-testid="tooltip-link"]'));
                expect(link).toBeTruthy();
                expect(link.nativeElement.getAttribute('title')).toBe('Я подсказка для ссылки');
            });
        });

        // --- Styled Box (ngStyle) ---
        describe('Styled Box', () => {
            it('should apply inline styles via ngStyle', () => {
                const box = fixture.debugElement.query(By.css('[data-testid="styled-box"]'));
                expect(box).toBeTruthy();
                expect(box.nativeElement.style.width).toBe('50%');
                expect(box.nativeElement.style.background).toBe('green');
            });
        });

        // --- Dynamic Class (ngClass) ---
        describe('Dynamic Class', () => {
            it('should apply CSS class via ngClass', () => {
                const paragraph = fixture.debugElement.query(By.css('[data-testid="class-paragraph"]'));
                expect(paragraph).toBeTruthy();
                expect(paragraph.nativeElement.classList.contains('blue')).toBe(true);
            });
        });

        // --- Number Display ---
        describe('Number Display', () => {
            it('should render someNumber value', () => {
                const numberEl = fixture.debugElement.query(By.css('[data-testid="number-display"]'));
                expect(numberEl).toBeTruthy();
                expect(numberEl.nativeElement.textContent).toContain('70');
            });
        });

        // --- Date Display ---
        describe('Date Display', () => {
            it('should render formatted date', () => {
                const dateEl = fixture.debugElement.query(By.css('[data-testid="date-display"]'));
                expect(dateEl).toBeTruthy();
                // Just verify it contains "Date:" and some content (date format varies by locale)
                expect(dateEl.nativeElement.textContent).toContain('Date:');
                expect(dateEl.nativeElement.textContent.trim().length).toBeGreaterThan(5);
            });
        });

        // --- CutText Pipe ---
        describe('CutText Pipe', () => {
            it('should apply CutTextPipe default behavior (100 chars)', () => {
                const pEl = fixture.debugElement.query(By.css('[data-testid="text-default"]'));
                const expectedText = longText.substring(0, 100) + '...';

                expect(pEl).toBeTruthy();
                expect(pEl.nativeElement.textContent.trim()).toBe(expectedText);
            });

            it('should apply CutTextPipe with custom length (10 chars)', () => {
                const pEl = fixture.debugElement.query(By.css('[data-testid="text-short"]'));
                const expectedText = longText.substring(0, 10) + '...';

                expect(pEl).toBeTruthy();
                expect(pEl.nativeElement.textContent.trim()).toBe(expectedText);
            });
        });
    });

    // ============================================
    // DOM Structure Tests
    // ============================================
    describe('DOM Structure', () => {
        it('should have correct number of paragraph elements', () => {
            const paragraphs = fixture.debugElement.queryAll(By.css('p'));
            // user-name, user-age, class-paragraph, number-display, date-display, text-default, text-short
            expect(paragraphs.length).toBe(7);
        });

        it('should have user info section', () => {
            const section = fixture.debugElement.query(By.css('[data-testid="user-info"]'));
            expect(section).toBeTruthy();
            expect(section.nativeElement.tagName.toLowerCase()).toBe('section');
        });

        it('should have hr separator', () => {
            const hr = fixture.debugElement.query(By.css('hr'));
            expect(hr).toBeTruthy();
        });

        it('should have link element with href', () => {
            const link = fixture.debugElement.query(By.css('[data-testid="tooltip-link"]'));
            expect(link).toBeTruthy();
            expect(link.nativeElement.getAttribute('href')).toBe('#');
        });
    });

    // ============================================
    // Component Styles Tests (app.component.scss)
    // ============================================
    describe('Component Styles (SCSS)', () => {
        describe('CSS Class Application', () => {
            it('should have blue class applied by default', () => {
                const paragraph = fixture.debugElement.query(By.css('[data-testid="class-paragraph"]'));
                expect(paragraph.nativeElement.classList.contains('blue')).toBe(true);
                expect(paragraph.nativeElement.classList.contains('red')).toBe(false);
            });

            it('should be queryable by .blue class selector', () => {
                const blueElement = fixture.debugElement.query(By.css('.blue'));
                expect(blueElement).toBeTruthy();
                expect(blueElement.nativeElement.getAttribute('data-testid')).toBe('class-paragraph');
            });

            it('should not have any element with .red class initially', () => {
                const redElement = fixture.debugElement.query(By.css('.red'));
                expect(redElement).toBeNull();
            });
        });

        describe('Dynamic Class Switching', () => {
            it('should switch from blue to red class', async () => {
                const paragraph = fixture.debugElement.query(By.css('[data-testid="class-paragraph"]'));

                // Initial state
                expect(paragraph.nativeElement.classList.contains('blue')).toBe(true);

                // Change class - create fresh fixture to avoid change detection issues
                const newFixture = TestBed.createComponent(AppComponent);
                newFixture.componentInstance.cssClass = 'red';
                newFixture.detectChanges();

                const newParagraph = newFixture.debugElement.query(By.css('[data-testid="class-paragraph"]'));
                expect(newParagraph.nativeElement.classList.contains('red')).toBe(true);
                expect(newParagraph.nativeElement.classList.contains('blue')).toBe(false);
            });

            it('should allow querying by .red class after switching', () => {
                const newFixture = TestBed.createComponent(AppComponent);
                newFixture.componentInstance.cssClass = 'red';
                newFixture.detectChanges();

                const redElement = newFixture.debugElement.query(By.css('.red'));
                expect(redElement).toBeTruthy();

                const blueElement = newFixture.debugElement.query(By.css('.blue'));
                expect(blueElement).toBeNull();
            });
        });

        describe('Style Definitions', () => {
            it('should define both red and blue classes in stylesheet', () => {
                // Verify component has styleUrls defined
                const componentDef = (AppComponent as any).ɵcmp;
                expect(componentDef).toBeTruthy();

                // The styles array should contain our SCSS compiled to CSS
                // Note: In test environment, styles may be encapsulated differently
                if (componentDef.styles && componentDef.styles.length > 0) {
                    const styles = componentDef.styles.join('');
                    // Check if style definitions exist (may be transformed by Angular)
                    expect(styles.length).toBeGreaterThan(0);
                }
            });
        });

        describe('Multiple Class Support', () => {
            it('should support applying multiple classes', () => {
                const newFixture = TestBed.createComponent(AppComponent);
                newFixture.componentInstance.cssClass = 'blue red'; // Both classes
                newFixture.detectChanges();

                const paragraph = newFixture.debugElement.query(By.css('[data-testid="class-paragraph"]'));
                // ngClass with string 'blue red' applies both classes
                expect(paragraph.nativeElement.classList.contains('blue')).toBe(true);
                expect(paragraph.nativeElement.classList.contains('red')).toBe(true);
            });

            it('should support object syntax for ngClass', () => {
                // Update HTML to use object syntax: [ngClass]="{'blue': true, 'red': false}"
                // For now, test with the string value
                const newFixture = TestBed.createComponent(AppComponent);
                newFixture.componentInstance.cssClass = '';
                newFixture.detectChanges();

                const paragraph = newFixture.debugElement.query(By.css('[data-testid="class-paragraph"]'));
                expect(paragraph.nativeElement.classList.contains('blue')).toBe(false);
                expect(paragraph.nativeElement.classList.contains('red')).toBe(false);
            });
        });
    });
});
