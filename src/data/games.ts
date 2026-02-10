export interface Game {
  id: number
  name: string
  emoji: string
  description: string
  howToPlay: string[]
  benefits: string
  category: 'movement' | 'creative' | 'cognitive' | 'social' | 'sensory' | 'school'
  duration: string
  materials?: string[]
}

export const games: Game[] = [
  // ==================== 新添加的零道具游戏 ====================
  {
    id: 1860,
    name: "小手拍拍",
    emoji: "👏",
    description: "指眼睛、鼻子、嘴巴、耳朵、肩膀、膝盖、脚，越指越快",
    howToPlay: [
      "爸爸妈妈说出身体部位名称",
      "宝宝用手指快速指出对应部位",
      "逐渐加快速度，增加挑战性"
    ],
    benefits: "认识身体部位，锻炼反应能力",
    category: "cognitive",
    duration: "5-10分钟"
  },
  {
    id: 1861,
    name: "木头人",
    emoji: "🪵",
    description: "'我们都是木头人，不许说话不许动'，看谁先笑",
    howToPlay: [
      "大家一起说口号：'我们都是木头人，不许说话不许动'",
      "说完后所有人保持静止不动",
      "看谁能坚持最久不笑不动"
    ],
    benefits: "锻炼自控能力和专注力",
    category: "cognitive",
    duration: "5-10分钟"
  },
  {
    id: 1862,
    name: "躲猫猫（家里版）",
    emoji: "🙈",
    description: "蒙眼数10秒，去找爸爸妈妈",
    howToPlay: [
      "宝宝蒙眼数10秒",
      "爸爸妈妈找地方躲起来",
      "宝宝数完后开始寻找"
    ],
    benefits: "建立物体恒存概念，增进亲子互动",
    category: "social",
    duration: "10-15分钟"
  },
  {
    id: 1863,
    name: "手指谣",
    emoji: "🖐️",
    description: "一根手指点点，两根手指剪剪，三根手指弯弯…",
    howToPlay: [
      "边说儿歌边做手指动作",
      "'一根手指点点点，两根手指剪剪剪，三根手指弯弯弯，四根手指叉叉叉，五根手指开小花'",
      "可以根据宝宝的能力调整速度"
    ],
    benefits: "锻炼手指精细动作，培养语言能力",
    category: "sensory",
    duration: "5-10分钟"
  },
  {
    id: 1864,
    name: "吹泡泡",
    emoji: "🫧",
    description: "嘴巴假装吹泡泡，越大越好，最后'啪'破掉",
    howToPlay: [
      "用嘴巴做出吹泡泡的动作",
      "假装吹出越来越大的泡泡",
      "最后用手戳破，说'啪'"
    ],
    benefits: "锻炼口腔肌肉，激发想象力",
    category: "creative",
    duration: "5-10分钟"
  },
  {
    id: 1865,
    name: "小手变变变",
    emoji: "🤲",
    description: "变成小鸟飞、变成小狗跑、变成小猫走、变成大老虎",
    howToPlay: [
      "爸爸妈妈说'小手变变变，变成小鸟飞'",
      "宝宝模仿小鸟飞的动作",
      "可以变换不同的动物，增加趣味性"
    ],
    benefits: "锻炼想象力和身体协调性",
    category: "creative",
    duration: "5-10分钟"
  },
  {
    id: 1866,
    name: "拍手接龙",
    emoji: "👏",
    description: "你拍一，我拍一…简单节奏就行",
    howToPlay: [
      "爸爸妈妈先开始：'你拍一，我拍一，一个小孩开飞机'",
      "宝宝接着拍手回应",
      "可以编简单的儿歌，配合拍手动作"
    ],
    benefits: "培养节奏感和语言能力",
    category: "social",
    duration: "5-10分钟"
  },
  {
    id: 1867,
    name: "吹纸条比赛",
    emoji: "📄",
    description: "桌上放小纸条，看谁吹得远",
    howToPlay: [
      "在桌子上放一张小纸条",
      "爸爸妈妈和宝宝轮流吹纸条",
      "看谁能把纸条吹得更远"
    ],
    benefits: "锻炼口腔肌肉和肺活量",
    category: "sensory",
    duration: "5-10分钟",
    materials: ["小纸条"]
  },
  {
    id: 1868,
    name: "鼻子鼻子眼睛",
    emoji: "👃",
    description: "快速指令，锻炼反应力",
    howToPlay: [
      "爸爸妈妈快速说出身体部位：'鼻子鼻子眼睛'",
      "宝宝听到后用手指指出最后说的部位",
      "逐渐加快速度，增加难度"
    ],
    benefits: "锻炼反应能力和身体认知",
    category: "cognitive",
    duration: "5-10分钟"
  },
  {
    id: 1869,
    name: "悄悄话传话",
    emoji: "🤫",
    description: "妈妈说一句，宝宝传给爸爸，超好笑",
    howToPlay: [
      "妈妈在宝宝耳边说一句悄悄话",
      "宝宝把话传给爸爸",
      "爸爸说出听到的内容，常常会很搞笑"
    ],
    benefits: "锻炼语言表达能力和专注力",
    category: "social",
    duration: "5-10分钟"
  },

  // ==================== 新添加的家里随手拿道具游戏 ====================
  {
    id: 1870,
    name: "纸巾毛毛虫",
    emoji: "🐛",
    description: "纸巾卷成条，用嘴吹着往前爬",
    howToPlay: [
      "把纸巾卷成细长条，做成毛毛虫形状",
      "用嘴轻轻吹纸巾毛毛虫",
      "看谁的毛毛虫爬得更远"
    ],
    benefits: "锻炼口腔肌肉，激发想象力",
    category: "creative",
    duration: "10-15分钟",
    materials: ["纸巾"]
  },
  {
    id: 1871,
    name: "纸杯叠叠乐 / 推倒乐",
    emoji: "🥤",
    description: "纸杯叠高，再轻轻推倒",
    howToPlay: [
      "用纸杯一个一个叠起来，尽量叠高",
      "叠好后轻轻推倒，看纸杯倒下的样子",
      "可以比赛谁叠得更高"
    ],
    benefits: "锻炼手眼协调和空间感知",
    category: "cognitive",
    duration: "10-15分钟",
    materials: ["纸杯"]
  },
  {
    id: 1872,
    name: "袜子配对",
    emoji: "🧦",
    description: "把袜子混一起，找相同颜色配对",
    howToPlay: [
      "把一堆袜子混在一起",
      "让宝宝找出颜色、图案相同的袜子配对",
      "配对完成后可以一起整理袜子"
    ],
    benefits: "锻炼观察力和分类能力",
    category: "cognitive",
    duration: "10-15分钟",
    materials: ["袜子"]
  },
  {
    id: 1877,
    name: "水果寻宝",
    emoji: "🍎",
    description: "把水果藏家里，宝宝来找",
    howToPlay: [
      "把一些水果藏在家里的各个地方",
      "给宝宝一些线索，让他去找",
      "找到后可以一起享用水果"
    ],
    benefits: "锻炼观察力和探索能力",
    category: "cognitive",
    duration: "10-15分钟",
    materials: ["水果"]
  },
  {
    id: 1878,
    name: "小毛巾躲猫猫",
    emoji: "🧸",
    description: "毛巾盖住玩具，猜是什么",
    howToPlay: [
      "用毛巾盖住一个玩具",
      "让宝宝摸一摸，猜猜是什么玩具",
      "猜对后可以换另一个玩具继续玩"
    ],
    benefits: "锻炼触觉感知和推理能力",
    category: "sensory",
    duration: "5-10分钟",
    materials: ["毛巾", "玩具"]
  },

  // ==================== 新添加的感统运动游戏 ====================
  {
    id: 1881,
    name: "小马过河",
    emoji: "🐎",
    description: "地上画线/枕头当石头，不能踩'水'",
    howToPlay: [
      "用粉笔画线或用枕头当石头，摆成过河的路",
      "宝宝要踩着石头过河，不能踩到'水'里",
      "可以调整石头的间距，增加难度"
    ],
    benefits: "锻炼平衡能力和协调能力",
    category: "movement",
    duration: "10-15分钟",
    materials: ["粉笔/枕头"]
  },
  {
    id: 1882,
    name: "袋鼠跳跳",
    emoji: "🦘",
    description: "宝宝双脚并拢，跟着爸妈跳",
    howToPlay: [
      "爸爸妈妈和宝宝一起双脚并拢",
      "像袋鼠一样向前跳",
      "可以比赛谁跳得更远"
    ],
    benefits: "锻炼腿部力量和协调能力",
    category: "movement",
    duration: "10-15分钟"
  },
  {
    id: 1883,
    name: "拉大锯",
    emoji: "🪚",
    description: "面对面拉手，一前一后摇晃",
    howToPlay: [
      "爸爸妈妈和宝宝面对面坐好，手拉着手",
      "一起说'拉大锯，扯大锯，姥姥家，唱大戏'",
      "一边说一边一前一后摇晃身体"
    ],
    benefits: "锻炼手臂力量，增进亲子互动",
    category: "movement",
    duration: "5-10分钟"
  },
  {
    id: 1886,
    name: "小推车",
    emoji: " 🚗",
    description: "抓宝宝脚踝，宝宝用手走路（注意力度）",
    howToPlay: [
      "宝宝趴在地上，双手撑地",
      "爸爸妈妈抓住宝宝的脚踝，轻轻抬起",
      "宝宝用手向前爬，像小推车一样"
    ],
    benefits: "锻炼上肢力量和核心力量",
    category: "movement",
    duration: "5-10分钟"
  },
  {
    id: 1888,
    name: "大风小风",
    emoji: "🌬️",
    description: "大风快跑，小风慢走，风停不动",
    howToPlay: [
      "爸爸妈妈说'大风'，宝宝快跑",
      "说'小风'，宝宝慢走",
      "说'风停了'，宝宝要立刻停下来不动"
    ],
    benefits: "锻炼反应能力和听指令能力",
    category: "movement",
    duration: "10-15分钟"
  },
  // ==================== 新添加的安静专注类游戏 ====================
  {
    id: 1890,
    name: "找不同",
    emoji: "🔍",
    description: "用家里两本书、两个玩具找不同",
    howToPlay: [
      "找出两本类似的书或两个类似的玩具",
      "让宝宝找出它们之间的不同之处",
      "可以从简单的不同开始，逐渐增加难度"
    ],
    benefits: "锻炼观察力和辨别能力",
    category: "cognitive",
    duration: "10-15分钟",
    materials: ["两本书/两个玩具"]
  },
  {
    id: 1892,
    name: "颜色指令",
    emoji: "🎨",
    description: "'去拿一个红色的东西'",
    howToPlay: [
      "爸爸妈妈说出一种颜色，比如'红色'",
      "宝宝去屋里找一个红色的东西拿过来",
      "可以变换不同的颜色，增加难度"
    ],
    benefits: "学习颜色认知和执行指令能力",
    category: "cognitive",
    duration: "10-15分钟"
  },
  {
    id: 1893,
    name: "形状寻宝",
    emoji: "🔷",
    description: "找家里圆形、方形、三角形",
    howToPlay: [
      "爸爸妈妈说出一种形状，比如'圆形'",
      "宝宝去屋里找圆形的东西",
      "可以教宝宝认识不同的形状"
    ],
    benefits: "学习形状认知和观察力",
    category: "cognitive",
    duration: "10-15分钟"
  },
  {
    id: 1895,
    name: "拼图入门",
    emoji: "🧩",
    description: "4–12片简单拼图",
    howToPlay: [
      "选择4-12片的简单拼图",
      "和宝宝一起拼，先看完整的图案",
      "逐渐增加拼图的难度"
    ],
    benefits: "锻炼空间认知和问题解决能力",
    category: "cognitive",
    duration: "15-20分钟",
    materials: ["简单拼图"]
  },
  {
    id: 1896,
    name: "涂涂乐",
    emoji: "🖍️",
    description: "随便画，爸妈一起画",
    howToPlay: [
      "准备纸和彩笔",
      "让宝宝自由涂鸦，想画什么就画什么",
      "爸爸妈妈也一起画，和宝宝分享"
    ],
    benefits: "激发创造力和艺术表达",
    category: "creative",
    duration: "15-20分钟",
    materials: ["纸", "彩笔"]
  },
  {
    id: 1899,
    name: "听指令做动作",
    emoji: "👂",
    description: "摸头、举手、转圈、坐下",
    howToPlay: [
      "爸爸妈妈说出一个动作指令，比如'摸头'",
      "宝宝听到后做出相应的动作",
      "可以逐渐增加指令的难度"
    ],
    benefits: "锻炼听指令能力和反应速度",
    category: "cognitive",
    duration: "10-15分钟"
  },

  // ==================== 新添加的假装扮演游戏 ====================
  {
    id: 1900,
    name: "小厨师",
    emoji: "👨‍🍳",
    description: "用玩具/积木做饭给爸妈吃",
    howToPlay: [
      "准备玩具厨具或用积木当厨具",
      "宝宝假装做饭，给爸爸妈妈吃",
      "可以教宝宝认识不同的食物"
    ],
    benefits: "培养想象力和照顾能力",
    category: "social",
    duration: "15-20分钟",
    materials: ["玩具厨具/积木"]
  },
  {
    id: 1901,
    name: "小医生",
    emoji: "👨‍⚕️",
    description: "听诊、量体温、贴创可贴",
    howToPlay: [
      "准备玩具医药箱或用家里的物品假装",
      "宝宝假装给爸爸妈妈看病，听诊、量体温",
      "可以教宝宝一些基本的健康知识"
    ],
    benefits: "培养同理心和照顾能力",
    category: "social",
    duration: "15-20分钟",
    materials: ["玩具医药箱（可选）"]
  },
  {
    id: 1902,
    name: "超市买东西",
    emoji: "🛒",
    description: "玩具当商品，用纸当钱",
    howToPlay: [
      "用玩具当商品，标上价格",
      "宝宝拿着纸当钱，去'超市'买东西",
      "爸爸妈妈当收银员，和宝宝一起玩"
    ],
    benefits: "培养想象力和社交能力",
    category: "social",
    duration: "15-20分钟",
    materials: ["玩具", "纸（当钱）"]
  },
  {
    id: 1903,
    name: "小动物家",
    emoji: "🏠",
    description: "枕头当窝，扮演小兔子睡觉",
    howToPlay: [
      "用枕头当小动物的窝",
      "宝宝扮演小兔子，在窝里睡觉",
      "可以变换不同的动物，增加趣味性"
    ],
    benefits: "培养想象力和角色扮演能力",
    category: "social",
    duration: "10-15分钟",
    materials: ["枕头"]
  },
  {
    id: 1904,
    name: "幼儿园上课",
    emoji: "🏫",
    description: "宝宝当老师，爸妈当小朋友",
    howToPlay: [
      "宝宝当老师，爸爸妈妈当小朋友",
      "宝宝可以教爸爸妈妈唱歌、跳舞或讲故事",
      "可以准备一些小道具，增加真实感"
    ],
    benefits: "培养表达能力和自信心",
    category: "school",
    duration: "15-20分钟"
  },
  {
    id: 1905,
    name: "公交车",
    emoji: "🚌",
    description: "椅子当车，宝宝当司机或售票员",
    howToPlay: [
      "用椅子当公交车座位",
      "宝宝当司机或售票员，爸爸妈妈当乘客",
      "可以假装开车、停车、售票"
    ],
    benefits: "培养想象力和社交能力",
    category: "social",
    duration: "15-20分钟",
    materials: ["椅子"]
  },
  {
    id: 1906,
    name: "理发店",
    emoji: "💈",
    description: "用梳子假装剪头发、吹头发",
    howToPlay: [
      "用梳子、毛巾等当理发工具",
      "宝宝假装给爸爸妈妈理发、吹头发",
      "可以用一些假发或帽子增加真实感"
    ],
    benefits: "培养想象力和照顾能力",
    category: "social",
    duration: "15-20分钟",
    materials: ["梳子", "毛巾"]
  },
  {
    id: 1907,
    name: "过生日",
    emoji: "🎂",
    description: "假蛋糕，唱生日歌、吹蜡烛",
    howToPlay: [
      "用积木或其他物品做一个假蛋糕",
      "插上蜡烛，唱生日歌",
      "宝宝吹蜡烛，许愿"
    ],
    benefits: "培养想象力和社交能力",
    category: "social",
    duration: "15-20分钟",
    materials: ["假蛋糕或积木"]
  },
  {
    id: 1908,
    name: "喂娃娃吃饭",
    emoji: "🍼",
    description: "练照顾人、同理心",
    howToPlay: [
      "准备一个洋娃娃",
      "宝宝假装给娃娃喂饭、喝水",
      "可以教宝宝如何照顾他人"
    ],
    benefits: "培养同理心和照顾能力",
    category: "social",
    duration: "10-15分钟",
    materials: ["洋娃娃", "玩具餐具（可选）"]
  },
  {
    id: 1909,
    name: "打电话",
    emoji: "📱",
    description: "用玩具/遥控器打电话聊天",
    howToPlay: [
      "用玩具电话或遥控器当电话",
      "宝宝假装打电话给爸爸妈妈或其他人",
      "鼓励宝宝说出完整的句子"
    ],
    benefits: "锻炼语言表达能力和社交能力",
    category: "social",
    duration: "10-15分钟",
    materials: ["玩具电话/遥控器"]
  },

  // ==================== 新添加的简单早教类游戏 ====================
  {
    id: 1910,
    name: "数字抱抱",
    emoji: "🔢",
    description: "喊数字1，抱一下；喊数字2，抱两下",
    howToPlay: [
      "爸爸妈妈喊一个数字，比如'1'",
      "宝宝要抱爸爸妈妈相应的次数",
      "可以逐渐增加数字的大小"
    ],
    benefits: "学习数字概念和身体协调",
    category: "cognitive",
    duration: "5-10分钟"
  },
  {
    id: 1911,
    name: "反义词游戏",
    emoji: "🔄",
    description: "大/小、高/矮、快/慢、冷/热",
    howToPlay: [
      "爸爸妈妈说一个词，比如'大'",
      "宝宝说出反义词'小'",
      "可以用手势或实物帮助宝宝理解"
    ],
    benefits: "学习反义词和语言理解能力",
    category: "cognitive",
    duration: "5-10分钟"
  },
  {
    id: 1912,
    name: "儿歌律动",
    emoji: "🎵",
    description: "《两只老虎》《小兔子乖乖》《小星星》",
    howToPlay: [
      "爸爸妈妈教宝宝唱儿歌，比如《两只老虎》",
      "边唱边做动作，增加趣味性",
      "可以学习多首儿歌，丰富宝宝的语言"
    ],
    benefits: "培养音乐感和语言能力",
    category: "social",
    duration: "10-15分钟"
  },
  {
    id: 1913,
    name: "分类游戏",
    emoji: "🗂️",
    description: "把玩具分成车、娃娃、积木",
    howToPlay: [
      "把各种玩具混在一起",
      "让宝宝把玩具分成不同的类别，比如车、娃娃、积木",
      "可以教宝宝认识不同的类别"
    ],
    benefits: "锻炼分类能力和认知能力",
    category: "cognitive",
    duration: "10-15分钟",
    materials: ["各种玩具"]
  },
  {
    id: 1914,
    name: "你说我做",
    emoji: "👂",
    description: "锻炼语言理解和专注力",
    howToPlay: [
      "爸爸妈妈说出一个动作指令，比如'拍拍手，转个圈'",
      "宝宝听到后按照指令做动作",
      "可以逐渐增加指令的长度和难度"
    ],
    benefits: "锻炼语言理解能力和专注力",
    category: "cognitive",
    duration: "10-15分钟"
  }
]

// 分类信息
export const categories = {
  movement: { name: '运动游戏', emoji: '🏃', color: 'from-orange-400 to-rose-400' },
  creative: { name: '创意游戏', emoji: '🎨', color: 'from-purple-400 to-pink-400' },
  cognitive: { name: '认知游戏', emoji: '🧠', color: 'from-cyan-400 to-teal-400' },
  social: { name: '社交情感', emoji: '💝', color: 'from-pink-400 to-rose-400' },
  sensory: { name: '感官探索', emoji: '✨', color: 'from-amber-400 to-orange-400' },
  school: { name: '幼儿园游戏', emoji: '🏫', color: 'from-green-400 to-emerald-400' },
}