# Quibbles Admin Tool

An admin dashboard for the Quibbles platform, built with Angular. This covers Phase 1: project requirements, project scaffolding, and a premium-styled dashboard homepage using dummy data.

---

## Overview

Quibbles Admin is the internal tooling layer for the Quibbles platform — giving administrators a single place to monitor activity and, in future phases, manage users, posts, comments, and moderation across the community.

This phase delivers three things:
1. A full requirements document
2. A properly scaffolded Angular project
3. A working dashboard homepage with dummy data, styled to a premium production-grade standard

---

## What's Included

### 1. Requirements Document
A full breakdown of planned admin functionality covering Dashboard, User Management, Post Management, Comment Management, Moderation Queue, Analytics & Reporting, Roles & Permissions, Platform Settings, and Audit Logs.

See [`REQUIREMENTS.md`](./REQUIREMENTS.md) in this repo for the full document.

### 2. Angular Project
Created using the Angular CLI with standalone components and routing enabled:

```bash
ng new quibbles-admin --routing --style=css --standalone
```

### 3. Dashboard Homepage
A dark, "command center" style dashboard displaying key platform stats using dummy data:

| Metric | Purpose |
|---|---|
| Total Users | Platform-wide registered user count |
| Active Posts | Currently live post count |
| Total Comments | Platform-wide comment count |
| New Users (7 days) | Signup velocity |
| Pending Moderation | Items awaiting review |
| Daily Engagement Rate | Overall platform activity health |

Each stat card includes a live trend sparkline showing week-over-week direction.

Below the stats, a **Quick Navigation** grid links out to all 8 remaining admin functions — User Management, Post Management, Comment Management, Moderation Queue, Analytics & Reporting, Roles & Permissions, Platform Settings, and Audit Logs — each with its own icon, color accent, and description.

The sidebar includes the Quibbles logo, full page navigation, and a live-pulse indicator signaling real-time platform status.

---

## Tech Stack

- **Framework:** Angular (standalone components)
- **Styling:** Plain CSS — custom dark theme, no external UI library
- **Typography:** Space Grotesk (headings/numbers), Inter (body/UI) via Google Fonts
- **AI tool used in development:** Claude (Anthropic)

---

## Live Demo

**[https://ab2fresh.github.io/quibbles-admin/](https://ab2fresh.github.io/quibbles-admin/)**

---

## Running Locally

```bash
npm install
ng serve
```

<<<<<<< HEAD
Once the server is running, open your browser and navigate to https://ab2fresh.github.io/quibbles-admin/ . The application will automatically reload whenever you modify any of the source files.
=======
Then open [http://localhost:4200](http://localhost:4200)
>>>>>>> f496dd0 (Update dashboard with premium UI, logo, and README)

---

## Deploying

```bash
ng build --configuration production --base-href /quibbles-admin/
ngh --dir=dist/quibbles-admin/browser
```

---

## Project Structure

```
quibbles-admin/
├── src/
│   ├── app/
│   │   └── dashboard/
│   │       ├── dashboard.component.ts
│   │       ├── dashboard.component.html
│   │       └── dashboard.component.css
│   ├── assets/
│   │   └── logo.png
│   └── index.html
├── REQUIREMENTS.md
└── README.md
```

---

## Status

| Phase | Description | Status |
|---|---|---|
| Phase 1 | Requirements, scaffold, dashboard with dummy data | ✅ Complete |
| Phase 2 | User Management, Post Management, Comment Management | ⏳ Not started |
| Phase 3 | Moderation Queue, Roles & Permissions | ⏳ Not started |
| Phase 4 | Analytics & Reporting, Platform Settings, Audit Logs | ⏳ Not started |
| Phase 5 | Backend API integration and authentication | ⏳ Not started |

---

## Next Steps

<<<<<<< HEAD
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
=======
1. Build out User Management, Post Management, and Comment Management as fully working pages
2. Wire the Moderation Queue to real flagged content
3. Connect real backend APIs and authentication so dashboard stats reflect live data
4. Add charts for Analytics & Reporting
>>>>>>> f496dd0 (Update dashboard with premium UI, logo, and README)
