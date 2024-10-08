import React from 'react'
import { BarChart, BookOpen, Clock } from 'lucide-react'

const Profile: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">个人中心</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
            阅读统计
          </h2>
          <ul className="space-y-2">
            <li>总阅读书籍: 12 本</li>
            <li>本月阅读页数: 450 页</li>
            <li>阅读时长: 65 小时</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-green-500" />
            阅读目标
          </h2>
          <div className="space-y-4">
            <div>
              <p className="mb-1">每日阅读目标: 30 页</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div>
              <p className="mb-1">每周阅读时间: 10 小时</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <BarChart className="w-5 h-5 mr-2 text-purple-500" />
            阅读习惯报告
          </h2>
          <p className="text-gray-600 mb-4">这里将显示你的阅读习惯图表和分析。</p>
          {/* 这里可以添加更详细的图表组件 */}
        </div>
      </div>
    </div>
  )
}

export default Profile