import Link from 'next/link'
import { Button } from '@element/Button'
import { Loader } from '@element/Loader'

const HomePage: React.FC = () => {
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
        <Loader />
        <Loader loaderStyle='2pipe' />
        <Loader loaderStyle='dash' />
        <Loader loaderStyle='3floor' />
      </div>
    </>
  )
}

export default HomePage
