import { render } from '@testing-library/react'

import { BUTTON_STYLE, COLOR, SIZE } from '@constants'
import { Button } from '@element/Button'

jest.mock('@heroicons/react/solid', (): unknown => ({
  ArchiveIcon: (props: never) => <svg {...props} />,
}))

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
        shadow
      />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render without props', () => {
    expect.assertions(1)

    const { asFragment } = render(<Button label='Button A' />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render with onClick', async () => {
    expect.assertions(1)

    const onClick = jest.fn()

    const { findByRole } = render(<Button label='Button A' onClick={onClick} />)

    const button = await findByRole('button')

    button.click()

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should be rounded button', async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button rounded />)

    const button = await findByRole('button')

    expect(button).toHaveClass(`btn__rounded`)
  })

  it(`should be shadow button`, async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button shadow />)

    const button = await findByRole('button')

    expect(button).toHaveClass(`btn__primary-shadow`)
  })

  it(`should be shadow button, loading button`, async () => {
    expect.assertions(3)

    const { findByRole } = render(<Button shadow loading />)

    const button = await findByRole('button')

    expect(button).toHaveClass(`btn__primary-shadow`)
    expect(button).toHaveClass('cursor-not-allowed')
    expect(button.children[0].children[0].nodeName).toBe('svg')
  })

  it('should be auto width button', async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button wAuto />)

    const button = await findByRole('button')

    expect(button).toHaveClass(`btn__auto-w`)
  })

  it('should be icon button', async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button label='Test' icon='ArchiveIcon' />)

    const button = await findByRole('button')

    expect(button.children[0].nodeName).toBe('svg')
  })

  it('should be icon button without label', async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button icon='ArchiveIcon' />)

    const button = await findByRole('button')

    expect(button.children[0].nodeName).toBe('svg')
  })

  it('should be icon button, fit icon button', async () => {
    expect.assertions(1)

    const { findByRole } = render(
      <Button label='Test' icon='ArchiveIcon' iconFit />,
    )

    const button = await findByRole('button')

    expect(button.children[0]).toHaveClass('absolute')
  })

  it('should be right icon button', async () => {
    expect.assertions(1)

    const { findByRole } = render(
      <Button label='Test' iconRight='ArchiveIcon' />,
    )

    const button = await findByRole('button')

    expect(button.children[0].nodeName).toBe('svg')
  })

  it('should be right icon button without label', async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button iconRight='ArchiveIcon' />)

    const button = await findByRole('button')

    expect(button.children[0].nodeName).toBe('svg')
  })

  it('should be right icon button, fit icon button', async () => {
    expect.assertions(1)

    const { findByRole } = render(
      <Button label='Test' iconRight='ArchiveIcon' iconFit />,
    )

    const button = await findByRole('button')

    expect(button.children[0]).toHaveClass('absolute')
  })

  it('should be icon button, right icon button', async () => {
    expect.assertions(2)

    const { findByRole } = render(
      <Button label='Test' icon='ArchiveIcon' iconRight='ArchiveIcon' />,
    )

    const button = await findByRole('button')

    expect(button.children[0].nodeName).toBe('svg')
    expect(button.children[1].nodeName).toBe('svg')
  })

  it('should be icon button, right icon button, fit icon button', async () => {
    expect.assertions(2)

    const { findByRole } = render(
      <Button
        label='Test'
        icon='ArchiveIcon'
        iconRight='ArchiveIcon'
        iconFit
      />,
    )

    const button = await findByRole('button')

    expect(button.children[0]).toHaveClass('absolute')
    expect(button.children[1]).toHaveClass('absolute')
  })

  it('should be icon button, right icon button, fit icon button without label', async () => {
    expect.assertions(2)

    const { findByRole } = render(
      <Button icon='ArchiveIcon' iconRight='ArchiveIcon' iconFit />,
    )

    const button = await findByRole('button')

    expect(button.children[0]).toHaveClass('absolute')
    expect(button.children[1]).toHaveClass('absolute')
  })

  it('should be fit icon button', async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button label='Test' iconFit />)

    const button = await findByRole('button')

    expect(button).toBeTruthy()
  })

  it('should be fit icon button without label', async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button iconFit />)

    const button = await findByRole('button')

    expect(button).toBeTruthy()
  })

  it('should be without ripple effect button', async () => {
    expect.assertions(1)

    const { asFragment, findByRole } = render(
      <Button label='Test' rippleEffect={false} />,
    )

    const button = await findByRole('button')

    button.click()

    expect(asFragment()).toMatchSnapshot()
  })

  it('should be custom width button', async () => {
    expect.assertions(1)

    const { findByRole } = render(<Button label='Test' width={300} />)

    const button = await findByRole('button')

    expect(button).toHaveStyle('width: 300px')
  })

  Object.keys(SIZE).forEach((size) => {
    it(`should be ${size.toLowerCase()} button`, async () => {
      expect.assertions(1)

      const { findByRole } = render(
        <Button size={SIZE[size as keyof typeof SIZE]} />,
      )

      const button = await findByRole('button')

      expect(button).toHaveClass(`btn__${size.toLowerCase()}`)
    })
  })

  Object.keys(COLOR).forEach((color) => {
    Object.keys(BUTTON_STYLE).forEach((style) => {
      const _postfixStyle = style === 'DEFAULT' ? '' : `-${style.toLowerCase()}`
      const disabledClass =
        style === 'LIGHT'
          ? `btn__${color.toLowerCase()}-light-disabled`
          : `btn__${color.toLowerCase()}-disabled`

      it(`should be ${color.toLowerCase()} button, ${style.toLowerCase()} button`, async () => {
        expect.assertions(1)

        const { findByRole } = render(
          <Button
            color={COLOR[color as keyof typeof COLOR]}
            buttonStyle={BUTTON_STYLE[style as keyof typeof BUTTON_STYLE]}
          />,
        )

        const button = await findByRole('button')

        expect(button).toHaveClass(
          `btn__${color.toLowerCase()}${_postfixStyle}`,
        )
      })

      it(`should be ${color.toLowerCase()} button, ${style.toLowerCase()} button, disabled button`, async () => {
        expect.assertions(2)

        const { findByRole } = render(
          <Button
            color={COLOR[color as keyof typeof COLOR]}
            buttonStyle={BUTTON_STYLE[style as keyof typeof BUTTON_STYLE]}
            disabled
          />,
        )

        const button = await findByRole('button')

        expect(button).toHaveClass('btn__disabled')
        expect(button).toHaveClass(disabledClass)
      })

      it(`should be ${color.toLowerCase()} button, ${style.toLowerCase()} button, loading button`, async () => {
        expect.assertions(2)

        const { findByRole } = render(
          <Button
            color={COLOR[color as keyof typeof COLOR]}
            buttonStyle={BUTTON_STYLE[style as keyof typeof BUTTON_STYLE]}
            loading
          />,
        )

        const button = await findByRole('button')

        expect(button.children[0].children[0].nodeName).toBe('svg')
        expect(button).toHaveClass(
          `btn__${color.toLowerCase()}${_postfixStyle}-loading`,
        )
      })

      it(`should be ${color.toLowerCase()} button, ${style.toLowerCase()} button, ripple effect button`, async () => {
        expect.assertions(2)

        const { findByRole } = render(
          <Button
            color={COLOR[color as keyof typeof COLOR]}
            buttonStyle={BUTTON_STYLE.OUTLINE}
            label='Test'
            rippleEffect
          />,
        )

        const button = await findByRole('button')

        button.click()
        button.click() // Click again for test old ripple effect removed and re-assign

        expect(button.children[0]).toHaveClass('ripple')
        expect(button.children[0]).toHaveClass(`btn__bg-${color.toLowerCase()}`)
      })
    })
  })
})
