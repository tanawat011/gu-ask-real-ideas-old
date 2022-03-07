import { MouseEvent } from 'react'
import * as _AllIcon from '@heroicons/react/solid'
// import { ArchiveIcon } from '@heroicons/react/solid'

import {
  BUTTON_STYLE,
  COLOR,
  LOADING_COLOR,
  LOADING_STYLE,
  SIZE,
} from '@constants'
import { Loading } from '@element/Loader'
import { clsx } from '@libs'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const AllIcon = require('@heroicons/react/solid')

export type PropButton = {
  width?: number
  label?: string
  size?: SIZE
  color?: COLOR
  buttonStyle?: BUTTON_STYLE
  icon?: keyof typeof _AllIcon | ''
  iconRight?: keyof typeof _AllIcon | ''
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
    color = COLOR.PRIMARY,
    iconRight,
    icon,
    buttonStyle = BUTTON_STYLE.DEFAULT,
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

    if (buttonStyle !== BUTTON_STYLE.DEFAULT) {
      circle.classList.add(`btn__bg-${color.toLowerCase()}`)
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

  const renderColor = () => {
    const _color = color.toLowerCase()
    const _style = buttonStyle.toLowerCase()

    if (disabled) {
      if (buttonStyle === BUTTON_STYLE.LIGHT) {
        return `btn__${_color}-light-disabled`
      }

      return `btn__${_color}-disabled`
    }

    if (buttonStyle === BUTTON_STYLE.DEFAULT) {
      return clsx(
        `btn__${_color}`,
        loading && `btn__${_color}-loading`,
        shadow && `btn__${_color}-shadow`,
      )
    }

    return clsx(
      `btn__${_color}-${_style}`,
      loading && `btn__${_color}-${_style}-loading`,
    )
  }

  const renderIcon = (_icon: string, position: 'left' | 'right') => {
    const Icon = AllIcon[_icon as keyof typeof AllIcon]

    const isLeft = position === 'left'

    const classWidthIcon = label ? 'w-8' : 'w-6'
    let classPaddingIcon = ''

    if (label) {
      classPaddingIcon = isLeft ? 'pr-2' : 'pl-2'
    }

    const classIcon = clsx(
      classWidthIcon,
      classPaddingIcon,
      iconFit && 'absolute',
      iconFit && isLeft ? 'left-4' : 'right-4',
    )

    return <Icon className={classIcon} />
  }

  const renderChild = () =>
    loading ? (
      <Loading loaderStyle={LOADING_STYLE.DASH} color={LOADING_COLOR.WHITE} />
    ) : (
      <>
        {icon && <>{renderIcon(icon, 'left')}</>}
        {label}
        {iconRight && <>{renderIcon(iconRight, 'right')}</>}
      </>
    )

  return (
    <button
      className={clsx(
        'btn',
        renderCursor(),
        renderDisabled(),
        renderRounded(),
        renderAutoWidth(),
        renderSize(),
        renderColor(),
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
