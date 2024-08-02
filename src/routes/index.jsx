/* Routes/index.jsx */

import { Navigate, Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { News } from '../pages/News'
import { NewsContent } from '../pages/NewsContent'
import { NotFound } from '../pages/NotFound'

import data from '../constants/news.json'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News data={data} />} />
      <Route path="/news/:id" element={<NewsContent data={data} />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  )
}
