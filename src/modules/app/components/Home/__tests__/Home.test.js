import toJson from 'enzyme-to-json'
import React from 'react'
import Home from '../Home'

describe('<Home />', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const wrapper = mount(
        <Home>
          <div className="my-content">My Content</div>
        </Home>
      )

      expect(toJson(wrapper)).to.matchSnapshot()
    })

    it('should render a nested component', () => {
      const NestedComponent = () => (
        <div className="nested-cmp">
          <h1>Nested component</h1>
        </div>
      )
      const wrapper = mount(
        <Home>
          <NestedComponent />
        </Home>
      )

      expect(wrapper.find('.nested-cmp')).to.have.lengthOf(1)
    })
  })
})
