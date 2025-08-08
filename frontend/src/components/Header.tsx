export default function Header(){
	const scrollToSpot = (pixels: number): void => {
		window.scrollTo({ top: pixels, behavior: 'smooth'});
	}

	const openJobsPage = () => {
		window.location.href='/Jobs'
	}

	return (
		<div className={`flex flex-row w-full justify-between h-12 px-2`}>

			{/* UI Change button */}
			<div className="flex w-30 justify-center">
				<button className={`transition-all cursor-pointer font-medium duration-200 self-center px-2 py-1 bg-purple-600 rounded-lg active:bg-purple-900`}>Button</button>
			</div>

			{/* Middle */}
			<div className="flex flex-row items-center text-white">
				<div className="w-18 text-center"><a onClick={() => scrollToSpot(700)} className={`inline-block mx-2 cursor-pointer font-bold text-lg transition-all  duration-300 hover:scale-125 `}>Games</a></div>
				<div className="w-18 text-center"><a onClick={() => scrollToSpot(950)} className={`inline-block mx-2 cursor-pointer font-bold text-lg transition-all duration-300 hover:scale-125 `}>Team</a></div>
				<div className="w-18 text-center"><a onClick={openJobsPage} className={`inline-block mx-2 cursor-pointer font-bold text-lg transition-all duration-300 hover:scale-125`}>Jobs</a></div>
			</div>

			{/* Icons */}
			<div className="flex justify-center w-30">
				<a className="self-center cursor-pointer" href="mailto:tbspgames@gmail.com"><img src="" className={`h-9 object-contain transition-all duration-300 hover:scale-125 mr-2`} ></img>Hi</a>
				<a className="self-center cursor-pointer" href="https://tbspgames.itch.io/"><img src="" className={`h-6 object-contain transition-all duration-300 hover:scale-125 `} ></img>Hi</a>
			</div>
		</div>
	)
}
