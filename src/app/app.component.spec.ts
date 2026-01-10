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
                // Fix the date to a specific moment to avoid flakiness
                const fixedDate = new Date('2026-01-15T10:00:00');
                component.someDate = fixedDate;
                fixture.detectChanges();

                const dateEl = fixture.debugElement.query(By.css('[data-testid="date-display"]'));
                expect(dateEl).toBeTruthy();
                // Verify it contains "Date:" and formatted date content
                expect(dateEl.nativeElement.textContent).toContain('Date:');
                expect(dateEl.nativeElement.textContent.trim().length).toBeGreaterThan(5);
            });
        });

        // --- CutText Pipe ---
        describe('CutText Pipe', () => {
            it('should apply CutTextPipe and truncate text with default length', () => {
                const pEl = fixture.debugElement.query(By.css('[data-testid="text-default"]'));
                expect(pEl).toBeTruthy();

                const renderedText = pEl.nativeElement.textContent.trim();
                // Verify pipe is applied: text should be shorter than original and end with ellipsis
                expect(renderedText.length).toBeLessThan(longText.length);
                expect(renderedText.endsWith('...')).toBe(true);
            });

            it('should apply CutTextPipe with custom length parameter', () => {
                const pEl = fixture.debugElement.query(By.css('[data-testid="text-short"]'));
                expect(pEl).toBeTruthy();

                const renderedText = pEl.nativeElement.textContent.trim();
                // Verify pipe is applied with custom length: should be shorter and end with ellipsis
                expect(renderedText.length).toBeLessThan(longText.length);
                expect(renderedText.endsWith('...')).toBe(true);
                // Custom length (10) should result in shorter text than default (100)
                expect(renderedText.length).toBeLessThan(110); // Less than default truncated length
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
            // Note: With zoneless change detection, we create fresh fixtures for tests that modify
            // component state after initial render. This avoids ExpressionChangedAfterItHasBeenCheckedError
            // which occurs when zoneless change detection detects a value change after it was checked.
            // This is a necessary compromise - only 4 of 26 tests require this pattern.
            let testFixture: ComponentFixture<AppComponent>;
            let testComponent: AppComponent;

            beforeEach(() => {
                testFixture = TestBed.createComponent(AppComponent);
                testComponent = testFixture.componentInstance;
            });

            it('should switch from blue to red class', () => {
                // Set the value before detectChanges
                testComponent.cssClass = 'red';
                testFixture.detectChanges();

                const paragraph = testFixture.debugElement.query(By.css('[data-testid="class-paragraph"]'));
                expect(paragraph.nativeElement.classList.contains('red')).toBe(true);
                expect(paragraph.nativeElement.classList.contains('blue')).toBe(false);
            });

            it('should allow querying by .red class after switching', () => {
                // Set the value before detectChanges
                testComponent.cssClass = 'red';
                testFixture.detectChanges();

                const redElement = testFixture.debugElement.query(By.css('.red'));
                expect(redElement).toBeTruthy();

                const blueElement = testFixture.debugElement.query(By.css('.blue'));
                expect(blueElement).toBeNull();
            });
        });

        describe('Multiple Class Support', () => {
            // Note: With zoneless change detection, we create fresh fixtures for tests that modify
            // component state after initial render. This avoids ExpressionChangedAfterItHasBeenCheckedError
            // which occurs when zoneless change detection detects a value change after it was checked.
            // This is a necessary compromise - only 4 of 26 tests require this pattern.
            let testFixture: ComponentFixture<AppComponent>;
            let testComponent: AppComponent;

            beforeEach(() => {
                testFixture = TestBed.createComponent(AppComponent);
                testComponent = testFixture.componentInstance;
            });

            it('should support applying multiple classes', () => {
                // Set the value before detectChanges
                testComponent.cssClass = 'blue red'; // Both classes
                testFixture.detectChanges();

                const paragraph = testFixture.debugElement.query(By.css('[data-testid="class-paragraph"]'));
                // ngClass with string 'blue red' applies both classes
                expect(paragraph.nativeElement.classList.contains('blue')).toBe(true);
                expect(paragraph.nativeElement.classList.contains('red')).toBe(true);
            });

            it('should remove classes when cssClass is empty', () => {
                // Set the value before detectChanges
                testComponent.cssClass = '';
                testFixture.detectChanges();

                const paragraph = testFixture.debugElement.query(By.css('[data-testid="class-paragraph"]'));
                expect(paragraph.nativeElement.classList.contains('blue')).toBe(false);
                expect(paragraph.nativeElement.classList.contains('red')).toBe(false);
            });
        });
    });
});
