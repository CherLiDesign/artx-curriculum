// ===== artx 课程中心 =====

// ===== 国际化 (i18n) =====
let currentLang = 'en';

const I18N = {
  zh: {
    "nav.home": "首页",
    "nav.about": "体系",
    "nav.curriculum": "大纲",
    "nav.calendar": "课表",
    "hero.subtitle": "让艺术成为孩子的第二语言",
    "hero.desc": "ArtX 由 MetaCher 艺术家与教育家团队在硅谷发起与研发，面向 4–18 岁儿童构建系统化艺术成长路径。以五大国际教育理论为基石，融合展览式教学与跨学科思维，顺应儿童真实的发展节奏——让每一个学期的成长，都能被看见。",
    "hero.theories": '<span class="theory-tag">Lowenfeld 发展阶段论</span><span class="theory-tag">DBAE 学科式艺术教育</span><span class="theory-tag">Reggio Emilia 瑞吉欧</span><span class="theory-tag">STEAM 跨学科整合</span><span class="theory-tag">Project Zero 思维例程</span>',
    "home.selectClass": "artx 成长路径",
    "home.devchartTitle": "读懂每个年龄的孩子",
    "home.devchartSub": "artx 的每个分班节点，都对应儿童认知、人格、大脑与绘画发展的自然转变",
    "home.devchartNote": "以上为科学参考区间，不是硬性规定。每个孩子的发展节奏各有不同——artx 老师会在充分了解每位孩子的兴趣、性格和当前状态后，灵活调整课程内容与深度，不超前，不滞后。",
    "home.theoriesTitle": "五大教育理论支撑每一节课",
    "home.theory1t": "Lowenfeld 发展阶段论",
    "home.theory1d": "基于儿童认知发展规律，5个年龄段精准匹配5个绘画发展阶段，不超前、不滞后。",
    "home.theory2t": "DBAE 学科式艺术教育",
    "home.theory2d": "每节课覆盖创作、美学、艺术史、艺术批评四个维度，不是简单的\u201C跟着画\u201D。",
    "home.theory3t": "Reggio Emilia 瑞吉欧",
    "home.theory3d": "\u201C儿童有一百种语言\u201D——多感官探索、环境即老师、项目制学习，释放孩子的天然创造力。",
    "home.theory4t": "STEAM 跨学科整合",
    "home.theory4d": "艺术与科学、数学、工程自然融合——用黄金比例画人体，用光学原理理解印象派。",
    "home.theory5t": "Project Zero 思维例程",
    "home.theory5d": "哈佛大学零点计划，See-Think-Wonder 训练深度观察与独立思考，能力远超课堂本身。",
    "hero.cta": "了解课程体系",
    "hero.ctaContact": "联系我们",
    "home.lessonTitle": "每节课的样子",
    "home.lessonSub": "整体节奏如此，具体内容因年龄和主题而变化",
    "home.l1t": "艺术导入",
    "home.l1d": "欣赏作品、观察自然、感知材料，或创意激发——为本节课打开一扇门",
    "home.l2t": "观察与提问",
    "home.l2d": "See-Think-Wonder——孩子说出自己真正看到和想到的",
    "home.l3t": "技法演示",
    "home.l3d": "老师示范核心技法，重点讲解，不是全程跟着画",
    "home.l4t": "自由创作",
    "home.l4d": "孩子独立表达，老师巡回观察、提问、引导——不替孩子画",
    "home.l5t": "作品分享",
    "home.l5d": "小型展示，孩子互相观看并给出真实回应",
    "card.evolutionLabel": "作品演变",
    "card.4-6.headline": "发现自我表达",
    "card.4-6.b1": "建立色彩与形状直觉",
    "card.4-6.b2": "用画笔表达真实感受",
    "card.4-6.b3": "在自由创作中建立自信",
    "card.4-6.evolution": "从随意涂鸦到有意图的构图与色彩",
    "card.7-9.headline": "构建想象力结构",
    "card.7-9.b1": "掌握基础构图与比例",
    "card.7-9.b2": "探索多种媒材与风格",
    "card.7-9.b3": "培养观察力与视觉思维",
    "card.7-9.evolution": "从简单形状到有叙事感的画面",
    "card.10-12.headline": "掌握艺术语言",
    "card.10-12.b1": "习得光影、透视等专业技法",
    "card.10-12.b2": "理解不同艺术流派与语言",
    "card.10-12.b3": "开始形成个人审美偏好",
    "card.10-12.evolution": "从临摹练习到有意识的独立创作",
    "card.13-15.headline": "形成个人风格",
    "card.13-15.b1": "探索独特的视觉表达语言",
    "card.13-15.b2": "批判性观察与深度表达",
    "card.13-15.b3": "作品开始有个人识别度",
    "card.13-15.evolution": "从掌握技法到传递个人观点",
    "card.16-18.headline": "迈向专业路径",
    "card.16-18.b1": "构建系统作品集与自我叙事",
    "card.16-18.b2": "对接艺术升学与职业方向",
    "card.16-18.b3": "艺术成为终身思维工具",
    "card.16-18.evolution": "从创作表达到独立的艺术实践",
    "home.stat1": "节系统课程",
    "home.stat2": "个年龄段",
    "home.stat3": "大教育理论",
    "home.stat4": "年螺旋进阶",
    "home.featureTitle": "孩子的作品，走进真实展厅",
    "home.featureDesc": "artx 的学员作品不只停留在教室——我们把孩子们的创作带入 Palace of Fine Arts、Computer History Museum、artx Gallery 等真实展览空间。孩子们以小小艺术家的身份参与布展、面对真实观众、讲述自己的创作故事。当作品被挂上展墙的那一刻，自信与创造力被真正点燃。",
    "home.featureLink": "了解课程体系 →",
    "home.ctaParentTitle": "为孩子选择最好的艺术启蒙",
    "home.ctaParentDesc": "覆盖4-18岁全年龄段，系统化学习路径，看得见成长。",
    "home.ctaOrgTitle": "机构合作：即插即用的课程体系",
    "home.ctaOrgDesc": "完整教研输出，标准化教案，提升教学品质与品牌竞争力。",
    "home.processTitle": "为什么选择 artx",
    "home.step1t": "展览式教学，真实体验",
    "home.step1d": "孩子们的作品走进 Palace of Fine Arts、Computer History Museum 等真实展厅。参与布展、面对观众、讲述创作故事——在真实的艺术场景中激发创造力。",
    "home.step2t": "五大理论，系统进阶",
    "home.step2d": "融合 Lowenfeld、DBAE、Reggio Emilia、STEAM、Project Zero 五大国际教育理论，每节课都有科学支撑，不是随便画画。",
    "home.step3t": "看得见成长，每学期蜕变",
    "home.step3d": "每节课都有创作成果，每学期形成作品集。观察力、审美力、批判性思维——成长肉眼可见。",
    "home.testimonialsTitle": "家长和机构怎么说",
    "home.quote1": "\u201C以前给孩子报的兴趣班都是跟着画，画完就忘了。artx 不一样——每节课都有观察、讨论、思考的环节，孩子现在看到一幅画会主动说\u2018我觉得这个颜色有什么含义\u2019。这种变化让我很惊喜。\u201D",
    "home.quote1author": "— 乐乐妈妈，7岁学员家长",
    "home.quote2": "\u201C引入 artx 体系后，我们的课程品质有了质的飞跃。标准化教案让新老师也能快速上手，家长续费率从 60% 提升到了 85%。最重要的是，每节课都有理论支撑，不再是凭感觉教学。\u201D",
    "home.quote2author": "— 张老师，合作机构教学总监",
    "home.quote3": "\u201C女儿从 4 岁开始上 artx 的课，现在 10 岁了。6年下来最让我感动的不是她画得多好，而是她学会了观察世界的方式——去博物馆会自己分析构图，看电影会讨论色彩。这才是真正的艺术教育。\u201D",
    "home.quote3author": "— 小雨爸爸，10岁学员家长",
    "home.venuesTitle": "我们的展览足迹",
    "home.venuesDesc": "artx 学员的作品不只停留在画室，而是走进真正的艺术殿堂。",
    "home.venue1d": "旧金山地标性艺术殿堂，artx 学员在这里举办了专属儿童艺术展，作品与世界级场馆同框。",
    "home.venue2d": "科技与艺术的跨界碰撞，孩子们的创作在硅谷最具影响力的博物馆中展出，探索 STEAM 的无限可能。",
    "home.venue3d": "artx 自有展览空间，定期举办学员作品展。从布展到开幕，孩子全程参与，体验真正的艺术家工作流程。",
    "home.journeyTitle": "一学期的艺术旅程",
    "home.j1t": "主题启发",
    "home.j1d": "每学期围绕一个核心主题展开，从色彩、构图到材料探索，循序渐进。",
    "home.j2t": "观察与讨论",
    "home.j2d": "引导孩子观察大师作品和生活细节，用 Project Zero 思维例程培养独立思考。",
    "home.j3t": "动手创作",
    "home.j3d": "每节课都有完整的创作环节，鼓励孩子用自己的方式表达，而不是照着画。",
    "home.j4t": "策展与展示",
    "home.j4d": "学期末孩子们策划自己的展览——选作品、写说明、布展、邀请观众，完整体验艺术家的创作闭环。",
    "home.contactTitle": "开启孩子的艺术之旅",
    "home.contactDesc": "留下您的邮箱，我们会发送课程详情和试听安排。无论您是家长还是机构，都欢迎联系我们。",
    "home.contactName": "您的姓名",
    "home.contactEmail": "邮箱地址",
    "home.contactPhone": "手机号码（选填）",
    "home.roleParent": "我是家长",
    "home.roleOrg": "我是机构",
    "home.contactSubmit": "免费获取课程资料",
    "home.contactThanks": "感谢您的关注！我们会尽快与您联系。",
    "home.ctaP1": "展览式教学，激发真实创造力",
    "home.ctaP2": "五大国际教育理论支撑每节课",
    "home.ctaP3": "每学期作品集，记录成长轨迹",
    "home.ctaP4": "小班教学，关注每个孩子的表达",
    "home.ctaO1": "全套标准化教案，新老师快速上手",
    "home.ctaO2": "五大理论背书，提升品牌专业度",
    "home.ctaO3": "螺旋课程架构，学员持续续费",
    "home.ctaO4": "展览资源共享，打造差异化竞争力",
    "curriculum.title": "课程大纲",
    "calendar.title": "课程表",
    "class.4-6.name": "小小涂鸦班",
    "class.4-6.desc": "感知色彩，释放天性",
    "class.7-9.name": "创意探索班",
    "class.7-9.desc": "基础技法，创意表达",
    "class.10-12.name": "技法进阶班",
    "class.10-12.desc": "系统学习，技法提升",
    "class.13-15.name": "风格养成班",
    "class.13-15.desc": "风格探索，独立创作",
    "class.16-18.name": "大师预备班",
    "class.16-18.desc": "作品集准备，专业方向",
    "age.suffix": "岁",
    "chip.4-6": "4-6岁",
    "chip.7-9": "7-9岁",
    "chip.10-12": "10-12岁",
    "chip.13-15": "13-15岁",
    "chip.16-18": "16-18岁",
    "ppt.prev": "上一页",
    "ppt.next": "下一页",
    "footer.text": "© 2026 artx · 让每个孩子都能发现美、创造美",
    "cal.age": { all: "全部年龄段", "4-6": "4-6岁 · 小小涂鸦班", "7-9": "7-9岁 · 创意探索班", "10-12": "10-12岁 · 技法进阶班", "13-15": "13-15岁 · 风格养成班", "16-18": "16-18岁 · 大师预备班" },
    "cal.year": { y1: "第一年", y2: "第二年", y3: "第三年" },
    "cal.term": { fall: "秋季", winter: "冬季", spring: "春季", summer: "暑期" },
    "cur.goals": "教学目标",
    "cur.weekLabel": "周",
    "cur.lessonLabel": "课",
    "cur.weekPrefix": "第",
    "cal.noData": "请选择年龄段和学期",
    "langBtn": "EN",
    // Dev chart
    "chart.row1": "认知阶段", "chart.row2": "人格发展", "chart.row3": "大脑可塑性", "chart.row4": "绘画发展", "chart.row5": "artx 课程",
    "chart.age4": "4岁", "chart.age7": "7岁", "chart.age10": "10岁", "chart.age13": "13岁", "chart.age16": "16岁", "chart.age18": "18岁",
    "chart.p1": "前运算期", "chart.p2": "具体运算期", "chart.p3": "形式运算期",
    "chart.e1a": "主动", "chart.e1b": "vs 内疚", "chart.e2a": "勤奋", "chart.e2b": "vs 自卑", "chart.e3a": "同一性建立", "chart.e3b": "vs 角色混乱",
    "chart.pfc": "PFC→25岁",
    "chart.b1": "突触修剪 I · 视觉艺术敏感窗口", "chart.b2": "技法学习黄金期", "chart.b3": "突触修剪 II · 风格与身份探索",
    "chart.l1": "前图式期", "chart.l2": "图式期", "chart.l3": "写实萌芽", "chart.l4": "拟写实期", "chart.l5": "决定期",
    "chart.c1age": "4 – 6 岁", "chart.c1name": "小小涂鸦班",
    "chart.c2age": "7 – 9 岁", "chart.c2name": "创意探索班",
    "chart.c3age": "10 – 12 岁", "chart.c3name": "技法进阶班",
    "chart.c4age": "13 – 15 岁", "chart.c4name": "风格养成班",
    "chart.c5age": "16 – 18 岁", "chart.c5name": "大师预备班",
    "chart.a1t": "认知进入具体运算", "chart.a1d": "精细运动快速成熟",
    "chart.a2t": "敏感期高峰结束", "chart.a2d": "技法学习黄金期",
    "chart.a3t": "第二可塑窗口开启", "chart.a3d": "同一性与风格探索",
    "chart.a4t": "决定期全面开始", "chart.a4d": "专业路径确立",
    // About page
    "about.eyebrow": "课程体系",
    "about.stat1": "岁全覆盖",
    "about.stat2": "大国际理论",
    "about.stat3": "节 / 年龄段",
    "about.stat4": "真实展览场馆",
    "about.matrixTitle": "五大理论 × 五个阶段",
    "about.matrixSub": "每个年龄段的教学，都有对应的理论框架——不是随便教，是科学排课",
    "about.m1c1": "前图式期",
    "about.m1c2": "图式期",
    "about.m1c3": "写实萌芽",
    "about.m1c4": "拟写实期",
    "about.m1c5": "决定期",
    "about.matrixLegend": "●●● 主导理论 \u00a0·\u00a0 ●● 深度融合 \u00a0·\u00a0 ● 部分融入 \u00a0·\u00a0 — 不适用",
    "about.p1t": "科学分龄，不超前不滞后",
    "about.p1d": "每个年龄段对应 Lowenfeld 的自然发展阶段，教学内容与孩子的认知窗口精准匹配。3 年螺旋递进，知识与技能逐年深化，学完即可无缝衔接下一阶段。",
    "about.p2t": "每节课都是完整的艺术体验",
    "about.p2d": "DBAE 四维度贯穿每节课——创作实践、美学感知、艺术史、批判性思维同步发展。孩子不只是「画一幅画」，而是经历完整的艺术家思维过程。",
    "about.p3t": "展览式教学，成长真实可见",
    "about.p3d": "每学期以真实展览收尾——孩子策展、布展、面对真实观众。作品走进 Palace of Fine Arts 等场馆，自信与创造力在真实情境中被点燃。",
    "about.stagesTitle": "五个阶段，一条完整成长路径",
    "about.headline": "不是兴趣班，是一套完整的艺术成长体系",
    "about.valueDesc": 'artx 课程由专业艺术教育团队研发，基于五大国际权威教育理论，为 4-18 岁学员构建了一套从启蒙到专业的完整学习路径。每一节课都经过精心设计——不只是教孩子\u201C画画\u201D，而是培养观察力、审美力、创造力与批判性思维。',
    "about.whyTitle": "为什么选择 artx？",
    "about.f1t": "科学分龄，精准匹配",
    "about.f1d": "基于 Lowenfeld 儿童绘画发展阶段论，5 个年龄段对应 5 个发展阶段，教学目标与儿童认知发展完全匹配，不超前、不滞后。",
    "about.f2t": "理论驱动，不是经验教学",
    "about.f2d": '每节课融合 DBAE 四维度（创作·美学·艺术史·批评），不是简单的"跟着画"，而是系统化的艺术素养培养。',
    "about.f3t": "3 年螺旋递进",
    "about.f3d": "每个年龄段设计 3 年课程，知识与技能螺旋上升。第一年打基础，第二年拓视野，第三年建风格——学完即可无缝衔接下一阶段。",
    "about.f4t": "思维可见，成长可测",
    "about.f4d": "引入哈佛 Project Zero 思维例程，通过 See-Think-Wonder 等工具让思考过程可见，家长和老师都能清晰看到孩子的进步。",
    "about.f5t": "跨学科 STEAM 整合",
    "about.f5d": '艺术不是孤立的学科。课程融合科学、数学、工程与技术，如"用几何画建筑""用色彩理解光学"，培养跨领域创造力。',
    "about.f6t": "开箱即用，标准化交付",
    "about.f6d": "780 节课全部配备详细教案（PPT 大纲），教学目标、活动流程、理论笔记一应俱全。新老师也能快速上手，保证教学质量。",
    "about.theoryTitle": "五大教育理论支撑",
    "about.theoryDesc": "每一节课的设计都不是凭感觉，而是有据可依。以下五大理论贯穿整个课程体系：",
    "about.t1t": "Lowenfeld 儿童绘画发展阶段论",
    "about.t1d": "Viktor Lowenfeld 研究发现，儿童绘画能力随认知发展呈现清晰的阶段性特征。我们据此将课程分为 5 个年龄段——涂鸦期（4-6）、图式期（7-9）、写实萌芽期（10-12）、拟写实期（13-15）、决定期（16-18），确保教学内容与孩子的发展水平精准匹配。",
    "about.t1ages": '<span>4-6 涂鸦期</span><span>7-9 图式期</span><span>10-12 写实萌芽</span><span>13-15 拟写实期</span><span>16-18 决定期</span>',
    "about.t2t": "DBAE 学科式艺术教育",
    "about.t2d": 'Getty 教育研究所提出的 Discipline-Based Art Education 框架，主张艺术教育应包含四个维度：<strong>创作实践</strong>（动手做）、<strong>美学感知</strong>（感受美）、<strong>艺术史</strong>（了解背景）、<strong>艺术批评</strong>（学会评价）。我们的每节课都覆盖这四个维度，而不是单纯地"画一幅画"。',
    "about.t3t": "Reggio Emilia 瑞吉欧教育",
    "about.t3d": '源自意大利的世界级幼教理念，核心信念是"儿童有一百种语言"。我们在低龄段课程中大量融入瑞吉欧的理念——多感官探索、环境即老师、项目制学习，让孩子用触觉、听觉、视觉等多种方式感知艺术，而不仅仅是用眼睛看。',
    "about.t4t": "STEAM 跨学科整合",
    "about.t4d": "在 STEM（科学·技术·工程·数学）中加入 Art，形成 STEAM 教育框架。我们的课程不把艺术当作独立学科，而是与科学实验、数学几何、建筑工程等自然融合——比如用黄金比例画人体、用光学原理理解印象派、用编程创作数字艺术。",
    "about.t5t": "Harvard Project Zero · Artful Thinking",
    "about.t5d": '哈佛大学教育研究院的零点计划（Project Zero）开发了一套"思维例程"工具，其中最经典的是 <strong>See-Think-Wonder</strong>（看到什么→想到什么→好奇什么）。我们在每节课中嵌入思维例程，训练孩子深度观察、独立思考、提出问题的能力——这些能力远超艺术课堂本身。',
    "about.structTitle": "课程架构",
    "about.sc1age": "4-6岁", "about.sc1name": "小小涂鸦班", "about.sc1stage": "Lowenfeld 涂鸦期 → 前图式期",
    "about.sc1desc": "多感官色彩探索、基础形状认知、Reggio 项目制启蒙。156节课带孩子从自由涂鸦走向有意识的表达。",
    "about.sc1tags": '<span>色彩感知</span><span>形状语言</span><span>多感官</span><span>自由表达</span>',
    "about.sc2age": "7-9岁", "about.sc2name": "创意探索班", "about.sc2stage": "Lowenfeld 图式期",
    "about.sc2desc": "DBAE 四维度全面展开，Artful Thinking 思维例程深度应用。156节课建立系统的观察力与基础技法。",
    "about.sc2tags": '<span>观察力</span><span>基础技法</span><span>艺术史启蒙</span><span>批判思维</span>',
    "about.sc3age": "10-12岁", "about.sc3name": "技法进阶班", "about.sc3stage": "Lowenfeld 写实萌芽期",
    "about.sc3desc": '透视、光影、人体比例等专业技法系统学习，STEAM 跨学科项目增多。156节课实现从"感觉画"到"理性画"的飞跃。',
    "about.sc3tags": '<span>透视法</span><span>光影素描</span><span>STEAM项目</span><span>写实基础</span>',
    "about.sc4age": "13-15岁", "about.sc4name": "风格养成班", "about.sc4stage": "Lowenfeld 拟写实期",
    "about.sc4desc": "个人风格探索、独立项目创作、深度艺术批评。156节课帮助青少年找到自己的艺术语言与创作方向。",
    "about.sc4tags": '<span>风格探索</span><span>独立创作</span><span>艺术批评</span><span>项目制</span>',
    "about.sc5age": "16-18岁", "about.sc5name": "大师预备班", "about.sc5stage": "Lowenfeld 决定期",
    "about.sc5desc": "作品集制作、策展实践、艺术哲学深度研讨。156节课为艺术院校申请或职业方向做好全面准备。",
    "about.sc5tags": '<span>作品集</span><span>策展实践</span><span>艺术哲学</span><span>升学准备</span>',
    "about.flowTitle": "每节课的标准结构",
    "about.flowDesc": "每节课都按照统一的 6 页 PPT 大纲设计，确保教学流程标准化、可复制：",
    "about.flow1": "教学目标", "about.flow1d": "本节课的核心学习目标",
    "about.flow2": "知识导入", "about.flow2d": "艺术史/艺术家/理论知识",
    "about.flow3": "作品赏析", "about.flow3d": "经典作品欣赏与分析",
    "about.flow4": "动手创作", "about.flow4d": "学生实践环节",
    "about.flow5": "讨论分享", "about.flow5d": "思维例程与批评练习",
    "about.flow6": "理论笔记", "about.flow6d": "核心知识点总结",
    "about.cta1t": "家长：给孩子最好的艺术启蒙",
    "about.cta1d": "780节课覆盖4-18岁全年龄段，无论孩子现在几岁，都能找到最适合的起点。不是随便画画的兴趣班——是看得见成长的系统课程。",
    "about.cta2t": "机构：一套即插即用的课程体系",
    "about.cta2d": "完整的教研成果输出，780节标准化教案，5大理论背书，3年螺旋课程架构。无需从零开发——引入 artx 课程体系，即刻提升教学品质与品牌竞争力。"
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.curriculum": "Curriculum",
    "nav.calendar": "Calendar",
    "hero.subtitle": "Let Art Become Your Child's Second Language",
    "hero.desc": "ArtX was founded and developed in Silicon Valley by MetaCher's team of artists and educators, building a structured path of artistic growth for children ages 4–18. Grounded in five international educational theories, it integrates Exhibition-Based Teaching and interdisciplinary thinking — honoring each child's natural developmental rhythm, so that every semester, growth can truly be seen.",
    "hero.theories": '<span class="theory-tag">Lowenfeld Developmental Stages</span><span class="theory-tag">DBAE Art Education</span><span class="theory-tag">Reggio Emilia</span><span class="theory-tag">STEAM Integration</span><span class="theory-tag">Project Zero Thinking Routines</span>',
    "home.selectClass": "artx Growth Path",
    "home.devchartTitle": "Understanding Every Age",
    "home.devchartSub": "Every artx class grouping aligns with natural transitions in cognitive, emotional, brain, and artistic development",
    "home.devchartNote": "These are scientific reference ranges, not rigid rules. Every child develops at their own pace — artx teachers take time to understand each child's interests, personality, and current stage, then adapt the curriculum accordingly.",
    "home.theoriesTitle": "Five Educational Theories Behind Every Lesson",
    "home.theory1t": "Lowenfeld Developmental Stages",
    "home.theory1d": "Matched to children's cognitive development — 5 age groups aligned with 5 artistic stages. Never too advanced, never too simple.",
    "home.theory2t": "DBAE Discipline-Based Art Education",
    "home.theory2d": "Every lesson covers four dimensions: art making, aesthetics, art history, and art criticism — not just follow-along painting.",
    "home.theory3t": "Reggio Emilia",
    "home.theory3d": "\"Children have a hundred languages\" — multi-sensory exploration, environment as teacher, project-based learning that unleashes natural creativity.",
    "home.theory4t": "STEAM Integration",
    "home.theory4d": "Art naturally fused with science, math, and engineering — using the golden ratio to draw the body, optics to understand Impressionism.",
    "home.theory5t": "Project Zero Thinking Routines",
    "home.theory5d": "Harvard's Project Zero: See-Think-Wonder trains deep observation and independent thinking — skills that extend far beyond the art classroom.",
    "hero.cta": "Explore Our Curriculum",
    "hero.ctaContact": "Contact Us",
    "home.lessonTitle": "How a Lesson Works",
    "home.lessonSub": "Same rhythm every class — content varies by age and theme",
    "home.l1t": "Art Warm-Up",
    "home.l1d": "Artwork appreciation, nature observation, or creative spark — opening the door to this lesson",
    "home.l2t": "Observe & Question",
    "home.l2d": "See-Think-Wonder — children share what they truly see and think",
    "home.l3t": "Technique Demo",
    "home.l3d": "Teacher demonstrates core techniques with focused explanation — not step-by-step copying",
    "home.l4t": "Free Creation",
    "home.l4d": "Children express independently; teacher circulates to observe, ask, and guide — never draws for them",
    "home.l5t": "Share & Reflect",
    "home.l5d": "Mini showcase — children view each other's work and give genuine responses",
    "card.evolutionLabel": "Artwork Evolution",
    "card.4-6.headline": "Discover Self-Expression",
    "card.4-6.b1": "Build intuition for color & shape",
    "card.4-6.b2": "Express genuine feelings through art",
    "card.4-6.b3": "Build confidence through free creation",
    "card.4-6.evolution": "From random scribbling to intentional composition & color",
    "card.7-9.headline": "Build Imaginative Structure",
    "card.7-9.b1": "Master basic composition & proportion",
    "card.7-9.b2": "Explore diverse materials & styles",
    "card.7-9.b3": "Cultivate observation & visual thinking",
    "card.7-9.evolution": "From simple shapes to narrative-rich compositions",
    "card.10-12.headline": "Master Artistic Language",
    "card.10-12.b1": "Learn light, shadow & perspective techniques",
    "card.10-12.b2": "Understand different art movements & styles",
    "card.10-12.b3": "Begin forming personal aesthetic preferences",
    "card.10-12.evolution": "From imitation practice to conscious independent creation",
    "card.13-15.headline": "Develop Personal Style",
    "card.13-15.b1": "Explore a unique visual expression language",
    "card.13-15.b2": "Critical observation & deep expression",
    "card.13-15.b3": "Work begins to carry personal identity",
    "card.13-15.evolution": "From mastering technique to conveying personal perspective",
    "card.16-18.headline": "Move Toward a Professional Path",
    "card.16-18.b1": "Build a systematic portfolio & personal narrative",
    "card.16-18.b2": "Connect with art school & career pathways",
    "card.16-18.b3": "Art becomes a lifelong thinking tool",
    "card.16-18.evolution": "From creative expression to independent artistic practice",
    "home.stat1": "Structured Lessons",
    "home.stat2": "Age Groups",
    "home.stat3": "Educational Theories",
    "home.stat4": "Years of Progression",
    "home.featureTitle": "Kids' Art, on Real Gallery Walls",
    "home.featureDesc": "artx students' work doesn't stay in the classroom — we bring their creations into real exhibition spaces like the Palace of Fine Arts, Computer History Museum, and artx Gallery. Children participate as young artists: curating, presenting to real audiences, and sharing the stories behind their work. The moment their art goes up on the wall, confidence and creativity are truly ignited.",
    "home.featureLink": "Explore Our Curriculum →",
    "home.ctaParentTitle": "The Best Art Education for Your Child",
    "home.ctaParentDesc": "Covering ages 4-18, systematic learning paths, visible growth.",
    "home.ctaOrgTitle": "Partner With Us: Plug-and-Play Curriculum",
    "home.ctaOrgDesc": "Complete teaching resources, standardized lesson plans, elevate teaching quality and brand competitiveness.",
    "home.processTitle": "Why artx",
    "home.step1t": "Exhibition-Based Teaching",
    "home.step1d": "Students' artwork is exhibited at real venues like the Palace of Fine Arts and Computer History Museum. They curate, present to real audiences, and share their creative stories — igniting creativity in authentic art settings.",
    "home.step2t": "Five Theories, Systematic Progression",
    "home.step2d": "Integrating Lowenfeld, DBAE, Reggio Emilia, STEAM, and Project Zero — five international educational theories. Every lesson is grounded in science, not just casual drawing.",
    "home.step3t": "Visible Growth, Every Semester",
    "home.step3d": "Every lesson produces creative output; every term builds a portfolio. Observation, aesthetics, and critical thinking — growth you can see with your own eyes.",
    "home.testimonialsTitle": "What Parents & Partners Say",
    "home.quote1": "\u201COur previous art classes were just follow-along painting. artx is different — every lesson includes observation, discussion, and thinking. Now my child sees a painting and says \u2018I think this color has a meaning.\u2019 That change amazes me.\u201D",
    "home.quote1author": "— Lele's Mom, parent of 7-year-old student",
    "home.quote2": "\u201CSince adopting the artx system, our teaching quality has transformed. Standardized lesson plans let new teachers get started quickly. Parent renewal rate went from 60% to 85%. Most importantly, every lesson has theoretical backing.\u201D",
    "home.quote2author": "— Ms. Zhang, Partner Institution Teaching Director",
    "home.quote3": "\u201CMy daughter started artx at age 4, now she's 10. What moves me most isn't how well she draws, but how she's learned to see the world — analyzing composition at museums, discussing color in films. This is real art education.\u201D",
    "home.quote3author": "— Xiaoyu's Dad, parent of 10-year-old student",
    "home.venuesTitle": "Where We Exhibit",
    "home.venuesDesc": "artx students' work goes beyond the studio — into world-class art venues.",
    "home.venue1d": "A landmark arts venue in San Francisco. artx students held their own children's art exhibition here, showcased alongside world-class spaces.",
    "home.venue2d": "Where technology meets art. Students' creations exhibited at Silicon Valley's most influential museum, exploring the infinite possibilities of STEAM.",
    "home.venue3d": "artx's own exhibition space, hosting regular student shows. From curation to opening night, children participate in the full artist workflow.",
    "home.journeyTitle": "A Semester of Art",
    "home.j1t": "Theme Inspiration",
    "home.j1d": "Each semester unfolds around a core theme — from color and composition to material exploration, building step by step.",
    "home.j2t": "Observe & Discuss",
    "home.j2d": "Guiding children to observe masterworks and everyday details, cultivating independent thinking through Project Zero thinking routines.",
    "home.j3t": "Create",
    "home.j3d": "Every lesson includes dedicated creation time, encouraging children to express in their own way — not copy from a model.",
    "home.j4t": "Curate & Present",
    "home.j4d": "At semester's end, children curate their own exhibition — selecting works, writing descriptions, installing, and inviting an audience. The complete artist experience.",
    "home.contactTitle": "Start Your Child's Art Journey",
    "home.contactDesc": "Leave your email and we'll send you course details and trial class arrangements. Parents and institutions are both welcome.",
    "home.contactName": "Your Name",
    "home.contactEmail": "Email Address",
    "home.contactPhone": "Phone (optional)",
    "home.roleParent": "I'm a Parent",
    "home.roleOrg": "I'm an Institution",
    "home.contactSubmit": "Get Free Course Materials",
    "home.contactThanks": "Thank you for your interest! We'll be in touch soon.",
    "home.ctaP1": "Exhibition-based teaching ignites real creativity",
    "home.ctaP2": "Every lesson grounded in five international theories",
    "home.ctaP3": "Semester portfolios document growth",
    "home.ctaP4": "Small classes, attention to every child's voice",
    "home.ctaO1": "Full standardized lesson plans, easy teacher onboarding",
    "home.ctaO2": "Five-theory backing elevates brand credibility",
    "home.ctaO3": "Spiral curriculum drives student retention",
    "home.ctaO4": "Shared exhibition resources for competitive differentiation",
    "curriculum.title": "Curriculum",
    "calendar.title": "Class Schedule",
    "class.4-6.name": "Little Doodlers",
    "class.4-6.desc": "Explore colors, unleash creativity",
    "class.7-9.name": "Creative Explorers",
    "class.7-9.desc": "Build skills, express creatively",
    "class.10-12.name": "Skill Builders",
    "class.10-12.desc": "Systematic learning, technique growth",
    "class.13-15.name": "Style Shapers",
    "class.13-15.desc": "Find your style, create independently",
    "class.16-18.name": "Master Prep",
    "class.16-18.desc": "Portfolio ready, professional path",
    "age.suffix": "yrs",
    "chip.4-6": "Age 4-6",
    "chip.7-9": "Age 7-9",
    "chip.10-12": "Age 10-12",
    "chip.13-15": "Age 13-15",
    "chip.16-18": "Age 16-18",
    "ppt.prev": "Prev",
    "ppt.next": "Next",
    "footer.text": "© 2026 artx · Helping every child discover and create beauty",
    "cal.age": { all: "All Ages", "4-6": "Age 4-6 · Little Doodlers", "7-9": "Age 7-9 · Creative Explorers", "10-12": "Age 10-12 · Skill Builders", "13-15": "Age 13-15 · Style Shapers", "16-18": "Age 16-18 · Master Prep" },
    "cal.year": { y1: "Year 1", y2: "Year 2", y3: "Year 3" },
    "cal.term": { fall: "Fall", winter: "Winter", spring: "Spring", summer: "Summer" },
    "cur.goals": "Learning Goals",
    "cur.weekLabel": "",
    "cur.lessonLabel": "",
    "cur.weekPrefix": "Week ",
    "cal.noData": "Please select an age group and term",
    "langBtn": "中",
    // Dev chart
    "chart.row1": "Cognitive Stage", "chart.row2": "Personality", "chart.row3": "Brain Plasticity", "chart.row4": "Art Development", "chart.row5": "artx Classes",
    "chart.age4": "Age 4", "chart.age7": "Age 7", "chart.age10": "Age 10", "chart.age13": "Age 13", "chart.age16": "Age 16", "chart.age18": "Age 18",
    "chart.p1": "Pre-operational", "chart.p2": "Concrete Operational", "chart.p3": "Formal Operational",
    "chart.e1a": "Initiative", "chart.e1b": "vs Guilt", "chart.e2a": "Industry", "chart.e2b": "vs Inferiority", "chart.e3a": "Identity", "chart.e3b": "vs Role Confusion",
    "chart.pfc": "PFC→Age 25",
    "chart.b1": "Synaptic Pruning I · Visual Arts Sensitive Window", "chart.b2": "Prime for Technical Skills", "chart.b3": "Synaptic Pruning II · Style & Identity",
    "chart.l1": "Pre-Schematic", "chart.l2": "Schematic", "chart.l3": "Dawning Realism", "chart.l4": "Pseudo-Realism", "chart.l5": "Decision",
    "chart.c1age": "Age 4–6", "chart.c1name": "Little Doodlers",
    "chart.c2age": "Age 7–9", "chart.c2name": "Creative Explorers",
    "chart.c3age": "Age 10–12", "chart.c3name": "Skill Builders",
    "chart.c4age": "Age 13–15", "chart.c4name": "Style Shapers",
    "chart.c5age": "Age 16–18", "chart.c5name": "Master Prep",
    "chart.a1t": "Enters Concrete Operations", "chart.a1d": "Fine motor skills mature",
    "chart.a2t": "Peak Sensitivity Ends", "chart.a2d": "Prime for technical learning",
    "chart.a3t": "2nd Plasticity Window Opens", "chart.a3d": "Identity & style exploration",
    "chart.a4t": "Decision Stage Begins", "chart.a4d": "Professional path established",
    // About page
    "about.eyebrow": "Our System",
    "about.stat1": "Ages Covered",
    "about.stat2": "International Theories",
    "about.stat3": "Lessons / Age Group",
    "about.stat4": "Real Exhibition Venues",
    "about.matrixTitle": "5 Theories × 5 Stages",
    "about.matrixSub": "Every age group has a matching theoretical framework — science-driven curriculum, not guesswork",
    "about.m1c1": "Pre-Schematic",
    "about.m1c2": "Schematic",
    "about.m1c3": "Dawning Realism",
    "about.m1c4": "Pseudo-Realism",
    "about.m1c5": "Decision",
    "about.matrixLegend": "●●● Primary &nbsp;·&nbsp; ●● Deep integration &nbsp;·&nbsp; ● Partial &nbsp;·&nbsp; — N/A",
    "about.p1t": "Science-Based Age Matching",
    "about.p1d": "Each age group maps to Lowenfeld's natural developmental stage, precisely aligning teaching content with each child's cognitive window. 3-year spiral progression deepens knowledge year by year — seamlessly connecting to the next stage.",
    "about.p2t": "Every Lesson Is a Complete Art Experience",
    "about.p2d": "DBAE's four dimensions run through every lesson — art making, aesthetics, art history, and critical thinking develop together. Children don't just paint a picture — they experience the complete artist's thinking process.",
    "about.p3t": "Exhibition-Based Teaching — Growth You Can See",
    "about.p3d": "Every semester ends with a real exhibition — children curate, install, and present to real audiences. Work enters venues like the Palace of Fine Arts, where confidence and creativity are truly ignited.",
    "about.stagesTitle": "Five Stages, One Complete Growth Path",
    "about.headline": "Not just art class — a complete growth system",
    "about.valueDesc": "Developed by professional art educators and grounded in five internationally recognized educational theories, artx provides a complete learning pathway from beginner to professional for students ages 4-18. Every lesson is carefully designed — not just teaching kids to draw, but cultivating observation, aesthetics, creativity, and critical thinking.",
    "about.whyTitle": "Why artx?",
    "about.f1t": "Science-Based Age Matching",
    "about.f1d": "Based on Lowenfeld's stages of artistic development, 5 age groups map to 5 developmental stages. Teaching goals precisely match children's cognitive development — never too advanced, never too simple.",
    "about.f2t": "Theory-Driven, Not Guesswork",
    "about.f2d": "Every lesson integrates DBAE's four dimensions (creation, aesthetics, art history, criticism). Not just following along — systematic art literacy cultivation.",
    "about.f3t": "3-Year Spiral Progression",
    "about.f3d": "Each age group features a 3-year curriculum with spiraling knowledge and skills. Year 1 builds foundations, Year 2 expands horizons, Year 3 develops style — seamlessly connecting to the next stage.",
    "about.f4t": "Visible Thinking, Measurable Growth",
    "about.f4d": "Harvard Project Zero thinking routines like See-Think-Wonder make the thinking process visible. Parents and teachers can clearly see each child's progress.",
    "about.f5t": "Cross-Disciplinary STEAM",
    "about.f5d": "Art doesn't exist in isolation. Our curriculum integrates science, math, engineering, and technology — using geometry to draw architecture, color theory to understand optics, fostering cross-domain creativity.",
    "about.f6t": "Ready to Deploy, Standardized",
    "about.f6d": "All 780 lessons come with detailed lesson plans (PPT outlines), learning objectives, activity flows, and theory notes. Even new teachers can get started quickly while maintaining quality.",
    "about.theoryTitle": "Five Educational Theories",
    "about.theoryDesc": "Every lesson is designed with evidence, not intuition. These five theories run through our entire curriculum:",
    "about.t1t": "Lowenfeld's Stages of Artistic Development",
    "about.t1d": "Viktor Lowenfeld discovered that children's drawing abilities show clear stage-based characteristics as cognition develops. We divide our curriculum into 5 age groups — Scribbling (4-6), Schematic (7-9), Dawning Realism (10-12), Pseudo-Realism (13-15), Decision (16-18) — ensuring content precisely matches each child's developmental level.",
    "about.t1ages": '<span>4-6 Scribbling</span><span>7-9 Schematic</span><span>10-12 Dawning Realism</span><span>13-15 Pseudo-Realism</span><span>16-18 Decision</span>',
    "about.t2t": "DBAE Discipline-Based Art Education",
    "about.t2d": 'The Getty Education Institute\'s DBAE framework advocates that art education should encompass four dimensions: <strong>Art Making</strong> (hands-on creation), <strong>Aesthetics</strong> (perceiving beauty), <strong>Art History</strong> (understanding context), and <strong>Art Criticism</strong> (learning to evaluate). Every lesson covers all four dimensions.',
    "about.t3t": "Reggio Emilia Approach",
    "about.t3d": 'A world-class early childhood philosophy from Italy, built on the belief that "children have a hundred languages." Our younger-age curriculum deeply integrates Reggio principles — multi-sensory exploration, environment as teacher, project-based learning — letting children experience art through touch, sound, and sight.',
    "about.t4t": "STEAM Cross-Disciplinary Integration",
    "about.t4d": "Adding Art to STEM creates the STEAM education framework. Our curriculum doesn't treat art as an isolated subject — it naturally integrates with science experiments, mathematical geometry, and architectural engineering, such as using the golden ratio to draw the human body or optics to understand Impressionism.",
    "about.t5t": "Harvard Project Zero · Artful Thinking",
    "about.t5d": 'Harvard Graduate School of Education\'s Project Zero developed a set of "thinking routine" tools, most notably <strong>See-Think-Wonder</strong> (What do you see? What do you think? What do you wonder?). We embed thinking routines in every lesson, training deep observation, independent thinking, and questioning skills that extend far beyond the art classroom.',
    "about.structTitle": "Curriculum Structure",
    "about.sc1age": "Age 4-6", "about.sc1name": "Little Doodlers", "about.sc1stage": "Lowenfeld Scribbling → Pre-Schematic",
    "about.sc1desc": "Multi-sensory color exploration, basic shape recognition, Reggio project-based introduction. 156 lessons guide children from free scribbling to intentional expression.",
    "about.sc1tags": '<span>Color Perception</span><span>Shape Language</span><span>Multi-Sensory</span><span>Free Expression</span>',
    "about.sc2age": "Age 7-9", "about.sc2name": "Creative Explorers", "about.sc2stage": "Lowenfeld Schematic Stage",
    "about.sc2desc": "Full DBAE four-dimension deployment, deep Artful Thinking routine application. 156 lessons build systematic observation and foundational techniques.",
    "about.sc2tags": '<span>Observation</span><span>Basic Techniques</span><span>Art History Intro</span><span>Critical Thinking</span>',
    "about.sc3age": "Age 10-12", "about.sc3name": "Skill Builders", "about.sc3stage": "Lowenfeld Dawning Realism",
    "about.sc3desc": "Systematic study of perspective, light/shadow, human proportions, and more STEAM cross-disciplinary projects. 156 lessons achieve the leap from intuitive to rational drawing.",
    "about.sc3tags": '<span>Perspective</span><span>Light & Shadow</span><span>STEAM Projects</span><span>Realism Basics</span>',
    "about.sc4age": "Age 13-15", "about.sc4name": "Style Shapers", "about.sc4stage": "Lowenfeld Pseudo-Realism",
    "about.sc4desc": "Personal style exploration, independent project creation, deep art criticism. 156 lessons help teens find their artistic voice and creative direction.",
    "about.sc4tags": '<span>Style Exploration</span><span>Independent Work</span><span>Art Criticism</span><span>Project-Based</span>',
    "about.sc5age": "Age 16-18", "about.sc5name": "Master Prep", "about.sc5stage": "Lowenfeld Decision Stage",
    "about.sc5desc": "Portfolio development, curatorial practice, deep art philosophy discussions. 156 lessons fully prepare students for art school applications or professional paths.",
    "about.sc5tags": '<span>Portfolio</span><span>Curatorial Practice</span><span>Art Philosophy</span><span>College Prep</span>',
    "about.flowTitle": "Standard Lesson Structure",
    "about.flowDesc": "Every lesson follows a unified 6-slide PPT outline, ensuring standardized and replicable teaching flow:",
    "about.flow1": "Objectives", "about.flow1d": "Core learning goals for the lesson",
    "about.flow2": "Introduction", "about.flow2d": "Art history / artist / theory",
    "about.flow3": "Appreciation", "about.flow3d": "Classic artwork analysis",
    "about.flow4": "Creation", "about.flow4d": "Hands-on student practice",
    "about.flow5": "Discussion", "about.flow5d": "Thinking routines & critique",
    "about.flow6": "Theory Notes", "about.flow6d": "Key knowledge summary",
    "about.cta1t": "Parents: The Best Art Education for Your Child",
    "about.cta1d": "780 lessons covering ages 4-18. No matter your child's age, there's a perfect starting point. Not a casual hobby class — a structured curriculum where you can see real growth.",
    "about.cta2t": "Institutions: A Plug-and-Play Curriculum",
    "about.cta2d": "Complete curriculum package: 780 standardized lesson plans, 5 theory frameworks, 3-year spiral structure. No need to develop from scratch — adopt the artx system to instantly elevate teaching quality and brand competitiveness."
  }
};

