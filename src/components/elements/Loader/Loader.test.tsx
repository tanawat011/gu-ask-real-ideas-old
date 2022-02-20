import { render } from '@testing-library/react'
import { Loader } from '@element/Loader'
import { LOADER_STYLE } from '@constants'

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

  it('should render to match snapshot with second style', () => {
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
})
