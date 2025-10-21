import Send from "@/icons/Send";

const Chatroom = () => {
  return (
    <div className="w-[82%] h-[100%] bg-custom-bg flex flex-col">
      <div></div>
      <div className="w-full h-[calc(100%-40px)]"></div>
      <div className="mt-0 mb-4 h-[40px] flex justify-around">
        <div className="w-[90%] h-[40px] bg-[#111111] rounded-xl px-4 flex justify-between items-center">
          <input
            type="text"
            className="w-[70%] h-[30px] text-gray-300 outline-none "
            placeholder="Enter text here..."
          />
          <button className="cursor-pointer">
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatroom;
