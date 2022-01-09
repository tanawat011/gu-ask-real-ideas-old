import Link from 'next/link'
import { Button } from '@element/Button/Button'

const HomePage = () => {
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
      </div>
    </>
  )
}

export default HomePage
