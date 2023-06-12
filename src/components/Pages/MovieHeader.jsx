import React from "react";

const launchRazorPay = () => {
  const options = {
    key: "rzp_test_gNX7TdwCLb6LDu",
    amount: 50000,
    currency: "INR",
    name: "Book My Show Clone",
    description: "Movie Purchase on Rental",
    image:
      "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
    handler: () => {
      alert("Payment Done");
    },
    theme: { color: "#c4242d" },
  };
  const rzp = new window.Razorpay(options);
  rzp.open();
};

function MovieHeader() {
  return (
    <div>
      <div className="md:hidden">
        <img
          src="https://lawliberty.org/app/uploads/2020/06/Inception.jpg"
          alt="Movie Banner"
        />
      </div>
      <div className="hidden md:block lg:hidden">
        <img
          src="https://lawliberty.org/app/uploads/2020/06/Inception.jpg"
          alt="Movie Banner"
        />
      </div>

      <div className="hidden lg:block">
        <div className="h-96 -z-10 relative overflow-hidden">
          <div
            className="absolute w-full h-full z-10"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%, rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%)",
            }}
          />
          <img
            src="https://lawliberty.org/app/uploads/2020/06/Inception.jpg"
            alt="Movie Banner"
            className="w-full h-full object-center object-cover"
          />
        </div>

        <div className="absolute w-2/3 left-64 top-36">
          <div className="w-52 h-full object-cover flex gap-8 items-center">
            <img
              src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/por-thozhil-et00357691-1684415887.jpg"
              alt=""
              className="h-full w-full rounded-xl"
            />

            <div className="absolute w-full left-64 flex flex-col gap-4">
              <h2 className="text-white text-4xl font-bold">
                {/* {data && data.title ? data.title : "Not found"} */}
                Movie Name
              </h2>
              <div>
                <img src="" alt="" />
                <p className="text-white text-md">/10 Votes</p>
              </div>
              <div className="py-4 px-6 bg-neutral-700 w-fit rounded-md flex gap-16">
                <div>
                  <p className="text-white text-lg font-semibold">
                    Add your rating & review
                  </p>
                  <p className="text-white text-md">your ratings matter</p>
                </div>
                <button className="rounded-lg px-8 font-bold bg-white text-black">
                  Rate Now
                </button>
              </div>
              <div className="text-white flex items-center gap-4">
                <p>duration</p>
                <span> • </span>
                <p>UA</p>
                <span> • </span>
                <p>date</p>
              </div>
              <button
                onClick={launchRazorPay}
                className="bg-red-500 hover:bg-red-600 mt-4 px-16 w-fit py-4 rounded-md text-white font-semibold"
              >
                Book tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieHeader;
