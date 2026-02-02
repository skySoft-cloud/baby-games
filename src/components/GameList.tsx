import { useState } from 'react'
import { ArrowLeft, Clock, ChevronRight, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { games, categories, type Game } from '../data/games'

interface GameListProps {
  onBack: () => void
}

type CategoryKey = keyof typeof categories | 'all'

export function GameList({ onBack }: GameListProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all')
  const [selectedGame, setSelectedGame] = useState<Game | null>(null)

  const filteredGames = selectedCategory === 'all' 
    ? games 
    : games.filter(g => g.category === selectedCategory)

  const categoryOptions: { key: CategoryKey; name: string; emoji: string }[] = [
    { key: 'all', name: '全部', emoji: '🎮' },
    ...Object.entries(categories).map(([key, val]) => ({
      key: key as CategoryKey,
      name: val.name,
      emoji: val.emoji
    }))
  ]

  return (
    <div className="space-y-4 animate-fade-in">
      {/* 返回按钮 */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft size={20} />
        <span className="text-sm font-medium">返回抽游戏</span>
      </button>

      {/* 标题 */}
      <div className="text-center py-2">
        <h2 className="text-2xl font-bold text-foreground">游戏清单</h2>
        <p className="text-muted-foreground text-sm mt-1">
          共 {games.length} 个游戏，适合 2-3 岁宝宝
        </p>
      </div>

      {/* 分类筛选 */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categoryOptions.map(({ key, name, emoji }) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={cn(
              "flex items-center gap-1.5 px-4 py-2 rounded-2xl text-sm font-medium whitespace-nowrap transition-all press-effect",
              selectedCategory === key
                ? "bg-gradient-to-r from-primary to-coral text-primary-foreground shadow-md"
                : "bg-card text-muted-foreground hover:bg-muted border border-muted"
            )}
          >
            <span>{emoji}</span>
            {name}
            {key !== 'all' && (
              <span className="ml-1 text-xs opacity-70">
                ({games.filter(g => g.category === key).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* 游戏列表 */}
      <div className="space-y-3">
        {filteredGames.map((game, index) => {
          const category = categories[game.category]
          return (
            <button
              key={game.id}
              onClick={() => setSelectedGame(game)}
              className={cn(
                "w-full p-4 rounded-2xl text-left transition-all hover-lift press-effect",
                "bg-card shadow-md border border-muted/50",
                "animate-slide-up"
              )}
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <div className="flex items-center gap-4">
                {/* 图标 */}
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center text-2xl bg-gradient-to-br shadow-sm",
                  category.color
                )}>
                  {game.emoji}
                </div>

                {/* 内容 */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground truncate">{game.name}</h3>
                  <p className="text-sm text-muted-foreground truncate">{game.description}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      {category.emoji} {category.name}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock size={10} />
                      {game.duration}
                    </span>
                  </div>
                </div>

                {/* 箭头 */}
                <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              </div>
            </button>
          )
        })}
      </div>

      {filteredGames.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🔍</div>
          <p className="text-muted-foreground">这个分类暂时没有游戏</p>
        </div>
      )}

      {/* 游戏详情弹窗 */}
      {selectedGame && (
        <GameDetailModal 
          game={selectedGame} 
          onClose={() => setSelectedGame(null)} 
        />
      )}
    </div>
  )
}

interface GameDetailModalProps {
  game: Game
  onClose: () => void
}

function GameDetailModal({ game, onClose }: GameDetailModalProps) {
  const category = categories[game.category]

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-foreground/30 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className={cn(
          "w-full max-w-md max-h-[85vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl shadow-2xl animate-slide-up",
          "bg-gradient-to-br",
          category.color
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 头部 */}
        <div className="sticky top-0 p-4 flex items-center justify-between bg-white/10 backdrop-blur-sm">
          <span className="px-3 py-1 bg-white/20 rounded-full text-primary-foreground text-sm font-medium">
            {category.emoji} {category.name}
          </span>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={20} className="text-primary-foreground" />
          </button>
        </div>

        {/* 内容 */}
        <div className="p-6 pt-2 space-y-5">
          {/* 标题 */}
          <div className="text-center">
            <div className="text-6xl mb-3">{game.emoji}</div>
            <h2 className="text-2xl font-bold text-primary-foreground">{game.name}</h2>
            <p className="text-primary-foreground/80 mt-2">{game.description}</p>
            <div className="flex items-center justify-center gap-1 mt-2 text-primary-foreground/70 text-sm">
              <Clock size={14} />
              {game.duration}
            </div>
          </div>

          {/* 玩法步骤 */}
          <div className="p-4 bg-white/10 rounded-2xl">
            <h3 className="font-bold text-primary-foreground mb-3">🎯 怎么玩</h3>
            <ol className="space-y-2">
              {game.howToPlay.map((step, i) => (
                <li key={i} className="flex gap-3 text-primary-foreground/90">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* 准备材料 */}
          {game.materials && game.materials.length > 0 && (
            <div className="p-4 bg-white/10 rounded-2xl">
              <h3 className="font-bold text-primary-foreground mb-2">📦 需要准备</h3>
              <div className="flex flex-wrap gap-2">
                {game.materials.map((item, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 bg-white/20 rounded-full text-primary-foreground text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 好处 */}
          <div className="p-4 bg-white/10 rounded-2xl">
            <h3 className="font-bold text-primary-foreground mb-2">✨ 对宝宝的好处</h3>
            <p className="text-primary-foreground/90">{game.benefits}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
