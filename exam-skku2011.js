// 2011 성균관대 오전 기출문제 — 문제번호 → 지문 매핑
// 같은 지문을 공유하는 문제는 동일 지문을 각각 반복해서 넣음

const PASSAGES = {

  // Q16 (단독)
  16: `If you're an environmentalist, plastic is a word you tend to say with a sneer. It has become a symbol of our wasteful society. But there seems little concern it is here to stay, and the truth is, of course, that plastics have brought enormous benefits, even environmental ones. It's not really the plastics themselves that are the environmental disaster ― it's the way society chooses to use and _______ them.`,

  // Q17 (단독)
  17: `A Parisian villain broke into a house at the village of Lachelle in 1978. Once inside he began to feel decidedly peckish and so went in search of the icebox. There he found his favourite cheese which it would have been a shame not to try. He then found some Bath Oliver biscuits and three bottles of champagne. After a while he began to feel sleepy and decided that he would lie down and digest his meal in comfort. He was arrested next morning fast asleep upstairs in the spare bedroom.`,

  // Q18 (단독)
  18: `Women of 30 or 40 or older are apt to be juggling a career and the care of children, often without a husband. They have figured out their lives for themselves. They have style. They are grown-ups, and they don't conceal their ages; if their lives are tougher, they frequently possess a certain centeredness and strength that is unavailable to those much younger, who seem somehow unformed, incomplete, far less interesting ― and sometimes unbelievably ignorant.`,

  // Q19~21 (공유)
  "19_21": `As its critics so rightly claimed, inductivism depicted science as a heartless, almost inhuman discipline offering no legitimate place to quirkiness, intuition, and all the other subjective attributes adhering to our vernacular notion of genius. Great scientists, the critics claimed, are distinguished more by their powers of _______, than their skill in experiment or observation. The criticisms of inductivism are certainly valid and I welcome its dethroning during the past thirty years as a necessary prelude to better understanding. Yet, in attacking it so strongly, some critics have tried to substitute an alternative equally extreme and unproductive in its emphasis on the subjectivity of creative thought. In this "eureka" view, creativity is an ineffable something, accessible only to persons of genius. It arises like a bolt of lightning, unpredictable and unanticipated ― but the bolts strike only a few special people.`,

  // Q22~23 (공유)
  "22_23": `Editors in America were always in danger of being challenged to duels or horsewhipped or beaten up by gangs. During the War of 1812, one anti-war newspaper was actually blasted by a mob with a cannon. On the frontier, tarring and feathering editors was a popular pastime. Symbolically, of course, it still is. The press, its reach almost infinitely expanded by electronics, has come a long way since those days. Yet, the public, despite its daily if not hourly intimacy with the press, does not really understand it very well. That lack of understanding is reflected in the courts, although it goes for beyond matters of the law. In part, this is inevitable because the press is indeed a peculiar institution, full of paradoxes.`,

  // Q24~25 (공유) — 밑줄: Q24
  "24_25": `The second picture she had made with Carter was called Angel Beach, and in it she played a girl who was raped by the members of a motorcycle gang. Maria had seen it twice, once at a studio preview and a second time by herself, at a drive-in, and neither time did she have any sense that the girl on the screen was herself. "I look at you and I know that what happened just didn't mean anything," the girl on the screen would say, and "\u300cThere's a lot more to living than just kicks\u300d, I see that now, kicks are nowhere." Carter's original cut ended with a shot of the motorcycle gang, as if they represented some reality not fully apprehended by the girl Maria played, but the cut released by the studio ended with a long dolly shot of Maria strolling across a campus. Maria preferred the studio's cut. In fact, she liked watching the picture: the girl on the screen seemed to have a definite knack for controlling her own destiny.`,

  // Q26~27 (공유) — 밑줄: Q26
  "26_27": `The best neighbour I ever had was an Italian restaurant. Emergency lasagna available night and day, change for the launderette on Sundays, a permanent door-keeper against gatecrashers and policemen with parking tickets. Even if our fourth floor bath water did run dry every time they filled up the Expresso machine, I miss them still. Bad neighbours can blight a house worse than dry rot but there is no insurance against them, no effective barricades in the compulsory intimacy except a decent caution and conversation ruthlessly restricted to matters of meteorology. And \u300cit only takes a tiny breach in the wall of platitudes to unleash appalling dramas of persecution and passion\u300d.`,

  // Q28~30 (공유)
  "28_30": `Computer translation systems are now in use in many parts of the world. But although the efficiency of machine translation is improving rapidly, there is no question of human translators being made redundant. On the contrary, \u2488_______. Today's computers are of little value in translating literary works, where \u2489_______ is vital, or the spoken word, which tends to be ungrammatical, or important texts, where absolute accuracy is essential. But for routine technical reports, working papers and the like, which take up so much of the translation workload of international organizations, computers are likely to play an increasing part. The method of operation will probably be for the machine to make a rough version, which the translator will then edit, correcting obvious mistakes, and where necessary referring back to the original. If machines can translate languages, could they ever teach languages? Yes, say enthusiasts, although they doubt that the teacher could ever be totally replaced by a machine in the classroom. Good old teachers know best!`,

  // Q31~34 (공유)
  "31_34": `According to the advice from the travel book, the ascent of the Great Pyramid could be made in 10-15 minutes with two or three helpers. Later that afternoon I climbed the Pyramid from the north-west corner, taking the suggested ten minutes without any helper to push, pull and support me. \u2488 The easiest way is from the north-east corner, but as it is now forbidden to climb it from any corner I wanted to be out of sight of the Pyramids police station, which is situated on the edge of the plateau below the east face. \u2489 The top, truncated by the removal of the limestone, is about twelve yards square, and I was the only one on it. \u248a The view could scarcely have been more extensive. \u248b Across the river, below the cliffs of the Mokattam Hills, from where much of the 6,000,000 tons of stone used to build this single pyramid were quarried, were the mosques and spectacular minarets of Muslim Cairo, the largest city in Africa, and the great labyrinthine cemeteries. \u248c Down towards the Nile, to the north of Old Cairo, was the modern city with the high buildings rising above it, not enough of them, as in Manhattan, to form groves of forests which give them an air of majesty, but in melancholy twos or threes, or completely isolated. \u248d I was now joined by a host of 'Nagamas', members of an itinerant tribe, who had seen me climb the pyramid, and now, with their insatiable demands for money and their constant tugging at my clothing, very nearly succeeded in making me lose my temper.`,

  // Q35~36 (공유)
  "35_36": `Food science, unfortunately, is not always dealing with what is acceptable to the public. The word 'new', such an exciting concept in other areas of advertising, causes only apprehension when applied to food. A new food? For science can open up a world of novel proteins, new methods of animal husbandry and feeding-stuffs, new crops and new meat and fish to eat. But the food trade can say no, and that is that. They know the extent to which the public attitude to food is guided by social and religious taboos, childhood conditioning, simple prejudices and preference. It is obvious that a product like hydrogenated palm and coconut and herring oil could not have achieved world-wide acceptance without a boost from the persuaders and perhaps it is there that the whole key to food acceptance lies. If it had not been for the last decade or so of brilliant advertising campaigning, how could margarine have climbed out of the hole it found itself in at the end of the war?`,

  // Q37~39 (공유) — 밑줄: ⒜(Q37), ⒟(Q39)
  "37_39": `\u2488\u300cThe impression that more women shoplift than men may be due to publicity\u300d. As a recent report on shoplifting pointed out: Every week, newspapers report the conviction of some middle-aged woman of blameless reputation who has stolen, for quite unexplained motives, some objects of little value which she could easily have afforded to buy. Most psychiatrists have at some point seen patients who were guilty of this sort of theft. This poses the question of whether \u2489_______ have a better chance of getting off shop-lifting charges than \u248a_______. The shops insist that they are concerned solely with whether customers have paid for the goods: their accent, class or ability to browbeat, is immaterial. But, once charged, the middle-class are undoubtedly in a better position. They are more likely to have, or call in, a solicitor; and they are financially able to risk paying legal costs. The solicitor may suggest a psychological assessment. And a 'respectable' first-time offender surely \u248b\u300cgoes into the dock\u300d with more chance of acquittal than someone lacking these attributes.`,

  // Q40~41 (공유)
  "40_41": `When the Stone of Destiny came back to Scotland, it was the culmination of a 700-year campaign to have it returned. The Stone, which is little more than a lump of rock of no great commercial value or artistic merit, is of great symbolic significance to the Scottish people, who, according to legend, could never be free while it was still being held on foreign soil. It had originally been stolen by the English King Edward I in 1296. Prior to its repatriation, it was kept in Westminster Abbey in London, where it was used during coronations of English monarchs. The return of the Stone has once again raised the question of what should be done about other national treasures held in museums and private collections abroad. Sometimes the circumstances under which an item was acquired make the decision simple; if it was stolen, it should go back. But more often than not the situation is far less straightforward. Artistic treasures may have been bought from colonial governments who had no moral right to sell them, or donated by countries that no longer exist.`,

  // Q42~44 (공유) — 밑줄: Q43, 빈칸: Q44
  "42_44": `On 21 December 1988, I happened to stand with numerous reporters at Kennedy Airport in New York, watching a mother writhe in agony, out of control, on the floor of the Pan Am terminal. She had just heard, in full sight of the New York press corps, that her 21-year-old daughter's plane had crashed killing everyone on board. At least a dozen camera crews were zooming in on the grief-stricken mother. The press photographers started yelling at the television crews to get out of the way, so that they could get a better look. Their bosses would have been displeased if they'd returned to base empty-handed. Within minutes, TV images of the bereaved woman's anguish were being beamed round the world. The next day, a full-page photograph of the woman, lying undignified on the airport floor, appeared on the front page of the New York Daily News. \u300cThe justification was that it helped convey, in human terms, the full horror of the disaster\u300d. The editor of the Daily News maintains that, in putting the mother's photo on Page One, he wasn't exploiting her ― just doing his job as a professional 'picturing a tragedy.' For my part, I believe that _______. People in television argue that medium requires pictures, but does it have to be so all-devouring? Why this determination to show everything in pictures when a word, a glance, silence itself communicates more and better? Although many reporters at Kennedy felt uncomfortable, they went ahead to shoot the pictures. In beating the competition, they only added to the tragedy.`,

  // Q45~48 (공유) — 빈칸: ⒜⒝(Q47)
  "45_48": `Not many years after the French philosopher Rousseau promulgated the idea of the 'noble savage', which embodied his belief that man in his natural state was innately good, there walked out of the woods a living specimen who, it was hoped, would prove the point. It happened at the village of Saint-Sernin in southern France on January 9, 1800. A strange creature from the forest was caught scavenging for food, and though it appeared to be a wild animal, it walked erect. As soon as those who captured the creature realized it was human, a boy of about 12 years in fact, they attempted to care for him. The 'Wild Boy of Aveyron', as he became known, could not speak and had no apparent awareness that he was human. Offered white bread, he spat it out immediately and bit anyone who approached too close. It was time to alert the scientists. Here, apparently, was the noble savage in person. Over the next few months, attempts were made to bring the boy back into the human race. With some optimism, he was given the name Victor and he had the benefit of a patient tutor and a woman who grew to love him with a mother's devotion. But the experiments to which this poor wretch was subjected met with repeated defeat, while he longed to return to his freedom and his woods. Invited to dinner, he stole everything small enough to grab and clambered up a tree, which left the astonished guests resentful that Rousseau was not alive to see his theories disproved. But were they disproved? Theft is a transgression against a specific moral rule, but does not, in itself, denote badness if the rule has no significance for the thief. What was more telling was the fact that Victor was never able to see the world through the eyes of anyone but himself and had no capacity for empathy. He certainly learned how people could hurt, but he never learned to recognize that other people existed except as satisfiers of his need. The boy didn't prove that the primitive state was one of essential goodness, but he did prove that it was selfish. Which is not to say that it was not also innocent: the boy showed no malice or cruelty, did not seek to revenge, did not direct hostility against individuals. He was not so much \u2488_______ as \u2489_______.`,

  // Q49~50 (공유) — 밑줄: Q49
  "49_50": `Viet Nam and Watergate greatly undermined the authority of American institutions. They encouraged people to pick and choose the parts they would play, the wars they would fight. \u300cAt the least, they handsomely legitimized a refusal to participate at all\u300d. This moral individualism, an old and admirable American trait, has often been balanced in the past by a sense of duty to country. That sense has chipped and faded. The U.S. has become an appallingly self-contradicting collection of tribes. Lacking an extreme threat that the majority regard as real, Americans have demonstrated an us-against-us mentality. American pluralism has become an incoherence of individualism. The nation's social vision amounts to little more than an individual passion to be comfortable and secure. If sacrifices are required, it is a painful question whether any Americans are willing to give up some of their privilege for the common good: they will certainly never do so if they think that they are sacrificing even the slightest bit more than other Americans; in a period of scarcity, the nation will become even more litigious and niggling in its collection of grievances.`,
};

