import { TarotCard } from "./types";

// Base URL for card images
// Using local images stored in public folder for better performance and offline support
const LOCAL_CDN = `${import.meta.env.BASE_URL}images/cards/`;
// Fallback to Sacred Texts Archive if local images are not available
const REMOTE_CDN = "https://www.sacred-texts.com/tarot/pkt/img/";

export const MAJOR_ARCANA: TarotCard[] = [
  {
    id: 0,
    nameEn: "The Fool",
    nameCn: "愚人",
    keywords: ["无限潜力", "新的开始", "纯真", "自由", "冒险"],
    image: "ar00.jpg",
    positive:
      "从零开始; 好赌运; 不墨守成规; 追求新奇的梦想; 冒险; 放浪形骸; 艺术家的气质; 异于常人; 直攻要害、盲点; 爱情狩猎者; 爱情历经沧桑; 不拘形式的自由恋爱",
    negative:
      "不安定; 孤注一掷会失败; 缺乏责任感; 损失; 脚跟站不稳; 堕落; 没发展; 没计划; 走错路; 行为乖张; 轻浮的恋情; 感情忽冷忽热; 不安定的爱情之旅",
  },
  {
    id: 1,
    nameEn: "The Magician",
    nameCn: "魔术师",
    keywords: ["显化", "意志力", "创造", "资源", "专注"],
    image: "ar01.jpg",
    positive:
      "好的开始; 具独创性; 有发展的; 新计划成功; 想像力丰富或有好点子; 有恋情发生; 拥有默契良好的伴侣; 有新恋人出现; 值得效仿的对象出现",
    negative:
      "失败; 优柔寡断; 才能平庸; 有被欺诈的危险; 技术不足; 过于消极; 没有判断力; 缺乏创造力; 爱情没有进展",
  },
  {
    id: 2,
    nameEn: "The High Priestess",
    nameCn: "女祭司",
    keywords: ["直觉", "潜意识", "神秘", "内在智慧", "静默"],
    image: "ar02.jpg",
    positive:
      "知性、优秀的判断力; 具洞察力及先见之明; 强大的战斗意志; 冷静的统率力; 学问、研究等精神方面幸运; 独立自主的女性; 柏拉图式的爱情; 有心灵上交往至深的友人; 冷淡的恋情",
    negative:
      "无知、缺乏理解力; 研究不足; 不理性的态度; 自我封闭; 神经质; 洁癖; 与女性朋友柒争执; 对人冷淡; 晚婚或独身主义; 没有结果的单相思; 气色不好; 不孕",
  },
  {
    id: 3,
    nameEn: "The Empress",
    nameCn: "皇后",
    keywords: ["丰饶", "自然", "母性", "感官享受", "孕育"],
    image: "ar03.jpg",
  },
  {
    id: 4,
    nameEn: "The Emperor",
    nameCn: "皇帝",
    keywords: ["权威", "结构", "控制", "父亲原型", "秩序"],
    image: "ar04.jpg",
    positive:
      "以坚强的意志力及手腕获致成功; 富裕和力量; 有责任感; 良好的处理能力; 具领导能力; 男性的思考; 坚持到底; 虽有点专制却值得信赖; 条件诱人的提亲; 与年长者恋爱",
    negative:
      "不成熟; 意志薄弱; 虚有其表; 看不清现实; 欠缺实务能力; 因傲慢而招人反感; 工作过度; 固执; 没有经济基础; 没有好对象; 苦恋结束; 勉强的感情",
  },
  {
    id: 5,
    nameEn: "The Hierophant",
    nameCn: "教皇",
    keywords: ["传统", "信仰", "教导", "社会规范", "精神指引"],
    image: "ar05.jpg",
    positive:
      "受人信赖; 有贵人相助; 贡献; 受上司重视; 能胜任工作; 拥有一颗温柔的心; 受惠于有益的建言; 接触宗教的事物大吉; 与年长的异性有缘; 良缘; 深情宽大的爱; 有结良缘的机会",
    negative:
      "没信用; 没有贵人相助; 孤立无援; 不受欢迎的好意; 依赖心是最大的敌人; 太罗嗦而讨人厌; 碍于私情而无法成功; 心胸狭窄; 得不到亲人的谅解的恋情; 彼此过于关心; 缘分浅薄的恋情",
  },
  {
    id: 6,
    nameEn: "The Lovers",
    nameCn: "恋人",
    keywords: ["爱", "和谐", "价值观", "选择", "结合"],
    image: "ar06.jpg",
    positive:
      "幸运的结合; 有希望的将来; 有共同做事的伙伴; 与人合作或社团活动; 敏感决定前进之路的好时机; 有意气相投的朋友; 爱情机会将到来; 罗曼蒂克的恋情; 爱的预感",
    negative:
      "分离; 消解; 不合作的态度; 眼花缭乱; 没有满意的成果; 无法持续; 退休; 妨碍; 血气方刚; 多情的人; 分手; 冷漠的爱; 背信; 逃避爱情; 短暂的恋情",
  },
  {
    id: 7,
    nameEn: "The Chariot",
    nameCn: "战车",
    keywords: ["意志力", "胜利", "决心", "自我掌控", "进取"],
    image: "ar07.jpg",
    positive:
      "前进必胜; 先下手为强; 独立; 起程; 在颠簸中仍有好成绩; 活泼; 有野心; 以速度取胜; 有开拓精神; 握有指挥权; 战胜敌手; 富行动力的恋情; 恋爱的胜利者",
    negative:
      "失败; 丧失战斗意志; 状态不佳; 挫折; 性子过急为失败之因; 不感兴趣; 效率不佳; 资金运转困难; 无奋斗精神; 有强劲敌手进入; 被拒绝; 因怯懦而使恋情不顺",
  },
  {
    id: 8,
    nameEn: "Strength",
    nameCn: "力量",
    keywords: ["勇气", "耐心", "同情", "内在力量", "驯服"],
    image: "ar08.jpg",
    positive:
      "不屈不挠的精神; 将不可能化为可能的意志力; 全力以赴; 突破难关; 坚强的信念和努力; 挑战已知危险的勇气; 神秘的力量; 旺盛的斗志; 轰轰烈烈的恋情; 克服困难的真实爱情",
    negative:
      "疑心病; 犹豫不决; 实力不足; 无忍耐力; 危险的赌注; 勉强为之而适得其反; 丧失自信; 喜欢故弄玄虚; 体力不足; 自大自负; 误用力气",
  },
  {
    id: 9,
    nameEn: "The Hermit",
    nameCn: "隐士",
    keywords: ["内省", "孤独", "寻求真理", "指引", "撤退"],
    image: "ar09.jpg",
    positive:
      "智能与卓越见解; 不断地追求更高层次的东西; 思虑周密; 冷静沉着; 不多言; 接触知性事物吉; 正中核心的建言; 活动慢慢进行较有成果; 出局; 追求柏拉图式的爱情; 暗中的爱情",
    negative:
      "一视同仁; 不够通融; 不专心易生错误; 过分警戒，无法顺利进行; 秘密泄漏; 过于固执不听别人的意见; 孤独; 动机不单纯; 因怨言及偏   见招人嫌; 轻浮的爱情; 怀疑爱情",
  },
  {
    id: 10,
    nameEn: "Wheel of Fortune",
    nameCn: "命运之轮",
    keywords: ["宿命", "转折点", "周期", "运气", "改变"],
    image: "ar10.jpg",
    positive:
      "机会到来; 随机应变能力佳; 好运; 转换期; 意想不到的幸运; 升迁有望; 变化丰富; 好时机; 宿命的相逢; 一见钟情; 幸运的婚姻; 富贵的身份",
    negative:
      "低潮期; 时机未到; 评估易出错; 时机不好; 没有头绪; 处于劣势; 生活艰苦; 情况恶化; 计划停滞需要再等待; 失恋; 短暂的恋情; 易错失良机; 不敌诱惑; 爱情无法持久",
  },
  {
    id: 11,
    nameEn: "Justice",
    nameCn: "正义",
    keywords: ["公平", "真理", "因果", "法律", "平衡"],
    image: "ar11.jpg",
    positive:
      "公正; 严正的意见; 良好的均衡关系; 严守中立立场; 凡事合理化; 身兼两种工作; 协调者; 与裁判、法律相关者; 表里一致的公正人物; 以诚实之心光明正大地交往; 彼此能获得协调",
    negative:
      "不公正; 不平衡; 不利的条件; 偏颇; 先入为主的观念; 偏见与独断; 纷争、诉讼; 问心有愧; 无法两全; 天平两边无法平衡; 性格不一致; 无视于社会道德观的恋情; 偏爱",
  },
  {
    id: 12,
    nameEn: "The Hanged Man",
    nameCn: "倒吊人",
    keywords: ["牺牲", "等待", "新视角", "放下", "暂停"],
    image: "ar12.jpg",
    positive:
      "接受考验; 无法动弹; 被牺牲; 有失必有得; 从痛苦的体验中获得教训; 过度期; 不贪图眼前利益; 浴火重生; 多方学习; 奉献的爱; 明知辛苦但全力以赴",
    negative:
      "无谓的牺牲; 折断骨头; 有噩运、居于劣势; 任性妄为; 不努力; 变得没有耐性; 利己主义者; 受到惩罚; 无偿的爱; 缺乏共同奋斗的伙伴",
  },
  {
    id: 13,
    nameEn: "Death",
    nameCn: "死神",
    keywords: ["结束", "重生", "转变", "必然性", "过渡"],
    image: "ar13.jpg",
    positive:
      "失败; 毁灭之日将近; 损害继续延续; 失业; 进展停滞; 交易停止; 为时已晚; 停滞状态; 生病或意外的暗示; 味如嚼蜡的生活; 不幸的恋情; 恋情终止; 彼此间有很深的鸿沟; 别离",
    negative:
      "起死回生的机会; 脱离低迷期; 改变印象; 回心转意再出发; 挽回名誉; 奇迹似地康复; 突然改变方针; 已经死心的   事有了转机; 斩断情丝，重新出发",
  },
  {
    id: 14,
    nameEn: "Temperance",
    nameCn: "节制",
    keywords: ["平衡", "温和", "调和", "耐心", "炼金术"],
    image: "ar14.jpg",
    positive:
      "单纯化; 顺畅; 交往平顺; 两者相融顺畅; 调整; 彼此交换有利条件; 平凡中也有重要的契机; 平顺的心境; 纯爱; 从好感转为爱意; 深爱",
    negative:
      "消耗; 每节制的损耗，对身心产生不好的影响; 疲劳; 不定性的工作; 缺乏调整能力; 下降; 浪费; 不要与人 合作; 不融洽; 爱情的配合度不佳",
  },
  {
    id: 15,
    nameEn: "The Devil",
    nameCn: "恶魔",
    keywords: ["束缚", "物质主义", "诱惑", "阴影", "成瘾"],
    image: "ar15.jpg",
    positive:
      "被束缚; 堕落; 恶魔的私语; 卑躬屈膝; 欲望的俘虏; 荒废的生活; 举债度日; 病魔入侵; 夜游过多; 不可告人的事; 恶意; 不可抗拒的诱惑; 私密恋情; 沉溺于感官刺激之下",
    negative:
      "逃离拘束; 长期的苦恼获得解放; 斩断前缘; 越过难关; 暂时停止; 拒绝诱惑; 舍弃私欲; 治愈长期病痛; 别离   时刻; 如深陷泥沼爱恨交加的恋情",
  },
  {
    id: 16,
    nameEn: "The Tower",
    nameCn: "高塔",
    keywords: ["剧变", "启示", "破坏", "觉醒", "混乱"],
    image: "ar16.jpg",
    positive:
      "致命的打击; 纷争; 纠纷不断; 与周遭事物对立，情况恶化; 意想不到的事情; 急病; 受牵连; 急剧的大变动; 信念奔溃; 逆境; 破产; 没有预警，突然分离; 破灭的爱; 玩火自焚",
    negative:
      "紧迫的状态; 险恶的气氛; 内讧; 即将破灭; 急需解决的问题; 承受震撼; 背水一战; 注意刑事问题; 因骄傲自大将付出惨痛的代价; 状况不佳; 困境; 爱情危机; 分离的预感",
  },
  {
    id: 17,
    nameEn: "The Star",
    nameCn: "星星",
    keywords: ["希望", "灵感", "宁静", "疗愈", "更新"],
    image: "ar17.jpg",
    positive:
      "愿望达成; 前途光明; 充满希望的未来; 美好的生活; 曙光出现; 大胆的幻想; 水准提高; 新的创造力; 想像力; 理想的对象; 美好的恋情; 爱苗滋生",
    negative:
      "挫折、失败; 理想过高; 缺乏想像力; 异想天开; 事与愿违; 失望; 从事不喜欢的工作; 好高骛远; 情况悲观; 不可期待的对象; 没 有爱的生活; 秘密恋情; 仓皇失措",
  },
  {
    id: 18,
    nameEn: "The Moon",
    nameCn: "月亮",
    keywords: ["幻觉", "潜意识", "不安", "梦境", "直觉"],
    image: "ar18.jpg",
    positive:
      "不安与动摇; 心中不平静; 谎言; 暧昧不明; 鬼迷心窍; 暗藏动乱; 欺骗; 终止; 不安的爱; 三角关系",
    negative:
      "从危险的骗局中逃脱; 状况稍为好转; 误会冰释; 破除迷惘; 时间能解决一切; 眼光要长远; 静观等待; 早期发现早期治疗有效; 事前察知危险; 对虚情假意的恋情已不在乎",
  },
  {
    id: 19,
    nameEn: "The Sun",
    nameCn: "太阳",
    keywords: ["快乐", "成功", "活力", "清晰", "温暖"],
    image: "ar19.jpg",
    positive:
      "丰富的生命力; 巨大的成就感; 人际关系非常好; 爱情美满; 内心充满了热情和力量; 一定能够实现的约定; 飞黄腾达; 无忧无虑",
    negative:
      "情绪低落; 事情失败; 朋友的离去和人际关系的恶化; 无法安定内心; 忧郁孤单寂寞; 爱情不顺 利; 取消的计划; 工作上困难重重",
  },
  {
    id: 20,
    nameEn: "Judgement",
    nameCn: "审判",
    keywords: ["觉醒", "反思", "重生", "召唤", "赦免"],
    image: "ar20.jpg",
    positive:
      "复活的喜悦; 开运; 公开; 改革期; 危机解除; 决断; 荣升; 崭露头角; 好消息; 爱的使者; 恢复健康; 坦白; 复苏的爱; 再会; 爱的奇迹",
    negative:
      "一败不起; 幻灭; 离复苏还有很长的时间; 不利的决定; 不被采用; 还未开始就结束了; 坏消息; 延期; 无法决定; 虽重新开始，却又恢复原状; 分离、消除; 恋恋不舍",
  },
  {
    id: 21,
    nameEn: "The World",
    nameCn: "世界",
    keywords: ["圆满", "完成", "旅行", "成就", "整体"],
    image: "ar21.jpg",
    positive:
      "完成; 成功; 拥有毕生的志业; 达成目标; 永续不断; 最盛期; 完美无缺; 接触异国，将获得幸运; 到达标准; 精神亢奋; 快乐的结束; 模范情侣",
    negative:
      "未完成; 无法达到计划中的成就; 因准备不足而失败; 中途无法在进行; 不完全燃烧; 一时不顺利; 饱和状态; 烦恼延续; 精神松弛; 个人惯用的表现方式; 因不成熟而 使情感受挫; 合谋; 态度不够圆融",
  },
];

