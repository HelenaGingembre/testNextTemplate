"use client";
import AppLink from "@/components/AppLink";
import Image from "next/image";
import Right from "../components/icons/Right";
import women from "/public/img/fille.png";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-content-part px-5 py-10">
          <h1
            className="hero-title text-3xl font-semibold mt-10"
            data-aos="zoom-in"
          >
            Any creative project is unique and
            <br />
            should be inspire your customers and expand your audience.
          </h1>
          <div className="relative mt-10">
            <svg
              id="hello-text-graphic"
              className="draw-text "
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 564.9 136.9"
            >
              <defs></defs>
              <g className="svg-text-fill">
                <path
                  d="M563.2,109c-0.8-0.8-1.9-1.2-3.2-1.2c-0.9,0-1.8,0.2-2.8,0.5c-6.8,2.5-11.7,3.7-14.6,3.7
                        c-1.9,0-3.4-0.4-4.5-1.3c-1-0.9-2.9-4-3.4-5.7c-0.1-1-0.6-2.6-1.5-4.9c-1.6-4.2-1.7-5.5-4-9.5c-6.7-11.1-20-10-30.5-6.2
                        c-6.1,2.2-23.1,10.8-28.5,14.2c-5.5,3.4-5.7,2.9-11.8,4.9c-5.5,1.7-9.8,2.7-15.3,4.7c-5.9,2.2-11.6,3.8-16.8,4.8
                        c-5.3,1-9.5,1.5-12.6,1.5c-1.8,0-3.7,0.1-5.6-0.3c-1-0.2-2-0.7-2.4-1.6c-0.2-0.4-0.3-0.9-0.3-1.4c-0.1-3.7,1-7.7,2.5-11.1
                        c0.8-1.7,2.6-5.7,5.7-12c5.7-3.9,16.4-12.7,31.9-26.6c10-8.9,17.1-15.7,21.2-20.4c3.6-3.6,6.8-7.2,9.7-10.9c3-4,4.5-7.5,4.5-10.4
                        c0-2.6-0.9-4.7-2.8-6.3s-4.3-2.4-7.2-2.4c-2.4,0-4.8,0.5-7.1,1.4c-2.4,0.9-5.1,2.2-8.1,3.8c-7.3,4.4-14.8,10.5-22.4,18.3
                        c-6.4,6.7-12.5,14.2-18.3,22.5c-2.9,4.4-6.2,9.8-9.7,16s-6.1,11.1-7.6,14.4c-6.8,3.9-12.9,7-18.4,9.4s-15,6.1-28.6,11.2
                        c-5.9,2.2-11.6,3.8-16.8,4.8c-5.7,1.1-14.5,3.8-19-1.4c-2.3-2.6-0.4-8.8,0.7-11.4c0.8-1.7,2.6-5.7,5.7-12
                        c5.7-3.9,16.4-12.7,31.9-26.6c10-8.9,17.1-15.7,21.2-20.4c3.6-3.6,6.8-7.2,9.7-10.9c3-4,4.5-7.5,4.5-10.4c0-2.6-0.9-4.7-2.8-6.3
                        s-4.3-2.4-7.2-2.4c-2.4,0-4.8,0.5-7.1,1.4c-2.4,0.9-5.1,2.2-8.1,3.8c-7.3,4.4-14.8,10.5-22.4,18.3c-6.4,6.7-12.5,14.2-18.3,22.5
                        c-2.9,4.4-6.2,9.8-9.7,16s-6.1,11.1-7.6,14.4c-6.8,3.9-12.9,7-18.4,9.4s-15,6.1-28.6,11.2l-8.6,3.4c-0.9,0.3-1.8,0.7-2.7,1.1
                        s-1.8,0.7-2.7,0.9c-5.6,1.9-10.9,3.2-15.9,3.9c-2.6,0.3-5.4,0.5-8.4,0.5c-3.3,0-6.1-0.2-8.3-0.6c-5.3-1.3-8.7-4.1-8.7-9.9
                        c0-0.8,0.1-1.3,0.2-1.8c8.4-4.1,16.1-8.6,23.2-13.6c2.7-1.9,5-3.8,6.8-5.5c1.5-1.4,2.8-2.8,3.8-4.1c1-1.3,1.5-2.8,1.5-4.5
                        c0-1.3-0.3-2.5-1-3.6c-1.2-2.2-2.8-3.9-4.9-5.1c-2.1-1.2-4.5-1.9-7-1.9c-3.5,0-7.5,1.1-12.1,3.2c-5.3,2.7-9.9,6.1-13.8,10.2
                        c-3.1,3.2-5.7,6.7-7.6,10.4c-1.9,3.7-3.1,7.3-3.6,10.9c-4.4,1.9-9.4,3.9-14.9,5.9c-0.2,0.1-0.5,0.1-0.8,0.2l-11.2,4.2
                        c-9.9,3.9-20,7.9-30.7,9.1c-3.9,0.4-22.9,2.3-21.5-4.9c0.2-1,0.7-1.8,1.2-2.7c4.6-7.4,9.6-15.9,7.3-25c-0.8-3.3-3-6.4-6.3-7.5
                        c-4.6-1.5-9.3,1.3-13.3,4.1c-16.3,11.3-32.9,23-51.9,28.9c1.5-0.5,3.5-7,4.2-8.5c2.4-5.6,5-10.9,9.5-15.2
                        c4.3-4.2,9.6-7.2,14.5-10.5c5-3.4,10.1-6.9,14.9-10.5c9.8-7.3,19-15.4,27.2-24.6c0.8-0.9,1.6-1.8,2.4-2.8c5.1-6.1,9.9-13,11-20.9
                        s-2.5-16.9-9.9-19.8c-4.8-1.9-10.4-0.9-15,1.5S97,9.2,93.6,13.1c-16.7,19.8-28,43.5-42.2,65.2c-2.9,4.4-6,8.8-10,12.3
                        c-4.5,3.9-10,6.5-15.5,8.9c-5.8,2.6-11.7,5.1-17.7,7.4c-2.7,1.1-5.5,2.3-7,4.7s-0.5,6.5,2.4,6.8c1,0.1,2-0.2,3-0.6
                        c9.8-3.7,19.4-8,28.6-13c-1.3,3.9-3.6,7.3-4.9,11.2s-1.5,8.5,1.1,11.7c3.9,4.7,11.3,3.6,17,1.3c10.7-4.3,20.2-10.9,29.5-17.6
                        c4.7-3.4,9.5-6.8,14.4-9.9c2.4-1.6,4.9-3.1,7.5-4.5c2.2-1.2,5-2.6,3.8,1.2c-1.1,3.4-3.8,6-5.6,9c-2.2,3.9-4.3,8.1-3.8,12.7
                        c1.2,10.9,14.8,13.2,23.7,13.2c6.7,0,14-1.1,21.8-3.3c7.8-2.2,18.1-5.7,30.9-10.4c0.5-0.1,1.8-0.5,3.7-1.3
                        c7.8-2.8,12.8-4.8,15.1-5.8c1.3,5.1,3.8,9.1,7.5,12c4.4,3.5,10.5,5.2,18.1,5.2c3.7,0,9-0.8,15.9-2.3c2.9-0.6,6-1.5,9.3-2.5
                        s5.4-1.7,6.4-2c12.6-4.2,24.9-8.9,37.1-14c5.8-2.4,11.6-5.2,17.3-8.2c-1,3.8-1.5,7.1-1.5,10c0,4.8,1.6,8.7,4.7,11.8
                        s7.6,4.7,13.3,4.7c4.9,0,9.6-0.6,14.2-1.9c4.4-1.2,10.8-3.4,19.2-6.5c0.4-0.1,0.9-0.3,1.3-0.4c10-3.9,18-7,23.8-9.5
                        c5.8-2.4,11.6-5.2,17.3-8.2c-1,3.8-1.5,7.1-1.5,10c0,4.8,1.6,8.7,4.7,11.8s7.6,4.7,13.3,4.7c4.9,0,9.6-0.6,14.2-1.9
                        s11.4-3.6,20.3-7c4.6-1.7,11.8-4.1,21.4-7.1c-1,2.6-1.5,5.1-1.5,7.6c0,4.6,1.7,8.5,5,11.7c3.3,3.1,8,5.1,14.1,5.8
                        c2.4,0.2,4.3,0.3,5.7,0.3c1.9,0,4.9-0.2,8.7-0.6c5.2-0.9,9.8-2,13.9-3.4c5.1-1.7,9.3-3.8,12.8-6.2c3.7-2.4,6.4-4.9,8.1-7.5
                        c3.3,1.8,6.8,2.8,10.4,2.8c4.3,0,9.9-1.3,16.7-3.9c1.6-0.6,2.8-1.5,3.6-2.5s1.2-2.1,1.2-3.3C564.5,110.8,564.1,109.8,563.2,109z"
                />
                <path
                  className="text_fill"
                  d="M450.4,37.5c2.4-2.3,5.2-4.6,8.3-7c3.2-2.4,6-4.2,8.3-5.5c-6.5,10.4-20.1,24.4-40.8,42
                        C434.4,54.6,442.4,44.8,450.4,37.5z"
                />
                <path
                  className="text_fill"
                  d="M358.1,37.5c2.4-2.3,5.2-4.6,8.3-7c3.2-2.4,6-4.2,8.3-5.5c-6.5,10.4-20.1,24.4-40.8,42
                        C342,54.6,350.1,44.8,358.1,37.5z"
                />
                <path
                  className="text_fill"
                  d="M224.2,80.2c-0.8,0.6-3.2,3-5.7,4.8c-3.5,2.6-9.8,7-10.2,7.2C210.7,87.4,219.5,80.7,224.2,80.2z"
                />
                <path
                  className="text_fill"
                  d="M74.7,63.1C80,54.9,85.8,46.6,92,38.3l9.2-12c3.8-4.6,7.1-8.2,9.9-10.7c1.5-1.1,2.8-1.6,3.9-1.6
                        c0.6,0,1.3,0.2,1.9,0.7s1.1,1.1,1.4,1.9c0.6,1.1,1,2.4,1,4c0,1.9-0.5,4-1.6,6.2c-1.7,3.5-4.4,7.3-8.1,11.7c-2.6,3-6,6.5-10.2,10.5
                        c-5.1,5.1-12.7,11.4-22.8,19.1c-1.9,1.5-4.9,3.7-8.7,6.5C70.8,69.4,73.1,65.6,74.7,63.1z"
                />
                <path
                  className="text_fill"
                  d="M521.7,100.9c2.1,4.9,2.2,10.8-1.3,14.1c-7.3,6.9-18.4,7.9-27.9,7.9c-3.8,0-8.2,0-11.6-1.7
                        c-0.7-0.4-1.4-0.8-1.8-1.5c-2.6-4.3,1.2-11.1,3.9-13.9c5-5,12.8-9.2,19.5-11.5c3.7-1.3,8.1-2,11.9-0.8
                        C517.6,94.5,520.2,97.4,521.7,100.9z"
                />
              </g>
              <g className="svg-text" id="hello-text">
                <title>Hello</title>
                <desc></desc>
                <path
                  //   className="text"
                  d="M563.2,109c-0.8-0.8-1.9-1.2-3.2-1.2c-0.9,0-1.8,0.2-2.8,0.5c-6.8,2.5-11.7,3.7-14.6,3.7
                    c-1.9,0-3.4-0.4-4.5-1.3c-1-0.9-2.9-4-3.4-5.7c-0.1-1-0.6-2.6-1.5-4.9c-1.6-4.2-1.7-5.5-4-9.5c-6.7-11.1-20-10-30.5-6.2
                    c-6.1,2.2-23.1,10.8-28.5,14.2c-5.5,3.4-5.7,2.9-11.8,4.9c-5.5,1.7-9.8,2.7-15.3,4.7c-5.9,2.2-11.6,3.8-16.8,4.8
                    c-5.3,1-9.5,1.5-12.6,1.5c-1.8,0-3.7,0.1-5.6-0.3c-1-0.2-2-0.7-2.4-1.6c-0.2-0.4-0.3-0.9-0.3-1.4c-0.1-3.7,1-7.7,2.5-11.1
                    c0.8-1.7,2.6-5.7,5.7-12c5.7-3.9,16.4-12.7,31.9-26.6c10-8.9,17.1-15.7,21.2-20.4c3.6-3.6,6.8-7.2,9.7-10.9c3-4,4.5-7.5,4.5-10.4
                    c0-2.6-0.9-4.7-2.8-6.3s-4.3-2.4-7.2-2.4c-2.4,0-4.8,0.5-7.1,1.4c-2.4,0.9-5.1,2.2-8.1,3.8c-7.3,4.4-14.8,10.5-22.4,18.3
                    c-6.4,6.7-12.5,14.2-18.3,22.5c-2.9,4.4-6.2,9.8-9.7,16s-6.1,11.1-7.6,14.4c-6.8,3.9-12.9,7-18.4,9.4s-15,6.1-28.6,11.2
                    c-5.9,2.2-11.6,3.8-16.8,4.8c-5.7,1.1-14.5,3.8-19-1.4c-2.3-2.6-0.4-8.8,0.7-11.4c0.8-1.7,2.6-5.7,5.7-12
                    c5.7-3.9,16.4-12.7,31.9-26.6c10-8.9,17.1-15.7,21.2-20.4c3.6-3.6,6.8-7.2,9.7-10.9c3-4,4.5-7.5,4.5-10.4c0-2.6-0.9-4.7-2.8-6.3
                    s-4.3-2.4-7.2-2.4c-2.4,0-4.8,0.5-7.1,1.4c-2.4,0.9-5.1,2.2-8.1,3.8c-7.3,4.4-14.8,10.5-22.4,18.3c-6.4,6.7-12.5,14.2-18.3,22.5
                    c-2.9,4.4-6.2,9.8-9.7,16s-6.1,11.1-7.6,14.4c-6.8,3.9-12.9,7-18.4,9.4s-15,6.1-28.6,11.2l-8.6,3.4c-0.9,0.3-1.8,0.7-2.7,1.1
                    s-1.8,0.7-2.7,0.9c-5.6,1.9-10.9,3.2-15.9,3.9c-2.6,0.3-5.4,0.5-8.4,0.5c-3.3,0-6.1-0.2-8.3-0.6c-5.3-1.3-8.7-4.1-8.7-9.9
                    c0-0.8,0.1-1.3,0.2-1.8c8.4-4.1,16.1-8.6,23.2-13.6c2.7-1.9,5-3.8,6.8-5.5c1.5-1.4,2.8-2.8,3.8-4.1c1-1.3,1.5-2.8,1.5-4.5
                    c0-1.3-0.3-2.5-1-3.6c-1.2-2.2-2.8-3.9-4.9-5.1c-2.1-1.2-4.5-1.9-7-1.9c-3.5,0-7.5,1.1-12.1,3.2c-5.3,2.7-9.9,6.1-13.8,10.2
                    c-3.1,3.2-5.7,6.7-7.6,10.4c-1.9,3.7-3.1,7.3-3.6,10.9c-4.4,1.9-9.4,3.9-14.9,5.9c-0.2,0.1-0.5,0.1-0.8,0.2l-11.2,4.2
                    c-9.9,3.9-20,7.9-30.7,9.1c-3.9,0.4-22.9,2.3-21.5-4.9c0.2-1,0.7-1.8,1.2-2.7c4.6-7.4,9.6-15.9,7.3-25c-0.8-3.3-3-6.4-6.3-7.5
                    c-4.6-1.5-9.3,1.3-13.3,4.1c-16.3,11.3-32.9,23-51.9,28.9c1.5-0.5,3.5-7,4.2-8.5c2.4-5.6,5-10.9,9.5-15.2
                    c4.3-4.2,9.6-7.2,14.5-10.5c5-3.4,10.1-6.9,14.9-10.5c9.8-7.3,19-15.4,27.2-24.6c0.8-0.9,1.6-1.8,2.4-2.8c5.1-6.1,9.9-13,11-20.9
                    s-2.5-16.9-9.9-19.8c-4.8-1.9-10.4-0.9-15,1.5S97,9.2,93.6,13.1c-16.7,19.8-28,43.5-42.2,65.2c-2.9,4.4-6,8.8-10,12.3
                    c-4.5,3.9-10,6.5-15.5,8.9c-5.8,2.6-11.7,5.1-17.7,7.4c-2.7,1.1-5.5,2.3-7,4.7s-0.5,6.5,2.4,6.8c1,0.1,2-0.2,3-0.6
                    c9.8-3.7,19.4-8,28.6-13c-1.3,3.9-3.6,7.3-4.9,11.2s-1.5,8.5,1.1,11.7c3.9,4.7,11.3,3.6,17,1.3c10.7-4.3,20.2-10.9,29.5-17.6
                    c4.7-3.4,9.5-6.8,14.4-9.9c2.4-1.6,4.9-3.1,7.5-4.5c2.2-1.2,5-2.6,3.8,1.2c-1.1,3.4-3.8,6-5.6,9c-2.2,3.9-4.3,8.1-3.8,12.7
                    c1.2,10.9,14.8,13.2,23.7,13.2c6.7,0,14-1.1,21.8-3.3c7.8-2.2,18.1-5.7,30.9-10.4c0.5-0.1,1.8-0.5,3.7-1.3
                    c7.8-2.8,12.8-4.8,15.1-5.8c1.3,5.1,3.8,9.1,7.5,12c4.4,3.5,10.5,5.2,18.1,5.2c3.7,0,9-0.8,15.9-2.3c2.9-0.6,6-1.5,9.3-2.5
                    s5.4-1.7,6.4-2c12.6-4.2,24.9-8.9,37.1-14c5.8-2.4,11.6-5.2,17.3-8.2c-1,3.8-1.5,7.1-1.5,10c0,4.8,1.6,8.7,4.7,11.8
                    s7.6,4.7,13.3,4.7c4.9,0,9.6-0.6,14.2-1.9c4.4-1.2,10.8-3.4,19.2-6.5c0.4-0.1,0.9-0.3,1.3-0.4c10-3.9,18-7,23.8-9.5
                    c5.8-2.4,11.6-5.2,17.3-8.2c-1,3.8-1.5,7.1-1.5,10c0,4.8,1.6,8.7,4.7,11.8s7.6,4.7,13.3,4.7c4.9,0,9.6-0.6,14.2-1.9
                    s11.4-3.6,20.3-7c4.6-1.7,11.8-4.1,21.4-7.1c-1,2.6-1.5,5.1-1.5,7.6c0,4.6,1.7,8.5,5,11.7c3.3,3.1,8,5.1,14.1,5.8
                    c2.4,0.2,4.3,0.3,5.7,0.3c1.9,0,4.9-0.2,8.7-0.6c5.2-0.9,9.8-2,13.9-3.4c5.1-1.7,9.3-3.8,12.8-6.2c3.7-2.4,6.4-4.9,8.1-7.5
                    c3.3,1.8,6.8,2.8,10.4,2.8c4.3,0,9.9-1.3,16.7-3.9c1.6-0.6,2.8-1.5,3.6-2.5s1.2-2.1,1.2-3.3C564.5,110.8,564.1,109.8,563.2,109z"
                />
                <path
                  //   className="text2"
                  d="M450.4,37.5c2.4-2.3,5.2-4.6,8.3-7c3.2-2.4,6-4.2,8.3-5.5c-6.5,10.4-20.1,24.4-40.8,42
                    C434.4,54.6,442.4,44.8,450.4,37.5z"
                />
                <path
                  //   className="text2"
                  d="M358.1,37.5c2.4-2.3,5.2-4.6,8.3-7c3.2-2.4,6-4.2,8.3-5.5c-6.5,10.4-20.1,24.4-40.8,42
                    C342,54.6,350.1,44.8,358.1,37.5z"
                />
                <path
                  //   className="text2"
                  d="M224.2,80.2c-0.8,0.6-3.2,3-5.7,4.8c-3.5,2.6-9.8,7-10.2,7.2C210.7,87.4,219.5,80.7,224.2,80.2z"
                />
                <path
                  //   className="text2"
                  d="M74.7,63.1C80,54.9,85.8,46.6,92,38.3l9.2-12c3.8-4.6,7.1-8.2,9.9-10.7c1.5-1.1,2.8-1.6,3.9-1.6
                    c0.6,0,1.3,0.2,1.9,0.7s1.1,1.1,1.4,1.9c0.6,1.1,1,2.4,1,4c0,1.9-0.5,4-1.6,6.2c-1.7,3.5-4.4,7.3-8.1,11.7c-2.6,3-6,6.5-10.2,10.5
                    c-5.1,5.1-12.7,11.4-22.8,19.1c-1.9,1.5-4.9,3.7-8.7,6.5C70.8,69.4,73.1,65.6,74.7,63.1z"
                />
                <path
                  //   className="text2"
                  d="M521.7,100.9c2.1,4.9,2.2,10.8-1.3,14.1c-7.3,6.9-18.4,7.9-27.9,7.9c-3.8,0-8.2,0-11.6-1.7
                    c-0.7-0.4-1.4-0.8-1.8-1.5c-2.6-4.3,1.2-11.1,3.9-13.9c5-5,12.8-9.2,19.5-11.5c3.7-1.3,8.1-2,11.9-0.8
                    C517.6,94.5,520.2,97.4,521.7,100.9z"
                />
              </g>
            </svg>
          </div>
          <p className="hero-text text-2xl " data-aos="fade-up">
            My name is Olena and Im a <br />
            <span className="text-accent"> Front-end Developer!</span>
          </p>
          <div className="flex gap-4 justify-evenly mt-5">
            <AppLink href="#about" className="btn-green flex gap-2">
              Learn More
              <Right />
            </AppLink>
            <AppLink href="#contact" className="btn flex gap-2">
              Contact me <Right />
            </AppLink>
          </div>
        </div>
        <div className="hero-content-part relative ">
          <Image
            src={women}
            width={"auto"}
            height={"auto"}
            style={{
              objectFit: "contain", // cover, contain,
            }}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div>
        <svg
          id="curve"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 190 165"
        >
          <path
            className="curve_svg"
            d="m 9.0714216,201.48408 c 0,-5.57922 0.040984,-10.14404 0.091076,-10.14404 0.050092,0 0.8210216,0.37409 1.7131774,0.83131 8.224709,4.21507 18.049867,7.29049 28.241128,8.83989 14.088788,2.14196 29.928643,1.76273 45.725991,-1.09474 3.785988,-0.68482 7.344165,-1.52038 12.547724,-2.94656 5.946882,-1.62992 12.043262,-2.72206 18.974732,-3.39926 2.27654,-0.22242 4.31295,-0.27629 10.27906,-0.27191 8.34151,0.006 9.58691,0.084 19.87286,1.24206 8.07946,0.90967 10.28495,1.06661 12.10165,0.86114 0.78705,-0.089 1.67964,-0.26434 1.98354,-0.3896 1.20061,-0.49488 1.96623,-1.63721 1.96863,-2.93725 0.002,-0.86744 0.58942,-1.64645 2.08234,-2.75962 4.20124,-3.13258 13.90189,-6.74461 22.39271,-8.33792 3.63111,-0.68137 6.28459,-0.92094 9.20221,-0.8308 4.47007,0.13811 6.89773,1.02524 8.2032,2.99768 0.40941,0.61859 0.41163,0.69704 0.41163,14.5528 v 13.93086 H 106.96725 9.0714216 Z"
            transform="translate(-14.5-46)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
