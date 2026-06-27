import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Person Management System
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            A full-stack CRUD app built with React, ASP.NET Core Web API, and SQL Server.
          </p>
          <Link
            to="/person"
            className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow hover:opacity-90 transition"
          >
            Go to Person Manager →
          </Link>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: '⚛️', title: 'React Frontend', desc: 'Vite-powered React app with React Hook Form and Axios.' },
            { icon: '🔷', title: 'ASP.NET Core API', desc: 'RESTful Web API with full CRUD endpoints and EF Core.' },
            { icon: '🗄️', title: 'SQL Server', desc: 'Persistent data storage with Entity Framework migrations.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
              <p className="text-gray-500 text-sm">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Home