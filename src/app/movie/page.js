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

// app/movie/page.tsx or app/movie/index.tsx (depending on your routing)
// import React from 'react'
// import MovieCard from '../components/MovieCard'
// import styles from '@/app/styles/common.module.css'

// const Movie = async () => {
//   const url = 'https://netflix54.p.rapidapi.com/search/?query=series&offset=0&limit_titles=50&limit_suggestions=20&lang=en'; // Sample endpoint
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': process.env.RAPID_API_KEY,  // make sure this is set in your .env file
//       'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
//     }
//   }

//   try {
//     const res = await fetch(url, options);

//     if (!res.ok) {
//       throw new Error(`HTTP error! Status: ${res.status}`);
//     }

//     const data = await res.json();
//     const main_data = data.titles;

//     return (
//       <section className={styles.movieSection}>
//         <div className={styles.container}>
//           <h1>Series & Movie</h1>
//           <div className={styles.card_section}>
//             {main_data.map((curElem) => (
//               <MovieCard key={curElem.id} {...curElem} />
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   } catch (error) {
//     console.error('Failed to fetch movies:', error);

//     return (
//       <section className={styles.movieSection}>
//         <div className={styles.container}>
//           <h1>Failed to load movies. Please try again later.</h1>
//         </div>
//       </section>
//     );
//   }
// };

// export default Movie;
