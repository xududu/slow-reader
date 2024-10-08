import React from 'react'
import { Link } from 'react-router-dom'
import { Book } from 'lucide-react'

interface BookProps {
  id: number
  title: string
  author: string
  coverUrl: string
}

const books: BookProps[] = [
  {
    id: 1,
    title: "百年孤独",
    author: "加西亚·马尔克斯",
    coverUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    title: "1984",
    author: "乔治·奥威尔",
    coverUrl: "https://images.unsplash.com/photo-1518281420975-50db6e5d0a97?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    title: "三体",
    author: "刘慈欣",
    coverUrl: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 4,
    title: "追风筝的人",
    author: "卡勒德·胡赛尼",
    coverUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
]

const BookCard: React.FC<BookProps> = ({ id, title, author, coverUrl }) => {
  return (
    <Link to={`/read/${id}`} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={coverUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-600">{author}</p>
      </div>
    </Link>
  )
}

const BookSelection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 flex items-center">
        <Book className="w-8 h-8 mr-2 text-blue-500" />
        选择书籍
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  )
}

export default BookSelection