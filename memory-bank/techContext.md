# Technical Context

## Technology Stack

### Core Framework
- **Angular:** 19.0.0
- **TypeScript:** 5.6.3
- **RxJS:** 7.8.0
- **Zone.js:** 0.15.0

### Angular Packages
- @angular/core
- @angular/common
- @angular/forms (Template-driven forms)
- @angular/router
- @angular/animations
- @angular/platform-browser
- @angular/platform-browser-dynamic

### UI/UX Libraries
- **ngx-toastr:** 19.0.0 (Toast notifications)

### Development Tools
- **Angular CLI:** 19.0.1
- **Angular DevKit:** 19.0.1
- **TypeScript Compiler:** 5.6.3
- **Prettier:** 3.5.3 (Code formatting)

### Testing Framework
- **Jasmine:** 5.1.0
- **Karma:** 6.4.0
- **Karma Chrome Launcher**
- **Karma Coverage**
- **Karma Jasmine**
- **Karma Jasmine HTML Reporter**

### Backend/Mock Server
- **JSON Server:** 1.0.0-beta.3 (Running on port 4201)

## Development Setup

### Prerequisites
- Node.js (LTS version recommended)
- npm package manager
- Angular CLI

### Installation
```bash
npm install
```

### Available Scripts
```bash
npm start          # Start dev server
npm run build      # Production build
npm test           # Run tests
npm run server     # Start JSON server on port 4201
npm run format     # Format code with Prettier
```

### TypeScript Configuration
- **Target:** ES2022
- **Module:** ES2022
- **Strict Mode:** Enabled
- **Experimental Decorators:** Enabled
- **Module Resolution:** Bundler

### Angular Compiler Options
- Strict injection parameters
- Strict input access modifiers
- Strict templates
- Standalone components (default in v19)

## Technical Constraints
- Browser compatibility: Modern browsers (ES2022 support)
- No legacy View Engine support
- Standalone components architecture (Angular 19 default)
- OnPush change detection for performance

## Dependencies Management
- Package manager: npm
- Lock file: package-lock.json
- Private package (not published)
