import { render } from '@testing-library/react'
import { Loader } from '@element/Loader'

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

    const { asFragment } = render(<Loader loaderStyle='default' />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render to match snapshot with second style', () => {
    expect.assertions(1)

    const { asFragment } = render(<Loader loaderStyle='2pipe' />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render to match snapshot with dash style', () => {
    expect.assertions(1)

    const { asFragment } = render(<Loader loaderStyle='dash' />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render to match snapshot with 3floor style', () => {
    expect.assertions(1)

    const { asFragment } = render(<Loader loaderStyle='3floor' />)

    expect(asFragment()).toMatchSnapshot()
  })
})
