import clsx from 'clsx'

import { BUTTON_STYLE } from '@constants'
import { PropButton } from '.'

export const renderPrimaryClass = (props: PropButton): string => {
  const { isLoading, isDisabled, hasShadow } = props

  if (isDisabled) {
    switch (props.buttonStyle) {
      case BUTTON_STYLE.LIGHT:
        return 'disabled:bg-transparent text-nextui-gray-600'

      default:
        return 'disabled:bg-primary-disabled text-nextui-gray-600'
    }
  }

  const classHover = () => {
    if (!isLoading) {
      switch (props.buttonStyle) {
        case BUTTON_STYLE.OUTLINE:
        case BUTTON_STYLE.FLAT:
        case BUTTON_STYLE.LIGHT:
          return 'hover:opacity-80'

        case BUTTON_STYLE.GHOST:
          return 'hover:text-white hover:bg-primary-default'

        case BUTTON_STYLE.DEFAULT:
        default:
          return 'hover:bg-primary-hover'
      }
    }
  }

  if (props.buttonStyle === BUTTON_STYLE.OUTLINE) {
    return clsx(
      'bg-transparent border-solid border-2 border-primary-default text-primary-default',
      classHover(),
    )
  }

  if (props.buttonStyle === BUTTON_STYLE.GHOST) {
    return clsx(
      'bg-transparent border-solid border-2 border-primary-default text-primary-default',
      classHover(),
    )
  }

  if (props.buttonStyle === BUTTON_STYLE.FLAT) {
    return clsx('bg-primary-default-flat text-primary-default', classHover())
  }

  if (props.buttonStyle === BUTTON_STYLE.LIGHT) {
    return clsx('bg-transparent text-primary-default', classHover())
  }

  return clsx(
    'bg-primary-default text-white',
    classHover(),
    !isLoading && 'active:bg-primary-pressed',
    hasShadow && 'shadow-nextui shadow-primary-default',
  )
}

export const renderSecondaryClass = (props: PropButton): string => {
  const { isLoading, isDisabled, hasShadow } = props

  if (isDisabled) {
    switch (props.buttonStyle) {
      case BUTTON_STYLE.LIGHT:
        return 'disabled:bg-transparent text-nextui-gray-600'

      default:
        return 'disabled:bg-secondary-disabled text-nextui-gray-600'
    }
  }

  const classHover = () => {
    if (!isLoading) {
      switch (props.buttonStyle) {
        case BUTTON_STYLE.OUTLINE:
        case BUTTON_STYLE.FLAT:
        case BUTTON_STYLE.LIGHT:
          return 'hover:opacity-80'

        case BUTTON_STYLE.GHOST:
          return 'hover:text-white hover:bg-secondary-default'

        case BUTTON_STYLE.DEFAULT:
        default:
          return 'hover:bg-secondary-hover'
      }
    }
  }

  if (props.buttonStyle === BUTTON_STYLE.OUTLINE) {
    return clsx(
      'bg-transparent border-solid border-2 border-secondary-default text-secondary-default',
      classHover(),
    )
  }

  if (props.buttonStyle === BUTTON_STYLE.GHOST) {
    return clsx(
      'bg-transparent border-solid border-2 border-secondary-default text-secondary-default',
      classHover(),
    )
  }

  if (props.buttonStyle === BUTTON_STYLE.FLAT) {
    return clsx(
      'bg-secondary-default-flat text-secondary-default',
      classHover(),
    )
  }

  if (props.buttonStyle === BUTTON_STYLE.LIGHT) {
    return clsx('bg-transparent text-secondary-default', classHover())
  }

  return clsx(
    'bg-secondary-default text-white',
    classHover(),
    !isLoading && 'active:bg-secondary-pressed',
    hasShadow && 'shadow-nextui shadow-secondary-default',
  )
}

export const renderSuccessClass = (props: PropButton): string => {
  const { isLoading, isDisabled, hasShadow } = props

  if (isDisabled) {
    switch (props.buttonStyle) {
      case BUTTON_STYLE.LIGHT:
        return 'disabled:bg-transparent text-nextui-gray-600'

      default:
        return 'disabled:bg-success-disabled text-nextui-gray-600'
    }
  }

  const classHover = () => {
    if (!isLoading) {
      switch (props.buttonStyle) {
        case BUTTON_STYLE.OUTLINE:
        case BUTTON_STYLE.FLAT:
        case BUTTON_STYLE.LIGHT:
          return 'hover:opacity-80'

        case BUTTON_STYLE.GHOST:
          return 'hover:text-white hover:bg-success-default'

        case BUTTON_STYLE.DEFAULT:
        default:
          return 'hover:bg-success-hover'
      }
    }
  }

  if (props.buttonStyle === BUTTON_STYLE.OUTLINE) {
    return clsx(
      'bg-transparent border-solid border-2 border-success-default text-success-default',
      classHover(),
    )
  }

  if (props.buttonStyle === BUTTON_STYLE.GHOST) {
    return clsx(
      'bg-transparent border-solid border-2 border-success-default text-success-default',
      classHover(),
    )
  }

  if (props.buttonStyle === BUTTON_STYLE.FLAT) {
    return clsx('bg-success-default-flat text-success-default', classHover())
  }

  if (props.buttonStyle === BUTTON_STYLE.LIGHT) {
    return clsx('bg-transparent text-success-default', classHover())
  }

  return clsx(
    'bg-success-default text-white',
    classHover(),
    !isLoading && 'active:bg-success-pressed',
    hasShadow && 'shadow-nextui shadow-success-default',
  )
}

