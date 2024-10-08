import React from 'react'
import { Link } from 'react-router-dom'
import { Book, User, Users } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">慢读书</Link>
        <div className="flex space-x-4">
          <Link to="/" className="flex items-center text-gray-600 hover:text-blue-600">
            <Book className="w-5 h-5 mr-1" />
            <span>阅读</span>
          </Link>
          <Link to="/profile" className="flex items-center text-gray-600 hover:text-blue-600">
            <User className="w-5 h-5 mr-1" />
            <span>个人中心</span>
          </Link>
          <Link to="/community" className="flex items-center text-gray-600 hover:text-blue-600">
            <Users className="w-5 h-5 mr-1" />
            <span>社区</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header