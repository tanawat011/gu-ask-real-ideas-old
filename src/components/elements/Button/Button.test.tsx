import { render } from '@testing-library/react'
import { Button } from '@element/Button'
import { COLOR, SIZE } from '@constants'

describe('<Button />', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should render to match snapshot', () => {
    expect.assertions(1)

    const { asFragment } = render(
      <Button
        color={COLOR.PRIMARY}
        size={SIZE.MEDIUM}
        icon='ArchiveIcon'
        label='Button A'
        width={100}
      />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render to match snapshot with primary color', async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button color={COLOR.PRIMARY} />)

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveClass('bg-primary-default')
  })

  it('should render to match snapshot with secondary color', async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button color={COLOR.SECONDARY} />)

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveClass('bg-secondary-default')
  })

  it('should render to match snapshot with success color', async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button color={COLOR.SUCCESS} />)

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveClass('bg-success-default')
  })

  it('should render to match snapshot with warning color', async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button color={COLOR.WARNING} />)

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveClass('bg-warning-default')
  })

  it('should render to match snapshot with info color', async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button color={COLOR.INFO} />)

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveClass('bg-info-default')
  })

  it('should render to match snapshot with danger color', async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button color={COLOR.DANGER} />)

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveClass('bg-danger-default')
  })

  it('should render to match snapshot with small size', async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button size={SIZE.SMALL} />)

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveClass('text-sm')
  })

  it('should render to match snapshot with medium size', async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button size={SIZE.MEDIUM} />)

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveClass('text-base')
  })

  it('should render to match snapshot with large size', async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button size={SIZE.LARGE} />)

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveClass('text-lg')
  })

  it('should render to match snapshot with disabled', async () => {
    expect.assertions(2)

    const { findByRole } = render(<Button isDisabled />)

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveClass('disabled:bg-primary-disabled')
    expect(buttonEl).toHaveAttribute('disabled')
  })

  it('should render to match snapshot with disabled and primary color', async () => {
    expect.assertions(2)

    const { findByRole } = render(<Button isDisabled />)

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveClass('disabled:bg-primary-disabled')
    expect(buttonEl).toHaveAttribute('disabled')
  })

  it('should render to match snapshot with disabled and secondary color', async () => {
    expect.assertions(2)

    const { findByRole } = render(<Button isDisabled color={COLOR.SECONDARY} />)

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveClass('disabled:bg-secondary-disabled')
    expect(buttonEl).toHaveAttribute('disabled')
  })

  it('should render to match snapshot with disabled and success color', async () => {
    expect.assertions(2)

    const { findByRole } = render(<Button isDisabled color={COLOR.SUCCESS} />)

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveClass('disabled:bg-success-disabled')
    expect(buttonEl).toHaveAttribute('disabled')
  })

  it('should render to match snapshot with disabled and warning color', async () => {
    expect.assertions(2)

    const { findByRole } = render(<Button isDisabled color={COLOR.WARNING} />)

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveClass('disabled:bg-warning-disabled')
    expect(buttonEl).toHaveAttribute('disabled')
  })

  it('should render to match snapshot with disabled and info color', async () => {
    expect.assertions(2)

    const { findByRole } = render(<Button isDisabled color={COLOR.INFO} />)

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveClass('disabled:bg-info-disabled')
    expect(buttonEl).toHaveAttribute('disabled')
  })

  it('should render to match snapshot with disabled and danger color', async () => {
    expect.assertions(2)

    const { findByRole } = render(<Button isDisabled color={COLOR.DANGER} />)

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveClass('disabled:bg-danger-disabled')
    expect(buttonEl).toHaveAttribute('disabled')
  })

  it('should render to match snapshot with loading icon', async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button isLoading />)

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveClass('bg-primary-default')
  })

  it('should render to match snapshot with loading icon and primary color', async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button isLoading />)

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveClass('bg-primary-default')
  })

  it('should render to match snapshot with loading icon and secondary color', async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button isLoading color={COLOR.SECONDARY} />)

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveClass('bg-secondary-default')
  })

  it('should render to match snapshot with loading icon and success color', async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button isLoading color={COLOR.SUCCESS} />)

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveClass('bg-success-default')
  })

  it('should render to match snapshot with loading icon and warning color', async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button isLoading color={COLOR.WARNING} />)

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveClass('bg-warning-default')
  })

  it('should render to match snapshot with loading icon and info color', async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button isLoading color={COLOR.INFO} />)

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveClass('bg-info-default')
  })

  it('should render to match snapshot with loading icon and danger color', async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button isLoading color={COLOR.DANGER} />)

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveClass('bg-danger-default')
  })

  it('should render to match snapshot with `width` and `label`', async () => {
    expect.assertions(1)

    const { findByLabelText } = render(<Button width={100} label='Button A' />)

    const buttonEl = findByLabelText('Button A')

    expect(buttonEl).toBeTruthy()
  })

  it('should render to match snapshot with event `onClick`', async () => {
    expect.assertions(1)

    const onClick = jest.fn()

    const { findByRole } = render(<Button onClick={onClick} />)

    const buttonEl = await findByRole('button')

    buttonEl.click()

    expect(onClick).toHaveBeenCalled()
  })

  it('should render to match snapshot with icon', async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button icon='ArchiveIcon' />)

    const buttonEl = await findByRole('button')

    expect(buttonEl.children[0].nodeName).toBe('svg')
  })

  it('should render to match snapshot with iconxxx', async () => {
    expect.assertions(1)

    const { findByRole } = render(
      <Button
        label='Button A'
        width={100}
        icon='ArchiveIcon'
        isDisabled={false}
        isLoading={false}
        color={COLOR.PRIMARY}
        size={SIZE.LARGE}
        onClick={() => {}}
      />,
    )

    const buttonEl = await findByRole('button')

    expect(buttonEl).toBeTruthy()
  })
})
