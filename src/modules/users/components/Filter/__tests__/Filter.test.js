import chai from 'chai'
import toJson from 'enzyme-to-json'
import React from 'react'
import Filter from '../Filter'

describe('<Filter />', () => {
  let wrapper

  beforeAll(() => {
    const handleKeyUp = jest.fn()
    wrapper = shallow(<Filter onKeyUp={handleKeyUp} />)
  })

  describe('render()', () => {
    it('should render the component', () => {
      expect(toJson(wrapper)).to.matchSnapshot()
    })
  })

  describe('verify the structure', () => {
    it('should have a container with the class "pz-search"', () => {
      expect(wrapper.find('div.pz-search')).to.have.lengthOf(1)
    })

    it('should have an input element', () => {
      expect(wrapper.find('input')).to.have.lengthOf(1)
    })

    it('should have an input with the attribute "placeholder" defined', () => {
      expect(wrapper.find('input').prop('placeholder')).to.be.equal(
        'Fill the github user and press enter to search'
      )
    })
  })

  describe('onKeyUp', () => {
    it('should call the function when event "keyup" is fired', () => {
      const handleKeyUp = chai.spy()
      wrapper = shallow(<Filter onKeyUp={handleKeyUp} />)

      wrapper.find('input').simulate('keyup')

      expect(handleKeyUp).to.have.been.called.exactly(1)
    })

    it('should not call the functions when event "keydown" is fired', () => {
      const handleKeDown = chai.spy()
      wrapper = shallow(<Filter onKeyUp={handleKeDown} />)

      wrapper.find('input').simulate('keydwon')

      expect(handleKeDown).to.have.been.called.exactly(0)
    })
  })
})
