import React, { useState } from 'react'
import { Eye } from 'lucide-react'

const perspectives = [
  { name: '历史视角', description: '探讨作品的历史背景和影响' },
  { name: '文学视角', description: '分析作品的文学技巧和风格' },
  { name: '心理学视角', description: '解析人物心理和行为动机' },
  { name: '社会学视角', description: '考察作品反映的社会问题和现象' },
]

const MultiPerspectiveReading: React.FC = () => {
  const [activePerspective, setActivePerspective] = useState(perspectives[0])

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <Eye className="w-5 h-5 mr-2 text-indigo-500" />
        多角度阅读视角
      </h3>
      <div className="flex flex-wrap gap-2 mb-2">
        {perspectives.map((perspective) => (
          <button
            key={perspective.name}
            onClick={() => setActivePerspective(perspective)}
            className={`px-3 py-1 rounded-full text-sm ${
              activePerspective.name === perspective.name
                ? 'bg-indigo-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {perspective.name}
          </button>
        ))}
      </div>
      <p className="text-sm">{activePerspective.description}</p>
    </div>
  )
}

export default MultiPerspectiveReading