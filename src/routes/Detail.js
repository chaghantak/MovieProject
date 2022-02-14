import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import styles from './Detail.module.css'
export default function Detail() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setData(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
     
        {loading ? (
          "Loading..."
        ) : (
          <div className={styles.container}>
            <div>
            <img src={data.medium_cover_image} alt={data.title}></img>
            </div>
            <div>
            Download & trailer<a href ={data.url} className={styles.link}>이동</a><br/>
            Title:{data.title}  <br/>
            Years:{data.year}   <br/>
            Like:{data.like_count}
            </div><br/>
            <div className={styles.text}>
            {data.description_full}
            </div>
          </div>
        )}
      
    </div>
  );
}