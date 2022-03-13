import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Seo from '../components/Seo';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Index = ({ results }) => {
  const router = useRouter();
  const onClick = (id, title) => {
    // router.push(
    //   {
    //     pathname: `/movies/${id}`,
    //     query: {
    //       title: title,
    //     },
    //   },
    //   `/movies/${id}`,
    // );

    router.push(`/movies/${title}/${id}`);
  };
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div className='container'>
      <Seo title='Home' />
      {/* {!movies && <h4>Loading...</h4>} */}
      {movies?.map((movie) => (
        <div
          className='movie'
          onClick={() => onClick(movie.id, movie.original_title)}
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link
              // href={{
              //   pathname: `/movies/${movie.id}`,
              //   query: {
              //     title: movie.original_title,
              //   },
              // }}
              // as={`/movies/${movie.id}`}
              href={`/movies/${movie.original_title}/${movie.id}`}
            >
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

/* Server Side Rendering*/
export async function getServerSideProps() {
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: {
      results,
    },
  };
}

export default Index;
