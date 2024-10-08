import React from 'react'
import { Link } from 'lucide-react'

const CrossBookConnections: React.FC = () => {
  const connections = [
    { book: '1984', connection: '与本书的极权主义主题相呼应' },
    { book: '动物农场', connection: '探讨类似的社会批判观点' },
    { book: '美丽新世界', connection: '同样描绘了一个反乌托邦社会' },
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <Link className="w-5 h-5 mr-2 text-blue-500" />
        跨书关联
      </h3>
      <ul className="space-y-2">
        {connections.map((item, index) => (
          <li key={index} className="text-sm">
            <span className="font-medium">{item.book}：</span>
            {item.connection}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CrossBookConnections