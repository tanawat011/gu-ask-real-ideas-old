import Link from 'next/link'

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <h2>
        <Link href='/calculator'>
          <a>Go to Calculator</a>
        </Link>
      </h2>
    </>
  )
}

export default HomePage
