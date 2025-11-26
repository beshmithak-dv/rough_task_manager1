import { useState } from 'react';
import { Plus, Search, Bell, HelpCircle, User, Home, Inbox, Users, LayoutGrid, MoreHorizontal, CheckCircle2 } from 'lucide-react';
import { NewTaskModal } from '../components/NewTaskModal';

export function Dashboard({ onNavigate }: { onNavigate: (page: 'home') => void }) {
  const [tasks, setTasks] = useState([
    'Finish homework',
    'Call John',
    'Buy groceries'
  ]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');
  const [activeTab, setActiveTab] = useState<'todo' | 'done' | 'delegated'>('todo');
  const [activeSidebarItem, setActiveSidebarItem] = useState('home');
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const toggleTaskComplete = (task: string) => {
    if (completedTasks.includes(task)) {
      setCompletedTasks(completedTasks.filter(t => t !== task));
    } else {
      setCompletedTasks([...completedTasks, task]);
    }
  };

  const handleCreateTask = (newTaskData: {
    name: string;
    description: string;
    status: string;
    dueDate: string;
    priority: string;
    tags: string[];
  }) => {
    setTasks([...tasks, newTaskData.name]);
  };

  const uncompletedTasks = tasks.filter(t => !completedTasks.includes(t));
  const doneTasksList = tasks.filter(t => completedTasks.includes(t));

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-sm">TM</span>
          </div>
          <span className="text-gray-800 font-semibold text-lg">Task Manager</span>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-gray-700 w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-gray-600 hover:text-gray-800 transition">
            <Bell className="w-5 h-5" />
          </button>
          <button className="text-gray-600 hover:text-gray-800 transition">
            <HelpCircle className="w-5 h-5" />
          </button>
          <button className="text-gray-600 hover:text-gray-800 transition">
            <User className="w-5 h-5" />
          </button>
          <button onClick={() => setShowNewTaskModal(true)} className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium text-sm hover:bg-blue-600 transition">
            New
          </button>
        </div>
      </nav>

      <div className="flex flex-1">
        <aside className="w-64 bg-white border-r border-gray-200 p-4">
          <nav className="space-y-2">
            {[
              { icon: Home, label: 'Home', id: 'home' },
              { icon: Inbox, label: 'Inbox', id: 'inbox' },
              { icon: Users, label: 'Teams', id: 'teams' },
              { icon: LayoutGrid, label: 'Dashboards', id: 'dashboards' },
              { icon: MoreHorizontal, label: 'More', id: 'more' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSidebarItem(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition font-medium text-sm ${
                  activeSidebarItem === item.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-6xl">
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Tasks</h1>
              <p className="text-gray-600 font-medium">Good afternoon, User</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
              <div className="lg:col-span-1">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Recents</h2>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <span className="text-sm">Finish homework</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <span className="text-sm">Call John</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <span className="text-sm">Buy groceries</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Agenda</h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Today</span>
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">3 tasks pending</p>
                        <p className="text-xs text-gray-500">This week</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Stats</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-sm text-gray-600">To Do</span>
                      <span className="font-bold text-lg text-gray-900">{uncompletedTasks.length}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Done</span>
                      <span className="font-bold text-lg text-green-600">{doneTasksList.length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Total</span>
                      <span className="font-bold text-lg text-gray-900">{tasks.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl">
              <div className="border-b border-gray-200">
                <div className="flex gap-8 px-6 pt-6">
                  {['To Do', 'Done', 'Delegated'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab.toLowerCase() as 'todo' | 'done' | 'delegated')}
                      className={`pb-4 font-medium text-sm transition ${
                        activeTab === tab.toLowerCase()
                          ? 'text-blue-600 border-b-2 border-blue-600'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6">
                {activeTab === 'todo' && (
                  <div className="space-y-3">
                    {uncompletedTasks.length > 0 ? (
                      uncompletedTasks.map((task, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition">
                          <button
                            onClick={() => toggleTaskComplete(task)}
                            className="w-5 h-5 rounded border-2 border-blue-300 hover:bg-blue-50 flex items-center justify-center flex-shrink-0 transition"
                          >
                            {completedTasks.includes(task) && (
                              <CheckCircle2 className="w-4 h-4 text-blue-500" />
                            )}
                          </button>
                          <div className="flex-1">
                            <p className="text-gray-900 font-medium">{task}</p>
                            <p className="text-xs text-gray-500">Today</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-center text-gray-500 py-8">No tasks to do</p>
                    )}
                  </div>
                )}

                {activeTab === 'done' && (
                  <div className="space-y-3">
                    {doneTasksList.length > 0 ? (
                      doneTasksList.map((task, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition opacity-75">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <div className="flex-1">
                            <p className="text-gray-500 line-through font-medium">{task}</p>
                            <p className="text-xs text-gray-400">Completed</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-center text-gray-500 py-8">No completed tasks</p>
                    )}
                  </div>
                )}

                {activeTab === 'delegated' && (
                  <p className="text-center text-gray-500 py-8">No delegated tasks</p>
                )}
              </div>
            </div>

            <div className="mt-10 bg-white border border-gray-200 rounded-xl p-6">
              <form onSubmit={handleAddTask} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    New Task
                  </label>
                  <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="What needs to be done?"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium text-sm transition flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add Task
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('home')}
                    className="px-6 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-50 rounded-lg font-medium text-sm transition"
                  >
                    Logout
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>

      {showNewTaskModal && (
        <NewTaskModal
          onClose={() => setShowNewTaskModal(false)}
          onCreateTask={handleCreateTask}
        />
      )}
    </div>
  );
}
