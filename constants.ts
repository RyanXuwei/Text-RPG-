import { PlayerClass, GameState, Language, Blessing } from './types';

export const INITIAL_GAME_STATE: GameState = {
  story: '',
  health: 100,
  inventory: [],
  equipment: {
    head: null,
    body: null,
    leftHand: null,
    rightHand: null,
    feet: null,
    waist: null,
    companion: null,
  },
  luck: 50,
  suggestedActions: [],
  gameOver: false,
  win: false,
  mood: 'neutral',
  actionResult: 'neutral',
  turnCount: 0,
  chapterTitle: '',
  illustrations: {},
  strongEnemiesDefeated: 0,
  blessings: [],
};

// --- BLESSINGS ---
const KNIGHT_BLESSINGS_EN: Blessing[] = [
  { name: "Sacred Resilience", description: "When health is restored, luck is restored by the same amount." },
  { name: "Vanquisher's Fortune", description: "When an enemy is defeated, a large amount of luck is restored." }
];
const ROGUE_BLESSINGS_EN: Blessing[] = [
  { name: "Gambler's Pact", description: "When health is lost from damage, luck is lost by the same amount." },
  { name: "Finder's Fortune", description: "When a new item is discovered, a large amount of luck is restored." }
];
const SCHOLAR_BLESSINGS_EN: Blessing[] = [
  { name: "Pioneer's Insight", description: "When a new area is discovered, a large amount of luck is restored." },
  { name: "Pacifist's Burden", description: "Each time an enemy is defeated, a large amount of luck is lost." }
];
const TRICKSTER_BLESSINGS_EN: Blessing[] = [
  { name: "Twisted Words", description: "Words spoken have a low chance of having the opposite effect." },
  { name: "Fabricated Fate", description: "Lies told have a high chance of coming true in an unexpected way." },
  { name: "Fragile Favor", description: "Luck is permanently fixed at 100, but health cannot exceed 1." }
];
const KNIGHT_BLESSINGS_ZH_TW: Blessing[] = [
    { name: "神聖韌性", description: "在恢復生命值的同時，會恢復等量的幸運值。" },
    { name: "征服者之運", description: "在擊敗敵人的同時，會恢復大量的幸運值。" }
];
const ROGUE_BLESSINGS_ZH_TW: Blessing[] = [
    { name: "賭徒契約", description: "在減損生命值的同時，會減損等量的幸運值。" },
    { name: "尋寶者之運", description: "在發現道具的同時，會恢復大量的幸運值。" }
];
const SCHOLAR_BLESSINGS_ZH_TW: Blessing[] = [
    { name: "先驅之識", description: "在發現新的場所時，會恢復大量的幸運值。" },
    { name: "和平主義者之負", description: "每次打倒敵人時，會減損大量的幸運值。" }
];
const TRICKSTER_BLESSINGS_ZH_TW: Blessing[] = [
    { name: "扭曲之言", description: "所述說的話語，有低機率產生相反的效果。" },
    { name: "虛構之運", description: "所述說的謊言，有高機率以意外的情況成真。" },
    { name: "脆弱恩典", description: "幸運值永遠為100，但生命值最高只能為1。" }
];
const KNIGHT_BLESSINGS_ZH_CN: Blessing[] = [
    { name: "神圣韧性", description: "在恢复生命值的同时，会恢复等量的幸运值。" },
    { name: "征服者之运", description: "在击败敌人的同时，会恢复大量的幸运值。" }
];
const ROGUE_BLESSINGS_ZH_CN: Blessing[] = [
    { name: "赌徒契约", description: "在减损生命值的同时，会减损等量的幸运值。" },
    { name: "寻宝者之运", description: "在发现道具的同时，会恢复大量的幸运值。" }
];
const SCHOLAR_BLESSINGS_ZH_CN: Blessing[] = [
    { name: "先驱之识", description: "在发现新的场所时，会恢复大量的幸运值。" },
    { name: "和平主义者之负", description: "每次打倒敌人时，会减损大量的幸运值。" }
];
const TRICKSTER_BLESSINGS_ZH_CN: Blessing[] = [
    { name: "扭曲之言", description: "所述说的话语，有低机率产生相反的效果。" },
    { name: "虚构之运", description: "所述说的谎言，有高机率以意外的情况成真。" },
    { name: "脆弱恩典", description: "幸运值永远为100，但生命值最高只能为1。" }
];
const KNIGHT_BLESSINGS_JA: Blessing[] = [
    { name: "聖なる回復力", description: "体力を回復すると、同量の幸運も回復する。" },
    { name: "征服者の幸運", description: "敵を倒すと、大量の幸運が回復する。" }
];
const ROGUE_BLESSINGS_JA: Blessing[] = [
    { name: "ギャンブラーの契約", description: "ダメージで体力が失われると、同量の幸運も失われる。" },
    { name: "発見者の幸運", description: "新しいアイテムを発見すると、大量の幸運が回復する。" }
];
const SCHOLAR_BLESSINGS_JA: Blessing[] = [
    { name: "開拓者の洞察", description: "新しいエリアを発見すると、大量の幸運が回復する。" },
    { name: "平和主義者の負担", description: "敵を倒すたびに、大量の幸運が失われる。" }
];
const TRICKSTER_BLESSINGS_JA: Blessing[] = [
    { name: "ねじれた言葉", description: "話した言葉が、低い確率で逆の効果を持つことがある。" },
    { name: "作り上げられた運命", description: "ついた嘘が、高い確率で予期せぬ形で現実になる。" },
    { name: "脆い恩恵", description: "幸運は常に100に固定されるが、体力は1を超えることはできない。" }
];
const KNIGHT_BLESSINGS_ES: Blessing[] = [
    { name: "Resiliencia Sagrada", description: "Cuando se restaura la salud, la suerte se restaura en la misma cantidad." },
    { name: "Fortuna del Vencedor", description: "Cuando se derrota a un enemigo, se restaura una gran cantidad de suerte." }
];
const ROGUE_BLESSINGS_ES: Blessing[] = [
    { name: "Pacto del Jugador", description: "Cuando se pierde salud por daño, se pierde la misma cantidad de suerte." },
    { name: "Fortuna del Descubridor", description: "Cuando se descubre un nuevo objeto, se restaura una gran cantidad de suerte." }
];
const SCHOLAR_BLESSINGS_ES: Blessing[] = [
    { name: "Perspicacia del Pionero", description: "Cuando se descubre una nueva área, se restaura una gran cantidad de suerte." },
    { name: "Carga del Pacifista", description: "Cada vez que se derrota a un enemigo, se pierde una gran cantidad de suerte." }
];
const TRICKSTER_BLESSINGS_ES: Blessing[] = [
    { name: "Palabras Retorcidas", description: "Las palabras pronunciadas tienen una baja probabilidad de tener el efecto contrario." },
    { name: "Destino Fabricado", description: "Las mentiras contadas tienen una alta probabilidad de hacerse realidad de una manera inesperada." },
    { name: "Favor Frágil", description: "La suerte se fija permanentemente en 100, pero la salud no puede exceder 1." }
];
const KNIGHT_BLESSINGS_KO: Blessing[] = [
    { name: "신성한 회복력", description: "체력을 회복하면 같은 양의 행운도 회복됩니다." },
    { name: "정복자의 행운", description: "적을 물리치면 대량의 행운이 회복됩니다." }
];
const ROGUE_BLESSINGS_KO: Blessing[] = [
    { name: "도박사의 계약", description: "피해로 체력을 잃으면 같은 양의 행운도 잃습니다." },
    { name: "발견자의 행운", description: "새로운 아이템을 발견하면 대량의 행운이 회복됩니다." }
];
const SCHOLAR_BLESSINGS_KO: Blessing[] = [
    { name: "개척자의 통찰력", description: "새로운 지역을 발견하면 대량의 행운이 회복됩니다." },
    { name: "평화주의자의 짐", description: "적을 물리칠 때마다 대량의 행운을 잃습니다." }
];
const TRICKSTER_BLESSINGS_KO: Blessing[] = [
    { name: "뒤틀린 말", description: "한 말이 낮은 확률로 반대 효과를 가집니다." },
    { name: "조작된 운명", description: "한 거짓말이 높은 확률로 예상치 못한 방식으로 실현됩니다." },
    { name: "취약한 은총", description: "행운은 영구적으로 100으로 고정되지만 체력은 1을 초과할 수 없습니다." }
];


