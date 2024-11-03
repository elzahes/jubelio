# Tech test Automation Testing

This repository hosts Cypress automation tests specifically crafted for the Jubelio project. Follow the instructions below to set up and execute these tests on your local environment.

## Table of Contents

- [Setup Instructions](#setup-instructions)
  - [Clone the Repository](#clone-the-repository)
  - [Open Project in Visual Studio Code](#open-project-in-visual-studio-code)
  - [Install Prerequisites](#install-prerequisites)
- [How to Run Tests](#how-to-run-tests)
- [Optional Configurations](#optional-configurations)
- [Getting Help](#getting-help)

## Setup Instructions

Follow these steps to configure and prepare the tests for execution.

### Clone the Repository

To begin, clone the repository to your machine by running the following command:

" git clone https://github.com/elzahes/jubelio.git "

## Open Project in Visual Studio Code

Open the project in [Visual Studio Code](https://code.visualstudio.com/) for convenient editing and navigation.

### Install Prerequisites

1. **Node.js**  
   Confirm that Node.js is installed on your machine. If not, you can download it from  [this link](https://nodejs.org/download/release/).

2. **Cypress**  
   In the project directory, install Cypress by running:

  "npm install cypress --save-dev"



### How to Run Tests
To start the Cypress Test Runner, use this command:

"npx cypress open"

This will open an interface where you can manually select and run tests.
Alternatively, for a headless run (without the GUI), execute:

"npx cypress run"

This mode is useful for CI/CD pipelines or automated testing.

### Optional Configurations
If you need custom settings, edit the cypress.json file in the project’s root directory. For details on configuration options, consult the Cypress documentation.

### Getting Help
For support or to report issues, please open an issue in this repository, or reach out directly to the maintainers.



