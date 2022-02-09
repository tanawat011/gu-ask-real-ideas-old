import { render } from '@testing-library/react'
import { Button } from '@element/Button/Button'

describe('<Button />', () => {
  it('should render to match snapshot', () => {
    expect.assertions(1)

    const button = render(<Button />)

    expect(button).toMatchSnapshot()
  })
})