// English names for curriculum data
const CLASS_NAMES_EN = {
  "4-6": "Little Doodlers", "7-9": "Creative Explorers",
  "10-12": "Skill Builders", "13-15": "Style Shapers", "16-18": "Master Prep"
};

function t(key) { const v = I18N[currentLang][key]; return v !== undefined ? v : key; }

function applyLanguage() {
  // Switch curriculum data
  const source = currentLang === 'en' ? (typeof CURRICULUM_EN !== 'undefined' ? CURRICULUM_EN : CURRICULUM_ZH) : CURRICULUM_ZH;
  for (const key in source) {
    CURRICULUM[key] = source[key];
  }

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (I18N[currentLang][key] !== undefined) el.textContent = I18N[currentLang][key];
  });

  // Update HTML content elements
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (I18N[currentLang][key] !== undefined) el.innerHTML = I18N[currentLang][key];
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (I18N[currentLang][key] !== undefined) el.placeholder = I18N[currentLang][key];
  });

  // Update select options
  document.querySelectorAll('[data-i18n-options]').forEach(select => {
    const key = select.dataset.i18nOptions;
    const map = I18N[currentLang][key];
    if (!map) return;
    Array.from(select.options).forEach(opt => {
      if (map[opt.value]) opt.textContent = map[opt.value];
    });
  });

  // Update toggle button
  document.getElementById('lang-toggle').querySelector('.lang-label').textContent = t('langBtn');
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';

  // Show English supplementary chart only in EN mode
  const isEN = currentLang === 'en';
  const devfw = document.querySelector('.home-devfw');
  if (devfw) devfw.style.display = isEN ? '' : 'none';

  // Re-render dynamic content if visible
  const curView = document.querySelector('.view.active');
  if (curView && curView.id === 'view-curriculum') {
    const activeChip = document.querySelector('.md-chip.active');
    if (activeChip) renderCurriculumDetail(activeChip.dataset.age);
  }
  if (curView && curView.id === 'view-calendar') renderCalendar();
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  applyLanguage();
});

