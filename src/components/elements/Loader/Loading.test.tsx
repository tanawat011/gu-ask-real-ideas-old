import { render } from '@testing-library/react'
import { Loading } from './Loading'
import { LOADING_COLOR, LOADING_STYLE } from '@constants'

describe('<Loading />', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it(`should render to match snapshot with default style no props`, async () => {
    expect.assertions(1)

    const { asFragment } = render(<Loading />)

    expect(asFragment()).toMatchSnapshot()
  })

  Object.keys(LOADING_STYLE).forEach((style) => {
    it(`should render to match snapshot with ${style.toLowerCase()} style`, async () => {
      expect.assertions(1)

      const { asFragment } = render(
        <Loading
          loaderStyle={LOADING_STYLE[style as keyof typeof LOADING_STYLE]}
        />,
      )

      expect(asFragment()).toMatchSnapshot()
    })

    Object.keys(LOADING_COLOR).forEach((color) => {
      it(`should render to match snapshot with ${style.toLowerCase()} style with ${color.toLowerCase()} color`, async () => {
        expect.assertions(1)

        const { asFragment } = render(
          <Loading
            loaderStyle={LOADING_STYLE[style as keyof typeof LOADING_STYLE]}
            color={LOADING_COLOR[color as keyof typeof LOADING_COLOR]}
          />,
        )

        expect(asFragment()).toMatchSnapshot()
      })
    })
  })
})
