# System Patterns: My Angular Course

## System Architecture
- Standard Angular CLI project structure.
- Uses Modules (AppModule) as seen in `app.module.ts`.

## Key Technical Decisions
- **Angular 19**: Successfully upgraded to Angular 19.
- **Standalone Components**: Angular 19 default (migration added `standalone: false` to existing components/pipes).
- **New Build System**: Using the new application builder (`@angular/build`).
- **Pipes**: Custom pipe `CutTextPipe` implemented.
- **Routing**: `AppRoutingModule` for navigation.

## Design Patterns
- Component-based architecture.
- Modularization via `AppModule`.
- Custom pipes for data transformation.

## Component Relationships
- `AppComponent` is the root component.
- Custom components/pipes are registered in `AppModule`.
