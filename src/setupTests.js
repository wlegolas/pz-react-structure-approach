import chai from 'chai'
import chaiJestSnapshot from 'chai-jest-snapshot'
import Enzyme, { mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

chai.use(chaiJestSnapshot)

// Make Enzyme functions available in all test files without importing
global.shallow = shallow
global.render = render
global.mount = mount
