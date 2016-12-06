# supermarket register [![Build Status](https://drone.io/github.com/Mike-Dunton/supermarket-register/status.png)](https://drone.io/github.com/Mike-Dunton/supermarket-register/latest)

## Application 
Based off of https://github.com/tomastrajan/angular-js-es6-testing-example This Angular JS seed is a good start that focuses on unit and intergration testing. 

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
After running kitchen verify you should be able to navigate to 192.168.33.33 to see the application. 