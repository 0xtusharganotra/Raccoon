import SignOut from "@/icons/SignOut";
import { TextRevealButton } from "./ui/shadcn-io/text-reveal-button";
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = () => {
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="w-[18%] bg-black flex flex-col">
      <div className="logo text-green-500 mt-2 flex items-center lg:text-md text-sm mb-4 justify-center">
        <TextRevealButton text="Raccoon" />
      </div>
      <div className="text-white pl-7 pt-5 flex flex-col gap-4 text-lg cursor-pointer  ">
        <p className="hover:text-xl">#General</p>
        <p className="hover:text-xl">#Chess</p>

        <p className="hover:text-xl">#Development</p>
      </div>
      {isAuthenticated ? (
        <div className="mt-auto pb-4 text-white flex h-[45px] items-center justify-around px-2">
          <div className="bg-white w-[35px] h-[35px] rounded-2xl">
            <img
              src={user?.picture?.replace("http://", "https://")}
              alt={user?.name}
              className="rounded-2xl  h-[35px]"
            />
          </div>
          <div className="w-[60%] flex flex-col ">
            <p className=" text-md line-clamp-1 overflow-ellipsis">
              {user?.name}
            </p>
            <p className=" text-gray-400 text-sm line-clamp-1 overflow-ellipsis">
              {user?.email}
            </p>
          </div>
          <div
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className="cursor-pointer"
          >
            <SignOut />
          </div>
        </div>
      ) : (
        <p className="text-white">Sorry You are not logged in</p>
      )}
    </div>
  );
};

export default Sidebar;
