import { useState } from 'react'
import { ArrowLeft, Clock, ChevronRight, X, Search, Sparkles } from 'lucide-react'
import { cn } from '../lib/utils'
import { games, categories, type Game } from '../data/games'

interface GameListProps {
  onBack: () => void
}

type CategoryKey = keyof typeof categories | 'all'

export function GameList({ onBack }: GameListProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all')
  const [selectedGame, setSelectedGame] = useState<Game | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredGames = games.filter(g => {
    const matchCategory = selectedCategory === 'all' || g.category === selectedCategory
    const matchSearch = searchQuery === '' || 
      g.name.includes(searchQuery) || 
      g.description.includes(searchQuery)
    return matchCategory && matchSearch
  })

  const categoryOptions: { key: CategoryKey; name: string; emoji: string; count: number }[] = [
    { key: 'all', name: '全部', emoji: '🎮', count: games.length },
    ...Object.entries(categories).map(([key, val]) => ({
      key: key as CategoryKey,
      name: val.name,
      emoji: val.emoji,
      count: games.filter(g => g.category === key).length
    }))
  ]

  return (
    <div className="space-y-5 animate-fade-in">
      {/* 顶部导航 */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm text-gray-600 hover:text-gray-900 hover:shadow-md transition-all"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">返回抽游戏</span>
        </button>
      </div>

      {/* 标题区域 */}
      <div className="text-center py-2">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="text-3xl">📚</span>
          <h2 className="text-2xl font-black text-gray-800">游戏宝典</h2>
        </div>
        <p className="text-gray-500 text-sm">
          {games.length} 个精选亲子游戏，适合 2-3 岁宝宝
        </p>
      </div>

      {/* 搜索框 */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="搜索游戏名称..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3.5 bg-white rounded-2xl shadow-sm border-2 border-gray-100 focus:border-orange-300 focus:outline-none transition-colors text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* 分类筛选 - 每行显示两个分类 */}
      <div className="grid grid-cols-2 gap-3">
        {categoryOptions.map(({ key, name, emoji, count }) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={cn(
              "flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all group",
              selectedCategory === key
                ? "bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-lg shadow-orange-500/25 scale-[1.02] border border-transparent"
                : "bg-white text-gray-600 hover:bg-gray-50 shadow-sm border border-gray-100 hover:shadow-md hover:scale-[1.02]"
            )}
          >
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center text-lg transition-all",
                selectedCategory === key
                  ? "bg-white/20"
                  : "bg-gray-100 group-hover:bg-gray-200"
              )}>
                {emoji}
              </div>
              <span className={cn(
                "font-bold",
                selectedCategory === key ? "text-white" : "text-gray-700"
              )}>{name}</span>
            </div>
            <span className={cn(
              "px-2.5 py-0.5 rounded-full text-xs font-bold min-w-[24px] h-6 flex items-center justify-center",
              selectedCategory === key
                ? "bg-white/30 text-white"
                : "bg-gray-100 text-gray-600"
            )}>
              {count}
            </span>
          </button>
        ))}
      </div>

      {/* 游戏网格 */}
      <div className="grid grid-cols-2 gap-3">
        {filteredGames.map((game, index) => {
          const category = categories[game.category]
          return (
            <button
              key={game.id}
              onClick={() => setSelectedGame(game)}
              className={cn(
                "relative overflow-hidden p-4 rounded-2xl text-left transition-all",
                "bg-white shadow-sm hover:shadow-lg border-2 border-gray-50 hover:border-gray-100",
                "active:scale-[0.98] animate-fade-in"
              )}
              style={{ animationDelay: `${index * 0.02}s` }}
            >
              {/* 背景装饰 */}
              <div className={cn(
                "absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-20 bg-gradient-to-br",
                category.color
              )} />

              {/* emoji 图标 */}
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3 bg-gradient-to-br",
                category.color
              )}>
                {game.emoji}
              </div>

              {/* 游戏名称 */}
              <h3 className="font-bold text-gray-800 text-sm mb-1 line-clamp-1">
                {game.name}
              </h3>

              {/* 描述 */}
              <p className="text-xs text-gray-500 line-clamp-2 mb-2">
                {game.description}
              </p>

              {/* 时长 */}
              <div className="flex items-center gap-1 text-gray-400 text-xs">
                <Clock size={10} />
                {game.duration}
              </div>
            </button>
          )
        })}
      </div>

      {filteredGames.length === 0 && (
        <div className="text-center py-12">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-gray-500 font-medium">没有找到相关游戏</p>
          <p className="text-gray-400 text-sm mt-1">试试其他关键词？</p>
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
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className={cn(
          "w-full max-w-md max-h-[85vh] overflow-y-auto rounded-t-[2rem] sm:rounded-[2rem] shadow-2xl animate-slide-up"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 头部渐变区域 */}
        <div className={cn(
          "relative p-6 pb-8 bg-gradient-to-br",
          category.color
        )}>
          {/* 关闭按钮 */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          >
            <X size={20} className="text-white" />
          </button>

          {/* 分类标签 */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 rounded-full text-white text-xs font-semibold mb-4">
            {category.emoji} {category.name}
          </span>

          {/* emoji 和标题 */}
          <div className="text-center">
            <div className="text-7xl mb-3 drop-shadow-lg">{game.emoji}</div>
            <h2 className="text-2xl font-black text-white drop-shadow-md">{game.name}</h2>
            <p className="text-white/90 mt-2">{game.description}</p>
            <div className="flex items-center justify-center gap-1 mt-3 text-white/80 text-sm">
              <Clock size={14} />
              {game.duration}
            </div>
          </div>
        </div>

        {/* 内容区域 */}
        <div className="bg-white p-6 space-y-5">
          {/* 玩法步骤 */}
          <div>
            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Sparkles size={16} className="text-orange-500" />
              怎么玩
            </h3>
            <ol className="space-y-3">
              {game.howToPlay.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 text-white bg-gradient-to-br",
                    category.color
                  )}>
                    {i + 1}
                  </span>
                  <span className="text-gray-600 pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* 准备材料 */}
          {game.materials && game.materials.length > 0 && (
            <div>
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                📦 需要准备
              </h3>
              <div className="flex flex-wrap gap-2">
                {game.materials.map((item, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 好处 */}
          <div className={cn(
            "p-4 rounded-2xl bg-gradient-to-br",
            category.color.replace('from-', 'from-').replace('to-', 'to-'),
            "opacity-10"
          )}>
            <div className={cn(
              "p-4 rounded-2xl",
              `bg-gradient-to-br ${category.color}`
            )} style={{ background: 'linear-gradient(135deg, rgba(251,146,60,0.1), rgba(251,113,133,0.1))' }}>
              <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                ✨ 对宝宝的好处
              </h3>
              <p className="text-gray-600">{game.benefits}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
