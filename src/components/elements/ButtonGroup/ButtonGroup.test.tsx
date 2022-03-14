import { render } from '@testing-library/react'

import { SIZE, VARIANT } from '@constants'
import { Button } from '@element/Button'
import { ButtonGroup } from '@element/ButtonGroup'

describe('<ButtonGroup />', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should render to match snapshot', () => {
    expect.assertions(1)

    const { asFragment } = render(
      <ButtonGroup>
        <Button label='One' />
      </ButtonGroup>,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render to match snapshot and to be vertical group button and', () => {
    expect.assertions(1)

    const { asFragment } = render(
      <ButtonGroup vertical>
        <Button label='One' />
      </ButtonGroup>,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should be group button, default button', async () => {
    expect.assertions(2)

    const { findByTestId, findAllByRole } = render(
      <ButtonGroup testId='test'>
        <Button label='One' />
      </ButtonGroup>,
    )

    const div = await findByTestId('test')
    const buttons = await findAllByRole('button')

    expect(div).toHaveClass(`btn__group`)
    expect(buttons[0]).toHaveClass(`btn btn__md btn__primary`)
  })

  it('should be group button, all default button', async () => {
    expect.assertions(2)

    const { findAllByRole } = render(
      <ButtonGroup>
        <Button label='One' />
        <Button label='Two' />
      </ButtonGroup>,
    )

    const buttons = await findAllByRole('button')

    expect(buttons[0]).toHaveClass(`btn btn__md btn__primary`)
    expect(buttons[1]).toHaveClass(`btn btn__md btn__primary`)
  })

  it('should be vertical group button', async () => {
    expect.assertions(1)

    const { findByTestId } = render(
      <ButtonGroup testId='test' vertical>
        <Button label='One' />
        <Button label='Two' />
      </ButtonGroup>,
    )

    const div = await findByTestId('test')

    expect(div).toHaveClass(`btn__group btn__group-vertical`)
  })

  it('should be group button, child is text', async () => {
    expect.assertions(1)

    const { findByTestId } = render(
      <ButtonGroup testId='test'>xxx</ButtonGroup>,
    )

    const div = await findByTestId('test')

    expect(div).toHaveClass(`btn__group`)
  })

  it('should be group button, no child', async () => {
    expect.assertions(1)

    const { findByTestId } = render(<ButtonGroup testId='test' />)

    const div = await findByTestId('test')

    expect(div).toHaveClass(`btn__group`)
  })
})
