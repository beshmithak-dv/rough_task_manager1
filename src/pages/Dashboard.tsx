import { useState } from 'react';
import { Plus } from 'lucide-react';

export function Dashboard({ onNavigate }: { onNavigate: (page: 'home') => void }) {
  const [tasks, setTasks] = useState([
    'Finish homework',
    'Call John',
    'Buy groceries'
  ]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-300 to-white flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
              Your Tasks
            </h1>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-8 space-y-8">
            <div className="space-y-4">
              <ul className="space-y-3">
                {tasks.map((task, index) => (
                  <li key={index} className="flex items-center gap-3 text-blue-900 text-lg">
                    <span className="text-2xl font-bold text-blue-600">{index + 1}.</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t-2 border-blue-200 pt-8">
              <form onSubmit={handleAddTask} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">
                    New Task
                  </label>
                  <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="What needs to be done?"
                    className="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all duration-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Add Task
                </button>
              </form>
            </div>

            <div className="border-t-2 border-blue-200 pt-8">
              <button
                onClick={() => onNavigate('home')}
                className="w-full px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white/10 backdrop-blur-sm py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-6 text-white/80 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Help</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
