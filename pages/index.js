import Head from 'next/head'
import Featured from '../components/Featured'
import ProductsList from '../components/ProductsList'
import axios from 'axios'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import AddButton from '../components/AddButton'
import Add from '../components/Add'

export default function Home({ pizzaList, admin }) {

  const [close, setClose] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
         <title>Pizza App</title>
         <meta name="description" content="Best Pizza App in my Portfolio." />
         <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {<AddButton setClose={setClose} />}
      <ProductsList pizzaList={pizzaList}/>
      {!close && <Add setClose={setClose} />}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
    const myCookie = ctx.req?.cookies || "";
    let admin = false;

    if (myCookie.token === process.env.TOKEN) {
        admin = true;
    }

    const res = await axios.get("http://localhost:3000/api/products");
    return{
        props: {
            pizzaList: res.data,
            admin,
        }
    }
}
