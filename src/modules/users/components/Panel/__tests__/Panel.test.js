import toJson from 'enzyme-to-json'
import React from 'react'
import Panel from '../Panel'

describe('<Panel />', () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallow(<Panel />)
  })

  describe('render()', () => {
    it('should render the component', () => {
      expect(toJson(wrapper)).to.matchSnapshot()
    })
  })

  describe('verify the structure', () => {
    it('should have a section with filter component', () => {
      expect(wrapper.find('.pz-search')).to.have.lengthOf(1)
    })

    it('should have a section with user info', () => {
      expect(wrapper.find('.pz-user-container')).to.have.lengthOf(1)
    })
  })
})
