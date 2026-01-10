// src/test-setup.ts
import 'zone.js';
import 'zone.js/testing';

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

// Initialize the Angular testing environment
// When running via Angular CLI (ng test), the builder may initialize this first,
// but when running Vitest directly (npm run test:ui), we need to ensure it's initialized
const testBed = getTestBed();

// More robust check: ensure test environment is initialized
// Only check for 'platform' property (as 'platformRef' does not exist on TestBed)
if (!testBed.platform) {
  try {
    testBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting(),
      { teardown: { destroyAfterEach: true } }
    );
  } catch (error) {
    // If already initialized (e.g., by Angular CLI), ignore the error
    // This can happen when Angular CLI's builder initializes it first
    if (
      !(error instanceof Error) ||
      !error.message?.includes('already been initialized')
    ) {
      throw error;
    }
  }
}
