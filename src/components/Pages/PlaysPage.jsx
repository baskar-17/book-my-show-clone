import React from "react";
import Disclosure from "../Config/PlaysFilter";
import Poster from "../Posters/Poster";

function PlaysPage() {
  return (
    <div className="container mx-auto my-10 px-4">
      <div className="w-full lg:flex lg:gap-8 lg:flex-row-reverse">
        <div className="lg:w-8/12">
          <h2 className="text-2xl font-bold mb-4">Plays in Chennai</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
              <Poster
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOCBKdW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00327515-qhzyftebwl-portrait.jpg"
                title="Stories at Sunset-Storytime for adults"
                subtitle="English ₹199 onwards"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
              <Poster
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOCBKdW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00327515-qhzyftebwl-portrait.jpg"
                title="Stories at Sunset-Storytime for adults"
                subtitle="English ₹199 onwards"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
              <Poster
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOCBKdW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00327515-qhzyftebwl-portrait.jpg"
                title="Stories at Sunset-Storytime for adults"
                subtitle="English ₹199 onwards"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
              <Poster
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOCBKdW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00327515-qhzyftebwl-portrait.jpg"
                title="Stories at Sunset-Storytime for adults"
                subtitle="English ₹199 onwards"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
              <Poster
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOCBKdW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00327515-qhzyftebwl-portrait.jpg"
                title="Stories at Sunset-Storytime for adults"
                subtitle="English ₹199 onwards"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/4">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <Disclosure title="Date" tags={["Today", "Tomorrow", "This Week"]} />
        </div>
      </div>
    </div>
  );
}

export default PlaysPage;
