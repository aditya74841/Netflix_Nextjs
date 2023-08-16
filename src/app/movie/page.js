import Link from 'next/link'
import React from 'react'
import MovieCard from '../components/MovieCard';
import styles from '@/app/styles/common.module.css'


const Movie = async () => {

  // await new Promise(executor: resolve => setTimeout(resolve, timeout: 2000));

  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '86dc532026mshba3e32b66071604p134a47jsn2c072518ae6d',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  // console.log(data);

  return (
    <>

      <section className={styles.movieSection}>
        <div className={styles.container}>


          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
            {
              main_data.map((curElem) => {
                return <MovieCard key={curElem.id} {...curElem} />
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Movie