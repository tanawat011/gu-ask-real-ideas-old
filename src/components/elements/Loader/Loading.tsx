import { LOADING_COLOR, LOADING_STYLE } from '@constants'
import { Loading3FloorStyle, LoadingDashStyle } from '@element/svg'

interface PropsLoading {
  color?: LOADING_COLOR
  loaderStyle?: LOADING_STYLE
  className?: string
}

export const Loading: React.FC<PropsLoading> = (props) => {
  const {
    loaderStyle = LOADING_STYLE.DEFAULT,
    color = LOADING_COLOR.DEFAULT,
    className = '',
  } = props

  const renderColor = (classColor: LOADING_COLOR) => {
    if (loaderStyle === LOADING_STYLE.TWO_PIPE) {
      switch (classColor) {
        case LOADING_COLOR.SKY:
          return 'border-t-nextui-blue-400 border-b-nextui-blue-400'
        case LOADING_COLOR.WHITE:
          return 'border-t-white border-b-white'

        case LOADING_COLOR.DEFAULT:
        default:
          return 'border-t-nextui-gray-400 border-b-nextui-gray-400'
      }
    }

    if (loaderStyle === LOADING_STYLE.THREE_FLOOR) {
      switch (classColor) {
        case LOADING_COLOR.SKY:
          return 'fill-nextui-blue-400'
        case LOADING_COLOR.WHITE:
          return 'fill-white'

        case LOADING_COLOR.DEFAULT:
        default:
          return 'fill-nextui-gray-400'
      }
    }

    if (loaderStyle === LOADING_STYLE.DASH) {
      switch (classColor) {
        case LOADING_COLOR.SKY:
          return 'stroke-nextui-blue-400'
        case LOADING_COLOR.WHITE:
          return 'stroke-white'

        case LOADING_COLOR.DEFAULT:
        default:
          return 'stroke-nextui-gray-400'
      }
    }

    switch (classColor) {
      case LOADING_COLOR.SKY:
        return 'border-t-nextui-blue-400'
      case LOADING_COLOR.WHITE:
        return 'border-t-white'

      case LOADING_COLOR.DEFAULT:
      default:
        return 'border-t-nextui-gray-400'
    }
  }

  const renderLoader = (classColor: string) => {
    const baseClass = 'border-transparent border-4 border-t-4'

    switch (loaderStyle) {
      case LOADING_STYLE.TWO_PIPE:
        return (
          <div
            className={`loader-second ${baseClass} border-b-4 ${renderColor(
              color,
            )} ${classColor}`}
          />
        )

      case LOADING_STYLE.DASH:
        return LoadingDashStyle(classColor)

      case LOADING_STYLE.THREE_FLOOR:
        return Loading3FloorStyle(classColor)

      case LOADING_STYLE.DEFAULT:
      default:
        return <div className={`loader ${baseClass} ${classColor}`} />
    }
  }

  const classColor = renderColor(color)
  const loader = renderLoader(classColor)

  return <div className={className}>{loader}</div>
}
