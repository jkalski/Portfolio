import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';
import { FiMinus, FiMaximize2, FiX } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="flex justify-center p-0 min-h-screen bg-gray-950 sm:p-2 md:p-4 lg:p-6">
      <div className="w-full max-w-7xl bg-gray-900/90 backdrop-blur-xl sm:rounded-2xl shadow-2xl overflow-hidden sm:border border-gray-800/50">
        {/* Window Header - Hide on mobile */}
        <div className="hidden sm:flex items-center justify-between px-4 py-2 bg-gray-900/95 border-b border-gray-800/50 backdrop-blur-sm">
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
        <div className="flex flex-col lg:flex-row h-full">
          <Sidebar />
          <main className="flex-1 p-2 md:p-4 lg:p-6 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-2.5rem)] sm:max-h-[calc(100vh-3.5rem)]">
            <MainContent />
          </main>
        </div>
      </div>
    </div>
  );
}
