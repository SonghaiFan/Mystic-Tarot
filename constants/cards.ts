/**
 * Tarot Card Definitions and Utilities
 *
 * This module draws inspiration from "The Pictorial Key to the Tarot" (1911) by A.E. Waite,
 * illustrated by Pamela Colman Smith. The Tarot, as presented here, is not merely a tool for fortune-telling,
 * but a vessel of profound symbolism and spiritual tradition, reflecting the "higher mystic schools" and
 * the veiled mysteries of divination. Each card is described with an emphasis on its symbolic imagery and
 * deeper meaning, in the spirit of Waite's original text, which sought to rescue the Tarot from mere
 * cartomancy and restore its place as a key to inner wisdom and the "Sanctuary" of the soul.
 *
 * Card images are sourced from local assets for performance and offline support, with a fallback to the
 * Sacred Texts Archive. The descriptions and keywords aim to honor the poetic and esoteric qualities
 * emphasized by Waite, inviting users to contemplate the Tarot as a journey of the spirit, not just a game of chance.
 *
 * Source: The Pictorial Key to the Tarot, by A.E. Waite, ill. by Pamela Colman Smith [1911], public domain (US).
 */

import { TarotCard, CardPoolType } from "../types";

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
    keywords: ["无限潜力", "新的开始", "赤子之心", "纯真", "自由", "冒险"],
    image: "ar00.jpg",
    descriptionCn:
      "他轻盈地前行，仿佛大地及其束缚对他无力，一位身着华丽服饰的年轻人停在世界之巅的悬崖边缘；他凝视着眼前的蓝色远方——那片天空比下方景色更为广阔。尽管他此刻静止不动，但他急切的行走姿态依然可见；他的狗仍在跳跃。那道通向深谷的边缘毫无恐惧；仿佛天使正等待扶持他，若他真的从高处跃下。他的面容充满智慧与期盼的梦境。他一手持玫瑰，另一手持昂贵的魔杖，魔杖上悬挂着一个绣有精美图案的钱袋，斜挂在右肩。他是另一个世界的王子，正在这个世界的旅途中——置身于晨光之中，呼吸着清冽的空气。身后的太阳知道他来自何方，将去往何处，以及许多日后将沿另一条路径归来。他是寻求体验的灵魂。这张牌中浓缩了诸多与神秘仪式相关的象征，它逆转了之前的所有混乱，在崇高的授权下。我们将根据常见的占卜技艺来看这张牌如何发挥作用，对于那些能够辨识的人而言，这将是一个例证，证明大阿卡那原本就没有在心理赌博中使用纸牌作为筹码和借口时，占卜技艺中不存在。然而，关于这种技艺产生的背景，我们知之甚少。传统的解释说，愚人象征着肉体，感性生命，并通过一种独特的讽刺，它的别名叫炼金术士，描绘了最无知的阶段。关于这部分，最后我要给出关于愚人的进一步指示，这是所有符号中最具代表性的。他象征着向外的旅程，第一层显现的状态，精神的恩典与被动性。他的钱袋上刻着模糊的符号，表明许多潜意识记忆储存在灵魂中。",
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
    descriptionCn:
      "一个身穿魔法师长袍的年轻身影,面容如神圣的阿波罗,带着自信的微笑和闪亮的眼睛。他头顶上方是圣灵的神秘符号,生命的符号,如同无尽的绳索,水平排列成数字 8。腰间系着一条蛇形束带,蛇似乎吞噬自己的尾巴。这对大多数人来说是永恒的传统象征,但这里它更特别地指的是灵性中永恒的成就。魔法师右手持一根指向天空的魔杖,左手指向大地。这种双重符号在《设立的奥秘》的高年级中广为人知;它展现了恩典、美德与光明的降临,源自上方,源自下方。因此,贯穿始终的暗示是拥有并传达圣灵的能力与恩赐。魔法师面前的桌子上是四种塔罗牌花色的符号,象征自然生命的元素,这些元素如同计数器般摆放在高手面前,他会根据自己的意愿调整它们。下面是玫瑰和百合,花卉和花莲花被变成花园花卉 ,展现着理想的文化。这张牌象征着人内在的神圣动机,反映上帝,意愿解放其与上方的结合。它也是个体存在在所有层面上的统一,并且在很高的意义上被认为是对其的执着。",
    descriptionEn:
      "The Magus, Magician, or juggler, the caster of the dice and mountebank, in the world of vulgar trickery. This is the colportage interpretation, and it has the same correspondence with the real symbolical meaning that the use of the Tarot in fortune-telling has with its mystic construction according to the secret science of symbolism. I should add that many independent students of the subject, following their own lights, have produced individual sequences of meaning in respect of the Trumps Major, and their lights are sometimes suggestive, but they are not the true lights. For example, Eliphas Levi says that the Magus signifies that unity which is the mother of numbers; others say that it is the Divine Unity; and one of the latest French commentators considers that in its general sense it is the will.",
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
    descriptionCn:
      "她脚下有月牙,头戴带角的王冠,中央有一个地球仪,胸前有一个巨大的太阳十字架。她手中的卷轴刻有“Tora”一词,象征更高的法则、秘密法则以及“神话”的第二义。她的披风部分遮盖着它,以表明有些事情是暗示的,有些是说出来的。她坐在神秘神庙的白柱和黑柱之间。神庙的面纱在她身后：上面绣有棕榈和石榴。祭服飘逸而朦胧,披风暗示着光芒——闪烁的光辉。她被称为伊西斯圣所门槛上的神秘科学,但她实际上是秘密教会,是神与人的殿堂。她也代表了已不在这个世界的王子的第二次婚姻;她是灵性的新娘与母亲,星辰与伊甸园的高地之女。她是借来之光的女王,但这才是万物之光。她是由至高母亲乳汁滋养的月亮。",
    descriptionEn:
      "The High Priestess, the Pope Joan, or Female Pontiff; early expositors have sought to term this card the Mother, or Pope's Wife, which is opposed to the symbolism. It is sometimes held to represent the Divine Law and the Gnosis, in which case the Priestess corresponds to the idea of the Shekinah. She is the Secret Tradition and the higher sense of the instituted Mysteries.",
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
    descriptionCn:
      "一位庄严的坐姿人物,身着华丽的服饰,具有王室气质,如同天地之女。她的头冠由十二颗星星组成一簇。在她附近的盾牌上刻有维纳斯的象征。她面前的田野里谷物正在成熟,远处有瀑布流淌。她手持的权杖顶端是地球仪。她是伊甸园下界,尘世的天堂,象征着人类可见之家的所有事物。她不是天主之女,但仍是罪人的庇护所,是能生养千子的丰饶母亲。在某些方面,她被正确地描述为欲望及其翅膀,如披着太阳衣裳的女人,如世界之荣光和圣所的幕布；但我可以补充,除非以另一种不寻常的方式计算所有象征意义,她并非获得翅膀的灵魂。她最重要的是普遍的丰饶和话语的外在意义。这是显而易见的,因为人类没有直接收到像女性所承载的那样明确的信息；但她自己并不携带其解释。",
    descriptionEn:
      "The Empress, who is sometimes represented with full face, while her correspondence, the Emperor, is in profile. As there has been some tendency to ascribe a symbolical significance to this distinction, it seems desirable to say that it carries no inner meaning. The Empress has been connected with the ideas of universal fecundity and in a general sense with activity.",
    positive:
      "母性本能强; 富创造力; 事业有成; 生活富足; 感情充实; 美好的恋情; 受人爱戴的对象; 有结婚的机会; 温柔体贴的伴侣",
    negative:
      "缺乏母性本能; 创造力不足; 生活贫困; 事业不顺; 感情不满; 难以取悦的对象; 难以结婚; 冷淡的伴侣",
  },
  {
    id: 4,
    nameEn: "The Emperor",
    nameCn: "皇帝",
    keywords: ["权威", "结构", "控制", "父亲原型", "秩序"],
    image: "ar04.jpg",
    descriptionCn:
      "他的权杖是十字钥匙形状,左手持一个球体。他是一位戴着王冠的君主——威严、庄重,坐在一把由公羊头装饰的宝座上。他是执行与实现,是这个世界上的权力,此刻披着其最崇高的自然属性。他有时被描绘为坐在立方形石头上,但这却使某些问题变得模糊。他是阳刚之力,而女皇则是对应的阴柔之力,从这个意义上说,他是试图揭开伊西斯面纱的人；然而她依然保持纯洁无瑕。",
    descriptionEn:
      "The Emperor, by imputation the spouse of the former. He is occasionally represented as wearing, in addition to his personal insignia, the stars or ribbons of some order of chivalry. I mention this to shew that the cards are a medley of old and new emblems. Those who insist upon the evidence of the one may deal, if they can, with the other. No effectual argument for the antiquity of a particular design can be drawn from the fact that it incorporates old material; but there is also none which can be based on sporadic novelties, the intervention of which may signify only the unintelligent hand of an editor or of a late draughtsman.",
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
    descriptionCn:
      "他戴着三重冠冕,坐在两根柱子之间,但这并非由女祭司守护的圣殿的柱子。他左手拿着顶端是三重十字的权杖,右手做出众所周知的教会手势,这个手势被称为神秘主义的标志,用以区分教义的显现与隐秘部分。在这个联系中值得注意的是,女祭司没有做出任何手势。他的脚下是交叉的钥匙,两位穿着长袍的祭司跪在他面前。他通常被称为教皇,这是对他所象征的更普遍职位的特殊应用。他是外部宗教的统治力量,而女祭司则是隐秘教义的占主导地位的精魂。",
    descriptionEn:
      "The High Priest or Hierophant, called also Spiritual Father, and more commonly and obviously the Pope. It seems even to have been named the Abbot, and then its correspondence, the High Priestess, was the Abbess or Mother of the Convent. Both are arbitrary names. The insignia of the figures are papal, and in such case the High Priestess is and can be only the Church, to whom Pope and priests are married by the spiritual rite of ordination. I think, however, that in its primitive form this card did not represent the Roman Pontiff.",
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
    descriptionCn:
      "太阳高悬于天顶,下方是一个巨大的有翼人形,双臂伸展,倾泻而下。前景中是一男一女,彼此坦诚相见,如同亚当和夏娃初入尘世天堂时的模样。男人身后是结满十二果实的生命树,女人身后是善恶树,一条蛇缠绕其上。这些人物象征着青春、纯洁、天真和尚未被世俗欲望玷污的爱。这便是人类爱情的牌面,它以最简洁的方式呈现,象征着道路、真理和生命。它回归本源, 从某种意义上说,这张牌象征着盟约与安息日的奥秘。",
    descriptionEn:
      "The Lovers or Marriage. This symbol has undergone many variations, as might be expected from its subject. In the eighteenth century form, by which it first became known to the world of archaeological research, it is really a card of married life, shewing father and mother, with their child placed between them; and the pagan Cupid above, in the act of flying his shaft, is, of course, a misapplied emblem. The Cupid is of love beginning rather than of love in its fulness, guarding the fruit thereof. The card is said to have been entitled Simulacyum fidei, the symbol of conjugal faith, for which the rainbow as a sign of the covenant would have been a more appropriate concomitant. The figures are also held to have signified Truth, Honour and Love, but I suspect that this was, so to speak, the gloss of a commentator moralizing. It has these, but it has other and higher aspects.",
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
    descriptionCn:
      "一位身姿挺拔、威严的王子,手持利剑,大致符合我在第一部分中描述的传统形象。据说,这位凯旋英雄的肩上扛着乌陵和图明 。他征服了一切俘虏；他在各个层面都取得了胜利——在精神层面、科学层面、进步层面,以及某些启蒙试炼层面。他以此回应了斯芬克斯,也正因如此,我接受了埃利法斯·莱维的变体：两尊斯芬克斯拉着他的战车。他首先在精神层面取得了胜利。因此,应当理解如下：(a) 斯芬克斯的问题关乎自然之谜,而非恩典之境,对此,御者无从解答；(b) 他所征服的层面是显而易见的或外在的,而非内在的；(c) 他所获得的解放或许会使他自身陷入逻辑理解的束缚；(d) 他凯旋通过的启蒙考验,应从物质或理性的角度来理解；(e) 即使他来到女祭司所坐的那座神庙的柱子前,他也无法打开名为 《Tora》的经卷,即便女祭司提问,他也无法回答。他并非世袭王室成员,也并非祭司。",
    descriptionEn:
      "The Chariot. This is represented in some extant codices as being drawn by two sphinxes, and the device is in consonance with the symbolism, but it must not be supposed that such was its original form; the variation was invented to support a particular historical hypothesis. In the eighteenth century white horses were yoked to the car. As regards its usual name, the lesser stands for the greater; it is really the King in his triumph, typifying, however, the victory which creates kingship as its natural consequence and not the vested royalty of the fourth card. M. Court de Gebelin said that it was Osiris Triumphing, the conquering sun in spring-time having vanquished the obstacles of winter. We know now that Osiris rising from the dead is not represented by such obvious symbolism. Other animals than horses have also been used to draw the currus triumphalis, as, for example, a lion and a leopard.",
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
    descriptionCn:
      "一位女子头顶盘旋着与魔术师牌中相同的生命象征,她正合拢一头狮子的利齿。此牌与传统版本的唯一不同之处在于,她仁慈的坚韧已然制服了狮子,而狮子则被一串花环牵引。出于我个人认为合理的理由,这张牌与通常编号为八的正义牌互换了位置。由于这种变化对读者而言并无任何意义,因此无需解释。坚韧在其最崇高的层面之一,与神圣的结合奥秘相连；美德自然在所有层面运作,因此其象征意义涵盖一切。它也与纯洁无瑕(innocentia inviolata)以及冥想中蕴藏的力量相连。然而,这些更深层的含义需要推敲,我并不认为它们能从牌面表面直接看出。它们以一种隐晦的方式通过花环暗示出来,花环象征着神圣律法的甜蜜轭和轻盈重担,当它被铭记于心时。这张牌与通常意义上的自信无关,尽管有人这样认为——它关乎那些以神为力量、在神那里找到庇护之人的信心。狮子象征着激情,而被称为“力量”的牌则代表着更高层次的本性及其解放。它曾践踏毒蛇和蛇怪,也曾踩倒狮子和巨龙。",
    descriptionEn:
      "Fortitude. This is one of the cardinal virtues, of which I shall speak later. The female figure is usually represented as closing the mouth of a lion. In the earlier form which is printed by Court de Gebelin, she is obviously opening it. The first alternative is better symbolically, but either is an instance of strength in its conventional understanding, and conveys the idea of mastery. It has been said that the figure represents organic force, moral force and the principle of all force.",
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
    descriptionCn:
      "这张牌灯盏并未部分被持灯者的斗篷包裹,而是将亘古常在者与世界之光的意象融合在一起。灯盏中闪耀着一颗星辰。我曾说过这是一张成就牌,为了进一步阐释这一概念,牌面上的人物被描绘成在高处高举着他的灯塔。因此,隐士并非如库尔·德·热贝兰所解释的那样,是一位寻求真理和正义的智者；也并非如后来的解释所言,是一位经验的典范。他的灯塔暗示着“我所在之处,亦有你可至”。这张牌常被误解为与神秘隔离的概念联系在一起，例如保护个人磁力免受干扰。这种轻率的解读要归功于埃利法斯·莱维。法国马丁主义教团采纳了这种解读，我们当中有些人也因此听说了许多关于“沉默而未知的哲学”的说法，认为它与世俗的知识隔绝。然而，在真正的马丁主义中， “未知哲学家”(Philosophe inconnu)一词的含义截然不同。它并非指刻意隐藏既定的奥秘，更非指隐藏其替代品，而是——如同这张牌本身——指神圣的奥秘会保护自身免受毫无准备之人的侵害这一真理。",
    descriptionEn:
      "The Hermit, as he is termed in common parlance, stands next on the list; he is also the Capuchin, and in more philosophical language the Sage. He is said to be in search of that Truth which is located far off in the sequence, and of justice which has preceded him on the way. But this is a card of attainment, as we shall see later, rather than a card of quest. It is said also that his lantern contains the Light of Occult Science and that his staff is a Magic Wand. These interpretations are comparable in every respect to the divinatory and fortune-telling meanings with which I shall have to deal in their turn. The diabolism of both is that they are true after their own manner, but that they miss all the high things to which the Greater Arcana should be allocated. It is as if a man who knows in his heart that all roads lead to the heights, and that God is at the great height of all, should choose the way of perdition or the way of folly as the path of his own attainment. Eliphas Levi has allocated this card to Prudence, but in so doing he has been actuated by the wish to fill a gap which would otherwise occur in the symbolism. The four cardinal virtues are necessary to an idealogical sequence like the Trumps Major, but they must not be taken only in that first sense which exists for the use and consolation of him who in these days of halfpenny journalism is called the man in the street. In their proper understanding they are the correlatives of the counsels of perfection when these have been similarly re-expressed, and they read as follows: (a) Transcendental justice, the counter-equilibrium of the scales, when they have been overweighted so that they dip heavily on the side of God. The corresponding counsel is to use loaded dice when you play for high stakes with Diabolus. The axiom is Aut Deus, aut nihil. (b) Divine Ecstacy, as a counterpoise to something called Temperance, the sign of which is, I believe, the extinction of lights in the tavern. The corresponding counsel is to drink only of new wine in the Kingdom of the Father, because God is all in all. The axiom is that man being a reasonable being must get intoxicated with God; the imputed case in point is Spinoza. (c) The state of Royal Fortitude, which is the state of a Tower of Ivory and a House of Gold, but it is God and not the man who has become Turris fortitudinis a facie inimici, and out of that House the enemy has been cast. The corresponding counsel is that a man must not spare himself even in the presence of death, but he must be certain that his sacrifice shall be-of any open course-the best that will ensure his end. The axiom is that the strength which is raised to such a degree that a man dares lose himself shall shew him how God is found, and as to such refuge--dare therefore and learn. (d) Prudence is the economy which follows the line of least resistance, that the soul may get back whence it came. It is a doctrine of divine parsimony and conservation of energy, because of the stress, the terror and the manifest impertinences of this life. The corresponding counsel is that true prudence is concerned with the one thing needful, and the axiom is: Waste not, want not. The conclusion of the whole matter is a business proposition founded on the law of exchange: You cannot help getting what you seek in respect of the things that are Divine: it is the law of supply and demand. I have mentioned these few matters at this point for two simple reasons: (a) because in proportion to the impartiality of the mind it seems sometimes more difficult to determine whether it is vice or vulgarity which lays waste the present world more piteously; (b) because in order to remedy the imperfections of the old notions it is highly needful, on occasion, to empty terms and phrases of their accepted significance, that they may receive a new and more adequate meaning.",
    positive:
      "智能与卓越见解; 不断地追求更高层次的东西; 思虑周密; 冷静沉着; 不多言; 接触知性事物吉; 正中核心的建言; 活动慢慢进行较有成果; 出局; 追求柏拉图式的爱情; 暗中的爱情",
    negative:
      "一视同仁; 不够通融; 不专心易生错误; 过分警戒,无法顺利进行; 秘密泄漏; 过于固执不听别人的意见; 孤独; 动机不单纯; 因怨言及偏   见招人嫌; 轻浮的爱情; 怀疑爱情",
  },
  {
    id: 10,
    nameEn: "Wheel of Fortune",
    nameCn: "命运之轮",
    keywords: ["宿命", "转折点", "周期", "运气", "改变"],
    image: "ar10.jpg",
    descriptionCn:
      "在这个符号中，我再次遵循了埃利法斯·莱维的重建，他提供了多个变体。正如我所暗示的，只要埃及象征符合我们的目的，且其中不暗示任何起源理论，使用埃及象征是合法的。不过，我已经以蛇形态呈现了泰丰。当然，象征意义并非仅限于埃及，因为以西结的四位生灵占据了牌面的各个角落，轮盘本身也遵循了以西结异象中列维的其他指示，象征着特定的塔罗牌钥匙。在这位法国神秘学家和设计中，象征性的画面代表着流体宇宙的永恒运动和人类生命的流动。斯芬克斯就是其中的平衡。塔罗的音译为 Rota，刻在轮子上，并与神名字母对应——以表明天意贯穿一切。但这就是内在的神圣意图，而类似的外在意图则由四大生灵体现。有时狮身人面像被描绘为“couchant”，这削弱了运动中稳定的核心理念，从而削弱了象征意义。在符号所表达的普遍概念背后，隐藏着对偶然性的否认以及其中隐含的宿命性。还需要补充的是，从列维时代起，这张牌的神秘解释——即使是对神秘学本身——也极其荒谬。据说它指的是原则、生育力、阳刚的荣誉、统治权威等。常见的占卜结果在各自的层面上比这更好。",
    descriptionEn:
      "The Wheel of Fortune. There is a current Manual of Cartomancy which has obtained a considerable vogue in England, and amidst a great scattermeal of curious things to no purpose has intersected a few serious subjects. In its last and largest edition it treats in one section of the Tarot; which--if I interpret the author rightly--it regards from beginning to end as the Wheel of Fortune, this expression being understood in my own sense. I have no objection to such an inclusive though conventional description; it obtains in all the worlds, and I wonder that it has not been adopted previously as the most appropriate name on the side of common fortune-telling. It is also the title of one of the Trumps Major--that indeed of our concern at the moment, as my sub-title shews. Of recent years this has suffered many fantastic presentations and one hypothetical reconstruction which is suggestive in its symbolism. The wheel has seven radii; in the eighteenth century the ascending and descending animals were really of nondescript character, one of them having a human head. At the summit was another monster with the body of an indeterminate beast, wings on shoulders and a crown on head. It carried two wands in its claws. These are replaced in the reconstruction by a Hermanubis rising with the wheel, a Sphinx couchant at the summit and a Typhon on the descending side. Here is another instance of an invention in support of a hypothesis; but if the latter be set aside the grouping is symbolically correct and can pass as such.",
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
    descriptionCn:
      "由于这张牌遵循传统象征，并承载其最明显的含义，除了第一部分中收集的少数考虑外，读者对此几乎无多余内容。然而，可以看出，这个人物像大祭司一样坐在柱子之间，因此有必要表明，按照每个人的行为对待每个人的道德原则——虽然它严格类比于更高的事物;——在本质上与选择理念中涉及的精神正义不同。后者属于一种神秘的天意秩序，某些人因此可以构思对最高事物的奉献。这种运作就像圣灵随意呼吸，我们对此没有批评规范或解释依据。这类似于诗人拥有的天赋、高贵天赋和恩典天赋：我们有或没有，它们的存在和它们的缺失一样是个谜。然而，正义的律法并不属于任何一种选择。总之，正义的支柱通向一个世界，而高阶女祭司的支柱则通向另一个世界。",
    descriptionEn:
      "Justice. That the Tarot, though it is of all reasonable antiquity, is not of time immemorial, is shewn by this card, which could have been presented in a much more archaic manner. Those, however, who have gifts of discernment in matters of this kind will not need to be told that age is in no sense of the essence of the consideration; the Rite of Closing the Lodge in the Third Craft Grade of Masonry may belong to the late eighteenth century, but the fact signifies nothing; it is still the summary of all the instituted and official Mysteries. The female figure of the eleventh card is said to be Astraea, who personified the same virtue and is represented by the same symbols. This goddess notwithstanding, and notwithstanding the vulgarian Cupid, the Tarot is not of Roman mythology, or of Greek either. Its presentation of justice is supposed to be one of the four cardinal virtues included in the sequence of Greater Arcana; but, as it so happens, the fourth emblem is wanting, and it became necessary for the commentators to discover it at all costs. They did what it was possible to do, and yet the laws of research have never succeeded in extricating the missing Persephone under the form of Prudence. Court de Gebelin attempted to solve the difficulty by a tour de force, and believed that he had extracted what he wanted from the symbol of the Hanged Man--wherein he deceived himself. The Tarot has, therefore, its justice, its Temperance also and its Fortitude, but--owing to a curious omission--it does not offer us any type of Prudence, though it may be admitted that, in some respects, the isolation of the Hermit, pursuing a solitary path by the light of his own lamp, gives, to those who can receive it, a certain high counsel in respect of the via prudentiae.",
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
    descriptionCn:
      "悬挂他的绞刑架形成了陶十字，而人物——从腿的位置——形成了一个菲尔福特十字。在这位看似殉道者的头部上有一根云雾。需要注意的是，（1）献祭树是活木，上面有叶子;（2）面部表达的是深刻的入神，而非痛苦;（3）整体上，这个图形暗示的是悬浮生命，但实际上是生命而非死亡。这是一张意义深远的牌，但所有的意义都被掩盖了。他的一位编辑认为埃利法斯·莱维并不懂得其含义，这无可置疑，编辑本人也无可置疑。它曾被错误地称为殉道牌、谨慎牌、伟大工作的牌、责任牌;但我们可能会穷尽所有已发表的解释，只发现虚荣。我可以非常简单地说，它在某个方面表达了神圣与宇宙之间的关系。能够理解他更高本性的故事蕴含于这一象征意义的人，将会收到关于可能的伟大觉醒的暗示，并知道在死亡的神圣奥秘之后，还有荣耀的复活之谜。",
    descriptionEn:
      "The Hanged Man. This is the symbol which is supposed to represent Prudence, and Eliphas Levi says, in his most shallow and plausible manner, that it is the adept bound by his engagements. The figure of a man is suspended head-downwards from a gibbet, to which he is attached by a rope about one of his ankles. The arms are bound behind him, and one leg is crossed over the other. According to another, and indeed the prevailing interpretation, he signifies sacrifice, but all current meanings attributed to this card are cartomancists' intuitions, apart from any real value on the symbolical side. The fortune-tellers of the eighteenth century who circulated Tarots, depict a semi-feminine youth in jerkin, poised erect on one foot and loosely attached to a short stake driven into the ground.",
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
    descriptionCn:
      "生命的帷幕在变化、转化和从低到高的过渡中永存，这在修正后的塔罗牌中通过末日景象比通过粗俗的收割骷髅概念更恰当地表现。在其背后是精神上升的整个世界。神秘的骑手缓缓前行，扛着一面黑色旗帜，旗帜上绣有神秘玫瑰，象征着生命。在地平线边缘的两根柱子之间，闪耀着不朽的太阳。骑手没有明显的武器，但国王、孩子和少女都倒在他面前，而一位合十双手的主教等待着他的终结。无需指出，我之前与这张牌相关的死亡暗示当然应从神秘学的角度来理解，但在当前情况下并非如此。人自然过渡到生命下一阶段的旅程，要么是，要么可能是其进步的一种形式，但在这个生命期间进入神秘死亡状态的外来且几乎未知的入口，是意识形式的一种转变，进入一个普通死亡既非路径也非入口的状态。现有第 13 张牌的神秘学解释总体上比通常情况更好，包括重生、创造、目的地、更新等等。",
    descriptionEn:
      "Death. The method of presentation is almost invariable, and embodies a bourgeois form of symbolism. The scene is the field of life, and amidst ordinary rank vegetation there are living arms and heads protruding from the ground. One of the heads is crowned, and a skeleton with a great scythe is in the act of mowing it. The transparent and unescapable meaning is death, but the alternatives allocated to the symbol are change and transformation. Other heads have been swept from their place previously, but it is, in its current and patent meaning, more especially a card of the death of Kings. In the exotic sense it has been said to signify the ascent of the spirit in the divine spheres, creation and destruction, perpetual movement, and so forth.",
    positive:
      "失败; 毁灭之日将近; 损害继续延续; 失业; 进展停滞; 交易停止; 为时已晚; 停滞状态; 生病或意外的暗示; 味如嚼蜡的生活; 不幸的恋情; 恋情终止; 彼此间有很深的鸿沟; 别离",
    negative:
      "起死回生的机会; 脱离低迷期; 改变印象; 回心转意再出发; 挽回名誉; 奇迹似地康复; 突然改变方针; 已经死心的   事有了转机; 斩断情丝,重新出发",
  },
  {
    id: 14,
    nameEn: "Temperance",
    nameCn: "节制",
    keywords: ["平衡", "温和", "调和", "耐心", "炼金术"],
    image: "ar14.jpg",
    descriptionCn:
      "一位有翅膀的天使，额头上带着太阳的标志，胸前佩戴着七行的正方形和三角形。我以男性身份谈论他，但这个形象既非男性也非女性。人们认为他正将生命的精华从圣杯倒入圣杯。他一只脚站在地上，另一只脚站在水上，以此说明精华的本质。一条直路通向地平线边缘的某个高度，上方有一道巨大的光芒，透过光芒隐约可见一顶王冠。这是永恒生命之秘的一部分，也是人类在化身时所能达到的部分。这里放弃了所有传统标志。同样，常规含义也指代季节的变化、生命的永恒运动，甚至思想的结合。此外，说这个形象象征着太阳的精灵是不正确的，尽管它是太阳光的类推，在我们的三重人类旅程的第三部分得以实现。它被奇妙地称为节制，因为当它的规则在我们的意识中生效时，它调和、结合和协调心理和物质本性。在这种规则下，我们在理性部分中了解一些我们来自何方以及去向何方的事情。",
    descriptionEn:
      "Temperance. The winged figure of a female--who, in opposition to all doctrine concerning the hierarchy of angels, is usually allocated to this order of ministering spirits--is pouring liquid from one pitcher to another. In his last work on the Tarot, Dr. Papus abandons the traditional form and depicts a woman wearing an Egyptian head-dress. The first thing which seems clear on the surface is that the entire symbol has no especial connexion with Temperance, and the fact that this designation has always obtained for the card offers a very obvious instance of a meaning behind meaning, which is the title in chief to consideration in respect of the Tarot as a whole.",
    positive:
      "单纯化; 顺畅; 交往平顺; 两者相融顺畅; 调整; 彼此交换有利条件; 平凡中也有重要的契机; 平顺的心境; 纯爱; 从好感转为爱意; 深爱",
    negative:
      "消耗; 每节制的损耗,对身心产生不好的影响; 疲劳; 不定性的工作; 缺乏调整能力; 下降; 浪费; 不要与人 合作; 不融洽; 爱情的配合度不佳",
  },
  {
    id: 15,
    nameEn: "The Devil",
    nameCn: "恶魔",
    keywords: ["束缚", "物质主义", "诱惑", "阴影", "成瘾"],
    image: "ar15.jpg",
    descriptionCn:
      "孟德斯的山羊头，长着蝙蝠般的翅膀，站在祭坛上。在腹部深处有水星的符号。右手举起并伸直，与第五张牌中由大祭司所赐的祝福相反。左手拿着一盏巨大的燃烧火炬，倒向地面。额头上有一个倒置的五芒星。祭坛前有一个戒指，从戒指上系着两条链子，分别套在两个形象——男性和女性的脖子上。这些与第五张牌中的形象相似，仿佛是堕落后的亚当和夏娃。这就是物质生活的锁链和宿命。人物有尾巴，象征着动物本性，但他们的脸上有人类智慧，而那高高在上的人并非永远能做他们的主人。如今，他也是一个奴隶，被自身中的邪恶所支撑，盲目于服务的自由。埃利法斯·勒维带着他惯有的对那些他假装尊重并作为大师来诠释的艺术的嘲讽，断言巴菲门特形象是隐秘科学和魔法。另一位评论家说，在神圣世界中它象征着预定，但在那个世界与下面那些属于野蛮的事物没有对应关系。它所象征的是当那些吃了禁果的人被赶出神秘花园时，守门人。",
    descriptionEn:
      "The Devil. In the eighteenth century this card seems to have been rather a symbol of merely animal impudicity. Except for a fantastic head-dress, the chief figure is entirely naked; it has bat-like wings, and the hands and feet are represented by the claws of a bird. In the right hand there is a sceptre terminating in a sign which has been thought to represent fire. The figure as a whole is not particularly evil; it has no tail, and the commentators who have said that the claws are those of a harpy have spoken at random. There is no better ground for the alternative suggestion that they are eagle's claws. Attached, by a cord depending from their collars, to the pedestal on which the figure is mounted, are two small demons, presumably male and female. These are tailed, but not winged. Since 1856 the influence of Eliphas Levi and his doctrine of occultism has changed the face of this card, and it now appears as a pseudo-Baphometic figure with the head of a goat and a great torch between the horns; it is seated instead of erect, and in place of the generative organs there is the Hermetic caduceus. In Le Tarot Divinatoire of Papus the small demons are replaced by naked human beings, male and female ' who are yoked only to each other. The author may be felicitated on this improved symbolism.",
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
    descriptionEn:
      "Lightning smites a crowned tower; fire bursts forth, two figures fall headlong. The house falls because the Lord did not build it—the false edifice rent. It may be ruin of a house of doctrine or proud intellect, the close of a cycle and collapse of what cannot stand.  闪电击碎戴冠高塔，火焰迸出，二人倒坠。房屋因非主所建而毁，象征虚假殿堂的撕裂；可指邪恶当道时教义之屋的崩塌，或傲慢智识的覆灭，也预示周期终结与不堪的瓦解。",
    positive:
      "致命的打击; 纷争; 纠纷不断; 与周遭事物对立,情况恶化; 意想不到的事情; 急病; 受牵连; 急剧的大变动; 信念奔溃; 逆境; 破产; 没有预警,突然分离; 破灭的爱; 玩火自焚",
    negative:
      "紧迫的状态; 险恶的气氛; 内讧; 即将破灭; 急需解决的问题; 承受震撼; 背水一战; 注意刑事问题; 因骄傲自大将付出惨痛的代价; 状况不佳; 困境; 爱情危机; 分离的预感",
  },
  {
    id: 17,
    nameEn: "The Star",
    nameCn: "星星",
    keywords: ["希望", "灵感", "宁静", "疗愈", "更新"],
    image: "ar17.jpg",
    descriptionEn:
      "A naked maiden kneels by land and water, pouring living water from two vessels; a mound with tree and bird rises behind. Above shines a great eight-rayed star ringed by seven lesser. It is youth, beauty, revealed truth and Spirit’s water freely given—hope and inner light, Binah of the Kabalah.  赤裸的少女跪于陆水之间，将生命之水自双壶倾注，身后土丘有树与鸟；上方一颗八芒巨星环绕七星。此牌象征青春、美与真理的显露，灵水自由给予，是希望与内在之光，对应卡巴拉的理解之母。",
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
    descriptionEn:
      "The waxing moon of mercy sheds drops of light; a path between two towers leads into the unknown. Dog and wolf howl, a crayfish crawls from the pool. Reflected intellect stirs animal fears; beyond lies the unseen abyss. Be still—let lower nature quiet and the shapes sink back.  渐盈的月洒下光滴，小径穿过双塔通往未知；狗与狼长嚎，螯虾自水而出。反射之智唤醒兽性的恐惧，光外是不可见的深渊。讯息是安静，让下层本性平息，深处之影自会退去。",
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
    descriptionEn:
      "A radiant sun shines over sunflowers as a naked child rides a white horse with scarlet banner. It marks the restored world and passage from reflected moonlight to true Spirit. Innocence is wisdom and simplicity—the child of the new Adam—great light leading humanity home.  灿日照耀向日葵墙，裸童骑白马持红旗前行，象征复原的世界与由反射月光迈向灵性真光；此处的纯真即智慧与单纯，新的亚当之子，引领人类归途的圣光。",
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
    descriptionEn:
      "A great angel in clouds blows the cross-marked trumpet as dead rise—man, woman, child and more—faces filled with wonder. It records the completed work of transmutation answering the Supernal call within, hinting at the inner trumpet that awakens lower nature: a card of eternal life.  大天使于云间吹响带十字旗的号角，亡者—男女孩童与众人—出墓而起，神情惊喜。此牌记录回应至高召唤的炼化完成，也暗指内在号角瞬间唤醒下层本性，是永生的象征。",
    positive:
      "复活的喜悦; 开运; 公开; 改革期; 危机解除; 决断; 荣升; 崭露头角; 好消息; 爱的使者; 恢复健康; 坦白; 复苏的爱; 再会; 爱的奇迹",
    negative:
      "一败不起; 幻灭; 离复苏还有很长的时间; 不利的决定; 不被采用; 还未开始就结束了; 坏消息; 延期; 无法决定; 虽重新开始,却又恢复原状; 分离、消除; 恋恋不舍",
  },
  {
    id: 21,
    nameEn: "The World",
    nameCn: "世界",
    keywords: ["圆满", "完成", "旅行", "成就", "整体"],
    image: "ar21.jpg",
    descriptionEn:
      "A wreath encloses a dancing figure with two wands; Ezekiel’s four living creatures fill the corners. It is the perfection and consummation of the cosmos, the soul in divine vision, the joy when all was declared good. Not the absolute nor the Magus crowned.  花环环绕舞动的披纱之人双持权杖，四角列以西结的四生灵。此牌象征宇宙的圆满与终结、灵魂处于神圣观照中的喜悦，回响“万物皆善”之日，并非绝对或登顶的魔术师。",
    positive:
      "完成; 成功; 拥有毕生的志业; 达成目标; 永续不断; 最盛期; 完美无缺; 接触异国,将获得幸运; 到达标准; 精神亢奋; 快乐的结束; 模范情侣",
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
    descriptionEn:
      "A hand issues from the clouds holding a sprouting wand—the raw spark of creation, enterprise and virility at the start.",
    descriptionCn:
      "云间伸出之手握着发芽的权杖，象征创生的火种、冒险的冲动与起点的生命力。",
  },
  {
    id: 23,
    nameEn: "Two of Wands",
    nameCn: "权杖二",
    keywords: ["未来规划", "决定", "发现", "掌控"],
    image: "wa02.jpg",
    descriptionEn:
      "A lord on a battlement holds a globe and looks over land and sea—command of dominion shadowed by unrest and choice.",
    descriptionCn:
      "城垛上的贵族手持地球仪眺望海陆，既有权势与远景，也有坐拥天下仍心怀不安的抉择。",
  },
  {
    id: 24,
    nameEn: "Three of Wands",
    nameCn: "权杖三",
    keywords: ["扩张", "远见", "海外", "进步"],
    image: "wa03.jpg",
    descriptionEn:
      "A merchant prince watches his ships from a high shore—enterprise launched, aid and cooperation on the horizon.",
    descriptionCn:
      "商旅立于高岸眺望远航的船队，事业已启程，合作与拓展正在前方到来。",
  },
  {
    id: 25,
    nameEn: "Four of Wands",
    nameCn: "权杖四",
    keywords: ["庆祝", "和谐", "回家", "安稳"],
    image: "wa04.jpg",
    descriptionEn:
      "Garlands hang between four wands; figures celebrate by a bridge before a manor—homecoming, repose and harmonious prosperity.",
    descriptionCn:
      "花环悬于四根权杖之间，庆典在桥畔与庄园前展开，象征归家、安逸与和乐的收成。",
  },
  {
    id: 26,
    nameEn: "Five of Wands",
    nameCn: "权杖五",
    keywords: ["冲突", "竞争", "分歧", "挑战"],
    image: "wa05.jpg",
    descriptionEn:
      "Youths brandish staves in mimic strife—a contest of wills, rivalry and the mock battle of ambition.",
    descriptionCn:
      "少年舞动权杖嬉戏又似争斗，表现竞争、较量与为目标而起的练兵。",
  },
  {
    id: 27,
    nameEn: "Six of Wands",
    nameCn: "权杖六",
    keywords: ["胜利", "认可", "自信", "成就"],
    image: "wa06.jpg",
    descriptionEn:
      "A laurelled rider bears a crowned staff amid attendants—public victory, awaited news and hope fulfilled.",
    descriptionCn:
      "戴桂冠的骑士举着花冠权杖穿行人群，象征凯旋、捷报以及愿望的实现。",
  },
  {
    id: 28,
    nameEn: "Seven of Wands",
    nameCn: "权杖七",
    keywords: ["防御", "坚持", "挑战", "勇气"],
    image: "wa07.jpg",
    descriptionEn:
      "From a height one defends against six rising staves—valor with the vantage ground, debate and competition resisted.",
    descriptionCn:
      "立于高处者挥杖抵御下方六杖，象征据险固守的勇气、辩驳与竞争中的坚持。",
  },
  {
    id: 29,
    nameEn: "Eight of Wands",
    nameCn: "权杖八",
    keywords: ["速度", "行动", "消息", "快速变化"],
    image: "wa08.jpg",
    descriptionEn:
      "Eight wands fly across open country—movement through the immovable, swift messages and imminent arrival.",
    descriptionCn:
      "八根权杖划空而行，表示迅疾的进展、讯息飞至与即将到来的结果。",
  },
  {
    id: 30,
    nameEn: "Nine of Wands",
    nameCn: "权杖九",
    keywords: ["韧性", "防御", "最后坚持", "疲惫"],
    image: "wa09.jpg",
    descriptionEn:
      "A wary figure leans on his staff before a palisade—strength in opposition, readiness to meet the next onslaught.",
    descriptionCn:
      "戒备的守卫倚杖立于栅栏前，象征逆境中的坚守与迎击来犯的准备。",
  },
  {
    id: 31,
    nameEn: "Ten of Wands",
    nameCn: "权杖十",
    keywords: ["负担", "责任", "压力", "努力"],
    image: "wa10.jpg",
    descriptionEn:
      "A man staggers beneath ten staves—oppression by success, burdens of gain and the strain of disguises.",
    descriptionCn:
      "男子弯身扛起十根权杖，显示成就与财富所带来的沉重负担与压力。",
  },
  {
    id: 32,
    nameEn: "Page of Wands",
    nameCn: "权杖侍从",
    keywords: ["探索", "新想法", "热情", "自由"],
    image: "wapa.jpg",
    descriptionEn:
      "A youthful herald proclaims with wand in hand—faithful messenger, strange tidings and family news.",
    descriptionCn:
      "年轻的传令官举杖宣告，象征忠诚的信使、陌生但重要的消息与家族讯息。",
  },
  {
    id: 33,
    nameEn: "Knight of Wands",
    nameCn: "权杖骑士",
    keywords: ["冲动", "激情", "行动", "冒险"],
    image: "wakn.jpg",
    descriptionEn:
      "An armored rider presses forward with a short wand—departure, change of place and the precipitate mood.",
    descriptionCn: "披甲骑士执杖飞奔，代表启程、搬迁与冲动的行动力。",
  },
  {
    id: 34,
    nameEn: "Queen of Wands",
    nameCn: "权杖王后",
    keywords: ["自信", "独立", "社交", "活力"],
    image: "waqu.jpg",
    descriptionEn:
      "The Queen of flowering wands, magnetic and warm, sits with a lion symbol—kind yet ardent, success in dealings and business charm.",
    descriptionCn:
      "手握开花权杖的王后，带着狮子徽记，温暖而有磁性，象征友善、热情与事业上的吸引力。",
  },
  {
    id: 35,
    nameEn: "King of Wands",
    nameCn: "权杖国王",
    keywords: ["领导", "远见", "企业家", "荣誉"],
    image: "waki.jpg",
    descriptionEn:
      "A noble King uplifts a flowering wand, the lion upon his throne—ardent, honest rulership and news of heritage.",
    descriptionCn:
      "高举开花权杖的国王坐于狮饰王座，体现热烈正直的领导力，也预示传承与消息。",
  },
  // --- CUPS (Water / Emotion) ---
  {
    id: 36,
    nameEn: "Ace of Cups",
    nameCn: "圣杯首牌",
    keywords: ["新感情", "同情", "创造力", "灵性"],
    image: "cuac.jpg",
    descriptionEn:
      "From the cloud a hand holds an overflowing Cup with dove and four streams—the house of the true heart, joy and divine nourishment.",
    descriptionCn:
      "云间之手托起满溢的圣杯，鸽子与四道水流倾注，象征真心之屋、喜悦与灵性的滋养。",
  },
  {
    id: 37,
    nameEn: "Two of Cups",
    nameCn: "圣杯二",
    keywords: ["伴侣", "结合", "吸引", "平等"],
    image: "cu02.jpg",
    descriptionEn:
      "Youth and maiden pledge each other as the caduceus rises with a lion’s head—union, passion and harmony that sanctify nature.",
    descriptionCn:
      "青年与少女举杯相对，杖翼与狮头升起，象征结合、热情以及使自然神圣化的和谐之爱。",
  },
  {
    id: 38,
    nameEn: "Three of Cups",
    nameCn: "圣杯三",
    keywords: ["友谊", "社群", "聚会", "快乐"],
    image: "cu03.jpg",
    descriptionEn:
      "Three maidens uplift cups in a garden—happy conclusion, plenty, merriment and healing companionship.",
    descriptionCn:
      "花园中的三位少女举杯同庆，寓意圆满的结果、丰盛与疗愈的欢聚。",
  },
  {
    id: 39,
    nameEn: "Four of Cups",
    nameCn: "圣杯四",
    keywords: ["冷漠", "沉思", "错失机会", "厌倦"],
    image: "cu04.jpg",
    descriptionEn:
      "A youth broods under a tree before three cups; a fourth is offered from a cloud—weariness and satiety while a fresh gift goes unseen.",
    descriptionCn:
      "少年在树下凝望三只酒杯，云间递出第四杯，他却无动于衷，象征厌倦之中忽略的新契机。",
  },
  {
    id: 40,
    nameEn: "Five of Cups",
    nameCn: "圣杯五",
    keywords: ["悲伤", "失望", "遗憾", "丧失"],
    image: "cu05.jpg",
    descriptionEn:
      "Cloaked figure laments three fallen cups while two remain; a bridge leads to a keep—loss mingled with what endures.",
    descriptionCn:
      "披袍人哀叹倒下的三杯，身后仍有两杯完好，桥通堡垒，暗示失去与保留并存。",
  },
  {
    id: 41,
    nameEn: "Six of Cups",
    nameCn: "圣杯六",
    keywords: ["怀旧", "童年", "纯真", "重逢"],
    image: "cu06.jpg",
    descriptionEn:
      "Children in an old garden fill cups with flowers—memories and happiness from the past, or innocence meeting new surroundings.",
    descriptionCn:
      "古园中孩童将鲜花放入杯中，象征过往的回忆与喜悦，也可指以童真目光迎向新环境。",
  },
  {
    id: 42,
    nameEn: "Seven of Cups",
    nameCn: "圣杯七",
    keywords: ["幻觉", "选择", "白日梦", "困惑"],
    image: "cu07.jpg",
    descriptionEn:
      "Fantastical chalices brim with visions—reflection, sentiment and tempting phantoms without lasting substance.",
    descriptionCn:
      "七只杯中浮现奇异幻象，代表感性想象与镜中虚影，诱惑却难以持久。",
  },
  {
    id: 43,
    nameEn: "Eight of Cups",
    nameCn: "圣杯八",
    keywords: ["离开", "寻找", "放弃", "旅行"],
    image: "cu08.jpg",
    descriptionEn:
      "A figure leaves eight cups behind—decline of a matter or the choice to abandon former concerns for another quest.",
    descriptionCn:
      "行者转身离开八只酒杯，寓意事务的式微，或主动放手旧事去追寻新方向。",
  },
  {
    id: 44,
    nameEn: "Nine of Cups",
    nameCn: "圣杯九",
    keywords: ["满足", "愿望成真", "感激", "享受"],
    image: "cu09.jpg",
    descriptionEn:
      "A content host sits before a row of cups—concord, satisfaction and success enjoyed with future provision implied.",
    descriptionCn:
      "心满意足的主人端坐杯阵之前，象征和谐、满足与已经收获的成功，也暗含后续的保障。",
  },
  {
    id: 45,
    nameEn: "Ten of Cups",
    nameCn: "圣杯十",
    keywords: ["和谐", "幸福", "家庭", "团圆"],
    image: "cu10.jpg",
    descriptionEn:
      "A rainbow of cups arches above a rejoicing family and their home—perfection of love, friendship and heart’s repose.",
    descriptionCn:
      "彩虹杯悬于欢乐家人与居所之上，寓意圆满的爱情、友谊与内心的安息。",
  },
  {
    id: 46,
    nameEn: "Page of Cups",
    nameCn: "圣杯侍从",
    keywords: ["直觉", "创意", "新消息", "敏感"],
    image: "cupa.jpg",
    descriptionEn:
      "A thoughtful youth watches a fish rise from his cup—imagination taking form, messages and reflective service.",
    descriptionCn:
      "沉思的侍从望向杯中跃鱼，象征化想为形的创意、讯息以及专注的助力。",
  },
  {
    id: 47,
    nameEn: "Knight of Cups",
    nameCn: "圣杯骑士",
    keywords: ["浪漫", "魅力", "想象力", "追求"],
    image: "cukn.jpg",
    descriptionEn:
      "A graceful rider with winged helmet advances quietly—arrival or invitation colored by dream and feeling.",
    descriptionCn:
      "戴翼盔的优雅骑士安然前行，代表带着梦幻与情感色彩的来访、提案或邀约。",
  },
  {
    id: 48,
    nameEn: "Queen of Cups",
    nameCn: "圣杯王后",
    keywords: ["慈悲", "关怀", "情感", "直觉"],
    image: "cuqu.jpg",
    descriptionEn:
      "Dreamy yet active, she contemplates her cup—loving intelligence, devoted service and the vision of a perfect spouse and mother.",
    descriptionCn:
      "温柔而行动的王后凝望圣杯，象征关爱的智慧、奉献之心与理想伴侣、慈母的形象。",
  },
  {
    id: 49,
    nameEn: "King of Cups",
    nameCn: "圣杯国王",
    keywords: ["情绪平衡", "控制", "宽容", "外交"],
    image: "cuki.jpg",
    descriptionEn:
      "Upon the sea-set throne he holds cup and scepter—equitable, artistic, responsible and calm in creative intelligence.",
    descriptionCn:
      "坐于海上宝座的国王握杯持杖，代表公平、艺术性与负责任的平静智慧。",
  },

  // --- SWORDS (Air / Intellect) ---
  {
    id: 50,
    nameEn: "Ace of Swords",
    nameCn: "宝剑首牌",
    keywords: ["突破", "清晰", "真理", "决断"],
    image: "swac.jpg",
    descriptionEn:
      "A hand from the cloud raises a crowned sword—triumph of force and incisive clarity, a great power for love or for hate.",
    descriptionCn:
      "云间之手举起戴冠之剑，象征力量与锐利真相的胜利，这份巨大力量可成爱也可成恨。",
  },
  {
    id: 51,
    nameEn: "Two of Swords",
    nameCn: "宝剑二",
    keywords: ["僵局", "艰难决定", "回避", "权衡"],
    image: "sw02.jpg",
    descriptionEn:
      "Blindfolded figure balances two swords—equipoise, guarded harmony and the need for courageous choice amid arms.",
    descriptionCn:
      "蒙眼者肩扛双剑保持平衡，寓意谨慎的和谐与需在对峙中做出的勇敢抉择。",
  },
  {
    id: 52,
    nameEn: "Three of Swords",
    nameCn: "宝剑三",
    keywords: ["心碎", "悲伤", "痛苦", "分离"],
    image: "sw03.jpg",
    descriptionEn:
      "Three swords pierce a heart against cloud and rain—absence, division and the sorrow that needs no further words.",
    descriptionCn:
      "三把利剑穿心，阴云雨幕为背景，象征分离、缺席与不言自明的哀痛。",
  },
  {
    id: 53,
    nameEn: "Four of Swords",
    nameCn: "宝剑四",
    keywords: ["休息", "恢复", "沉思", "被动"],
    image: "sw04.jpg",
    descriptionEn:
      "The effigy of a knight lies in prayer upon a tomb—vigilance in retreat, solitude, hermit’s repose and suspended action.",
    descriptionCn:
      "骑士石像平卧祈祷于墓上，代表退隐中的警觉、独处与暂停行动的休养。",
  },
  {
    id: 54,
    nameEn: "Five of Swords",
    nameCn: "宝剑五",
    keywords: ["失败", "背叛", "冲突", "空虚的胜利"],
    image: "sw05.jpg",
    descriptionEn:
      "A disdainful victor gathers swords as others retreat—hollow mastery, dishonor and the sting of conflict.",
    descriptionCn:
      "轻蔑的胜利者收起宝剑，败者远去，象征空洞的占有、耻辱与冲突的痛感。",
  },
  {
    id: 55,
    nameEn: "Six of Swords",
    nameCn: "宝剑六",
    keywords: ["过渡", "离开", "治愈", "前进"],
    image: "sw06.jpg",
    descriptionEn:
      "A ferryman bears passengers toward the farther shore—passage, remedy, envoy and travel by water to calmer ground.",
    descriptionCn:
      "摆渡人载着乘客驶向彼岸，寓意过渡、疗愈与驶向平静的旅程或使命。",
  },
  {
    id: 56,
    nameEn: "Seven of Swords",
    nameCn: "宝剑七",
    keywords: ["欺骗", "策略", "隐秘", "逃避"],
    image: "sw07.jpg",
    descriptionEn:
      "A man hastens off with five swords, two left behind near a camp—design, daring attempt, quarrel and the risk of cunning plans.",
    descriptionCn:
      "男子急奔带走五剑，营旁留二剑，象征谋划与冒险、争执以及机巧计划的风险。",
  },
  {
    id: 57,
    nameEn: "Eight of Swords",
    nameCn: "宝剑八",
    keywords: ["束缚", "受害者心态", "无助", "限制"],
    image: "sw08.jpg",
    descriptionEn:
      "A bound and hoodwinked woman stands among swords—temporary durance, crisis and censure, yet not irretrievable bondage.",
    descriptionCn:
      "被绑蒙眼的女子被剑阵环绕，代表暂时的束缚、危机与责难，但仍可解脱。",
  },
  {
    id: 58,
    nameEn: "Nine of Swords",
    nameCn: "宝剑九",
    keywords: ["焦虑", "噩梦", "担忧", "恐惧"],
    image: "sw09.jpg",
    descriptionEn:
      "One sits up in lamentation beneath nine swords—utter desolation, despair, deception and delay.",
    descriptionCn:
      "有人在床上痛苦而坐，九剑悬顶，象征极度的绝望、欺骗与停滞带来的煎熬。",
  },
  {
    id: 59,
    nameEn: "Ten of Swords",
    nameCn: "宝剑十",
    keywords: ["毁灭", "痛苦结局", "背叛", "最低点"],
    image: "sw10.jpg",
    descriptionEn:
      "A prostrate figure pierced by ten swords—the end of a cycle, pain and desolation, though not always violent death.",
    descriptionCn:
      "倒地之人被十剑贯穿，象征阶段的终结、剧痛与荒凉，未必意味着暴亡。",
  },
  {
    id: 60,
    nameEn: "Page of Swords",
    nameCn: "宝剑侍从",
    keywords: ["好奇", "警惕", "新想法", "沟通"],
    image: "swpa.jpg",
    descriptionEn:
      "An active youth strides with sword upright, alert to every side—vigilance, spying, examination and nimble mind.",
    descriptionCn: "敏捷的侍从举剑疾行、四处戒备，象征警觉、侦查与灵巧的思维。",
  },
  {
    id: 61,
    nameEn: "Knight of Swords",
    nameCn: "宝剑骑士",
    keywords: ["急躁", "直接", "行动", "野心"],
    image: "swkn.jpg",
    descriptionEn:
      "A knight charges full course with sword out—skill, wrath and swift militant intelligence that can destroy or defend.",
    descriptionCn: "骑士策马挥剑疾进，代表技能与迅猛的战斗意志，可攻亦可守。",
  },
  {
    id: 62,
    nameEn: "Queen of Swords",
    nameCn: "宝剑王后",
    keywords: ["敏锐", "独立", "清晰", "界限"],
    image: "swqu.jpg",
    descriptionEn:
      "Severe yet composed, the Queen raises her sword and extends her hand—widowhood, sorrow-tinged clarity and discerning fairness.",
    descriptionCn: "庄严的王后执剑并伸出手，带着历经忧伤的清醒与公平的辨识力。",
  },
  {
    id: 63,
    nameEn: "King of Swords",
    nameCn: "宝剑国王",
    keywords: ["理智", "权威", "真理", "公正"],
    image: "swki.jpg",
    descriptionEn:
      "The King sits in judgment with unsheathed sword—authority, command and militant intellect holding power of life and death.",
    descriptionCn:
      "国王持裸剑端坐审判，象征权威、指挥与握有生杀大权的理性力量。",
  },
  // --- PENTACLES (Earth / Material) ---
  {
    id: 64,
    nameEn: "Ace of Pentacles",
    nameCn: "星币首牌",
    keywords: ["新机会", "繁荣", "丰富", "表现"],
    image: "peac.jpg",
    descriptionEn:
      "A hand from the cloud lifts a pentacle—perfect contentment and prosperous beginnings, the seed of material felicity.",
    descriptionCn:
      "云间之手托起五芒星币，象征圆满与富足的开端，物质幸福的种子。",
  },
  {
    id: 65,
    nameEn: "Two of Pentacles",
    nameCn: "星币二",
    keywords: ["平衡", "适应", "优先顺位", "灵活"],
    image: "pe02.jpg",
    descriptionEn:
      "A dancer juggles two pentacles joined by an endless cord—gaiety amid change, written news and the play of adaptation.",
    descriptionCn:
      "舞者以无限符号连结双币抛接，寓意变动中的轻快、书信讯息与灵活应变。",
  },
  {
    id: 66,
    nameEn: "Three of Pentacles",
    nameCn: "星币三",
    keywords: ["团队", "合作", "技能", "计划"],
    image: "pe03.jpg",
    descriptionEn:
      "A sculptor works in a monastery with others consulting—skilled labor, recognized craft and nobility of practiced art.",
    descriptionCn:
      "雕工在修道院中作业并受人商议，象征熟练技艺、合作认可与实践艺术的尊贵。",
  },
  {
    id: 67,
    nameEn: "Four of Pentacles",
    nameCn: "星币四",
    keywords: ["控制", "占有", "保守", "安全"],
    image: "pe04.jpg",
    descriptionEn:
      "Crowned figure clasps a pentacle, with one above and two beneath his feet—surety of possessions and clinging to what one has.",
    descriptionCn:
      "戴冠者手抱钱币，头顶与脚下亦各有一币，象征守财与牢牢抓住现有的一切。",
  },
  {
    id: 68,
    nameEn: "Five of Pentacles",
    nameCn: "星币五",
    keywords: ["贫穷", "孤立", "不安全", "困难"],
    image: "pe05.jpg",
    descriptionEn:
      "Two mendicants pass a lighted window in snow—material trouble, destitution or discord pressing from without.",
    descriptionCn:
      "两名乞者在风雪中经过亮窗，寓意物质困境、贫乏或外在纷乱的压迫。",
  },
  {
    id: 69,
    nameEn: "Six of Pentacles",
    nameCn: "星币六",
    keywords: ["慈善", "慷慨", "分享", "平衡"],
    image: "pe06.jpg",
    descriptionEn:
      "A merchant weighs and gives coins to the needy—presents, present prosperity and the balance of giving and receiving.",
    descriptionCn:
      "商人秤量钱币分给贫者，象征馈赠、当前的富足以及施与受的平衡。",
  },
  {
    id: 70,
    nameEn: "Seven of Pentacles",
    nameCn: "星币七",
    keywords: ["耐心", "投资", "等待", "长期规划"],
    image: "pe07.jpg",
    descriptionEn:
      "A worker leans on his staff regarding seven pentacles on the vine—money and business weighed, with anxieties over return.",
    descriptionCn:
      "劳者倚杖凝视藤上七币，代表金钱与事业的衡量，也暗示收益未明的忧虑与等待。",
  },
  {
    id: 71,
    nameEn: "Eight of Pentacles",
    nameCn: "星币八",
    keywords: ["勤奋", "技能", "工艺", "细节"],
    image: "pe08.jpg",
    descriptionEn:
      "An artisan chisels pentacles he displays—work, apprenticeship, craft skill perhaps still in preparation.",
    descriptionCn: "工匠雕琢并陈列钱币，象征勤作、学徒阶段与正在精进的技艺。",
  },
  {
    id: 72,
    nameEn: "Nine of Pentacles",
    nameCn: "星币九",
    keywords: ["富足", "奢华", "自给自足", "成就"],
    image: "pe09.jpg",
    descriptionEn:
      "A lady with a hooded bird walks a rich vineyard estate—prudence, safety, accomplishment and independent well-being.",
    descriptionCn:
      "携驯鹰的女子漫步葡萄园庄园，象征谨慎、安全、成就与自足的安乐。",
  },
  {
    id: 73,
    nameEn: "Ten of Pentacles",
    nameCn: "星币十",
    keywords: ["财富", "遗产", "家庭", "长期成功"],
    image: "pe10.jpg",
    descriptionEn:
      "Beneath an arch a family with dogs greets an elder—riches, legacy, archives and the abode of generations.",
    descriptionCn: "拱门下家人与犬迎向长者，寓意财富、传承与家族居所的稳固。",
  },
  {
    id: 74,
    nameEn: "Page of Pentacles",
    nameCn: "星币侍从",
    keywords: ["好学", "务实", "新机会", "显化"],
    image: "pepa.jpg",
    descriptionEn:
      "A youth slowly advances, absorbed in the pentacle he lifts—study, application, management and sometimes news or messages.",
    descriptionCn:
      "侍从专注举起钱币缓步前行，象征学习投入、管理才能，也可能带来讯息。",
  },
  {
    id: 75,
    nameEn: "Knight of Pentacles",
    nameCn: "星币骑士",
    keywords: ["勤奋", "效率", "例行公事", "保守"],
    image: "pekn.jpg",
    descriptionEn:
      "On a heavy, enduring horse the Knight presents his pentacle—utility, responsibility and steady service on the outer plane.",
    descriptionCn:
      "骑着沉稳坐骑的骑士举币示人，代表务实、责任与踏实的服务精神。",
  },
  {
    id: 76,
    nameEn: "Queen of Pentacles",
    nameCn: "星币王后",
    keywords: ["养育", "务实", "安全", "居家"],
    image: "pequ.jpg",
    descriptionEn:
      "A serious, generous Queen contemplates her pentacle—opulence, security, greatness of soul and wise provision.",
    descriptionCn:
      "沉稳慷慨的王后凝视钱币，象征富足、安全、宽广胸怀与妥善的资源运用。",
  },
  {
    id: 77,
    nameEn: "King of Pentacles",
    nameCn: "星币国王",
    keywords: ["富裕", "商业", "领导", "安全感"],
    image: "peki.jpg",
    descriptionEn:
      "The King with pentagrammed coin and bull emblems—realizing intelligence in business, courage and success in material mastery.",
    descriptionCn:
      "带有五芒星币与公牛徽记的国王，代表商业上的聪慧、勇气与物质领域的成功掌控。",
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
  WELCOME: "静心凝视深渊。当你的直觉苏醒时,进入命运之门。",
  ASK: "心中的疑惑,是通往真理的钥匙。告诉我,你为何而来？",
  SHUFFLE: "星辰正在归位,混乱中孕育着秩序。专注于你的问题。",
  PICK: "在流动的命运中,选择你的指引。",
  REVEAL: "这就是……命运的回响。",
};

// Helper to get deck for a specific pool type
export const getDeckForPool = (pool: CardPoolType): TarotCard[] => {
  const courtPrefixes = ["Page", "Knight", "Queen", "King"];
  const isCourt = (c: TarotCard) =>
    courtPrefixes.some((p) => c.nameEn.startsWith(p));

  switch (pool) {
    case "MAJOR":
      return MAJOR_ARCANA;
    case "MINOR_PIP":
      return MINOR_ARCANA.filter((c) => !isCourt(c));
    case "COURT":
      return MINOR_ARCANA.filter((c) => isCourt(c));
    case "SUIT_CUPS":
      return MINOR_ARCANA.filter((c) => c.nameEn.includes("Cups"));
    case "SUIT_PENTACLES":
      return MINOR_ARCANA.filter((c) => c.nameEn.includes("Pentacles"));
    case "SUIT_SWORDS":
      return MINOR_ARCANA.filter((c) => c.nameEn.includes("Swords"));
    case "SUIT_WANDS":
      return MINOR_ARCANA.filter((c) => c.nameEn.includes("Wands"));
    case "FULL":
    default:
      return FULL_DECK;
  }
};
