import tmdb from "../apis/tmdb";

import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const DetailMovie = () => {

  const [movies, setMovies] = useState([]);
  let params = useParams();

  useEffect(() => {
    const MovieID = params.MovieID;

    const fetchDataMovies = async () => {
      try {
        const responseDariTMDB = await tmdb.get(
          `/movie/${MovieID}`
        );
        setMovies(responseDariTMDB.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataMovies();
  }, [params.MovieID]);

  return (
    <div>
      <Box
        sx={{ width: "100%", height: "100%"}}
        key={movies.id}
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
          alt="main"
          style={{ objectFit: "cover", width: "100%", height: "80vh" }}
        />
        <Typography
          position={"absolute"}
          top={250}
          width={"60%"}
          paddingLeft={8}
          variant={"h1"}
          fontSize={"2em"}
          textAlign={"start"}
          color={"white"}
          marginBottom={0}
          display={"flex"}
          flexDirection={'column'}
        >
          {movies.title}
        </Typography>
      </Box>
      <Box sx={{margin:'20px', color:'white', marginBottom:'20px', paddingBottom:'10px', borderBottom:'solid 5px gray'}}>
        <Typography textAlign={'justify'} variant={'h4'} fontSize={24}>
            Release Date : {movies.release_date}
        </Typography>
        <Typography textAlign={'justify'} variant={'h4'} fontSize={24}>
            Popularity : {movies.popularity}
        </Typography>
        <Typography textAlign={'justify'} variant={'h4'} fontSize={24}>
            Description : {movies.overview}
        </Typography>
      </Box>
      
    </div>
  );
};

export default DetailMovie;
