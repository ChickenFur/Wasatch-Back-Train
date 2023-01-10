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

          <p className="mx-auto mt-6 max-w-lg text-center text-xl text-black sm:max-w-3xl">
            A train line 68 miles from Front Runner on 600 S in Provo to Heber, Park City, and ending at the Red Line at Univeristy of Utah. Save open space like the north fields, stop creating new roads, more traffic and start to create a better future for ourselves and future residents.
          </p>

        </div>
    
        <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
          <div className="mt-6 flex flex-wrap justify-center gap-8 columns-3">
            {[
              {
                src: "./track.jpg",
                alt: "Track",
                href: "https://www.google.com/maps/d/u/0/edit?mid=1mr4dVI724h9bVAg6QsWq2RrmKK6hiuE&usp=sharing",
                desc: "Suface Route"
              },
              {
                src: "./underground.jpg",
                alt: "Track",
                href: "https://www.google.com/maps/d/u/0/edit?mid=1zOfH0sF8q3uHjuxpilfC3wlpoKpbdt0&usp=sharing",
                desc: "Undergound Route"
              },
              {
                src: "./mixed.jpg",
                alt: "Track",
                href: "https://www.google.com/maps/d/u/0/edit?mid=14hZ3tnqMcfdv5MEzMPI9_fTUHorrsQ0&usp=sharing",
                desc: "Mixed Ungerground/Surface Route"
              },
              
              
            ].map((img) => (
              <div class="w-full aspect-square">
                <a
                  key={img.href}
                  href={img.href}
                  className="flex justify-center p-1"
                >
                  <img alt={img.alt} src={img.src} />
                  <p>{img.desc}</p>

                </a>
                <a
                key={img.href}
                href={img.href}
                className="flex justify-center p-1"
              >
               <p>{img.desc}</p>

             </a>
             </div>
            ))}
          </div>
        </div>

        <div>
          <ul className="mx-auto mt-6 max-w-lg text-left text-xl text-black sm:max-w-3xl">
              <li> 1. Improved transportation: A train line could provide a faster and more efficient means of transportation for people and goods between these cities. </li>
              <li> 2. Reduced traffic congestion: Building a train line could help to reduce traffic congestion on the roads.</li>
              <li> 3. Economic development: A train line could potentially stimulate economic development in the region by making it easier for people and businesses to access the ski resorts, airports and more.</li>
              <li> 4. Cleaner air: Utah's poisoned air is causing increased rates of stroke, dementia, and heart disease while reducing lifespan and quality of life. An electric train is one of the most efficient forms of transportation.</li>
              <li> 5. Improved quality of life: Spend less time sitting in a car, less time getting to where you want to be.</li>
          </ul>
        </div>

        <div>

            <p className="mx-auto mt-6 max-w-lg text-center text-sm text-black sm:max-w-3xl">
              About: I created this website to start a conversation.  My name is Christen Thompson a resident of Heber City who wants to see less traffic, cleaner air and less paved roads covering up our valley and state.
              I am excited about the future we can create for ourselves and future residents. Contact me at [firstname].[lastname]@gmail.com
             </p>
        </div>
      </div>
    </main>
  );
}
