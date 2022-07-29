import Head from 'next/head'
import Banner from '../components/banner/Banner'
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
      </main>
    </div>
  )
}