// --- ENGLISH PLAYER CLASSES ---
const KNIGHT_CLASS_EN: PlayerClass = {
  id: 'knight',
  name: 'Knight',
  description: 'A bastion of honor and martial prowess. Knights begin their journey with sturdy armor and a reliable sword, ready to face any foe head-on.',
  initialHealth: 100,
  initialLuck: 60,
  initialEquipment: {
    head: { name: 'Old Helm', type: 'equippable', slot: 'head', description: 'A simple, functional helmet that has protected its wearer from more than one fateful blow. It obstructs peripheral vision.' },
    body: { name: 'Old Knight\'s Armor', type: 'equippable', slot: 'body', description: 'Heavy plate armor, dented and scarred from countless battles. It offers substantial protection at the cost of mobility.' },
    rightHand: { name: 'Battle-Worn Shortsword', type: 'equippable', slot: 'rightHand', description: 'A reliable blade that has seen its share of conflict. Its edge is chipped, but its spirit is unbroken.' },
    companion: { name: 'Royal Guardian Hound', type: 'summon_companion', slot: 'companion', description: 'A loyal and battle-trained canine companion. Its senses are sharp, and its bite is fierce.' },
    leftHand: null, feet: null, waist: null,
  },
  initialInventory: [
    { name: 'King\'s Secret Order', type: 'non-consumable', description: 'A sealed scroll bearing the royal crest. Its contents are for your eyes only, detailing a mission of grave importance.' },
    { name: 'Healing Salve', type: 'consumable', quantity: 1, description: 'A thick, herbal paste that can be applied to wounds to promote rapid healing.' }
  ],
  startingPrompt: 'Clad in iron and sworn to an ancient oath, you stand before the moss-covered maw of the Whispering Crypt. An unsettling chill, colder than the night air, seeps from the stone archway, carrying faint, indecipherable whispers. Your King\'s secret order feels heavy in your pouch, a stark reminder of the encroaching darkness you must vanquish. This is more than a treasure hunt; it is a grim duty. Describe the scene and your first resolute action against the encroaching dread.',
  initialBlessings: KNIGHT_BLESSINGS_EN,
};
const ROGUE_CLASS_EN: PlayerClass = {
  id: 'rogue',
  name: 'Rogue',
  description: 'A master of shadows and subtlety. Rogues rely on wit and agility, preferring to strike from the darkness and disappear before the enemy can react.',
  initialHealth: 30,
  initialLuck: 90,
  initialEquipment: {
    head: { name: 'Rogue\'s Cowl', type: 'equippable', slot: 'head', description: 'A deep hood that conceals the face in shadow, perfect for remaining unseen.' },
    body: { name: 'Cloth Armor', type: 'equippable', slot: 'body', description: 'A set of dark, layered fabrics that offer minimal protection but allow for silent, fluid movement.' },
    rightHand: { name: 'Rusted Dagger', type: 'equippable', slot: 'rightHand', description: 'A pitted and corroded blade, but its edge is still sharp enough for a silent takedown.' },
    feet: { name: 'Soft-soled Shoes', type: 'equippable', slot: 'feet', description: 'Lightweight footwear designed to muffle footsteps on stone floors.' },
    companion: { name: 'Dark Moon Owl', type: 'summon_companion', slot: 'companion', description: 'A nocturnal bird of prey with unnervingly intelligent eyes. It sees what others miss in the darkness.' },
    leftHand: null, waist: null,
  },
  initialInventory: [
    { name: 'Smoke Bomb', type: 'consumable', quantity: 1, description: 'A small, clay sphere that releases a thick cloud of disorienting smoke when shattered.' },
    { name: 'Lockpick', type: 'consumable', description: 'A slender piece of metal, essential for bypassing simple locks. It looks fragile and might only work once.' }
  ],
  startingPrompt: 'You are a shadow that moves unseen. Under the cloak of a moonless night, you arrive at the Whispering Crypt, drawn by rumors of a priceless artifact. The heavy stone door is slightly ajar, a silent invitation into suffocating blackness. A cool draft carries the scent of dust and something metallic, like old blood. This is your element. Describe how you slip inside, embracing the palpable danger that awaits.',
  initialBlessings: ROGUE_BLESSINGS_EN,
};
const SCHOLAR_CLASS_EN: PlayerClass = {
  id: 'scholar',
  name: 'Scholar',
  description: 'A seeker of forgotten knowledge and arcane secrets. The Scholar uses intellect to overcome obstacles, wielding ancient lore as a potent weapon.',
  initialHealth: 70,
  initialLuck: 75,
  initialEquipment: {
    head: { name: 'Monocle', type: 'equippable', slot: 'head', description: 'A lens of finely ground crystal that reveals details invisible to the naked eye.' },
    body: { name: 'Scholar\'s Robe', type: 'equippable', slot: 'body', description: 'Flowing robes embroidered with arcane symbols that offer minor protection against magical energies.' },
    rightHand: { name: 'Withered Branch Staff', type: 'equippable', slot: 'rightHand', description: 'A twisted piece of ancient wood that hums with latent magical power. It feels strangely warm to the touch.' },
    companion: { name: 'Elemental Sprite', type: 'summon_companion', slot: 'companion', description: 'A flickering mote of pure energy that darts through the air, drawn to sources of magic.' },
    leftHand: null, feet: null, waist: null,
  },
  initialInventory: [
    { name: 'Ancient Arcane Codex', type: 'non-consumable', description: 'A heavy tome bound in strange leather, filled with cryptic lore and forbidden rituals.' },
    { name: 'Mana Potion', type: 'consumable', quantity: 1, description: 'A swirling, luminous blue liquid that restores a measure of one\'s magical reserves.' }
  ],
  startingPrompt: 'Driven by a thirst for lost knowledge, your research has led you to the Whispering Crypt, a site rumored to hold secrets of a bygone, powerful era. You stand at the entrance, your old staff in hand. The very air crackles with a latent energy you can feel on your skin, a dangerous symphony of forgotten power. This place is not merely a tomb; it is a library of the forbidden. Describe the first forgotten secret you seek to unveil amidst the ominous silence.',
  initialBlessings: SCHOLAR_BLESSINGS_EN,
};
const TRICKSTER_CLASS_EN: PlayerClass = {
  id: 'trickster',
  name: 'Trickster',
  description: 'An agent of chaos who bends reality to their will. The Trickster thrives on unpredictability, turning dire situations into comical advantages with uncanny luck.',
  initialHealth: 1,
  initialLuck: 100,
  initialEquipment: {
    head: { name: 'Hat of Taunting', type: 'equippable', slot: 'head', description: 'A ridiculously ostentatious hat that subtly draws the ire of onlookers, giving you the upper hand in social mishaps.' },
    waist: { name: 'Pouch of Unknown Contents', type: 'equippable', slot: 'waist', description: 'A small bag that seems to contain something different every time you reach into it. Or maybe it\'s just lint.' },
    companion: { name: 'Bluffing Phantom', type: 'summon_companion', slot: 'companion', description: 'An ethereal, translucent entity that mimics your grandiose gestures but offers no real assistance. It\'s great for intimidation.' },
    body: null, leftHand: null, rightHand: null, feet: null,
  },
  initialInventory: [
    { name: 'Shiny But Worthless Coin', type: 'consumable', description: 'A large, gleaming coin that looks valuable but is made of cheap, painted lead. Perfect for a quick, one-time distraction.' },
    { name: 'A Yellow Warning Card', type: 'consumable', description: 'A stiff card you can brandish to formally issue a single warning to inanimate objects or disagreeable monsters. Its effects are... questionable and likely won\'t work twice.' },
    { name: 'Blank Scroll', type: 'consumable', description: 'A pristine roll of parchment. Is it for writing a profound truth, or for drawing a silly face on? You only have one, so choose wisely.' }
  ],
  startingPrompt: 'You are a Trickster, and you\'re bored. You wandered into the Whispering Crypt on a whim, thinking it might be a laugh. The spooky whispers and ominous shadows are, frankly, hilarious. But as you step inside, the great stone door slams shut behind you with a deafening boom, plunging you into absolute darkness. The whispers suddenly sound less like a joke and more like a threat. For the first time, this feels... interesting. Describe the first prank you pull on the dungeon\'s unseen denizens to test the true nature of this place.',
  initialBlessings: TRICKSTER_BLESSINGS_EN,
};

