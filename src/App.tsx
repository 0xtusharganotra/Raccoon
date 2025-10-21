import Sidebar from "./Components/Sidebar";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="h-[30px] w-[100%] bg-black text-white flex items-center justify-center">
        <p className=" text-sm ">
          Raccoon is in the alpha stage. Please report any bugs you find to the
          <span className="pl-1 font-bold">
            <a href="https://github.com/0xtusharganotra">developer</a>
          </span>
          . Thank you!
        </p>
      </div>
      <div className="flex max-w-[100vw]  h-[calc(100vh-30px)] m-auto">
        <Sidebar />
        <Welcome />
      </div>
    </div>
  );
}

export default App;
