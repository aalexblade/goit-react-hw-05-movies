import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCastById } from "services/movie-api";
import { CastWrapper, CastItem, CastImg } from './MovieCast.styled'

export const MovieCast = () => {

    const { movidId } = useParams();
    const [movieCast, setMovieCast] = useState();

    useEffect(() => { 
        getCastById(movidId).then(setMovieCast);
    }, [movidId]);

    
    return (
         <>
      {movieCast && (
        <CastWrapper>
          {movieCast.map(
            ({ credit_id, original_name, profile_path, character }) => {
              return (
                <CastItem key={credit_id}>
                  <CastImg
                    src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                    alt={original_name}
                  />
                  <div>
                    <p>{original_name}</p>
                    <p>{`Character: ${character}`} </p>
                  </div>
                </CastItem>
              );
            }
          )}
        </CastWrapper>
      )}
    </>
  );
};