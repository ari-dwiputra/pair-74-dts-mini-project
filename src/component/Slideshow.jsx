import tmdb from "../apis/tmdb";

import React, { useEffect, useState } from "react";
import { CardMedia, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import { Card } from "react-bootstrap";

const Slideshow = () => {
  const [movies, setMovies] = useState([]);
  const baseUrlForMovie = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const responseDariTMDB = await tmdb.get(
          "/movie/popular"
        );
        setMovies(responseDariTMDB.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataMovies();
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        autoplay
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {movies.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <Card className="boxy" sx={{ width: "100%" }}>
                <CardMedia
                  component="img"
                  image={`${baseUrlForMovie}${movie.backdrop_path}`}
                  alt={movie.title}
                  height="600"
                ></CardMedia>
                <Typography
                  position={"absolute"}
                  top={200}
                  width={"60%"}
                  paddingLeft={8}
                  variant={"h1"}
                  fontSize={"2em"}
                  textAlign={"start"}
                  color={"white"}
                  marginBottom={0}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  {movie.title}
                </Typography>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slideshow;
