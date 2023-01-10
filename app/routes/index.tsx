import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="./fall-tracks.jpg"
                alt="Fall Railroad Tracks"
              />
              <div className="absolute inset-0 bg-[color:rgba(139,92,246,0.5)] mix-blend-multiply" />
            </div>
            <div className="lg:pb-18 relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32">
              <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-white text-5xl">
                  Wasatch Back Train
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                Convenient Efficient Sustainable
              </p>
            </div>
          </div>
        </div>
        <div>

          <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
            68 miles from Front Runner on 600 S in Provo to Heber, Park City, and ending at the Red Line at Univeristy of Utah. 
          </p>

        </div>

        <div>
          <div className="mx-auto mt-6 max-w-lg text-center text-xl text-black sm:max-w-3xl">
            {
              [
                {string: "Provide a faster, safer and more efficient means of transportation for Utah residents."},
                {string: "Reduce traffice on our roads. UDOT doesn't need to keep paving over our valleys. Building and expanding roads has been shown to increase traffic."},
                {string: "Stimulate economic development."},
                {string: "Cleaner air. Utah's poisoned air is causing increase rates of stroke, dementia, heart disease while reducing lifespan and quality of life."},
                {string: "Improved Quality of Life: Spend less time sitting in a car, less stress sitting on a train."},
              ].map( (blurb) => (
                <span>{blurb}</span>
              ))
            }
          </div>
        </div>
    

        <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
          <div className="mt-6 flex flex-wrap justify-center gap-8">
            {[
              {
                src: "./track.png",
                alt: "Track",
                href: "https://www.google.com/maps/d/u/0/edit?mid=1mr4dVI724h9bVAg6QsWq2RrmKK6hiuE&usp=sharing",
                string: "Option A"
              },
              
              
            ].map((img) => (
              <a
                key={img.href}
                href={img.href}
                className="flex h-300 w-150 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
              >
                <img alt={img.alt} src={img.src} />

              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
