import React from 'react'

const About = () => {
  const stack = [
    ['Frontend', 'React 18, Vite, Tailwind CSS, React Hook Form, Axios'],
    ['Backend', 'ASP.NET Core 8 Web API, Entity Framework Core'],
    ['Database', 'SQL Server (LocalDB / MSSQL)'],
    ['API Style', 'RESTful — GET, POST, PUT, DELETE'],
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About
          </h1>
          <p className="text-gray-500 text-lg">
            A learning project demonstrating full-stack integration between a React SPA and a .NET backend.
          </p>
        </div>

        {/* Stack table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-10">
          {stack.map(([layer, detail], i) => (
            <div key={layer} className={`flex px-6 py-4 ${i !== stack.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <span className="w-32 font-semibold text-gray-700 shrink-0">{layer}</span>
              <span className="text-gray-500 text-sm">{detail}</span>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-semibold text-gray-800 mb-4 text-lg">How it works</h2>
          <ol className="space-y-3 text-sm text-gray-500 list-decimal list-inside">
            <li>React app runs on <code className="bg-gray-100 px-1 rounded">localhost:5173</code> via Vite dev server.</li>
            <li>ASP.NET Core API runs on <code className="bg-gray-100 px-1 rounded">localhost:3000</code>, CORS configured for the React origin.</li>
            <li>Axios makes HTTP requests to <code className="bg-gray-100 px-1 rounded">/api/people</code> for all CRUD operations.</li>
            <li>EF Core handles DB queries and maps results to the <code className="bg-gray-100 px-1 rounded">Person</code> model.</li>
          </ol>
        </div>

      </div>
    </div>
  )
}

export default About