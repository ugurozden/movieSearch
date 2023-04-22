import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Movie from './SingleMovie'
import Error from './Error'
import Movies from './Movies'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/movies' element={<Movies/>}/>
				<Route path='/movies/:id' element={<Movie />} />
				<Route path='/*' element={<Error/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
