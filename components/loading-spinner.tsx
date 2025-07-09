export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-[#050b2c]">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500 rounded-full opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    </div>
  )
}
