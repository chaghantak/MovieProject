import { useEffect, useState } from "react";
import Movie from "../component/Movie";
import styles from "./Home.module.css";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
    ).json();
    setData(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  // useEffect(()=>{
  //   fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
  //   .then((response)=>response.json())
  //   .then((json)=>setData(json.data.movies))
  //   .then(setLoading(false))
  // },[])

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {data.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}