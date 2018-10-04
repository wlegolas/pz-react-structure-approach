import toJson from 'enzyme-to-json'
import React from 'react'
import Panel from '../Panel'

describe('<Panel />', () => {
  let wrapper

  beforeAll(() => {
    const onSearch = jest.fn()
    const userInfo = {
      avatarUrl: 'https://avatars2.githubusercontent.com/u/698363?v=4',
      name: 'Weslley Alves de Oliveira',
      totalFollowing: 10,
      totalFollowers: 5
    }

    wrapper = mount(<Panel userInfo={userInfo} onSearch={onSearch} />)
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
