# Active Context

## Current Work Focus
**Branch:** my/47-templ-forms-pract
**Topic:** Template-Driven Forms Practice

## Current Implementation
Working on a user registration form that demonstrates:
- Template-driven form validation
- Async email validation with debouncing
- RxJS operators for complex form logic
- Form state management
- User feedback with toast notifications

## Recent Changes
- Implemented user registration form with NgForm
- Added async email availability checking
- Integrated debouncing for email validation API calls
- Used RxJS operators: debounceTime, switchMap, combineLatestWith
- Implemented OnPush change detection with signals
- Added error handling with NotificationService

## Current Component Structure

### AppComponent
**File:** `src/app/app.component.ts`

**Key Features:**
1. **Form State Management**
   - Initial user object with default values
   - Signal-based enable/disable submit button
   - Email pending state indicator

2. **Email Validation Flow**
   ```
   User types → debounce 1s → check email API → 
   update validation state → combine with form status → 
   enable/disable submit
   ```

3. **ViewChild References**
   - `emailRef`: NgModel for email field
   - `userForm`: NgForm for entire form

4. **Services Used**
   - UserService: Email checking and user creation
   - NotificationService: Toast notifications
   - DestroyRef: Automatic subscription cleanup

## Next Steps
1. Continue testing template-driven forms implementation
2. Possibly add more validation rules
3. Consider edge cases for email validation
4. Ensure proper error handling for all scenarios

## Active Decisions
- Using template-driven forms (not reactive forms) for this lesson
- OnPush change detection with signals for performance
- RxJS for async operations and complex form logic
- JSON server for backend simulation






