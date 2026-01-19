## Selenium Java Starter Framework

This module demonstrates an enterprise-style Selenium framework using Java and TestNG.

### Features
- Page Object Model
- Configurable browser and base URL
- Implicit waits and driver management
- Sample Login test
- Maven + TestNG setup for CI

### How to run
1. Install Maven
2. Update `config.properties` if needed
3. Run tests:
```bash
mvn clean test

### How This Framework Works
1. `BaseTest` handles browser lifecycle.
2. `LoginPage` encapsulates UI interactions for login.
3. `LoginTest` demonstrates a real negative login scenario with assertions.
4. Fully structured to allow easy extension for more pages and tests.

           ┌────────────┐
           │ BaseTest   │
           │ (setup/    │
           │ teardown)  │
           └─────┬─────-┘
                 │
         initializes driver
                 │
                 ▼
           ┌────────────┐
           │ LoginTest  │
           │ (test case)│
           └─────┬─────-┘
                 │
         uses Page Object
                 │
                 ▼
           ┌────────────┐
           │ LoginPage  │
           │ (UI actions│
           │ & locators)│
           └────────────┘

