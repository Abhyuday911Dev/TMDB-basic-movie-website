import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Details = () => {
    const [Movie, setMovie] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        (async function () {
            try {
                const { data } = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=5916c3f8aebf48725786f494decb0db8`
                );
                setMovie(data);
            } catch (err) {
                console.log(err);
            }
        })();
    }, [id]);

    let MovieDetails = "Loading...";

    if (Movie) {
        MovieDetails = (
            <div id="simpleR">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${Movie.poster_path}`}
                    alt={Movie.poster_path}
                />
                <h1>{Movie.original_title}</h1>
            </div>
        );
    }

    return <div>{MovieDetails}</div>;
};

export default Details;