// --- TRADITIONAL CHINESE PLAYER CLASSES ---
const KNIGHT_CLASS_ZH_TW: PlayerClass = {
  id: 'knight',
  name: '騎士',
  description: '榮譽與武力的堡壘。騎士以堅固的盔甲和可靠的劍展開他們的旅程，準備好正面迎戰任何敵人。',
  initialHealth: 100,
  initialLuck: 60,
  initialEquipment: {
    head: { name: '老舊的頭盔', type: 'equippable', slot: 'head', description: '一頂簡單但實用的頭盔，曾不只一次保護佩戴者免受致命打擊。它會阻礙周邊視野。' },
    body: { name: '老舊的騎士鎧甲', type: 'equippable', slot: 'body', description: '厚重的板甲，上面佈滿了無數戰鬥留下的凹痕和疤痕。它以犧牲機動性為代價，提供堅實的保護。' },
    rightHand: { name: '戰損短劍', type: 'equippable', slot: 'rightHand', description: '一把見證了無數衝突的可靠刀刃。雖然劍鋒有缺口，但其鬥志未曾磨損。' },
    companion: { name: '王國守護犬', type: 'summon_companion', slot: 'companion', description: '一隻忠誠且受過戰鬥訓練的犬類夥伴。牠的感官敏銳，咬合力驚人。' },
    leftHand: null, feet: null, waist: null,
  },
  initialInventory: [
    { name: '國王的密令', type: 'non-consumable', description: '一封蓋有皇家蠟印的捲軸。其內容僅限你親閱，詳述了一項極其重要的任務。' },
    { name: '治療藥膏', type: 'consumable', quantity: 1, description: '一種厚實的草藥膏，塗抹在傷口上可以促進快速癒合。' }
  ],
  startingPrompt: '身披鋼鐵，曾立下古老誓言，你站在長滿青苔的低語地穴入口前。一股比夜色更冷的寒氣從石拱門中滲出，帶來微弱而難以辨識的呢喃。國王的密令在你袋中沉甸甸的，提醒著你必須剷除那侵蝕土地的黑暗。這不僅是尋寶，而是一項嚴峻的職責。描述眼前的景象，以及你對抗那逼近的恐懼所採取的第一个堅決行動。',
  initialBlessings: KNIGHT_BLESSINGS_ZH_TW,
};
const ROGUE_CLASS_ZH_TW: PlayerClass = {
  id: 'rogue',
  name: '盜賊',
  description: '暗影與詭計的大師。盜賊依靠智慧和敏捷，偏好從黑暗中發動攻擊，並在敵人反應過來前消失無蹤。',
  initialHealth: 30,
  initialLuck: 90,
  initialEquipment: {
    head: { name: '盜賊頭巾', type: 'equippable', slot: 'head', description: '一頂能將臉部隱藏在陰影中的深色頭巾，非常適合保持隱蔽。' },
    body: { name: '布甲', type: 'equippable', slot: 'body', description: '一套深色的多層織物，保護性極低，但能讓穿著者無聲、流暢地移動。' },
    rightHand: { name: '生鏽匕首', type: 'equippable', slot: 'rightHand', description: '一把佈滿坑洞和腐蝕的刀刃，但其鋒利程度仍足以進行一次無聲的偷襲。' },
    feet: { name: '軟底鞋', type: 'equippable', slot: 'feet', description: '專為在石地上消音而設計的輕便鞋履。' },
    companion: { name: '暗月夜梟', type: 'summon_companion', slot: 'companion', description: '一隻擁有智慧到令人不安的雙眼的夜行性猛禽。牠能看見他人在黑暗中所忽略的事物。' },
    leftHand: null, waist: null,
  },
  initialInventory: [
    { name: '煙霧彈', type: 'consumable', quantity: 1, description: '一個小巧的陶土球，擊碎時會釋放出一團濃厚的、令人迷失方向的煙霧。' },
    { name: '開鎖器', type: 'consumable', description: '一根細長的金屬絲，是繞過簡易鎖具的必備品。它看起來很脆弱，可能只能使用一次。' }
  ],
  startingPrompt: '你是潛影無蹤的暗影行者。在無月之夜的掩護下，你循著一件稀世珍寶的傳聞來到低語地穴。厚重的石門微敞，像是一道通往窒息黑暗的無聲邀請。一陣冷風帶來塵埃與金屬的氣味，宛如陳舊的血跡。這裡是你的領域。描述你如何溜進去，擁抱那等待著你的、清晰可感的危險。',
  initialBlessings: ROGUE_BLESSINGS_ZH_TW,
};
const SCHOLAR_CLASS_ZH_TW: PlayerClass = {
  id: 'scholar',
  name: '學者',
  description: '被遺忘知識與奧術秘密的探求者。學者運用智慧克服障礙，將古老的學問作為強大的武器。',
  initialHealth: 70,
  initialLuck: 75,
  initialEquipment: {
    head: { name: '單片眼鏡', type: 'equippable', slot: 'head', description: '一片由精細研磨水晶製成的鏡片，能揭示肉眼看不見的細節。' },
    body: { name: '學者長袍', type: 'equippable', slot: 'body', description: '飄逸的長袍，上面繡有能提供微弱魔法能量保護的奧術符文。' },
    rightHand: { name: '枯枝法杖', type: 'equippable', slot: 'rightHand', description: '一根扭曲的古老木杖，散發著潛在的魔法力量。觸感異常溫暖。' },
    companion: { name: '元素精靈', type: 'summon_companion', slot: 'companion', description: '一團閃爍的純粹能量微粒，在空中飛舞，會被魔法源所吸引。' },
    leftHand: null, feet: null, waist: null,
  },
  initialInventory: [
    { name: '古老的神秘法典', type: 'non-consumable', description: '一本用奇特皮革裝訂的厚重典籍，裡面充滿了神秘的知識和禁忌的儀式。' },
    { name: '法力藥水', type: 'consumable', quantity: 1, description: '一種旋轉發光的藍色液體，能恢復一部分的法力儲備。' }
  ],
  startingPrompt: '在對失落知識的渴求驅使下，你的研究將你引至低語地穴，一個據說藏有遠古強大時代秘密的地點。你手持舊杖，站在入口處。空氣中充滿著潛在的能量，在你的皮膚上噼啪作響，宛如一曲由被遺忘的力量譜寫的危險交響樂。這裡不僅是墳墓，更是一座禁忌的圖書館。描述你在不祥的寂靜中，試圖揭開的第一個被遺忘的秘密。',
  initialBlessings: SCHOLAR_BLESSINGS_ZH_TW,
};
const TRICKSTER_CLASS_ZH_TW: PlayerClass = {
  id: 'trickster',
  name: '詐欺師',
  description: '隨心所欲扭曲現實的混沌代理人。詐欺師在不可預測性中茁壯成長，以不可思議的運氣將絕境轉化為滑稽的優勢。',
  initialHealth: 1,
  initialLuck: 100,
  initialEquipment: {
    head: { name: '嘲諷之帽', type: 'equippable', slot: 'head', description: '一頂極其浮誇的帽子，能巧妙地引來旁觀者的怒火，讓你在社交災難中佔據上風。' },
    waist: { name: '內容物未知的腰包', type: 'equippable', slot: 'waist', description: '一個小袋子，每次你伸手進去似乎都會摸到不同的東西。或許只是些棉絮。' },
    companion: { name: '虛張聲勢的幻影', type: 'summon_companion', slot: 'companion', description: '一個飄渺的半透明實體，會模仿你浮誇的手勢，但不會提供任何實際幫助。非常適合用來嚇唬人。' },
    body: null, leftHand: null, rightHand: null, feet: null,
  },
  initialInventory: [
    { name: '閃亮但毫無價值的硬幣', type: 'consumable', description: '一枚巨大而閃亮的硬幣，看起來很值錢，但其實是用廉價的塗漆鉛製成的。非常適合用來快速轉移一次性的注意力。' },
    { name: '一張違規警告的黃牌', type: 'consumable', description: '一張你可以揮舞的硬卡片，用來對無生命的物體或難纏的怪物發出一次正式警告。其效果……相當可疑，而且可能不會再起作用。' },
    { name: '空白的卷軸', type: 'consumable', description: '一卷潔白無瑕的羊皮紙。是用來書寫深刻的真理，還是畫個滑稽的鬼臉？你只有一張，所以謹慎選擇。' }
  ],
  startingPrompt: '身為詐欺師，你因為無聊而來。你一時興起晃進了低語地穴，覺得這或許會是個笑話。那些詭異的呢喃和不祥的暗影，說實話，相當滑稽。但當你踏入其中，巨大的石門在你身後轟然關上，讓你陷入絕對的黑暗。呢喃聲突然聽起來不那麼像玩笑了，更像是一種威脅。這一次，事情變得……有趣了起來。描述你為了測試此地真實本質，對地穴中看不見的居民所開的第一個惡作劇。',
  initialBlessings: TRICKSTER_BLESSINGS_ZH_TW,
};

