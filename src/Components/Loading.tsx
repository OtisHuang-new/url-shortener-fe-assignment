export default function Loading() {
  return (
    <div className="relative w-100 h-117 z-31 bg-white shadow-[0px_0px_50px_rgba(0,0,0,0.25)] rounded-[10px] flex flex-col items-center justify-center ">
      <p className=" font-sans text-primary-500 text-5xl font-bold">Processing...</p>
      <img src="/Loading_icon.svg" />
    </div>
  )
}
