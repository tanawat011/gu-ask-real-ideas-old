import clsx from 'clsx'
import { MouseEvent } from 'react'
import * as AllIcon from '@heroicons/react/solid'

import {
  BUTTON_STYLE,
  COLOR,
  LOADING_COLOR,
  LOADING_STYLE,
  SIZE,
} from '@constants'
import { Loading } from '@element/Loader'
import {
  renderPrimaryClass,
  renderSecondaryClass,
  renderSuccessClass,
  renderWarningClass,
  renderInfoClass,
  renderDangerClass,
} from './Button.helper'

export type PropButton = {
  width?: number
  label?: string
  size?: SIZE
  color?: COLOR
  buttonStyle?: BUTTON_STYLE
  icon?: keyof typeof AllIcon | ''
  iconRight?: keyof typeof AllIcon | ''
  isIconFit?: boolean
  isDisabled?: boolean
  isLoading?: boolean
  isRounded?: boolean
  isRipple?: boolean
  isAutoWidth?: boolean
  hasShadow?: boolean
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
    isIconFit = false,
    isDisabled = false,
    isLoading = false,
    isRounded = false,
    isRipple = true,
    isAutoWidth = true,
    onClick,
  } = props

  const createRippleEffect = (event: MouseEvent, _color: COLOR) => {
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
      switch (_color) {
        case COLOR.SECONDARY:
          circle.classList.add('bg-secondary-default')
          break
        case COLOR.SUCCESS:
          circle.classList.add('bg-success-default')
          break
        case COLOR.WARNING:
          circle.classList.add('bg-warning-default')
          break
        case COLOR.INFO:
          circle.classList.add('bg-info-default')
          break
        case COLOR.DANGER:
          circle.classList.add('bg-danger-default')
          break
        case COLOR.PRIMARY:
        default:
          circle.classList.add('bg-primary-default')
          break
      }
    } else {
      circle.classList.add('bg-black')
    }

    const ripple = button.getElementsByClassName('ripple')[0]

    if (ripple) {
      ripple.remove()
    }

    button.appendChild(circle)
  }

  const renderSize = (_size: SIZE) => {
    switch (_size) {
      case SIZE.XS:
        return clsx(
          'h-6 px-2 text-xs font-semibold',
          !isAutoWidth && 'w-20',
          !isRounded && 'rounded-xl',
        )

      case SIZE.SM:
        return clsx(
          'h-8 px-2 text-sm font-semibold',
          !isAutoWidth && 'w-36',
          !isRounded && 'rounded-xl',
        )

      case SIZE.LG:
        return clsx(
          'h-11 px-6 text-lg font-bold',
          !isAutoWidth && 'w-60',
          !isRounded && 'rounded-xl',
        )

      case SIZE.XL:
        return clsx(
          'h-14 px-6 text-xl font-bold',
          !isAutoWidth && 'w-72',
          !isRounded && 'rounded-xl',
        )

      case SIZE.MD:
      default:
        return clsx(
          'h-10 px-4 text-base font-semibold',
          !isAutoWidth && 'w-48',
          !isRounded && 'rounded-xl',
        )
    }
  }

  const renderColor = (_color: COLOR) => {
    switch (_color) {
      case COLOR.SECONDARY:
        return renderSecondaryClass(props)

      case COLOR.SUCCESS:
        return renderSuccessClass(props)

      case COLOR.WARNING:
        return renderWarningClass(props)

      case COLOR.INFO:
        return renderInfoClass(props)

      case COLOR.DANGER:
        return renderDangerClass(props)

      case COLOR.PRIMARY:
      default:
        return renderPrimaryClass(props)
    }
  }

  const renderIcon = (_icon: string, position: 'left' | 'right') => {
    const iconName = Object.keys(AllIcon).find(
      (_iconName) => _iconName === _icon,
    )

    if (iconName) {
      const Icon = AllIcon[iconName as 'ArchiveIcon']

      const isLeft = position === 'left'

      const classWidthIcon = label ? 'w-8' : 'w-6'
      let classPaddingIcon = ''

      if (label) {
        classPaddingIcon = isLeft ? 'pr-2' : 'pl-2'
      }

      const classIcon = clsx(
        classWidthIcon,
        classPaddingIcon,
        isIconFit && 'absolute',
        isIconFit && isLeft ? 'left-4' : 'right-4',
      )

      return <Icon className={classIcon} />
    }
  }

  const renderLoading = () => {
    return (
      <Loading loaderStyle={LOADING_STYLE.DASH} color={LOADING_COLOR.WHITE} />
    )
  }

  const renderCursor = () => {
    if (isDisabled || isLoading) {
      return 'cursor-not-allowed'
    }
  }

  const renderRounded = () => {
    if (isRounded) {
      return 'rounded-full'
    }
  }

  const renderScaleSize = () => {
    if (!isLoading && !isDisabled) {
      return 'active:scale-95'
    }
  }

  const renderDisabled = () => {
    return isDisabled || isLoading
  }

  const renderChild = () => {
    if (isLoading) {
      return renderLoading()
    }

    return (
      <>
        {icon && <>{renderIcon(icon, 'left')}</>}
        {label}
        {iconRight && <>{renderIcon(iconRight, 'right')}</>}
      </>
    )
  }

  return (
    <button
      className={clsx(
        'relative flex justify-center items-center overflow-hidden transition-colors',
        renderScaleSize(),
        renderRounded(),
        renderCursor(),
        renderSize(size),
        renderColor(color),
      )}
      style={{ ...(width && { width }) }}
      disabled={renderDisabled()}
      onClick={(event) => {
        if (isRipple) {
          createRippleEffect(event, color)
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
