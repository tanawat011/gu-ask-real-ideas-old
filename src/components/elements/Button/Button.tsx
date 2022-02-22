import clsx from 'clsx'
import * as AllIcon from '@heroicons/react/solid'

import { COLOR, LOADER_COLOR, LOADER_STYLE, SIZE } from '@constants'
import { Loader } from '@element/Loader'

type PropButton = {
  width?: number
  label?: string
  size?: SIZE
  color?: COLOR
  icon?: string
  isDisabled?: boolean
  isLoading?: boolean
  isBordered?: boolean
  isRounded?: boolean
  isGhost?: boolean
  hasShadow?: boolean
  onClick?: () => void
}

export const Button: React.FC<PropButton> = ({
  width,
  label,
  size = SIZE.MEDIUM,
  color = COLOR.PRIMARY,
  icon,
  isDisabled = false,
  isLoading = false,
  isBordered = false,
  isRounded = false,
  isGhost = false,
  hasShadow = false,
  onClick,
}) => {
  const renderSize = (_size: SIZE) => {
    switch (_size) {
      case SIZE.SMALL:
        return 'text-white font-bold py-1 px-2 text-sm'

      case SIZE.LARGE:
        return 'text-white font-bold py-3 px-6 text-lg'

      case SIZE.MEDIUM:
      default:
        return 'text-white font-bold py-2 px-4 text-base'
    }
  }

  const renderColorHover = (_color: COLOR) => {
    switch (_color) {
      case COLOR.SECONDARY:
        if (isGhost) {
          return 'hover:bg-secondary-default'
        }

        if (isBordered) {
          return 'hover:opacity-80'
        }

        return !isLoading && 'hover:bg-secondary-hover'

      case COLOR.SUCCESS:
        if (isGhost) {
          return 'hover:bg-success-default'
        }

        if (isBordered) {
          return 'hover:opacity-80'
        }

        return !isLoading && 'hover:bg-success-hover'
      case COLOR.WARNING:
        if (isGhost) {
          return 'hover:bg-warning-default'
        }

        if (isBordered) {
          return 'hover:opacity-80'
        }

        return !isLoading && 'hover:bg-warning-hover'

      case COLOR.INFO:
        if (isGhost) {
          return 'hover:bg-info-default'
        }

        if (isBordered) {
          return 'hover:opacity-80'
        }

        return !isLoading && 'hover:bg-info-hover'

      case COLOR.DANGER:
        if (isGhost) {
          return 'hover:bg-danger-default'
        }

        if (isBordered) {
          return 'hover:opacity-80'
        }

        return !isLoading && 'hover:bg-danger-hover'

      case COLOR.PRIMARY:
      default:
        if (isGhost) {
          return 'hover:bg-primary-default'
        }

        if (isBordered) {
          return 'hover:opacity-80'
        }

        return !isLoading && 'hover:bg-primary-hover'
    }
  }

  const renderColor = (_color: COLOR) => {
    switch (_color) {
      case COLOR.SECONDARY:
        return isDisabled
          ? 'disabled:bg-secondary-disabled text-nextui-gray-600'
          : clsx(
              !isLoading && 'active:bg-secondary-pressed',
              isBordered
                ? `bg-transparent border-solid border-2 border-secondary-default text-secondary-default`
                : 'bg-secondary-default',
              renderColorHover(_color),
            )

      case COLOR.SUCCESS:
        return isDisabled
          ? 'disabled:bg-success-disabled text-nextui-gray-600'
          : clsx(
              !isLoading && 'active:bg-success-pressed',
              isBordered
                ? `bg-transparent border-solid border-2 border-success-default text-success-default`
                : 'bg-success-default',
              renderColorHover(_color),
            )

      case COLOR.WARNING:
        return isDisabled
          ? 'disabled:bg-warning-disabled text-nextui-gray-600'
          : clsx(
              !isLoading && 'active:bg-warning-pressed',
              isBordered
                ? `bg-transparent border-solid border-2 border-warning-default text-warning-default`
                : 'bg-warning-default',
              renderColorHover(_color),
            )

      case COLOR.INFO:
        return isDisabled
          ? 'disabled:bg-info-disabled text-nextui-gray-600'
          : clsx(
              !isLoading && 'active:bg-info-pressed',
              isBordered
                ? `bg-transparent border-solid border-2 border-info-default text-info-default`
                : 'bg-info-default',
              renderColorHover(_color),
            )

      case COLOR.DANGER:
        return isDisabled
          ? 'disabled:bg-danger-disabled text-nextui-gray-600'
          : clsx(
              !isLoading && 'active:bg-danger-pressed',
              isBordered
                ? `bg-transparent border-solid border-2 border-danger-default text-danger-default`
                : 'bg-danger-default',
              renderColorHover(_color),
            )

      case COLOR.PRIMARY:
      default:
        return isDisabled
          ? 'disabled:bg-primary-disabled text-nextui-gray-600'
          : clsx(
              !isLoading && 'active:bg-primary-pressed',
              isBordered
                ? `bg-transparent border-solid border-2 border-primary-default text-primary-default`
                : 'bg-primary-default',
              renderColorHover(_color),
            )
    }
  }

  const renderIcon = () => {
    const iconName = Object.keys(AllIcon).find(
      (_iconName) => _iconName === icon,
    )

    if (iconName) {
      const Icon = AllIcon[iconName as 'ArchiveIcon']

      return <Icon className={clsx(label ? 'w-8 pr-2' : 'w-6')} />
    }
  }

  const renderLoading = () => {
    return <Loader loaderStyle={LOADER_STYLE.DASH} color={LOADER_COLOR.WHITE} />
  }

  const renderShadow = (_color: COLOR) => {
    if (isDisabled) {
      return 'shadow-none'
    }

    switch (_color) {
      case COLOR.SECONDARY:
        return 'shadow-nextui shadow-secondary-default'

      case COLOR.SUCCESS:
        return 'shadow-nextui shadow-success-default'

      case COLOR.WARNING:
        return 'shadow-nextui shadow-warning-default'

      case COLOR.INFO:
        return 'shadow-nextui shadow-info-default'

      case COLOR.DANGER:
        return 'shadow-nextui shadow-danger-default'

      case COLOR.PRIMARY:
      default:
        return 'shadow-nextui shadow-primary-default'
    }
  }

  const renderRounded = () => {
    return isRounded ? 'rounded-full' : 'rounded-xl'
  }

  const renderCursor = () => {
    if (isDisabled || isLoading) {
      return 'cursor-not-allowed'
    }
  }

  const renderChild = () => {
    if (isLoading) {
      return renderLoading()
    }

    return (
      <>
        {icon && renderIcon()} {label}
      </>
    )
  }

  return (
    <button
      className={clsx(
        'relative flex justify-center items-center',
        !isLoading && 'active:scale-95',
        renderRounded(),
        renderSize(size),
        renderColor(color),
        renderCursor(),
        hasShadow && renderShadow(color),
      )}
      style={{ width }}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {renderChild()}
    </button>
  )
}
