import React, { useState } from 'react'
import { Smile, Meh, Frown } from 'lucide-react'

const MoodTracker: React.FC = () => {
  const [mood, setMood] = useState<'happy' | 'neutral' | 'sad' | null>(null)

  const handleMoodChange = (selectedMood: 'happy' | 'neutral' | 'sad') => {
    setMood(selectedMood)
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">心情跟踪器</h3>
      <div className="flex justify-around">
        <button
          onClick={() => handleMoodChange('happy')}
          className={`p-2 rounded-full ${mood === 'happy' ? 'bg-green-100' : ''}`}
        >
          <Smile className={`w-8 h-8 ${mood === 'happy' ? 'text-green-500' : 'text-gray-400'}`} />
        </button>
        <button
          onClick={() => handleMoodChange('neutral')}
          className={`p-2 rounded-full ${mood === 'neutral' ? 'bg-yellow-100' : ''}`}
        >
          <Meh className={`w-8 h-8 ${mood === 'neutral' ? 'text-yellow-500' : 'text-gray-400'}`} />
        </button>
        <button
          onClick={() => handleMoodChange('sad')}
          className={`p-2 rounded-full ${mood === 'sad' ? 'bg-red-100' : ''}`}
        >
          <Frown className={`w-8 h-8 ${mood === 'sad' ? 'text-red-500' : 'text-gray-400'}`} />
        </button>
      </div>
    </div>
  )
}

export default MoodTracker