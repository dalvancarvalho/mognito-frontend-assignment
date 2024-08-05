/* Routes/index.jsx */

import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { News } from '../pages/News'
import { NewsContent } from '../pages/NewsContent'
import { NotFound } from '../pages/NotFound'

import jsonData from '../constants/data.json'

export function AppRoutes() {
  // Defines the routes of the application

  const [news, setNews] = useState([])

  useEffect(() => setNews(jsonData.news), [])

  return (
    <Routes>
      <Route path="/" element={<News news={news} />} />
      <Route path="/:id" element={<NewsContent news={news} />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  )
}
