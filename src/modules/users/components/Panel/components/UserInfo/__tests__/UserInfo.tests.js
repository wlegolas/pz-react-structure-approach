import toJson from 'enzyme-to-json'
import React from 'react'
import UserInfo from '../UserInfo'

describe('<UserInfo />', () => {
  let wrapper

  beforeAll(() => {
    wrapper = mount(<UserInfo />)
  })

  describe('render()', () => {
    it('should render the component', () => {
      expect(toJson(wrapper)).to.matchSnapshot()
    })

    describe('verify the structure', () => {
      it('should have container section', () => {
        expect(wrapper.find('.pz-user-container')).to.have.lengthOf(1)
      })

      it('should have an image element with the user avatar', () => {
        expect(wrapper.find('img')).to.have.lengthOf(1)
      })

      it('should have the element with the user name', () => {
        expect(wrapper.find('.pz-user-container h1')).to.have.lengthOf(1)
      })
    })
  })
})