// --- SIMPLIFIED CHINESE PLAYER CLASSES ---
const KNIGHT_CLASS_ZH_CN: PlayerClass = {
  id: 'knight',
  name: '骑士',
  description: '荣誉与武力的堡垒。骑士以坚固的盔甲和可靠的剑展开他们的旅程，准备好正面迎战任何敌人。',
  initialHealth: 100,
  initialLuck: 60,
  initialEquipment: {
    head: { name: '老旧的头盔', type: 'equippable', slot: 'head', description: '一顶简单但实用的头盔，曾不止一次保护佩戴者免受致命打击。它会阻碍周边视野。' },
    body: { name: '老旧的骑士铠甲', type: 'equippable', slot: 'body', description: '厚重的板甲，上面布满了无数战斗留下的凹痕和疤痕。它以牺牲机动性为代价，提供坚实的保护。' },
    rightHand: { name: '战损短剑', type: 'equippable', slot: 'rightHand', description: '一把见证了无数冲突的可靠刀刃。虽然剑锋有缺口，但其斗志未曾磨损。' },
    companion: { name: '王国守护犬', type: 'summon_companion', slot: 'companion', description: '一只忠诚且受过战斗训练的犬类伙伴。它的感官敏锐，咬合力惊人。' },
    leftHand: null, feet: null, waist: null,
  },
  initialInventory: [
    { name: '国王的密令', type: 'non-consumable', description: '一封盖有皇家蜡印的卷轴。其内容仅限你亲阅，详述了一项极其重要的任务。' },
    { name: '治疗药膏', type: 'consumable', quantity: 1, description: '一种厚实的草药膏，涂抹在伤口上可以促进快速愈合。' }
  ],
  startingPrompt: '身披钢铁，曾立下古老誓言，你站在长满青苔的低语地穴入口前。一股比夜色更冷的寒气从石拱门中渗出，带来微弱而难以辨识的呢喃。国王的密令在你袋中沉甸甸的，提醒着你必须铲除那侵蚀土地的黑暗。这不仅是寻宝，而是一项严峻的职责。描述眼前的景象，以及你对抗那逼近的恐惧所采取的第一个坚决行动。',
  initialBlessings: KNIGHT_BLESSINGS_ZH_CN,
};
const ROGUE_CLASS_ZH_CN: PlayerClass = {
  id: 'rogue',
  name: '盗贼',
  description: '暗影与诡计的大师。盗贼依靠智慧和敏捷，偏好从黑暗中发动攻击，并在敌人反应过来前消失无踪。',
  initialHealth: 30,
  initialLuck: 90,
  initialEquipment: {
    head: { name: '盗贼头巾', type: 'equippable', slot: 'head', description: '一顶能将脸部隐藏在阴影中的深色头巾，非常适合保持隐蔽。' },
    body: { name: '布甲', type: 'equippable', slot: 'body', description: '一套深色的多层织物，保护性极低，但能让穿著者无声、流畅地移动。' },
    rightHand: { name: '生锈匕首', type: 'equippable', slot: 'rightHand', description: '一把布满坑洞和腐蚀的刀刃，但其锋利程度仍足以进行一次无声的偷袭。' },
    feet: { name: '软底鞋', type: 'equippable', slot: 'feet', description: '专为在石地上消音而设计的轻便鞋履。' },
    companion: { name: '暗月夜枭', type: 'summon_companion', slot: 'companion', description: '一只拥有智慧到令人不安的双眼的夜行性猛禽。它能看见他人在黑暗中所忽略的事物。' },
    leftHand: null, waist: null,
  },
  initialInventory: [
    { name: '烟雾弹', type: 'consumable', quantity: 1, description: '一个小巧的陶土球，击碎时会释放出一团浓厚的、令人迷失方向的烟雾。' },
    { name: '开锁器', type: 'consumable', description: '一根细长的金属丝，是绕过简易锁具的必备品。它看起来很脆弱，可能只能使用一次。' }
  ],
  startingPrompt: '你是潜影无踪的暗影行者。在无月之夜的掩护下，你循着一件稀世珍宝的传闻来到低语地穴。厚重的石门微敞，像是一道通往窒息黑暗的无声邀请。一阵冷风带来尘埃与金属的气味，宛如陈旧的血迹。这里是你的领域。描述你如何溜进去，拥抱那等待着你的、清晰可感的危险。',
  initialBlessings: ROGUE_BLESSINGS_ZH_CN,
};
const SCHOLAR_CLASS_ZH_CN: PlayerClass = {
  id: 'scholar',
  name: '学者',
  description: '被遗忘知识与奥术秘密的探求者。学者运用智慧克服障碍，将古老的学问作为强大的武器。',
  initialHealth: 70,
  initialLuck: 75,
  initialEquipment: {
    head: { name: '单片眼镜', type: 'equippable', slot: 'head', description: '一片由精细研磨水晶制成的镜片，能揭示肉眼看不见的细节。' },
    body: { name: '学者长袍', type: 'equippable', slot: 'body', description: '飘逸的长袍，上面绣有能提供微弱魔法能量保护的奥术符文。' },
    rightHand: { name: '枯枝法杖', type: 'equippable', slot: 'rightHand', description: '一根扭曲的古老木杖，散发着潜在的魔法力量。触感异常温暖。' },
    companion: { name: '元素精灵', type: 'summon_companion', slot: 'companion', description: '一团闪烁的纯粹能量微粒，在空中飞舞，会被魔法源所吸引。' },
    leftHand: null, feet: null, waist: null,
  },
  initialInventory: [
    { name: '古老的神秘法典', type: 'non-consumable', description: '一本用奇特皮革装订的厚重典籍，里面充满了神秘的知识和禁忌的仪式。' },
    { name: '法力药水', type: 'consumable', quantity: 1, description: '一种旋转发光的蓝色液体，能恢复一部分的法力储备。' }
  ],
  startingPrompt: '在对失落知识的渴求驱使下，你的研究将你引至低语地穴，一个据说藏有远古强大时代秘密的地点。你手持旧杖，站在入口处。空气中充满着潜在的能量，在你的皮肤上噼啪作响，宛如一曲由被遗忘的力量谱写的危险交响乐。这里不仅是坟墓，更是一座禁忌的图书馆。描述你在不祥的寂静中，试图揭开的第一个被遗忘的秘密。',
  initialBlessings: SCHOLAR_BLESSINGS_ZH_CN,
};
const TRICKSTER_CLASS_ZH_CN: PlayerClass = {
  id: 'trickster',
  name: '欺诈师',
  description: '随心所欲扭曲现实的混沌代理人。欺诈师在不可预测性中茁壮成长，以不可思议的运气将绝境转化为滑稽的优势。',
  initialHealth: 1,
  initialLuck: 100,
  initialEquipment: {
    head: { name: '嘲讽之帽', type: 'equippable', slot: 'head', description: '一顶极其浮夸的帽子，能巧妙地引来旁观者的怒火，让您在社交灾难中占据上风。' },
    waist: { name: '内容物未知的腰包', type: 'equippable', slot: 'waist', description: '一个小袋子，每次你伸手进去似乎都会摸到不同的东西。或许只是些棉絮。' },
    companion: { name: '虚张声势的幻影', type: 'summon_companion', slot: 'companion', description: '一个飘渺的半透明实体，会模仿你浮夸的手势，但不会提供任何实际帮助。非常适合用来吓唬人。' },
    body: null, leftHand: null, rightHand: null, feet: null,
  },
  initialInventory: [
    { name: '闪亮但毫无价值的硬币', type: 'consumable', description: '一枚巨大而闪亮的硬币，看起来很值钱，但其实是用廉价的涂漆铅制成的。非常适合用来快速转移一次性的注意力。' },
    { name: '一张违规警告的黄牌', type: 'consumable', description: '一张您可以挥舞的硬卡片，用来对无生命的物体或难缠的怪物发出一次正式警告。其效果……相当可疑，而且可能不会再起作用。' },
    { name: '空白的卷轴', type: 'consumable', description: '一卷洁白无瑕的羊皮纸。是用来书写深刻的真理，还是画个滑稽的鬼脸？你只有一张，所以谨慎选择。' }
  ],
  startingPrompt: '身为欺诈师，你因为无聊而来。你一时兴起晃进了低语地穴，觉得这或许会是个笑话。那些诡异的呢喃和不祥的暗影，说实话，相当滑稽。但当你踏入其中，巨大的石门在你身后轰然关上，让你陷入绝对的黑暗。呢喃声突然听起来不那么像玩笑了，更像是一种威胁。这一次，事情变得……有趣了起来。描述你为了测试此地真实本质，对地穴中看不见的居民所开的第一个恶作剧。',
  initialBlessings: TRICKSTER_BLESSINGS_ZH_CN,
};

// --- JAPANESE PLAYER CLASSES ---
const KNIGHT_CLASS_JA: PlayerClass = {
  id: 'knight',
  name: 'ナイト',
  description: '名誉と武勇の砦。ナイトは頑丈な鎧と信頼できる剣で旅を始め、どんな敵にも正面から立ち向かう準備ができています。',
  initialHealth: 100,
  initialLuck: 60,
  initialEquipment: {
    head: { name: '古い兜', type: 'equippable', slot: 'head', description: '着用者を一度ならず運命的な一撃から守ってきた、シンプルで機能的な兜。周辺視野を妨げます。' },
    body: { name: '古い騎士の鎧', type: 'equippable', slot: 'body', description: '無数の戦いでへこみ、傷ついた重いプレートアーマー。機動性を犠牲にして、 상당한保護を提供します。' },
    rightHand: { name: '使い古されたショートソード', type: 'equippable', slot: 'rightHand', description: '数々の戦いを経験してきた信頼できる刃。刃は欠けていますが、その魂は折れていません。' },
    companion: { name: '王家の守護犬', type: 'summon_companion', slot: 'companion', description: '忠実で戦闘訓練を受けた犬の仲間。感覚は鋭く、噛む力は強いです。' },
    leftHand: null, feet: null, waist: null,
  },
  initialInventory: [
    { name: '王の密命', type: 'non-consumable', description: '王家の紋章が押された封印された巻物。その内容はあなただけのものであり、重大な任務が詳述されています。' },
    { name: '治癒の軟膏', type: 'consumable', quantity: 1, description: '傷に塗ると急速な治癒を促進する、濃厚なハーブのペースト。' }
  ],
  startingPrompt: '鉄に身を包み、古の誓いを立てたあなたは、苔むした囁きの地下聖堂の入り口の前に立っています。夜気よりも冷たい不穏な冷気が石のアーチから染み出し、かすかで解読不能なささやきを運んできます。あなたのポーチの中の王の密命は重く感じられ、あなたが打ち破らなければならない迫り来る闇をはっきりと思い出させます。これは宝探し以上のものであり、厳しい義務です。その光景と、迫り来る恐怖に対するあなたの最初の断固たる行動を描写してください。',
  initialBlessings: KNIGHT_BLESSINGS_JA,
};
const ROGUE_CLASS_JA: PlayerClass = {
  id: 'rogue',
  name: '盗賊',
  description: '影と策略の達人。盗賊は機知と敏捷性に頼り、闇から攻撃し、敵が反応する前に姿を消すことを好みます。',
  initialHealth: 30,
  initialLuck: 90,
  initialEquipment: {
    head: { name: '盗賊の頭巾', type: 'equippable', slot: 'head', description: '顔を影で隠す深いフードで、見られないようにするのに最適です。' },
    body: { name: '布の鎧', type: 'equippable', slot: 'body', description: '最小限の保護しか提供しませんが、静かで滑らかな動きを可能にする、暗い重ね着の生地のセット。' },
    rightHand: { name: '錆びた短剣', type: 'equippable', slot: 'rightHand', description: '穴だらけで腐食した刃ですが、その刃は静かな一撃には十分な鋭さです。' },
    feet: { name: '柔らかい底の靴', type: 'equippable', slot: 'feet', description: '石の床で足音を消すために設計された軽量の履物。' },
    companion: { name: '暗月のフクロウ', type: 'summon_companion', slot: 'companion', description: '不気味なほど知的な目を持つ夜行性の猛禽。暗闇の中で他の人が見逃すものを見ます。' },
    leftHand: null, waist: null,
  },
  initialInventory: [
    { name: '煙玉', type: 'consumable', quantity: 1, description: '割れると方向感覚を失わせる濃い煙の雲を放出する小さな粘土の球。' },
    { name: '鍵開け道具', type: 'consumable', description: '簡単な錠前を迂回するために不可欠な細い金属片。壊れやすそうに見え、一度しか機能しないかもしれません。' }
  ],
  startingPrompt: 'あなたは姿を見せずに動く影です。月明かりのない夜の帳の下、あなたは貴重なアーティファクトの噂に引かれて囁きの地下聖堂に到着します。重い石の扉はわずかに開いており、窒息しそうな暗闇への静かな招待状です。冷たい隙間風がほこりと古い血のような金属の匂いを運びます。ここはあなたの領域です。待ち受ける明白な危険を受け入れ、どのように中に滑り込むかを説明してください。',
  initialBlessings: ROGUE_BLESSINGS_JA,
};
const SCHOLAR_CLASS_JA: PlayerClass = {
  id: 'scholar',
  name: '学者',
  description: '忘れられた知識と秘術の秘密の探求者。学者は知性を使って障害を克服し、古代の伝承を強力な武器として振るいます。',
  initialHealth: 70,
  initialLuck: 75,
  initialEquipment: {
    head: { name: '片眼鏡', type: 'equippable', slot: 'head', description: '肉眼では見えない詳細を明らかにする、細かく研磨された水晶のレンズ。' },
    body: { name: '学者のローブ', type: 'equippable', slot: 'body', description: '魔法のエネルギーに対するわずかな保護を提供する、秘術のシンボルが刺繍された流れるようなローブ。' },
    rightHand: { name: '枯れ枝の杖', type: 'equippable', slot: 'rightHand', description: '潜在的な魔法の力でうなる、ねじれた古代の木片。触ると奇妙に暖かいです。' },
    companion: { name: 'エレメンタル・スプライト', type: 'summon_companion', slot: 'companion', description: '魔法の源に引き寄せられて空中を飛び回る、純粋なエネルギーのちらつく粒子。' },
    leftHand: null, feet: null, waist: null,
  },
  initialInventory: [
    { name: '古代の秘術の法典', type: 'non-consumable', description: '奇妙な革で装丁された重い本で、謎めいた伝承と禁じられた儀式で満たされています。' },
    { name: 'マナポーション', type: 'consumable', quantity: 1, description: '魔法の蓄えをある程度回復させる、渦巻く発光する青い液体。' }
  ],
  startingPrompt: '失われた知識への渇望に駆られ、あなたの研究はあなたを囁きの地下聖堂へと導きました。そこは過ぎ去った強力な時代の秘密を保持していると噂される場所です。あなたは古い杖を手に、入り口に立っています。空気そのものが、肌で感じることができる潜在的なエネルギーでパチパチと音を立て、忘れられた力の危険な交響曲を奏でています。この場所は単なる墓ではなく、禁じられた図書館です。不吉な沈黙の中で、あなたが明らかにしようとする最初の忘れられた秘密を描写してください。',
  initialBlessings: SCHOLAR_BLESSINGS_JA,
};
const TRICKSTER_CLASS_JA: PlayerClass = {
  id: 'trickster',
  name: 'トリックスター',
  description: '意のままに現実を曲げる混沌の代理人。トリックスターは予測不可能性で繁栄し、悲惨な状況を uncanny な運でコミカルな利点に変えます。',
  initialHealth: 1,
  initialLuck: 100,
  initialEquipment: {
    head: { name: '挑発の帽子', type: 'equippable', slot: 'head', description: '見物人の怒りを微妙に引きつけ、社会的な失敗で優位に立つことができる、ばかばかしいほど派手な帽子。' },
    waist: { name: '中身不明のポーチ', type: 'equippable', slot: 'waist', description: '手を入れるたびに中身が違うように見える小さな袋。あるいは、ただの糸くずかもしれません。' },
    companion: { name: 'はったりの幻影', type: 'summon_companion', slot: 'companion', description: 'あなたの壮大なジェスチャーを模倣するが、実際の助けは提供しない、 ethereal で半透明の存在。脅迫には最適です。' },
    body: null, leftHand: null, rightHand: null, feet: null,
  },
  initialInventory: [
    { name: '光るが無価値なコイン', type: 'consumable', description: '価値があるように見えるが、安価な塗装された鉛でできている大きくて光沢のあるコイン。素早い一度きりの気晴らしに最適です。' },
    { name: '黄色の警告カード', type: 'consumable', description: '無生物や不愉快なモンスターに正式に一度だけ警告を発するために振りかざすことができる硬いカード。その効果は...疑わしく、おそらく二度とは機能しないでしょう。' },
    { name: '空白の巻物', type: 'consumable', description: ' pristine な羊皮紙の巻物。深遠な真実を書くためか、それともばかげた顔を描くためか？一枚しかないので、賢く選んでください。' }
  ],
  startingPrompt: 'あなたはトリックスターで、退屈しています。笑えるかもしれないと思って、気まぐれに囁きの地下聖堂に迷い込みました。不気味なささやきと不吉な影は、率直に言って、面白いです。しかし、中に足を踏み入れると、巨大な石の扉が耳をつんざくような轟音とともにあなたの後ろで閉まり、絶対的な暗闇にあなたを突き落とします。ささやきは突然、冗談のようには聞こえず、脅威のように聞こえます。初めて、これは...面白く感じます。この場所の真の性質を試すために、ダンジョンの見えない住人に仕掛ける最初のいたずらを描写してください。',
  initialBlessings: TRICKSTER_BLESSINGS_JA,
};

