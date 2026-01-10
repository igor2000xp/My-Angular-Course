// Import setup first to initialize TestBed
import '../test-setup';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CutTextPipe } from './pipes/cut-text.pipe';
import { describe, it, expect, beforeEach } from 'vitest';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  const longText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, quae dolore eaque distinctio ducimus consequatur sed sunt aspernatur illo consequuntur earum ut vel, tempora nemo nobis accusantium fugit obcaecati accusamus.";

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // If AppComponent is standalone, use 'imports' instead of 'declarations'
      declarations: [AppComponent, CutTextPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  // Group 1: Component Logic / Properties
  describe('Component Logic', () => {
    it(`should have the title 'angular-course-2026'`, () => {
      expect(component.title).toEqual('angular-course-2026');
    });

    it('should have correct user object', () => {
      expect(component.user).toEqual({
        name: 'Yura',
        age: '27', // Verify if this should be a number (27) or string ('27') based on your interface
      });
    });

    it('should have configuration properties', () => {
      expect(component.tooltip).toBe('Я подсказка для ссылки');
      expect(component.cssClass).toBe('blue');
      // If 'someNumber' is actually a number type, check against 70, not '70'
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

  // Group 2: Template & Pipe Rendering
  describe('Template Rendering', () => {
    it('should apply CutTextPipe default behavior to the first paragraph', () => {
      // Best Practice: Add class="text-default" or data-testid="text-default" to your HTML
      // Fallback: use query('p:first-of-type') if you can't change HTML
      const pDebugElement = fixture.debugElement.query(By.css('p:first-of-type'));
      const expectedText = longText.substring(0, 100) + '...';

      expect(pDebugElement).toBeTruthy();
      expect(pDebugElement.nativeElement.textContent.trim()).toBe(expectedText);
    });

    it('should apply CutTextPipe custom length (10) to the second paragraph', () => {
      // Best Practice: Add class="text-short" or data-testid="text-short" to your HTML
      // Fallback: use query('p:nth-of-type(2)')
      const pDebugElement = fixture.debugElement.query(By.css('p:nth-of-type(2)'));
      const expectedText = longText.substring(0, 10) + '...';

      expect(pDebugElement).toBeTruthy();
      expect(pDebugElement.nativeElement.textContent.trim()).toBe(expectedText);
    });
  });
});
