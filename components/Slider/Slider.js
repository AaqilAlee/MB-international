import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "../../utils/axios";
import { getStoragePath } from "../../utils/helpers";

const Slider = () => {
  const [slider, setSlider] = useState([]);

  const fetchVideos = () => {
    axios.get(`/content-module/14`).then((res) => {
      setSlider(res?.data[0]?.content_item);
    });
  };

  useEffect(() => {
    fetchVideos();
  }, []);
  return (
    <>
      <section id="slider" className="position-relative">
       
        <Carousel
          fade
          pause="false"
          indicators={false}
          controls={false}
          className="video_slider"
        >
          {slider?.map((video, index) => {
            return (
                <Carousel.Item key={index}>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="d-block w-100 sliderVideo"
                  >
                    <source
                      src={getStoragePath(video?.catalogue_brochure || "")}
                      type="video/mp4"
                    />
                  </video>
                </Carousel.Item>
              
            );
          })}

          {/* <Carousel.Item>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="d-block w-100 sliderVideo"
            >
              <source src="/videos/video-4.mp4" type="video/mp4" />
            </video>
          </Carousel.Item> */}
        </Carousel>
      </section>
    </>
  );
};

export default Slider;
