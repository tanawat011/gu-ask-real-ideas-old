import { MouseEvent, cloneElement } from 'react'

import {
  BUTTON_STYLE,
  VARIANT,
  LOADING_COLOR,
  LOADING_STYLE,
  SIZE,
} from '@constants'
import { Loading } from '@element/Loader'
import { RegEx } from '@helpers'
import { clsx } from '@libs'

export type PropButton = {
  width?: number
  label?: string
  size?: SIZE
  variant?: VARIANT
  gradients?: [string, string, string] | [string, string] | [string]
  btnStyle?: BUTTON_STYLE
  icon?: React.ReactElement
  iconRight?: React.ReactElement
  iconFit?: boolean
  disabled?: boolean
  loading?: boolean
  rounded?: boolean
  rippleEffect?: boolean
  wAuto?: boolean
  shadow?: boolean
  onClick?: (event: MouseEvent) => void
}

export const Button: React.FC<PropButton> = (props) => {
  const {
    width,
    label,
    size = SIZE.MD,
    variant = VARIANT.PRIMARY,
    gradients,
    icon,
    iconRight,
    btnStyle = BUTTON_STYLE.DEFAULT,
    iconFit = false,
    disabled = false,
    loading = false,
    rounded = false,
    rippleEffect = true,
    wAuto = false,
    shadow,
    onClick,
  } = props

  const createRippleEffect = (event: MouseEvent) => {
    const button = event.currentTarget as EventTarget &
      Element & { offsetLeft: number; offsetTop: number }

    const circle = document.createElement('span')
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`
    circle.classList.add('ripple')

    if (btnStyle !== BUTTON_STYLE.DEFAULT) {
      circle.classList.add(`btn__bg-${variant.toLowerCase()}`)
    } else {
      circle.classList.add('bg-black')
    }

    const ripple = button.getElementsByClassName('ripple')[0]

    if (ripple) {
      ripple.remove()
    }

    button.appendChild(circle)
  }

  const isDisabled = () => disabled || loading

  const renderCursor = () => (disabled || loading) && 'cursor-not-allowed'
  const renderDisabled = () => (disabled || loading) && 'btn__disabled'
  const renderRounded = () => rounded && 'btn__rounded'
  const renderAutoWidth = () => wAuto && 'btn__auto-w'
  const renderSize = () => `btn__${size.toLowerCase()}`

  const renderVariant = () => {
    const _variant = variant.toLowerCase()
    const _style = btnStyle.toLowerCase()

    if (disabled) {
      if (btnStyle === BUTTON_STYLE.DEFAULT) {
        return `btn__${_variant}-disabled`
      }

      return `btn__${_variant}-${_style}-disabled`
    }

    if (gradients) {
      const gFirst = `from-${
        RegEx.colorHex.test(gradients[0]) ? `[${gradients[0]}]` : gradients[0]
      }`
      let gSecond = ''
      let gThird = ''

      if (gradients.length === 2) {
        gSecond = `to-${
          RegEx.colorHex.test(gradients[1]) ? `[${gradients[1]}]` : gradients[1]
        }`
      }

      if (gradients.length === 3) {
        gSecond = `via-${
          RegEx.colorHex.test(gradients[1]) ? `[${gradients[1]}]` : gradients[1]
        }`
        gThird = `to-${
          RegEx.colorHex.test(gradients[2]) ? `[${gradients[2]}]` : gradients[2]
        }`
      }

      return clsx('bg-gradient-to-r', gFirst, gSecond, gThird)
    }

    if (btnStyle === BUTTON_STYLE.DEFAULT) {
      return clsx(
        `btn__${_variant}`,
        loading && `btn__${_variant}-loading`,
        shadow && `btn__${_variant}-shadow`,
      )
    }

    return clsx(
      `btn__${_variant}-${_style}`,
      loading && `btn__${_variant}-${_style}-loading`,
    )
  }

  const renderIcon = (
    _icon: React.ReactElement,
    position: 'left' | 'right',
  ) => {
    const isLeft = position === 'left'

    let classPaddingIcon = ''
    let classWidthIcon = label ? 'w-8' : 'w-6'

    if (size === SIZE.XS) {
      classWidthIcon = label ? 'w-6' : 'w-4'
    }

    if (label) {
      classPaddingIcon = isLeft ? 'pr-2' : 'pl-2'
    }

    const classIcon = clsx(
      classWidthIcon,
      classPaddingIcon,
      iconFit && 'absolute',
      iconFit && isLeft ? 'left-4' : 'right-4',
    )

    return cloneElement(_icon, { className: classIcon })
  }

  const renderChild = () => {
    return loading ? (
      <Loading loaderStyle={LOADING_STYLE.DASH} color={LOADING_COLOR.WHITE} />
    ) : (
      <>
        {icon && renderIcon(icon, 'left')}
        {label}
        {iconRight && renderIcon(iconRight, 'right')}
      </>
    )
  }

  return (
    <button
      className={clsx(
        'btn',
        renderCursor(),
        renderDisabled(),
        renderRounded(),
        renderAutoWidth(),
        renderSize(),
        renderVariant(),
      )}
      style={{ ...(width && { width }) }}
      disabled={isDisabled()}
      onClick={(event) => {
        if (rippleEffect) {
          createRippleEffect(event)
        }

        if (onClick) {
          onClick(event)
        }
      }}
    >
      {renderChild()}
    </button>
  )
}
