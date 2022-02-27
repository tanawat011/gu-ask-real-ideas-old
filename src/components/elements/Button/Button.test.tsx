import { render } from '@testing-library/react'
import { Button } from '@element/Button'
import { BUTTON_STYLE, COLOR, SIZE } from '@constants'

describe('<Button />', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should render to match snapshot', () => {
    expect.assertions(1)

    const { asFragment } = render(
      <Button
        color={COLOR.PRIMARY}
        size={SIZE.MD}
        icon='ArchiveIcon'
        label='Button A'
        width={100}
        hasShadow
      />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it(`should be loading button`, async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button isLoading />)

    const button = await findByRole('button')

    expect(button.children[0].children[0].nodeName).toBe('svg')
  })

  it(`should be disabled button`, async () => {
    expect.assertions(2)

    const { findByRole } = render(<Button label='Test' isDisabled />)

    const button = await findByRole('button')

    expect(button).toHaveClass('disabled:bg-primary-disabled')
    expect(button).toHaveAttribute('disabled')
  })

  it(`should be rounded button`, async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button label='Test' isRounded />)

    const button = await findByRole('button')

    expect(button).toHaveClass('rounded-full')
  })

  it(`should be shadow button`, async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button label='Test' hasShadow />)

    const button = await findByRole('button')

    expect(button).toHaveClass('shadow-nextui')
  })

  Object.keys(SIZE).forEach((size) => {
    const _size = size.toLowerCase() === 'md' ? 'base' : size.toLowerCase()

    it(`should be button size ${size.toLowerCase()}`, async () => {
      expect.assertions(1)

      const { findByRole } = render(
        <Button size={SIZE[size as keyof typeof SIZE]} label='Test' />,
      )

      const button = await findByRole('button')

      expect(button).toHaveClass(`text-${_size}`)
    })
  })

  Object.keys(COLOR).forEach((color) => {
    it(`should be ${color.toLowerCase()} button`, async () => {
      expect.assertions(1)

      const { findByText } = render(
        <Button color={COLOR[color as keyof typeof COLOR]} label='Test' />,
      )

      const button = await findByText('Test')

      expect(button).toHaveClass(`bg-${color.toLowerCase()}-default`)
    })

    it(`should be ${color.toLowerCase()} button, default style`, async () => {
      expect.assertions(1)

      const { findByText } = render(
        <Button
          buttonStyle={BUTTON_STYLE.DEFAULT}
          color={COLOR[color as keyof typeof COLOR]}
          label='Test'
        />,
      )

      const button = await findByText('Test')

      expect(button).toHaveClass(`bg-${color.toLowerCase()}-default`)
    })

    it(`should be ${color.toLowerCase()} button, outline style`, async () => {
      expect.assertions(1)

      const { findByText } = render(
        <Button
          buttonStyle={BUTTON_STYLE.OUTLINE}
          color={COLOR[color as keyof typeof COLOR]}
          label='Test'
        />,
      )

      const button = await findByText('Test')

      expect(button).toHaveClass('bg-transparent')
    })

    it(`should be ${color.toLowerCase()} button, flat style`, async () => {
      expect.assertions(1)

      const { findByText } = render(
        <Button
          buttonStyle={BUTTON_STYLE.FLAT}
          color={COLOR[color as keyof typeof COLOR]}
          label='Test'
        />,
      )

      const button = await findByText('Test')

      expect(button).toHaveClass(`bg-${color.toLowerCase()}-default-flat`)
    })

    it(`should be ${color.toLowerCase()} button, ghost style`, async () => {
      expect.assertions(1)

      const { findByText } = render(
        <Button
          buttonStyle={BUTTON_STYLE.GHOST}
          color={COLOR[color as keyof typeof COLOR]}
          label='Test'
        />,
      )

      const button = await findByText('Test')

      expect(button).toHaveClass('bg-transparent')
    })

    it(`should be ${color.toLowerCase()} button, light style`, async () => {
      expect.assertions(1)

      const { findByText } = render(
        <Button
          buttonStyle={BUTTON_STYLE.LIGHT}
          color={COLOR[color as keyof typeof COLOR]}
          label='Test'
        />,
      )

      const button = await findByText('Test')

      expect(button).toHaveClass('bg-transparent')
    })
  })
})
