import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center mt-1" style={{margin: "1rem"}}>
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
            A train line from Front Runner on 600 S in Provo to Heber, Park City, and ending at the Red Line at Univeristy of Utah. Save open space like the north fields. Stop creating new roads and more traffic. Create a better future for ourselves and future residents.
          </p>

         

        </div>

        <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-12 ">
          <a
            href="https://le.utah.gov/GIS/findDistrict.jsp"
            className="col-span-5 text-center text-base text-white bg-gray-400 rounded-lg"
            >
              <div>
                <p style={{margin: "1rem"}}> 
                  Reach out to your Utah state representatives.
                </p>
                <p>
                  Click here to find your state representative's contact info
                </p>
              </div>
            </a>
          <div className="col-span-2 text-center text-base text-white  rounded-lg">
            
          </div>
            <a
                    href="https://chng.it/CPMzGKvYKC"
                    className="col-span-5 text-center text-base text-white bg-gray-400 rounded-lg">
              <div >
                <p style={{margin: "1rem"}}> 
                  Sign the Change.org petition.
                </p>
                <p>
                  Click here to go to the petition.
                </p>
              </div>
            </a>

          </div>

        </div>

        <div>
        <p className="mx-auto mt-6 max-w-lg text-center text-xl text-black sm:max-w-3xl">
          <span className="text-2xl">Proposed Routes</span>    
          <span className="text-sm">(click to view in google maps)</span>
        </p>

        </div>
    
        <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-12 bg-gray-200 rounded-lg">
            {[
              {
                src: "./track.png",
                alt: "Track",
                href: "https://www.google.com/maps/d/u/0/edit?mid=1mr4dVI724h9bVAg6QsWq2RrmKK6hiuE&usp=sharing",
                desc: "Surface"
              },
              {
                src: "./underground.png",
                alt: "Track",
                href: "https://www.google.com/maps/d/u/0/edit?mid=1zOfH0sF8q3uHjuxpilfC3wlpoKpbdt0&usp=sharing",
                desc: "Underground"
              },
              {
                src: "./mixed.png",
                alt: "Track",
                href: "https://www.google.com/maps/d/u/0/edit?mid=14hZ3tnqMcfdv5MEzMPI9_fTUHorrsQ0&usp=sharing",
                desc: "Mixed"
              },
              
              
            ].map((img) => (
              <div className="col-span-4 text-center text-sm">
                <div> 
                  <a
                    key={img.href}
                    href={img.href}
                    className=""
                  >{img.desc}
                  </a>
                </div>
                <div style={{margin: "1rem"}}>
                  <a
                    key={img.href}
                    href={img.href}
                    className=""
                  >
                    <img alt={img.alt} src={img.src} />
                  </a>
                </div>
             </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mx-auto mt-6 max-w-lg text-left text-xl text-black sm:max-w-3xl">
            <p className="text-2xl">Why:</p>
          </div>
          <ul className="mx-auto mt-6 max-w-lg text-left text-xl text-black sm:max-w-3xl">
              <li> 1. Improved transportation: A train line could provide a faster and more efficient means of transportation for people and goods between these cities. </li>
              <li> 2. Reduced traffic congestion: Building a train line could help to reduce traffic congestion on the roads.</li>
              <li> 3. Economic development: A train line could potentially stimulate economic development in the region by making it easier for people and businesses to access the ski resorts, airports and more.</li>
              <li> 4. Cleaner air: Utah's poisoned air is causing increased rates of stroke, dementia, and heart disease while reducing lifespan and quality of life. An electric train is one of the most efficient forms of transportation.</li>
              <li> 5. Improved quality of life: Spend less time sitting in and driving a car. Accident rates are much lower on trains.</li>
          </ul>
        </div>

        <div className="mx-auto mt-6 max-w-lg text-left text-xl text-black sm:max-w-3xl m-2">
          <div><p className="text-2xl">Sample Bill Text:</p></div>
          <br></br>
          <p>Bill Title: Wasatch Back Train Line Feasibility Study and Implementation Act</p>

            <p>Section 1. Purpose</p>

            <p>The purpose of this act is to authorize the Utah Department of Transportation to conduct a feasibility study for the creation of a train line in the Wasatch Back, connecting Provo at a Front Runner Station to Heber, Park City, down to Salt Lake City, and ending at a TRAX station, and to provide funding for the implementation of the train line if the study finds it to be viable.</p>

            <p>Section 2. Feasibility Study</p>

            <p>(a) The Utah Department of Transportation shall conduct a feasibility study for the creation of a train line in the Wasatch Back, connecting Provo at a Front Runner Station to Heber, Park City, down to Salt Lake City and ending at a TRAX station.</p>

            <p>(b) The feasibility study shall include, but not be limited to, the following elements:</p>

            <p>A thorough analysis of the route and alignment options for the train line, including a consideration of environmental and community impacts. An examination of the potential ridership and revenue for the train line. A cost-benefit analysis of the train line, including construction costs, operating costs, and projected revenue. An assessment of the potential economic benefits and job creation resulting from the train line. (c) The feasibility study shall be completed within 18 months of the effective date of this act.</p>

            <p>Section 3. Implementation</p>

            <p>(a) If the feasibility study finds that the creation of a train line in the Wasatch Back, connecting Provo at a Front Runner Station to Heber, Park City, down to Salt Lake City and ending at a TRAX station is viable, the Utah Department of Transportation shall develop and implement a plan for the construction and operation of the train line.</p>

            <p>(b) The plan for implementation shall include a detailed project schedule, a budget for construction and operation, and a plan for the acquisition of any necessary rights-of-way.</p>

            <p>(c) The Utah Department of Transportation shall provide regular updates to the Legislature on the progress of the implementation plan.</p>

            <p>Section 4. Funding</p>

            <p>(a) The Utah Department of Transportation shall use funds from the state transportation fund for the conduct of the feasibility study and the implementation of the train line, if found viable by the study.</p>

            <p>(b) The Legislature may appropriate additional funds as needed for the conduct of the feasibility study and the implementation of the train line.</p>

            <p>Please Note: This is an example and will have to go through legal review, public hearings and the input of transportation expert, and the state legislature. It might have to go through some changes and adaptations to match the local laws and regulations.</p>
        </div>

        <div>

            <p className="mx-auto mt-6 max-w-lg text-center text-sm text-black sm:max-w-3xl">
              About: I created this website to start a conversation.  My name is Christen Thompson a resident of Heber City who wants to see less traffic, cleaner air and less paved roads covering up our valley and state.
              I am excited about the future we can create for ourselves and future residents. Contact me at info@wasatchbacktrain.org
             </p>
        </div>
      </div>
    </main>
  );
}
