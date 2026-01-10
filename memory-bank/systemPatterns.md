# System Patterns: My Angular Course

## System Architecture
- Standard Angular CLI project structure.
- Uses Modules (AppModule) as seen in `app.module.ts`.

## Key Technical Decisions
- **Angular 20**: Successfully upgraded to Angular 20.
- **Standalone Components**: Angular 19/20 default (migration added `standalone: false` to existing components/pipes in v19).
- **New Build System**: Using the Angular application builder (`@angular/build`).
- **TypeScript**: Updated to v5.9.3.
- **Pipes**: Custom pipe `CutTextPipe` implemented.
- **Routing**: `AppRoutingModule` for navigation.

## Design Patterns
- Component-based architecture.
- Modularization via `AppModule`.
- Custom pipes for data transformation.

## Component Relationships
- `AppComponent` is the root component.
- Custom components/pipes are registered in `AppModule`.
