/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "Main": "主界面",
    "Mass Upgrades": "质量升级",
    "Options": "选项",
    "Loading game...": "游戏加载中...",
    "Buy Max": "购买最大",
    "Hard Reset": "硬复位",
    "Scaling": "比例",
    "Ranks Rewards": "等级奖励",
    "Stats": "统计",
    "Stronger [": "更强 [",
    "Stronger Effect": "更强的效果",
    "Stronger Power": "更强的力量",
    "Tickspeed Effect": "时刻速度效果",
    "Tickspeed Power": "时刻速度力量",
    "Tier": "层",
    "triple mass gain.": "三重质量增益。",
    "Upgrades": "升级",
    "Req": "要求",
    "Reset your mass and upgrades, but": "重置你的质量和升级，但是",
    "Booster [": "助推器 [",
    "Booster Effect": "助推器效果",
    "Booster Power": "助推器力量",
    "Cost": "成本",
    "double Rage Powers gain.": "双倍愤怒力量增益。",
    "Muscler [": "肌肉 [",
    "Muscler Effect": "肌肉效果",
    "Muscler Power": "肌肉力量",
    "Rage Points": "愤怒点数",
    "Rage Upgrades": "愤怒升级",
    "raise mass gain by 1.15": "将质量增益提高 1.15",
    "Rank": "段位",
    "make mass gain is boosted by (x+1)^2, where x is rank.": "使质量增益提升到 (x+1)^2 ，其中 x 是段位。",
    "mass upgrade 2 boosts itself. Currently": "质量升级 2 提升它自己。当前",
    "reduce all mass upgrades cost scaled by 20%.": "将所有质量升级成本降低 20%。",
    "reduce mass upgrade 3 cost scaled by 20%.": "将质量升级 3 成本降低 20%。",
    "reduce rank reqirements by 20%.": "将段位要求降低 20%。",
    "Tickspeed [": "时刻速度 [",
    "unlock mass upgrade 2, reduce mass upgrade 1 cost scaled by 20%.": "解质量升级 2，减少质量升级 1 成本 20%。",
    "unlock mass upgrade 3, reduce mass upgrade 2 cost scaled by 20%, mass upgrade 1 boosts itself. Currently": "解锁质量升级 3，减少质量升级 2 成本 20%，质量升级 1 提升自身。 当前",
    "x to mass gain": "x 质量增益",
    "adds +5% tickspeed power for every tiers you have, softcaps at +40%. Currently": "为您拥有的每一层增加 +5% 时刻速度力量，软上限为 +40%。 当前",
    "make mass gain is boosted by (x+1)^2, where x is rank. Currently": "使质量增益提升 (x+1)^2，其中 x 是段位。 当前",
    "make mass upgrade 3 softcap starts 1.2x later.": "使质量升级3软上限开始于 1.2x 之后。",
    "make rank 6 effect is better. [(x+1)^2 -> (x+1)^x^1/3]": "使段位6效果更好。 [(x+1)^2 -> (x+1)^x^1/3]",
    "rank up.": "段位提升。",
    "Require 1e9 tonne of mass to reset previous features for gain Rage Powers": "需要 1e9 吨的质量来重置以前的功能以获得愤怒力量",
    "unlock mass upgrade 3, reduce mass upgrade 2 cost scaled by 20%, mass upgrade 1 boosts itself.": "解锁质量升级 3，减少质量升级 2 成本 20%，质量升级 1 提升自身。",
    "): Starts at": "): 开始于",
    " Tickspeed Effect": " 时刻速度效果",
    " Tickspeed Power": " 时刻速度力量",
    "Hint 1: Hover top image above tabs to show description...": "提示 1：将顶部图像悬停在选项卡上方以显示描述...",
    "Join Discord": "加入Discord",
    "mass upgrade 2 boosts itself.": "质量升级 2 提升自身。",
    "The game inspired by Distance Incremental & Synergism": "游戏灵感来自距离增量和协同",
    "adds +5% tickspeed power for every tiers you have, softcaps at +40%.": "为您拥有的每一层增加 +5% 时刻速度，软上限为 +40%。",
    "adds tickspeed power based on ranks. Currently": "根据等级增加时刻速度。 目前",
    "ranks boosts Rage Powers gain. Currently": "等级提升愤怒力量增益。 目前",
    "Super": "超级",
    "BH Condenser Power": "BH冷凝器功率",
    "Black Hole Condenser [": "黑洞冷凝器 [",
    "Dark Matters": "暗物质",
    "Mass of Black Hole gain formula - (x + 1": "黑洞质量增益公式 - (x + 1",
    "of Black Hole": "黑洞",
    "Black Hole": "黑洞",
    "Which multiples mass gain by": "其中质量增益的倍数为",
    "Black Hole Upgrades": "黑洞升级",
    "Hyper": "高级",
    "make rage powers are boosted by tiers. Currently": "使愤怒的力量由层级提高。 目前",
    "Tickspeed": "时刻速度",
    "Atoms": "原子",
    "Enter Challenge": "进入挑战",
    "Exit Challenge": "退出挑战",
    "Distribute": "分配",
    "Confirmation Settings": "确认设置",
    "Font Settings": "字体设置",
    "free Tickspeeds": "免费时刻速度",
    "Gamma Ray [": "伽马射线 [",
    "Gamma Ray Effect": "伽马射线效果",
    "Gamma Ray Power": "伽马射线力量",
    "Help": "帮助",
    "Hint: Click any image for show challenge description.": "提示：单击任何图像以显示挑战描述。",
    "Monospace Typewritter": "等宽字体",
    "of mass gain from Black Hole will softcap mass gain!": "来自黑洞的质量增益将限制质量增益！",
    "of mass gain will softcap mass gain!": "质量增益将软上限质量增益！",
    "Ratio Mode": "比例模式",
    "unassigned Quarks": "未分配的夸克",
    "Which provides": "这提供了",
    "After": "后面",
    "Assign": "分配",
    "Atom": "原子",
    "Atom Upgrades": "原子升级",
    "Atomic Generator": "原子发生器",
    "Atomic Powers": "原子力量",
    "Black Hole Condenser": "黑洞冷凝器",
    "Challenges": "挑战",
    "Electrons": "电子",
    "Electrons Powers": "电子力量",
    "Electrons Powers, which:": "电子力量，其中：",
    "Entering challenge will reset with Dark Matters!": "进入挑战将重置为暗物质！",
    "Gamma Ray": "伽马射线",
    "make rage powers boosted by tiers. Currently": "使愤怒力量被层级提升。 目前",
    "make rank 6 reward effect is better. [(x+1)^2 -> (x+1)^x^1/3]": "使6级奖励效果更好。 [(x+1)^2 -> (x+1)^x^1/3]",
    "make tier 4 reward effect is twice effective and remove softcap.": "使第 4 层奖励效果双倍有效并移除 软上限。",
    "make tier 6 reward effect is stronger by dark matters. Currently": "通过暗物质使6级奖励效果更强。 目前",
    "Mass": "质量",
    "Mass gain softcap is divided by 1e150, and is stronger.": "质量增益软上限除以 1e150，而且更强。",
    "mass upgrade 3 boosts itself. Currently": "质量升级 3 提升自身。 目前",
    "Neutrons": "中子",
    "Neutrons Powers": "中子力量",
    "Neutrons Powers, which:": "中子力量，其中：",
    "Particles": "粒子",
    "Protons": "质子",
    "Protons Powers": "质子力量",
    "Protons Powers, which:": "质子力量，其中：",
    "Rage Points gain is rooted by 10. In addtional, mass gain softcap is divided by 1e100.": "愤怒点数增益以 10 为根。此外，质量增益软上限除以 1e100。",
    "raise tickspeed effect by 1.05.": "将时刻速度效果提高1.05。",
    "rank 40 reward are overpowered.": "40级奖励是压倒性的。",
    "rank 40 reward are stronger.": "40级奖励更强。",
    "rank multiplies quark gain. Currently": "等级乘以夸克增益。 目前",
    "reduce tier reqirements by 25%, make Hyper Rank scaling is 15% weaker.": "将层级要求降低 25%，使 高级等级 扩展弱 15%。",
    "Reset your Rank, but": "重置你的等级，但是",
    "Reset your Tier, but": "重置你的层级，但是",
    "Reward: For every completions adds +7.5% to Tickspeed Power.": "奖励：每完成一次，时刻速度力量 就会增加 7.5%。",
    "Reward: Mass gain are raised by completions, but cannot append while in this challenge!": "奖励：完成次数会增加质量增益，但在此挑战中无法追加！",
    "Reward: Rage Powers gain are raised by completions.": "奖励：完成后会增加愤怒力量。",
    "Reward: Super Ranks starts later, Super Tickspeed scaling weaker by completions.": "奖励：超级等级开始较晚，超级时刻速度随着完成次数的增加而变弱。",
    "softcapped": "软上限",
    "Super Ranks, Mass Upgrades starts at 25. In addtional, Super Tickspeed start at 50.": "超级等级，质量升级从 25 开始。另外，超级时刻速度从 50 开始。",
    "Tetr": "三阶",
    "tier up.": "层提升。",
    "Which generates": "其产生",
    "You cannot buy Tickspeed.": "您不能购买 时刻速度。",
    "Booster adds Musclar.": "助推器增加肌肉。",
    "For every 3 tickspeeds adds Stronger.": "每 3 时刻速度增加更强。",
    "For every OoMs of Rage Powers adds Stronger Power at a reduced rate.": "对于每一个 愤怒力量OoMs，都会以较低的速度增加更强大的力量。",
    "Gain 100% of Rage Powers gained from reset per second. Rage Powers are boosted by mass of Black Hole.": "每秒获得 100% 从重置中获得的愤怒力量。 愤怒力量会因黑洞的质量而增强。",
    "Mass gain is boosted by OoMs of Dark Matters.": "暗物质的 OoM 增加了质量增益。",
    "Mass gain of Black Hole is boosted by Rage Points.": "黑洞的质量增益由愤怒点数提高。",
    "Mass gain softcap starts 3x later for every Ranks you have.": "对于您拥有的每个等级，质量增益软上限将在 3 倍之后开始。",
    "Mass gain softcap starts later based on mass of Black Hole.": "质量增益软上限根据黑洞的质量稍后开始。",
    "Mass Upgardes no longer spends mass.": "质量升级不再消耗质量。",
    "Raise Rage Powers gain by 1.15.": "将 愤怒力量 增益提高 1.15。",
    "Ranks no longer resets anything.": "等级不再重置任何东西。",
    "Stronger adds Booster.": "更强增加助推器。",
    "Stronger Effect softcap starts later based on unspent Dark Matters.": "更强效果软上限 基于未使用的暗物质稍后开始。",
    "Stronger Power is added +^0.25.": "增加更强的力量 +^0.25。",
    "Super Mass Upgrades scaling is weaker by Rage Points.": "超级质量升级的缩放比例因愤怒点数而变弱。",
    "Super Mass Upgrades scaling starts later based on mass of Black Hole.": "超级质量升级的缩放比例稍后根据黑洞的质量开始。",
    "Super Rank scaling is 20% weaker.": "超级等级缩放弱 20%。",
    "Tickspeed boost BH Condenser Power.": "时刻速度提升黑洞冷凝器功率。",
    "Tiers no longer resets anything.": "层级不再重置任何东西。",
    "You can automatically buy tickspeed and Rage Power upgrades.": "您可以自动购买 时刻速度 和 愤怒力量 升级。",
    "You can automatically buys mass upgrades.": "您可以自动购买质量升级。",
    "You can automatically rank up.": "您可以自动等级提升。",
    "You can automatically tier up.": "您可以自动层级提升。",
    "Require over 1e100 uni of black hole to reset all previous features for gain Atoms & Quarks": "需要超过 1e100 个黑洞才能重置所有先前的功能以获得原子和夸克",
    "Require over 1e20 Rage Power to reset all previous features for gain Dark Matters": "需要超过 1e20 愤怒力量 才能重置所有以前的功能以获得暗物质",
    "Require over 1e9 tonne of mass to reset previous features for gain Rage Powers": "需要超过 1e9 吨的质量来重置以前的功能以获得愤怒力量",
    "You cannot rank up.": "你不能提升等级。",
    "You cannot gain Rage Powers, but Dark Matters are gained by mass instead of Rage Powers at a reduced rate.": "你无法获得愤怒力量，但暗物质是按质量获得的，而不是获得愤怒力量的速度会降低。",
    "You cannot buy Tickspeed & BH Condenser.": "您不能购买 时刻速度 & 黑洞冷凝器。",
    "[Tetr Era] Unlock Tetr.": "[三阶 时代] 解锁 三阶。",
    "Atomic Powers boosts Quark gain.": "原子力量提高夸克增益。",
    "Entering challenge will reset with Atoms except previous challenges!": "除之前的挑战外，进入挑战将使用 原子 重置！",
    "Gain 100% of Dark Matters gained from reset per second. Mass gain from Black Hole softcap starts later based on Atomic Powers.": "每秒获得 100% 从重置中获得的暗物质。 黑洞软上限的质量增益稍后基于原子力量开始。",
    "Hyper Mass Upgrades & Tickspeed scales 15% weaker.": "高级质量升级和 时刻速度 的比例减弱 15%。",
    "Hyper Tickspeed starts 50 later.": "高级时刻速度 50 后开始。",
    "In addtional, mass gain softcap is stronger.": "此外，质量增益软上限更强。",
    "Keep 1-4 Challenge on reset. BH Condensers adds Gamma Rays Power at a reduced rate.": "重置时保持 1-4 挑战。 黑洞冷凝器以较低的速度增加伽马射线功率。",
    "Mass boost Atoms gain.": "质量提升原子增益。",
    "Mass gain softcap is 10% weaker.": "质量增益软上限弱 10%。",
    "Neturon Powers boosts mass of Black Hole gain.": "中子能量提高了黑洞增益的质量。",
    "Reward: Completions adds 2 maximum completions of 1-4 Challenge. On first completion, unlock Elements (Coming Soon": "奖励：完成次数增加 2 次 1-4 挑战的最大完成次数。 第一次完成时，解锁元素（即将推出",
    "Reward: For every completions adds +10% to Tickspeed & BH Condenser Power.": "奖励：每完成一次，时刻速度 和 黑洞冷凝器功率就会增加 10%。",
    "Reward: Rank requirement are weaker by completions.": "奖励：完成后等级要求降低。",
    "Start with Mass upgrades unlocked.": "开始时解锁质量升级。",
    "Stronger effect softcap is 15% weaker.": "更强的软上限效果弱 15%。",
    "Tickspeed boost each particle powers gain.": "时刻速度提升每个粒子的力量增益。",
    "Tier requirement is halved. Hyper Rank starts later based on Tiers you have.": "层级要求减半。 高级等级 根据您拥有的等级稍后开始。",
    "You can automatically buy BH Condenser and upgrades. Tickspeed no longer spent Rage Powers.": "您可以自动购买 黑洞冷凝器和升级。 时刻速度 不再消耗愤怒力量。",
    "You can automatically Tetr up. Super Tier starts 10 later.": "你可以自动三阶了。 超级层级在 10 后开始。",
    "Elements": "元素",
    "For every OoM of Rage Powers adds Stronger Power at a reduced rate.": "对于每个OoM的愤怒力量，都会以较低的速度增加更强的力量。",
    "Gain 100% of Rage Power gained from reset per second. Rage Powers are boosted by mass of Black Hole.": "每秒获得重置获得的 100% 的愤怒力量。 愤怒力量会因黑洞的质量而增强。",
    "Gamma Rays [": "伽马射线 [",
    "Hyper Mass Upgrade & Tickspeed scales 15% weaker.": "高级质量升级和 时刻速度 的比例减弱 15%。",
    "make mass upgrade 3 softcap start 1.2x later.": "使质量升级 3 软上限开始 1.2x 之后。",
    "Mass boost Atom gain.": "质量提升原子增益。",
    "Tickspeeds [": "时刻速度 [",
    "Tier up.": "层级提升.",
    "Which multiplies mass gain by": "乘以质量增益",
    "Tickspeeds boosts BH Condenser Power.": "时刻速度 提高 黑洞冷凝器功率。",
    "Reward: Completions adds 2 maximum completions of 1-4 Challenge. On 16th completion, unlock Elements": "奖励：完成次数增加 2 次 1-4 挑战的最大完成次数。 在第 16 次完成时，解锁元素",
    "The game is inspired by Distance Incremental & Synergism": "游戏的灵感来自距离增量和协同放置",
    "Super Rank scale weaker based on Tier, Super Tier scale 20% weaker. Currently": "超级等级 比例基于 层级 变弱，超级层级 等级弱 20%。 目前",
    "Super Mass Upgrade scales later based on mass of Black Hole.": "超级质量升级 稍后会根据黑洞的质量进行缩放。",
    "Strongers adds Boosters.": "更强增加助推器。",
    "Stronger Effect's softcap start later based on unspent Dark Matters.": "更强效果 的软上限基于未使用的暗物质稍后开始。",
    "stronger effect's softcap is 10% weaker.": "强壮效果的 软上限 弱 10%。",
    "Rank up.": "等级提升。",
    "reduce all mass upgrades cost scale by 20%.": "将所有质量升级的成本比例降低 20%。",
    "reduce mass upgrade 3 cost scale by 20%.": "将质量升级 3 的成本比例降低 20%。",
    "uni worth of mass gain from Black Hole, mass gain will be softcapped!": "来自黑洞的uni质量增益，质量增益将软上限！",
    "Quark": "夸克",
    "rank multiplie quark gain. Currently": "等级乘以夸克增益。 目前",
    "rank multiplie mass gain. Currently": "等级乘以质量增益。 目前",
    "rank 40 reward is stronger.": "40级奖励更强。",
    "rank 40 reward is overpowered.": "等级 40 奖励是压倒性的。",
    "Mass gain softcap starts 3x later for every Rank you have.": "对于您拥有的每个等级，质量增益软上限将在 3 倍之后开始。",
    "Mass gain softcap start later based on mass of Black Hole.": "质量增益软上限根据黑洞的质量稍后开始。",
    "Mass gain is boosted by OoM of Dark Matters.": "暗物质的 OoM 提高了质量增益。",
    "make tier 6's reward effect stronger by dark matters. Currently": "通过暗物质使6层的奖励效果更强。 目前",
    "make tier 4's reward effect twice effective and remove softcap.": "使第 4 层的奖励效果生效两次并移除 软上限。",
    "adds +5% tickspeed power for every tier you have, softcaps at +40%. Currently": "为您拥有的每一层增加 +5% 时刻速度，软上限为 +40%。 目前",
    "Atomic Power": "原子力量",
    "Atomic Powers adds Black Hole Condensers at a reduced rate.": "原子力量以较低的速度添加黑洞冷凝器。",
    "Black Hole Condensers [": "黑洞冷凝器 [",
    "Black Hole mass's gain formula - (x + 1": "黑洞质量的增益公式 - (x + 1",
    "Black Hole mass's gain is boosted by Rage Points.": "黑洞质量的增益由愤怒点数提高。",
    "Boosters adds Musclers.": "助推器增加肌肉。",
    " Cost": " 成本",
    "You are now in [No Rage Powers] Challenge! Go over 1.0000e20 uni of Black Hole to complete.": "您现在处于 [无愤怒力量] 挑战中！ 完成条件：超过 1.0000e20 黑洞uni。",
    "You are now in [No Tickspeed & Condenser] Challenge! Go over 1.3527e12 M☉ of Black Hole to complete.": "您现在处于 [无时刻速度 & 冷凝器] 挑战中！ 完成条件： 1.3527e12 黑洞M☉。",
    "You are now in [Weakened Rage] Challenge! Go over 5.3961e621 uni to complete.": "你现在在[虚弱愤怒]挑战中！ 完成条件： 5.3961e621 uni。",
    "You are now in [Anti-Tickspeed] Challenge! Go over 5.2025e591 uni to complete.": "您现在处于[反时刻速度]挑战中！ 完成条件： 5.2025e591 uni。",
    "You are now in [Instant Scale] Challenge! Go over 7.8398e589 uni to complete.": "您现在处于[即时比例]挑战中！ 完成条件： 7.8398e589 uni 。",
    "You are now in [Melted Mass] Challenge! Go over 4.4670e486 uni to complete.": "你现在在[融化质量]挑战！ 完成条件： 4.4670e486 uni 。",
    "You are now in [No Rank] Challenge! Go over 2.3283e134 uni of Black Hole to complete.": "您现在处于[无等级] 挑战中！ 完成条件： 2.3283e134 黑洞uni。",
    "Super Rank scale weaker based on Tier, Super Tier scale 20% weaker.": "超级等级基于 层级 变弱，超级层级 弱 20%。",
    "[Sodium] Nitrogen’s multiplier is squared.": "[钠] 氮的乘数是平方的。",
    "[Sulfur] Silicon now gets +2% for each element bought.": "[硫] 硅现在每购买一个元素就获得 +2%。",
    "[Aluminium] For every c7 completion, add 2 c5 & 6 completion.": "[铝]每完成一个c7，就增加2个c5和6 完成。",
    "[Argon] You can now automatically buy gamma rays. Gamma ray raise tickspeed effect at an extremely reduced rate.": "[氩] 现在可以自动购买伽马射线了。 伽玛射线以极低的速度提高时刻速度效果。",
    "[Beryllium] Stronger’s power is stronger based on Proton Powers.": "[铍] 更强 的力量基于 质子力量 更强。",
    "[Boron] The 7th challenge’s effect is twice as effective.": "[硼] 第7次挑战的效果是两倍。",
    "[Carbon] Gain 1% more quarks for each challenge completion.": "[碳] 每完成一次挑战，获得的夸克增加 1%。",
    "[Chlorine] Raise Atom’s gain by 1.1.": "[氯] 将 原子 的增益提高 1.1。",
    "[Fluorine] The Tetr requirement is 15% weaker.": "[氟] 三阶 要求低 15%。",
    "[Helium] Hardened Challenge scale 25% weaker.": "[氦] 强化挑战等级弱 25%。",
    "[Hydrogen] Improves quark gain formula is better.": "[氢] 提高夸克增益公式更好。",
    "[Lithium] Electron Power boost Atomic Powers gain.": "[锂] 电子力量 提升 原子力量 增益。",
    "[Magnesium] Power’s gain from each particle formula is better.": "[镁] 每个粒子公式的功率增益更好。",
    "[Neon] 3rd & 4th challenges’ scaling is weakened.": "[氖] 第三 & 第四 挑战的规模被削弱了。",
    "[Nitrogen] Carbon’s effect is now multiplied by the number of elements bought.": "[氮] 碳的效果现在乘以购买的元素数量。",
    "[Oxygen] C2’s reward’s softcap is 75% weaker.": "[氧] C2 的奖励的 软上限 弱了 75%。",
    "[Phosphorus] Super BH Condenser & Gamma Ray scales 20% weaker.": "[磷] 超级 黑洞冷凝器和伽马射线缩放 20%。",
    "[Silicon] Passively gain 5% of the quarks you would get from resetting each second.": "[硅] 每秒被动获得 5% 的夸克。",
    "Dark Matter & Mass from Black Hole gains are rooted by 8.": "从黑洞获得的暗物质和质量根植于 8。",
    "Reward: Dark Matter & Mass from Black Hole gains are raised by completions. On first completion, unlock 3 rows of Elements": "奖励：来自黑洞的暗物质和质量通过完成而增加。 第一次完成时，解锁 3 行元素",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Bahnschrift': 'Bahnschrift',
    'Comic Sans MS': 'Comic Sans MS',
    'Courier': 'Courier',
    'Arial': 'Arial',
    'Verdana': 'Verdana',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "\t\t\t\t": "\t\t\t\t",
    "Currently: ": "当前: ",
    "Adds BH Condenser Power by ": "增加黑洞冷凝器力量",
    "Adds Tickspeed Power by ": "增加时刻速度力量",
    "Makes Mass gain boosted by Rage Powers - ": "使愤怒力量提高质量增益 -",
    "Multiples Rage Power gain by ": "倍增愤怒力量增益",
    "Quark gain is multiplied by ": "夸克增益乘以",
    "Multiplies Dark Matter gain by ": "倍增暗物质增益",
    "Multiplies Mass gain by ": "倍增质量增益",
    "Multiplies Rage Power gain by ": "倍增愤怒力量增益",
    "Raise Rage Power gain by ": "将愤怒力量增益提高",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t": "\n\t\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+) M⊕$/,
    /^([\d\.]+) kg$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\^([\d\.]+)$/,
    /^\+([\d\.]+)x$/,
    /^([\d\.]+) g$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+) \+ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^([\d\.]+)e([\d\.]+)e([\d\.,]+) uni$/,
    /^([\d\.]+)e([\d\.,]+) uni$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Incremental Mass Rewritten v(.+) - made by MrRedShark77$/, '质量增量重制版 v$1 - 由 MrRedShark77 制作'],
    [/^([\d\.]+)\/sec$/, '$1\/秒'],
    [/^([\d\.]+)x stronger$/, '$1x 更强'],
    [/^\+([\d\.]+) later$/, '\+$1 之后'],
    [/^\+([\d\.]+) Booster$/, '\+$1 助推器'],
    [/^\+([\d\.]+) Boosters$/, '\+$1 助推器'],
    [/^\+([\d\.]+) Musclar$/, '\+$1 肌肉'],
    [/^\+([\d\.]+) Musclars$/, '\+$1 肌肉'],
    [/^\+([\d\.]+) Stronger$/, '\+$1 更强'],
    [/^\+([\d\.]+) later$/, '\+$1 之后'],
    [/^([\d\.]+) Completions \(\+(.+) at (.+) uni$/, '$1 次完成（\+$2 在 $3 uni '],
    [/^([\d\.]+) Completions \(\+(.+) at (.+) uni of Black Hole$/, '$1 次完成（\+$2 在 $3 黑洞uni '],
    [/^([\d\.]+) Completions \(\+(.+) at (.+) M☉ of Black Hole$/, '$1 次完成（\+$2 在 $3 黑洞M☉ '],
    [/^([\d\.]+)\% weaker$/, '$1\% 减弱'],
    [/^([\d\.]+)e([\d\.,]+)x later$/, '$1e$2x 之后'],
    [/^\[5\] No Rank (.+) Completions\]$/, '\[5\] 无等级 $1 完成\]'],
    [/^\[6\] No Tickspeed \& Condenser (.+) Completions\]$/, '\[6\] 无 时刻速度和冷凝器 $1 完成\]'],
    [/^\[7\] No Rage Powers (.+) Completions\]$/, '\[7\] 无愤怒力量 $1 完成\]'],
    [/^(.+) later to Super Ranks, Super Tickspeed scaling (.+) weaker$/, '$1 之后到超级等级，超级 时刻速度 比例减弱 $2'],
    [/^\[1\] Hardened Instant Scale (.+) Completions\]$/, '\[1\] 硬化即时比例 $1 完成\]'],
    [/^\[2\] Hardened Anti-Tickspeed (.+) Completions\]$/, '\[2\] 硬化反时刻速度 $1 完成\]'],
    [/^\[3\] Hardened Melted Mass (.+) Completions\]$/, '\[3\] 硬化熔化质量 $1 完成\]'],
    [/^\[4\] Hardened Weakened Rage (.+) Completions\]$/, '\[4\] 硬化弱化愤怒 $1 完成\]'],
    [/^\[8\] White Hole (.+) Completions\]$/, '\[8\] 白洞 $1 完成\]'],
    [/^Multiples Mass gain by (.+)$/, '质量增益倍数 $1'],
    [/^Multiples Dark Matter gain by (.+)$/, '暗物质增益倍数 $1'],
    [/^Cost: (.+) Dark Matter$/, '成本: $1 暗物质'],
    [/^Cost: (.+) Dark Matters$/, '成本: $1 暗物质'],
    [/^Cost: (.+) Rage Power$/, '成本: $1 愤怒力量'],
    [/^Cost: (.+) Rage Powers$/, '成本: $1 愤怒力量'],
    [/^Cost: (.+) Atom$/, '成本: $1 原子'],
    [/^Cost: (.+) Atoms$/, '成本: $1 原子'],
    [/^Goal: (.+) uni$/, '目标: $1 uni'],
    [/^Goal: (.+) uni of Black Hole$/, '目标: $1 黑洞 uni'],
    [/^Goal: (.+) M☉ of Black Hole$/, '目标: $1 黑洞 M☉'],
    [/^Goal: (.+) MMMWG of Black Hole$/, '目标: $1 黑洞 MMWG'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^mass gain is raised by (.+).$/, '质量增益提高了 $1。'],
	[/^unlock mass upgrade ([\d\.]+).$/, '解锁质量升级 $1.'],
	[/^([\d\.]+) g to mass gain$/, '$1 克 到质量增益'],
	[/^([\d\.]+) g\/sec$/, '$1 克\/秒'],
	[/^([\d\.]+) kg \(\+(.+) g\/sec$/, '$1e$2 \(\+$3 克\/秒'],
	[/^([\d\.]+)e([\d\.]+) \(\+(.+)\/sec$/, '$1e$2 \(\+$3\/秒'],
	[/^([\d\.]+) OoMs\/sec$/, '$1 OoMs\/秒'],
	[/^([\d\.]+) kg\/sec$/, '$1 千克\/秒'],
	[/^([\d\.]+) tonne\/sec$/, '$1 吨\/秒'],
	[/^([\d\.]+)e([\d\.]+) tonne\/sec$/, '$1e$2 吨\/秒'],
	[/^([\d\.]+)e([\d\.]+) tonne to mass gain$/, '$1e$2 吨到质量增益'],
	[/^([\d\.]+) kg to mass gain$/, '$1 kg 到质量增益'],
	[/^([\d\.]+)e([\d\.,]+) \(\+([\d\.]+)\/sec$/, '$1e$2 \(\+$3\/秒'],
	[/^([\d\.]+) tonne$/, '$1 吨'],
	[/^Tetr ([\d\.]+)$/, '三阶 $1'],
	[/^([\d\.]+)e([\d\.]+) MME$/, '$1e$2 MME'],
	[/^([\d\.]+)e([\d\.]+) tonne$/, '$1e$2 吨'],
	[/^\^([\d\.]+) to Booster Power$/, '\^$1 到助推器力量'],
	[/^x([\d\.]+) tonne to mass gain$/, 'x$1 吨到质量增益'],
	[/^x([\d\.]+) to Muscler Power$/, 'x$1 到肌肉力量'],
	[/^x([\d\.]+)e([\d\.,]+) to Muscler Power$/, 'x$1e$2 到肌肉力量'],
	[/^([\d\.]+)e([\d\.,]+) OoMs\/sec$/, '$1e$2 OoMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+) M⊕\/sec$/, '$1e$2 M⊕\/秒'],
	[/^([\d\.]+)e([\d\.,]+) uni\/sec$/, '$1e$2 uni\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
	[/^([\d\.]+)e([\d\.,]+) uni \(\+([\d\.]+)e([\d\.,]+) uni\/sec$/, '$1e$2 uni \(\+$3e$4 uni\/秒'],
	[/^([\d\.]+)e([\d\.,]+) uni to mass gain$/, '$1e$2 uni 到质量增益'],
	[/^Tier ([\d\.]+)$/, '层 $1'],
	[/^Rank ([\d\.]+)$/, '段位 $1'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);