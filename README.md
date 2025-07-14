# Vue.js Job Board App

This project is a horse racing game implemented using Vue.js and Pinia for state management. The game randomly selects 20 horses with different colors and conditions ranging from 1 to 100. The race consists of 6 runs, each run starting after the previous one. Horses are animated during the race, and the results of each run are displayed in real-time.

## Technologies Used
- Vue.js 3 + Vite,
- Pinia for state management,
- Bootstrap + SCSS
- Typescript

## Usage
Browse Jobs: View all job listings on the homepage.
Filter Jobs: Use the search bar to filter jobs by title, location, or category.
View Job Details: Click on any job to navigate to its dynamic detail page.

## Project Structure
- components: Contains Vue components for different parts of the application.
- store: Contains Pinia store modules for managing application state.
- styles: Contains CSS files for styling the application.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

###  Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request with any improvements or features you'd like to add.