// 문제번호 → 지문 매핑 (각 문제 객체에 p 필드로 삽입)
const MAP = {
  16:"16", 17:"17", 18:"18",
  19:"19_21", 20:"19_21", 21:"19_21",
  22:"22_23", 23:"22_23",
  24:"24_25", 25:"24_25",
  26:"26_27", 27:"26_27",
  28:"28_30", 29:"28_30", 30:"28_30",
  31:"31_34", 32:"31_34", 33:"31_34", 34:"31_34",
  35:"35_36", 36:"35_36",
  37:"37_39", 38:"37_39", 39:"37_39",
  40:"40_41", 41:"40_41",
  42:"42_44", 43:"42_44", 44:"42_44",
  45:"45_48", 46:"45_48", 47:"45_48", 48:"45_48",
  49:"49_50", 50:"49_50",
};

window.__V502_EXAM_SKKU2011__ = [
  {
    "q": "In the movies the death of a child 'justifies' both serious acts of violent revenge and violent displays of serious acting.",
    "p": "In the movies the death of a child 「justifies」 both serious acts of violent revenge and violent displays of serious acting.",
    "c": [
      [
        "1",
        "criticizes"
      ],
      [
        "2",
        "encourages"
      ],
      [
        "3",
        "validates"
      ],
      [
        "4",
        "determines"
      ],
      [
        "5",
        "dramatizes"
      ]
    ],
    "a": "3",
    "explanation": "영화에서 아이의 죽음은 폭력적 복수의 심각한 행위와 심각한 연기의 폭력적 표현을 정당화한다.\n\njustify v 옳다고 하다, 정당화하다(=validate, vindicate)\nviolent a 격렬한, 폭력적인(=brutal, savage, vicious)\nrevenge n 복수, 앙갚음(=retaliation, vengeance, reprisal)"
  },
  {
    "q": "He describes the confusion and emotional chaos of dealing with the mentally ill with 'riveting' precision.",
    "p": "He describes the confusion and emotional chaos of dealing with the mentally ill with 「riveting」 precision.",
    "c": [
      [
        "1",
        "embarrassing"
      ],
      [
        "2",
        "fascinating"
      ],
      [
        "3",
        "disgusting"
      ],
      [
        "4",
        "immoral"
      ],
      [
        "5",
        "accurate"
      ]
    ],
    "a": "2",
    "explanation": "그는 정신질환자들을 다룰 때의 혼란과 정서적 혼돈을 마음을 사로잡을 정도로 정확하게 묘사한다.\n\nriveting a 매혹적인(=fascinating, enchanting)\nprecision n 정확, 정밀, 꼼꼼함\ndisgusting a 혐오스런(=revolting, nauseating, repulsive)"
  },
  {
    "q": "Mr. Brady has done something to 'bring home to us' the terrible reality of war.",
    "p": "Mr. Brady has done something to 「bring home to us」 the terrible reality of war.",
    "c": [
      [
        "1",
        "familiarize ourselves with"
      ],
      [
        "2",
        "allow us to overcome"
      ],
      [
        "3",
        "encourage us to neglect"
      ],
      [
        "4",
        "make us feel comfortable with"
      ],
      [
        "5",
        "lead us to realize"
      ]
    ],
    "a": "5",
    "explanation": "브래디(Brady) 씨는 전쟁의 끔찍한 참상을 우리에게 깨닫게 해 줄 어떤 일을 했다.\n\nbring home to a person ~에게 깨닫게 하다(=lead ~ to realize)\nfamiliarize oneself with ~에 정통하다[익숙하다]\nneglect v 무시하다(=ignore, disregard)"
  },
  {
    "q": "Perhaps some will say that animals have some 'inherent' value, only less than we have.",
    "p": "Perhaps some will say that animals have some 「inherent」 value, only less than we have.",
    "c": [
      [
        "1",
        "inborn"
      ],
      [
        "2",
        "superficial"
      ],
      [
        "3",
        "inhuman"
      ],
      [
        "4",
        "intelligent"
      ],
      [
        "5",
        "extraordinary"
      ]
    ],
    "a": "1",
    "explanation": "아마도 어떤 사람들은 동물도 단지 우리보다 더 적기는 하지만 얼마간의 내재적 가치를 갖고 있다고 말할 것이다.\n\ninherent a 타고난(=inborn, innate, natural), 내재한\nsuperficial a 표면상의; 피상적인, 천박한(=shallow, frivolous)\nextraordinary a 비상한, 보통이 아닌"
  },
  {
    "q": "The three facets of the great writer ― magic, story, lesson ― are 'prone to blend' in one impression of unified and unique radiance.",
    "p": "The three facets of the great writer ― magic, story, lesson ― are 「prone to blend」 in one impression of unified and unique radiance.",
    "c": [
      [
        "1",
        "resistant"
      ],
      [
        "2",
        "successful"
      ],
      [
        "3",
        "lively"
      ],
      [
        "4",
        "likely"
      ],
      [
        "5",
        "combined"
      ]
    ],
    "a": "4",
    "explanation": "위대한 작가의 세 가지 측면인 마법, 이야기, 교훈은 통일되고 독특한 광채라는 하나의 인상 속에 혼합되는 경향이 있다.\n\nprone a 경향이 있는(=likely, liable)\nradiance n 광휘, 광채\nresistant a 저항하는, 내성이 있는"
  },
  {
    "q": "Laurie has an _______ command of the Italian language.",
    "c": [
      [
        "1",
        "extreme"
      ],
      [
        "2",
        "outstanding"
      ],
      [
        "3",
        "abundant"
      ],
      [
        "4",
        "intensive"
      ],
      [
        "5",
        "utter"
      ]
    ],
    "a": "2",
    "explanation": "로리(Laurie)는 이탈리아어를 자유자재로 구사할 수 있다. 여기서 command는 '(언어의) 구사력'을 의미하며 이것을 수식하기에 적절한 형용사는 good, outstanding, excellent(뛰어난) 등이다.\n\nhave a command of~ ~를 마음대로 사용할 수 있다\nabundant a 많은, 풍부한(=plentiful, copious, ample, profuse)"
  },
  {
    "q": "Richard lost his job and his home and eventually _______ up living on the streets.",
    "c": [
      [
        "1",
        "reached"
      ],
      [
        "2",
        "went"
      ],
      [
        "3",
        "wound"
      ],
      [
        "4",
        "put"
      ],
      [
        "5",
        "set"
      ]
    ],
    "a": "3",
    "explanation": "리처드(Richard)는 직장과 집을 잃었고 결국 길거리에서 사는 것으로 끝났다. (길거리에 나앉는 신세가 되었다.)\n\nwind[end] up ~ing ~하는 것으로 끝나다"
  },
  {
    "q": "People who have claustrophobia are afraid of being in _______ spaces.",
    "c": [
      [
        "1",
        "compressed"
      ],
      [
        "2",
        "open"
      ],
      [
        "3",
        "enormous"
      ],
      [
        "4",
        "scary"
      ],
      [
        "5",
        "confined"
      ]
    ],
    "a": "5",
    "explanation": "폐소 공포증이 있는 사람들은 비좁은 장소에 있기를 두려워한다.\n\nclaustrophobia n 폐소[밀실] 공포증\ncompressed a 압축[압착]된; 간결한\nconfined a 제한된, 좁은(=restricted, limited)\nscary a 무서운, 겁나는(=frightening, spooky, creepy)"
  },
  {
    "q": "I wanted to build a desk, but I couldn't make _______ of the instructions.",
    "c": [
      [
        "1",
        "sense"
      ],
      [
        "2",
        "form"
      ],
      [
        "3",
        "head"
      ],
      [
        "4",
        "tail"
      ],
      [
        "5",
        "knowledge"
      ]
    ],
    "a": "1",
    "explanation": "나는 책상을 조립하고 싶었으나 제품 설명서를 이해할 수 없었다.\n\nmake sense of~ ~를 이해하다\n정답 ①"
  },
  {
    "q": "The extreme weather conditions _______ their toll on the inhabitants.",
    "c": [
      [
        "1",
        "declared"
      ],
      [
        "2",
        "damaged"
      ],
      [
        "3",
        "judged"
      ],
      [
        "4",
        "took"
      ],
      [
        "5",
        "alarmed"
      ]
    ],
    "a": "4",
    "explanation": "극단적인 날씨가 주민들에게 피해를 주었다.\n\ntake one's[a] toll on~ ~에 손상[피해]을 입히다\n정답 ④"
  },
  {
    "q": "The general ①acceptance of the view created an ②expanded sense of guilt, ③for if the plague ④had been punishment there had to be terrible sin ⑤to have occasioned it.",
    "c": [
      [
        "1",
        "acceptance"
      ],
      [
        "2",
        "expanded"
      ],
      [
        "3",
        "for"
      ],
      [
        "4",
        "had been"
      ],
      [
        "5",
        "to have occasioned"
      ]
    ],
    "a": "4",
    "explanation": "그 견해를 사람들이 널리 받아들임으로써 광범위한 죄의식이 생겼는데, 왜냐하면 만일 전염병이 벌이었다고 한다면 그 병을 유발시킨 끔찍한 죄가 있었음에 틀림없기 때문이었다.\n\n③ for 이하의 내용이 이미 발생한 과거 사실을 반대로 가정하는 것이 아니라 단순히 과거의 여러 가능한 경우들 중의 하나를 상정해본 것이므로 if절은 직설법의 조건절이다. 따라서 if절의 동사 ④ had been은 과거 시제인 was로 고쳐야 한다. We think that there had to be some sort of support network for bin Laden inside of Pakistan. (우리는 파키스탄 내에 모종의 빈 라덴 지원망이 있었음에 틀림없다고 생각한다.)와 Since the universe exists, there must have been something to have caused it to exist.(우주가 존재하니까 우주를 존재하게 만든 무엇인가가 있었음에 틀림없다.)에서처럼 there had to be는 there must have been과 같은 뜻으로 ⑤ 완료부정사도 맞다.\n\n① 형용사 general의 수식을 받을 수 있는 것은 명사이다. ② 뒤의 명사 sense of guilt를 수식하는 것으로 expanded는 '확대된, 확장된'의 의미를 가지는 형용사이다. ③ 이 문장에서 for는 접속사로 보통 앞에 콤마 또는 세미콜론이 오고, 부가적 이유·설명 따위를 말할 때 쓰인다.\nadversely ad 불리하게, 반대로"
  },
  {
    "q": "The truth is that ①the commonest response to violence is ②one of repugnance, and ③that a significant number of people everywhere ④tries to oppose it ⑤in whatever ways they can.",
    "c": [
      [
        "1",
        "the commonest"
      ],
      [
        "2",
        "one"
      ],
      [
        "3",
        "that"
      ],
      [
        "4",
        "tries"
      ],
      [
        "5",
        "in whatever"
      ]
    ],
    "a": "4",
    "explanation": "사실은 폭력에 대한 가장 보편적인 반응은 반감의 반응이고, 모든 곳의 상당한 수의 사람들이 가능한 어떤 방식으로든 폭력에 반대하려고 노력한다.\n\na number of~는 many~라는 뜻으로 복수명사가 이어지고 복수동사가 호응한다. 따라서 ④ tries를 try로 바꾸어야 한다.\n\n① common의 최상급 표현으로 보통 최상급 표현 앞에 정관사 the가 온다. ② one은 대명사로 '(특정한 사람·물건 중의) 하나, 한 개'를 뜻한다. ③ 등위접속사 and에 의해 that절이 병치되고 있는 것으로 a significant~ they can이 완전한 문장이므로 명사절을 이끄는 종속접속사 that이 온 것이다. ⑤ whatever는 복합관계형용사로 뒤의 명사 ways를 수식할 수 있다.\n\nrepugnance n 반감, 혐오\noppose v ~에 반대하다"
  },
  {
    "q": "The point ①at which physical decline ②with age ③begins adversely to affect ④a driver's capability ⑤have not yet been studied.",
    "c": [
      [
        "1",
        "at which"
      ],
      [
        "2",
        "with age"
      ],
      [
        "3",
        "begins"
      ],
      [
        "4",
        "a driver's"
      ],
      [
        "5",
        "have not"
      ]
    ],
    "a": "5",
    "explanation": "나이로 인한 신체적 쇠퇴가 운전자의 능력에 불리하게 영향을 미치기 시작하는 시점은 아직 연구되지 않았다.\n\n이 문장의 주어는 The point로 단수명사이므로 ⑤ have not을 has not으로 고쳐야 한다.\n\n① physical decline~driver's capability가 완전한 문장으로 관계대명사 which는 전치사의 목적어가 되어야 한다. 선행사가 the point로 '어떤 특정한 때, 시점'을 의미하므로 전치사 at이 온 것이다. ② with age는 '나이를 먹음에 따라'를 뜻하는 전치사구이다. ③ 관계대명사절의 주어는 physical decline으로 단수명사이므로 단수동사 begins가 온 것이다. ④ 뒤에 명사 capability가 있으므로 소유격 형태인 driver's는 적절하고 driver가 가산명사이므로 앞에 부정관사 a가 나올 수 있다.\n\nadversely ad 불리하게, 반대로"
  },
  {
    "q": "In both ①their public and private spheres, the nation is rightly acting to reduce ②many of the risks ③which people have no choice ④but to hazard ― on the road, in factories, in the environment, ⑤even in the field of speculative finance.",
    "c": [
      [
        "1",
        "their"
      ],
      [
        "2",
        "many"
      ],
      [
        "3",
        "which"
      ],
      [
        "4",
        "but to"
      ],
      [
        "5",
        "even"
      ]
    ],
    "a": "1",
    "explanation": "공적, 사적 양 분야에서, 국가는 국민이 도로에서, 공장에서, 환경에서, 심지어는 투기적 금융에서 어쩔 수 없이 감수해야 하는 많은 위험을 줄이려고 마땅히 노력하고 있다.\n\n①의 their는 뒤의 the nation이라는 단수명사를 가리키는 대명사이므로 its로 바꾸어야 한다.\n\n② 'many of+한정사+복수명사'의 형태이다. ③ 타동사 hazard의 목적어가 없는 불완전한 문장으로 which는 목적격 관계대명사로 적절하다. ④ 'have no choice but to V'는 '~하지 않을 수 없다'는 뜻의 관용표현이다. ⑤ even은 '~도[조차]'의 뜻의 부사로 강조하는 말 앞에 나온다."
  },
  {
    "q": "Despite the current oil glut, ①the world's known reserves of both petroleum and natural gas ②are expected to be declining ③by the end of the century, and ④it would be folly to burn ⑤which remains to generate electricity.",
    "c": [
      [
        "1",
        "the world's known"
      ],
      [
        "2",
        "are expected"
      ],
      [
        "3",
        "by the end of"
      ],
      [
        "4",
        "it"
      ],
      [
        "5",
        "which remains"
      ]
    ],
    "a": "5",
    "explanation": "현재의 기름 과잉 공급에도 불구하고, 전 세계에 알려진 석유·천연 가스 매장량은 금세기 말에 감소될 것이라고 예상되고 있으므로, 남아있는 것을 전기 생산을 위해 다 써버린다면 어리석은 짓이 될 것이다.\n\n⑤ which remains가 명사절로 burn의 목적어가 되어야 하는데 which 앞에 선행사가 없으므로 선행사를 포함한 관계대명사 what로 고쳐야 한다.\n\n① world's known은 '소유격+형용사'의 형태로 뒤의 명사 reserves를 수식할 수 있다. ② 주어가 reserves로 복수명사이므로 복수동사 are는 적절하고 'be expected to 부정사(~하기로 예상되고 있다)'는 미래 대용어로 가까운 미래를 나타낼 때 쓰인다. ③ by the end of~는 '~말 까지는'의 의미이다. ④ 뒤에 진주어 to burn~가 있으므로 가주어 it이 나왔고, 조동사 would 다음에는 동사원형이 온다."
  },
  {
    "q": "If you're an environmentalist, plastic is a word you tend to say with a sneer. It has become a symbol of our wasteful society. But there seems little concern it is here to stay, and the truth is, of course, that plastics have brought enormous benefits, even environmental ones. It's not really the plastics themselves that are the environmental disaster ― it's the way society chooses to use and ____",
    "p": "If you're an environmentalist, plastic is a word you tend to say with a sneer. It has become a symbol of our wasteful society. But there seems little concern it is here to stay, and the truth is, of course, that plastics have brought enormous benefits, even environmental ones. It's not really the plastics themselves that are the environmental disaster ― it's the way society chooses to use and _______ them.",
    "c": [
      [
        "1",
        "examine"
      ],
      [
        "2",
        "protect"
      ],
      [
        "3",
        "endanger"
      ],
      [
        "4",
        "accumulate"
      ],
      [
        "5",
        "dispose"
      ]
    ],
    "a": "5",
    "explanation": "당신이 환경론자라면, 플라스틱은 당신이 조롱조로 말하는 경향이 있는 단어이다. 플라스틱은 낭비하는 우리 사회의 상징이 되어버렸다. 그러나 그것이 지속적으로 그럴 것이라는 걱정은 거의 없으며 사실은 물론, 플라스틱은 막대한 혜택을 심지어는 환경적인 혜택까지도 가져왔다. 환경재앙이 되는 것은 플라스틱 자체가 아니라 사회가 그것을 사용하고 버리는 방식인 것이다.\n\n플라스틱은 사용 후 버리는 것이므로 빈칸에는 '버리다'의 의미를 갖는 동사가 필요하다.\n\nsneer n 비웃음, 냉소\nendanger v 위험에 빠뜨리다(=jeopardize, imperil)\naccumulate v 축적하다, 모으다\ndispose v 처리하다, 버리다"
  },
  {
    "q": "A Parisian villain broke into a house at the village of Lachelle in 1978. Once inside he began to feel decidedly peckish and so went in search of the icebox. There he found his favourite cheese which it would have been a shame not to try. He then found some Bath Oliver biscuits and three bottles of champagne. After a while he began to feel sleepy and decided that he would lie down and digest his m",
    "p": "A Parisian villain broke into a house at the village of Lachelle in 1978. Once inside he began to feel decidedly peckish and so went in search of the icebox. There he found his favourite cheese which it would have been a shame not to try. He then found some Bath Oliver biscuits and three bottles of champagne. After a while he began to feel sleepy and decided that he would lie down and digest his meal in comfort. He was arrested next morning fast asleep upstairs in the spare bedroom.",
    "c": [
      [
        "1",
        "The Most Inventive Plan"
      ],
      [
        "2",
        "The Worst Holiday"
      ],
      [
        "3",
        "The Most Shameful Cook"
      ],
      [
        "4",
        "The Least Careful Thief"
      ],
      [
        "5",
        "The Most Arrogant Visitor"
      ]
    ],
    "a": "4",
    "explanation": "파리의 한 악당이 1978년에 Lachelle이라는 한 마을의 주택에 침입했다. 일단 안으로 들어서자, 그는 몹시 배고픔을 느꼈고 아이스박스를 찾아갔다. 그는 박스 속에서 안 먹어보면 후회하게 될 그가 가장 좋아하는 치즈를 발견하였다. 그 다음에 그는 Bath Oliver 비스킷과 세 병의 샴페인도 찾아내었다. 잠시 후 그는 졸리기 시작했고 누워서 편안하게 음식을 소화시키기로 했다. 그는 위층의 빈 침실에서 곤히 잠든 채로 다음 날 아침 체포되었다.\n\n본분을 망각한 부주의한 도둑에 관한 이야기이므로 ④의 '가장 부주의한 도둑'이 이 글의 제목으로 알맞다.\n\nbreak into 침입[난입]하다\npeckish a 배가 고픈(=hungry)\nfast asleep 깊이 잠들어\nspare a 예비의, 여분의"
  },
  {
    "q": "Women of 30 or 40 or older are apt to be juggling a career and the care of children, often without a husband. They have figured out their lives for themselves. They have style. They are grown-ups, and they don't conceal their ages; if their lives are tougher, they frequently possess a certain centeredness and strength that is unavailable to those much younger, who seem somehow unformed, incomplete",
    "p": "Women of 30 or 40 or older are apt to be juggling a career and the care of children, often without a husband. They have figured out their lives for themselves. They have style. They are grown-ups, and they don't conceal their ages; if their lives are tougher, they frequently possess a certain centeredness and strength that is unavailable to those much younger, who seem somehow unformed, incomplete, far less interesting ― and sometimes unbelievably ignorant.",
    "c": [
      [
        "1",
        "Need For Women's Education"
      ],
      [
        "2",
        "Courtship and Marriage"
      ],
      [
        "3",
        "Narcissism of Young Women"
      ],
      [
        "4",
        "In Praise of Older Women"
      ],
      [
        "5",
        "Dating Advice for Single Moms"
      ]
    ],
    "a": "4",
    "explanation": "30, 40, 혹은 더 나이든 여성들은 직업과 양육을 능숙하게 처리하는 경향이 있고 종종 남편이 없을 때도 그러하다. 그들은 스스로 인생의 의미를 알게 되었다. 그들에게는 스타일이 있다. 그들은 성숙한 사람들이고 나이를 감추지 않는다. 비록 그들의 삶은 더 힘들지라도, 그들은 종종 어느 정도 미숙하고, 불완전하고, 훨씬 덜 흥미롭고, 때로는 상당히 무지한 훨씬 더 젊은 여성에게는 없는 어떤 중심과 강인함을 갖고 있다.\n\n이 글의 요지가 젊은 여성과 비교되는 나이든 여성의 강점이므로 ④의 '나이든 여성에 대한 칭송'이 제목으로 알맞다.\n\njuggle v 절묘히 다루다, ~에 요술을 부리다, 조작하다\nfigure out 계산하다; 이해하다, 찾다; 생각해 내다\ncourtship n 구애, 구혼\nnarcissism n 자아도취"
  },
  {
    "q": "The best title of the passage would be _______.",
    "p": "As its critics so rightly claimed, inductivism depicted science as a heartless, almost inhuman discipline offering no legitimate place to quirkiness, intuition, and all the other subjective attributes adhering to our vernacular notion of genius. Great scientists, the critics claimed, are distinguished more by their powers of _______, than their skill in experiment or observation. The criticisms of inductivism are certainly valid and I welcome its dethroning during the past thirty years as a necessary prelude to better understanding. Yet, in attacking it so strongly, some critics have tried to substitute an alternative equally extreme and unproductive in its emphasis on the subjectivity of creative thought. In this \"eureka\" view, creativity is an ineffable something, accessible only to persons of genius. It arises like a bolt of lightning, unpredictable and unanticipated ― but the bolts strike only a few special people.",
    "c": [
      [
        "1",
        "Creative Powers of Myth"
      ],
      [
        "2",
        "Nature of Scientific Creativity"
      ],
      [
        "3",
        "Inductivism in the Ascendency"
      ],
      [
        "4",
        "Death of Great Scientists"
      ],
      [
        "5",
        "Legendary Story of Archimedes"
      ]
    ],
    "a": "2",
    "explanation": "그것의 비판가들이 매우 정당하게 주장하였듯이, 귀납론은 과학을 기발함, 직관, 그리고 천재성에 대한 대중들의 생각에 맞는 또 다른 어떤 주관적인 속성들에게는 전혀 정당한 위치를 부여하지 않는 냉혹하고 거의 비인간적인 학문이라고 묘사했다. 귀납론의 비판가들은 위대한 과학자는 실험이나 관찰의 솜씨에 의해서라기보다는 그들의 직감의 힘에 의해 더 구별된다고 주장했다. 귀납론에 대한 비판은 확실히 옳으며 나는 지난 30년간 더 나은 이해를 위한 예비 단계로서 그것(귀납론)이 권좌에서 쫓겨난 것을 환영한다. 그러나 귀납론을 너무 강력하게 공격할 때, 일부 비판가들은 창의적 사고의 주관성을 강조하는데 있어 똑같이 극단적이고 비생산적인 대안적 견해를 사용하고자 했다. 이러한 '직관을 중시하는' 관점에서 보면, 창의성은 말로 설명할 수 없는 그 무엇인가이고, 오직 천재적인 사람들에게만 있을 수 있는 것이다. 창의성은 예측 불가능하며 예기치 않은 번개 불처럼 발생하나, 그 불은 오직 약간의 특별한 사람들에게만 발생한다.\n\n이 글은 창의성을 인정하지 않고 객관성만을 강조하는 귀납론에 대한 비판과 그에 대한 대안으로 제시되는 주관적 창의성을 극단적으로 강조하는 견해를 비판하고 있다. 따라서 이 두 가지 내용을 잘 보여주는 ②의 '과학적 창의성의 속성'이 제목으로서 알맞다.\n\ninductivism n 귀납론(모든 과학적 이론은 실험과 관찰이라는 경험에 바탕해야 된다는 과학 철학)\nlegitimate a 정당한, 옳은(=justifiable, legal)\nquirkiness n 기발함, 기이함\nintuition n 직관\nattribute n 속성, 특질, 특성\nadhere to~ ~에 부착되다, 집착하다, 고수하다\nvernacular a 통속적인, 풍토의, 특유의\nhunch n 예감, 직감, 육감\nvalid a 타당한\ndethrone v (높은 지위에서) 쫓아내다\nprelude n 전주곡, 서곡; 전조, 예고\nsubstitute v 대용하다\nineffable a 말로 표현할 수 없는\nbolt n 번개 불; (불물)의 갑작스런 분사\nascendency n 우세, 우월, 지배권"
  },
  {
    "q": "Which of the following is most appropriate for the blank?",
    "p": "As its critics so rightly claimed, inductivism depicted science as a heartless, almost inhuman discipline offering no legitimate place to quirkiness, intuition, and all the other subjective attributes adhering to our vernacular notion of genius. Great scientists, the critics claimed, are distinguished more by their powers of _______, than their skill in experiment or observation. The criticisms of inductivism are certainly valid and I welcome its dethroning during the past thirty years as a necessary prelude to better understanding. Yet, in attacking it so strongly, some critics have tried to substitute an alternative equally extreme and unproductive in its emphasis on the subjectivity of creative thought. In this \"eureka\" view, creativity is an ineffable something, accessible only to persons of genius. It arises like a bolt of lightning, unpredictable and unanticipated ― but the bolts strike only a few special people.",
    "c": [
      [
        "1",
        "facts"
      ],
      [
        "2",
        "hunch"
      ],
      [
        "3",
        "objectivity"
      ],
      [
        "4",
        "morality"
      ],
      [
        "5",
        "myth"
      ]
    ],
    "a": "2",
    "explanation": "빈칸 뒤의 than 뒤에 나오는 실험과 관찰이라는 객관적 수단과 반대되는 성격의 주관적 수단이 빈칸에 와야 한다. 따라서 '직감, 예감'의 뜻인 hunch가 적절하다."
  },
  {
    "q": "According to the passage, which of the following is true?",
    "p": "As its critics so rightly claimed, inductivism depicted science as a heartless, almost inhuman discipline offering no legitimate place to quirkiness, intuition, and all the other subjective attributes adhering to our vernacular notion of genius. Great scientists, the critics claimed, are distinguished more by their powers of _______, than their skill in experiment or observation. The criticisms of inductivism are certainly valid and I welcome its dethroning during the past thirty years as a necessary prelude to better understanding. Yet, in attacking it so strongly, some critics have tried to substitute an alternative equally extreme and unproductive in its emphasis on the subjectivity of creative thought. In this \"eureka\" view, creativity is an ineffable something, accessible only to persons of genius. It arises like a bolt of lightning, unpredictable and unanticipated ― but the bolts strike only a few special people.",
    "c": [
      [
        "1",
        "Inductivism held that great scientists are great observers."
      ],
      [
        "2",
        "Inductivism has been often accused of its elitism."
      ],
      [
        "3",
        "Inductivism gives genius an inaccessible status."
      ],
      [
        "4",
        "Inductivism has never had a great influence on science."
      ],
      [
        "5",
        "Inductivism arises from a firm belief in subjectivity."
      ]
    ],
    "a": "1",
    "explanation": "귀납론의 비판가들은 위대한 과학자는 실험이나 관찰의 솜씨에 의해서라기보다는 그들의 직감의 힘에 의해 구별된다고 주장한다.라고 한 것에서 inductivism은 비판가들의 말과는 반대로 위대한 과학자들이 실험이나 관찰의 솜씨로 구별된다고 생각하고 있음을 추론할 수 있다.\n\n② elitism(엘리트주의)에 대한 언급이 없다. ③ 창의성은 말로 설명할 수 없는 그 무언인가이고, 오직 천재적인 사람들에게만 있을 수 있다고 하였으므로 천재에게 접근할 수 없는 위치를 부여하는 것은 귀납론이 아니라 창의성이라 할 수 있다. ④ 귀납론이 과학에 미친 영향에 대한 언급이 없다. ⑤ 귀납론은 창의적 사고의 주관성이 아니라 실험과 관찰을 중시하는 과학 철학이다."
  },
  {
    "q": "The best title of the passage would be _______.",
    "p": "Editors in America were always in danger of being challenged to duels or horsewhipped or beaten up by gangs. During the War of 1812, one anti-war newspaper was actually blasted by a mob with a cannon. On the frontier, tarring and feathering editors was a popular pastime. Symbolically, of course, it still is. The press, its reach almost infinitely expanded by electronics, has come a long way since those days. Yet, the public, despite its daily if not hourly intimacy with the press, does not really understand it very well. That lack of understanding is reflected in the courts, although it goes for beyond matters of the law. In part, this is inevitable because the press is indeed a peculiar institution, full of paradoxes.",
    "c": [
      [
        "1",
        "Journalism as a High-risk Trade"
      ],
      [
        "2",
        "Journalists as Rebels"
      ],
      [
        "3",
        "Criticism of Human Rights Violations"
      ],
      [
        "4",
        "Portrayals of Violence in the Press"
      ],
      [
        "5",
        "Public Image of the Press as a Corrupt Institution"
      ]
    ],
    "a": "1",
    "explanation": "미국의 편집장들은 깡패들에게 결투신청을 받거나 채찍을 맞거나 흠씬 구타당하는 위험에 항상 놓여 있었다. 1812년의 전쟁 중에, 한 전쟁을 반대하던 신문사가 실제로 폭도의 총격에 박살나 버리기도 했다. 변경지역에서는, 편집자들의 몸에 타르를 칠하고 깃털을 붙여 둘러메고 다니는 린치를 가하는 것이 인기 있는 오락이기도 했다. 물론, 상징적으로는 그것이 지금도 여전히 존재한다. 언론은, 그 파급 범위가 전자매체를 통해 거의 무한히 확대되면서, 그 시절 이후로 상당히 발전하였다. 그러나 대중은, 비록 매 시간마다는 아닐지라도 매일 언론과 친밀히 접함에도 불구하고, 언론을 진정으로 아주 잘 이해하지는 못하고 있다. 비록 그것이 법률의 영역을 넘는 문제라 할지라도, 그러한 이해 부족은 법정 문제로까지 비화되어 나타난다. 부분적으로, 이것은 불가피한데, 그 이유는 언론은 정말로 자기모순으로 가득 찬 특이한 기관이기 때문이다.\n\n이 글은 처음 부분에서 과거의 언론이 처한 위험을, 중반 이후부터는 지금도 변함없이 계속되는 언론이 처한 위험을 이야기하고 있다.\n\nduel n 결투\nhorsewhip v 채찍질하다, 벌주다\nblast v 날려버리다, 폭파시키다, 망가뜨리다, 해치우다\nmob n 폭도\ncannon n 총, 대포\ntar and feather 온몸에 타르를 칠하고 새털로 씌우다, (군중들이) 사적으로 심하게 벌하다\npastime n 여가 활동, 소일거리, 오락\nintimacy n 친밀함\ncome a long way 상당히 발전하고 향상되다\nparadox n 자기모순, 역설\nlynching n 사사로이 자행되는 처벌"
  },
  {
    "q": "According to the passage, which of the following is true?",
    "p": "Editors in America were always in danger of being challenged to duels or horsewhipped or beaten up by gangs. During the War of 1812, one anti-war newspaper was actually blasted by a mob with a cannon. On the frontier, tarring and feathering editors was a popular pastime. Symbolically, of course, it still is. The press, its reach almost infinitely expanded by electronics, has come a long way since those days. Yet, the public, despite its daily if not hourly intimacy with the press, does not really understand it very well. That lack of understanding is reflected in the courts, although it goes for beyond matters of the law. In part, this is inevitable because the press is indeed a peculiar institution, full of paradoxes.",
    "c": [
      [
        "1",
        "The press has ironically played an essential part in promoting violence in the s"
      ],
      [
        "2",
        "The lynching of journalists in symbolic forms still exists in America."
      ],
      [
        "3",
        "Nowadays, the public better understands the press due to electronics."
      ],
      [
        "4",
        "The judiciary performs its role properly as it understands the paradox of the pr"
      ],
      [
        "5",
        "On the American frontier, journalism was one of the most respected and popular"
      ]
    ],
    "a": "2",
    "explanation": "“물론, 상징적으로는 그것이 지금도 여전히 존재한다.”라고 한 것에서 ②가 사실임을 알 수 있다."
  },
  {
    "q": "The underlined expression means _______.",
    "p": "The second picture she had made with Carter was called Angel Beach, and in it she played a girl who was raped by the members of a motorcycle gang. Maria had seen it twice, once at a studio preview and a second time by herself, at a drive-in, and neither time did she have any sense that the girl on the screen was herself. \"I look at you and I know that what happened just didn't mean anything,\" the girl on the screen would say, and \"「There's a lot more to living than just kicks」, I see that now, kicks are nowhere.\" Carter's original cut ended with a shot of the motorcycle gang, as if they represented some reality not fully apprehended by the girl Maria played, but the cut released by the studio ended with a long dolly shot of Maria strolling across a campus. Maria preferred the studio's cut. In fact, she liked watching the picture: the girl on the screen seemed to have a definite knack for controlling her own destiny.",
    "c": [
      [
        "1",
        "Life is unpredictable and dangerous"
      ],
      [
        "2",
        "Life is a process of controlling anger"
      ],
      [
        "3",
        "Life is not all about fun"
      ],
      [
        "4",
        "Life is a process to overcome negative thinking"
      ],
      [
        "5",
        "Life is filled with little surprises"
      ]
    ],
    "a": "3",
    "explanation": "밑줄 친 문장은, “산다는 것에는 단순한 재미보다 훨씬 그 이상의 것이 있다.”라는 뜻이므로 ③의 “인생이 모두 재미인 것만은 아니다.”라는 의미로 바꾸어 쓸 수 있다."
  },
  {
    "q": "According to the passage, which of the following is true?",
    "p": "The second picture she had made with Carter was called Angel Beach, and in it she played a girl who was raped by the members of a motorcycle gang. Maria had seen it twice, once at a studio preview and a second time by herself, at a drive-in, and neither time did she have any sense that the girl on the screen was herself. \"I look at you and I know that what happened just didn't mean anything,\" the girl on the screen would say, and \"「There's a lot more to living than just kicks」, I see that now, kicks are nowhere.\" Carter's original cut ended with a shot of the motorcycle gang, as if they represented some reality not fully apprehended by the girl Maria played, but the cut released by the studio ended with a long dolly shot of Maria strolling across a campus. Maria preferred the studio's cut. In fact, she liked watching the picture: the girl on the screen seemed to have a definite knack for controlling her own destiny.",
    "c": [
      [
        "1",
        "Maria felt completely identified with the character in the film."
      ],
      [
        "2",
        "In the ending part of the studio's cut a close-up shot was used to emphasize the"
      ],
      [
        "3",
        "The girl in the original cut was not fully understood by the audience."
      ],
      [
        "4",
        "The girl in the studio's cut seemed to be more independent."
      ],
      [
        "5",
        "Maria did not like the original cut because it contained a rape scene."
      ]
    ],
    "a": "4",
    "explanation": "그녀가 카터(Carter)와 제작한 두 번째 영화는 『Angel Beach』라고 불렸고, 그 영화에서 그녀는 모터사이클 깡패들에 의해 강간당하는 한 소녀를 연기하였다. 마리아(Maria)는 그 영화를 두 번 보았고, 한 번은 제작실의 미리보기를 통해서 두 번째는 혼자서 자동차 전용 극장에서 보았는데, 어느 경우에도 화면 속의 소녀가 그녀 자신이라는 느낌을 가져본 적이 없었다. “난 너를 바라본다, 그리고 지금 막 일어난 일은 하나도 중요하지 않음을 안다. 산다는 것에는 단순한 재미보다 훨씬 그 이상의 것이 있다. 나는 지금 그것을 알게 되었고, 이 세상 어디에든 재미는 없다.”라고 화면 속의 소녀는 말하곤 했다. 카터의 최초 영화는 모터사이클 깡패들의 장면으로 끝났는데, 마치 그들이 마리아가 연기했던 소녀가 완전히는 이해하지 못했던 어떤 현실을 말해주는 것 같았다. 그러나 스튜디오에 의해 출시된 영화는 캠퍼스를 거니는 마리아의 매력적인 긴 장면으로 끝났다. 마리아는 스튜디오에서 출시된 영화를 더 좋아했다. 사실, 그녀가 그 영화를 좋아했던 것은 영화 속의 소녀가 그녀 스스로의 운명을 지배하는 확실한 요령을 가지고 있는 것처럼 보이기 때문이었다.\n\n이 글 마지막의 “영화 속의 소녀가 그녀 스스로의 운명을 지배하는 확실한 요령을 가지고 있는 것처럼 보이기 때문이었다.”라는 내용이 단서가 된다.\n\n① 어느 경우에도 화면 속의 소녀가 그녀 자신이라는 느낌을 가져본 적이 없었다고 하였다. ② 마지막 문장에서 마리아가 스튜디오에서 출시된 영화를 좋아하는 이유는 영화 속의 소녀가 그녀 스스로의 운명을 지배하는 확실한 요령을 가지고 있는 것처럼 보였다고 하였으므로 소녀의 외로움을 강조했다고 할 수 없다. ③ 본문에 이에 대한 언급이 없다. ⑤ 최초 영화와 스튜디오에서 출시된 영화는 둘 다 강간 장면을 포함하고 있었는데 마리아가 최초 영화보다 스튜디오에서 출시된 영화를 더 좋아한 이유는 영화 속의 소녀가 더 독립적으로 보였기 때문이다.\n\nrape n 강간 v 강간하다\nkick n 톡 쏘는 흥분, 재미, 활력, 원기\ndolly a 매력적인, 귀여운\nknack n 요령, 비결"
  },
  {
    "q": "The underlined expression suggests that _______.",
    "p": "The best neighbour I ever had was an Italian restaurant. Emergency lasagna available night and day, change for the launderette on Sundays, a permanent door-keeper against gatecrashers and policemen with parking tickets. Even if our fourth floor bath water did run dry every time they filled up the Expresso machine, I miss them still. Bad neighbours can blight a house worse than dry rot but there is no insurance against them, no effective barricades in the compulsory intimacy except a decent caution and conversation ruthlessly restricted to matters of meteorology. And 「it only takes a tiny breach in the wall of platitudes to unleash appalling dramas of persecution and passion」.",
    "c": [
      [
        "1",
        "showing no response makes the neighbour happy"
      ],
      [
        "2",
        "getting violent is not helpful in improving the hostile relationship"
      ],
      [
        "3",
        "watching a film together might be a good way to sort out a problem"
      ],
      [
        "4",
        "the person who takes the extreme action will succeed"
      ],
      [
        "5",
        "trivial things could escalate to the terrible rows"
      ]
    ],
    "a": "5",
    "explanation": "밑줄 친 문장의 의미는 “단조로움의 벽에 난 아주 작은 틈새만으로도 괴롭힘과 격정의 끔찍한 드라마가 시작된다.”이므로 ⑤의 “사소한 일이 끔찍한 소동으로 비화될 수 있다.”는 표현으로 바꾸어 쓸 수 있다."
  },
  {
    "q": "According to the passage, the author _______.",
    "p": "The best neighbour I ever had was an Italian restaurant. Emergency lasagna available night and day, change for the launderette on Sundays, a permanent door-keeper against gatecrashers and policemen with parking tickets. Even if our fourth floor bath water did run dry every time they filled up the Expresso machine, I miss them still. Bad neighbours can blight a house worse than dry rot but there is no insurance against them, no effective barricades in the compulsory intimacy except a decent caution and conversation ruthlessly restricted to matters of meteorology. And 「it only takes a tiny breach in the wall of platitudes to unleash appalling dramas of persecution and passion」.",
    "c": [
      [
        "1",
        "thinks that limiting conversation to weather might be a good way to deal with ba"
      ],
      [
        "2",
        "insists that people should not choose their neighbours"
      ],
      [
        "3",
        "prefers violence to debate in settling the confrontation"
      ],
      [
        "4",
        "believes that wise people should ensure full financial compensation for the dama"
      ],
      [
        "5",
        "finds the Italian neighbours unpredictable and irritating"
      ]
    ],
    "a": "1",
    "explanation": "내가 지금까지 가졌던 최고의 이웃은 한 이탈리아 식당이었다. 그곳에는 밤낮으로 이용할 수 있는 비상용 라자냐 요리, 일요일에 빨래방 갈 때 사용하기 위한 잔돈, 무전 식객과 주차 위반 딱지를 가진 경찰을 막아주는 상근 경비원이 있었다. 비록 그들이 에스프레소 기계에 물을 가득 채울 때마다 우리의 4층 욕실물이 바짝 마르기는 했지만, 나는 여전히 그들이 그립다. 나쁜 이웃들은 식물의 건부병보다도 더 집을 황폐화시킬 수 있으나 그들에 대비한 보험도 없고, 점잖은 조심과 철저하게 날씨 문제에만 국한된 대화 이외에는 강요된 친교를 막아줄 어떤 효과적인 방책도 없다. 그리고 단조로움의 벽에 난 아주 작은 틈새만으로도 괴롭힘과 격정의 끔찍한 드라마가 시작된다.\n\n“점잖은 조심과 철저하게 날씨 문제에만 국한된 대화 이외에는 강요된 친교를 막아줄 어떤 효과적인 방책도 없다.”고 하였으므로 ①이 적절하다.\n\nemergency lasagna 비상용 라자냐 요리\nlaunderette n 빨래방\ngatecrasher n 불청객, 무료 입장자\nblight v 바짝 마르게 하다, 황폐화하다, 파괴하다\ndry rot (식물의) 건부병\ncompulsory intimacy 강제적인 친교[친밀]\ncaution n 조심, 주의\nruthlessly ad 무자비하게, 잔인하게, 인정 없이\nrestricted a ~에 국한된[제한된]\nmeteorology n 기상학, 기상\nbreach n 틈[구멍]; 위반 v 돌파하다; 위반하다\nplatitude n 단조로움, 진부함, 평범함\nunleash v 풀어주다, 해방하다\npersecution n 박해, 졸라댐, 괴롭힘\npassion n 열심, 격정, 격노"
  },
  {
    "q": "Which of the following is most appropriate for the blank ⒈?",
    "p": "Computer translation systems are now in use in many parts of the world. But although the efficiency of machine translation is improving rapidly, there is no question of human translators being made redundant. On the contrary, ⒈_______. Today's computers are of little value in translating literary works, where ⒉_______ is vital, or the spoken word, which tends to be ungrammatical, or important texts, where absolute accuracy is essential. But for routine technical reports, working papers and the like, which take up so much of the translation workload of international organizations, computers are likely to play an increasing part. The method of operation will probably be for the machine to make a rough version, which the translator will then edit, correcting obvious mistakes, and where necessary referring back to the original. If machines can translate languages, could they ever teach languages? Yes, say enthusiasts, although they doubt that the teacher could ever be totally replaced by a machine in the classroom. Good old teachers know best!",
    "c": [
      [
        "1",
        "machine translation will be more successful"
      ],
      [
        "2",
        "machine translation will not be in use"
      ],
      [
        "3",
        "human translators will lose their jobs"
      ],
      [
        "4",
        "people and machines can not work in harmony"
      ],
      [
        "5",
        "people and machines can work together"
      ]
    ],
    "a": "5",
    "explanation": "컴퓨터 번역 시스템이 지금 세상의 많은 분야에서 이용되고 있다. 그러나 기계 번역의 효율성이 급속도로 향상되고 있음에도 불구하고 인간 번역가가 불필요하게 중복되고 있다는 의심은 없다. 그와는 반대로 인간과 기계가 함께 일할 수 있다. 섬세함이 중요한 경우에는 오직 인간 번역가들만이 정확한 문서 번역을 할 수 있다."
  },
  {
    "q": "Which of the following is most appropriate for the blank ⒉?",
    "p": "Computer translation systems are now in use in many parts of the world. But although the efficiency of machine translation is improving rapidly, there is no question of human translators being made redundant. On the contrary, ⒈_______. Today's computers are of little value in translating literary works, where ⒉_______ is vital, or the spoken word, which tends to be ungrammatical, or important texts, where absolute accuracy is essential. But for routine technical reports, working papers and the like, which take up so much of the translation workload of international organizations, computers are likely to play an increasing part. The method of operation will probably be for the machine to make a rough version, which the translator will then edit, correcting obvious mistakes, and where necessary referring back to the original. If machines can translate languages, could they ever teach languages? Yes, say enthusiasts, although they doubt that the teacher could ever be totally replaced by a machine in the classroom. Good old teachers know best!",
    "c": [
      [
        "1",
        "budget"
      ],
      [
        "2",
        "speed"
      ],
      [
        "3",
        "grammar"
      ],
      [
        "4",
        "subtlety"
      ],
      [
        "5",
        "inaccuracy"
      ]
    ],
    "a": "4",
    "explanation": "섬세함이 중요한 경우에는 오직 인간 번역가들만이 정확한 문서 번역을 할 수 있다는 맥락에서 빈칸 ⒉에는 ‘섬세함(subtlety)’이 적절하다."
  },
  {
    "q": "According to the passage, which of the following is true of language teachers?",
    "p": "Computer translation systems are now in use in many parts of the world. But although the efficiency of machine translation is improving rapidly, there is no question of human translators being made redundant. On the contrary, ⒈_______. Today's computers are of little value in translating literary works, where ⒉_______ is vital, or the spoken word, which tends to be ungrammatical, or important texts, where absolute accuracy is essential. But for routine technical reports, working papers and the like, which take up so much of the translation workload of international organizations, computers are likely to play an increasing part. The method of operation will probably be for the machine to make a rough version, which the translator will then edit, correcting obvious mistakes, and where necessary referring back to the original. If machines can translate languages, could they ever teach languages? Yes, say enthusiasts, although they doubt that the teacher could ever be totally replaced by a machine in the classroom. Good old teachers know best!",
    "c": [
      [
        "1",
        "They do not like computers."
      ],
      [
        "2",
        "They will never know the importance of translation."
      ],
      [
        "3",
        "They can translate languages better than machines."
      ],
      [
        "4",
        "They will not be completely replaced by machines."
      ],
      [
        "5",
        "They will be immediately replaced by machines."
      ]
    ],
    "a": "4",
    "explanation": "인간과 기계가 함께 일할 수 있다는 내용과 섬세함이 중요한 경우 인간 번역가가 필요하다는 내용으로 보아, 기계가 인간 번역가를 완전히 대체하지는 않을 것이다."
  },
  {
    "q": "What is the tone of the passage?",
    "p": "According to the advice from the travel book, the ascent of the Great Pyramid could be made in 10-15 minutes with two or three helpers. Later that afternoon I climbed the Pyramid from the north-west corner, taking the suggested ten minutes without any helper to push, pull and support me. ⒈ The easiest way is from the north-east corner, but as it is now forbidden to climb it from any corner I wanted to be out of sight of the Pyramids police station, which is situated on the edge of the plateau below the east face. ⒉ The top, truncated by the removal of the limestone, is about twelve yards square, and I was the only one on it. ⒊ The view could scarcely have been more extensive. ⒋ Across the river, below the cliffs of the Mokattam Hills, from where much of the 6,000,000 tons of stone used to build this single pyramid were quarried, were the mosques and spectacular minarets of Muslim Cairo, the largest city in Africa, and the great labyrinthine cemeteries. ⒌ Down towards the Nile, to the north of Old Cairo, was the modern city with the high buildings rising above it, not enough of them, as in Manhattan, to form groves of forests which give them an air of majesty, but in melancholy twos or threes, or completely isolated. ⒍ I was now joined by a host of 'Nagamas', members of an itinerant tribe, who had seen me climb the pyramid, and now, with their insatiable demands for money and their constant tugging at my clothing, very nearly succeeded in making me lose my temper.",
    "c": [
      [
        "1",
        "ironic"
      ],
      [
        "2",
        "informative"
      ],
      [
        "3",
        "sentimental"
      ],
      [
        "4",
        "cynical"
      ],
      [
        "5",
        "apologetic"
      ]
    ],
    "a": "2",
    "explanation": "피라미드 등반에 대한 여행기로, 장소와 풍경, 경험을 사실적으로 묘사하고 있으므로 어조는 ‘informative(정보를 제공하는)’이다."
  },
  {
    "q": "When the above passage can be divided into three paragraphs, which would be the best boundaries?",
    "p": "According to the advice from the travel book, the ascent of the Great Pyramid could be made in 10-15 minutes with two or three helpers. Later that afternoon I climbed the Pyramid from the north-west corner, taking the suggested ten minutes without any helper to push, pull and support me. ⒈ The easiest way is from the north-east corner, but as it is now forbidden to climb it from any corner I wanted to be out of sight of the Pyramids police station, which is situated on the edge of the plateau below the east face. ⒉ The top, truncated by the removal of the limestone, is about twelve yards square, and I was the only one on it. ⒊ The view could scarcely have been more extensive. ⒋ Across the river, below the cliffs of the Mokattam Hills, from where much of the 6,000,000 tons of stone used to build this single pyramid were quarried, were the mosques and spectacular minarets of Muslim Cairo, the largest city in Africa, and the great labyrinthine cemeteries. ⒌ Down towards the Nile, to the north of Old Cairo, was the modern city with the high buildings rising above it, not enough of them, as in Manhattan, to form groves of forests which give them an air of majesty, but in melancholy twos or threes, or completely isolated. ⒍ I was now joined by a host of 'Nagamas', members of an itinerant tribe, who had seen me climb the pyramid, and now, with their insatiable demands for money and their constant tugging at my clothing, very nearly succeeded in making me lose my temper.",
    "c": [
      [
        "1",
        "⒈ and ⒊"
      ],
      [
        "2",
        "⒉ and ⒌"
      ],
      [
        "3",
        "⒊ and ⒍"
      ],
      [
        "4",
        "⒋ and ⒌"
      ],
      [
        "5",
        "⒌ and ⒍"
      ]
    ],
    "a": "3",
    "explanation": "이 글을 세 단락으로 나눌 때 가장 적절한 구분은 ⒊와 ⒋이다."
  },
  {
    "q": "According to the passage, the author chose the north-west corner to climb the Pyramid because _______.",
    "p": "According to the advice from the travel book, the ascent of the Great Pyramid could be made in 10-15 minutes with two or three helpers. Later that afternoon I climbed the Pyramid from the north-west corner, taking the suggested ten minutes without any helper to push, pull and support me. ⒈ The easiest way is from the north-east corner, but as it is now forbidden to climb it from any corner I wanted to be out of sight of the Pyramids police station, which is situated on the edge of the plateau below the east face. ⒉ The top, truncated by the removal of the limestone, is about twelve yards square, and I was the only one on it. ⒊ The view could scarcely have been more extensive. ⒋ Across the river, below the cliffs of the Mokattam Hills, from where much of the 6,000,000 tons of stone used to build this single pyramid were quarried, were the mosques and spectacular minarets of Muslim Cairo, the largest city in Africa, and the great labyrinthine cemeteries. ⒌ Down towards the Nile, to the north of Old Cairo, was the modern city with the high buildings rising above it, not enough of them, as in Manhattan, to form groves of forests which give them an air of majesty, but in melancholy twos or threes, or completely isolated. ⒍ I was now joined by a host of 'Nagamas', members of an itinerant tribe, who had seen me climb the pyramid, and now, with their insatiable demands for money and their constant tugging at my clothing, very nearly succeeded in making me lose my temper.",
    "c": [
      [
        "1",
        "the travel book recommended him to do so"
      ],
      [
        "2",
        "he wanted to avoid the police"
      ],
      [
        "3",
        "he could get more helpers"
      ],
      [
        "4",
        "it provided more extensive view"
      ],
      [
        "5",
        "it was the easiest way"
      ]
    ],
    "a": "2",
    "explanation": "저자가 북서 해안을 선택한 이유는 그가 경찰을 피하기를 원했기 때문이다."
  },
  {
    "q": "According to the passage, which of the following is true?",
    "p": "According to the advice from the travel book, the ascent of the Great Pyramid could be made in 10-15 minutes with two or three helpers. Later that afternoon I climbed the Pyramid from the north-west corner, taking the suggested ten minutes without any helper to push, pull and support me. ⒈ The easiest way is from the north-east corner, but as it is now forbidden to climb it from any corner I wanted to be out of sight of the Pyramids police station, which is situated on the edge of the plateau below the east face. ⒉ The top, truncated by the removal of the limestone, is about twelve yards square, and I was the only one on it. ⒊ The view could scarcely have been more extensive. ⒋ Across the river, below the cliffs of the Mokattam Hills, from where much of the 6,000,000 tons of stone used to build this single pyramid were quarried, were the mosques and spectacular minarets of Muslim Cairo, the largest city in Africa, and the great labyrinthine cemeteries. ⒌ Down towards the Nile, to the north of Old Cairo, was the modern city with the high buildings rising above it, not enough of them, as in Manhattan, to form groves of forests which give them an air of majesty, but in melancholy twos or threes, or completely isolated. ⒍ I was now joined by a host of 'Nagamas', members of an itinerant tribe, who had seen me climb the pyramid, and now, with their insatiable demands for money and their constant tugging at my clothing, very nearly succeeded in making me lose my temper.",
    "c": [
      [
        "1",
        "The author found the information from the travel book very clear."
      ],
      [
        "2",
        "From the top the author could see burial sites."
      ],
      [
        "3",
        "The trees of Old Cairo have been replaced by quarries."
      ],
      [
        "4",
        "Modern Cairo has as much forest as Manhattan."
      ],
      [
        "5",
        "The Nagamas were kind enough to offer the author some food."
      ]
    ],
    "a": "2",
    "explanation": "“Mokattam Hills의 절벽들 밑에 아프리카에서 가장 큰 도시인 무슬림 카이로의 회교 사원들과 장대한 첨탑들 그리고 얽히고설킨 거대한 공동묘지들이 있었다.”고 했다. 따라서 저자는 꼭대기에서 매장지를 볼 수 있었다.\n\n① 여행 책자의 조언과 달리 저자는 피라미드를 올라가는 데 도우미 없이 제안된 10분의 시간이 걸렸다고 하였다. ③ 이 글에 이에 대한 언급이 없다. ④ 구 카이로의 북쪽으로 높은 건물을 가진 현대 도시가 있었는데, 그 건물들은 맨해튼에서처럼 장엄한 분위기를 주는 빌딩 숲을 형성할 정도로는 충분하지 않았다고 하였다. ⑤ Nagamas족은 친절하게도 저자에게 약간의 음식을 주었다고 하였다."
  },
  {
    "q": "The best title of the passage would be _______.",
    "p": "Food science, unfortunately, is not always dealing with what is acceptable to the public. The word 'new', such an exciting concept in other areas of advertising, causes only apprehension when applied to food. A new food? For science can open up a world of novel proteins, new methods of animal husbandry and feeding-stuffs, new crops and new meat and fish to eat. But the food trade can say no, and that is that. They know the extent to which the public attitude to food is guided by social and religious taboos, childhood conditioning, simple prejudices and preference. It is obvious that a product like hydrogenated palm and coconut and herring oil could not have achieved world-wide acceptance without a boost from the persuaders and perhaps it is there that the whole key to food acceptance lies. If it had not been for the last decade or so of brilliant advertising campaigning, how could margarine have climbed out of the hole it found itself in at the end of the war?",
    "c": [
      [
        "1",
        "Scientific Abuse of Food"
      ],
      [
        "2",
        "Marketing of Novelty Foods"
      ],
      [
        "3",
        "Cultural Food Taboos"
      ],
      [
        "4",
        "Science and New Food Alternatives"
      ],
      [
        "5",
        "Impact of Food Advertising on Public Health"
      ]
    ],
    "a": "2",
    "explanation": "이 글은 새로운 식품의 마케팅에 관한 내용이므로 ‘Marketing of Novelty Foods’가 제목으로 적절하다."
  },
  {
    "q": "According to the passage, the success of new food products depends mainly on _______.",
    "p": "Food science, unfortunately, is not always dealing with what is acceptable to the public. The word 'new', such an exciting concept in other areas of advertising, causes only apprehension when applied to food. A new food? For science can open up a world of novel proteins, new methods of animal husbandry and feeding-stuffs, new crops and new meat and fish to eat. But the food trade can say no, and that is that. They know the extent to which the public attitude to food is guided by social and religious taboos, childhood conditioning, simple prejudices and preference. It is obvious that a product like hydrogenated palm and coconut and herring oil could not have achieved world-wide acceptance without a boost from the persuaders and perhaps it is there that the whole key to food acceptance lies. If it had not been for the last decade or so of brilliant advertising campaigning, how could margarine have climbed out of the hole it found itself in at the end of the war?",
    "c": [
      [
        "1",
        "cost"
      ],
      [
        "2",
        "advertising"
      ],
      [
        "3",
        "novelty"
      ],
      [
        "4",
        "quality"
      ],
      [
        "5",
        "nutrition"
      ]
    ],
    "a": "2",
    "explanation": "이 글에 따르면, 새로운 식품의 성공은 광고에 달려있다."
  },
  {
    "q": "The underlined expression in ⒈ implies that _______.",
    "p": "⒈「The impression that more women shoplift than men may be due to publicity」. As a recent report on shoplifting pointed out: Every week, newspapers report the conviction of some middle-aged woman of blameless reputation who has stolen, for quite unexplained motives, some objects of little value which she could easily have afforded to buy. Most psychiatrists have at some point seen patients who were guilty of this sort of theft. This poses the question of whether ⒉_______ have a better chance of getting off shop-lifting charges than ⒊_______. The shops insist that they are concerned solely with whether customers have paid for the goods: their accent, class or ability to browbeat, is immaterial. But, once charged, the middle-class are undoubtedly in a better position. They are more likely to have, or call in, a solicitor; and they are financially able to risk paying legal costs. The solicitor may suggest a psychological assessment. And a 'respectable' first-time offender surely ⒋「goes into the dock」 with more chance of acquittal than someone lacking these attributes.",
    "c": [
      [
        "1",
        "more men shoplift than women"
      ],
      [
        "2",
        "more women shoplift than men"
      ],
      [
        "3",
        "the media tend to cover more female shoplifters"
      ],
      [
        "4",
        "the media tend to cover more male shoplifters"
      ],
      [
        "5",
        "more men are concerned with the motives of shoplifters"
      ]
    ],
    "a": "3",
    "explanation": "‘인상(impression)’이라고 했으므로 실제로 남자와 여자 중 어느 쪽이 가게 절도를 더 많이 하는지는 알 수 없고, 공표(publicity)는 언론 매체의 보도로 널리 알려지는 것을 말하므로, 결국 밑줄 친 부분은 언론 매체가 여성의 사례를 더 많이 보도하는 경향이 있음을 암시한다.\n\nshoplift v 가게 물건을 훔치다\npublicity n 공표, 공개, 널리 알려짐; 홍보; 명성\ncharge v 고소[고발]하다\nbrowbeat v 위협하다, 을러대다\nimmaterial a 중요하지 않은\nsolicitor n 변호사; 간청자, 강매자"
  },
  {
    "q": "Which of the following is most appropriate for the blanks ⒉ and ⒊?",
    "p": "⒈「The impression that more women shoplift than men may be due to publicity」. As a recent report on shoplifting pointed out: Every week, newspapers report the conviction of some middle-aged woman of blameless reputation who has stolen, for quite unexplained motives, some objects of little value which she could easily have afforded to buy. Most psychiatrists have at some point seen patients who were guilty of this sort of theft. This poses the question of whether ⒉_______ have a better chance of getting off shop-lifting charges than ⒊_______. The shops insist that they are concerned solely with whether customers have paid for the goods: their accent, class or ability to browbeat, is immaterial. But, once charged, the middle-class are undoubtedly in a better position. They are more likely to have, or call in, a solicitor; and they are financially able to risk paying legal costs. The solicitor may suggest a psychological assessment. And a 'respectable' first-time offender surely ⒋「goes into the dock」 with more chance of acquittal than someone lacking these attributes.",
    "c": [
      [
        "1",
        "the middle class ― the working class"
      ],
      [
        "2",
        "the working class ― the middle class"
      ],
      [
        "3",
        "men"
      ],
      [
        "4",
        "women"
      ],
      [
        "5",
        "patients"
      ]
    ],
    "a": "1",
    "explanation": "빈칸 뒤에서 중산층과 하류층의 가게 절도에 대한 처벌 가능성을 비교하는 내용이 이어지므로 ①이 맞다."
  },
  {
    "q": "The underlined expression in ⒋ means _______.",
    "p": "⒈「The impression that more women shoplift than men may be due to publicity」. As a recent report on shoplifting pointed out: Every week, newspapers report the conviction of some middle-aged woman of blameless reputation who has stolen, for quite unexplained motives, some objects of little value which she could easily have afforded to buy. Most psychiatrists have at some point seen patients who were guilty of this sort of theft. This poses the question of whether ⒉_______ have a better chance of getting off shop-lifting charges than ⒊_______. The shops insist that they are concerned solely with whether customers have paid for the goods: their accent, class or ability to browbeat, is immaterial. But, once charged, the middle-class are undoubtedly in a better position. They are more likely to have, or call in, a solicitor; and they are financially able to risk paying legal costs. The solicitor may suggest a psychological assessment. And a 'respectable' first-time offender surely ⒋「goes into the dock」 with more chance of acquittal than someone lacking these attributes.",
    "c": [
      [
        "1",
        "goes to prison"
      ],
      [
        "2",
        "is released"
      ],
      [
        "3",
        "is on trial"
      ],
      [
        "4",
        "is bankrupt"
      ],
      [
        "5",
        "gets into trouble"
      ]
    ],
    "a": "3",
    "explanation": "dock이 ‘피고석’이라는 뜻이므로 go into the dock(재판을 받다)은 be on trial(재판을 받고 있다)과 같은 뜻이다.\n\n정답 ③"
  },
  {
    "q": "The best title of the passage would be _______.",
    "p": "When the Stone of Destiny came back to Scotland, it was the culmination of a 700-year campaign to have it returned. The Stone, which is little more than a lump of rock of no great commercial value or artistic merit, is of great symbolic significance to the Scottish people, who, according to legend, could never be free while it was still being held on foreign soil. It had originally been stolen by the English King Edward I in 1296. Prior to its repatriation, it was kept in Westminster Abbey in London, where it was used during coronations of English monarchs. The return of the Stone has once again raised the question of what should be done about other national treasures held in museums and private collections abroad. Sometimes the circumstances under which an item was acquired make the decision simple; if it was stolen, it should go back. But more often than not the situation is far less straightforward. Artistic treasures may have been bought from colonial governments who had no moral right to sell them, or donated by countries that no longer exist.",
    "c": [
      [
        "1",
        "Human Destiny and Artistic Treasures"
      ],
      [
        "2",
        "Commercial Value of Cultural Treasures"
      ],
      [
        "3",
        "Political Abuse of Artistic Heritage"
      ],
      [
        "4",
        "Right to House Cultural Treasures"
      ],
      [
        "5",
        "Historical Conflict between the Scots and the English"
      ]
    ],
    "a": "4",
    "explanation": "이 글은 영국에 도둑맞았던 스코틀랜드 역사 유물의 반환을 계기로 본 문화재 반환 문제를 다루고 있으므로 ④의 ‘문화재를 소장할 권리’가 제목으로 가장 적합하다.\n\nculmination n 최고조, 최고점, 정상\nrepatriation n 본국 송환[귀]\ncoronation n 대관(식)\nmore often than not 자주, 빈번하게\nstraightforward a 똑바른, 정직한, 솔직한, 간단한"
  },
  {
    "q": "According to the passage, which of the following is true?",
    "p": "When the Stone of Destiny came back to Scotland, it was the culmination of a 700-year campaign to have it returned. The Stone, which is little more than a lump of rock of no great commercial value or artistic merit, is of great symbolic significance to the Scottish people, who, according to legend, could never be free while it was still being held on foreign soil. It had originally been stolen by the English King Edward I in 1296. Prior to its repatriation, it was kept in Westminster Abbey in London, where it was used during coronations of English monarchs. The return of the Stone has once again raised the question of what should be done about other national treasures held in museums and private collections abroad. Sometimes the circumstances under which an item was acquired make the decision simple; if it was stolen, it should go back. But more often than not the situation is far less straightforward. Artistic treasures may have been bought from colonial governments who had no moral right to sell them, or donated by countries that no longer exist.",
    "c": [
      [
        "1",
        "The Stone of Destiny was regarded valuable because of its artistic beauty."
      ],
      [
        "2",
        "The English never used the Stone of Destiny on ceremonial occasions."
      ],
      [
        "3",
        "The author believes that artistic treasures should stay where they are now."
      ],
      [
        "4",
        "The author suggests that the return of artistic treasure to its country of origi"
      ],
      [
        "5",
        "The author thinks that it is not easy to decide whether a piece of art should be"
      ]
    ],
    "a": "5",
    "explanation": "이 글에 따르면, 저자는 본국으로의 예술품 반환 여부를 결정하기가 쉽지 않다고 말한다.\n① 운명의 돌은 예술적 아름다움 때문이 아니라 역사적 상징성 때문에 가치 있는 것으로 여겨진다. ② 영국인들은 운명의 돌을 의례 행사에 사용했다. ③ 저자는 예술품들이 반드시 현재 있는 곳에 있어야 한다고 생각하지 않는다. ④ 저자는 본국으로 예술품 반환이 불가능하다고 말하지 않았다."
  },
  {
    "q": "The best title of the passage would be _______.",
    "p": "On 21 December 1988, I happened to stand with numerous reporters at Kennedy Airport in New York, watching a mother writhe in agony, out of control, on the floor of the Pan Am terminal. She had just heard, in full sight of the New York press corps, that her 21-year-old daughter's plane had crashed killing everyone on board. At least a dozen camera crews were zooming in on the grief-stricken mother. The press photographers started yelling at the television crews to get out of the way, so that they could get a better look. Their bosses would have been displeased if they'd returned to base empty-handed. Within minutes, TV images of the bereaved woman's anguish were being beamed round the world. The next day, a full-page photograph of the woman, lying undignified on the airport floor, appeared on the front page of the New York Daily News. 「The justification was that it helped convey, in human terms, the full horror of the disaster」. The editor of the Daily News maintains that, in putting the mother's photo on Page One, he wasn't exploiting her ― just doing his job as a professional 'picturing a tragedy.' For my part, I believe that _______. People in television argue that medium requires pictures, but does it have to be so all-devouring? Why this determination to show everything in pictures when a word, a glance, silence itself communicates more and better? Although many reporters at Kennedy felt uncomfortable, they went ahead to shoot the pictures. In beating the competition, they only added to the tragedy.",
    "c": [
      [
        "1",
        "Difference between Tragedy and Comedy"
      ],
      [
        "2",
        "Development of Independent Media Reports"
      ],
      [
        "3",
        "Moral Dilemma of Media Coverage"
      ],
      [
        "4",
        "How to Make a Silent Movie"
      ],
      [
        "5",
        "How to Survive in Competitive Media Coverage"
      ]
    ],
    "a": "3",
    "explanation": "이 글은 언론의 비극 보도 방식에 대한 윤리적 딜레마를 다루고 있으므로 ③의 ‘언론 보도의 도덕적 딜레마’가 제목으로 가장 적절하다."
  },
  {
    "q": "The underlined expression implies that _______.",
    "p": "On 21 December 1988, I happened to stand with numerous reporters at Kennedy Airport in New York, watching a mother writhe in agony, out of control, on the floor of the Pan Am terminal. She had just heard, in full sight of the New York press corps, that her 21-year-old daughter's plane had crashed killing everyone on board. At least a dozen camera crews were zooming in on the grief-stricken mother. The press photographers started yelling at the television crews to get out of the way, so that they could get a better look. Their bosses would have been displeased if they'd returned to base empty-handed. Within minutes, TV images of the bereaved woman's anguish were being beamed round the world. The next day, a full-page photograph of the woman, lying undignified on the airport floor, appeared on the front page of the New York Daily News. 「The justification was that it helped convey, in human terms, the full horror of the disaster」. The editor of the Daily News maintains that, in putting the mother's photo on Page One, he wasn't exploiting her ― just doing his job as a professional 'picturing a tragedy.' For my part, I believe that _______. People in television argue that medium requires pictures, but does it have to be so all-devouring? Why this determination to show everything in pictures when a word, a glance, silence itself communicates more and better? Although many reporters at Kennedy felt uncomfortable, they went ahead to shoot the pictures. In beating the competition, they only added to the tragedy.",
    "c": [
      [
        "1",
        "media coverage of human tragedy is necessary for public enlightenment"
      ],
      [
        "2",
        "showing the footage is excused only if the event was tragic"
      ],
      [
        "3",
        "the media tend to exaggerate human disasters"
      ],
      [
        "4",
        "reporting human disasters can not be justified because they only encourage horro"
      ],
      [
        "5",
        "journalists have no right to report human disasters"
      ]
    ],
    "a": "3",
    "explanation": "비극을 당한 여인에 대한 보도에서 글로만 전하지 않고 사진을 1면에 크게 실으면서 그 이유로 그렇게 하는 것이 재난의 공포를 완전히 전달하는데 도움이 되어서라고 말했다는 것은 언론매체가 재난을 전하는데 있어 적정한 수단을 선택하여 적정한 정도로 전하는 것이 아니라 좀 더 쇼킹하게(과장되게) 전하려는 경향이 있음을 암시한다.\n\nwrithe v 몸을 뒤틀다\nagony n 고통, 고민(=anguish)\nout of control 통제 불능의\npress corps 보도진\ngrief-stricken a 슬픔에 젖은, 비탄에 잠긴\nbereaved a 사별한, 유족의"
  },
  {
    "q": "Which of the following is most appropriate for the blank?",
    "p": "On 21 December 1988, I happened to stand with numerous reporters at Kennedy Airport in New York, watching a mother writhe in agony, out of control, on the floor of the Pan Am terminal. She had just heard, in full sight of the New York press corps, that her 21-year-old daughter's plane had crashed killing everyone on board. At least a dozen camera crews were zooming in on the grief-stricken mother. The press photographers started yelling at the television crews to get out of the way, so that they could get a better look. Their bosses would have been displeased if they'd returned to base empty-handed. Within minutes, TV images of the bereaved woman's anguish were being beamed round the world. The next day, a full-page photograph of the woman, lying undignified on the airport floor, appeared on the front page of the New York Daily News. 「The justification was that it helped convey, in human terms, the full horror of the disaster」. The editor of the Daily News maintains that, in putting the mother's photo on Page One, he wasn't exploiting her ― just doing his job as a professional 'picturing a tragedy.' For my part, I believe that _______. People in television argue that medium requires pictures, but does it have to be so all-devouring? Why this determination to show everything in pictures when a word, a glance, silence itself communicates more and better? Although many reporters at Kennedy felt uncomfortable, they went ahead to shoot the pictures. In beating the competition, they only added to the tragedy.",
    "c": [
      [
        "1",
        "exploiting human tragedy is an integral part of a reporter's job"
      ],
      [
        "2",
        "without pictures the story would not have been complete"
      ],
      [
        "3",
        "the reporters could have had adequate stories without the pictures of the mother"
      ],
      [
        "4",
        "the editors did not behave wrongly"
      ],
      [
        "5",
        "the editors faked the photos of the mother"
      ]
    ],
    "a": "3",
    "explanation": "빈칸 바로 앞 문장에 나오는 데일리 뉴스지 편집장의 의견과 반대되는 의견이 빈칸에 들어가야 한다. “나로서는, 그 엄마의 사진 없이도 그 기자들이 적합한 이야기를 쓸 수 있었을 거라고 믿는다.”가 적절하다."
  },
  {
    "q": "The best title of the passage would be _______.",
    "p": "Not many years after the French philosopher Rousseau promulgated the idea of the 'noble savage', which embodied his belief that man in his natural state was innately good, there walked out of the woods a living specimen who, it was hoped, would prove the point. It happened at the village of Saint-Sernin in southern France on January 9, 1800. A strange creature from the forest was caught scavenging for food, and though it appeared to be a wild animal, it walked erect. As soon as those who captured the creature realized it was human, a boy of about 12 years in fact, they attempted to care for him. The 'Wild Boy of Aveyron', as he became known, could not speak and had no apparent awareness that he was human. Offered white bread, he spat it out immediately and bit anyone who approached too close. It was time to alert the scientists. Here, apparently, was the noble savage in person. Over the next few months, attempts were made to bring the boy back into the human race. With some optimism, he was given the name Victor and he had the benefit of a patient tutor and a woman who grew to love him with a mother's devotion. But the experiments to which this poor wretch was subjected met with repeated defeat, while he longed to return to his freedom and his woods. Invited to dinner, he stole everything small enough to grab and clambered up a tree, which left the astonished guests resentful that Rousseau was not alive to see his theories disproved. But were they disproved? Theft is a transgression against a specific moral rule, but does not, in itself, denote badness if the rule has no significance for the thief. What was more telling was the fact that Victor was never able to see the world through the eyes of anyone but himself and had no capacity for empathy. He certainly learned how people could hurt, but he never learned to recognize that other people existed except as satisfiers of his need. The boy didn't prove that the primitive state was one of essential goodness, but he did prove that it was selfish. Which is not to say that it was not also innocent: the boy showed no malice or cruelty, did not seek to revenge, did not direct hostility against individuals. He was not so much ⒈_______ as ⒉_______.",
    "c": [
      [
        "1",
        "How to Distinguish Right from Wrong"
      ],
      [
        "2",
        "Importance of Human Education"
      ],
      [
        "3",
        "The Survival of the Fittest"
      ],
      [
        "4",
        "Moral Codes in the Primitive State"
      ],
      [
        "5",
        "Decline of Human Capacity for Empathy"
      ]
    ],
    "a": "4",
    "explanation": "이 글은 원시 상태에서의 도덕률에 관한 내용이므로 ④의 ‘원시 상태에서의 도덕률’이 제목으로 적절하다."
  },
  {
    "q": "According to the passage, which of the following is true?",
    "p": "Not many years after the French philosopher Rousseau promulgated the idea of the 'noble savage', which embodied his belief that man in his natural state was innately good, there walked out of the woods a living specimen who, it was hoped, would prove the point. It happened at the village of Saint-Sernin in southern France on January 9, 1800. A strange creature from the forest was caught scavenging for food, and though it appeared to be a wild animal, it walked erect. As soon as those who captured the creature realized it was human, a boy of about 12 years in fact, they attempted to care for him. The 'Wild Boy of Aveyron', as he became known, could not speak and had no apparent awareness that he was human. Offered white bread, he spat it out immediately and bit anyone who approached too close. It was time to alert the scientists. Here, apparently, was the noble savage in person. Over the next few months, attempts were made to bring the boy back into the human race. With some optimism, he was given the name Victor and he had the benefit of a patient tutor and a woman who grew to love him with a mother's devotion. But the experiments to which this poor wretch was subjected met with repeated defeat, while he longed to return to his freedom and his woods. Invited to dinner, he stole everything small enough to grab and clambered up a tree, which left the astonished guests resentful that Rousseau was not alive to see his theories disproved. But were they disproved? Theft is a transgression against a specific moral rule, but does not, in itself, denote badness if the rule has no significance for the thief. What was more telling was the fact that Victor was never able to see the world through the eyes of anyone but himself and had no capacity for empathy. He certainly learned how people could hurt, but he never learned to recognize that other people existed except as satisfiers of his need. The boy didn't prove that the primitive state was one of essential goodness, but he did prove that it was selfish. Which is not to say that it was not also innocent: the boy showed no malice or cruelty, did not seek to revenge, did not direct hostility against individuals. He was not so much ⒈_______ as ⒉_______.",
    "c": [
      [
        "1",
        "When the boy was first found, he was mistaken for the lost son of a French noble"
      ],
      [
        "2",
        "Victor was provided with proper education and motherly affection."
      ],
      [
        "3",
        "The boy's captors handed him over to the police because of his violent nature."
      ],
      [
        "4",
        "What surprised the scientists most was that the boy had a great capacity for"
      ],
      [
        "5",
        "The scientists found that the boy had been mistreated by his rescuers."
      ]
    ],
    "a": "2",
    "explanation": "Victor는 적절한 교육과 모성애를 받으며 자랐다. 프랑스 철학자 루소가 자연 상태의 인간은 선천적으로 선하다는 그의 믿음을 구체화한 ‘고귀한 야만인’의 전형이다."
  },
  {
    "q": "Which of the following is most appropriate for the blanks ⒈ and ⒉?",
    "p": "Not many years after the French philosopher Rousseau promulgated the idea of the 'noble savage', which embodied his belief that man in his natural state was innately good, there walked out of the woods a living specimen who, it was hoped, would prove the point. It happened at the village of Saint-Sernin in southern France on January 9, 1800. A strange creature from the forest was caught scavenging for food, and though it appeared to be a wild animal, it walked erect. As soon as those who captured the creature realized it was human, a boy of about 12 years in fact, they attempted to care for him. The 'Wild Boy of Aveyron', as he became known, could not speak and had no apparent awareness that he was human. Offered white bread, he spat it out immediately and bit anyone who approached too close. It was time to alert the scientists. Here, apparently, was the noble savage in person. Over the next few months, attempts were made to bring the boy back into the human race. With some optimism, he was given the name Victor and he had the benefit of a patient tutor and a woman who grew to love him with a mother's devotion. But the experiments to which this poor wretch was subjected met with repeated defeat, while he longed to return to his freedom and his woods. Invited to dinner, he stole everything small enough to grab and clambered up a tree, which left the astonished guests resentful that Rousseau was not alive to see his theories disproved. But were they disproved? Theft is a transgression against a specific moral rule, but does not, in itself, denote badness if the rule has no significance for the thief. What was more telling was the fact that Victor was never able to see the world through the eyes of anyone but himself and had no capacity for empathy. He certainly learned how people could hurt, but he never learned to recognize that other people existed except as satisfiers of his need. The boy didn't prove that the primitive state was one of essential goodness, but he did prove that it was selfish. Which is not to say that it was not also innocent: the boy showed no malice or cruelty, did not seek to revenge, did not direct hostility against individuals. He was not so much ⒈_______ as ⒉_______.",
    "c": [
      [
        "1",
        "human"
      ],
      [
        "2",
        "inhuman ― human"
      ],
      [
        "3",
        "immoral ― pre-moral"
      ],
      [
        "4",
        "pre-moral ― immoral"
      ],
      [
        "5",
        "amoral"
      ]
    ],
    "a": "3",
    "explanation": "빈칸 ⒈, ⒉에는 ‘immoral — pre-moral’이 적절하다."
  },
  {
    "q": "According to the passage, the story of Victor eventually suggests that man is innately _______.",
    "p": "Not many years after the French philosopher Rousseau promulgated the idea of the 'noble savage', which embodied his belief that man in his natural state was innately good, there walked out of the woods a living specimen who, it was hoped, would prove the point. It happened at the village of Saint-Sernin in southern France on January 9, 1800. A strange creature from the forest was caught scavenging for food, and though it appeared to be a wild animal, it walked erect. As soon as those who captured the creature realized it was human, a boy of about 12 years in fact, they attempted to care for him. The 'Wild Boy of Aveyron', as he became known, could not speak and had no apparent awareness that he was human. Offered white bread, he spat it out immediately and bit anyone who approached too close. It was time to alert the scientists. Here, apparently, was the noble savage in person. Over the next few months, attempts were made to bring the boy back into the human race. With some optimism, he was given the name Victor and he had the benefit of a patient tutor and a woman who grew to love him with a mother's devotion. But the experiments to which this poor wretch was subjected met with repeated defeat, while he longed to return to his freedom and his woods. Invited to dinner, he stole everything small enough to grab and clambered up a tree, which left the astonished guests resentful that Rousseau was not alive to see his theories disproved. But were they disproved? Theft is a transgression against a specific moral rule, but does not, in itself, denote badness if the rule has no significance for the thief. What was more telling was the fact that Victor was never able to see the world through the eyes of anyone but himself and had no capacity for empathy. He certainly learned how people could hurt, but he never learned to recognize that other people existed except as satisfiers of his need. The boy didn't prove that the primitive state was one of essential goodness, but he did prove that it was selfish. Which is not to say that it was not also innocent: the boy showed no malice or cruelty, did not seek to revenge, did not direct hostility against individuals. He was not so much ⒈_______ as ⒉_______.",
    "c": [
      [
        "1",
        "violent"
      ],
      [
        "2",
        "dishonest"
      ],
      [
        "3",
        "good"
      ],
      [
        "4",
        "evil"
      ],
      [
        "5",
        "self-centered"
      ]
    ],
    "a": "5",
    "explanation": "이 글에 따르면, Victor의 이야기는 결국 인간이 본질적으로 자기중심적(self-centered)임을 암시한다."
  },
  {
    "q": "The underlined expression implies that _______.",
    "p": "Viet Nam and Watergate greatly undermined the authority of American institutions. They encouraged people to pick and choose the parts they would play, the wars they would fight. 「At the least, they handsomely legitimized a refusal to participate at all」. This moral individualism, an old and admirable American trait, has often been balanced in the past by a sense of duty to country. That sense has chipped and faded. The U.S. has become an appallingly self-contradicting collection of tribes. Lacking an extreme threat that the majority regard as real, Americans have demonstrated an us-against-us mentality. American pluralism has become an incoherence of individualism. The nation's social vision amounts to little more than an individual passion to be comfortable and secure. If sacrifices are required, it is a painful question whether any Americans are willing to give up some of their privilege for the common good: they will certainly never do so if they think that they are sacrificing even the slightest bit more than other Americans; in a period of scarcity, the nation will become even more litigious and niggling in its collection of grievances.",
    "c": [
      [
        "1",
        "American attitudes toward the military draft have not changed since Vietnam and"
      ],
      [
        "2",
        "Americans were more willing to fight for their country after Vietnam and Waterga"
      ],
      [
        "3",
        "Vietnam and Watergate made Americans believe that they needed a common enemy"
      ],
      [
        "4",
        "Vietnam and Watergate made it more urgent for Americans to make the laws against"
      ],
      [
        "5",
        "Vietnam and Watergate made it justifiable for Americans to refuse to fight for t"
      ]
    ],
    "a": "5",
    "explanation": "베트남전과 워터게이트는 미국 기관들의 권위를 상당히 훼손하였다. 그것들은 미국인들이 자신들의 국가를 위해 싸우기를 거부하는 것을 정당화시켜 주었다.\n\n밑줄 친 표현은 “베트남과 워터게이트가 미국인들이 국가를 위해 싸우기를 거부하는 것을 정당화시켜 주었다”는 의미를 암시한다."
  },
  {
    "q": "According to the passage, the author suggests that Americans are getting more _______.",
    "p": "Viet Nam and Watergate greatly undermined the authority of American institutions. They encouraged people to pick and choose the parts they would play, the wars they would fight. 「At the least, they handsomely legitimized a refusal to participate at all」. This moral individualism, an old and admirable American trait, has often been balanced in the past by a sense of duty to country. That sense has chipped and faded. The U.S. has become an appallingly self-contradicting collection of tribes. Lacking an extreme threat that the majority regard as real, Americans have demonstrated an us-against-us mentality. American pluralism has become an incoherence of individualism. The nation's social vision amounts to little more than an individual passion to be comfortable and secure. If sacrifices are required, it is a painful question whether any Americans are willing to give up some of their privilege for the common good: they will certainly never do so if they think that they are sacrificing even the slightest bit more than other Americans; in a period of scarcity, the nation will become even more litigious and niggling in its collection of grievances.",
    "c": [
      [
        "1",
        "ambitious"
      ],
      [
        "2",
        "aggressive"
      ],
      [
        "3",
        "narrow-minded"
      ],
      [
        "4",
        "radical"
      ],
      [
        "5",
        "patriotic"
      ]
    ],
    "a": "3",
    "explanation": "이 글에 따르면, 저자는 미국인들이 편협한(narrow-minded) 태도를 가지고 있다고 암시한다."
  }
];
