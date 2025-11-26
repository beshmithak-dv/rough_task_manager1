import { useState } from 'react';
import { X, FileText, Clock, Lightbulb, Grid3x3, MoreHorizontal, Paperclip, MessageCircle, Calendar, Users, AlertCircle, Tag } from 'lucide-react';

interface NewTaskModalProps {
  onClose: () => void;
  onCreateTask: (task: {
    name: string;
    description: string;
    status: string;
    dueDate: string;
    priority: string;
    tags: string[];
  }) => void;
}

export function NewTaskModal({ onClose, onCreateTask }: NewTaskModalProps) {
  const [activeTab, setActiveTab] = useState('task');
  const [selectedList, setSelectedList] = useState('');
  const [taskType, setTaskType] = useState('Task');
  const [taskName, setTaskName] = useState('');
  const [showDescription, setShowDescription] = useState(false);
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('OPEN');
  const [assignee, setAssignee] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');

  const handleCreateTask = () => {
    if (taskName.trim()) {
      onCreateTask({
        name: taskName,
        description,
        status,
        dueDate,
        priority,
        tags
      });
      onClose();
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput('');
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-4 flex-1">
            <div className="flex gap-1">
              {['task', 'doc', 'reminder', 'whiteboard', 'dashboard'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition ${
                    activeTab === tab
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            <div className="flex gap-4">
              <select
                value={selectedList}
                onChange={(e) => setSelectedList(e.target.value)}
                className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:bg-white transition"
              >
                <option value="">Select List…</option>
                <option value="personal">Personal</option>
                <option value="work">Work</option>
                <option value="projects">Projects</option>
              </select>

              <select
                value={taskType}
                onChange={(e) => setTaskType(e.target.value)}
                className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:bg-white transition"
              >
                <option value="Task">Task</option>
                <option value="Bug">Bug</option>
                <option value="Feature">Feature</option>
              </select>
            </div>

            <div>
              <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Task Name or type '/' for commands"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition font-medium"
              />
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showDescription}
                  onChange={(e) => setShowDescription(e.target.checked)}
                  className="w-4 h-4 rounded border-2 border-gray-300 text-blue-500 focus:outline-none"
                />
                <span className="text-sm font-medium text-gray-700">Add description</span>
              </label>

              {showDescription && (
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Write your description here..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition resize-none"
                  rows={4}
                />
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 font-medium text-sm hover:bg-blue-50 hover:border-blue-300 transition">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                {status}
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 font-medium text-sm hover:bg-blue-50 hover:border-blue-300 transition">
                <Users className="w-4 h-4" />
                Assignee
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 font-medium text-sm hover:bg-blue-50 hover:border-blue-300 transition">
                <Calendar className="w-4 h-4" />
                Due date
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 font-medium text-sm hover:bg-blue-50 hover:border-blue-300 transition">
                <AlertCircle className="w-4 h-4" />
                Priority
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 font-medium text-sm hover:bg-blue-50 hover:border-blue-300 transition">
                <Tag className="w-4 h-4" />
                Tags
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 font-medium text-sm hover:bg-blue-50 hover:border-blue-300 transition">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 bg-gray-50 px-6 py-4 flex items-center justify-between">
          <button className="text-gray-700 font-medium text-sm hover:text-gray-900 transition">
            Templates
          </button>

          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-800 transition p-2">
              <Paperclip className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-gray-800 transition p-2">
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>

          <button
            onClick={handleCreateTask}
            disabled={!taskName.trim()}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-medium text-sm transition"
          >
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
}
