export default function Generaspage() {
  // example-4
  return (
    <div className="flex flex-col gap-6 p-5 bg-amber-200 min-h-screen p-6 items-center justify-center ">
      <div>
        <h1 className="text-primary font-bold text-3xl">
          This is My First Heading
        </h1>
        <div className="flex gap-6 p-6 text-center font-bold text-xs">
          <div className="w-40 h-50 bg-primary p-6">Background primary </div>
          <div className="w-40 h-50 border-primary border p-6">
            Border Primary{" "}
          </div>
          <div className="w-40 h-50 outline-4 outline-primary p-6">
            Outline Primary{" "}
          </div>
          <div className="w-40 h-50 outline-4 bg-secondary p-6">
            Outline secondary{" "}
          </div>
        </div>
      </div>
    </div>
  );

  // example-3 (Grid)
  return (
    <div className="flex bg-amber-200 min-h-screen p-6 items-center justify-center ">
      {/* // Card Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        <div className="text-center h-40 bg-pink-200 items-center justify-center">
          Div1
        </div>
        <div className="text-center h-40 bg-red-500 items-center justify-center">
          Div2
        </div>
        <div className="text-center h-40 bg-purple-200 items-center justify-center">
          Div3
        </div>
        <div className="text-center h-40 bg-blue-200 items-center justify-center">
          Div4
        </div>
        <div className="text-center h-40 bg-yellow-200 items-center justify-center">
          Div5
        </div>
        <div className="text-center h-40 bg-red-200 items-center justify-center">
          Div6
        </div>
        <div className="text-center h-40 bg-green-200 items-center justify-center">
          Div7
        </div>
        <div className="text-center h-40 bg-blue-500 items-center justify-center">
          Div7
        </div>
      </div>
    </div>
  );
  // example-2 flex-box
  // return(
  // <div className="flex flex-col md:flex-row bg-purple-300 min-h-screen">
  //    <div className="h-20 w-28 p-6 bg-green-200 rounded text-center">Div1</div>
  //   <div className="h-20 w-28 p-6 bg-blue-200 rounded text-center">Div2</div>
  //   <div className="h-20 w-28 p-6 bg-pink-200 rounded text-center">Div3</div>
  //   <div className="h-20 w-28 p-6 bg-red-200 rounded text-center">Div4</div>
  //   );
  {
    /* example-1 flex-flex1 */
  }
  {
    /* return(
      <div className="flex flex-col md:flex-row bg-purple-300 min-h-screen items-center justify-center p-6 gap-6  "></div>
      <div className=" flex-1  p-6 bg-green-200 rounded text-center">Div1</div>
      <div className=" flex-3 p-6 bg-blue-200 rounded text-center">Div2</div>
      <div className=" flex-1 p-6 bg-pink-200 rounded text-center">Div3</div>
      <div className=" flex-1 p-6 bg-red-200 rounded text-center">Div4</div>
    </div>
  ); */
  }
}
