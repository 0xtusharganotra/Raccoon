import Send from "@/icons/Send";
import { useRef } from "react";

const Chatroom = ({
  message,
  setusermessage,
}: {
  message: string[];
  setusermessage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const wsref = useRef<HTMLInputElement | null>(null);

  function updatesetusermessage() {
    if (wsref.current) {
      //@ts-ignore
      setusermessage(wsref.current.value);
      wsref.current.value = ""; // optional: clear input after sending
    }
  }

  return (
    <div className="w-[82%] h-[100%] bg-custom-bg flex flex-col">
      <div></div>
      <div className="w-full h-[calc(100%-40px)] pt-4">
        {message.map((m: string, id: number) => (
          <div key={id} className=" w-[100%] text-white flex items-center pl-4">
            <div className="w-[38px] h-[38px] bg-[#122809] rounded-4xl flex justify-center items-center ">
              <p className="text-gray-400 text-xl">T</p>
            </div>
            <div className=" inline-block max-w-[60%] px-3 py-2 bg-black mx-2 my-2 rounded-xl text-white">
              {m}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-0 mb-4 h-[40px] flex justify-around">
        <div className="w-[90%] h-[40px] bg-[#111111] rounded-xl px-4 flex justify-between items-center">
          <input
            type="text"
            className="w-[70%] h-[30px] text-gray-300 outline-none "
            placeholder="Enter text here..."
            ref={wsref}
          />
          <button className="cursor-pointer" onClick={updatesetusermessage}>
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatroom;
