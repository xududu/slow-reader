import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { BookOpen, Clock, MessageSquare } from 'lucide-react'
import MoodTracker from '../components/MoodTracker'
import InteractiveTimeline from '../components/InteractiveTimeline'
import ConceptMap from '../components/ConceptMap'
import SoundscapeCustomizer from '../components/SoundscapeCustomizer'
import ReadingChallenge from '../components/ReadingChallenge'
import ImmersiveReading from '../components/ImmersiveReading'
import CollaborativeAnnotation from '../components/CollaborativeAnnotation'
import ReadingSpeedAdjuster from '../components/ReadingSpeedAdjuster'
import KeyConceptExtractor from '../components/KeyConceptExtractor'
import ComprehensionCheckpoint from '../components/ComprehensionCheckpoint'
import PersonalizedReviewReminder from '../components/PersonalizedReviewReminder'
import MultiPerspectiveReading from '../components/MultiPerspectiveReading'
import PracticalApplicationSuggestions from '../components/PracticalApplicationSuggestions'
import PersonalizedNoteTemplate from '../components/PersonalizedNoteTemplate'
import CrossBookConnections from '../components/CrossBookConnections'
import AudioSummary from '../components/AudioSummary'
import VocabularyLearningPlan from '../components/VocabularyLearningPlan'

const ReadingPage: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>()
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages] = useState(100)
  const [notes, setNotes] = useState<string>('')

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
  }

  const handleNotesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(event.target.value)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">书名 (ID: {bookId})</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                <span>页码: {currentPage} / {totalPages}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-green-500" />
                <span>阅读时间: 00:30:00</span>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-md mb-4" style={{ minHeight: '300px' }}>
              <p>这里是书籍的内容...</p>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:bg-gray-300"
              >
                上一页
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:bg-gray-300"
              >
                下一页
              </button>
            </div>
          </div>
          <ReadingSpeedAdjuster />
          <KeyConceptExtractor />
          <ComprehensionCheckpoint />
          <MultiPerspectiveReading />
          <PracticalApplicationSuggestions />
          <PersonalizedNoteTemplate />
          <CrossBookConnections />
          <InteractiveTimeline />
          <ConceptMap />
          <CollaborativeAnnotation />
        </div>
        <div className="space-y-6">
          <MoodTracker />
          <SoundscapeCustomizer />
          <ReadingChallenge />
          <ImmersiveReading />
          <PersonalizedReviewReminder />
          <AudioSummary />
          <VocabularyLearningPlan />
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2 text-purple-500" />
              笔记
            </h2>
            <textarea
              value={notes}
              onChange={handleNotesChange}
              className="w-full h-32 p-2 border border-gray-300 rounded-md"
              placeholder="在这里添加你的笔记..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadingPage