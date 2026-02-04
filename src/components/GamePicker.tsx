import { useState, useEffect } from 'react'
import { Sparkles, RotateCcw, List, Clock, Star, ChevronDown, ChevronUp, Wand2 } from 'lucide-react'
import { cn } from '../lib/utils'
import { games, categories, type Game } from '../data/games'

interface GamePickerProps {
  onViewAll: () => void
}

export function GamePicker({ onViewAll }: GamePickerProps) {
  const [currentGame, setCurrentGame] = useState<Game | null>(null)
  const [isSpinning, setIsSpinning] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([])

  useEffect(() => {
    pickRandomGame()
  }, [])

  const createSparkles = () => {
    const newSparkles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))
    setSparkles(newSparkles)
    setTimeout(() => setSparkles([]), 1000)
  }

  const pickRandomGame = () => {
    setIsSpinning(true)
    setShowDetails(false)
    createSparkles()
    
    let count = 0
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * games.length)
      setCurrentGame(games[randomIndex])
      count++
      if (count > 10) {
        clearInterval(interval)
        setIsSpinning(false)
      }
    }, 80)
  }

  const category = currentGame ? categories[currentGame.category] : null

  return (
    <div className="space-y-6">
      {/* 顶部装饰 */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-100 to-red-100 rounded-full shadow-md border-2 border-orange-200">
          <Wand2 className="w-4 h-4 text-orange-600" />
          <span className="text-sm font-bold text-orange-700 text-shadow">今日魔法抽取</span>
          <Wand2 className="w-4 h-4 text-orange-600" />
        </div>
        <p className="text-muted-foreground text-sm">
          点击魔法按钮，看看今天和宝宝玩什么！
        </p>
      </div>

      {/* 游戏卡片区域 */}
      <div className="relative">
        {/* 闪光效果 */}
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping pointer-events-none z-20"
            style={{ left: `${sparkle.x}%`, top: `${sparkle.y}%` }}
          />
        ))}

        {/* 卡片外框装饰 */}
        <div className="absolute -inset-2 bg-gradient-to-r from-indigo-200 via-purple-200 to-orange-200 rounded-[2rem] blur-sm opacity-70 animate-pulse" />
        
        {/* 游戏卡片 */}
        <div 
          className={cn(
            "relative overflow-hidden rounded-3xl p-6 min-h-[340px] transition-all duration-500 shadow-2xl",
            "bg-gradient-to-br",
            category?.color || "from-indigo-500 to-purple-500",
            isSpinning ? "animate-pulse scale-[0.98]" : ""
          )}
        >
          {/* 背景装饰圆 */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full" />
          <div className="absolute top-1/2 right-0 w-24 h-24 bg-white/5 rounded-full" />

          {/* 大 emoji 装饰 */}
          <div className="absolute top-4 right-4 text-8xl opacity-20 select-none animate-bounce-soft">
            {currentGame?.emoji || "🎮"}
          </div>

          {currentGame ? (
            <div className="relative z-10 h-full flex flex-col animate-clay-pop">
              {/* 分类和时间标签 */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/25 backdrop-blur-sm rounded-full text-white text-xs font-bold shadow-sm">
                  <span>{category?.emoji}</span>
                  {category?.name}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/25 backdrop-blur-sm rounded-full text-white text-xs font-bold shadow-sm">
                  <Clock size={12} />
                  {currentGame.duration}
                </span>
              </div>

              {/* 游戏名称 */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl drop-shadow-lg animate-bounce-soft">{currentGame.emoji}</span>
                <h2 className="text-3xl font-black text-white drop-shadow-md text-shadow">
                  {currentGame.name}
                </h2>
              </div>

              {/* 简介 */}
              <p className="text-white/90 text-lg font-medium mb-5 drop-shadow-sm">
                {currentGame.description}
              </p>

              {/* 展开详情按钮 */}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white text-sm font-bold transition-all w-fit shadow-md"
              >
                {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                {showDetails ? '收起玩法' : '查看玩法'}
              </button>

              {/* 详细玩法 */}
              {showDetails && (
                <div className="mt-4 p-5 bg-white/15 backdrop-blur-sm rounded-2xl animate-clay-pop space-y-4 shadow-inner">
                  <div>
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <Star size={14} className="fill-current" /> 怎么玩
                    </h4>
                    <ol className="space-y-2">
                      {currentGame.howToPlay.map((step, i) => (
                        <li key={i} className="text-white/90 text-sm flex gap-3">
                          <span className="w-6 h-6 bg-white/25 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 shadow-sm">
                            {i + 1}
                          </span>
                          <span className="pt-0.5">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {currentGame.materials && currentGame.materials.length > 0 && (
                    <div>
                      <h4 className="text-white font-bold text-sm mb-2">📦 需要准备</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentGame.materials.map((item, i) => (
                          <span key={i} className="px-3 py-1.5 bg-white/20 rounded-full text-white text-xs shadow-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">✨ 对宝宝的好处</h4>
                    <p className="text-white/90 text-sm">{currentGame.benefits}</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4 animate-bounce-soft">🎲</div>
                <p className="text-white/80 font-bold">点击下方按钮开始抽取</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="flex gap-4">
        <button
          onClick={pickRandomGame}
          disabled={isSpinning}
          className={cn(
            "flex-1 flex items-center justify-center gap-3 p-5 rounded-full font-bold text-lg transition-all",
            "btn-clay-accent",
            isSpinning && "opacity-80 cursor-not-allowed"
          )}
        >
          {isSpinning ? (
            <>
              <RotateCcw className="w-6 h-6 animate-spin" />
              魔法抽取中...
            </>
          ) : (
            <>
              <Sparkles className="w-6 h-6" />
              再抽一个
            </>
          )}
        </button>

        <button
          onClick={onViewAll}
          className="flex items-center justify-center gap-2 px-6 py-5 rounded-full font-bold clay-raised"
        >
          <List className="w-5 h-5" />
          全部
        </button>
      </div>

      {/* 底部统计 */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border-2 border-indigo-100">
          <span className="text-2xl">🎮</span>
          <span className="text-gray-700 font-bold">
            共有 <span className="font-bold text-gradient-orange text-lg">{games.length}</span> 个亲子游戏
          </span>
        </div>
      </div>
    </div>
  )
}
