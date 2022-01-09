import { render } from '@testing-library/react'
import { Button } from './Button'

describe('<Button />', () => {
  it('test', () => {
    expect.assertions(1)

    const button = render(<Button />)

    expect(button).toMatchSnapshot()
  })
})