// --- SPANISH PLAYER CLASSES ---
const KNIGHT_CLASS_ES: PlayerClass = {
  id: 'knight',
  name: 'Caballero',
  description: 'Un bastión de honor y proeza marcial. Los caballeros comienzan su viaje con una armadura resistente y una espada fiable, listos para enfrentarse a cualquier enemigo de frente.',
  initialHealth: 100,
  initialLuck: 60,
  initialEquipment: {
    head: { name: 'Yelmo Viejo', type: 'equippable', slot: 'head', description: 'Un casco simple y funcional que ha protegido a su portador de más de un golpe fatídico. Obstruye la visión periférica.' },
    body: { name: 'Armadura de Caballero Vieja', type: 'equippable', slot: 'body', description: 'Armadura de placas pesada, abollada y marcada por innumerables batallas. Ofrece una protección sustancial a costa de la movilidad.' },
    rightHand: { name: 'Espada Corta Desgastada', type: 'equippable', slot: 'rightHand', description: 'Una hoja fiable que ha visto su cuota de conflictos. Su filo está mellado, pero su espíritu está intacto.' },
    companion: { name: 'Perro Guardián Real', type: 'summon_companion', slot: 'companion', description: 'Un compañero canino leal y entrenado para la batalla. Sus sentidos son agudos y su mordida es feroz.' },
    leftHand: null, feet: null, waist: null,
  },
  initialInventory: [
    { name: 'Orden Secreta del Rey', type: 'non-consumable', description: 'Un pergamino sellado con el escudo real. Su contenido es solo para tus ojos, detallando una misión de grave importancia.' },
    { name: 'Ungüento Curativo', type: 'consumable', quantity: 1, description: 'Una pasta espesa de hierbas que se puede aplicar a las heridas para promover una curación rápida.' }
  ],
  startingPrompt: 'Vestido de hierro y juramentado a un antiguo pacto, te encuentras ante la boca cubierta de musgo de la Cripta Susurrante. Un escalofrío inquietante, más frío que el aire de la noche, se filtra desde el arco de piedra, llevando susurros débiles e indescifrables. La orden secreta de tu Rey se siente pesada en tu bolsa, un crudo recordatorio de la oscuridad que se cierne y que debes vencer. Esto es más que una búsqueda del tesoro; es un deber sombrío. Describe la escena y tu primera acción decidida contra el pavor que se aproxima.',
  initialBlessings: KNIGHT_BLESSINGS_ES,
};
const ROGUE_CLASS_ES: PlayerClass = {
  id: 'rogue',
  name: 'Pícaro',
  description: 'Un maestro de las sombras y la sutileza. Los pícaros confían en el ingenio y la agilidad, prefiriendo atacar desde la oscuridad y desaparecer antes de que el enemigo pueda reaccionar.',
  initialHealth: 30,
  initialLuck: 90,
  initialEquipment: {
    head: { name: 'Capucha de Pícaro', type: 'equippable', slot: 'head', description: 'Una capucha profunda que oculta el rostro en la sombra, perfecta para permanecer invisible.' },
    body: { name: 'Armadura de Tela', type: 'equippable', slot: 'body', description: 'Un conjunto de telas oscuras en capas que ofrecen una protección mínima pero permiten un movimiento silencioso y fluido.' },
    rightHand: { name: 'Daga Oxidada', type: 'equippable', slot: 'rightHand', description: 'Una hoja picada y corroída, pero su filo sigue siendo lo suficientemente afilado para un derribo silencioso.' },
    feet: { name: 'Zapatos de Suela Blanda', type: 'equippable', slot: 'feet', description: 'Calzado ligero diseñado para amortiguar los pasos en suelos de piedra.' },
    companion: { name: 'Búho de la Luna Oscura', type: 'summon_companion', slot: 'companion', description: 'Un ave de rapiña nocturna con ojos inquietantemente inteligentes. Ve lo que otros no ven en la oscuridad.' },
    leftHand: null, waist: null,
  },
  initialInventory: [
    { name: 'Bomba de Humo', type: 'consumable', quantity: 1, description: 'Una pequeña esfera de arcilla que libera una espesa nube de humo desorientador al romperse.' },
    { name: 'Ganzúa', type: 'consumable', description: 'Una delgada pieza de metal, esencial para eludir cerraduras simples. Parece frágil y podría funcionar solo una vez.' }
  ],
  startingPrompt: 'Eres una sombra que se mueve sin ser vista. Bajo el manto de una noche sin luna, llegas a la Cripta Susurrante, atraído por los rumores de un artefacto de valor incalculable. La pesada puerta de piedra está ligeramente entreabierta, una invitación silenciosa a una negrura sofocante. Una corriente de aire frío transporta el olor a polvo y algo metálico, como sangre vieja. Este es tu elemento. Describe cómo te deslizas dentro, abrazando el peligro palpable que te espera.',
  initialBlessings: ROGUE_BLESSINGS_ES,
};
const SCHOLAR_CLASS_ES: PlayerClass = {
  id: 'scholar',
  name: 'Erudito',
  description: 'Un buscador de conocimientos olvidados y secretos arcanos. El Erudito utiliza el intelecto para superar obstáculos, blandiendo la antigua sabiduría como un arma potente.',
  initialHealth: 70,
  initialLuck: 75,
  initialEquipment: {
    head: { name: 'Monóculo', type: 'equippable', slot: 'head', description: 'Una lente de cristal finamente molido que revela detalles invisibles a simple vista.' },
    body: { name: 'Túnica de Erudito', type: 'equippable', slot: 'body', description: 'Túnicas fluidas bordadas con símbolos arcanos que ofrecen una protección menor contra las energías mágicas.' },
    rightHand: { name: 'Báculo de Rama Marchita', type: 'equippable', slot: 'rightHand', description: 'Un trozo retorcido de madera antigua que zumba con un poder mágico latente. Se siente extrañamente cálido al tacto.' },
    companion: { name: 'Sprite Elemental', type: 'summon_companion', slot: 'companion', description: 'Una mota parpadeante de energía pura que se lanza por el aire, atraída por fuentes de magia.' },
    leftHand: null, feet: null, waist: null,
  },
  initialInventory: [
    { name: 'Códice Arcano Antiguo', type: 'non-consumable', description: 'Un pesado tomo encuadernado en un cuero extraño, lleno de saber críptico y rituales prohibidos.' },
    { name: 'Poción de Maná', type: 'consumable', quantity: 1, description: 'Un líquido azul luminoso y arremolinado que restaura una medida de las reservas mágicas de uno.' }
  ],
  startingPrompt: 'Impulsado por la sed de conocimiento perdido, tu investigación te ha llevado a la Cripta Susurrante, un lugar que se rumorea que guarda secretos de una era pasada y poderosa. Te encuentras en la entrada, con tu viejo báculo en la mano. El aire mismo crepita con una energía latente que puedes sentir en tu piel, una peligrosa sinfonía de poder olvidado. Este lugar no es meramente una tumba; es una biblioteca de lo prohibido. Describe el primer secreto olvidado que buscas desvelar en medio del silencio ominoso.',
  initialBlessings: SCHOLAR_BLESSINGS_ES,
};
const TRICKSTER_CLASS_ES: PlayerClass = {
  id: 'trickster',
  name: 'Embaucador',
  description: 'Un agente del caos que doblega la realidad a su voluntad. El Embaucador prospera en la imprevisibilidad, convirtiendo situaciones extremas en ventajas cómicas con una suerte asombrosa.',
  initialHealth: 1,
  initialLuck: 100,
  initialEquipment: {
    head: { name: 'Sombrero de Burla', type: 'equippable', slot: 'head', description: 'Un sombrero ridículamente ostentoso que sutilmente atrae la ira de los espectadores, dándote la ventaja en percances sociales.' },
    waist: { name: 'Bolsa de Contenido Desconocido', type: 'equippable', slot: 'waist', description: 'Una pequeña bolsa que parece contener algo diferente cada vez que metes la mano en ella. O tal vez solo sea pelusa.' },
    companion: { name: 'Fantasma Fanfarrón', type: 'summon_companion', slot: 'companion', description: 'Una entidad etérea y translúcida que imita tus gestos grandiosos pero no ofrece ayuda real. Es genial para la intimidación.' },
    body: null, leftHand: null, rightHand: null, feet: null,
  },
  initialInventory: [
    { name: 'Moneda Brillante Pero Sin Valor', type: 'consumable', description: 'Una moneda grande y reluciente que parece valiosa pero está hecha de plomo barato y pintado. Perfecta para una distracción rápida y única.' },
    { name: 'Una Tarjeta de Advertencia Amarilla', type: 'consumable', description: 'Una tarjeta rígida que puedes blandir para emitir formalmente una única advertencia a objetos inanimados o monstruos desagradables. Sus efectos son... cuestionables y probablemente no funcionarán dos veces.' },
    { name: 'Pergamino en Blanco', type: 'consumable', description: 'Un rollo de pergamino prístino. ¿Es para escribir una verdad profunda o para dibujar una cara tonta? Solo tienes uno, así que elige sabiamente.' }
  ],
  startingPrompt: 'Eres un Embaucador y estás aburrido. Entraste en la Cripta Susurrante por capricho, pensando que podría ser divertido. Los susurros espeluznantes y las sombras ominosas son, francamente, hilarantes. Pero al entrar, la gran puerta de piedra se cierra de golpe detrás de ti con un estruendo ensordecedor, sumiéndote en la oscuridad absoluta. Los susurros de repente suenan menos a broma y más a amenaza. Por primera vez, esto se siente... interesante. Describe la primera broma que le haces a los habitantes invisibles de la mazmorra para probar la verdadera naturaleza de este lugar.',
  initialBlessings: TRICKSTER_BLESSINGS_ES,
};

