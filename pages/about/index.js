import Head from 'next/head'
import Image from 'next/image'

export default function About() {
  return (
	 <>
		<Head>
		  <title>About MB</title>
		  <meta name="description" content="This is the about description" />
		  <meta name="keywords" content="about keyword1, about keyword 2" />
		</Head>

		<div className="container-content">
		  <h1>
			About Us
		  </h1>
		  <h2>Our Company</h2>
		  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ullamcorper sem, at pharetra odio. Etiam non lacus eget libero gravida convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis feugiat nulla mattis orci porta, sed maximus tortor malesuada. Aenean porta mollis pellentesque. Maecenas condimentum egestas elit vitae mattis. Curabitur a finibus purus, vitae eleifend eros. Suspendisse sem est, venenatis in volutpat vel, ultricies eget lectus. In massa velit, fringilla non nisl id, sollicitudin lobortis massa. Duis eu purus at justo tincidunt convallis. Sed et auctor neque, ut consequat massa. Vestibulum quis auctor enim. Morbi rutrum auctor eros, vel euismod odio. Mauris erat lectus, imperdiet ut lectus a, porta vestibulum nisl. Nunc scelerisque urna eu luctus sagittis. Maecenas blandit nunc ut congue pellentesque.</p>
		</div>
	 </>
  )
}
