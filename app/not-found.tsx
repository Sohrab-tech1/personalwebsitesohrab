import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">404 - Page Not Found</h1>
      <p className="text-xl mb-8 text-gray-600">Oops! The page you're looking for doesn't exist.</p>
      <Link 
        href="/" 
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Go back home
      </Link>
    </div>
  )
}

