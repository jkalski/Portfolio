import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';
import { FiMinus, FiMaximize2, FiX } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 p-1 sm:p-3 md:p-4 lg:p-6">
      <div className="w-full h-[98vh] sm:h-auto sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto bg-gray-900/90 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-gray-800/50">
        {/* Window Header */}
        <div className="flex items-center justify-between px-3 py-2 bg-gray-900/95 border-b border-gray-800/50 backdrop-blur-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/90 hover:bg-red-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/90 hover:bg-yellow-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-500/90 hover:bg-green-500 transition-colors" />
          </div>
          <div className="text-sm text-gray-400 font-medium">portfolio.app</div>
          <div className="flex items-center space-x-2">
            <button className="p-1.5 hover:bg-gray-800/80 rounded-lg transition-colors">
              <FiMinus className="w-4 h-4" />
            </button>
            <button className="p-1.5 hover:bg-gray-800/80 rounded-lg transition-colors">
              <FiMaximize2 className="w-4 h-4" />
            </button>
            <button className="p-1.5 hover:bg-gray-800/80 rounded-lg transition-colors">
              <FiX className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* App Content */}
        <div className="flex flex-col lg:flex-row h-[calc(100vh-8rem)] sm:h-[calc(95vh-8rem)]">
          <Sidebar />
          <main className="flex-1 overflow-y-auto overflow-x-hidden">
            <MainContent />
          </main>
        </div>
      </div>
    </div>
  );
}
