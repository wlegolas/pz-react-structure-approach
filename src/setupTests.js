import chai from 'chai';
import chaiJestSnapshot from 'chai-jest-snapshot';
import spies from 'chai-spies';
import Enzyme, { mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { registerAssertions } from 'redux-actions-assertions/jest';
import { registerAssertions } from 'redux-actions-assertions/chai';

Enzyme.configure({ adapter: new Adapter() })

chai.use(chaiJestSnapshot)
chai.use(spies)

// Make Enzyme functions available in all test files without importing
global.shallow = shallow
global.render = render
global.mount = mount

registerAssertions()

// Configure Chai
global.jestExpect = global.expect
global.expect = chai.expect
