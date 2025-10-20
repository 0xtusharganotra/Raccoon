import SignOut from "@/icons/SignOut";
import { TextRevealButton } from "./ui/shadcn-io/text-reveal-button";

const Sidebar = () => {
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
      <div className="mt-auto pb-4 text-white flex h-[45px] items-center justify-around px-2">
        <div className="bg-white w-[35px] h-[35px] rounded-2xl">
          <img
            src="https://imgcdn.stablediffusionweb.com/2024/4/23/a9a5f67e-9f1d-4016-a272-704305fda53a.jpg"
            className="rounded-2xl"
            alt=""
          />
        </div>
        <div className="w-[60%] flex flex-col ">
          <p className=" text-md line-clamp-1 overflow-ellipsis">Tushar</p>
          <p className=" text-gray-400 text-sm line-clamp-1 overflow-ellipsis">
            ganotra.vox@gmail.com
          </p>
        </div>
        <div className="cursor-pointer">
          <SignOut />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
