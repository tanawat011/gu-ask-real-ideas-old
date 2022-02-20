import Link from 'next/link'
import { Button } from '@element/Button'
import { Loader } from '@element/Loader'

import { LOADER_STYLE } from '@constants'
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
        <Loader />
        <Loader loaderStyle={LOADER_STYLE.TWO_PIPE} />
        <Loader loaderStyle={LOADER_STYLE.DASH} />
        <Loader loaderStyle={LOADER_STYLE.THREE_FLOOR} />
      </div>
    </>
  )
}

export default HomePage
