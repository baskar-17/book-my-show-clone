import React from "react";
import LiveEvents from "../LiveEvents/LiveEvents";
import PosterSlider from "../Posters/PosterSlider";
import TempPosters from "../Config/TempPosters";

function HomePage() {
  return (
    <div>
      <div className="container mx-auto max-w-screen-2xl px-16 my-10">
        <PosterSlider
          from={TempPosters}
          heading={"Recommended Movies"}
          subheading={
            "Watch the recommended movies where more poeples are going"
          }
          isDark={false}
          date={false}
        />
      </div>

      <div className="container mx-auto max-w-screen-2xl px-16 my-10">
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
          alt="break banner"
          className="w-full"
        />
      </div>

      <div className="container mx-auto max-w-screen-2xl px-16 my-10">
        <LiveEvents
          from={TempPosters}
          heading={"The Best Of Live Events"}
          subheading={"Live events for all your entertainment needs"}
        />
      </div>

      <div className="bg-slate-800 py-4">
        <div className="container mx-auto max-w-screen-2xl my-10 px-16 text-white">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
            alt="Premier Banner"
            className="w-3/4"
          />
          <PosterSlider
            from={TempPosters}
            heading={"Premier Movies"}
            subheading={"Brand new releases every friday"}
            isDark={true}
            date={false}
          />
        </div>
      </div>

      <div className="container mx-auto max-w-screen-2xl px-16 my-10">
        <PosterSlider
          from={TempPosters}
          heading={"Events happening near you"}
          subheading={
            "Some subheading whill go here and this is the place holder"
          }
          isDark={false}
          date={false}
        />
      </div>

      <div className="container mx-auto max-w-screen-2xl px-16 my-10">
        <PosterSlider
          from={TempPosters}
          heading={"Online Streaming Events"}
          subheading={
            "Some subheading whill go here and this is the place holder"
          }
          isDark={false}
          date={true}
        />
      </div>
    </div>
  );
}

export default HomePage;
