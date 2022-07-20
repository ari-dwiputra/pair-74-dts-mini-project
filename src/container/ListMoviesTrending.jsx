import tmdb from "../apis/tmdb";

import React, { useEffect, useState } from "react";
import { Box, CardMedia, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ListMoviesTrending = () => {
  const [movies, setMovies] = useState([]);
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w342";

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const responseDariTMDB = await tmdb.get(
          "/trending/movie/week"
        );
        setMovies(responseDariTMDB.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataMovies();
  }, []);

  return (
    <div className="mt-3">
      <Typography
          className="mb-2 mx-2"
          align="left"
          sx={{
            color: "#fff",
          }}
          variant="h5"
        >
          Trending Now
        </Typography>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          300: {
            slidesPerView: 5,
          },
          700: {
            slidesPerView: 7,
          }
        }}
        spaceBetween={5}
        autoplay
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {movies.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <Card className="boxy" sx={{ margin: "5px" }}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/DetailFilm/${movie.id}`}
                >
                  <Box className="boxy">
                    <CardMedia
                      component="img"
                      image={`${baseUrlForMovie}${movie.poster_path}`}
                      alt={movie.title}
                    ></CardMedia>
                  </Box>
                </Link>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ListMoviesTrending;