// --- KOREAN PLAYER CLASSES ---
const KNIGHT_CLASS_KO: PlayerClass = {
  id: 'knight',
  name: '기사',
  description: '명예와 무예의 보루. 기사들은 튼튼한 갑옷과 신뢰할 수 있는 검으로 여정을 시작하며, 어떤 적과도 정면으로 맞설 준비가 되어 있습니다.',
  initialHealth: 100,
  initialLuck: 60,
  initialEquipment: {
    head: { name: '낡은 투구', type: 'equippable', slot: 'head', description: '착용자를 여러 번의 치명적인 공격으로부터 보호해준 단순하고 기능적인 투구. 주변 시야를 방해합니다.' },
    body: { name: '낡은 기사 갑옷', type: 'equippable', slot: 'body', description: '수많은 전투로 찌그러지고 긁힌 무거운 판금 갑옷. 기동성을 희생하는 대신 상당한 보호를 제공합니다.' },
    rightHand: { name: '닳아빠진 단검', type: 'equippable', slot: 'rightHand', description: '수많은 갈등을 겪어온 신뢰할 수 있는 칼날. 날이 부서졌지만 그 정신은 꺾이지 않았습니다.' },
    companion: { name: '왕실 수호견', type: 'summon_companion', slot: 'companion', description: '충성스럽고 전투 훈련을 받은 개 동료. 감각이 예리하고 무는 힘이 셉니다.' },
    leftHand: null, feet: null, waist: null,
  },
  initialInventory: [
    { name: '왕의 비밀 명령', type: 'non-consumable', description: '왕가의 문장이 찍힌 봉인된 두루마리. 그 내용은 당신만 볼 수 있으며, 중대한 임무가 상세히 기술되어 있습니다.' },
    { name: '치유 연고', type: 'consumable', quantity: 1, description: '상처에 바르면 빠른 치유를 촉진하는 진한 약초 연고.' }
  ],
  startingPrompt: '철갑을 두르고 고대의 맹세를 한 당신은 이끼로 뒤덮인 속삭이는 지하실의 입구 앞에 서 있습니다. 밤공기보다 차가운 불안한 한기가 돌 아치에서 스며 나오며, 희미하고 해독할 수 없는 속삭임을 전합니다. 주머니 속 왕의 비밀 명령은 무겁게 느껴지며, 당신이 물리쳐야 할 다가오는 어둠을 뚜렷이 상기시킵니다. 이것은 보물찾기 이상이며, 엄중한 의무입니다. 장면과 다가오는 공포에 대한 당신의 첫 번째 단호한 행동을 묘사하십시오.',
  initialBlessings: KNIGHT_BLESSINGS_KO,
};
const ROGUE_CLASS_KO: PlayerClass = {
  id: 'rogue',
  name: '도적',
  description: '그림자와 교활함의 대가. 도적들은 재치와 민첩성에 의존하며, 어둠 속에서 공격하고 적이 반응하기 전에 사라지는 것을 선호합니다.',
  initialHealth: 30,
  initialLuck: 90,
  initialEquipment: {
    head: { name: '도적의 두건', type: 'equippable', slot: 'head', description: '얼굴을 그림자 속에 감추는 깊은 두건으로, 보이지 않게 하는 데 완벽합니다.' },
    body: { name: '천 갑옷', type: 'equippable', slot: 'body', description: '최소한의 보호만 제공하지만 조용하고 유연한 움직임을 가능하게 하는 어두운 겹겹의 천 세트.' },
    rightHand: { name: '녹슨 단검', type: 'equippable', slot: 'rightHand', description: '구멍이 나고 부식된 칼날이지만, 그 날은 조용한 공격을 할 만큼 충분히 날카롭습니다.' },
    feet: { name: '부드러운 밑창 신발', type: 'equippable', slot: 'feet', description: '돌 바닥에서 발소리를 줄이기 위해 설계된 가벼운 신발.' },
    companion: { name: '어두운 달의 올빼미', type: 'summon_companion', slot: 'companion', description: '불안할 정도로 지적인 눈을 가진 야행성 맹금류. 어둠 속에서 다른 사람들이 놓치는 것을 봅니다.' },
    leftHand: null, waist: null,
  },
  initialInventory: [
    { name: '연막탄', type: 'consumable', quantity: 1, description: '깨지면 방향 감각을 잃게 하는 짙은 연기 구름을 방출하는 작은 점토 구슬.' },
    { name: '자물쇠 따개', type: 'consumable', description: '간단한 자물쇠를 우회하는 데 필수적인 가느다란 금속 조각. 부서지기 쉬워 보이며 한 번만 작동할 수 있습니다.' }
  ],
  startingPrompt: '당신은 보이지 않게 움직이는 그림자입니다. 달 없는 밤의 장막 아래, 당신은 값비싼 유물의 소문에 이끌려 속삭이는 지하실에 도착합니다. 무거운 돌문이 약간 열려 있으며, 숨 막히는 어둠 속으로의 조용한 초대입니다. 차가운 바람이 먼지와 오래된 피와 같은 금속 냄새를 실어 나릅니다. 이곳은 당신의 영역입니다. 기다리고 있는 명백한 위험을 받아들이고 어떻게 안으로 잠입하는지 묘사하십시오.',
  initialBlessings: ROGUE_BLESSINGS_KO,
};
const SCHOLAR_CLASS_KO: PlayerClass = {
  id: 'scholar',
  name: '학자',
  description: '잊혀진 지식과 비전의 비밀을 찾는 탐구자. 학자는 지성을 사용하여 장애물을 극복하고, 고대의 지식을 강력한 무기로 사용합니다.',
  initialHealth: 70,
  initialLuck: 75,
  initialEquipment: {
    head: { name: '단안경', type: 'equippable', slot: 'head', description: '육안으로는 보이지 않는 세부 사항을 드러내는 정교하게 연마된 수정 렌즈.' },
    body: { name: '학자의 로브', type: 'equippable', slot: 'body', description: '마법 에너지에 대한 약간의 보호를 제공하는 비전의 상징이 수놓아진 흐르는 로브.' },
    rightHand: { name: '마른 가지 지팡이', type: 'equippable', slot: 'rightHand', description: '잠재적인 마법의 힘으로 윙윙거리는 뒤틀린 고대 나무 조각. 만지면 이상하게 따뜻합니다.' },
    companion: { name: '원소 정령', type: 'summon_companion', slot: 'companion', description: '마법의 원천에 이끌려 공중을 날아다니는 순수한 에너지의 깜박이는 입자.' },
    leftHand: null, feet: null, waist: null,
  },
  initialInventory: [
    { name: '고대 비전의 법전', type: 'non-consumable', description: '이상한 가죽으로 제본된 무거운 책으로, 비밀스러운 지식과 금지된 의식으로 가득 차 있습니다.' },
    { name: '마나 물약', type: 'consumable', quantity: 1, description: '마법 보유량을 어느 정도 회복시키는 소용돌이치는 빛나는 파란 액체.' }
  ],
  startingPrompt: '잃어버린 지식에 대한 갈증에 이끌려, 당신의 연구는 당신을 속삭이는 지하실로 이끌었습니다. 그곳은 지나간 강력한 시대의 비밀을 간직하고 있다고 소문난 곳입니다. 당신은 오래된 지팡이를 손에 들고 입구에 서 있습니다. 공기 자체가 피부로 느낄 수 있는 잠재적인 에너지로 탁탁 튀며, 잊혀진 힘의 위험한 교향곡을 연주합니다. 이 장소는 단순한 무덤이 아니라, 금지된 것들의 도서관입니다. 불길한 침묵 속에서 당신이 밝히려는 첫 번째 잊혀진 비밀을 묘사하십시오.',
  initialBlessings: SCHOLAR_BLESSINGS_KO,
};
const TRICKSTER_CLASS_KO: PlayerClass = {
  id: 'trickster',
  name: '사기꾼',
  description: '자신의 의지에 따라 현실을 구부리는 혼돈의 대리인. 사기꾼은 예측 불가능성 속에서 번성하며, 기이한 운으로 끔찍한 상황을 우스꽝스러운 이점으로 바꿉니다.',
  initialHealth: 1,
  initialLuck: 100,
  initialEquipment: {
    head: { name: '조롱의 모자', type: 'equippable', slot: 'head', description: '구경꾼들의 분노를 미묘하게 끌어내어 사회적 재앙에서 우위를 점하게 하는 터무니없이 화려한 모자.' },
    waist: { name: '내용물 불명의 주머니', type: 'equippable', slot: 'waist', description: '손을 넣을 때마다 내용물이 다른 것처럼 보이는 작은 주머니. 아니면 그냥 보풀일지도 모릅니다.' },
    companion: { name: '허세 부리는 유령', type: 'summon_companion', slot: 'companion', description: '당신의 과장된 제스처를 흉내 내지만 실제 도움은 주지 않는 영묘하고 반투명한 존재. 위협하기에 좋습니다.' },
    body: null, leftHand: null, rightHand: null, feet: null,
  },
  initialInventory: [
    { name: '빛나지만 가치 없는 동전', type: 'consumable', description: '가치 있어 보이지만 값싼 페인트 칠한 납으로 만든 크고 반짝이는 동전. 빠르고 일회성인 주의를 끄는 데 완벽합니다.' },
    { name: '노란색 경고 카드', type: 'consumable', description: '무생물이나 불쾌한 괴물에게 공식적으로 한 번의 경고를 발령하기 위해 휘두를 수 있는 뻣뻣한 카드. 그 효과는... 의심스럽고 아마 두 번은 작동하지 않을 것입니다.' },
    { name: '빈 두루마리', type: 'consumable', description: '깨끗한 양피지 두루마리. 심오한 진실을 쓰기 위한 것일까요, 아니면 우스꽝스러운 얼굴을 그리기 위한 것일까요? 하나밖에 없으니 현명하게 선택하십시오.' }
  ],
  startingPrompt: '당신은 사기꾼이고, 지루합니다. 웃길지도 모른다는 생각에 변덕스럽게 속삭이는 지하실에 들어왔습니다. 으스스한 속삭임과 불길한 그림자는 솔직히 말해서 재미있습니다. 하지만 안으로 들어서자 거대한 돌문이 귀청이 터질 듯한 굉음과 함께 등 뒤에서 닫히고, 당신을 완전한 어둠 속으로 밀어 넣습니다. 속삭임은 갑자기 농담처럼 들리지 않고 위협처럼 들립니다. 처음으로, 이것은... 흥미롭게 느껴집니다. 이 장소의 진정한 본질을 시험하기 위해 던전의 보이지 않는 주민들에게 처음으로 장난을 치는 것을 묘사하십시오.',
  initialBlessings: TRICKSTER_BLESSINGS_KO,
};


