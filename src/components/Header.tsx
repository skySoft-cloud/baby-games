import { Baby, Sparkles, List } from 'lucide-react'
import { cn } from '../lib/utils'
import type { View } from '../App'

interface HeaderProps {
  currentView: View
  onNavigate: (view: View) => void
}

export function Header({ currentView, onNavigate }: HeaderProps) {
  return (
    <header className="pt-8 pb-6">
      {/* Logo */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="relative animate-bounce-soft">
          <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center shadow-lg border-2 border-indigo-100">
            <Baby className="w-8 h-8 text-white drop-shadow-sm" />
          </div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center shadow-sm border-2 border-white animate-pulse">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gradient-indigo text-shadow">宝宝游戏时间</h1>
          <p className="text-xs text-muted-foreground">每天一个亲子小游戏</p>
        </div>
      </div>

      {/* 导航 */}
      <nav className="flex justify-center gap-4">
        <button
          onClick={() => onNavigate('picker')}
          className={cn(
            "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 press-effect",
            currentView === 'picker'
              ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg border-2 border-indigo-200"
              : "bg-card text-muted-foreground hover:bg-muted border-2 border-muted clay-raised"
          )}
        >
          <Sparkles size={18} />
          抽游戏
        </button>
        <button
          onClick={() => onNavigate('list')}
          className={cn(
            "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 press-effect",
            currentView === 'list'
              ? "bg-gradient-to-r from-accent to-primary text-accent-foreground shadow-lg border-2 border-orange-200"
              : "bg-card text-muted-foreground hover:bg-muted border-2 border-muted clay-raised"
          )}
        >
          <List size={18} />
          全部游戏
        </button>
      </nav>
    </header>
  )
}
