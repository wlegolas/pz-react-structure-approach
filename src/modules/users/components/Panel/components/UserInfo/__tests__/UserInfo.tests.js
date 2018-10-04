import toJson from 'enzyme-to-json'
import React from 'react'
import UserInfo from '../UserInfo'

describe('<UserInfo />', () => {
  let wrapper
  const userInfo = {
    avatarUrl: 'https://avatars2.githubusercontent.com/u/698363?v=4',
    name: 'Legolas',
    totalFollowing: 5,
    totalFollowers: 2
  }

  beforeAll(() => {
    wrapper = mount(<UserInfo userInfo={userInfo} />)
  })

  describe('render()', () => {
    it('should render the component', () => {
      expect(toJson(wrapper)).to.matchSnapshot()
    })

    describe('verify the structure', () => {
      it('should have container section', () => {
        expect(wrapper.find('.pz-user-container')).to.have.lengthOf(1)
      })

      it('should avatar URL be the same that defined URL', () => {
        expect(wrapper.find('img').prop('src')).to.be.equal(userInfo.avatarUrl)
      })

      it('should have the element with the user name', () => {
        expect(wrapper.find('.pz-user-container h1').text()).to.be.equal(
          userInfo.name
        )
      })

      it('shoudl have the Followers infor with defined value', () => {
        const followersNode = <p className="pz-label">Followers: 2</p>

        expect(wrapper.contains(followersNode)).to.equal(true)
      })

      it('shoudl have the Following infor with defined value', () => {
        const followingNode = <p className="pz-label">Following: 5</p>

        expect(wrapper.contains(followingNode)).to.equal(true)
      })
    })
  })
})
