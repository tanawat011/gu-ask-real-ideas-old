import Link from 'next/link'

const CalculatorPage = () => {
  return (
    <>
      <h1>Calculator Page</h1>
      <h2>
        <Link href='/'>
          <a>Back to Home</a>
        </Link>
      </h2>
    </>
  )
}

export default CalculatorPage
