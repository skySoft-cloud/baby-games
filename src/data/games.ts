export interface Game {
  id: number
  name: string
  emoji: string
  description: string
  howToPlay: string[]
  benefits: string
  category: 'movement' | 'creative' | 'cognitive' | 'social' | 'sensory'
  duration: string
  materials?: string[]
}

export const games: Game[] = [
  // ==================== 运动类游戏 ====================
  {
    id: 1,
    name: "小动物模仿秀",
    emoji: "🐰",
    description: "模仿各种小动物的动作和叫声",
    howToPlay: [
      "爸爸妈妈说一个动物名称",
      "宝宝模仿这个动物怎么走路、怎么叫",
      "可以一起模仿，比比谁更像"
    ],
    benefits: "锻炼身体协调性和想象力",
    category: "movement",
    duration: "5-10分钟"
  },
  {
    id: 2,
    name: "气球不落地",
    emoji: "🎈",
    description: "一起把气球拍向空中，不让它落地",
    howToPlay: [
      "吹一个气球",
      "用手轻轻拍气球",
      "和宝宝轮流拍，不让气球落地"
    ],
    benefits: "锻炼手眼协调和反应能力",
    category: "movement",
    duration: "5-15分钟",
    materials: ["气球"]
  },
  {
    id: 3,
    name: "跟我做动作",
    emoji: "🙌",
    description: "爸爸妈妈做动作，宝宝跟着学",
    howToPlay: [
      "先做简单的动作：拍手、跺脚、转圈",
      "慢慢增加难度：摸头同时跺脚",
      "也可以让宝宝当小老师"
    ],
    benefits: "提高注意力和身体控制能力",
    category: "movement",
    duration: "5-10分钟"
  },
  {
    id: 4,
    name: "小火车过山洞",
    emoji: "🚂",
    description: "爸爸妈妈搭山洞，宝宝当小火车钻过去",
    howToPlay: [
      "大人双手撑地搭成山洞",
      "宝宝当小火车，从山洞下面爬过去",
      "可以喊\"呜呜\"火车声"
    ],
    benefits: "锻炼爬行能力和空间感知",
    category: "movement",
    duration: "5-10分钟"
  },
  {
    id: 5,
    name: "踩影子",
    emoji: "👣",
    description: "追着踩对方的影子",
    howToPlay: [
      "在有阳光的地方玩",
      "追着踩爸爸妈妈的影子",
      "也让宝宝跑，你来踩"
    ],
    benefits: "锻炼反应能力和奔跑能力",
    category: "movement",
    duration: "10-15分钟"
  },
  {
    id: 6,
    name: "传球游戏",
    emoji: "⚽",
    description: "和宝宝互相传球",
    howToPlay: [
      "面对面坐好",
      "把球滚向宝宝",
      "让宝宝滚回来"
    ],
    benefits: "锻炼手眼协调和社交互动",
    category: "movement",
    duration: "5-10分钟",
    materials: ["软球"]
  },
  {
    id: 7,
    name: "跳房子",
    emoji: "🏠",
    description: "简单版跳房子游戏",
    howToPlay: [
      "在地上画几个大格子或用胶带贴",
      "让宝宝从一个格子跳到另一个",
      "可以边跳边数数"
    ],
    benefits: "锻炼跳跃能力和平衡感",
    category: "movement",
    duration: "10-15分钟",
    materials: ["粉笔/胶带"]
  },
  {
    id: 8,
    name: "抓泡泡",
    emoji: "🫧",
    description: "追着抓飞舞的泡泡",
    howToPlay: [
      "吹出很多泡泡",
      "让宝宝追着抓泡泡",
      "看谁抓得多"
    ],
    benefits: "锻炼奔跑和手眼协调",
    category: "movement",
    duration: "10-15分钟",
    materials: ["泡泡水"]
  },
  {
    id: 9,
    name: "红灯绿灯",
    emoji: "🚦",
    description: "听口令走走停停",
    howToPlay: [
      "喊\"绿灯\"宝宝可以走",
      "喊\"红灯\"宝宝要停下",
      "可以加入\"黄灯\"慢慢走"
    ],
    benefits: "锻炼听从指令和自控能力",
    category: "movement",
    duration: "5-10分钟"
  },
  {
    id: 10,
    name: "小青蛙跳跳跳",
    emoji: "🐸",
    description: "蹲下来像小青蛙一样跳",
    howToPlay: [
      "蹲下来，双手放在地上",
      "像小青蛙一样向前跳",
      "可以比赛谁跳得远"
    ],
    benefits: "锻炼腿部力量和协调性",
    category: "movement",
    duration: "5-10分钟"
  },
  {
    id: 11,
    name: "踢球进门",
    emoji: "⚽",
    description: "把球踢进简易球门",
    howToPlay: [
      "用两个物品做球门",
      "让宝宝把球踢进门",
      "慢慢增加距离"
    ],
    benefits: "锻炼腿部协调和瞄准能力",
    category: "movement",
    duration: "10-15分钟",
    materials: ["软球"]
  },
  {
    id: 12,
    name: "走平衡木",
    emoji: "🤸",
    description: "在线上走保持平衡",
    howToPlay: [
      "用胶带在地上贴一条线",
      "让宝宝沿着线走",
      "可以伸开双臂保持平衡"
    ],
    benefits: "锻炼平衡能力和专注力",
    category: "movement",
    duration: "5-10分钟",
    materials: ["胶带"]
  },
  {
    id: 13,
    name: "毛毛虫爬行",
    emoji: "🐛",
    description: "趴在地上像毛毛虫一样爬",
    howToPlay: [
      "趴在地上",
      "用手肘和膝盖向前爬",
      "可以设定终点比赛"
    ],
    benefits: "锻炼全身协调和核心力量",
    category: "movement",
    duration: "5-10分钟"
  },
  {
    id: 14,
    name: "投篮高手",
    emoji: "🏀",
    description: "把球投进篮子里",
    howToPlay: [
      "准备一个篮子或箱子",
      "让宝宝把软球投进去",
      "从近到远慢慢增加难度"
    ],
    benefits: "锻炼投掷能力和手眼协调",
    category: "movement",
    duration: "10-15分钟",
    materials: ["软球", "篮子"]
  },
  {
    id: 15,
    name: "骑大马",
    emoji: "🐴",
    description: "骑在爸爸妈妈背上",
    howToPlay: [
      "大人趴在地上当马",
      "宝宝骑在背上",
      "大人慢慢爬动，宝宝抓稳"
    ],
    benefits: "增进亲子互动，锻炼平衡",
    category: "movement",
    duration: "5-10分钟"
  },
  {
    id: 16,
    name: "小飞机",
    emoji: "✈️",
    description: "被举起来当小飞机",
    howToPlay: [
      "大人躺下，用脚托住宝宝肚子",
      "双手扶着宝宝",
      "轻轻上下晃动像飞机飞"
    ],
    benefits: "锻炼核心力量，增进亲密",
    category: "movement",
    duration: "5分钟"
  },
  {
    id: 17,
    name: "障碍赛跑",
    emoji: "🏃",
    description: "绕过障碍物跑到终点",
    howToPlay: [
      "用枕头、玩具设置障碍",
      "让宝宝绕过障碍跑到终点",
      "可以计时挑战"
    ],
    benefits: "锻炼敏捷性和问题解决能力",
    category: "movement",
    duration: "10-15分钟",
    materials: ["枕头/玩具"]
  },
  {
    id: 18,
    name: "抛接游戏",
    emoji: "🧸",
    description: "轻轻抛起软玩具再接住",
    howToPlay: [
      "用软软的玩具或小枕头",
      "轻轻抛给宝宝让他接",
      "从近距离开始"
    ],
    benefits: "锻炼手眼协调和反应力",
    category: "movement",
    duration: "5-10分钟",
    materials: ["软玩具"]
  },

  // ==================== 创意类游戏 ====================
  {
    id: 19,
    name: "彩色面团玩偶",
    emoji: "🎨",
    description: "用彩色面团捏各种形状",
    howToPlay: [
      "准备安全的彩色面团",
      "和宝宝一起捏小球、小蛇、饼干形状",
      "用模具压出各种图案"
    ],
    benefits: "锻炼手指精细动作和创造力",
    category: "creative",
    duration: "10-20分钟",
    materials: ["彩泥/面团", "小模具"]
  },
  {
    id: 20,
    name: "手指画画",
    emoji: "🖐️",
    description: "用手指蘸颜料画画",
    howToPlay: [
      "准备安全的水彩颜料和大纸",
      "让宝宝用手指蘸颜料在纸上画",
      "可以画太阳、花朵等简单图案"
    ],
    benefits: "激发创造力，感受色彩",
    category: "creative",
    duration: "10-20分钟",
    materials: ["安全颜料", "大纸"]
  },
  {
    id: 21,
    name: "纸箱变变变",
    emoji: "📦",
    description: "把纸箱变成小汽车、小房子",
    howToPlay: [
      "找一个大纸箱",
      "让宝宝坐进去当小汽车",
      "也可以变成小房子、小船"
    ],
    benefits: "激发想象力和角色扮演能力",
    category: "creative",
    duration: "15-30分钟",
    materials: ["大纸箱"]
  },
  {
    id: 22,
    name: "撕纸艺术",
    emoji: "📄",
    description: "撕纸条拼贴画",
    howToPlay: [
      "准备彩色纸",
      "让宝宝撕成小条或小块",
      "贴在纸上组成图案"
    ],
    benefits: "锻炼手指力量和创造力",
    category: "creative",
    duration: "15-20分钟",
    materials: ["彩色纸", "胶水"]
  },
  {
    id: 23,
    name: "印章画",
    emoji: "🔴",
    description: "用各种物品蘸颜料印画",
    howToPlay: [
      "用蔬菜切面、瓶盖等当印章",
      "蘸颜料印在纸上",
      "组合成花朵、毛毛虫等图案"
    ],
    benefits: "认识形状，发展创造力",
    category: "creative",
    duration: "15-20分钟",
    materials: ["蔬菜/瓶盖", "颜料", "纸"]
  },
  {
    id: 24,
    name: "贴纸装饰",
    emoji: "⭐",
    description: "用贴纸装饰图画",
    howToPlay: [
      "准备各种可爱贴纸",
      "让宝宝在纸上贴出图案",
      "可以贴在画好的轮廓里"
    ],
    benefits: "锻炼精细动作和审美能力",
    category: "creative",
    duration: "10-15分钟",
    materials: ["贴纸", "纸"]
  },
  {
    id: 25,
    name: "积木城堡",
    emoji: "🏰",
    description: "用积木搭建各种造型",
    howToPlay: [
      "拿出积木",
      "一起搭高塔、房子、桥",
      "数一数用了几块积木"
    ],
    benefits: "锻炼空间想象和手眼协调",
    category: "creative",
    duration: "15-30分钟",
    materials: ["积木"]
  },
  {
    id: 26,
    name: "橡皮泥动物园",
    emoji: "🦁",
    description: "用橡皮泥捏小动物",
    howToPlay: [
      "选一个动物主题",
      "一起捏小猫、小狗、小兔子",
      "摆在一起变成动物园"
    ],
    benefits: "锻炼精细动作和想象力",
    category: "creative",
    duration: "15-20分钟",
    materials: ["橡皮泥"]
  },
  {
    id: 27,
    name: "纸盘面具",
    emoji: "🎭",
    description: "把纸盘变成有趣的面具",
    howToPlay: [
      "在纸盘上画眼睛、嘴巴",
      "贴上彩纸做装饰",
      "戴上演小动物"
    ],
    benefits: "培养创造力和表演能力",
    category: "creative",
    duration: "15-20分钟",
    materials: ["纸盘", "彩笔", "彩纸"]
  },
  {
    id: 28,
    name: "彩虹面条",
    emoji: "🌈",
    description: "用彩色面条玩造型",
    howToPlay: [
      "煮熟的面条加食用色素",
      "让宝宝用手抓、摆造型",
      "可以放在托盘上玩"
    ],
    benefits: "丰富感官体验，发挥创意",
    category: "creative",
    duration: "15-20分钟",
    materials: ["面条", "食用色素"]
  },
  {
    id: 29,
    name: "画手印",
    emoji: "✋",
    description: "把手印变成各种图案",
    howToPlay: [
      "手掌蘸颜料印在纸上",
      "用画笔添几笔变成小动物",
      "手印可以变成小鸡、大树等"
    ],
    benefits: "激发想象力，认识身体部位",
    category: "creative",
    duration: "15-20分钟",
    materials: ["颜料", "纸", "画笔"]
  },
  {
    id: 30,
    name: "穿珠子",
    emoji: "📿",
    description: "把大珠子穿成项链",
    howToPlay: [
      "准备大孔珠子和粗绳",
      "让宝宝把珠子一个个穿上",
      "可以按颜色规律穿"
    ],
    benefits: "锻炼精细动作和专注力",
    category: "creative",
    duration: "10-15分钟",
    materials: ["大珠子", "粗绳"]
  },
  {
    id: 31,
    name: "折纸飞机",
    emoji: "🛫",
    description: "折简单的纸飞机",
    howToPlay: [
      "用纸折简单的飞机",
      "让宝宝帮忙折一些步骤",
      "一起飞飞机看谁飞得远"
    ],
    benefits: "锻炼精细动作和因果认知",
    category: "creative",
    duration: "10-15分钟",
    materials: ["纸"]
  },
  {
    id: 32,
    name: "涂鸦板",
    emoji: "🖍️",
    description: "在画板上自由涂鸦",
    howToPlay: [
      "准备画板或大纸",
      "让宝宝随意画",
      "问问他画的是什么"
    ],
    benefits: "自由表达，培养创造力",
    category: "creative",
    duration: "10-20分钟",
    materials: ["画板/蜡笔"]
  },

  // ==================== 认知类游戏 ====================
  {
    id: 33,
    name: "颜色配对",
    emoji: "🔴",
    description: "找出相同颜色的物品",
    howToPlay: [
      "拿出几个不同颜色的玩具或物品",
      "说一个颜色，让宝宝找出来",
      "也可以让宝宝把相同颜色的放一起"
    ],
    benefits: "学习颜色认知和分类能力",
    category: "cognitive",
    duration: "5-10分钟",
    materials: ["彩色玩具/物品"]
  },
  {
    id: 34,
    name: "躲猫猫",
    emoji: "🙈",
    description: "经典的躲猫猫游戏",
    howToPlay: [
      "用手遮住脸说\"宝宝在哪里？\"",
      "然后放开手说\"在这里！\"",
      "也可以躲在毯子后面"
    ],
    benefits: "建立物体恒存概念，增进亲子互动",
    category: "cognitive",
    duration: "5-10分钟"
  },
  {
    id: 35,
    name: "大和小",
    emoji: "🐘",
    description: "认识大小概念",
    howToPlay: [
      "找出大小不同的物品（大球小球）",
      "问宝宝\"哪个大？哪个小？\"",
      "用身体比划大和小"
    ],
    benefits: "学习大小概念和比较能力",
    category: "cognitive",
    duration: "5-10分钟",
    materials: ["大小不同的物品"]
  },
  {
    id: 36,
    name: "数数看",
    emoji: "🔢",
    description: "一起数身边的东西",
    howToPlay: [
      "数宝宝的手指：1、2、3、4、5",
      "数台阶、数水果、数玩具",
      "边数边用手指点"
    ],
    benefits: "启蒙数字概念",
    category: "cognitive",
    duration: "5-10分钟"
  },
  {
    id: 37,
    name: "找不同",
    emoji: "🔍",
    description: "找出不一样的那个",
    howToPlay: [
      "摆出几个相同的物品和一个不同的",
      "问宝宝\"哪个不一样？\"",
      "从简单开始，慢慢增加难度"
    ],
    benefits: "锻炼观察力和辨别能力",
    category: "cognitive",
    duration: "5-10分钟",
    materials: ["玩具/水果"]
  },
  {
    id: 38,
    name: "形状配对",
    emoji: "🔷",
    description: "认识和匹配不同形状",
    howToPlay: [
      "准备不同形状的积木或卡片",
      "说形状名称让宝宝找",
      "把相同形状的放在一起"
    ],
    benefits: "学习形状认知",
    category: "cognitive",
    duration: "5-10分钟",
    materials: ["形状积木"]
  },
  {
    id: 39,
    name: "找玩具",
    emoji: "🧸",
    description: "找出藏起来的玩具",
    howToPlay: [
      "当着宝宝面把玩具藏在毯子下",
      "问\"玩具在哪里？\"",
      "让宝宝找出来"
    ],
    benefits: "发展物体恒存认知",
    category: "cognitive",
    duration: "5-10分钟",
    materials: ["玩具", "毯子"]
  },
  {
    id: 40,
    name: "套杯子",
    emoji: "🥤",
    description: "把杯子按大小套起来",
    howToPlay: [
      "准备大小不同的杯子",
      "让宝宝试着套在一起",
      "也可以摞成高塔"
    ],
    benefits: "认识大小顺序",
    category: "cognitive",
    duration: "5-10分钟",
    materials: ["套杯"]
  },
  {
    id: 41,
    name: "身体部位",
    emoji: "👃",
    description: "认识身体各部位",
    howToPlay: [
      "问\"鼻子在哪里？\"让宝宝指",
      "说\"摸摸你的耳朵\"",
      "可以配合儿歌做动作"
    ],
    benefits: "认识身体，发展语言能力",
    category: "cognitive",
    duration: "5-10分钟"
  },
  {
    id: 42,
    name: "动物叫声",
    emoji: "🐶",
    description: "听动物叫声猜是什么",
    howToPlay: [
      "模仿动物叫声：汪汪、喵喵",
      "问宝宝\"这是什么动物？\"",
      "也让宝宝来学叫声"
    ],
    benefits: "认识动物，锻炼听觉",
    category: "cognitive",
    duration: "5-10分钟"
  },
  {
    id: 43,
    name: "简单拼图",
    emoji: "🧩",
    description: "完成简单的拼图",
    howToPlay: [
      "选择2-4片的简单拼图",
      "先让宝宝看完整图案",
      "一起拼好"
    ],
    benefits: "锻炼空间认知和问题解决",
    category: "cognitive",
    duration: "10-15分钟",
    materials: ["简单拼图"]
  },
  {
    id: 44,
    name: "配对卡片",
    emoji: "🃏",
    description: "找出相同的卡片",
    howToPlay: [
      "准备几对相同的卡片",
      "正面朝上让宝宝找相同的",
      "找到配对就放一起"
    ],
    benefits: "锻炼记忆力和配对能力",
    category: "cognitive",
    duration: "5-10分钟",
    materials: ["配对卡片"]
  },
  {
    id: 45,
    name: "长和短",
    emoji: "📏",
    description: "比较长短",
    howToPlay: [
      "找两根不同长度的东西",
      "问宝宝\"哪个长？哪个短？\"",
      "可以用积木摆出长短"
    ],
    benefits: "学习长短概念",
    category: "cognitive",
    duration: "5-10分钟",
    materials: ["绳子/积木"]
  },
  {
    id: 46,
    name: "上下左右",
    emoji: "⬆️",
    description: "认识方位概念",
    howToPlay: [
      "把玩具放在不同位置",
      "问\"小熊在桌子上面还是下面？\"",
      "让宝宝把玩具放到指定位置"
    ],
    benefits: "学习空间方位概念",
    category: "cognitive",
    duration: "5-10分钟",
    materials: ["玩具"]
  },
  {
    id: 47,
    name: "多和少",
    emoji: "🍎",
    description: "比较数量多少",
    howToPlay: [
      "摆出两堆不同数量的东西",
      "问\"哪边多？哪边少？\"",
      "从明显的差异开始"
    ],
    benefits: "启蒙数量概念",
    category: "cognitive",
    duration: "5-10分钟",
    materials: ["水果/积木"]
  },
  {
    id: 48,
    name: "分类游戏",
    emoji: "🗂️",
    description: "把物品按类别分类",
    howToPlay: [
      "准备不同类别的物品",
      "让宝宝把水果放一起，动物放一起",
      "问\"这是什么类的？\""
    ],
    benefits: "学习分类和归纳能力",
    category: "cognitive",
    duration: "5-10分钟",
    materials: ["各类物品/卡片"]
  },
  {
    id: 49,
    name: "猜猜是什么",
    emoji: "❓",
    description: "用布盖住让宝宝猜",
    howToPlay: [
      "把熟悉的玩具用布盖住",
      "让宝宝摸一摸猜是什么",
      "猜对了打开确认"
    ],
    benefits: "锻炼触觉认知和推理能力",
    category: "cognitive",
    duration: "5-10分钟",
    materials: ["玩具", "布"]
  },
  {
    id: 50,
    name: "冷和热",
    emoji: "🌡️",
    description: "感受冷热概念",
    howToPlay: [
      "准备冷水和温水（安全温度）",
      "让宝宝摸摸感受",
      "说说\"这个冷冷的，那个温温的\""
    ],
    benefits: "认识温度概念",
    category: "cognitive",
    duration: "5分钟",
    materials: ["冷水", "温水"]
  },

  // ==================== 社交情感类游戏 ====================
  {
    id: 51,
    name: "小熊抱抱",
    emoji: "🧸",
    description: "和玩偶玩角色扮演",
    howToPlay: [
      "拿一个毛绒玩具",
      "假装给小熊喂饭、哄睡觉",
      "让宝宝照顾小熊"
    ],
    benefits: "培养同理心和照顾能力",
    category: "social",
    duration: "10-15分钟",
    materials: ["毛绒玩具"]
  },
  {
    id: 52,
    name: "打电话",
    emoji: "📱",
    description: "假装打电话聊天",
    howToPlay: [
      "用玩具电话或手做成电话",
      "\"喂，宝宝在干什么呀？\"",
      "鼓励宝宝回答和提问"
    ],
    benefits: "锻炼语言表达和社交能力",
    category: "social",
    duration: "5-10分钟",
    materials: ["玩具电话（可选）"]
  },
  {
    id: 53,
    name: "拥抱时间",
    emoji: "🤗",
    description: "互相拥抱和表达爱",
    howToPlay: [
      "给宝宝一个大大的拥抱",
      "问\"宝宝爱谁呀？\"",
      "一起说\"我爱你\""
    ],
    benefits: "建立安全感和情感连接",
    category: "social",
    duration: "随时"
  },
  {
    id: 54,
    name: "讲故事时间",
    emoji: "📖",
    description: "一起看绘本讲故事",
    howToPlay: [
      "选一本简单的绘本",
      "指着图画讲故事",
      "问宝宝\"这是什么？\""
    ],
    benefits: "培养语言能力和阅读兴趣",
    category: "social",
    duration: "10-15分钟",
    materials: ["绘本"]
  },
  {
    id: 55,
    name: "唱儿歌",
    emoji: "🎵",
    description: "一起唱有动作的儿歌",
    howToPlay: [
      "选一首简单的儿歌",
      "边唱边做动作",
      "《小星星》《两只老虎》都很好"
    ],
    benefits: "培养音乐感和语言能力",
    category: "social",
    duration: "5-10分钟"
  },
  {
    id: 56,
    name: "过家家",
    emoji: "🏠",
    description: "假装做饭、照顾娃娃",
    howToPlay: [
      "准备玩具厨具或娃娃",
      "假装做饭、喂饭",
      "让宝宝当小爸爸/小妈妈"
    ],
    benefits: "发展想象力和社交技能",
    category: "social",
    duration: "15-30分钟",
    materials: ["玩具厨具/娃娃"]
  },
  {
    id: 57,
    name: "小医生",
    emoji: "👨‍⚕️",
    description: "假装给玩偶看病",
    howToPlay: [
      "准备玩具医药箱",
      "假装给娃娃检查身体",
      "说\"小熊生病了，我们帮它看看\""
    ],
    benefits: "减少对医生的恐惧，培养关爱",
    category: "social",
    duration: "10-15分钟",
    materials: ["玩具医药箱"]
  },
  {
    id: 58,
    name: "分享游戏",
    emoji: "🍪",
    description: "练习和他人分享",
    howToPlay: [
      "准备一些小零食或玩具",
      "说\"分一个给妈妈好吗？\"",
      "轮流分享，表扬宝宝"
    ],
    benefits: "学习分享和社交礼仪",
    category: "social",
    duration: "5-10分钟",
    materials: ["小零食/玩具"]
  },
  {
    id: 59,
    name: "表情游戏",
    emoji: "😊",
    description: "认识和模仿表情",
    howToPlay: [
      "做出开心、难过、惊讶的表情",
      "让宝宝说这是什么感觉",
      "一起照镜子做表情"
    ],
    benefits: "认识情绪，发展情商",
    category: "social",
    duration: "5-10分钟",
    materials: ["镜子（可选）"]
  },
  {
    id: 60,
    name: "说谢谢",
    emoji: "🙏",
    description: "练习礼貌用语",
    howToPlay: [
      "在日常互动中引导",
      "给东西时说\"请\"",
      "收到东西说\"谢谢\""
    ],
    benefits: "学习礼貌和社交规范",
    category: "social",
    duration: "随时"
  },
  {
    id: 61,
    name: "一起做家务",
    emoji: "🧹",
    description: "让宝宝参与简单家务",
    howToPlay: [
      "给宝宝一块小抹布",
      "一起擦桌子、收玩具",
      "做完后一起庆祝"
    ],
    benefits: "培养责任感和成就感",
    category: "social",
    duration: "10-15分钟",
    materials: ["小抹布"]
  },
  {
    id: 62,
    name: "手指谣",
    emoji: "🖐️",
    description: "用手指做各种表演",
    howToPlay: [
      "做手指谣：大拇哥，二拇弟...",
      "让手指变成小人走路",
      "两只手玩石头剪刀布"
    ],
    benefits: "锻炼手指灵活性和语言",
    category: "social",
    duration: "5-10分钟"
  },
  {
    id: 63,
    name: "轮流玩",
    emoji: "🔄",
    description: "学习轮流和等待",
    howToPlay: [
      "选一个玩具",
      "说\"现在妈妈玩，然后轮到宝宝\"",
      "计时轮流，练习等待"
    ],
    benefits: "学习轮流和自控能力",
    category: "social",
    duration: "10-15分钟",
    materials: ["玩具"]
  },
  {
    id: 64,
    name: "角色扮演",
    emoji: "👑",
    description: "扮演不同角色",
    howToPlay: [
      "假装是公主/王子/厨师",
      "换上简单的装扮",
      "按角色说话和做事"
    ],
    benefits: "发展想象力和表达能力",
    category: "social",
    duration: "15-20分钟",
    materials: ["围巾/帽子等装扮"]
  },
  {
    id: 65,
    name: "安慰玩偶",
    emoji: "💝",
    description: "假装玩偶不开心，安慰它",
    howToPlay: [
      "说\"小熊摔倒了，好难过\"",
      "让宝宝安慰小熊",
      "\"抱抱它，说没关系\""
    ],
    benefits: "培养同理心和关爱能力",
    category: "social",
    duration: "5-10分钟",
    materials: ["毛绒玩具"]
  },

  // ==================== 感官探索类游戏 ====================
  {
    id: 66,
    name: "神奇的声音",
    emoji: "🔔",
    description: "听声音猜是什么",
    howToPlay: [
      "让宝宝闭上眼睛",
      "发出各种声音：拍手、敲门、撕纸",
      "让宝宝猜是什么声音"
    ],
    benefits: "锻炼听觉辨别能力",
    category: "sensory",
    duration: "5-10分钟"
  },
  {
    id: 67,
    name: "摸一摸",
    emoji: "✋",
    description: "触摸不同质地的物品",
    howToPlay: [
      "准备不同质地的物品：软的毛巾、硬的积木",
      "让宝宝摸一摸",
      "说说感觉：软软的、硬硬的、滑滑的"
    ],
    benefits: "发展触觉感知能力",
    category: "sensory",
    duration: "5-10分钟",
    materials: ["不同质地的物品"]
  },
  {
    id: 68,
    name: "吹泡泡",
    emoji: "🫧",
    description: "吹泡泡，追泡泡",
    howToPlay: [
      "吹出泡泡",
      "让宝宝追泡泡、戳泡泡",
      "看泡泡飞多高、飞多远"
    ],
    benefits: "锻炼追踪能力和运动协调",
    category: "sensory",
    duration: "10-15分钟",
    materials: ["泡泡水"]
  },
  {
    id: 69,
    name: "沙子乐园",
    emoji: "🏖️",
    description: "玩沙子或大米",
    howToPlay: [
      "在盆里放沙子或大米",
      "让宝宝用小铲子挖、用杯子装",
      "藏小玩具让宝宝挖出来"
    ],
    benefits: "丰富触觉体验，锻炼手部力量",
    category: "sensory",
    duration: "15-20分钟",
    materials: ["沙子/大米", "小容器"]
  },
  {
    id: 70,
    name: "玩水时光",
    emoji: "💧",
    description: "在水盆里玩水",
    howToPlay: [
      "准备一盆温水",
      "放入小杯子、漏勺等",
      "让宝宝舀水、倒水"
    ],
    benefits: "感受水的特性，锻炼手部",
    category: "sensory",
    duration: "15-20分钟",
    materials: ["水盆", "小容器"]
  },
  {
    id: 71,
    name: "闻一闻",
    emoji: "👃",
    description: "闻不同的气味",
    howToPlay: [
      "准备有不同气味的东西",
      "让宝宝闻：橙子香、花香",
      "说说好闻还是不好闻"
    ],
    benefits: "发展嗅觉感知",
    category: "sensory",
    duration: "5-10分钟",
    materials: ["水果/花等"]
  },
  {
    id: 72,
    name: "光影游戏",
    emoji: "🔦",
    description: "用手电筒玩光影",
    howToPlay: [
      "在暗处用手电筒照墙",
      "用手做小动物影子",
      "让宝宝追光点"
    ],
    benefits: "激发好奇心，认识光影",
    category: "sensory",
    duration: "10-15分钟",
    materials: ["手电筒"]
  },
  {
    id: 73,
    name: "冰块探索",
    emoji: "🧊",
    description: "触摸和观察冰块融化",
    howToPlay: [
      "给宝宝一块冰",
      "让他摸摸冷冷的感觉",
      "看冰块慢慢变小"
    ],
    benefits: "感受温度变化，认识融化",
    category: "sensory",
    duration: "10-15分钟",
    materials: ["冰块"]
  },
  {
    id: 74,
    name: "音乐摇摇",
    emoji: "🎶",
    description: "跟着音乐摇摆",
    howToPlay: [
      "放轻快的儿歌",
      "和宝宝一起跟着节奏摇摆",
      "可以用沙锤打节拍"
    ],
    benefits: "培养节奏感和音乐感知",
    category: "sensory",
    duration: "5-10分钟",
    materials: ["音乐"]
  },
  {
    id: 75,
    name: "豆子探索",
    emoji: "🫘",
    description: "抓豆子、倒豆子",
    howToPlay: [
      "在盆里放各种豆子",
      "让宝宝抓起来感受",
      "用勺子舀到小杯子里"
    ],
    benefits: "丰富触觉，锻炼精细动作",
    category: "sensory",
    duration: "10-15分钟",
    materials: ["豆子", "小容器"]
  },
  {
    id: 76,
    name: "看颜色水",
    emoji: "🌈",
    description: "在水里滴入颜料观察",
    howToPlay: [
      "在透明杯里装水",
      "滴入食用色素",
      "看颜色慢慢散开"
    ],
    benefits: "视觉刺激，认识颜色混合",
    category: "sensory",
    duration: "10-15分钟",
    materials: ["水杯", "食用色素"]
  },
  {
    id: 77,
    name: "打击乐",
    emoji: "🥁",
    description: "用锅碗瓢盆打节奏",
    howToPlay: [
      "拿出锅、盆、勺子",
      "让宝宝敲敲打打",
      "一起打节奏"
    ],
    benefits: "探索声音，培养节奏感",
    category: "sensory",
    duration: "10-15分钟",
    materials: ["锅碗瓢盆"]
  },
  {
    id: 78,
    name: "磁铁探险",
    emoji: "🧲",
    description: "用磁铁吸东西",
    howToPlay: [
      "准备一块磁铁",
      "让宝宝试着吸各种东西",
      "发现什么能吸、什么不能"
    ],
    benefits: "探索科学现象，激发好奇心",
    category: "sensory",
    duration: "10-15分钟",
    materials: ["磁铁", "各种物品"]
  },
  {
    id: 79,
    name: "果冻触感",
    emoji: "🍮",
    description: "触摸软软的果冻",
    howToPlay: [
      "做一大块安全的果冻",
      "让宝宝用手戳、捏、压",
      "感受软软滑滑的感觉"
    ],
    benefits: "丰富触觉体验",
    category: "sensory",
    duration: "10-15分钟",
    materials: ["果冻"]
  },
  {
    id: 80,
    name: "纸张声音",
    emoji: "📰",
    description: "撕纸、揉纸听声音",
    howToPlay: [
      "准备不同的纸",
      "让宝宝撕、揉、抖",
      "听听不同的声音"
    ],
    benefits: "探索声音，锻炼手部力量",
    category: "sensory",
    duration: "10-15分钟",
    materials: ["各种纸"]
  },
  {
    id: 81,
    name: "毛绒触感",
    emoji: "🧶",
    description: "触摸不同毛绒材质",
    howToPlay: [
      "准备各种毛绒材料",
      "让宝宝摸：棉花、毛线、绒布",
      "说说软软的、毛毛的"
    ],
    benefits: "发展触觉辨别能力",
    category: "sensory",
    duration: "5-10分钟",
    materials: ["各种毛绒材料"]
  },
  {
    id: 82,
    name: "脚丫探索",
    emoji: "🦶",
    description: "用脚丫感受不同材质",
    howToPlay: [
      "准备不同材质的垫子",
      "让宝宝光脚踩上去",
      "感受软的硬的粗的滑的"
    ],
    benefits: "发展触觉，锻炼平衡",
    category: "sensory",
    duration: "10-15分钟",
    materials: ["不同材质垫子"]
  },
  {
    id: 83,
    name: "放大镜探险",
    emoji: "🔍",
    description: "用放大镜观察东西",
    howToPlay: [
      "准备一个儿童放大镜",
      "观察树叶、手指、小虫子",
      "看看东西变大的样子"
    ],
    benefits: "激发好奇心和观察力",
    category: "sensory",
    duration: "10-15分钟",
    materials: ["放大镜"]
  },
  {
    id: 84,
    name: "味道探索",
    emoji: "👅",
    description: "尝尝不同味道",
    howToPlay: [
      "准备不同味道的安全食物",
      "甜的苹果、酸的柠檬水",
      "让宝宝尝尝说感受"
    ],
    benefits: "发展味觉感知",
    category: "sensory",
    duration: "5-10分钟",
    materials: ["各种食物"]
  },
  {
    id: 85,
    name: "风的游戏",
    emoji: "🌬️",
    description: "感受风吹的感觉",
    howToPlay: [
      "用扇子轻轻扇宝宝",
      "让宝宝感受风",
      "也可以用纸风车玩"
    ],
    benefits: "感受空气流动，丰富感官",
    category: "sensory",
    duration: "5-10分钟",
    materials: ["扇子/风车"]
  },
]

// 分类信息
export const categories = {
  movement: { name: '运动游戏', emoji: '🏃', color: 'from-orange-400 to-rose-400' },
  creative: { name: '创意游戏', emoji: '🎨', color: 'from-purple-400 to-pink-400' },
  cognitive: { name: '认知游戏', emoji: '🧠', color: 'from-cyan-400 to-teal-400' },
  social: { name: '社交情感', emoji: '💝', color: 'from-pink-400 to-rose-400' },
  sensory: { name: '感官探索', emoji: '✨', color: 'from-amber-400 to-orange-400' },
}
