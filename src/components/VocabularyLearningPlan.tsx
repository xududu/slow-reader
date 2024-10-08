import React, { useState } from 'react'
import { BookOpen, Plus } from 'lucide-react'

const VocabularyLearningPlan: React.FC = () => {
  const [words, setWords] = useState(['ephemeral', 'ubiquitous', 'paradigm'])
  const [newWord, setNewWord] = useState('')

  const addWord = () => {
    if (newWord.trim()) {
      setWords([...words, newWord.trim()])
      setNewWord('')
    }
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <BookOpen className="w-5 h-5 mr-2 text-green-500" />
        个性化词汇学习计划
      </h3>
      <ul className="list-disc list-inside mb-2">
        {words.map((word, index) => (
          <li key={index} className="text-sm">{word}</li>
        ))}
      </ul>
      <div className="flex mt-2">
        <input
          type="text"
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
          placeholder="添加新词汇..."
          className="flex-grow border rounded-l px-2 py-1 text-sm"
        />
        <button
          onClick={addWord}
          className="bg-green-500 text-white px-3 py-1 rounded-r hover:bg-green-600"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default VocabularyLearningPlan