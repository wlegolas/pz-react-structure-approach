# Install and configure Chai to work with Jest

## Install dev dependencies

- Chai dependencies

```
yarn add --dev chai chai-jest-snapshot
```

## Configure Chai

- Add in the test setup file **src/setupTests.js** the code below:

```
import chai from 'chai';
import chaiJestSnapshot from "chai-jest-snapshot";
```

- In the file **src/setupTests.js** put the code below to configure Chai to use the lib to compare the snapshots like Jest does:

```
chai.use(chaiJestSnapshot);
```

- In the file **src/setupTests.js** put the code below to configure Chai _expect_ to be the default expect in the test files:

**Note:** if you want to keep the compatibility with the expects (Chai and Jest) you can follow the approach in this tutorial: [Combining Chai and Jest matchers](https://medium.com/@RubenOostinga/combining-chai-and-jest-matchers-d12d1ffd0303)

```
// Configure Chai
global.jestExpect = global.expect;
global.expect = chai.expect;
```