export const ALL_PLAYER_CLASSES: Record<Language, PlayerClass[]> = {
  'en': [KNIGHT_CLASS_EN, ROGUE_CLASS_EN, SCHOLAR_CLASS_EN],
  'zh-TW': [KNIGHT_CLASS_ZH_TW, ROGUE_CLASS_ZH_TW, SCHOLAR_CLASS_ZH_TW],
  'zh-CN': [KNIGHT_CLASS_ZH_CN, ROGUE_CLASS_ZH_CN, SCHOLAR_CLASS_ZH_CN],
  'ja': [KNIGHT_CLASS_JA, ROGUE_CLASS_JA, SCHOLAR_CLASS_JA],
  'es': [KNIGHT_CLASS_ES, ROGUE_CLASS_ES, SCHOLAR_CLASS_ES],
  'ko': [KNIGHT_CLASS_KO, ROGUE_CLASS_KO, SCHOLAR_CLASS_KO],
};

export const TRICKSTER_CLASS: Record<Language, PlayerClass> = {
  'en': TRICKSTER_CLASS_EN,
  'zh-TW': TRICKSTER_CLASS_ZH_TW,
  'zh-CN': TRICKSTER_CLASS_ZH_CN,
  'ja': TRICKSTER_CLASS_JA,
  'es': TRICKSTER_CLASS_ES,
  'ko': TRICKSTER_CLASS_KO,
};