// Apply default language on load
applyLanguage();

// 颜色映射 — MoMA pastel (bg) + dark same-hue (text, WCAG AA)
const AGE_COLORS = {
  "4-6": "#F0B8D6",
  "7-9": "#C3D63B",
  "10-12": "#7DD3BF",
  "13-15": "#59A5E8",
  "16-18": "#E860A8"
};
const AGE_COLORS_DARK = {
  "4-6": "#8B1A4A",
  "7-9": "#3D5A00",
  "10-12": "#1A6B56",
  "13-15": "#1A4D8B",
  "16-18": "#8B1560"
};

// ===== 页面视图切换 =====
document.querySelectorAll('.nav-item').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const view = link.dataset.view;
    document.querySelectorAll('.nav-item').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(`view-${view}`).classList.add('active');

    if (view === 'curriculum') renderCurriculumDetail('4-6');
    if (view === 'calendar') renderCalendar();
  });
});

// ===== 首页：CTA 链接跳转 =====
document.querySelectorAll('.hero-cta, .home-feature-link').forEach(link => {
  link.addEventListener('click', e => {
    const view = link.dataset.view;
    if (!view) return; // let anchor href scroll naturally
    e.preventDefault();
    document.querySelectorAll('.nav-item').forEach(l => l.classList.remove('active'));
    document.querySelector(`[data-view="${view}"]`).classList.add('active');
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(`view-${view}`).classList.add('active');
    window.scrollTo(0, 0);
  });
});

