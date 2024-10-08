import React, { useState } from 'react'
import { List, Plus } from 'lucide-react'

const KeyConceptExtractor: React.FC = () => {
  const [concepts, setConcepts] = useState<string[]>([
    '主人公的成长',
    '社会变革的影响',
    '家庭关系的复杂性'
  ])
  const [newConcept, setNewConcept] = useState('')

  const addConcept = () => {
    if (newConcept.trim()) {
      setConcepts([...concepts, newConcept.trim()])
      setNewConcept('')
    }
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <List className="w-5 h-5 mr-2 text-green-500" />
        关键概念提炼
      </h3>
      <ul className="list-disc list-inside mb-2">
        {concepts.map((concept, index) => (
          <li key={index} className="text-sm">{concept}</li>
        ))}
      </ul>
      <div className="flex mt-2">
        <input
          type="text"
          value={newConcept}
          onChange={(e) => setNewConcept(e.target.value)}
          placeholder="添加新概念..."
          className="flex-grow border rounded-l px-2 py-1 text-sm"
        />
        <button
          onClick={addConcept}
          className="bg-green-500 text-white px-3 py-1 rounded-r hover:bg-green-600"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default KeyConceptExtractor