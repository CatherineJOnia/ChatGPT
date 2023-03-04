'use client'

import NewChat from "./NewChat"
import { useSession, signOut } from "next-auth/react";
import DevelopedBy from "./DevelopedBy";

function SideBar() {
  const { data: session } = useSession();

  return (
  <div id="side-bar" className="p-2 flex flex-col h-screen">
    <div className="flex-1">
      <div>
        <NewChat />

        <div>
          {/* Model Selection */}
        </div>

        {/* Map through the ChatRows */}

      </div>
      </div>


    {session && (
        <div className="flex flex-col justify-between items-center mb-[10vh] md:mb-[3vh] h-auto">
          <img
            src={
              session?.user?.image! ||
              `https://ui-avatars.com/api/?name=${session?.user?.name} `
            }
            alt="profile pic"
            className="h-13 w-13 md:h-15 md:w-15 rounded-full mx-auto"
          />
          <div className="w-15 h-15 py-2 px-6 text-sm rounded-lg text-white my-5 border border-gray-700  hover:bg-gray-700/70 transition-all duration-200 ease-outrounded-lg ">
            <button onClick={() => signOut()}>Sign Out</button>
          </div>
          <div>
            <DevelopedBy />
          </div>
        </div>
    )}
  </div>
  )
}

export default SideBar;
