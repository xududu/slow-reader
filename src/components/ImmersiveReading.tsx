import React, { useState } from 'react'
import { Headphones, Play, Pause } from 'lucide-react'

const ImmersiveReading: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <Headphones className="w-5 h-5 mr-2 text-indigo-500" />
        沉浸式朗读体验
      </h3>
      <div className="flex items-center justify-between">
        <span className="text-sm">当前章节：第一章 开端</span>
        <button
          onClick={togglePlayPause}
          className="bg-indigo-500 text-white p-2 rounded-full hover:bg-indigo-600"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      </div>
    </div>
  )
}

export default ImmersiveReading