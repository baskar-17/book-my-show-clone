import React from "react";
import LiveEvents from "../LiveEvents/LiveEvents";

function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mt-4">The Best Of Live Events</h1>
      <p className="text-sm mb-4">
        Live events for all your entertainment needs
      </p>
      <LiveEvents />
    </div>
  );
}

export default HomePage;
