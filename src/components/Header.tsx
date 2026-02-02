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
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-sunny to-primary rounded-2xl flex items-center justify-center shadow-lg">
            <Baby className="w-7 h-7 text-white drop-shadow-sm" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-mint rounded-full flex items-center justify-center shadow-sm">
            <Sparkles className="w-2.5 h-2.5 text-white" />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gradient-warm">宝宝游戏时间</h1>
          <p className="text-xs text-muted-foreground">每天一个亲子小游戏</p>
        </div>
      </div>

      {/* 导航 */}
      <nav className="flex justify-center gap-3">
        <button
          onClick={() => onNavigate('picker')}
          className={cn(
            "flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 press-effect",
            currentView === 'picker'
              ? "bg-gradient-to-r from-primary to-coral text-primary-foreground shadow-lg"
              : "bg-card text-muted-foreground hover:bg-muted border-2 border-muted"
          )}
        >
          <Sparkles size={18} />
          抽游戏
        </button>
        <button
          onClick={() => onNavigate('list')}
          className={cn(
            "flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 press-effect",
            currentView === 'list'
              ? "bg-gradient-to-r from-sky to-mint text-primary-foreground shadow-lg"
              : "bg-card text-muted-foreground hover:bg-muted border-2 border-muted"
          )}
        >
          <List size={18} />
          全部游戏
        </button>
      </nav>
    </header>
  )
}