// Specific definitions for the 56 Minor Arcana cards
export const MINOR_ARCANA: TarotCard[] = [
  // --- WANDS (Fire / Action) ---
  {
    id: 22,
    nameEn: "Ace of Wands",
    nameCn: "权杖首牌",
    keywords: ["灵感", "新机会", "创造力", "潜力"],
    image: "waac.jpg",
  },
  {
    id: 23,
    nameEn: "Two of Wands",
    nameCn: "权杖二",
    keywords: ["未来规划", "决定", "发现", "掌控"],
    image: "wa02.jpg",
  },
  {
    id: 24,
    nameEn: "Three of Wands",
    nameCn: "权杖三",
    keywords: ["扩张", "远见", "海外", "进步"],
    image: "wa03.jpg",
  },
  {
    id: 25,
    nameEn: "Four of Wands",
    nameCn: "权杖四",
    keywords: ["庆祝", "和谐", "回家", "安稳"],
    image: "wa04.jpg",
  },
  {
    id: 26,
    nameEn: "Five of Wands",
    nameCn: "权杖五",
    keywords: ["冲突", "竞争", "分歧", "挑战"],
    image: "wa05.jpg",
  },
  {
    id: 27,
    nameEn: "Six of Wands",
    nameCn: "权杖六",
    keywords: ["胜利", "认可", "自信", "成就"],
    image: "wa06.jpg",
  },
  {
    id: 28,
    nameEn: "Seven of Wands",
    nameCn: "权杖七",
    keywords: ["防御", "坚持", "挑战", "勇气"],
    image: "wa07.jpg",
  },
  {
    id: 29,
    nameEn: "Eight of Wands",
    nameCn: "权杖八",
    keywords: ["速度", "行动", "消息", "快速变化"],
    image: "wa08.jpg",
  },
  {
    id: 30,
    nameEn: "Nine of Wands",
    nameCn: "权杖九",
    keywords: ["韧性", "防御", "最后坚持", "疲惫"],
    image: "wa09.jpg",
  },
  {
    id: 31,
    nameEn: "Ten of Wands",
    nameCn: "权杖十",
    keywords: ["负担", "责任", "压力", "努力"],
    image: "wa10.jpg",
  },
  {
    id: 32,
    nameEn: "Page of Wands",
    nameCn: "权杖侍从",
    keywords: ["探索", "新想法", "热情", "自由"],
    image: "wapa.jpg",
  },
  {
    id: 33,
    nameEn: "Knight of Wands",
    nameCn: "权杖骑士",
    keywords: ["冲动", "激情", "行动", "冒险"],
    image: "wakn.jpg",
  },
  {
    id: 34,
    nameEn: "Queen of Wands",
    nameCn: "权杖王后",
    keywords: ["自信", "独立", "社交", "活力"],
    image: "waqu.jpg",
  },
  {
    id: 35,
    nameEn: "King of Wands",
    nameCn: "权杖国王",
    keywords: ["领导", "远见", "企业家", "荣誉"],
    image: "waki.jpg",
  },

  // --- CUPS (Water / Emotion) ---
  {
    id: 36,
    nameEn: "Ace of Cups",
    nameCn: "圣杯首牌",
    keywords: ["新感情", "同情", "创造力", "灵性"],
    image: "cuac.jpg",
  },
  {
    id: 37,
    nameEn: "Two of Cups",
    nameCn: "圣杯二",
    keywords: ["伴侣", "结合", "吸引", "平等"],
    image: "cu02.jpg",
  },
  {
    id: 38,
    nameEn: "Three of Cups",
    nameCn: "圣杯三",
    keywords: ["友谊", "社群", "聚会", "快乐"],
    image: "cu03.jpg",
  },
  {
    id: 39,
    nameEn: "Four of Cups",
    nameCn: "圣杯四",
    keywords: ["冷漠", "沉思", "错失机会", "厌倦"],
    image: "cu04.jpg",
  },
  {
    id: 40,
    nameEn: "Five of Cups",
    nameCn: "圣杯五",
    keywords: ["悲伤", "失望", "遗憾", "丧失"],
    image: "cu05.jpg",
  },
  {
    id: 41,
    nameEn: "Six of Cups",
    nameCn: "圣杯六",
    keywords: ["怀旧", "童年", "纯真", "重逢"],
    image: "cu06.jpg",
  },
  {
    id: 42,
    nameEn: "Seven of Cups",
    nameCn: "圣杯七",
    keywords: ["幻觉", "选择", "白日梦", "困惑"],
    image: "cu07.jpg",
  },
  {
    id: 43,
    nameEn: "Eight of Cups",
    nameCn: "圣杯八",
    keywords: ["离开", "寻找", "放弃", "旅行"],
    image: "cu08.jpg",
  },
  {
    id: 44,
    nameEn: "Nine of Cups",
    nameCn: "圣杯九",
    keywords: ["满足", "愿望成真", "感激", "享受"],
    image: "cu09.jpg",
  },
  {
    id: 45,
    nameEn: "Ten of Cups",
    nameCn: "圣杯十",
    keywords: ["和谐", "幸福", "家庭", "团圆"],
    image: "cu10.jpg",
  },
  {
    id: 46,
    nameEn: "Page of Cups",
    nameCn: "圣杯侍从",
    keywords: ["直觉", "创意", "新消息", "敏感"],
    image: "cupa.jpg",
  },
  {
    id: 47,
    nameEn: "Knight of Cups",
    nameCn: "圣杯骑士",
    keywords: ["浪漫", "魅力", "想象力", "追求"],
    image: "cukn.jpg",
  },
  {
    id: 48,
    nameEn: "Queen of Cups",
    nameCn: "圣杯王后",
    keywords: ["慈悲", "关怀", "情感", "直觉"],
    image: "cuqu.jpg",
  },
  {
    id: 49,
    nameEn: "King of Cups",
    nameCn: "圣杯国王",
    keywords: ["情绪平衡", "控制", "宽容", "外交"],
    image: "cuki.jpg",
  },

  // --- SWORDS (Air / Intellect) ---
  {
    id: 50,
    nameEn: "Ace of Swords",
    nameCn: "宝剑首牌",
    keywords: ["突破", "清晰", "真理", "决断"],
    image: "swac.jpg",
  },
  {
    id: 51,
    nameEn: "Two of Swords",
    nameCn: "宝剑二",
    keywords: ["僵局", "艰难决定", "回避", "权衡"],
    image: "sw02.jpg",
  },
  {
    id: 52,
    nameEn: "Three of Swords",
    nameCn: "宝剑三",
    keywords: ["心碎", "悲伤", "痛苦", "分离"],
    image: "sw03.jpg",
  },
  {
    id: 53,
    nameEn: "Four of Swords",
    nameCn: "宝剑四",
    keywords: ["休息", "恢复", "沉思", "被动"],
    image: "sw04.jpg",
  },
  {
    id: 54,
    nameEn: "Five of Swords",
    nameCn: "宝剑五",
    keywords: ["失败", "背叛", "冲突", "空虚的胜利"],
    image: "sw05.jpg",
  },
  {
    id: 55,
    nameEn: "Six of Swords",
    nameCn: "宝剑六",
    keywords: ["过渡", "离开", "治愈", "前进"],
    image: "sw06.jpg",
  },
  {
    id: 56,
    nameEn: "Seven of Swords",
    nameCn: "宝剑七",
    keywords: ["欺骗", "策略", "隐秘", "逃避"],
    image: "sw07.jpg",
  },
  {
    id: 57,
    nameEn: "Eight of Swords",
    nameCn: "宝剑八",
    keywords: ["束缚", "受害者心态", "无助", "限制"],
    image: "sw08.jpg",
  },
  {
    id: 58,
    nameEn: "Nine of Swords",
    nameCn: "宝剑九",
    keywords: ["焦虑", "噩梦", "担忧", "恐惧"],
    image: "sw09.jpg",
  },
  {
    id: 59,
    nameEn: "Ten of Swords",
    nameCn: "宝剑十",
    keywords: ["毁灭", "痛苦结局", "背叛", "最低点"],
    image: "sw10.jpg",
  },
  {
    id: 60,
    nameEn: "Page of Swords",
    nameCn: "宝剑侍从",
    keywords: ["好奇", "警惕", "新想法", "沟通"],
    image: "swpa.jpg",
  },
  {
    id: 61,
    nameEn: "Knight of Swords",
    nameCn: "宝剑骑士",
    keywords: ["急躁", "直接", "行动", "野心"],
    image: "swkn.jpg",
  },
  {
    id: 62,
    nameEn: "Queen of Swords",
    nameCn: "宝剑王后",
    keywords: ["敏锐", "独立", "清晰", "界限"],
    image: "swqu.jpg",
  },
  {
    id: 63,
    nameEn: "King of Swords",
    nameCn: "宝剑国王",
    keywords: ["理智", "权威", "真理", "公正"],
    image: "swki.jpg",
  },

  // --- PENTACLES (Earth / Material) ---
  {
    id: 64,
    nameEn: "Ace of Pentacles",
    nameCn: "星币首牌",
    keywords: ["新机会", "繁荣", "丰富", "表现"],
    image: "peac.jpg",
  },
  {
    id: 65,
    nameEn: "Two of Pentacles",
    nameCn: "星币二",
    keywords: ["平衡", "适应", "优先顺位", "灵活"],
    image: "pe02.jpg",
  },
  {
    id: 66,
    nameEn: "Three of Pentacles",
    nameCn: "星币三",
    keywords: ["团队", "合作", "技能", "计划"],
    image: "pe03.jpg",
  },
  {
    id: 67,
    nameEn: "Four of Pentacles",
    nameCn: "星币四",
    keywords: ["控制", "占有", "保守", "安全"],
    image: "pe04.jpg",
  },
  {
    id: 68,
    nameEn: "Five of Pentacles",
    nameCn: "星币五",
    keywords: ["贫穷", "孤立", "不安全", "困难"],
    image: "pe05.jpg",
  },
  {
    id: 69,
    nameEn: "Six of Pentacles",
    nameCn: "星币六",
    keywords: ["慈善", "慷慨", "分享", "平衡"],
    image: "pe06.jpg",
  },
  {
    id: 70,
    nameEn: "Seven of Pentacles",
    nameCn: "星币七",
    keywords: ["耐心", "投资", "等待", "长期规划"],
    image: "pe07.jpg",
  },
  {
    id: 71,
    nameEn: "Eight of Pentacles",
    nameCn: "星币八",
    keywords: ["勤奋", "技能", "工艺", "细节"],
    image: "pe08.jpg",
  },
  {
    id: 72,
    nameEn: "Nine of Pentacles",
    nameCn: "星币九",
    keywords: ["富足", "奢华", "自给自足", "成就"],
    image: "pe09.jpg",
  },
  {
    id: 73,
    nameEn: "Ten of Pentacles",
    nameCn: "星币十",
    keywords: ["财富", "遗产", "家庭", "长期成功"],
    image: "pe10.jpg",
  },
  {
    id: 74,
    nameEn: "Page of Pentacles",
    nameCn: "星币侍从",
    keywords: ["好学", "务实", "新机会", "显化"],
    image: "pepa.jpg",
  },
  {
    id: 75,
    nameEn: "Knight of Pentacles",
    nameCn: "星币骑士",
    keywords: ["勤奋", "效率", "例行公事", "保守"],
    image: "pekn.jpg",
  },
  {
    id: 76,
    nameEn: "Queen of Pentacles",
    nameCn: "星币王后",
    keywords: ["养育", "务实", "安全", "居家"],
    image: "pequ.jpg",
  },
  {
    id: 77,
    nameEn: "King of Pentacles",
    nameCn: "星币国王",
    keywords: ["富裕", "商业", "领导", "安全感"],
    image: "peki.jpg",
  },
];

// Helper to get image URL with fallback support
// Tries local image first, falls back to remote CDN if not available
export const getCardImageUrl = (image: string) => `${LOCAL_CDN}${image}`;
export const getCardImageFallbackUrl = (image: string) =>
  `${REMOTE_CDN}${image}`;

export const FULL_DECK: TarotCard[] = [...MAJOR_ARCANA, ...MINOR_ARCANA];

// Pre-defined scripts for the static voice parts
export const STATIC_SCRIPTS = {
  WELCOME: "静心凝视深渊。当你的直觉苏醒时，进入命运之门。",
  ASK: "心中的疑惑，是通往真理的钥匙。告诉我，你为何而来？",
  SHUFFLE: "星辰正在归位，混乱中孕育着秩序。专注于你的问题。",
  PICK: "在流动的命运中，选择你的指引。",
  REVEAL: "这就是……命运的回响。",
};
