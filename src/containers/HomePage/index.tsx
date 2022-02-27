import Link from 'next/link'
import { Button } from '@element/Button'
import { Loading } from '@element/Loader'

import { LOADING_COLOR, LOADING_STYLE } from '@constants'
import { useDarkMode } from '@hooks'

const HomePage: React.FC = () => {
  const [, setTheme] = useDarkMode()

  return (
    <>
      <h1>Home Page</h1>
      <h2>
        <Link href='/calculator'>
          <a>Go to Calculator</a>
        </Link>
      </h2>
      <div>
        <div>
          <Button label='Go to Calculator' isLoading isDisabled />
        </div>
        <div>
          {' '}
          <Button label='Go to Calculator' />
        </div>
        <div>
          {' '}
          <Button
            label='Light mode'
            onClick={() => {
              setTheme('light')
            }}
          />
        </div>
        <div>
          {' '}
          <Button
            label='Dark mode'
            onClick={() => {
              setTheme('dark')
            }}
          />
        </div>
        <Loading />
        <Loading loaderStyle={LOADING_STYLE.TWO_PIPE} />
        <Loading loaderStyle={LOADING_STYLE.DASH} />
        <Loading loaderStyle={LOADING_STYLE.THREE_FLOOR} />
        <Loading
          loaderStyle={LOADING_STYLE.THREE_FLOOR}
          color={LOADING_COLOR.DEFAULT}
        />
        <Loading
          loaderStyle={LOADING_STYLE.THREE_FLOOR}
          color={LOADING_COLOR.SKY}
        />
        <Loading
          loaderStyle={LOADING_STYLE.THREE_FLOOR}
          color={LOADING_COLOR.WHITE}
        />
      </div>
    </>
  )
}

export default HomePage
