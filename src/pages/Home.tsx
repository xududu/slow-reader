import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Clock, Users } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">欢迎来到慢读书</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<BookOpen className="w-12 h-12 text-blue-500" />}
          title="深度阅读"
          description="通过慢读方法，深入理解和欣赏每一本书。"
        />
        <FeatureCard
          icon={<Clock className="w-12 h-12 text-green-500" />}
          title="进度跟踪"
          description="设置阅读目标，追踪你的阅读进度和习惯。"
        />
        <FeatureCard
          icon={<Users className="w-12 h-12 text-purple-500" />}
          title="读者社区"
          description="与其他读者分享见解，参与讨论和读书会。"
        />
      </div>
      <div className="text-center mt-8">
        <Link to="/books" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          开始阅读
        </Link>
      </div>
    </div>
  )
}

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default Home