import { useState } from 'react'
import { GamePicker } from './components/GamePicker'
import { GameList } from './components/GameList'
import { Header } from './components/Header'

export type View = 'picker' | 'list'

function App() {
  const [currentView, setCurrentView] = useState<View>('picker')

  return (
    <div className="min-h-screen bg-background">
      {/* 装饰性背景 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-sunny/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-48 h-48 bg-sky/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-56 h-56 bg-mint/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-10 w-40 h-40 bg-lavender/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-md mx-auto px-4 pb-8">
        <Header currentView={currentView} onNavigate={setCurrentView} />
        
        {currentView === 'picker' && (
          <GamePicker onViewAll={() => setCurrentView('list')} />
        )}
        
        {currentView === 'list' && (
          <GameList onBack={() => setCurrentView('picker')} />
        )}
      </div>
    </div>
  )
}

export default App
