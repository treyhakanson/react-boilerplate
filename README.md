# A React App with Babel and Webpack
A simple webpack ready with babel and webpack. just clone the repo and run:
```bash
npm install -d
```

Ensure that tests are up and running (*you will need google chrome to run tests*):
```bash
npm test
```

# Info
Contains all the necessary babel/webpack modules needed to get started. Also includes a few useful dev modules:

### Testing
- expect
- karma
- mocha
- react-addons-test-utils

### Miscallaneous
- faker (used to generate placeholder content)

# Testing
when writing a test for a component, there are a few components that should almost always be required:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import MyComponent from 'MyComponent';
```

jQuery can also make things easier, instal with the following if desired:
```bash
npm install jQuery --save-dev
```

Some useful calls for testing:
```javascript
// can use this to render an element inside a test file
// and then check if certain component methods are giving
// the expected outputs
TestUtils.renderIntoDocument(<MyComponent/>);
```












