export default function HomePage(){
	return (
		<div className={`flex flex-col items-center min-h-screen w-200 mx-auto py-20 bg-zinc-900`}>

			{/* About */}
			<div className={`w-150 p-3 mx-20 my-8`}>
				<h1 className={`text-3xl`}>About</h1>
				<div className={`h-1 my-3`}></div>
				<p>
					Founded in 2025 in Toronto, Canada, tbsp games is a team of diverse, 
					international creatives that have a love and passion for making games that are not too big, and not too small.
				</p>
			</div>
		</div>
	)
}