// ===== 首页：年龄卡片点击 =====
document.querySelectorAll('.age-card').forEach(card => {
  card.addEventListener('click', () => {
    const age = card.dataset.age;
    document.querySelectorAll('.nav-item').forEach(l => l.classList.remove('active'));
    document.querySelector('[data-view="calendar"]').classList.add('active');
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('view-calendar').classList.add('active');
    document.getElementById('cal-age-filter').value = age;
    renderCalendar();
  });
});

// ===== 课程大纲页 =====
document.querySelectorAll('.md-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.md-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    renderCurriculumDetail(chip.dataset.age);
  });
});

function renderCurriculumDetail(ageGroup) {
  const data = CURRICULUM[ageGroup];
  const color = AGE_COLORS[ageGroup];
  const colorDark = AGE_COLORS_DARK[ageGroup];
  const container = document.getElementById('curriculum-detail');

  const displayName = currentLang === 'en' ? (CLASS_NAMES_EN[ageGroup] || data.name) : data.name;
  const ageSuffix = t('age.suffix');

  let html = `
    <div class="cur-header">
      <span class="cur-header-badge" style="background:${color}">${displayName}</span>
      <div class="cur-header-info">
        <h3>${ageGroup} ${ageSuffix}</h3>
        <p class="cur-theory"><span class="material-icons-outlined" style="font-size:14px;vertical-align:middle">psychology</span> ${data.theory}</p>
      </div>
    </div>
    <div class="cur-goals">
      <h4><span class="material-icons-outlined" style="font-size:18px">flag</span> ${t('cur.goals')}</h4>
      <ul>${data.goals.map(g => `<li>${g}</li>`).join('')}</ul>
    </div>
    <div class="cur-terms">
  `;

  for (const [termId, term] of Object.entries(data.terms)) {
    html += `
      <div class="cur-term">
        <div class="cur-term-title">
          <span class="material-icons-outlined" style="font-size:18px">event</span>
          ${term.name}
        </div>
        <div class="cur-weeks">
          ${term.weeks.map((w, i) => `
            <div class="cur-week-item" onclick="openLesson('${ageGroup}', '${termId}', ${i})" style="--color: ${colorDark}">
              <span class="week-num">${t('cur.weekPrefix')}${i + 1}${termId.includes('summer') ? t('cur.lessonLabel') : t('cur.weekLabel')}</span>
              <span class="week-title">${w.title}</span>
              <span class="week-theme">${w.theme}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  html += '</div>';
  container.innerHTML = html;
}

// ===== 课程日历页 =====
document.getElementById('cal-age-filter').addEventListener('change', renderCalendar);
document.getElementById('cal-year-filter').addEventListener('change', renderCalendar);
document.getElementById('cal-term-filter').addEventListener('change', renderCalendar);

function renderCalendar() {
  const ageFilter = document.getElementById('cal-age-filter').value;
  const yearFilter = document.getElementById('cal-year-filter').value;
  const seasonFilter = document.getElementById('cal-term-filter').value;
  const termKey = `${yearFilter}-${seasonFilter}`;
  const container = document.getElementById('calendar-grid');

  let html = '';
  const ageGroups = ageFilter === 'all' ? Object.keys(CURRICULUM) : [ageFilter];

  ageGroups.forEach(age => {
    const data = CURRICULUM[age];
    const color = AGE_COLORS[age];
    const colorDark = AGE_COLORS_DARK[age];
    const term = data.terms[termKey];
    if (!term) return;

    const isSummer = seasonFilter === 'summer';

    const calDisplayName = currentLang === 'en' ? (CLASS_NAMES_EN[age] || data.name) : data.name;
    const calAgeSuffix = t('age.suffix');

    html += `
      <div class="cal-group">
        <div class="cal-group-header" style="background:${color}">
          <span>${calDisplayName}${currentLang === 'zh' ? '（' : ' ('}${age} ${calAgeSuffix}${currentLang === 'zh' ? '）' : ')'}</span>
          <span>${term.name}</span>
        </div>
        <div class="cal-lessons">
          ${term.weeks.map((w, i) => `
            <div class="cal-lesson-row" onclick="openLesson('${age}', '${termKey}', ${i})">
              <div class="cal-lesson-num" style="background:${color}20; color:${colorDark}">
                ${t('cur.weekPrefix')}${i + 1}${isSummer ? t('cur.lessonLabel') : t('cur.weekLabel')}
              </div>
              <div class="cal-lesson-info">
                <div class="cal-lesson-title">${w.title}</div>
                <div class="cal-lesson-theme">${w.theme}</div>
              </div>
              <span class="material-icons-outlined cal-lesson-icon">play_circle</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html || `<p class="no-data">${t('cal.noData')}</p>`;
}

// ===== PPT 课件弹窗 =====
let currentSlides = [];
let currentSlideIndex = 0;

function openLesson(ageGroup, termId, weekIndex) {
  const data = CURRICULUM[ageGroup];
  const color = AGE_COLORS[ageGroup];
  const term = data.terms[termId];
  const week = term.weeks[weekIndex];

  currentSlides = week.slides;
  currentSlideIndex = 0;

  const badge = document.getElementById('ppt-badge');
  badge.textContent = currentLang === 'en' ? (CLASS_NAMES_EN[ageGroup] || data.name) : data.name;
  badge.style.background = color;

  const isSummer = String(termId).includes('summer');
  document.getElementById('ppt-week').textContent =
    `${t('cur.weekPrefix')}${weekIndex + 1}${isSummer ? t('cur.lessonLabel') : t('cur.weekLabel')} · ${week.title}`;

  renderSlide();
  document.getElementById('lesson-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function renderSlide() {
  const slide = currentSlides[currentSlideIndex];
  const total = currentSlides.length;

  // 拆分 emoji 和文本
  const emojiMatch = slide.match(/^(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)/u);
  const icon = emojiMatch ? emojiMatch[0] : '';
  const text = icon ? slide.slice(icon.length).trim() : slide;

  // 处理多行文本
  const htmlText = text.replace(/\n/g, '<br>');

  // 判断内容类型
  const isTheoryNote = icon === '📌';
  const isLongContent = text.includes('\n');
  let textClass = 'slide-text';
  if (isTheoryNote) textClass = 'slide-text slide-theory-note';
  else if (isLongContent) textClass = 'slide-text slide-detail';

  document.getElementById('ppt-slides').innerHTML = `
    <div class="ppt-slide${isLongContent ? ' ppt-slide-detail' : ''}">
      <span class="slide-icon">${icon}</span>
      <div class="${textClass}">${htmlText}</div>
    </div>
  `;

  document.getElementById('ppt-page').textContent = `${currentSlideIndex + 1} / ${total}`;
  document.getElementById('ppt-prev').disabled = currentSlideIndex === 0;
  document.getElementById('ppt-next').disabled = currentSlideIndex === total - 1;
}

document.getElementById('ppt-prev').addEventListener('click', () => {
  if (currentSlideIndex > 0) { currentSlideIndex--; renderSlide(); }
});

document.getElementById('ppt-next').addEventListener('click', () => {
  if (currentSlideIndex < currentSlides.length - 1) { currentSlideIndex++; renderSlide(); }
});

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('lesson-modal').addEventListener('click', e => {
  if (e.target === document.getElementById('lesson-modal')) closeModal();
});

function closeModal() {
  document.getElementById('lesson-modal').classList.add('hidden');
  document.body.style.overflow = '';
}

// 键盘导航
document.addEventListener('keydown', e => {
  if (document.getElementById('lesson-modal').classList.contains('hidden')) return;
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    if (currentSlideIndex > 0) { currentSlideIndex--; renderSlide(); }
  } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
    e.preventDefault();
    if (currentSlideIndex < currentSlides.length - 1) { currentSlideIndex++; renderSlide(); }
  } else if (e.key === 'Escape') {
    closeModal();
  }
});

// 触摸滑动
let touchStartX = 0;
document.getElementById('ppt-slides').addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
});
document.getElementById('ppt-slides').addEventListener('touchend', e => {
  const diff = e.changedTouches[0].screenX - touchStartX;
  if (Math.abs(diff) > 50) {
    if (diff < 0 && currentSlideIndex < currentSlides.length - 1) {
      currentSlideIndex++; renderSlide();
    } else if (diff > 0 && currentSlideIndex > 0) {
      currentSlideIndex--; renderSlide();
    }
  }
});
