import React, { useState } from 'react'
import { MessageSquare, Plus } from 'lucide-react'

interface Annotation {
  id: number
  user: string
  content: string
}

const CollaborativeAnnotation: React.FC = () => {
  const [annotations, setAnnotations] = useState<Annotation[]>([
    { id: 1, user: '用户A', content: '这段描述非常生动。' },
    { id: 2, user: '用户B', content: '我觉得作者在这里暗示了...' },
  ])
  const [newAnnotation, setNewAnnotation] = useState('')

  const addAnnotation = () => {
    if (newAnnotation.trim()) {
      setAnnotations([
        ...annotations,
        { id: annotations.length + 1, user: '我', content: newAnnotation.trim() },
      ])
      setNewAnnotation('')
    }
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <MessageSquare className="w-5 h-5 mr-2 text-blue-500" />
        协作式注释系统
      </h3>
      <div className="space-y-2 mb-4">
        {annotations.map(annotation => (
          <div key={annotation.id} className="bg-gray-100 p-2 rounded">
            <span className="font-medium">{annotation.user}：</span>
            <span>{annotation.content}</span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={newAnnotation}
          onChange={(e) => setNewAnnotation(e.target.value)}
          placeholder="添加新注释..."
          className="flex-grow border rounded-l px-2 py-1"
        />
        <button
          onClick={addAnnotation}
          className="bg-blue-500 text-white px-3 py-1 rounded-r hover:bg-blue-600"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default CollaborativeAnnotation