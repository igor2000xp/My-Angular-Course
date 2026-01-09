# AngularCourse2023

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# AngularCourse2023

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Custom Pipes

### CutTextPipe

The `CutTextPipe` is a custom Angular pipe that truncates text strings to a specified maximum length and appends an ellipsis (`...`) when the text exceeds the limit.

#### Location
- **File**: `src/app/pipes/cut-text.pipe.ts`
- **Test File**: `src/app/pipes/cut-text.pipe.spec.ts`
- **Module**: Registered in `AppModule` (`src/app/app.module.ts`)

#### Functionality

The pipe implements the `PipeTransform` interface and provides a `transform` method that:

1. **Accepts two parameters**:
   - `value` (string, required): The text string to be truncated
   - `maxLength` (number, optional): The maximum allowed length before truncation. Defaults to `100` characters if not specified

2. **Behavior**:
   - If the input string length is greater than `maxLength`, it returns the substring from index 0 to `maxLength` followed by `'...'`
   - If the input string length is less than or equal to `maxLength`, it returns the original string unchanged

#### Usage

The pipe can be used in Angular templates using the pipe operator (`|`):

**Basic usage (default maxLength of 100)**:ml
{{ "Your long text here..." | cutText }}
