# Angular-Require-AngularUIRouter-seed
A simple template of a project using AngularJS, AngularUI Router (https://github.com/angular-ui/ui-router), and RequireJS.

## Installation
    git clone https://github.com/lpavlovi/Angular-Require-AngularUiRouter-seed.git
    cd Angular-Require-AngularUiRouter-seed
    npm install
    bower install
    npm start
    Open: http://localhost:3000/

## Testing
    grunt test


Gruntfile is simple to follow; now includes karma config.
Jshint is setup to include requirejs - see the .jshintrc file for the settings.



The template includes has the following file structure:

```
project/
  index.html
  scripts/
    start/
      start-module.js
      start-route.js
    first-view/
      first-module.js
      first-controller.js
      first.html
    second-view/
      second-module.js
      second-controller.js
      second.html
    services/
      services-module.js
      date-service.js
    main.js
    bootstrap.js
    
test/
    date-service-spec.js
    start-spec.js
    test.config.js
```
