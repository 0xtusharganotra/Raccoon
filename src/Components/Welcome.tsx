const Welcome = () => {
  return (
    <div className="w-[82%] h-[100%] bg-custom-bg">
      <div className="w-[100%] h-[100%] flex justify-center items-center">
        <div className="w-[50%] h-auto px-4 py-4 bg-black rounded-lg shadow-xl shadow-green-700 text-white flex flex-col items-center item-center mx-auto my-auto justify-center gap-1">
          <img src="assets\Raccoon-logo.png" className="w-[200px]" alt="" />
          <p className="text-2xl">Welcome to Raccoon Chat Rooms</p>
          <p className="text-gray-400 pb-2 text-center">
            Join any chat room to connect with others - learn, share, and
            exchange your experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
