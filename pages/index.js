import Head from 'next/head'
import Image from 'next/Image'
import Banner from '../components/banner/Banner'
import Card from '../components/card/Card'
import styles from '../styles/Home.module.css'

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("hello")
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
      </Head>

      <main className={styles.main}>
        <Banner buttonText="View stores nearby!" handleOnClick={handleOnBannerBtnClick}/>
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={700} height={400}/>
        </div>
        <Card name="DarkHorse Coffee" imgUrl="/static/hero-image.png" href="/coffee-store/darkhorse-coffee"/>
      </main>
    </div>
  )
}
