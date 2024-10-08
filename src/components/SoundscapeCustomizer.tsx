import React, { useState } from 'react'
import { Volume2 } from 'lucide-react'

const sounds = [
  { name: '咖啡厅', icon: '☕' },
  { name: '雨声', icon: '🌧️' },
  { name: '壁炉', icon: '🔥' },
  { name: '海浪', icon: '🌊' },
]

const SoundscapeCustomizer: React.FC = () => {
  const [activeSounds, setActiveSounds] = useState<string[]>([])

  const toggleSound = (sound: string) => {
    setActiveSounds(prev =>
      prev.includes(sound)
        ? prev.filter(s => s !== sound)
        : [...prev, sound]
    )
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <Volume2 className="w-5 h-5 mr-2 text-green-500" />
        声音景观定制
      </h3>
      <div className="flex flex-wrap gap-2">
        {sounds.map(sound => (
          <button
            key={sound.name}
            onClick={() => toggleSound(sound.name)}
            className={`px-3 py-1 rounded-full text-sm ${
              activeSounds.includes(sound.name)
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {sound.icon} {sound.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SoundscapeCustomizer