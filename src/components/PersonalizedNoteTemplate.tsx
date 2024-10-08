import React, { useState } from 'react'
import { FileText } from 'lucide-react'

const templates = [
  { name: '小说分析', content: '1. 情节概要\n2. 人物分析\n3. 主题探讨\n4. 写作技巧赏析\n5. 个人感悟' },
  { name: '学术著作', content: '1. 核心论点\n2. 研究方法\n3. 关键数据/发现\n4. 批评性思考\n5. 应用价值' },
  { name: '自助类书籍', content: '1. 主要观点\n2. 实用技巧\n3. 案例分析\n4. 个人行动计划\n5. 预期效果' },
]

const PersonalizedNoteTemplate: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0])

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <FileText className="w-5 h-5 mr-2 text-teal-500" />
        个性化阅读笔记模板
      </h3>
      <select
        value={selectedTemplate.name}
        onChange={(e) => setSelectedTemplate(templates.find(t => t.name === e.target.value) || templates[0])}
        className="w-full p-2 mb-2 border rounded"
      >
        {templates.map((template) => (
          <option key={template.name} value={template.name}>{template.name}</option>
        ))}
      </select>
      <textarea
        value={selectedTemplate.content}
        readOnly
        className="w-full h-32 p-2 border rounded text-sm"
      />
    </div>
  )
}

export default PersonalizedNoteTemplate