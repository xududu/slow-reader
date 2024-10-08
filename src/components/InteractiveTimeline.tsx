import React from 'react'
import { Clock } from 'lucide-react'

interface TimelineEvent {
  date: string
  title: string
  description: string
}

const events: TimelineEvent[] = [
  { date: '1564', title: '莎士比亚出生', description: '威廉·莎士比亚出生于英格兰斯特拉特福德' },
  { date: '1582', title: '结婚', description: '与安妮·海瑟薇结婚' },
  { date: '1592', title: '戏剧事业开始', description: '在伦敦开始他的戏剧事业' },
  { date: '1599', title: '环球剧场建成', description: '参与建造著名的环球剧场' },
  { date: '1616', title: '莎士比亚去世', description: '在斯特拉特福德去世，享年52岁' },
]

const InteractiveTimeline: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Clock className="w-5 h-5 mr-2 text-blue-500" />
        互动式时间线
      </h3>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex">
            <div className="flex-shrink-0 w-24 text-sm font-semibold">{event.date}</div>
            <div className="flex-grow pl-4 border-l border-gray-300">
              <h4 className="text-md font-semibold">{event.title}</h4>
              <p className="text-sm text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InteractiveTimeline