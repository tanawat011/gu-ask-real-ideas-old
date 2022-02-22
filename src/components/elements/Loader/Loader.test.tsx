import { render } from '@testing-library/react'
import { Loader } from '@element/Loader'
import { LOADER_COLOR, LOADER_STYLE } from '@constants'

describe('<Loader />', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should render to match snapshot with default style', () => {
    expect.assertions(1)

    const { asFragment } = render(<Loader />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render to match snapshot with default style 2', () => {
    expect.assertions(1)

    const { asFragment } = render(<Loader loaderStyle={LOADER_STYLE.DEFAULT} />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render to match snapshot with 2pipe style', () => {
    expect.assertions(1)

    const { asFragment } = render(
      <Loader loaderStyle={LOADER_STYLE.TWO_PIPE} />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render to match snapshot with dash style', () => {
    expect.assertions(1)

    const { asFragment } = render(<Loader loaderStyle={LOADER_STYLE.DASH} />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render to match snapshot with 3floor style', () => {
    expect.assertions(1)

    const { asFragment } = render(
      <Loader loaderStyle={LOADER_STYLE.THREE_FLOOR} />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render to match snapshot with default style and default color', () => {
    expect.assertions(1)

    const { asFragment } = render(
      <Loader
        loaderStyle={LOADER_STYLE.DEFAULT}
        color={LOADER_COLOR.DEFAULT}
      />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render to match snapshot with 2pipe style and default color', () => {
    expect.assertions(1)

    const { asFragment } = render(
      <Loader
        loaderStyle={LOADER_STYLE.TWO_PIPE}
        color={LOADER_COLOR.DEFAULT}
      />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render to match snapshot with dash style and default color', () => {
    expect.assertions(1)

    const { asFragment } = render(
      <Loader loaderStyle={LOADER_STYLE.DASH} color={LOADER_COLOR.DEFAULT} />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render to match snapshot with 3floor style and default color', () => {
    expect.assertions(1)

    const { asFragment } = render(
      <Loader
        loaderStyle={LOADER_STYLE.THREE_FLOOR}
        color={LOADER_COLOR.DEFAULT}
      />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render to match snapshot with default style and sky color', () => {
    expect.assertions(1)

    const { asFragment } = render(
      <Loader loaderStyle={LOADER_STYLE.DEFAULT} color={LOADER_COLOR.SKY} />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render to match snapshot with 2pipe style and sky color', () => {
    expect.assertions(1)

    const { asFragment } = render(
      <Loader loaderStyle={LOADER_STYLE.TWO_PIPE} color={LOADER_COLOR.SKY} />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render to match snapshot with dash style and sky color', () => {
    expect.assertions(1)

    const { asFragment } = render(
      <Loader loaderStyle={LOADER_STYLE.DASH} color={LOADER_COLOR.SKY} />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render to match snapshot with 3floor style and sky color', () => {
    expect.assertions(1)

    const { asFragment } = render(
      <Loader
        loaderStyle={LOADER_STYLE.THREE_FLOOR}
        color={LOADER_COLOR.SKY}
      />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render to match snapshot with default style and white color', () => {
    expect.assertions(1)

    const { asFragment } = render(
      <Loader loaderStyle={LOADER_STYLE.DEFAULT} color={LOADER_COLOR.WHITE} />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render to match snapshot with 2pipe style and white color', () => {
    expect.assertions(1)

    const { asFragment } = render(
      <Loader loaderStyle={LOADER_STYLE.TWO_PIPE} color={LOADER_COLOR.WHITE} />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render to match snapshot with dash style and white color', () => {
    expect.assertions(1)

    const { asFragment } = render(
      <Loader loaderStyle={LOADER_STYLE.DASH} color={LOADER_COLOR.WHITE} />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render to match snapshot with 3floor style and white color', () => {
    expect.assertions(1)

    const { asFragment } = render(
      <Loader
        loaderStyle={LOADER_STYLE.THREE_FLOOR}
        color={LOADER_COLOR.WHITE}
      />,
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
