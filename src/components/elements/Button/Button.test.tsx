import { render } from '@testing-library/react'
import { Button } from './Button'

describe('<Button />', () => {
  it('should be render to natch snapshot', () => {
    expect.assertions(1)

    const button = render(<Button />)

    expect(button).toMatchSnapshot()
  })
})
