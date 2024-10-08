import React from 'react'
import { Users, MessageCircle, Calendar } from 'lucide-react'

const Community: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">读者社区</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <MessageCircle className="w-5 h-5 mr-2 text-blue-500" />
            热门讨论
          </h2>
          <ul className="space-y-4">
            <DiscussionItem
              title="《百年孤独》的魔幻现实主义手法"
              author="文学爱好者"
              replies={23}
            />
            <DiscussionItem
              title="如何提高阅读效率？"
              author="学习达人"
              replies={45}
            />
            <DiscussionItem
              title="科幻小说推荐"
              author="星际旅行者"
              replies={17}
            />
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-green-500" />
            即将举行的读书会
          </h2>
          <ul className="space-y-4">
            <ReadingGroupItem
              title="《1984》读书讨论"
              date="2024-04-15"
              participants={12}
            />
            <ReadingGroupItem
              title="日本文学赏析"
              date="2024-04-22"
              participants={8}
            />
            <ReadingGroupItem
              title="经典名著重读"
              date="2024-04-29"
              participants={15}
            />
          </ul>
        </div>
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Users className="w-5 h-5 mr-2 text-purple-500" />
          阅读小组
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ReadingGroupCard
            name="文学爱好者"
            members={56}
            description="探讨各国文学作品，分享阅读心得。"
          />
          <ReadingGroupCard
            name="科技前沿"
            members={38}
            description="关注最新科技书籍，了解前沿科技动态。"
          />
          <ReadingGroupCard
            name="哲学思考"
            members={27}
            description="深入探讨哲学著作，交流思想见解。"
          />
        </div>
      </div>
    </div>
  )
}

const DiscussionItem: React.FC<{ title: string; author: string; replies: number }> = ({ title, author, replies }) => (
  <li className="border-b pb-2">
    <h3 className="font-medium">{title}</h3>
    <p className="text-sm text-gray-600">
      由 {author} 发起 · {replies} 条回复
    </p>
  </li>
)

const ReadingGroupItem: React.FC<{ title: string; date: string; participants: number }> = ({ title, date, participants }) => (
  <li className="border-b pb-2">
    <h3 className="font-medium">{title}</h3>
    <p className="text-sm text-gray-600">
      日期: {date} · {participants} 人参与
    </p>
  </li>
)

const ReadingGroupCard: React.FC<{ name: string; members: number; description: string }> = ({ name, members, description }) => (
  <div className="border rounded-lg p-4">
    <h3 className="font-semibold mb-2">{name}</h3>
    <p className="text-sm text-gray-600 mb-2">{members} 位成员</p>
    <p className="text-sm">{description}</p>
  </div>
)

export default Community