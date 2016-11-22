# supermarket register

## Application 
Based off of https://github.com/tomastrajan/angular-js-es6-testing-example/blob/1.5.0/src/feature-b/todo-component/todo-component.js This Angular JS seed is a good start that focuses on unit and intergration testing. 

 ## Getting Started
 ```
 git clone https://github.com/Mike-Dunton/supermarket-register.git
 cd supermarket-register/supermarket-register
 npm install
 ```

### Scripts
All scripts should be run with `npm run [script]`, for example `npm run test` 

* `start` - Start development server on port 8081 (opens a browser window)
* `test` - lint code and run all tests. 
* `ci` - lint, test, and build code for prod

### Register source code and tests
The register application and tests can be found in `supermarket-register/src/supermarket-register/`

## Chef Recipe
```
 git clone https://github.com/Mike-Dunton/supermarket-register.git
 cd supermarket-register/supermarket_register_cookbook
 kitchen verify
 ```