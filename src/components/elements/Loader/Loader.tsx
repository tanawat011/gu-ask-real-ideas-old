import clsx from 'clsx'

import { LOADER_COLOR, LOADER_STYLE } from '@constants'

type PropsLoader = {
  color?: LOADER_COLOR
  loaderStyle?: LOADER_STYLE
  className?: string
}

const Loader3FloorStyle = (classColor: string) => (
  <svg
    className={clsx('loader-3floor', classColor)}
    version='1.1'
    id='L7'
    x='0px'
    y='0px'
    viewBox='0 0 100 100'
    enableBackground='new 0 0 100 100'
  >
    <path
      d='M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z'
    >
      <animateTransform
        attributeName='transform'
        attributeType='XML'
        type='rotate'
        dur='2s'
        from='0 50 50'
        to='360 50 50'
        repeatCount='indefinite'
      />
    </path>
    <path
      d='M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z'
    >
      <animateTransform
        attributeName='transform'
        attributeType='XML'
        type='rotate'
        dur='1s'
        from='0 50 50'
        to='-360 50 50'
        repeatCount='indefinite'
      />
    </path>
    <path
      d='M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
L82,35.7z'
    >
      <animateTransform
        attributeName='transform'
        attributeType='XML'
        type='rotate'
        dur='2s'
        from='0 50 50'
        to='360 50 50'
        repeatCount='indefinite'
      />
    </path>
  </svg>
)

const LoaderDashStyle = (classColor: string) => (
  <svg className={clsx('loader-dash', classColor)} viewBox='0 0 50 50'>
    <circle
      className='path'
      cx='25'
      cy='25'
      r='20'
      fill='none'
      strokeWidth='8'
    ></circle>
  </svg>
)

export const Loader: React.FC<PropsLoader> = (props) => {
  const {
    loaderStyle = LOADER_STYLE.DEFAULT,
    color = LOADER_COLOR.DEFAULT,
    className = '',
  } = props

  const renderColor = (style: LOADER_STYLE, classColor: LOADER_COLOR) => {
    if (style === LOADER_STYLE.TWO_PIPE) {
      switch (classColor) {
        case LOADER_COLOR.SKY:
          return 'border-t-nextui-blue-400 border-b-nextui-blue-400'
        case LOADER_COLOR.WHITE:
          return 'border-t-white border-b-white'

        default:
          return 'border-t-nextui-gray-400 border-b-nextui-gray-400'
      }
    }

    if (style === LOADER_STYLE.THREE_FLOOR) {
      switch (classColor) {
        case LOADER_COLOR.SKY:
          return 'fill-nextui-blue-400'
        case LOADER_COLOR.WHITE:
          return 'fill-white'

        default:
          return 'fill-nextui-gray-400'
      }
    }

    if (style === LOADER_STYLE.DASH) {
      switch (classColor) {
        case LOADER_COLOR.SKY:
          return 'stroke-nextui-blue-400'
        case LOADER_COLOR.WHITE:
          return 'stroke-white'

        default:
          return 'stroke-nextui-gray-400'
      }
    }

    switch (classColor) {
      case LOADER_COLOR.SKY:
        return 'border-t-nextui-blue-400'
      case LOADER_COLOR.WHITE:
        return 'border-t-white'

      default:
        return 'border-t-nextui-gray-400'
    }
  }

  const renderLoader = (style: LOADER_STYLE, classColor: string) => {
    switch (style) {
      case LOADER_STYLE.TWO_PIPE:
        return (
          <div
            className={clsx(
              'loader-second border-transparent border-4 border-t-4 border-b-4',
              renderColor(LOADER_STYLE.DEFAULT, color),
              classColor,
            )}
          />
        )

      case LOADER_STYLE.DASH:
        return LoaderDashStyle(classColor)

      case LOADER_STYLE.THREE_FLOOR:
        return Loader3FloorStyle(classColor)

      case LOADER_STYLE.DEFAULT:
      default:
        return (
          <div
            className={clsx(
              'loader border-transparent border-4 border-t-4',
              classColor,
            )}
          />
        )
    }
  }

  const classColor = renderColor(loaderStyle, color)
  const loader = renderLoader(loaderStyle, classColor)

  return <div className={className}>{loader}</div>
}