export const renderWarningClass = (props: PropButton): string => {
  const { isLoading, isDisabled, hasShadow } = props

  if (isDisabled) {
    switch (props.buttonStyle) {
      case BUTTON_STYLE.LIGHT:
        return 'disabled:bg-transparent text-nextui-gray-600'

      default:
        return 'disabled:bg-warning-disabled text-nextui-gray-600'
    }
  }

  const classHover = () => {
    if (!isLoading) {
      switch (props.buttonStyle) {
        case BUTTON_STYLE.OUTLINE:
        case BUTTON_STYLE.FLAT:
        case BUTTON_STYLE.LIGHT:
          return 'hover:opacity-80'

        case BUTTON_STYLE.GHOST:
          return 'hover:text-white hover:bg-warning-default'

        case BUTTON_STYLE.DEFAULT:
        default:
          return 'hover:bg-warning-hover'
      }
    }
  }

  if (props.buttonStyle === BUTTON_STYLE.OUTLINE) {
    return clsx(
      'bg-transparent border-solid border-2 border-warning-default text-warning-default',
      classHover(),
    )
  }

  if (props.buttonStyle === BUTTON_STYLE.GHOST) {
    return clsx(
      'bg-transparent border-solid border-2 border-warning-default text-warning-default',
      classHover(),
    )
  }

  if (props.buttonStyle === BUTTON_STYLE.FLAT) {
    return clsx('bg-warning-default-flat text-warning-default', classHover())
  }

  if (props.buttonStyle === BUTTON_STYLE.LIGHT) {
    return clsx('bg-transparent text-warning-default', classHover())
  }

  return clsx(
    'bg-warning-default text-white',
    classHover(),
    !isLoading && 'active:bg-warning-pressed',
    hasShadow && 'shadow-nextui shadow-warning-default',
  )
}

export const renderInfoClass = (props: PropButton): string => {
  const { isLoading, isDisabled, hasShadow } = props

  if (isDisabled) {
    switch (props.buttonStyle) {
      case BUTTON_STYLE.LIGHT:
        return 'disabled:bg-transparent text-nextui-gray-600'

      default:
        return 'disabled:bg-info-disabled text-nextui-gray-600'
    }
  }

  const classHover = () => {
    if (!isLoading) {
      switch (props.buttonStyle) {
        case BUTTON_STYLE.OUTLINE:
        case BUTTON_STYLE.FLAT:
        case BUTTON_STYLE.LIGHT:
          return 'hover:opacity-80'

        case BUTTON_STYLE.GHOST:
          return 'hover:text-white hover:bg-info-default'

        case BUTTON_STYLE.DEFAULT:
        default:
          return 'hover:bg-info-hover'
      }
    }
  }

  if (props.buttonStyle === BUTTON_STYLE.OUTLINE) {
    return clsx(
      'bg-transparent border-solid border-2 border-info-default text-info-default',
      classHover(),
    )
  }

  if (props.buttonStyle === BUTTON_STYLE.GHOST) {
    return clsx(
      'bg-transparent border-solid border-2 border-info-default text-info-default',
      classHover(),
    )
  }

  if (props.buttonStyle === BUTTON_STYLE.FLAT) {
    return clsx('bg-info-default-flat text-info-default', classHover())
  }

  if (props.buttonStyle === BUTTON_STYLE.LIGHT) {
    return clsx('bg-transparent text-info-default', classHover())
  }

  return clsx(
    'bg-info-default text-white',
    classHover(),
    !isLoading && 'active:bg-info-pressed',
    hasShadow && 'shadow-nextui shadow-info-default',
  )
}

export const renderDangerClass = (props: PropButton): string => {
  const { isLoading, isDisabled, hasShadow } = props

  if (isDisabled) {
    switch (props.buttonStyle) {
      case BUTTON_STYLE.LIGHT:
        return 'disabled:bg-transparent text-nextui-gray-600'

      default:
        return 'disabled:bg-danger-disabled text-nextui-gray-600'
    }
  }

  const classHover = () => {
    if (!isLoading) {
      switch (props.buttonStyle) {
        case BUTTON_STYLE.OUTLINE:
        case BUTTON_STYLE.FLAT:
        case BUTTON_STYLE.LIGHT:
          return 'hover:opacity-80'

        case BUTTON_STYLE.GHOST:
          return 'hover:text-white hover:bg-danger-default'

        case BUTTON_STYLE.DEFAULT:
        default:
          return 'hover:bg-danger-hover'
      }
    }
  }

  if (props.buttonStyle === BUTTON_STYLE.OUTLINE) {
    return clsx(
      'bg-transparent border-solid border-2 border-danger-default text-danger-default',
      classHover(),
    )
  }

  if (props.buttonStyle === BUTTON_STYLE.GHOST) {
    return clsx(
      'bg-transparent border-solid border-2 border-danger-default text-danger-default',
      classHover(),
    )
  }

  if (props.buttonStyle === BUTTON_STYLE.FLAT) {
    return clsx('bg-danger-default-flat text-danger-default', classHover())
  }

  if (props.buttonStyle === BUTTON_STYLE.LIGHT) {
    return clsx('bg-transparent text-danger-default', classHover())
  }

  return clsx(
    'bg-danger-default text-white',
    classHover(),
    !isLoading && 'active:bg-danger-pressed',
    hasShadow && 'shadow-nextui shadow-danger-default',
  )
}
