import { render } from '@testing-library/react'

import { Button } from '@element/Button'
import { BUTTON_STYLE, COLOR, SIZE } from '@constants'

type TestButtonSize = {
  _size: SIZE
  size: string
  _color: COLOR
  color: string
  _style: BUTTON_STYLE
  style: string
  h: string
  w: string
  px: string
  fontWeight: string
  classAssemble: string
  disabled?: boolean
  loading?: boolean
  shadow?: boolean
  rounded?: boolean
}

const baseClass =
  'relative flex justify-center items-center overflow-hidden transition-colors active:scale-95'
const baseClassDisabled =
  'relative flex justify-center items-center overflow-hidden transition-colors cursor-not-allowed'

describe('<Button />', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  let options: TestButtonSize[] = []

  Object.keys(SIZE).forEach((size) => {
    const isMedium = size.toLowerCase() === 'md'
    const optionSize = isMedium ? 'base' : size.toLowerCase()

    let h = ''
    let w = ''
    let px = ''
    let fontWeight = ''
    let classAssemble = ''

    switch (size.toLowerCase()) {
      case SIZE.XS:
        h = 'h-6'
        w = 'w-20'
        px = 'px-2'
        fontWeight = 'font-semibold'
        break

      case SIZE.SM:
        h = 'h-8'
        w = 'w-36'
        px = 'px-2'
        fontWeight = 'font-semibold'
        break

      case SIZE.LG:
        h = 'h-11'
        w = 'w-60'
        px = 'px-6'
        fontWeight = 'font-bold'
        break

      case SIZE.XL:
        h = 'h-14'
        w = 'w-72'
        px = 'px-6'
        fontWeight = 'font-bold'
        break

      case SIZE.MD:
      default:
        h = 'h-10'
        w = 'w-48'
        px = 'px-4'
        fontWeight = 'font-semibold'
        break
    }

    const baseOfBaseClass = `${baseClass} ${h} ${px} text-${optionSize} ${fontWeight}`

    Object.keys(COLOR).forEach((color) => {
      const optionColor = color.toLowerCase()

      Object.keys(BUTTON_STYLE).forEach((style) => {
        switch (style.toLowerCase()) {
          case BUTTON_STYLE.OUTLINE:
            classAssemble = `${baseOfBaseClass} rounded-xl bg-transparent border-solid border-2 border-${optionColor}-default text-${optionColor}-default hover:opacity-80`
            break

          case BUTTON_STYLE.FLAT:
            classAssemble = `${baseOfBaseClass} rounded-xl bg-${optionColor}-default-flat text-${optionColor}-default hover:opacity-80`
            break

          case BUTTON_STYLE.GHOST:
            classAssemble = `${baseOfBaseClass} rounded-xl bg-transparent border-solid border-2 border-${optionColor}-default text-${optionColor}-default hover:text-white hover:bg-${optionColor}-default`
            break

          case BUTTON_STYLE.LIGHT:
            classAssemble = `${baseOfBaseClass} rounded-xl bg-transparent text-${optionColor}-default hover:opacity-80`
            break

          case BUTTON_STYLE.DEFAULT:
          default:
            classAssemble = `${baseOfBaseClass} rounded-xl bg-${optionColor}-default text-white hover:bg-${optionColor}-hover active:bg-${optionColor}-pressed`
            break
        }

        options.push({
          _size: isMedium ? SIZE.MD : SIZE[size as keyof typeof SIZE],
          size: optionSize,
          _color: COLOR[color as keyof typeof COLOR],
          color: optionColor,
          _style: BUTTON_STYLE[style as keyof typeof BUTTON_STYLE],
          style: style.toLowerCase(),
          h,
          w,
          px,
          fontWeight,
          classAssemble,
        })
      })
    })
  })

  options = [
    ...options,
    ...options.map((o) => {
      let classAssemble = `${baseClassDisabled} ${o.h} ${o.px} text-${o.size} ${o.fontWeight} rounded-xl disabled:bg-${o.color}-disabled text-nextui-gray-600`

      if (o._style === BUTTON_STYLE.LIGHT) {
        classAssemble = `${baseClassDisabled} ${o.h} ${o.px} text-${o.size} ${o.fontWeight} rounded-xl disabled:bg-transparent text-nextui-gray-600`
      }

      return {
        ...o,
        classAssemble,
        disabled: true,
      }
    }),
    ...options.map((o) => {
      let classAssemble = `${baseClassDisabled} ${o.h} ${o.px} text-${o.size} ${o.fontWeight} rounded-xl bg-${o.color}-default text-white`

      if (
        o._style === BUTTON_STYLE.GHOST ||
        o._style === BUTTON_STYLE.OUTLINE
      ) {
        classAssemble = `${baseClassDisabled} ${o.h} ${o.px} text-${o.size} ${o.fontWeight} rounded-xl bg-transparent border-solid border-2 border-${o.color}-default text-${o.color}-default`
      }

      if (o._style === BUTTON_STYLE.FLAT) {
        classAssemble = `${baseClassDisabled} ${o.h} ${o.px} text-${o.size} ${o.fontWeight} rounded-xl bg-${o.color}-default-flat text-${o.color}-default`
      }

      if (o._style === BUTTON_STYLE.LIGHT) {
        classAssemble = `${baseClassDisabled} ${o.h} ${o.px} text-${o.size} ${o.fontWeight} rounded-xl bg-transparent text-${o.color}-default`
      }

      return {
        ...o,
        classAssemble,
        loading: true,
      }
    }),
    ...options.map((o) => {
      let classAssemble = `${baseClass} ${o.h} ${o.px} text-${o.size} ${o.fontWeight} rounded-xl bg-${o.color}-default text-white hover:bg-${o.color}-hover active:bg-${o.color}-pressed shadow-nextui shadow-${o.color}-default`

      if (
        o._style === BUTTON_STYLE.GHOST ||
        o._style === BUTTON_STYLE.OUTLINE
      ) {
        classAssemble = `${baseClass} ${o.h} ${o.px} text-${o.size} ${o.fontWeight} rounded-xl bg-transparent border-solid border-2 border-${o.color}-default text-${o.color}-default`
      }

      if (o._style === BUTTON_STYLE.FLAT) {
        classAssemble = `${baseClass} ${o.h} ${o.px} text-${o.size} ${o.fontWeight} rounded-xl bg-${o.color}-default-flat text-${o.color}-default`
      }

      if (o._style === BUTTON_STYLE.LIGHT) {
        classAssemble = `${baseClass} ${o.h} ${o.px} text-${o.size} ${o.fontWeight} rounded-xl bg-transparent text-${o.color}-default hover:opacity-80`
      }

      return {
        ...o,
        classAssemble,
        shadow: true,
      }
    }),
    ...options.map((o) => {
      let classAssemble = `${baseClass} ${o.h} ${o.px} text-${o.size} ${o.fontWeight} bg-${o.color}-default text-white hover:bg-${o.color}-hover active:bg-${o.color}-pressed`

      if (o._style === BUTTON_STYLE.OUTLINE) {
        classAssemble = `${baseClass} ${o.h} ${o.px} text-${o.size} ${o.fontWeight} bg-transparent border-solid border-2 border-${o.color}-default text-${o.color}-default hover:opacity-80`
      }

      if (o._style === BUTTON_STYLE.GHOST) {
        classAssemble = `${baseClass} ${o.h} ${o.px} text-${o.size} ${o.fontWeight} bg-transparent border-solid border-2 border-${o.color}-default text-${o.color}-default hover:text-white hover:bg-${o.color}-default`
      }

      if (o._style === BUTTON_STYLE.FLAT) {
        classAssemble = `${baseClass} ${o.h} ${o.px} text-${o.size} ${o.fontWeight} bg-${o.color}-default-flat text-${o.color}-default hover:opacity-80`
      }

      if (o._style === BUTTON_STYLE.LIGHT) {
        classAssemble = `${baseClass} ${o.h} ${o.px} text-${o.size} ${o.fontWeight} bg-transparent text-${o.color}-default hover:opacity-80`
      }

      return {
        ...o,
        classAssemble,
        rounded: true,
      }
    }),
  ]

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

  options
    .filter(
      (o) => o._color === COLOR.PRIMARY && o._style === BUTTON_STYLE.DEFAULT,
    )
    .forEach((o) => {
      it(`should render with no auto width size ${o.size}, color ${o.color}`, async () => {
        expect.assertions(1)

        const { findByRole } = render(
          <Button label='Test size' isAutoWidth={false} size={o._size} />,
        )

        const button = await findByRole('button')

        expect(button).toHaveClass(o.w)
      })
    })

  options.forEach(
    ({
      _size,
      size,
      _color,
      color,
      _style,
      style,
      classAssemble,
      disabled,
      loading,
      shadow,
      rounded,
    }) => {
      if (!disabled && !loading && !shadow && !rounded) {
        it(`should be button size ${size}, color ${color}, style ${style}`, async () => {
          expect.assertions(1)

          const { findByRole } = render(
            <Button
              size={_size}
              color={_color}
              buttonStyle={_style}
              label='Test size'
            />,
          )
          const button = await findByRole('button')

          expect(button).toHaveClass(classAssemble)
        })
      }

      if (disabled) {
        it(`should be button size ${size}, color ${color}, style ${style}, disabled button`, async () => {
          expect.assertions(1)

          const { findByRole } = render(
            <Button
              size={_size}
              color={_color}
              buttonStyle={_style}
              label='Test size'
              isDisabled
            />,
          )
          const button = await findByRole('button')

          expect(button).toHaveClass(classAssemble)
        })
      }

      if (loading) {
        it(`should be button size ${size}, color ${color}, style ${style}, loading button`, async () => {
          expect.assertions(1)

          const { findByRole } = render(
            <Button
              size={_size}
              color={_color}
              buttonStyle={_style}
              label='Test size'
              isLoading
            />,
          )
          const button = await findByRole('button')

          expect(button).toHaveClass(classAssemble)
        })
      }

      if (shadow) {
        it(`should be button size ${size}, color ${color}, style ${style}, shadow button`, async () => {
          expect.assertions(1)

          const { findByRole } = render(
            <Button
              size={_size}
              color={_color}
              buttonStyle={_style}
              label='Test size'
              hasShadow
            />,
          )
          const button = await findByRole('button')

          expect(button).toHaveClass(classAssemble)
        })
      }

      if (rounded) {
        it(`should be button size ${size}, color ${color}, style ${style}, rounded button`, async () => {
          expect.assertions(1)

          const { findByRole } = render(
            <Button
              size={_size}
              color={_color}
              buttonStyle={_style}
              label='Test size'
              isRounded
            />,
          )
          const button = await findByRole('button')

          expect(button).toHaveClass(classAssemble)
        })
      }
    },
  )
})
