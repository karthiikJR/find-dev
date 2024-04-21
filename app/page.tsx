import Link from "next/link";


export default function LandingPage() {
	return (
		<section className="dark:bg-gray-900 bg-sky-200 text-white">
			<div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
				<div className="mx-auto max-w-3xl text-center">
					<h1 className="bg-gradient-to-r dark:from-green-300 from-green-700 via-blue-500 dark:to-purple-600 to-purple-900 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
						Find other awesome developers
						<span className="sm:block"> To Pair with online. </span>
					</h1>

					<p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed dark:text-white text-black">
						This platform is designed to help developers find other developers
						to pair with online so that you can work together.
					</p>

					<div className="mt-8 flex flex-wrap justify-center gap-4">
						<Link
							className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent dark:hover:text-white hover:text-black  focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
							href="/browse"
						>
							Get Started
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
