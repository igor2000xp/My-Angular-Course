# System Patterns

## Architecture Overview
**Type:** Single Page Application (SPA)
**Framework:** Angular 19 (standalone components by default)
**Pattern:** Component-based architecture with services

## Key Technical Decisions

### Component Architecture
- **Standalone Components** - Using Angular 19's default standalone architecture
- **OnPush Change Detection** - Optimized change detection strategy
- **Template-Driven Forms** - Using Angular FormsModule for form handling
- **Signals** - Using Angular signals for reactive state management

### State Management
- **Local Component State** - Using signals for component-level state
- **Service-Based State** - Services handle shared state and business logic
- **RxJS Streams** - Reactive data flow for async operations

### Design Patterns in Use

#### 1. Service Pattern
```typescript
UserService - Handles user-related HTTP operations
NotificationService - Manages user notifications (toast messages)
```

#### 2. Reactive Forms Pattern (Template-Driven)
```typescript
- NgForm for form state management
- NgModel for two-way data binding
- Custom validation with async validators
- RxJS operators for form value changes
```

#### 3. Dependency Injection
```typescript
- Constructor injection for services
- DestroyRef for cleanup management
- Hierarchical injector system
```

#### 4. Observable Patterns
```typescript
- switchMap for cancelling previous requests
- debounceTime for input throttling
- combineLatestWith for multiple stream coordination
- takeUntilDestroyed for automatic cleanup
```

## Component Relationships
```
AppComponent (root)
├── UserService (email validation, user creation)
├── NotificationService (UI feedback)
└── DestroyRef (lifecycle management)
```

## Data Flow
1. User input → NgModel value changes
2. Debounced → API call via UserService
3. Response → Form validation state update
4. Form state → Enable/disable submit button
5. Submit → API call → Notification feedback






