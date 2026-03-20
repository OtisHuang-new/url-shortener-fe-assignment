export default function Input_card() {
  return (
    <div className="w-[50vw] h-[20vh] shadow-[0px_0px_50px_rgba(0,0,0,0.25)] rounded-[10px] flex items-center justify-center">
      <div className="w-full">
        <p className="font-semibold text-[20px] text-primary-500">Your long URL</p>
        <div className="flex flex-row w-full ">
          <div className="flex flex-row w-[80%] border border-gray-400 divide-x divide-gray-400">
            <p>Hello</p>
            <input placeholder="Input URL here"></input>
          </div>
          <button className="w-[15%] bg-blue-400">hi</button>
        </div>
      </div>
    </div>
  )
}
