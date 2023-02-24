import {
  SunIcon,
  ExclamationTriangleIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

function Homepage() {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="h-full dark:bg-gpt-gray-1">
        <div className="flex flex-col items-center text-sm dark:bg-gpt-gray-1 h-screen">
          <div className="overflow-y-auto text-gpt-gray-1 w-full md:max-w-2xl lg:max-w-3xl md:h-screen md:flex md:flex-col px-6 dark:text-gpt-white-1 scrollbar-hide">
            <h1 className="text-4xl font-semibold text-center mt-6 md:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center">
              ChatGPT Reloaded
            </h1>
            <div className="md:flex items-start text-center gap-3.5">
              <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                <h2 className="flex gap-3 items-center m-auto text-lg md:flex-col md:gap-2">
                  <SunIcon className="h-8 w-8" />
                  Examples
                </h2>
                <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                  {/* Make li into buttons that auto inputs prompt */}
                  <li className="infoText">
                    "Explain quantum computing in simple terms"
                  </li>
                  <li className="infoText">
                    "Got any creative ideas for a 10 year old’s birthday?"
                  </li>
                  <li className="infoText">
                    "How do I make an HTTP request in Javascript?"
                  </li>
                </ul>
              </div>
              <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                  <BoltIcon className="h-8 w-8" />
                  Capabilities
                </h2>
                <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                  <li className="infoText">
                    Remembers what user said earlier in the conversation
                  </li>
                  <li className="infoText">
                    Allows user to provide follow-up corrections
                  </li>
                  <li className="infoText">
                    Trained to decline inappropriate requests... unless DAN
                  </li>
                </ul>
              </div>
              <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                  <ExclamationTriangleIcon className="h-8 w-8" />
                  Limitations
                </h2>
                <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                  <li className="infoText">
                    May occasionally generate incorrect information
                  </li>
                  <li className="infoText">
                    May occasionally produce harmful instructions or biased
                    content
                  </li>
                  <li className="infoText">
                    Limited knowledge of world and events after 2021
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full h-32 md:h-48 flex-shrink-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
