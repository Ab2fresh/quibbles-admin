# QuibblesAdmin

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to https://ab2fresh.github.io/quibbles-admin/ . The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
# Quibbles Admin Tool — Phase 1 Submission

**Repo:** https://github.com/Ab2fresh/quibbles-admin

**AI tool used:** Claude — for requirements drafting, Angular scaffolding guidance, and component code generation

---

## What Was Built

**1. Requirements Document**
A full breakdown of planned admin functionality, covering:
- Dashboard / Home
- User Management
- Post Management
- Comment Management
- Moderation Queue
- Analytics & Reporting
- Roles & Permissions
- Platform Settings
- Audit and Logs

**2. Angular Project Scaffolding**
- New Angular project created using the Angular CLI
- Standalone components enabled
- Routing configured

**3. Dashboard Homepage**
Displays key platform stats using dummy data:
- Total Users
- Active Posts
- Total Comments
- New Users (last 7 days)
- Pending Moderation
- Daily Engagement Rate

Also includes a **Quick Actions** panel with shortcuts for common admin tasks (Review Moderation Queue, Manage Users, View Reported Posts, Platform Settings).

---

## Tech Stack
- Angular (standalone components)
- Plain CSS (no external UI library — lightweight first pass)

---

## Running Locally

git clone https://github.com/Ab2fresh/quibbles-admin
cd quibbles-admin
npm install
ng serve

Then open https://ab2fresh.github.io/quibbles-admin/ in your browser.

---
