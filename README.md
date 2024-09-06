
# Micro Frontend Project with Webpack, Module Federation, RxJS, Jest, and Cypress

This project demonstrates a micro frontend architecture using Webpack's Module Federation plugin for dynamic sharing of modules, RxJS for state management and real-time data handling, Jest for unit testing, and Cypress for end-to-end automation testing.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Testing](#testing)
  - [Unit Testing with Jest](#unit-testing-with-jest)
  - [Automation Testing with Cypress](#automation-testing-with-cypress)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Introduction

Micro Frontends allow for the independent development and deployment of different parts of a web application. This project uses Webpack’s **Module Federation** to facilitate the sharing of components between these parts. RxJS helps manage reactive state changes, while Jest and Cypress handle unit and end-to-end testing, respectively.

## Features

- **Micro Frontend Architecture**: Independently developed and deployed micro applications.
- **Webpack Module Federation**: Dynamic import and sharing of components between micro frontends.
- **RxJS Integration**: Reactive state management and data handling.
- **Unit Testing with Jest**: Test individual components and utilities.
- **End-to-End Testing with Cypress**: Simulate and verify user interactions and workflows.

## Installation

To get started, follow the steps below:

1. **Clone the repository:**
   ```bash
   git clone repo url
   cd micro-frontend-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run each micro frontend:**
   Each micro frontend is an independent module, so navigate into each one and start its server:
   ```bash
   cd home && npm run start
   cd pdp && npm run start
   ```

4. **Open the browser:**
   The micro frontends will run on separate ports (e.g., `http://localhost:3000` for home, `http://localhost:3001` for pdp, `http://localhost:3002` for cart).


## Testing

### Unit Testing with Jest

For unit testing, Jest is used to test individual components and logic. To run the unit tests:

```bash
npx jest
```

You can find the tests in the `useCartCount.spec.js`. Jest is configured to generate a code coverage report and ensure that all functionality works as expected.

### Automation Testing with Cypress

For automated end-to-end testing, Cypress simulates user interactions and verifies that the app behaves correctly. To run Cypress tests:

1. **Open Cypress UI:**
   ```bash
   npx cypress open
   ````

Cypress tests are located in the `cypress/e2e/` directory and cover scenarios like login, navigation, and form submission.

## Technologies Used

- **React**: Frontend framework for building UI.
- **Webpack**: Module bundler used with Module Federation for micro frontend support.
- **Module Federation**: Webpack plugin to dynamically share and load remote modules.
- **RxJS**: Reactive programming for state management.
- **Jest**: JavaScript testing framework for unit tests.
- **Cypress**: End-to-end testing framework for automated browser testing.

## Contributing

Contributions are welcome! Feel free to fork the repository, create a new branch, and submit a pull request.

