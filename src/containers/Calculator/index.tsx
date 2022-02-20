import Link from 'next/link'

const CalculatorPage: React.FC = () => {
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
