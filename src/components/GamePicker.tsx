import { useState, useEffect } from 'react'
import { Sparkles, RotateCcw, List, Clock, Star, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '../lib/utils'
import { games, categories, type Game } from '../data/games'

interface GamePickerProps {
  onViewAll: () => void
}

export function GamePicker({ onViewAll }: GamePickerProps) {
  const [currentGame, setCurrentGame] = useState<Game | null>(null)
  const [isSpinning, setIsSpinning] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  // 初始加载时随机选一个
  useEffect(() => {
    pickRandomGame()
  }, [])

  const pickRandomGame = () => {
    setIsSpinning(true)
    setShowDetails(false)
    
    // 动画效果：快速切换几个游戏
    let count = 0
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * games.length)
      setCurrentGame(games[randomIndex])
      count++
      if (count > 8) {
        clearInterval(interval)
        setIsSpinning(false)
      }
    }, 100)
  }

  const category = currentGame ? categories[currentGame.category] : null

  return (
    <div className="space-y-6 animate-fade-in">
      {/* 提示文字 */}
      <div className="text-center">
        <p className="text-muted-foreground text-sm">
          点击按钮，随机抽取今天和宝宝玩的游戏吧！
        </p>
      </div>

      {/* 游戏卡片 */}
      <div 
        className={cn(
          "relative overflow-hidden rounded-3xl p-6 min-h-[280px] transition-all duration-300",
          "bg-gradient-to-br shadow-xl",
          category?.color || "from-sunny to-primary",
          isSpinning && "scale-95"
        )}
      >
        {/* 装饰 */}
        <div className="absolute top-4 right-4 text-6xl opacity-20">
          {currentGame?.emoji || "🎮"}
        </div>
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

        {currentGame ? (
          <div className="relative z-10 h-full flex flex-col">
            {/* 分类标签 */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-white/20 rounded-full text-primary-foreground text-xs font-medium">
                {category?.emoji} {category?.name}
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-primary-foreground text-xs font-medium flex items-center gap-1">
                <Clock size={12} />
                {currentGame.duration}
              </span>
            </div>

            {/* 游戏名称 */}
            <h2 className="text-3xl font-bold text-primary-foreground mb-2 flex items-center gap-3">
              <span className="text-4xl">{currentGame.emoji}</span>
              {currentGame.name}
            </h2>

            {/* 简介 */}
            <p className="text-primary-foreground/90 text-base mb-4">
              {currentGame.description}
            </p>

            {/* 展开详情按钮 */}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center gap-2 text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors mt-auto"
            >
              {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              {showDetails ? '收起详情' : '查看玩法'}
            </button>

            {/* 详细玩法 */}
            {showDetails && (
              <div className="mt-4 p-4 bg-white/10 rounded-2xl animate-fade-in space-y-3">
                <div>
                  <h4 className="text-primary-foreground font-semibold text-sm mb-2 flex items-center gap-2">
                    <Star size={14} /> 怎么玩
                  </h4>
                  <ol className="space-y-1">
                    {currentGame.howToPlay.map((step, i) => (
                      <li key={i} className="text-primary-foreground/90 text-sm flex gap-2">
                        <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs flex-shrink-0">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                {currentGame.materials && (
                  <div>
                    <h4 className="text-primary-foreground font-semibold text-sm mb-1">需要准备</h4>
                    <p className="text-primary-foreground/90 text-sm">
                      {currentGame.materials.join('、')}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-primary-foreground font-semibold text-sm mb-1">对宝宝的好处</h4>
                  <p className="text-primary-foreground/90 text-sm">{currentGame.benefits}</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-primary-foreground/60">点击下方按钮抽取游戏</p>
          </div>
        )}
      </div>

      {/* 操作按钮 */}
      <div className="flex gap-3">
        <button
          onClick={pickRandomGame}
          disabled={isSpinning}
          className={cn(
            "flex-1 flex items-center justify-center gap-2 p-4 rounded-2xl font-bold text-lg transition-all press-effect",
            "bg-gradient-to-r from-primary to-coral text-primary-foreground shadow-lg hover:shadow-xl",
            isSpinning && "opacity-70"
          )}
        >
          {isSpinning ? (
            <RotateCcw className="w-6 h-6 animate-spin" />
          ) : (
            <Sparkles className="w-6 h-6" />
          )}
          {isSpinning ? "抽取中..." : "再抽一个"}
        </button>

        <button
          onClick={onViewAll}
          className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold bg-card text-foreground shadow-lg hover:shadow-xl transition-all press-effect border-2 border-muted"
        >
          <List className="w-5 h-5" />
          全部
        </button>
      </div>

      {/* 统计信息 */}
      <div className="text-center text-muted-foreground text-sm">
        共有 <span className="font-bold text-primary">{games.length}</span> 个亲子游戏等你探索
      </div>
    </div>
  )
}
