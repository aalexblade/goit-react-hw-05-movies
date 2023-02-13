import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { getTrendingMovie } from 'services/movie-api';
import { HomeWrapper, HomeTitle, MovieList, ListItem } from './Home.styled';


const Home = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        getTrendingMovie().then(setMovies);
    }, []);

    return (
        <HomeWrapper>
            <HomeTitle>Trending today</HomeTitle>
            <MovieList>
                {movies.map(({ id, title }) => {
                    return (
                        <li>
                            <ListItem state={{ from: location }} to={`/movies/${id}`}/>
                            {title}
                        </li>
                    );
                })}
            </MovieList>
        </HomeWrapper>
    );
};

export default Home;