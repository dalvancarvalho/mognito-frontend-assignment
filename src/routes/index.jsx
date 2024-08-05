/* Routes/index.jsx */

import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { News } from '../pages/News'
import { NewsContent } from '../pages/NewsContent'

import jsonData from '../constants/data.json'

export function AppRoutes() {
  // Defines the routes of the application

  const [news, setNews] = useState([])

  useEffect(() => setNews(jsonData.news), [])

  return (
    <Routes>
      <Route path="/" element={<News news={news} />} />
      <Route path="/:id" element={<NewsContent news={news} />} />
    </Routes>
  )
}
