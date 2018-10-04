import chai from 'chai'
import toJson from 'enzyme-to-json'
import React from 'react'
import Search from '../Search'

describe('<Search />', () => {
  let wrapper

  beforeAll(() => {
    const onSearch = jest.fn()
    wrapper = shallow(<Search onSearch={onSearch} />)
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

  describe('prop onSearch', () => {
    const eventData = {
      keyCode: 13,
      target: {
        value: 'wlegolas'
      }
    }

    it('should call the function when event "keyup" is fired by ENTER key', () => {
      const onSearch = chai.spy()

      wrapper = shallow(<Search onSearch={onSearch} />)

      wrapper.find('input').simulate('keyup', eventData)

      expect(onSearch).to.have.been.called.exactly(1)
    })

    it('should not call the functions when event "keydown" is fired', () => {
      const handleKeDown = chai.spy()
      wrapper = shallow(<Search onSearch={handleKeDown} />)

      wrapper.find('input').simulate('keydwon', eventData)

      expect(handleKeDown).to.have.been.called.exactly(0)
    })
  })
})