const translations: Record<Language, Partial<Record<string, string>>> = {
  'en': {
    'adventureTitle': 'Whispering Crypt',
    'adventureSubtitle': 'A Generative AI Adventure',
    'introText': 'You stand before a forgotten crypt, its entrance shrouded in mist. Legends say it holds immense treasure, but also unspeakable horrors. Your choices will shape your destiny. What will you do?',
    'loadError': 'Failed to load save file. It may be corrupted or in an invalid format.',
    'enableNarration': 'Enable Voice Narration',
    'voiceSpeed': 'Voice Speed',
    'startAdventure': 'Start Your Adventure',
    'loadGame': 'Load Saved Game',
    'illustrationPromptStyle': 'Dark fantasy, oil painting, cinematic lighting, highly detailed.',
    'illustrationError': 'The ethereal mists refuse to form an image at this time.',
    'generatingIllustration': 'Generating Illustration...',
    'buildingWorld': 'The spirits are whispering your story...',
    'waitingForFate': 'Awaiting fate\'s decree...',
    'whatToDo': 'What do you do next?',
    'submit': 'Submit',
    'generateIllustration': 'Illustrate Scene',
    'saveGame': 'Save Game',
    'victoryTitle': 'Victory',
    'defeatTitle': 'You Have Perished',
    'victoryText': 'You have conquered the Whispering Crypt and its secrets are now yours. Your legend will be told for ages to come.',
    'defeatText': 'Your journey ends here. Your bones will turn to dust amongst the other forgotten souls within the Whispering Crypt.',
    'playAgain': 'Play Again',
    'health': 'Health',
    'luck': 'Luck',
    'slot_head': 'Head',
    'slot_body': 'Body',
    'slot_leftHand': 'Left Hand',
    'slot_rightHand': 'Right Hand',
    'slot_feet': 'Feet',
    'slot_waist': 'Waist',
    'slot_companion': 'Companion',
    'inventory': 'Inventory',
    'blessings': 'Blessings',
    'yourPocketsAreEmpty': 'Your pockets are empty.',
    'itemDescription': 'Item Description',
    'blessingDescription': 'Blessing Description',
    'chooseOrigin': 'Choose Your Origin',
    'originDescription': 'Your past has shaped you. Choose the path that led you to the entrance of the Whispering Crypt.',
    'startingEquipment': 'Starting Equipment',
    'embarkJourney': 'Embark on Your Journey',
    'aiEngine': 'AI Engine',
  },
  'zh-TW': {
    'adventureTitle': '低語地穴',
    'adventureSubtitle': '一場生成式AI冒險',
    'introText': '你站在一座被遺忘的地穴前，入口被薄霧籠罩。傳說這裡藏有巨大的財富，但也潛伏著難以言喻的恐怖。你的選擇將塑造你的命運。你將如何抉擇？',
    'loadError': '讀取存檔失敗。檔案可能已損壞或格式無效。',
    'enableNarration': '啟用語音旁白',
    'voiceSpeed': '語音速度',
    'startAdventure': '開始你的冒險',
    'loadGame': '讀取遊戲存檔',
    'illustrationError': '空靈的迷霧此刻拒絕形成圖像。',
    'generatingIllustration': '正在召喚幻象...',
    'buildingWorld': '靈魂們正在低語你的故事...',
    'waitingForFate': '等待命運的判決...',
    'whatToDo': '你接下來要做什麼？',
    'submit': '提交',
    'generateIllustration': '描繪場景',
    'saveGame': '儲存遊戲',
    'victoryTitle': '勝利',
    'defeatTitle': '你已殞命',
    'victoryText': '你已征服低語地穴，其中的秘密現已歸你所有。你的傳奇將被後世傳頌。',
    'defeatText': '你的旅程在此終結。你的骸骨將在地穴中與其他被遺忘的靈魂一同化為塵土。',
    'playAgain': '再玩一次',
    'health': '生命值',
    'luck': '幸運值',
    'slot_head': '頭部',
    'slot_body': '身體',
    'slot_leftHand': '左手',
    'slot_rightHand': '右手',
    'slot_feet': '腳部',
    'slot_waist': '腰部',
    'slot_companion': '夥伴',
    'inventory': '物品欄',
    'blessings': '祝福',
    'yourPocketsAreEmpty': '你的口袋空空如也。',
    'itemDescription': '物品描述',
    'blessingDescription': '祝福描述',
    'chooseOrigin': '選擇你的出身',
    'originDescription': '你的過去塑造了你。選擇那條引領你來到低語地穴門前的道路。',
    'startingEquipment': '初始裝備',
    'embarkJourney': '踏上旅程',
    'aiEngine': 'AI 引擎',
  },
  'zh-CN': {
    'adventureTitle': '低语地穴',
    'adventureSubtitle': '一场生成式AI冒险',
    'introText': '你站在一座被遗忘的地穴前，入口被薄雾笼罩。传说这里藏有巨大的财富，但也潜伏着难以言喻的恐怖。你的选择将塑造你的命运。你将如何抉择？',
    'loadError': '读取存档失败。文件可能已损坏或格式无效。',
    'enableNarration': '启用语音旁白',
    'voiceSpeed': '语音速度',
    'startAdventure': '开始你的冒险',
    'loadGame': '读取游戏存档',
    'illustrationError': '空灵的迷雾此刻拒绝形成图像。',
    'generatingIllustration': '正在召唤幻象...',
    'buildingWorld': '灵魂们正在低语你的故事...',
    'waitingForFate': '等待命运的判决...',
    'whatToDo': '你接下来要做什么？',
    'submit': '提交',
    'generateIllustration': '描绘场景',
    'saveGame': '保存游戏',
    'victoryTitle': '胜利',
    'defeatTitle': '你已殒命',
    'victoryText': '你已征服低语地穴，其中的秘密现已归你所有。你的传奇将被后世传颂。',
    'defeatText': '你的旅程在此终结。你的骸骨将在地穴中与其他被遗忘的灵魂一同化为尘土。',
    'playAgain': '再玩一次',
    'health': '生命值',
    'luck': '幸运值',
    'slot_head': '头部',
    'slot_body': '身体',
    'slot_leftHand': '左手',
    'slot_rightHand': '右手',
    'slot_feet': '脚部',
    'slot_waist': '腰部',
    'slot_companion': '伙伴',
    'inventory': '物品栏',
    'blessings': '祝福',
    'yourPocketsAreEmpty': '你的口袋空空如也。',
    'itemDescription': '物品描述',
    'blessingDescription': '祝福描述',
    'chooseOrigin': '选择你的出身',
    'originDescription': '你的过去塑造了你。选择那条引领你来到低语地穴门前的道路。',
    'startingEquipment': '初始装备',
    'embarkJourney': '踏上旅程',
    'aiEngine': 'AI 引擎',
  },
  'ja': {
    'adventureTitle': '囁きの地下聖堂',
    'adventureSubtitle': '生成AIアドベンチャー',
    'introText': 'あなたは忘れられた地下聖堂の前に立っています。その入り口は霧に包まれています。伝説によれば、ここには莫大な宝が眠っていますが、言葉にできない恐怖も潜んでいると言われています。あなたの選択が運命を形作ります。どうしますか？',
    'loadError': 'セーブファイルの読み込みに失敗しました。ファイルが破損しているか、形式が無効です。',
    'enableNarration': '音声ナレーションを有効にする',
    'voiceSpeed': '音声速度',
    'startAdventure': '冒険を始める',
    'loadGame': 'セーブデータを読み込む',
    'illustrationError': '霊妙な霧は今、像を結ぶことを拒んでいます。',
    'generatingIllustration': 'イラストを生成中...',
    'buildingWorld': '霊たちがあなたの物語を囁いています...',
    'waitingForFate': '運命の裁定を待っています...',
    'whatToDo': '次に何をしますか？',
    'submit': '決定',
    'generateIllustration': '場面を描写',
    'saveGame': 'ゲームを保存',
    'victoryTitle': '勝利',
    'defeatTitle': 'あなたは滅びました',
    'victoryText': 'あなたは囁きの地下聖堂を征服し、その秘密は今やあなたのものです。あなたの伝説は末永く語り継がれるでしょう。',
    'defeatText': 'あなたの旅はここで終わります。あなたの骨は、地下聖堂の他の忘れられた魂と共に塵と化すでしょう。',
    'playAgain': 'もう一度プレイ',
    'health': '体力',
    'luck': '運',
    'slot_head': '頭',
    'slot_body': '胴体',
    'slot_leftHand': '左手',
    'slot_rightHand': '右手',
    'slot_feet': '足',
    'slot_waist': '腰',
    'slot_companion': '仲間',
    'inventory': '持ち物',
    'blessings': '祝福',
    'yourPocketsAreEmpty': 'ポケットは空です。',
    'itemDescription': 'アイテム説明',
    'blessingDescription': '祝福の説明',
    'chooseOrigin': 'あなたの出自を選ぶ',
    'originDescription': 'あなたの過去があなたを形作りました。囁きの地下聖堂の入り口へと導いた道を選んでください。',
    'startingEquipment': '初期装備',
    'embarkJourney': '旅に出る',
    'aiEngine': 'AIエンジン',
  },
  'es': {
    'adventureTitle': 'Cripta Susurrante',
    'adventureSubtitle': 'Una Aventura de IA Generativa',
    'introText': 'Te encuentras ante una cripta olvidada, con la entrada envuelta en niebla. Las leyendas dicen que alberga un inmenso tesoro, pero también horrores indecibles. Tus elecciones forjarán tu destino. ¿Qué harás?',
    'loadError': 'No se pudo cargar el archivo de guardado. Puede estar corrupto o tener un formato no válido.',
    'enableNarration': 'Habilitar Narración por Voz',
    'voiceSpeed': 'Velocidad de Voz',
    'startAdventure': 'Comienza tu Aventura',
    'loadGame': 'Cargar Partida Guardada',
    'illustrationError': 'Las nieblas etéreas se niegan a formar una imagen en este momento.',
    'generatingIllustration': 'Generando ilustración...',
    'buildingWorld': 'Los espíritus están susurrando tu historia...',
    'waitingForFate': 'Esperando el decreto del destino...',
    'whatToDo': '¿Qué haces ahora?',
    'submit': 'Enviar',
    'generateIllustration': 'Ilustrar Escena',
    'saveGame': 'Guardar Partida',
    'victoryTitle': 'Victoria',
    'defeatTitle': 'Has Perecido',
    'victoryText': 'Has conquistado la Cripta Susurrante y sus secretos ahora son tuyos. Tu leyenda será contada por los siglos de los siglos.',
    'defeatText': 'Tu viaje termina aquí. Tus huesos se convertirán en polvo entre las otras almas olvidadas dentro de la Cripta Susurrante.',
    'playAgain': 'Jugar de Nuevo',
    'health': 'Salud',
    'luck': 'Suerte',
    'slot_head': 'Cabeza',
    'slot_body': 'Cuerpo',
    'slot_leftHand': 'Mano Izquierda',
    'slot_rightHand': 'Mano Derecha',
    'slot_feet': 'Pies',
    'slot_waist': 'Cintura',
    'slot_companion': 'Compañero',
    'inventory': 'Inventario',
    'blessings': 'Bendiciones',
    'yourPocketsAreEmpty': 'Tus bolsillos están vacíos.',
    'itemDescription': 'Descripción del Objeto',
    'blessingDescription': 'Descripción de la Bendición',
    'chooseOrigin': 'Elige Tu Origen',
    'originDescription': 'Tu pasado te ha moldeado. Elige el camino que te llevó a la entrada de la Cripta Susurrante.',
    'startingEquipment': 'Equipo Inicial',
    'embarkJourney': 'Emprende tu Viaje',
    'aiEngine': 'Motor de IA',
  },
  'ko': {
    'adventureTitle': '속삭이는 지하실',
    'adventureSubtitle': '생성형 AI 어드벤처',
    'introText': '안개에 휩싸인 잊혀진 지하실 입구 앞에 서 있습니다. 전설에 따르면 이곳에는 막대한 보물이 있지만, 말로 다할 수 없는 공포도 도사리고 있다고 합니다. 당신의 선택이 당신의 운명을 결정할 것입니다. 무엇을 하시겠습니까?',
    'loadError': '저장 파일을 불러오는 데 실패했습니다. 파일이 손상되었거나 잘못된 형식일 수 있습니다.',
    'enableNarration': '음성 내레이션 활성화',
    'voiceSpeed': '음성 속도',
    'startAdventure': '모험 시작하기',
    'loadGame': '저장된 게임 불러오기',
    'illustrationError': '영묘한 안개가 지금은 형상을 만들기를 거부합니다.',
    'generatingIllustration': '일러스트 생성 중...',
    'buildingWorld': '영혼들이 당신의 이야기를 속삭이고 있습니다...',
    'waitingForFate': '운명의 판결을 기다리는 중...',
    'whatToDo': '다음에 무엇을 하시겠습니까?',
    'submit': '제출',
    'generateIllustration': '장면 묘사하기',
    'saveGame': '게임 저장하기',
    'victoryTitle': '승리',
    'defeatTitle': '당신은 사망했습니다',
    'victoryText': '당신은 속삭이는 지하실을 정복했으며 그 비밀은 이제 당신의 것입니다. 당신의 전설은 오랫동안 기억될 것입니다.',
    'defeatText': '당신의 여정은 여기서 끝납니다. 당신의 뼈는 속삭이는 지하실의 다른 잊혀진 영혼들 사이에서 먼지가 될 것입니다.',
    'playAgain': '다시 플레이하기',
    'health': '체력',
    'luck': '행운',
    'slot_head': '머리',
    'slot_body': '몸통',
    'slot_leftHand': '왼손',
    'slot_rightHand': '오른손',
    'slot_feet': '발',
    'slot_waist': '허리',
    'slot_companion': '동료',
    'inventory': '소지품',
    'blessings': '축복',
    'yourPocketsAreEmpty': '주머니가 비어 있습니다.',
    'itemDescription': '아이템 설명',
    'blessingDescription': '축복 설명',
    'chooseOrigin': '당신의 출신을 선택하세요',
    'originDescription': '당신의 과거가 당신을 만들었습니다. 속삭이는 지하실 입구로 당신을 이끈 길을 선택하세요.',
    'startingEquipment': '초기 장비',
    'embarkJourney': '여정 시작하기',
    'aiEngine': 'AI 엔진',
  },
};

export const t = (lang: Language, key: string): string => {
  return translations[lang]?.[key] || translations['en'][key] || `[${key}]`;
};