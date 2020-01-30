window.addEventListener('load', renderContent);

const sections = [
  "Underlined in my copy of “The Argonauts”: \n  “the very task of" +
  " love and of language is to give to one and the same phrase inflections which will be" +
  " forever new.” \n Beside it I wrote “why I don’t believe ‘I love you’.” \n Some subsequent reader," +
  " in sky blue gel pen, agreed with me.",

  "I’m in an email thread with three friends over the summer, our vertices spanning an oblique triangle" +
  " between Oakland, Ann Arbor, and Detroit. Noon on a Tuesday I’m at the office, smashing an Excel sheet" +
  " next to the rustling grasses of the San Bruno wilderness (a hill I repeatedly tell my coworkers that I" +
  " will disappear into one day after lunch.) With a ping I receive the latest installment from the Detroit" +
  " vertex, a recap of her week of whiskey, solo concert-going, and Fleabag season 2." +
  " And then, as if it were an aside, “another nice detail of the week is that annie had a concert at her" +
  " house & j sugarman stopped by and told erika that his new thing is polyamory but he kept saying polygamy instead" +
  " of polyamory and that's all i have to say on that.”" +
  " My face goes still. I turn left and stare at the San Bruno for fifteen, reckoning. My coworker Margo catches" +
  " me dissociating into the dry anemone of that thirsty hill and attempts to throw me a buoy." +
  " “Still thinking about wandering out there, V?” She asks from across the desk.",

  "For a month or two I put air quotes around “dating” when I told people we were doing that. One of my friends eventually told me that was a terrible thing to do and I realized they were right.",

  "*Text message. 5/4/19, 4:20 AM.*  so i just woke up on the couch w josie, where we passed out a few hours ago, and" +
  " i’ve just had a string of dark dreams, like child abduction and bodies falling apart. BUT there was one good dream!," +
  " and it repeated every so often, and it was you and i climbing this big boulder by the lakeshore to do some tie dye" +
  " at the top. seemed like the sort of thing to share before falling off the grid for 6 weeks, and largely out of" +
  " e/others lives for four months.",

  "*Journal. 11/7/18.*  In Jacob’s bed, thinking in code. We were wrapped in series of lists I was modifying in loops." +
  " The most confident I have ever felt as a programmer. Lying in Jacob’s bed, writing loops of sugary lists around" +
  " us in my head. A fundamental sense of peace in patterned logic. Like the first time I caught myself thinking in" +
  " Spanish, except I don’t consider programming a part of my identity. But the only way to grasp the intimacy. Totally authentic programming.",

  "I call Jacob from my childhood bedroom to explain how I was detained at JFK, that I couldn’t drive down to Long Island" +
  " to meet his parents. My bond agreement says I can’t leave Connecticut. “You don’t have to be a part of this,” I whisper" +
  " into my phone, eyes blurring with shame. “What?” “It’s not fair, seeing someone you can’t introduce to your family.”" +
  " Silence. “I’m just endorsing a very logical out, for you,” I clarify. “Verity! I don’t want an out!” he says. “I’m committed.”",

  "*Excerpt from NEAR TO THE WILD HEART by Clarice Lispector.* There was a danger of establishing herself in suffering and" +
  " organizing herself in it, which would also be a vice and tranquilizer. What to do then? What to do to interrupt that path," +
  " grant herself an interval between her and herself, so that she could later find herself again without danger, new and pure?" +
  " What to do? The piano was deliberately attacked in strong, uniform scales. Exercises, she thought. Exercises… Yes, she discovered" +
  " amused… Why not? Why not try to love? Why not try to live?",

  " On a steamy black night in September I found myself loitering in the dying lawn of one of my writers, aglow from a bottle of" +
  " Yellowtail and some guy’s cigarette. I was laughing thinly, at nothing, when Cassie lazily spun into my line of vision, her" +
  " boots digging odd curlicues into the dirt of Dylan’s “lawn,” looping toward me with intentional nonchalance. Two lace-gloved paws" +
  " eventually land on my shoulders, and she cracks a pearly grin. Cassie’s bangs were so long at the time — that grin seemed to be the" +
  " only thing on her face. It was staring at me. “Verity. I have a silly question.” The paws lifted, untethering her, and she began to" +
  " spin off again, relieving herself from the weight of her own question. I hate that. I snatched her wrist as if to tie her on my own," +
  " to secure my balloon. “What’s up babe.” It never sounds like a question. She giggles, sparkles, and insists we need to move off the grass," +
  " a man’s-length away from the maddening crowd. My hand lightly in hers, we float kinda-sideways onto the concrete, the only spot more" +
  " parched than the lawn. We scrape our boots and air out our heads for a moment, enjoying the fuzz. She sways side-to-side, slowly, always" +
  " leading with her hands, curling into light fists. The smile returns, looking at me.",

  "Underlined in my copy of Maggie Nelson’s “Argonauts”: “They seemed to make a fetish of the unsaid, rather than simply letting" +
  " it be contained in the sayable.” Beside it I wrote “something I would change stance on daily.” I have not changed stance on this annotation.",

  "When I return from Spain I have a letter from Jacob. I drag my absurdly overweight suitcase up the full flight of stairs that delivers" +
  " one from our porch to my unit, the suitcase greeting each subsequent stair with a hollow thwack thwack thwack. At the very top I lose" +
  " control of my baggage and the suitcase shoots down the corridor like a rocket, re-thwacking all the stairs it had just greeted." +
  " Aloha. I leave its corpse at the bottom of the corridor and proceed into my apartment to find some flat champagne and read, reread that letter.",

  "One night, in bed, Jacob asks me if I have any secrets. It was a habit I had started, to be honest. Once I was too quiet in bed with Jeb and he" +
  " asked me the same, explaining that one of his current girlfriends often used it to lubricate the silence (although the mention of said girlfriend" +
  " did not help lubricate our silence). Not the first Jeb-thing I had despised in the moment and found myself recycling later. I decided my secret" +
  " that night would be making out with Cassie behind Dylan’s house. I told Jacob. About how she had asked me, and about how I couldn’t justify not" +
  " granting her a seemingly harmless experience she wanted so bad and deserved so hard and that I, seemingly, could provide in excess. About how I" +
  " was into it, physically, of course, as we all know. About how I recognized the double negatives, the mental gymnastics, the harmful untruths." +
  "“You just…” he started. “That’s just generous to an extreme.”",

  "I started this project to rail against monogamy",

  "*Excerpt from never-sent letter. 12/2/18.* I remember laying on the floor in my living room, complaining to my roommates that I did not have" +
  " the energy or confidence to talk to you, again, on my porch. They told me to put in earrings and suck it up. I took a gin shot and met you" +
  " on the porch with a six pack. Later that night (earlier that morning?) you’d compliment those earrings. Usually I push aside such remarks —" +
  " people don’t know what else to say when they’re unacquainted and naked in bed. But you said you liked them because they looked like guillotines," +
  " which I loved.",

  "I had a series of nightmares the week I had to go back to Ohio. Most of them involved cheating on Jacob.",

  "We’re sitting on the carpet of my apartment, looking as drunk as we are. Jacob has just come home with me for the first time in months." +
  " I’m pissed at him; I want him bad. My roommate’s childhood friend is visiting. The four of us are having a terrible conversation in" +
  " which Jacob and I are talking about each other at my roommate and her friend. “Verity just has this really powerful energy,” I hear" +
  " him tell my roommate. “Jacob’s hair kind of looks like the Lorax,” I tell her friend. “Verity would be a better bartender than me,” he" +
  " tells my roommate. “Look at this passage of Ulysses that reminded me so much of Jacob that I annotated his name in the margin,” I tell" +
  " her friend. I read it out loud, for everyone. “You’re a fucking lunatic,” the friend tells me.",

  "I’m walking home with Jacob. His hair is two inches longer and four colors brighter than it was the last time I was walking home with Jacob." +
  " My elbow is in his. In six or seven months he will grow comfortable requesting that I walk with him this way (“May you link me?” will be his" +
  " line, all knight-like. But tonight isn’t so gallant. It takes time.) We dumbly poke our way north talking about nothing and pause, habitually," +
  " at the teal complex on the corner of Lawrence and Division. We stare at my window, side by side. “Oh,” he says, “It’s Verity’s house.”" +
  " “Yeah,” I reply, thrown off by the third person. He’s still staring. I shuffle my feet. “I want to make it clear that I’m not pressuring you." +
  " You’re welcome to come in if you want, but only if so,” I eventually stammer. Although, knowing myself, it comes out icy and firm." +
  " “Yeah I’ll come in!” He replies. “It’s been a minute, but every time I walk by here I’ve been like ‘hey, Verity’s house.’”",

  "*Dream. 12/24/2018, 8:00 AM.* jacob sugarman jumps out of window of that dark house lit up yellow and drowns in puddle. has long hair and no beard, wearing a navy blue bathrobe w red vertical stripes",

  "I had this copy of Maggie Nelson’s “Argonauts,” the margins of which I spent a summer essentially journaling my way into queerness through. I shipped it to my cousin hours upon completion, who shipped it to our other cousin, who shipped it to their friend, who shipped it to W, X, Y, Z. Before it got too far removed from my social circle, I would get feedback — Great book, really interesting, but what I really want to talk about are your annotations, V. At that point, though, I had forgotten what I had written. This book, this catalyst and carrier of such a poignant season of my thought, has been floating around America for years.",

  "I told Jacob I didn’t want him to refer to me as his girlfriend and he said well what am I supposed to call you and I said Verity but the way I said it was verity like an unproper noun.",

  "*Journal. 7/29/2019.* Jacob Sugarman = REALLY REALLY REALLY REALLY",

  "*The excerpt of Ulysses I wrote Jacob’s name next to.* What is he playing now? Improvising intermezzo. P. S. The rum tum tum. How will you" +
  " pun? You punish me? Crooked skirt swinging, whack by. Tell me what I want to. Know. O. Course if I didn’t I would ask. La la la ree. Trails" +
  " off there sad in minor. Why minor sad? Sign H. They like sad tail at end. P. P. S. La la la ree. I feel so sad today. La ree. So lonely. Dee.",

  "I was mostly good the night of my 22nd birthday but ended up slipping into a blackout on the walk home. The moisture from the previous two days" +
  " had ossified into glinting ice. According to Natalie, I managed to stay on my heels. Jacob was the one who went down. “I startled heckling him" +
  " a little bit, when he wiped on the ice,” she told me the next morning, hungover on the couch. “But he’s so sensitive. I don’t think he took it" +
  " well. But you,” She paused to point at me with her phone. “... in the midst of your blackout, you told us all that it was your fault, somehow." +
  " It made no sense. But you knew he didn’t like it, and so you blamed it on yourself.”",

  "I met Jacob for coffee once and he brought a stack of books I had lent him a few weeks prior, said thank you they were very good. A few months later I told him I knew he hadn’t read them and he asked me how did I know and I said because the spines were so tight but what I didn’t say was that his very public return of them was a very glaring symbol of release.",

  "*Journal. 7/29/19* Smushed on BART this morning facing skateboard man with the pins in his ballcap we were so close his head was almost in my neck" +
  " when the train lurched his fingertips would brush my thigh & excite me when his head dipped toward mine I remembered how long it had been since" +
  " someone revered me as such we were so close I almost cried",

  "“I hadn’t brought it up because I just didn’t think it would be an option, with you.” We’re talking about dating, potentially. The night prior" +
  " I had made out with Emily, on top of Geoff, and Jacob did not like it. The jig is up, the news is out. “Well Jacob,” I say, measured. “I’ve spent" +
  " the past four months making myself distant enough to coexist with your polyamory.” He pauses. “I’m not polyamorous. Where did you even get that idea?”" +
  " I blink. “Natalie told me you made this proclamation, one night…” “Natalie doesn’t even know me!” he interrupts. “I’m way too self-conscious to be polyamorous!”",

  "For the record, I don’t understand polyamory. In practice. Yet? Ever? Yet.",

  "Underlined in my copy of Maggie Nelson’s “Argonauts”: “If you’re looking for sexual tidbits as a female child, and the only ones that present" +
  " themselves depict child rape or other violations, then your sexuality will form around that fact. There is no control group. I don’t even want" +
  " to talk about “female sexuality” until there is a control group. And there never will be.” Beside it I wrote “Was Colette right?” Colette is my" +
  " mother. I’m not sure what I meant by this. I thought I would have written something about the violation I had endured around the time I read it." +
  " But that’s in greater retrospect. If I were to write beside it now,,,",

  "Jacob was really stressed so I met him at Espresso Royale (the same one where he had released me with the unopened books) and he said it was because he had an Econ exam coming up and I almost flipped the table because how could he be complaining about that when I was attending meetings for a narcotics problem I didn’t have. My friend ran into us and began to vent about the plumbing that had recently exploded in her apartment and it was all I could do to not jazz hands in his face and go HA! REAL TOIL!",

  "There are a series of desperate scrawlings in my journal from when I was trying to write myself into some sustainable relation to Jacob’s presumed polyamory. The one that sticks with me, in big, untenable caps, is “AM I BEING AN AFFECTION CAPITALIST?”",

  "I’m at the café down the street staring at cups of coffee with your housemate, a sweet boy who accidentally told me too much at a bar the previous" +
  " week and needed to finish the deluge sober. He had just told me that he had no right to complain about something he had just complained about. I" +
  " told him that I once ran to you at Espresso Royale because you said you were stressed and that when you revealed it was about an exam I had nearly" +
  " flipped the table. I told him I was wrong. “It was inane to expect Jacob to evaluate his anxiety relative to one he had no radar for or on,” I said.",

  "I come to on the couch, noticing the beginnings of a paranoid hangover. I ask Natalie, flattened on the opposite arm of the sectional" +
  " (so that our feet kiss), if I did anything wrong last night. She says “nah dude” then pauses, cocks her head sideways. “Although you" +
  " and Justin were grinding together.” “Shit,” I reply, and dig out my phone from between the couch cushions. To text Jacob: “Justin is gay btw” at 9:58 AM.",

  "*Excerpt from never-sent letter. 12/2/18.* I remember telling you & Emily on the porch, that night, that I believed all of my friends should be single — that we are too young and beautiful and inexperienced to deny ourselves any opportunities. I’ve done enough logical gymnastics to dupe myself into this, but really I’m just raging against vulnerability.",

  "Whenever I lost an earring in his bed I would poke its remaining twin in the shade of his bedside floor lamp. Four or five of them" +
  " dangle there now, all varying shapes sizes hardware colors. I would fold neon plastic-paper wristbands from concerts we went to into" +
  " hearts and stab them between the earring posts and the lampshade fabric. I brought books just to watch them assimilate into his shelves." +
  " I left hats, cat ears, chapbooks, loose pages of poetry. “He has so many of my things there now,” I wrote sometime in September. “What am I trying to do, be unforgettable with materials?”",

  "I aimlessly flipped through my boyfriend’s class notes and alighted upon a scrawl: “I don’t like when Verity touches other men. This might make me Bad.” It was separated from his hypothesis testing by a malformed circle.",

  "I told Emily that Jacob didn’t mind when she and I kissed and she said she was actually quite insulted by that.",

  "*Journal. 11/5/18.* Emily basically on my lap / Later, Emily definitely on my lap / Her head resting on mine in a manner I forgot/" +
  " She’s definitely saying my name, but I forgot how / Her hand under my coat, moving down my back",

  "Geoff sat on the couch right where I had my legs propped up, heels resting on the back rest behind his head. In this manner we were perpendicular. The dialogue was a haze but Geoff looked at me and assuredly moved my legs over his head and onto his lap, implicit double Dutch, silently resting his hands on my shins. The room could feel Jacob watching. After some time he said he was going to bed but I should stay and socialize if I wanted to.",

  "I am struggling with my proximity to Jacob.",

  "Almost three years after I had lost it to the USPS, my cousin texts me “guess what I just received in the mail.” I was in class." +
  " They eventually answered their own question. “ur copy of Argonauts from 3 years ago. I’ll forward to Ann Arbor.”",

  "Jacob’s dumb freshman year band regrouped after a most-of-college hiatus to play a disgusting co-op show. I went because it was a" +
  " week after we had begun “dating.” As the set progressed, though, I watched him devolve. The mic wasn’t working, the crowd was" +
  " too drunk. Nobody could hear shit; no shit was making noise to be heard. You could see him retreating further and further into" +
  " his own head. Halfway through, I walked right up to the stage to touch his arm. He pushed the mic away and said this fucken blows" +
  " wanna get out of here. We swam our way out, single-file, my arms wrapped around his narrow hips. When we hit the sidewalk, free" +
  " from the crowd, he began to overanalyze it, to harp on the waste. We were soggy within minutes from a persistent, cold orange mist." +
  " I attempted to lighten the mood by throwing him on the lawn of some frat we happened to be strolling by. I straddled him on the" +
  " waterlogged grass, broad night light, rainwater dripping from my face to his. “Verity!” he barked, “Please! Get up! Just let me be sad!”",

  "Jacob threatens to order a pizza nearly every night but almost never follows through. We rarely share a meal that doesn’t send him into" +
  " some vague gastrointestinal pain, excepting the sushi we once ate in a Toledo, Ohio bathtub (“I didn’t know sushi could be, like, a meal”)." +
  " He once mused on the concept of chicken-fried steak to me for half an hour, then vowed to order it from every menu that so offers. He sends" +
  " me a picture each time, an indecipherable sort of meat slathered with glue-colored gravy. “This will give me pain,” he usually says.",

  "Underlined in my copy of Maggie Nelson’s “Argonauts”: “That is what reclaimed terms do — they retain, they insist on retaining a sense of the fugitive.”" +
  " Beside it I wrote “my queer.” If I were to write beside it now, I would say something like “my queer is single.”",

  "For a while there existed only one photograph of the two of us in the same frame. It’s a selfie. My face on the left, eyes puffy and gaze" +
  " tired, but fixed. Lips in a tight line, right corner frowned down ever so slightly in a few degrees of amusement. In the crook of my neck," +
  " kinda, is the back of Jacob’s head. His hair is mussed up so that a nexus of dark roots beneath his then-yellowed bleach job is splayed out." +
  " It’s arguably the focal point of the whole piece. By the collar of my shirt you can make out the lobe of his left ear. It’s a live photo. When you hold down your thumb I blink, once.",

  "The last one was this man in Brooklyn, I can’t remember his face because I never particularly saw it. There was steam in the club and he had glasses of some oval sort and liked to take me to a corner and lift me up on the counter so that I sat a bit above him while we necked (I thought that was nice, asserting one’s desire to be below. Lil paradox.). I knew he was the last one because when I woke up I felt no more important. Making copies didn’t make me feel original anymore.",

  "My growing devotion to Jacob as a function of my public physicality, some convoluted and subconscious indirect proportion; a variable of guilt.",

  "Is that loyalty? Isolating a single variable in the function of physical importance? Acknowledging a default? A constant?",

  "*An excerpt of THE ORIGINAL AND THE COPY from Flights by Olga Tokarczuk.* “A guy in the cafeteria of this one museum said that nothing" +
  " gives him such great satisfaction as being in the presence of an original artwork. He also insisted that the more copies there are in" +
  " the world, the greater the power of the original becomes, a power sometimes approaching the great might of a holy relic. For what is" +
  " singular is significant, what with the threat of destruction hanging over it as it does.” For a while, the guy in the cafeteria made me" +
  " feel like it was mathematically sound to cheat. I loved his perspective then. I love it now.",

  "I had an assignment for a graphic design class, a “fast facts” slide feathered with a portrait and a couple adjectives describing you," +
  " a couple nouns you’re particularly fond of. Jacob is reading my adjectives. “‘logical, structured, impulsive... loyal?’” He looks at me." +
  " “Natalie gave me that one,” I explain. “She knows me in a different way, I think.”",

];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function determineRandomHorizontalOffset(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function determineOffsetSide() {
  const arr = ['left', 'right'];
  return arr[Math.floor(Math.random()*arr.length)];
}

function createSection(section) {
  const node = document.createElement("p");
  // Determine offset px amount
  const offset = determineRandomHorizontalOffset(0, 450);
  // Determine whether offset is right or left
  const side = determineOffsetSide();

  // Apply styling to new paragraph tag
  node.setAttribute("style", "margin-" + side + ": " + offset + "px;");

  var text = document.createTextNode(section);
  node.appendChild(text);
  return node;
}

function renderContent(){
  var randomizedSections = shuffle(sections);

  var i;
  for (i = 0; i < randomizedSections.length; i++) {
    const section = createSection(randomizedSections[i]);
    document.getElementById("pile").appendChild(section);
  }
}
