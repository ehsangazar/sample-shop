import HeadingComponent from '@/components/Heading/Heading'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <HeadingComponent as="h2">
        Ehsan Gazar
      </HeadingComponent>
    </>
  )
}
