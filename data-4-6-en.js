// Ages 4–6 · Scribble Stage → Pre-Schematic Stage → Early Schematic Stage (Lowenfeld Stages 1–3)
// Core Theory: Reggio Emilia + Lowenfeld Natural Development
// Three-year program, four terms per year, 13 lessons per term, 156 lessons total
const DATA_4_6_EN = {
  name: "Little Doodlers",
  icon: "🖍️",
  color: "#D32F2F",
  theory: "Reggio Emilia + Lowenfeld Scribble → Pre-Schematic Stage",
  goals: [
    "【Developmental Stages】Respect the natural progression from scribbling to pre-schematic to early schematic — never rush toward realism",
    "【Sensory Exploration】Build rich material awareness through multi-sensory experiences — touch, sight, sound, and smell",
    "【Hundred Languages】Encourage children to express ideas through drawing, clay, collage, movement, and more",
    "【Environment as Teacher】Use natural materials and everyday settings to spark creative inspiration",
    "【Emotional Expression】Prioritize process over product — let children feel safe to express and delight in creating",
    "【Building Toward Growth】Three years of intentional development lays a solid foundation for the schematic-stage deepening in the 7–9 class"
  ],
  terms: {
    "y1-fall": {
      name: "Year 1 · Fall · Sensory Garden",
      weeks: [
        { title: "Colors Have Temperature", theme: "Multi-Sensory Color", slides: [
          "🎯 Learning Goal: Perceive warm and cool colors through touch and sound (multi-sensory exploration)",
          "🖐️ Sensory Game: Touch ice cubes vs. a warm water bottle; listen to Vivaldi's Four Seasons and choose color cards",
          "🖼️ Art Appreciation: Monet's Water Lilies vs. Van Gogh's Sunflowers — exploring warm and cool contrast",
          "🧪 Color Magic: Red + Yellow = warm family; Blue + White = cool family",
          "🎨 Create: Finger painting 'A World of Warm and Cool' — warm colors on the left, cool on the right, blending in the middle",
          "📌 Theory Note: Reggio Emilia — children have a hundred languages; multi-sensory experience is the doorway to learning"
        ]},
        { title: "A Line Goes for a Walk", theme: "Movement and Line", slides: [
          "🎯 Learning Goal: Understand line through whole-body movement (kinesthetic learning)",
          "🏃 Warm-Up: Walk straight lines, curved lines, and zigzag lines on the floor",
          "📖 Picture Book Inspiration: Lines have personalities — fast ones, slow ones, wiggly ones, straight ones",
          "🎨 Big Paper: Stand up to draw, let the whole arm drive the line",
          "✏️ Free Exploration: Try thick crayons, thin watercolor brushes, and cotton swabs to make different lines",
          "📌 Theory Note: Lowenfeld — lines in the scribble stage are traces of muscle movement, not depictions"
        ]},
        { title: "My Color Diary", theme: "Emotional Color", slides: [
          "🎯 Learning Goal: Use color to express feelings (emotional expression comes before form)",
          "💬 Circle Time: How are you feeling today? What color does that feel like?",
          "🧪 Mixing Experiment: Red + Yellow = ? Red + Blue = ? Mix freely and see",
          "✏️ Create: Fill in today's color on a 'Mood Card'",
          "🗂️ Start a Color Diary (add a page each week)",
          "📌 Theory Note: Lowenfeld — at this stage, color choices reflect emotion rather than reality"
        ]},
        { title: "Secrets of the Leaf", theme: "Natural Materials", slides: [
          "🎯 Learning Goal: Make art with natural objects (Reggio Emilia — environment as teacher)",
          "🌿 Outdoor Gathering: Collect leaves, twigs, and flower petals (15 minutes)",
          "👀 Observation Station: Use a magnifying glass to study leaf veins; feel different textures",
          "🎨 Creation Choices: Leaf rubbing / collage / pressing into clay",
          "💬 Share: What secret did your leaf tell you?",
          "📌 Theory Note: Reggio Emilia — the natural environment is the finest classroom"
        ]},
        { title: "The Shape of Sound", theme: "Cross-Sensory Experience", slides: [
          "🎯 Learning Goal: Draw to music (STEAM — art + music)",
          "🎵 Listen: Three contrasting musical pieces (gentle / upbeat / intense)",
          "💬 Discuss: Does this sound feel round or sharp?",
          "🎨 Create: Draw while the music plays — don't draw anything specific",
          "🔄 Compare: How are everyone's drawings different across the three pieces?",
          "📌 Theory Note: STEAM — the neural pathways for art and music spark each other"
        ]},
        { title: "The Circle Family", theme: "Shape Exploration", slides: [
          "🎯 Learning Goal: Find circles in scribbles and give them meaning (transition into pre-schematic stage)",
          "🔍 Treasure Hunt: Find every circular object in the classroom",
          "📖 Story: A circle goes on a journey and meets an apple, a sun, a face…",
          "🎨 Create: Turn circle stickers into all kinds of things",
          "💬 Each child shares: My circle became ____",
          "📌 Theory Note: Lowenfeld — in the pre-schematic stage, children begin to assign meaning to their marks"
        ]},
        { title: "A Hundred Possibilities for Clay", theme: "Three-Dimensional Perception", slides: [
          "🎯 Learning Goal: Explore three-dimensional form through clay (hundred languages)",
          "🖐️ Free Play: Roll, coil, pinch, pat, and poke the clay (5 minutes of pure exploration)",
          "🎨 Challenge: Make something 'soft and squishy' out of clay",
          "✏️ Create: Open theme — reference real objects if you like",
          "💬 Share: What did you make, and why did you choose it?",
          "📌 Theory Note: Reggio Emilia — clay is another language for children"
        ]},
        { title: "Shadow Theater", theme: "Light and Shadow Play", slides: [
          "🎯 Learning Goal: Understand shape through light and shadow (STEAM — science + art)",
          "💡 Experiment: Shine a flashlight on different objects and observe the shadow shapes",
          "🎮 Game: Make shadow animals with your hands",
          "🎨 Create: Draw shadows using white crayon on black paper",
          "🔬 Think: Why are shadows black?",
          "📌 Theory Note: STEAM — light and shadow are a natural bridge between science and art"
        ]},
        { title: "A Great Big Me", theme: "Self-Awareness", slides: [
          "🎯 Learning Goal: Draw a self-portrait and develop self-awareness (pre-schematic stage — figure schema)",
          "🪞 Look in the Mirror: Take a good look at yourself",
          "💬 Discuss: What do you look like? (Don't correct proportions)",
          "🎨 Create: Use a full large sheet of paper to draw a great big you",
          "🌟 A very large head means the head is very important — and that's completely right",
          "📌 Theory Note: Lowenfeld — in the pre-schematic stage, proportions reflect psychological importance"
        ]},
        { title: "The Materials Buffet", theme: "Self-Directed Choice", slides: [
          "🎯 Learning Goal: Choose materials independently and create (Reggio Emilia — respecting agency)",
          "🧰 Materials Station: Crayons / watercolor / clay / collage paper / yarn / natural objects",
          "📋 Task Card: 'Make something that makes you happy'",
          "🎨 Completely open-ended creation (25 minutes)",
          "💬 Gallery Walk: Look at each other's work and say what you like",
          "📌 Theory Note: Reggio Emilia — the power to choose is the foundation of creativity"
        ]},
        { title: "Our Big Painting", theme: "Collaborative Creation", slides: [
          "🎯 Learning Goal: Complete a large-scale work together (Reggio Emilia — collaboration)",
          "📋 Vote: What should we paint together? Underwater / forest / city",
          "🎨 Divide Roles: Each person is responsible for one part",
          "✏️ Work together on a large canvas",
          "💬 Reflect: What section did you paint? How does everyone's work connect?",
          "📌 Theory Note: Reggio Emilia — collaborative learning builds a sense of community"
        ]},
        { title: "Autumn Puzzle", theme: "Seasonal Awareness", slides: [
          "🎯 Learning Goal: Compose an autumn story using natural objects",
          "🍂 Collect: Fallen leaves, pine cones, seeds, dried flowers",
          "🎨 Arrange the objects on a large sheet of paper to create an autumn scene",
          "📷 Photograph it before taking it apart to play with again",
          "💬 What is in your autumn story?",
          "📌 Theory Note: Reggio Emilia — the process is the learning; don't be attached to a permanent product"
        ]},
        { title: "My Little Exhibition", theme: "Term Review", slides: [
          "🎯 Learning Goal: Choose work and mount a display (Reggio Emilia — documentation and exhibition)",
          "🗂️ Review: Look back through everything created this term",
          "✅ Each child chooses their 3 favorite pieces (practicing self-assessment)",
          "🖼️ Post everything together on the display wall",
          "🎤 Gallery Tour: Show parents around and talk about your work",
          "📌 Theory Note: Reggio Emilia — making learning visible through display"
        ]}
      ]
    },
    "y1-winter": {
      name: "Year 1 · Winter · Winter Magic",
      weeks: [
        { title: "The Shape of Snowflakes", theme: "Symmetry and Nature", slides: [
          "🎯 Learning Goal: Observe the symmetrical structure of snowflakes (STEAM — math + nature)",
          "🔍 Observe: Snowflake photos — they all have six sides! Why?",
          "✂️ Craft: Fold and cut paper snowflakes",
          "🎨 Create: Draw snowflakes on blue paper using white crayon",
          "💬 Discuss: What does symmetry mean?",
          "📌 Theory Note: STEAM — the mathematics of nature, discovered through snowflakes"
        ]},
        { title: "Warm, Warm Colors", theme: "Warm and Cool Colors", slides: [
          "🎯 Learning Goal: Feel the emotional difference between warm and cool colors",
          "🖐️ Experience: Warm color cards = sun / fire; cool color cards = ice / ocean",
          "🎨 Experiment: Use warm colors to paint 'A Cozy Warm Bed'",
          "✏️ Contrast: Then use cool colors to paint 'A Winter Wind'",
          "💬 Discuss: When you're cold, what color do you want around you?",
          "📌 Theory Note: The first stirrings of color psychology — connecting color with bodily sensation"
        ]},
        { title: "The Art of Ice", theme: "Water and Change", slides: [
          "🎯 Learning Goal: Observe ice forming and melting (STEAM — states of matter)",
          "🧪 Experiment: Freeze colored-paint ice cubes and watch them melt onto paper",
          "🎨 Create: The trail left behind as ice glides across paper",
          "🔬 Think: What happened when water turned into ice? What about ice turning back to water?",
          "💬 Record: Draw the process of ice melting",
          "📌 Theory Note: STEAM — changes of state are science and art material all at once"
        ]},
        { title: "Winter Trees", theme: "Observation and Simplification", slides: [
          "🎯 Learning Goal: Observe the distinctive features of winter trees",
          "🌳 Observe: Winter trees have no leaves — only branches. What do they look like?",
          "🎨 Demonstration: Use lines to draw the forking branches",
          "✏️ Create: Draw the winter tree outside your window",
          "💬 Discuss: It's the same tree — what's different between summer and winter?",
          "📌 Theory Note: Training observation — the changing seasons are nature's finest classroom"
        ]},
        { title: "Mittens and Scarves", theme: "Decorative Design", slides: [
          "🎯 Learning Goal: Create decorative patterns on a template shape",
          "📖 Warm-Up: What's your favorite mitten or scarf look like?",
          "🎨 Template: Freely decorate a mitten- or scarf-shaped piece of paper",
          "✏️ Use dots, lines, circles, and other basic elements to build patterns",
          "🌟 Display: Try on your custom accessories!",
          "📌 Theory Note: Decoration is one of humanity's oldest art forms"
        ]},
        { title: "Lanterns and New Year Paintings", theme: "Traditional Culture", slides: [
          "🎯 Learning Goal: Explore the visual elements of Lunar New Year (cultural enrichment)",
          "📖 Story: Why is the New Year all about the color red?",
          "🎨 Craft: Make a simple red-paper lantern",
          "✏️ Create: Paint your own imaginary New Year picture",
          "🌟 Display: Hang up our lanterns!",
          "📌 Theory Note: Cultural heritage — traditional festivals are natural material for arts education"
        ]},
        { title: "Animals in Winter", theme: "Animal Theme", slides: [
          "🎯 Learning Goal: Use imagination to draw animals hibernating",
          "📖 Story: Bear is going to sleep; squirrel is storing nuts",
          "💬 Discuss: If you were an animal, what would your winter den look like?",
          "🎨 Create: Draw a cozy winter home for an animal",
          "🌟 Key Message: Imagination matters more than getting it 'right'",
          "📌 Theory Note: Lowenfeld — in the pre-schematic stage, imagination compensates for limited observation. This is perfectly normal"
        ]},
        { title: "Paper-Cut Window Flowers", theme: "Symmetry Craft", slides: [
          "🎯 Learning Goal: Practice folding and cutting (fine motor skills + symmetry)",
          "✂️ Basics: Fold in half → cut → unfold = a symmetrical pattern!",
          "🎨 Next Level: Fold in quarters or eighths for more complex paper cuts",
          "💬 Discover: However many folds, that's how many repeated sections",
          "🖼️ Stick them on the window and see the light shine through",
          "📌 Theory Note: STEAM — symmetry and repetition in paper cutting are intuitive encounters with mathematical concepts"
        ]},
        { title: "A Warm Gift", theme: "Mixed-Media Craft", slides: [
          "🎯 Learning Goal: Make a gift for a family member (emotional expression)",
          "💬 Discuss: Who would you like to give to? What do they love?",
          "🎨 Choose: Draw a picture / make a clay piece / create a card",
          "✏️ Creation time",
          "💌 Wrap It: Learn a simple way to wrap a gift",
          "📌 Theory Note: Reggio Emilia — art is a bridge for communicating feelings"
        ]},
        { title: "The Magic of Black and White", theme: "Light and Dark Contrast", slides: [
          "🎯 Learning Goal: Explore artistic expression in black and white",
          "🎨 Only use black ink and white paint",
          "✏️ Experiment: Draw white on black paper / draw black on white paper",
          "💬 Which feels more powerful?",
          "🌟 Appreciate: The bold contrasts in paper-cut art and woodblock prints",
          "📌 Theory Note: The principle of contrast — black and white are the most powerful visual contrast of all"
        ]},
        { title: "City on Paper", theme: "Spatial Imagination", slides: [
          "🎯 Learning Goal: Imagine and draw a city (first exploration of spatial layout)",
          "💬 What does your city have? Houses / roads / parks",
          "🎨 On a big sheet of paper, draw your dream city",
          "✏️ Add the people and animals who live there",
          "🗺️ Give your city a name",
          "📌 Theory Note: The seedling of spatial awareness — how children understand and express their environment"
        ]},
        { title: "A Universe of Fingerprints", theme: "Body Marks", slides: [
          "🎯 Learning Goal: Create unique patterns using fingerprints",
          "🖐️ Discovery: Everyone's fingerprints are different!",
          "🎨 Dip your thumb, index finger, and pinky in paint and press them onto paper",
          "✏️ Turn the fingerprints into tiny animals, people, and flowers",
          "💬 What lives in your fingerprint universe?",
          "📌 Theory Note: Reggio Emilia — every child is unique, right down to their fingerprints"
        ]},
        { title: "Winter Gallery", theme: "Term Review", slides: [
          "🎯 Learning Goal: Reflect on the winter term and share artwork",
          "📖 Review: What did we make this winter?",
          "✅ Each child chooses 2 winter pieces they're most proud of",
          "🖼️ Arrange the winter display wall",
          "🎤 Each child shares their favorite lesson",
          "📌 Theory Note: Regular reflection helps children build a sense of time and personal growth"
        ]}
      ]
    },
    "y1-spring": {
      name: "Year 1 · Spring · A Hundred Languages",
      weeks: [
        { title: "The Smell of Spring", theme: "Synesthetic Creation", slides: [
          "🎯 Learning Goal: Cross-sensory experience — smell something and draw it",
          "👃 Smell It: Flowers, earth, fruit, mint",
          "💬 Discuss: What color or shape does this smell feel like?",
          "🎨 Create: Choose one scent and draw what it looks like",
          "🌟 No right or wrong: Everyone smells a different color",
          "📌 Theory Note: Reggio Emilia — synesthetic experience activates diverse forms of expression"
        ]},
        { title: "Colors Have Babies", theme: "Color-Mixing Experiment", slides: [
          "🎯 Learning Goal: Understand color mixing through experimentation (STEAM)",
          "🧪 Hypothesis: What will red + blue make? Guess first!",
          "🔬 Experiment: Mix colors by hand and record the results",
          "📊 Create a 'Color Map'",
          "🎨 Paint a picture using only the new colors you've mixed",
          "📌 Theory Note: STEAM — hypothesis → experiment → record; the scientific method woven into art"
        ]},
        { title: "If I Were a Tree", theme: "Imagination", slides: [
          "🎯 Learning Goal: Role-play to spark imagination (Reggio Emilia — project-based inquiry)",
          "🧘 Imagine: Close your eyes. You are a tree. What do you look like?",
          "💬 Share: Where do you live? Who comes to visit you?",
          "🎨 Create: Draw or build your tree",
          "🌳 Put all the trees together to make a forest",
          "📌 Theory Note: Reggio Emilia — role-play helps children understand the world from different perspectives"
        ]},
        { title: "Paper Transformations", theme: "Material Exploration", slides: [
          "🎯 Learning Goal: Discover what paper can do (one material, many possibilities)",
          "✂️ Experiment: Paper can be folded, torn, scrunched, rolled, cut, and woven",
          "🔍 Observe: How does each technique change the paper?",
          "🎨 Create: Make a work of art using only paper",
          "💬 Share: Which techniques did you use?",
          "📌 Theory Note: Reggio Emilia — limiting the materials often sparks more creativity"
        ]},
        { title: "My Home", theme: "Symbolic Expression", slides: [
          "🎯 Learning Goal: Draw 'My Home' and observe schema development",
          "💬 Tell me what's in your home",
          "🎨 Create: Draw your home and your family",
          "👀 Teacher observes each child's personal schema development",
          "🌟 Every child's 'home' is unique",
          "📌 Theory Note: Lowenfeld — individual schemas begin to solidify during the pre-schematic stage"
        ]},
        { title: "A Water Journey (Part 1)", theme: "Project-Based Inquiry", slides: [
          "🎯 Learning Goal: Track the changing forms of water (Reggio Emilia long-term project)",
          "🔬 Experiment: What happens when water is poured onto different surfaces?",
          "🎨 Record: Draw water in different places",
          "💬 Question: What else can water become?",
          "📷 Begin the 'Water Journey' project wall",
          "📌 Theory Note: Reggio Emilia — long-term projects allow inquiry to go deeper"
        ]},
        { title: "A Water Journey (Part 2)", theme: "Project-Based Inquiry Continued", slides: [
          "🎯 Learning Goal: Continue exploring water through art",
          "❄️ Experience: Observe and draw ice cubes as they melt",
          "🎨 Paint 'A Water Story' using a range of blues",
          "💧 Drop water on rice paper → a first taste of ink painting",
          "🗂️ Update the project wall with new discoveries",
          "📌 Theory Note: Reggio Emilia — revisit the same theme through different media"
        ]},
        { title: "The Emotion Museum", theme: "Emotional Awareness", slides: [
          "🎯 Learning Goal: Recognize and express emotions through art",
          "🎭 Game: Make happy / sad / angry / surprised faces",
          "📖 Simple Appreciation: How do artists paint different emotions?",
          "🎨 Create: Draw four emotion faces (paper plates or drawing paper)",
          "💬 Discuss: When do you make this face?",
          "📌 Theory Note: DBAE Introduction — beginning to explore the 'appreciation' dimension"
        ]},
        { title: "The Magic of Light and Color", theme: "Color Science", slides: [
          "🎯 Learning Goal: Explore color mixing with transparent materials (STEAM)",
          "🔬 Experiment: Overlap colored cellophane in front of a light source",
          "💬 Discovery: Red + blue light = purple!",
          "🎨 Create: A 'Stained Glass Window' collage with colored cellophane",
          "☀️ Stick it on the window and watch the sunlight come through",
          "📌 Theory Note: STEAM — additive color mixing vs. subtractive color mixing"
        ]},
        { title: "A Home for an Animal", theme: "Design and Build", slides: [
          "🎯 Learning Goal: Design a home for an animal (STEAM — engineering introduction)",
          "💬 Discuss: What does a bird / fish / rabbit need in a home?",
          "🧰 Materials: Cardboard boxes, twigs, clay, colored paper",
          "🎨 Draw a design plan before building",
          "🌟 Test: Can the animal fit inside?",
          "📌 Theory Note: STEAM — need → design → build → test"
        ]},
        { title: "A Portrait of Mom", theme: "People and Emotion", slides: [
          "🎯 Learning Goal: Paint a family member and deepen figure schema expression",
          "💬 What is Mom's favorite color? What does she look like when she laughs?",
          "🎨 Paint a portrait of Mom + write or draw something you want to say to her",
          "🌟 Teacher observes figure schema development",
          "💌 Turn it into a card to bring home",
          "📌 Theory Note: Lowenfeld — pre-schematic figure drawing carries strong emotional projection"
        ]},
        { title: "Rainbow Lab", theme: "Light and Color Science", slides: [
          "🎯 Learning Goal: Create a rainbow through experimentation (STEAM — introduction to optics)",
          "🔬 Experiment: Use water, a mirror, and a flashlight to make a rainbow",
          "🌈 Observe: How many colors are in a rainbow? What order are they in?",
          "🎨 Create: Draw your rainbow experiment notes",
          "💬 Why do rainbows appear after rain?",
          "📌 Theory Note: STEAM — refraction is a physics phenomenon; a rainbow is nature's art"
        ]},
        { title: "Young Curators", theme: "Spring Review", slides: [
          "🎯 Learning Goal: Choose and display your own work",
          "🗂️ Look back at everything made this term",
          "✅ Each child selects their 3 favorites",
          "🖼️ Mount the display and add a drawn caption next to each piece",
          "🎤 Lead a gallery tour for parents",
          "📌 Theory Note: Reggio Emilia — documentation and display make learning visible"
        ]}
      ]
    },
    "y1-summer": {
      name: "Year 1 · Summer · Nature Artists",
      weeks: [
        { title: "Earth Art", theme: "Outdoor Creation", slides: [
          "🎯 Learning Goal: Create art outdoors using natural materials",
          "🌿 Collect: Stones, twigs, flower petals, leaves",
          "🎨 Arrange them on the ground into patterns (land art)",
          "📷 Photograph it quickly — the wind will blow it away!",
          "💬 Discuss: Does art have to last forever?",
          "📌 Theory Note: Reggio Emilia — process matters more than product"
        ]},
        { title: "Paint Adventure", theme: "Material Experiments", slides: [
          "🎯 Learning Goal: Boldly explore different paint effects",
          "🧪 Experiment Stations: Blow painting / marble rolling / bubble printing / stamp printing",
          "🔍 How is each method different?",
          "🎨 Choose one method to make a large painting",
          "💬 Which method did you like best? Why?",
          "📌 Theory Note: Lowenfeld — process-oriented exploration supports creative development"
        ]},
        { title: "The Architect Game", theme: "Three-Dimensional Building", slides: [
          "🎯 Learning Goal: Build a three-dimensional structure (STEAM — engineering + art)",
          "🧱 Materials: Cardboard boxes, paper cups, tape, colored paper",
          "📐 Challenge: Build the tallest tower!",
          "🎨 Paint your building",
          "🔬 Does it stand up? How can you make it more stable?",
          "📌 Theory Note: STEAM — intuitive understanding of structure, balance, and gravity"
        ]},
        { title: "Sand Art and Water Art", theme: "Temporary Art", slides: [
          "🎯 Learning Goal: Experience 'art that disappears'",
          "🏖️ Draw in sand or draw on the ground with water",
          "📷 Quick — photograph it! It's fading!",
          "💬 Discuss: Is it still art if it disappears?",
          "🎨 Draw on paper the image that stays in your memory",
          "📌 Theory Note: The value of process — not all art needs to be preserved forever"
        ]},
        { title: "The World of Bugs", theme: "Micro Observation", slides: [
          "🎯 Learning Goal: Observe small creatures and draw them",
          "🔍 Outside: Hunt for insects using a magnifying glass",
          "📖 Observe: How many legs does it have? What color is it? How does it move?",
          "🎨 Create: Draw the creature you observed",
          "💬 Draw it big, and add imagined details if you like",
          "📌 Theory Note: Observation is the foundation of drawing — cultivate it from an early age"
        ]},
        { title: "Colorful Bubbles", theme: "STEAM Experiment", slides: [
          "🎯 Learning Goal: Bubble painting experiment (science + art)",
          "🧪 Add paint to bubble solution",
          "🎨 Blow bubbles onto paper — when they pop, they leave colorful marks",
          "🔬 Why are bubbles round? Why do they have color?",
          "💬 Share your bubble print artwork",
          "📌 Theory Note: STEAM — surface tension and light interference, experienced through art"
        ]},
        { title: "Round-Robin Story Drawing", theme: "Collaborative Storytelling", slides: [
          "🎯 Learning Goal: Tell a story together by drawing it",
          "📖 Rules: The first person draws the beginning → passes it to the next person to continue",
          "🎨 Relay creation: Each person draws for 2 minutes, then passes it on",
          "🌟 Unfold it and see: What has our story become!",
          "🎤 Together, make up an ending",
          "📌 Theory Note: Reggio Emilia — collaborative creation builds social skills"
        ]},
        { title: "Rock Transformations", theme: "Stone Painting", slides: [
          "🎯 Learning Goal: Paint on stones (creating on a three-dimensional surface)",
          "🪨 Outside: Find smooth stones",
          "🎨 Paint on them with acrylic paint",
          "💬 What can your stone become? An animal / food / a planet?",
          "🌟 Place your stone somewhere interesting and photograph it",
          "📌 Theory Note: Reggio Emilia — creating on non-traditional surfaces breaks habitual thinking"
        ]},
        { title: "Music Garden", theme: "Natural Instruments", slides: [
          "🎯 Learning Goal: Make instruments from natural materials and play them (integrated arts)",
          "🎵 Use stones, twigs, seeds, and shells to make percussion instruments",
          "🎶 Play our nature orchestra together",
          "🎨 Draw while playing — what color does the music become?",
          "💬 How is the sound of nature different from a made instrument?",
          "📌 Theory Note: Hundred Languages — the meeting of music and visual art"
        ]},
        { title: "My Summer Story", theme: "Narrative Drawing", slides: [
          "🎯 Learning Goal: Draw a picture that tells a story (narrative skills + schema development)",
          "💬 What was the most fun thing you did this summer?",
          "🎨 Turn that memory into a painting",
          "📝 Teacher records the story: This painting is about…",
          "🖼️ Display: Tell us about it",
          "📌 Theory Note: Lowenfeld — meaningful schemas are an important marker of the pre-schematic stage"
        ]},
        { title: "The Big Color Mix Challenge", theme: "Advanced Color Exploration", slides: [
          "🎯 Learning Goal: Explore even more mixing possibilities (summer summary experiment)",
          "🧪 Challenge: Use only the three primary colors to mix as many colors as possible",
          "📊 Record what you've made on a color wheel",
          "🎨 Paint a summer scene using the colors you've mixed",
          "💬 Which color was hardest to mix? Which was the most beautiful?",
          "📌 Theory Note: STEAM — the three primary colors are the code that unlocks the whole world of color"
        ]},
        { title: "My Art Book", theme: "Year 1 Summary", slides: [
          "🎯 Learning Goal: Collect and organize work from the year and witness growth",
          "📒 Bind the best pieces from this school year into a book",
          "✏️ Add a drawn or spoken caption beside each piece",
          "🎤 Flip through and tell your art story",
          "🏆 Everyone is a little artist!",
          "📌 Theory Note: Reggio Emilia — documentation makes learning visible and growth tangible"
        ]},
        { title: "Moving Up Show", theme: "One Year of Growth", slides: [
          "🎯 Learning Goal: Compare first and last work; feel growth (early metacognition)",
          "📖 Look at your very first lesson's work: What did you draw then?",
          "🔄 Draw 'A Great Big Me' again and compare it with the very first one",
          "💬 What do you think you've improved?",
          "🌟 Say something to next year's version of yourself",
          "📌 Theory Note: Growth is visible — and that is the power of an art portfolio"
        ]}
      ]
    },
    "y2-fall": {
      name: "Year 2 · Fall · My World",
      weeks: [
        { title: "I've Grown Up!", theme: "Growth Comparison", slides: [
          "🎯 Learning Goal: Compare Year 1 work with now (early metacognition)",
          "📖 Look Back: Revisit last year's artwork",
          "💬 Discuss: What do you notice has changed in your drawings?",
          "🎨 Create: Draw 'A Great Big Me' again",
          "🔄 Compare: Last year's me vs. this year's me",
          "📌 Theory Note: The starting point of reflective thinking — seeing your own change"
        ]},
        { title: "My Favorite Place", theme: "Spatial Memory", slides: [
          "🎯 Learning Goal: Draw a space from memory (spatial expression in the schematic stage)",
          "💬 Where is your favorite place to be? Your bedroom? The park?",
          "🎨 Create: Draw that place",
          "💬 Share: Why do you love it there?",
          "🌟 Notice how each child represents spatial relationships",
          "📌 Theory Note: Lowenfeld — spatial expression gradually develops through the pre-schematic to schematic transition"
        ]},
        { title: "A Portrait of My Best Friend", theme: "Observational Figure Drawing", slides: [
          "🎯 Learning Goal: Draw a friend and practice observing other people",
          "💬 Describe your best friend. What do they look like?",
          "👀 Sit face to face and observe your friend's features",
          "🎨 Create: Draw your best friend",
          "🎤 Exchange portraits: This is how I see you!",
          "📌 Theory Note: Observing others is both social and artistic development happening at once"
        ]},
        { title: "A Story in Colors", theme: "Color Narratives", slides: [
          "🎯 Learning Goal: Tell a story using a limited palette",
          "📖 Challenge: Paint using only 3 colors",
          "💬 Why did you choose these 3? What feeling do they give you?",
          "🎨 Create: Use those 3 colors to paint a scene",
          "🌟 Constraints = creativity — less is more",
          "📌 Theory Note: Limitations often unlock creativity"
        ]},
        { title: "The Amazing Continuous Line", theme: "Line Control", slides: [
          "🎯 Learning Goal: Draw a picture without lifting the pen (advanced fine motor skills)",
          "🎨 Demonstration: Without lifting the pen, draw a cat in one continuous line",
          "✏️ Practice: Start with simple loops and gradually make them more complex",
          "🎨 Challenge: Draw your best friend in a single line",
          "💬 So hard! But so fun!",
          "📌 Theory Note: Line control is a key marker of developing fine motor skills"
        ]},
        { title: "Collage of My Day", theme: "Narrative Collage", slides: [
          "🎯 Learning Goal: Record a day in life through collage",
          "📖 Describe your day from morning to night",
          "✂️ Find or cut images from magazines and colored paper",
          "🎨 Arrange them into a timeline of the day",
          "💬 Share: How are everyone's days different?",
          "📌 Theory Note: Developing narrative skills and a sense of time"
        ]},
        { title: "Little Architect", theme: "3D Design", slides: [
          "🎯 Learning Goal: Design and build a three-dimensional piece (advanced design thinking)",
          "📋 Plan First: What do you want to build?",
          "🧰 Materials: Cardboard boxes / clay / twigs",
          "🎨 Build! Follow your design plan",
          "🔬 Does it match? What's different? Why?",
          "📌 Theory Note: STEAM — design → make → reflect is the heart of engineering thinking"
        ]},
        { title: "Advanced Music Painting", theme: "Sound to Vision", slides: [
          "🎯 Learning Goal: Respond visually to different types of music (advanced)",
          "🎵 Play 2 minutes each of classical / jazz / rock",
          "🎨 Create one small painting per piece (3 small works)",
          "🔄 Compare the three paintings",
          "💬 What colors and shapes did you use? Why?",
          "📌 Theory Note: Synesthesia training — Year 2 children can describe experience with richer vocabulary"
        ]},
        { title: "My Dream", theme: "Imagination Unleashed", slides: [
          "🎯 Learning Goal: Paint a dream and unleash imagination",
          "💬 What's the most interesting dream you've had?",
          "📖 Introduction: In a dream, anything goes — flying, growing huge, shrinking tiny",
          "🎨 Create: Paint a dream you've had (or one you wish for)",
          "🌟 Dreams have no rules, and neither does this painting",
          "📌 Theory Note: Lowenfeld — encouraging imaginative expression is key to protecting creativity"
        ]},
        { title: "The Taste of Autumn", theme: "Seasonal Senses", slides: [
          "🎯 Learning Goal: Experience autumn through multiple senses",
          "🍂 Collect: Fallen leaves, pine cones, osmanthus flowers",
          "👃 Smell autumn, feel autumn's textures",
          "🎨 Create: Collage using autumn colors and natural materials",
          "💬 What color is autumn? What does it smell like?",
          "📌 Theory Note: Reggio Emilia — integrating the senses deepens understanding of the world"
        ]},
        { title: "Pattern Codes", theme: "Pattern Creation", slides: [
          "🎯 Learning Goal: Create repeating patterns (STEAM — mathematical patterns)",
          "📖 Observe: What pattern is on a piece of fabric? What's the rule?",
          "🎨 Design one simple pattern unit",
          "📐 Repeat it in a grid → it becomes a piece of 'fabric'",
          "💬 What is the rule in your pattern?",
          "📌 Theory Note: STEAM — recognizing and creating patterns is the seedling of mathematical thinking"
        ]},
        { title: "Animal Role Play", theme: "Character and Story", slides: [
          "🎯 Learning Goal: Design an animal character and create a story painting",
          "💬 Choose your favorite animal — you are that animal!",
          "🎨 Draw your animal hero and its world",
          "📝 Tell a short story about this animal",
          "🌟 Combine all the animal stories into one class picture book",
          "📌 Theory Note: Pre-schematic → schematic: the emergence of characters and narrative"
        ]},
        { title: "Our Story Wall", theme: "Collaborative Display", slides: [
          "🎯 Learning Goal: Collaboratively create a narrative display wall",
          "📋 Theme: Our Class's Autumn Story",
          "🎨 Each person paints one autumn scene or event",
          "🖼️ Arrange them on the wall to form a big story",
          "🎤 Tell the story together",
          "📌 Theory Note: Reggio Emilia — collective storytelling ensures every voice is heard"
        ]}
      ]
    },
    "y2-winter": {
      name: "Year 2 · Winter · Stories and Imagination",
      weeks: [
        { title: "A Fairy-Tale Castle", theme: "Imaginative Construction", slides: [
          "🎯 Learning Goal: Draw or build a fairy-tale structure",
          "📖 What's your favorite fairy tale? What buildings are in it?",
          "🎨 Create: Draw or build your fairy-tale castle",
          "✏️ Add the characters who live inside",
          "🎤 Tell us your castle's story",
          "📌 Theory Note: Imagination + narrative = the bridge from pre-schematic to schematic stage"
        ]},
        { title: "Secrets of the Night Sky", theme: "Dark Background Creation", slides: [
          "🎯 Learning Goal: Create on a dark background (a new experience)",
          "🌙 Introduction: What color is the night sky? What's in it?",
          "🎨 Use white or bright crayons to draw a star-filled sky on black paper",
          "✏️ Add the moon, stars, and anything you imagine",
          "💬 How does painting at night feel different from painting in the day?",
          "📌 Theory Note: Changing the material (dark paper) sparks new modes of expression"
        ]},
        { title: "Monster Designer", theme: "Character Creation", slides: [
          "🎯 Learning Goal: Design an original character (advanced creativity)",
          "💬 How many eyes does your monster have? How many legs? What does it eat?",
          "🎨 Draw your monster and add color",
          "📝 Give it a name and tell its story",
          "🖼️ Monster Gallery: Display all the monsters",
          "📌 Theory Note: Character design = systematic imagination training"
        ]},
        { title: "The Sounds of Winter", theme: "Advanced Synesthesia", slides: [
          "🎯 Learning Goal: Listen to the sounds of winter and draw them",
          "👂 Listen: Wind / footsteps in snow / crackling fire / boiling water",
          "💬 What color is each sound? What shape?",
          "🎨 Create: Choose one winter sound and draw it",
          "🔄 Compare with last year's sound drawings — has your expression developed?",
          "📌 Theory Note: Continued deepening of synesthetic training"
        ]},
        { title: "The Nian Beast", theme: "Folklore", slides: [
          "🎯 Learning Goal: Create inspired by a folk legend (culture + imagination)",
          "📖 Story: The Nian Beast is coming! How do you drive it away?",
          "🎨 Create: Draw the Nian Beast as you imagine it",
          "✏️ Or draw the scene of chasing the beast away",
          "💬 How would you drive away the Nian Beast?",
          "📌 Theory Note: Folk stories are both cultural heritage and fuel for the imagination"
        ]},
        { title: "Magic Hat", theme: "Wearable Art", slides: [
          "🎯 Learning Goal: Design and make a wearable hat",
          "📖 Introduction: A hat can become anything — a crown, an animal, a garden",
          "🧰 Materials: Card stock, colored paper, yarn, sequins",
          "🎨 Design and make your magic hat",
          "🎭 Wear your hat and strut the runway!",
          "📌 Theory Note: Three-dimensional form combined with wearable, body-connected creation"
        ]},
        { title: "Ice Kingdom", theme: "Cool-Color Creation", slides: [
          "🎯 Learning Goal: Create a complete scene using a cool color palette",
          "🎨 Use only blue / white / purple / silver to paint a winter wonderland",
          "✂️ Add cut-paper snowflakes as decoration",
          "💬 How do you feel looking at an all-cool-color painting?",
          "🔄 Compare with a warm-color painting and feel the difference",
          "📌 Theory Note: Working within a limited palette trains a unified sense of color harmony"
        ]},
        { title: "Shadow Puppets", theme: "Light and Shadow Storytelling", slides: [
          "🎯 Learning Goal: Make shadow puppets and perform (integrated arts)",
          "✂️ Cut character shapes from card stock and attach to sticks",
          "💡 Project shadows behind a screen using a light source",
          "🎭 Perform: Use your puppets to tell a short story",
          "💬 Light + shadow + voice together = theater!",
          "📌 Theory Note: Integrated arts experience — visual art + storytelling + performance"
        ]},
        { title: "Time Capsule", theme: "Memory and Documentation", slides: [
          "🎯 Learning Goal: Make a time capsule (recording who you are right now)",
          "✏️ Draw your current self, your favorite things, and your best friend",
          "📝 Say one sentence for the teacher to write down",
          "📦 Seal everything in an envelope, labeled 'Open in One Year'",
          "💬 What do you think will have changed by then?",
          "📌 Theory Note: Concept of time + self-awareness + the joy of anticipation"
        ]},
        { title: "Fabric Collage", theme: "Textile Art", slides: [
          "🎯 Learning Goal: Create a collage using fabric and thread",
          "🧵 Materials: Fabric scraps, yarn, buttons, sequins",
          "✂️ Cut and arrange fabric pieces into a picture",
          "🎨 Glue them down and stitch outlines with thread",
          "💬 How does working with fabric feel different from working with paper?",
          "📌 Theory Note: Hundred Languages — fabric is another expressive medium"
        ]},
        { title: "My Picture Book (Part 1)", theme: "Picture Book Creation", slides: [
          "🎯 Learning Goal: Begin making your own mini picture book (Part 1)",
          "📖 Discuss: What is a picture book? What parts does it have?",
          "✏️ Design your story: Who / where / what happens",
          "🎨 Draw the first 3 pages",
          "💬 How does your story begin?",
          "📌 Theory Note: First encounter with narrative structure — beginning / middle / end"
        ]},
        { title: "My Picture Book (Part 2)", theme: "Picture Book Completion", slides: [
          "🎯 Learning Goal: Finish and share your mini picture book (Part 2)",
          "🎨 Complete the remaining pages",
          "📝 Teacher helps write the words",
          "📖 Bind it into a book",
          "🎤 Read it aloud to everyone!",
          "📌 Theory Note: Completing a whole piece of work gives children a powerful sense of accomplishment"
        ]},
        { title: "Winter Art Show", theme: "Term Review", slides: [
          "🎯 Learning Goal: Review and display winter term creations",
          "📖 Review: What did we make this winter?",
          "✅ Each child selects their 2 best pieces",
          "🖼️ Arrange the winter display wall",
          "🎤 Share your favorite lesson",
          "📌 Theory Note: Regular exhibitions build a sense of ritual and self-confidence"
        ]}
      ]
    },
    "y2-spring": {
      name: "Year 2 · Spring · Little Explorers",
      weeks: [
        { title: "Micro World", theme: "Advanced Observation", slides: [
          "🎯 Learning Goal: Use a magnifying glass to observe details and draw them",
          "🔍 Observe: Fabric texture, tree bark, flower stamens, fingerprints",
          "🎨 Draw the tiny world you see",
          "💬 What does the magnified world look like?",
          "🌟 Discover: Everything looks completely different up close!",
          "📌 Theory Note: Observation is the starting point for all visual art"
        ]},
        { title: "Dissecting a Flower", theme: "Science Meets Art", slides: [
          "🎯 Learning Goal: Observe the structure of a flower and document it (STEAM)",
          "🌸 Take a flower apart: petals, stamens, sepals, stem",
          "🔍 What does each part look like? What color?",
          "🎨 Draw each part (an introduction to botanical illustration)",
          "📊 Label each part like a scientist",
          "📌 Theory Note: STEAM — scientific documentation and artistic expression can be the same activity"
        ]},
        { title: "The Map Painter", theme: "Spatial Thinking", slides: [
          "🎯 Learning Goal: Draw a map from home to school (spatial cognition)",
          "💬 How do you get here each day? What do you pass along the way?",
          "🎨 Create: Draw your route as a map",
          "📍 Add the important landmarks you see along the way",
          "💬 Share: How is your route different from mine?",
          "📌 Theory Note: Maps are a combined expression of spatial thinking and symbolic ability"
        ]},
        { title: "Weather Journal", theme: "Observational Record", slides: [
          "🎯 Learning Goal: Use drawing to record changing weather",
          "☀️ What's the weather like today? What color is the sky?",
          "🎨 Draw today's weather",
          "📊 Keep a running record: Build a weather journal",
          "💬 How do sunny-day and rainy-day drawings differ?",
          "📌 Theory Note: Sustained observation and documentation are the foundations of scientific thinking"
        ]},
        { title: "Insect Patterns", theme: "Patterns in Nature", slides: [
          "🎯 Learning Goal: Observe and create patterns found on insects",
          "🦋 Observe: What patterns are on butterflies, ladybugs, and bees?",
          "📖 Symmetry! A butterfly's wings are the same on both sides",
          "🎨 Create: Design a butterfly with your own original pattern",
          "💬 What rule does your pattern follow?",
          "📌 Theory Note: STEAM — symmetry and pattern in nature"
        ]},
        { title: "Ink Brush Experience", theme: "Eastern Medium", slides: [
          "🎯 Learning Goal: Explore the ink brush and ink (new tool exploration)",
          "🖌️ Try It: How is a brush different from a crayon?",
          "🎨 Experiment: Dense ink / diluted ink / dry brush / wet brush — what does each look like?",
          "✏️ Freely draw anything with the brush",
          "💬 Ink is only black, but look at all the variations",
          "📌 Theory Note: Hundred Languages — each tool opens up different expressive possibilities"
        ]},
        { title: "Vegetable Stamps", theme: "Found Object Printing", slides: [
          "🎯 Learning Goal: Create stamp prints using vegetable cross-sections",
          "🥕 Cut open: lotus root, pepper, apple, celery — what does each cross-section look like?",
          "🎨 Dip in paint and press onto paper",
          "📊 Combine and arrange into patterns",
          "💬 Which vegetable has the most beautiful pattern?",
          "📌 Theory Note: Discovering artistic possibilities in everyday objects"
        ]},
        { title: "Robot Friend", theme: "STEAM Design", slides: [
          "🎯 Learning Goal: Design a robot (STEAM — engineering + art)",
          "💬 What can your robot do? What does it look like?",
          "✏️ Draw a design plan first",
          "🧰 Build it from cardboard boxes, bottle caps, and buttons",
          "🎨 Paint and decorate it",
          "📌 Theory Note: STEAM — combining functional design with visual design"
        ]},
        { title: "Underwater Adventure", theme: "Imaginary Space", slides: [
          "🎯 Learning Goal: Create an imaginary underwater world",
          "📖 Introduction: What lives in the ocean? Is there anything humans haven't discovered yet?",
          "🎨 Create: Paint your underwater world on a large sheet of paper",
          "✂️ Add collage elements: seaweed, fish, coral",
          "🌟 Include real sea creatures — and ones you've invented",
          "📌 Theory Note: Imagination grounded in reality = the combination of observation and invention"
        ]},
        { title: "Recycled Artist", theme: "Eco-Friendly Creation", slides: [
          "🎯 Learning Goal: Create with recycled materials (environmental awareness + creativity)",
          "♻️ Materials: Cardboard boxes / bottle caps / old newspapers / fabric",
          "💬 Discuss: Can trash become art?",
          "🎨 Create: Make something out of recycled materials",
          "🌟 Display your recycled art",
          "📌 Theory Note: Environmental awareness + creativity = seeing old things with fresh eyes"
        ]},
        { title: "A Portrait of Dad", theme: "Figure Expression", slides: [
          "🎯 Learning Goal: Paint Dad and compare progress since painting Mom last year",
          "💬 Describe Dad: Is he tall? Does he wear glasses?",
          "🎨 Create: Paint a portrait of Dad",
          "🔄 Compare with last year's portrait of Mom — have you improved?",
          "💌 Make it into a card to bring home",
          "📌 Theory Note: The development of figure schemas is a visible marker of artistic growth"
        ]},
        { title: "My Invention", theme: "Creative Design", slides: [
          "🎯 Learning Goal: Invent something that doesn't exist in the world (peak creativity exercise)",
          "💬 If you could invent anything, what would you make?",
          "✏️ Draw the design plans for your invention",
          "🎨 Give it a name and describe what it can do",
          "🌟 Class Invention Expo: Present your invention!",
          "📌 Theory Note: Imagination is the starting point of every invention — protect children's wildest ideas"
        ]},
        { title: "Spring Art Exhibition", theme: "Spring Review", slides: [
          "🎯 Learning Goal: Hold a spring art exhibition",
          "🗂️ Select the 4 best pieces from this term",
          "📝 Write or draw a caption for each piece",
          "🖼️ Mount the display and invite parents",
          "🎤 Gallery talk: This painting is about…",
          "📌 Theory Note: By Year 2, the ability to articulate and present artwork has noticeably grown"
        ]}
      ]
    },
    "y2-summer": {
      name: "Year 2 · Summer · Creative Carnival",
      weeks: [
        { title: "Big Collaborative Mural", theme: "Group Creation", slides: [
          "🎯 Learning Goal: Work together to complete a large mural",
          "📋 Vote for a theme: Our City / Animal Planet / Dream Island",
          "🎨 Each person is responsible for one section",
          "✏️ Connect everyone's sections into one continuous image",
          "🖼️ Hang it up and admire our masterpiece",
          "📌 Theory Note: The satisfaction of collective creation exceeds that of individual work"
        ]},
        { title: "T-Shirt Designer", theme: "Wearable Design", slides: [
          "🎯 Learning Goal: Create artwork directly on a real T-shirt",
          "✏️ Draw your design on paper first",
          "🎨 Use fabric paint to transfer it onto a white T-shirt",
          "🌟 Wear your creation!",
          "📷 Fashion show photo shoot",
          "📌 Theory Note: Art you can wear — an introduction to functional design"
        ]},
        { title: "Stop-Motion Animation", theme: "STEAM Technology", slides: [
          "🎯 Learning Goal: Create a simple stop-motion animation with clay (STEAM)",
          "📖 What is animation? Many images played fast = movement!",
          "🎨 Sculpt clay characters",
          "📷 Take 10–20 photos, moving the character a tiny bit each time",
          "🎬 Play it back and watch — it moves!",
          "📌 Theory Note: STEAM — animation works through persistence of vision: science and art in perfect union"
        ]},
        { title: "Natural Dye Lab", theme: "Nature's Colors", slides: [
          "🎯 Learning Goal: Extract colors from nature (STEAM)",
          "🧪 Experiment: Spinach juice = green; red beet = red; turmeric = yellow",
          "🎨 Paint a picture using natural dyes",
          "💬 How do they compare to regular paint?",
          "📊 Record your natural color chart",
          "📌 Theory Note: STEAM — the history of pigments is the history of chemistry"
        ]},
        { title: "My Little Theater", theme: "Integrated Performance", slides: [
          "🎯 Learning Goal: Make hand puppets and perform (integrated arts experience)",
          "🎨 Make a paper-bag puppet or a sock puppet",
          "📝 Write a short story",
          "🎭 Perform for the group",
          "💬 Audience questions: What's your character's name?",
          "📌 Theory Note: Visual art + storytelling + performance = Reggio Emilia's hundred languages in action"
        ]},
        { title: "My Future Self", theme: "Temporal Imagination", slides: [
          "🎯 Learning Goal: Draw your future self (imagination + self-awareness)",
          "💬 What do you want to be when you grow up? Where will you live?",
          "🎨 Create: Draw yourself 10 years from now",
          "📝 Say one sentence to your future self",
          "📦 Add it to the time capsule",
          "📌 Theory Note: Imagining the future is an extension of creativity"
        ]},
        { title: "Art Passport", theme: "Style Exploration", slides: [
          "🎯 Learning Goal: Sample different ways of making art and collect an art passport",
          "🎨 6 stations: finger painting / crayon / watercolor / clay / collage / stamps",
          "📒 Get a stamp after completing each station",
          "💬 Which method do you like best?",
          "📊 My 'Art Passport' is fully stamped!",
          "📌 Theory Note: Building toward the multi-media learning of the next stage (ages 7–9)"
        ]},
        { title: "Masterpiece Makeover", theme: "Art Appreciation", slides: [
          "🎯 Learning Goal: Appreciate a famous work and recreate it in your own way",
          "📖 Look at Van Gogh's Starry Night — what do you think it's saying?",
          "🎨 Repaint 'Starry Night' in your own style",
          "💬 What did you change? Why?",
          "🌟 No version is wrong",
          "📌 Theory Note: DBAE — art appreciation beginning with feeling and moving toward expression"
        ]},
        { title: "Sound Sculpture", theme: "Multi-Sensory Creation", slides: [
          "🎯 Learning Goal: Turn sound into a three-dimensional piece (cross-sensory integrated work)",
          "🎵 Listen to three sounds: ocean waves / thunderstorm / birdsong",
          "🎨 'Sculpt' these sounds out of clay",
          "💬 What shape is your sound sculpture?",
          "🌟 There is no right answer — your feeling is the answer",
          "📌 Theory Note: Hundred Languages — sound can be transformed into three-dimensional form"
        ]},
        { title: "My Art Book, Volume 2", theme: "Two-Year Record", slides: [
          "🎯 Learning Goal: Organize Year 2 work into a collection and witness growth",
          "📒 Select the best pieces from Year 2",
          "✏️ Add a drawn or written caption beside each one",
          "🔄 Look back at Year 1's book and compare the growth",
          "💬 What change in yourself do you like most?",
          "📌 Theory Note: A portfolio is the truest mirror of artistic growth"
        ]},
        { title: "A Gift to My Year 3 Self", theme: "Bridging Forward", slides: [
          "🎯 Learning Goal: Prepare emotionally for entering Year 3",
          "💬 What will we learn in Year 3? More complex techniques!",
          "🎨 Draw 'A Piece of Art I Want to Make in Year 3'",
          "📝 Write or say one art wish",
          "🌟 I'm ready!",
          "📌 Theory Note: Lowenfeld — Early Schematic Stage: children begin to seek skill and accuracy"
        ]},
        { title: "Graduation Exhibition", theme: "Two-Year Summary", slides: [
          "🎯 Learning Goal: Celebrate two years of growth",
          "📖 Review: Look at everything from the very first day to today",
          "🗂️ Compile a two-year portfolio",
          "🏆 Receive a Little Doodlers graduation certificate",
          "🎤 Each person says one sentence: I learned…",
          "📌 Theory Note: Two years of growth are visible — and that is the power of education"
        ]},
        { title: "Welcome to Year 3 Ceremony", theme: "A New Beginning", slides: [
          "🎯 Learning Goal: Open Year 3 with ceremony and anticipation",
          "🌟 Announce: From today, you are Early Schematic Stage artists!",
          "📖 Preview: In Year 3 we will explore observational drawing, mixed media, and personal projects",
          "🎨 Create: Paint 'My Artistic Manifesto'",
          "💬 This year I want to…",
          "📌 Theory Note: Ritual builds identity — I am an artist"
        ]}
      ]
    },
    "y3-fall": {
      name: "Year 3 · Fall · Observation and Discovery",
      weeks: [
        { title: "The Artist's Eye", theme: "Systematic Observation Training", slides: [
          "🎯 Learning Goal: Open Year 3 — learning to 'truly observe'",
          "👁️ Game: Stare at one object for 60 seconds, then draw it from memory",
          "🔍 Compare: What's different between drawing while looking vs. drawing from memory?",
          "🎨 Practice: Do a still-life sketch of a simple object (cup / apple)",
          "💬 Did observation change your drawing?",
          "📌 Theory Note: Lowenfeld's Early Schematic Stage — children begin consciously seeking visual accuracy"
        ]},
        { title: "The Power of Contour Lines", theme: "Observational Drawing Fundamentals", slides: [
          "🎯 Learning Goal: Practice 'blind contour drawing' — eye and hand working together",
          "✏️ Rules: Eyes on the object, hand draws, don't look at the paper!",
          "🎨 Draw your hand: blind contour practice",
          "🔄 Compare: Blind contour vs. regular drawing — which has more feeling?",
          "💬 What does this way of drawing feel like?",
          "📌 Theory Note: Blind contour drawing trains hand-eye coordination and genuine observation"
        ]},
        { title: "Light and Shadow (Introduction to Value)", theme: "Three-Dimensional Perception", slides: [
          "🎯 Learning Goal: Use light and shadow to show three-dimensional form",
          "💡 Experiment: Shine a desk lamp on an apple and observe where it's light and dark",
          "🎨 Practice pencil shading with varying pressure (light / medium / heavy)",
          "✏️ Draw a sphere with light and shadow",
          "💬 Did the shadow make the drawing feel more 'real'?",
          "📌 Theory Note: Early Schematic Stage: beginning to address the two-dimensional representation of three-dimensional space"
        ]},
        { title: "Autumn Leaf Still Life", theme: "Observational Nature Drawing", slides: [
          "🎯 Learning Goal: Carefully observe a real leaf and draw it",
          "🍂 Choose your favorite fallen leaf",
          "🔍 Observe: The direction of the veins, the jagged edges, the gradation of color",
          "🎨 Still life: Draw every detail you can see",
          "💬 Every leaf is different — what unique features did you notice?",
          "📌 Theory Note: Nature still-life drawing is a key Early Schematic Stage practice — the real world is the best teacher"
        ]},
        { title: "My Hand", theme: "Observational Figure Drawing", slides: [
          "🎯 Learning Goal: Carefully observe and draw your own hand",
          "🖐️ Place your hand on the paper and trace the outline",
          "🔍 Then: observe the knuckles, fingernails, and lines on your hand",
          "🎨 Add detail — this time, not just an outline but a hand with texture",
          "💬 Which part of the hand was hardest to draw?",
          "📌 Theory Note: Observational figure drawing is the central challenge of the schematic stage — moving from 'the symbolic person' to 'the observed person'"
        ]},
        { title: "Introduction to Mixed Media", theme: "Combining Materials", slides: [
          "🎯 Learning Goal: Combine multiple materials in one piece",
          "🧰 Today's materials: Watercolor base + crayon + collage",
          "🎨 Steps: Apply a watercolor wash → let it dry → add details with crayon → finish with collage",
          "✏️ Theme: Paint an autumn forest",
          "💬 What was the role of each different material?",
          "📌 Theory Note: Mixed media expands expressive possibilities"
        ]},
        { title: "Advanced Color: The Color Wheel", theme: "Color Theory", slides: [
          "🎯 Learning Goal: Understand the color wheel and color relationships",
          "🎨 Make your own color wheel by hand",
          "📖 Learn: What are primary, secondary, and tertiary colors?",
          "✏️ Find the complementary pairs: red/green, blue/orange, yellow/purple",
          "💬 Place two complementary colors side by side: what do you notice?",
          "📌 Theory Note: Color theory is an important area of systematic study in the Early Schematic Stage"
        ]},
        { title: "Still Life with Everyday Objects", theme: "Advanced Still Life", slides: [
          "🎯 Learning Goal: Compose and draw a still life with multiple objects",
          "🖼️ Arrange: One apple + one cup + one book",
          "📐 Composition: How will you place these three things on the page?",
          "🎨 Draw using pencil or charcoal",
          "💬 What was hardest? How did you work through it?",
          "📌 Theory Note: Compositional awareness is a new challenge in the Early Schematic Stage"
        ]},
        { title: "The Language of Line", theme: "Advanced Line Expression", slides: [
          "🎯 Learning Goal: Use different lines to express different textures and emotions",
          "✏️ Practice: Straight / curved / thick / thin / broken / continuous lines",
          "🎨 Experiment: Draw 'A Calm Sea' and 'An Angry Sea' using only lines",
          "💬 How do lines carry emotion?",
          "🌟 Create: Draw an emotional piece using only lines",
          "📌 Theory Note: Line is the most fundamental language of visual art"
        ]},
        { title: "Self-Portrait (Advanced)", theme: "Portrait Art", slides: [
          "🎯 Learning Goal: Year 3 self-portrait — more observed detail",
          "🪞 Look in the Mirror: What's on your face? Eyebrows / nose / mouth / ears",
          "📐 Proportion guidance: The eyes are in the middle of the face, not the top",
          "🎨 Create: A detailed self-portrait",
          "🔄 Compare with the Year 1 self-portrait — three years of growth!",
          "📌 Theory Note: Self-portraits document the development of a child's self-awareness over time"
        ]},
        { title: "Outdoor Sketching Day", theme: "Environmental Observation", slides: [
          "🎯 Learning Goal: On-site observational sketching outdoors (environment + observation)",
          "🌳 Head out to the school courtyard or a nearby park",
          "🎨 Choose a corner you love and sketch it for 20 minutes",
          "📐 Challenge: Include a foreground and a background in your composition",
          "💬 How is drawing outdoors different from drawing in the classroom?",
          "📌 Theory Note: Plein air sketching trains spatial awareness and rapid observation skills"
        ]},
        { title: "Texture Challenge", theme: "Texture and Surface", slides: [
          "🎯 Learning Goal: Represent different textures through drawing",
          "🖐️ Touch: Rough stone / smooth glass / soft fabric",
          "✏️ How can you use lines, dots, and marks to show these sensations?",
          "🎨 Create: A texture sampler — 6 different textures",
          "💬 How do you make something look soft or hard?",
          "📌 Theory Note: Texture representation is an important skill in observational drawing"
        ]},
        { title: "Fall Exhibition", theme: "Year 3 Fall Review", slides: [
          "🎯 Learning Goal: Display Year 3's fall growth",
          "🗂️ Select 3 pieces that best show improvement this term",
          "📝 Write a statement for each piece: What did I learn?",
          "🖼️ Mount the exhibition",
          "🎤 Introduce your artistic development to the audience",
          "📌 Theory Note: Year 3 exhibitions should reflect visible technical growth"
        ]}
      ]
    },
    "y3-winter": {
      name: "Year 3 · Winter · Going Deeper",
      weeks: [
        { title: "Advanced Watercolor Techniques", theme: "Watercolor Skills", slides: [
          "🎯 Learning Goal: Learn wet-on-wet and wet-on-dry watercolor techniques",
          "🎨 Wet-on-Wet: Wet the paper first, then add color — the pigment blooms and spreads",
          "✏️ Wet-on-Dry: Paint on dry paper — crisp, defined edges",
          "🌊 Practice: Paint a winter sky (graded wash)",
          "💬 When do you use wet-on-wet? When do you use wet-on-dry?",
          "📌 Theory Note: Mastering tools is an important developmental goal in the Early Schematic Stage"
        ]},
        { title: "Story Sequence Painting", theme: "Advanced Narrative Drawing", slides: [
          "🎯 Learning Goal: Use a comic strip to tell a story with a clear arc",
          "📖 Design a 4-panel story (beginning / development / climax / resolution)",
          "🎨 Draw one scene per panel",
          "✏️ Note: Keep your characters consistent across all panels",
          "💬 What do you want your story to say?",
          "📌 Theory Note: Comic strips train narrative structure and character consistency"
        ]},
        { title: "Winter Landscape", theme: "Landscape Composition", slides: [
          "🎯 Learning Goal: Paint a winter landscape with foreground, midground, and background",
          "🌳 Composition practice: Where is the horizon line?",
          "📐 Three planes: foreground / midground / background",
          "🎨 Use cool-toned watercolor to paint an outdoor winter scene",
          "💬 Things far away look smaller, and things up close look bigger — did you do it?",
          "📌 Theory Note: Intuitive understanding of perspective — spatial expression developing in the Early Schematic Stage"
        ]},
        { title: "Chinese Ink Painting (Advanced)", theme: "Traditional Medium Deepened", slides: [
          "🎯 Learning Goal: Paint bamboo in the Chinese ink tradition (traditional technique experience)",
          "🖌️ Practice: Dense ink / diluted ink; paint a bamboo joint in one stroke",
          "🎨 Compose: Paint a complete bamboo plant",
          "📖 Appreciate: Works by traditional Chinese ink painters",
          "💬 How does ink painting feel different from Western painting?",
          "📌 Theory Note: Cultural diversity — learning about different painting traditions"
        ]},
        { title: "Architecture Designer", theme: "STEAM Architecture", slides: [
          "🎯 Learning Goal: Design and draw a building with real functions",
          "🏠 Discuss: What does a building need? Doors / windows / roof / functional zones",
          "✏️ Draw a floor plan first (bird's-eye view)",
          "🎨 Then draw an elevation (front view)",
          "💬 Who is this building for? What makes it special?",
          "📌 Theory Note: STEAM — architectural design unites artistic sensibility with engineering function"
        ]},
        { title: "Color Tone and Emotion", theme: "Deepening Color-Emotion Connection", slides: [
          "🎯 Learning Goal: Use overall color tone to express a specific emotion",
          "🎨 Choose one emotion: loneliness / joy / mystery / warmth",
          "✏️ Choose the corresponding dominant tone + harmonious supporting colors",
          "🖼️ Create a painting where the emotion is felt through color alone",
          "💬 Can your classmates guess the emotion without being told?",
          "📌 Theory Note: Tonal unity is an important hallmark of mature artistic expression"
        ]},
        { title: "The Collage Artist", theme: "Advanced Collage Techniques", slides: [
          "🎯 Learning Goal: Create a complex collage with depth and layers",
          "✂️ Materials: Magazines / newspaper / colored paper / photos / fabric",
          "🎨 Theme: A day in the city",
          "📐 Layers: Background → midground → foreground, building one layer at a time",
          "💬 What's the unique pleasure of collage vs. drawing?",
          "📌 Theory Note: Collage originated in Cubism and is one of the defining forms of modern art"
        ]},
        { title: "First Encounter with Printmaking", theme: "Printmaking Art", slides: [
          "🎯 Learning Goal: Experience simple printmaking (foam block printing)",
          "✏️ Engrave a design into a foam sheet using a ballpoint pen",
          "🎨 Roll ink onto the foam → press it onto paper → peel it off!",
          "🔄 Print multiple copies: add different colors to each",
          "💬 How is printmaking different from drawing directly?",
          "📌 Theory Note: Printmaking is an 'indirect' art form — image transferred through a medium"
        ]},
        { title: "My Artist Research", theme: "Deepening Art Appreciation", slides: [
          "🎯 Learning Goal: Research an artist you find inspiring",
          "📖 Introduction: Van Gogh / Picasso / Qi Baishi / Yayoi Kusama",
          "🔍 Each child chooses one to research: What is their style? What is their most famous work?",
          "🎨 Create a painting in the style of your chosen artist",
          "🎤 Present your artist research to the group",
          "📌 Theory Note: DBAE — systematic exploration of art appreciation and art history"
        ]},
        { title: "Three-Dimensional Paper Sculpture", theme: "3D Art", slides: [
          "🎯 Learning Goal: Create three-dimensional paper sculpture through cutting and folding",
          "📐 Techniques: Cut lines / fold lines / pop-up structures",
          "🎨 Make a pop-up card or a three-dimensional scene",
          "✏️ Winter theme: A snowy landscape or festive scene",
          "💬 How do you transform flat paper into something three-dimensional?",
          "📌 Theory Note: Three-dimensional paper art is an integrated workout for spatial thinking and fine motor skills"
        ]},
        { title: "A Painting of Gratitude", theme: "Deepening Emotional Expression", slides: [
          "🎯 Learning Goal: Express gratitude through art (combining emotion with technique)",
          "💬 Who or what are you most grateful for?",
          "🎨 Using any technique learned this term, create a gratitude-themed piece",
          "✏️ Choose freely: watercolor / ink / collage / mixed media",
          "💌 Turn it into a gift to give away",
          "📌 Theory Note: Art is not only technique — it is also a vessel for feeling"
        ]},
        { title: "Collaborative Large Painting", theme: "Collaborative Art", slides: [
          "🎯 Learning Goal: Collaborate to complete a large, unified painting",
          "📋 Theme: A Winter Story (each person responsible for one panel)",
          "🎨 Requirement: Use a unified color tone so the image feels cohesive",
          "✏️ Negotiate: Who paints what? How do we keep the colors consistent?",
          "🖼️ When finished, display it as a class artwork",
          "📌 Theory Note: Collaborative art requires communication, compromise, and a shared vision"
        ]},
        { title: "Winter Art Exhibition", theme: "Year 3 Winter Review", slides: [
          "🎯 Learning Goal: Display this term's technical growth",
          "🗂️ Select 4 pieces that best demonstrate skill development",
          "📝 Write beside each: 'In this piece, I learned to…'",
          "🖼️ Mount a formal exhibition with labels",
          "🎤 Describe your own work using art vocabulary",
          "📌 Theory Note: Being able to talk about your own art in artistic terms — this is a key milestone in the Early Schematic Stage"
        ]}
      ]
    },
    "y3-spring": {
      name: "Year 3 · Spring · Personal Projects",
      weeks: [
        { title: "My Art Theme", theme: "Personal Project Launch", slides: [
          "🎯 Learning Goal: Choose a personal art project theme (Reggio Emilia — long-term project)",
          "💬 Discuss: What is a 'personal project'? What do you most want to explore deeply?",
          "✏️ Each child chooses a theme: Animals / Family / City / Nature / Fantasy World",
          "📝 Write it down: My theme is ___ and I want to explore it through ___",
          "🌟 All spring's work will be a series of pieces around this theme",
          "📌 Theory Note: Reggio Emilia — long-term deep projects cultivate focus and depth of thinking"
        ]},
        { title: "Theme Research", theme: "Project Research", slides: [
          "🎯 Learning Goal: Gather resources and inspiration for the personal project",
          "🔍 Research: Find images, real objects, and books related to your theme",
          "📒 Build an 'Inspiration Notebook': paste images, sketch ideas, record thoughts",
          "🎨 Draw 5 quick sketches related to your theme",
          "💬 What interesting details have you discovered?",
          "📌 Theory Note: Research and gathering are how professional artists work"
        ]},
        { title: "First Theme Artwork", theme: "Project Creation 1", slides: [
          "🎯 Learning Goal: Complete the first formal piece in your project series",
          "✏️ Start with a compositional thumbnail sketch",
          "🎨 Choose the medium that best suits your theme",
          "🖼️ Carefully complete the first piece",
          "💬 Compare with your sketch — did the final work match your plan?",
          "📌 Theory Note: The sketch-to-final workflow is a habit of mature artists"
        ]},
        { title: "The Colors of Spring", theme: "Seasonal Still Life", slides: [
          "🎯 Learning Goal: Paint the colors of spring (season + observation + technique)",
          "🌸 Outdoors: Find the colors that belong to spring — fresh green / blush pink / pale yellow",
          "🎨 Mixing practice: Mix these subtle spring colors",
          "✏️ Paint a cluster of spring flowers from observation",
          "💬 How is spring green different from autumn green?",
          "📌 Theory Note: Noticing subtle differences in color is a sign of refined artistic sensitivity"
        ]},
        { title: "Second Theme Artwork", theme: "Project Creation 2", slides: [
          "🎯 Learning Goal: Deepen the theme and complete the second piece",
          "🔄 Review the first piece: What could be stronger?",
          "🎨 Try a different angle or medium",
          "✏️ The second piece must develop further — it cannot be identical to the first",
          "💬 What new discoveries have you made within your theme?",
          "📌 Theory Note: Making a series deepens understanding with each new piece"
        ]},
        { title: "Mixed Media Experiments", theme: "Technique Integration", slides: [
          "🎯 Learning Goal: Create one piece combining multiple materials",
          "🧰 Today: Use watercolor wash + oil pastels + ink + collage all together",
          "🎨 Theme: Connect everything to your personal project",
          "✏️ Explore: What happens when all these materials share one surface?",
          "💬 Which combination surprised you most? Which was most beautiful?",
          "📌 Theory Note: Mixed media breaks down boundaries between materials and creates unique visual effects"
        ]},
        { title: "The Art of Composition", theme: "Visual Design", slides: [
          "🎯 Learning Goal: Design a painting's composition with intention",
          "📐 Learn: The Rule of Thirds — don't place the subject dead center",
          "🔍 Analyze: Study the compositions of a few famous works. Why are they arranged this way?",
          "🎨 Practice: Draw the same scene in 3 different compositions",
          "💬 Which composition has the most impact?",
          "📌 Theory Note: Composition is the language of visual storytelling"
        ]},
        { title: "Third Theme Artwork", theme: "Project Creation 3", slides: [
          "🎯 Learning Goal: Complete the third piece in the series (mid-series)",
          "📖 Review the first two: How has the theme developed?",
          "🎨 The third piece must incorporate new techniques learned this term",
          "✏️ Try an unfamiliar medium or technique",
          "💬 What connects the pieces in your series?",
          "📌 Theory Note: Internal coherence within a series is a mark of artistic maturity"
        ]},
        { title: "An Artist's Journey", theme: "Art and Culture", slides: [
          "🎯 Learning Goal: Learn how artists express themes through a series of works",
          "📖 Case Studies: Monet painted dozens of water lilies; Van Gogh painted dozens of sunflowers",
          "💬 Why return to the same subject again and again?",
          "🎨 Approach your theme with that same devotion — each piece is a new discovery",
          "🌟 The power of a series is greater than any single piece",
          "📌 Theory Note: Deep exploration of one theme is more valuable than skimming across many"
        ]},
        { title: "Sculpture Time", theme: "Advanced Three-Dimensional Creation", slides: [
          "🎯 Learning Goal: Create a three-dimensional work related to your theme using clay",
          "🎨 Create: Sculpt one element from your theme in three dimensions",
          "✏️ Techniques: Hand-building / coiling / carving fine details",
          "🔬 Think: How does three-dimensional expression feel different from flat painting?",
          "💬 What do you want people to feel when they see your sculpture?",
          "📌 Theory Note: Three-dimensional creation is another 'language' — an advanced practice of the hundred languages"
        ]},
        { title: "Artist's Statement", theme: "Articulating Art", slides: [
          "🎯 Learning Goal: Learn to express your artistic intentions in words",
          "📝 Write an 'Artist's Statement' for each piece in your project",
          "✏️ Content: This work is about… / I wanted to express… / I used the technique of…",
          "💬 Share: After hearing your statement, do your classmates understand your work differently?",
          "🌟 Artists need to be able to talk about their work",
          "📌 Theory Note: Talking about art in language is an important expression of metacognitive ability"
        ]},
        { title: "Project Complete (Fourth Artwork)", theme: "Project Conclusion", slides: [
          "🎯 Learning Goal: Complete the final piece in the personal project series",
          "🎨 This is the most carefully considered piece in your whole series",
          "✏️ Draw on every technique learned this term",
          "📝 Write a complete artist's statement",
          "💬 What did your project explore? What did you discover?",
          "📌 Theory Note: Completing a full art project is an important milestone of achievement"
        ]},
        { title: "Spring Personal Project Exhibition", theme: "Project Showcase", slides: [
          "🎯 Learning Goal: Display the personal project series",
          "🖼️ Set up your own dedicated display area",
          "📝 Display your inspiration notebook, sketches, and finished pieces",
          "🎤 Present your project to an audience (parents / classmates)",
          "💬 What did this project teach you?",
          "📌 Theory Note: Reggio Emilia — project exhibitions make learning visible and honor the work of inquiry"
        ]}
      ]
    },
    "y3-summer": {
      name: "Year 3 · Summer · Graduation and Bridging Forward",
      weeks: [
        { title: "I Am an Artist", theme: "Identity", slides: [
          "🎯 Learning Goal: Build the identity of 'I am an artist'",
          "💬 What is an artist? Do you have to be very good at drawing to count?",
          "📖 Stories: All kinds of artists — painters / sculptors / designers",
          "🎨 Create: 'My Artist's Business Card' — draw in your own artistic style",
          "🌟 Pledge: I am an artist!",
          "📌 Theory Note: Reggio Emilia — children are capable beings, not empty containers waiting to be filled"
        ]},
        { title: "Style Lab", theme: "Personal Style Exploration", slides: [
          "🎯 Learning Goal: Find and recognize your personal artistic style",
          "🎨 Same subject, three completely different styles: realistic / abstract / decorative",
          "💬 Which feels best to you? Which feels most like you?",
          "🔍 Look back at three years of work: What elements appear again and again?",
          "🌟 That is your style!",
          "📌 Theory Note: Personal style emerges naturally through sustained practice — it isn't something you force"
        ]},
        { title: "A Letter to the 7–9 Class", theme: "Transition Preparation", slides: [
          "🎯 Learning Goal: Prepare for moving into the 7–9 age group",
          "📖 Introduction: In the next stage, you'll explore more systematic color, composition, and mixed media",
          "💬 What are you excited about? What are you nervous about?",
          "🎨 Create: Paint 'A Work I Want to Make in the 7–9 Class'",
          "📝 Write a letter to your future self",
          "📌 Theory Note: Lowenfeld's Schematic Stage — a growing desire for realism and skill is beginning to take hold"
        ]},
        { title: "The Materials Challenge", theme: "Creative Flexibility", slides: [
          "🎯 Learning Goal: Create using randomly assigned materials (creative flexibility)",
          "🎲 Draw lots to determine materials: each person draws 3",
          "⏰ 20-minute time limit — use only those 3 materials",
          "🎨 Theme: 'Surprise'",
          "💬 What unexpected ideas did the constraints spark?",
          "📌 Theory Note: Creativity often shines brightest under constraints"
        ]},
        { title: "Compiling My Portfolio", theme: "Portfolio Assembly", slides: [
          "🎯 Learning Goal: Select from three years of work and build a portfolio",
          "🗂️ Look through all the work from all three years",
          "✅ Choose 1–2 representative pieces from each term",
          "📒 Bind them in chronological order into 'A Three-Year Portfolio'",
          "💬 Looking through this book, what kind of growth do you see?",
          "📌 Theory Note: A portfolio (Portfolio) is the most truthful record of artistic growth"
        ]},
        { title: "Art Appreciation Museum Day", theme: "Art Appreciation", slides: [
          "🎯 Learning Goal: Appreciate and discuss multiple styles and art movements",
          "🖼️ Display: Impressionism / Expressionism / Abstract art / Traditional Chinese painting",
          "💬 Which do you love most? Why? What does it make you feel?",
          "🎨 Create: Paint 'A Work Inspired by Today'",
          "📝 Write: I was inspired by ___ because…",
          "📌 Theory Note: DBAE — integrating the four dimensions of appreciation, criticism, history, and creation"
        ]},
        { title: "Graduation Mural (Part 1)", theme: "Group Creation, Part 1", slides: [
          "🎯 Learning Goal: Begin creating the graduation large-scale collaborative work",
          "📋 Vote on a theme: Our Three-Year Journey / The Art World of the Future",
          "📐 Divide into groups: each group responsible for one section",
          "🎨 Each group begins their section",
          "💬 How do we make the whole mural feel harmonious?",
          "📌 Theory Note: Collaborative art requires listening, negotiation, and shared goals"
        ]},
        { title: "Graduation Mural (Part 2)", theme: "Group Creation, Part 2", slides: [
          "🎯 Learning Goal: Complete and integrate the graduation mural",
          "🎨 Groups continue and begin integrating their sections",
          "✏️ Connect the edges between groups so the image flows smoothly",
          "🖼️ Complete the final piece",
          "💬 What story does this mural tell about our class?",
          "📌 Theory Note: Collective narrative — every voice is part of the whole"
        ]},
        { title: "My Artistic Manifesto", theme: "Self-Expression", slides: [
          "🎯 Learning Goal: Express your personal artistic beliefs through art",
          "💬 What do you believe in? What do you want to say about art?",
          "✏️ Write your 'Artistic Manifesto' (3–5 sentences)",
          "🎨 Design the manifesto as a 'typographic poster'",
          "🌟 Display: Read your manifesto out loud!",
          "📌 Theory Note: An artistic manifesto is an expression of self-knowledge and values"
        ]},
        { title: "An Art Gift for Family", theme: "Closing Emotional Expression", slides: [
          "🎯 Learning Goal: Create for the person you love most, using everything learned in three years",
          "💬 Who do you most want to thank? What do they love?",
          "🎨 Freely choose any technique you've learned",
          "✏️ This is your finest integrated use of three years of skill",
          "💌 Wrap it up and bring it home",
          "📌 Theory Note: Art is ultimately about connection — connecting the heart of the maker with the heart of the beholder"
        ]},
        { title: "Opening the Time Capsule", theme: "Growth Reflection", slides: [
          "🎯 Learning Goal: Open the time capsule made in Year 2 (comparing growth)",
          "📦 Open the time capsule: look at who you were two years ago",
          "💬 Did your predictions come true? What changed? What stayed the same?",
          "🎨 Draw 'Who I Am Now' and compare it with what's in the capsule",
          "🌟 Make a new time capsule and write a letter to yourself in 10 years",
          "📌 Theory Note: Time gives the most powerful proof of growth"
        ]},
        { title: "Mounting the Graduation Exhibition", theme: "Curatorial Learning", slides: [
          "🎯 Learning Goal: Plan and mount the graduation exhibition yourselves",
          "🖼️ Discuss: How should we arrange the work to look its best?",
          "📐 Divide roles: Who hangs the work? Who writes the labels? Who gives the tour?",
          "✏️ Write the exhibition introduction: Our Class's Three-Year Art Journey",
          "🎨 Finish mounting; rehearse the gallery tour",
          "📌 Theory Note: Curating = artistic expression + communication + organization + aesthetic judgment"
        ]},
        { title: "Graduation Ceremony and Exhibition", theme: "Three-Year Celebration", slides: [
          "🎯 Learning Goal: Celebrate three years of growth and formally graduate",
          "🏆 Award graduation certificates: You have officially graduated from Little Doodlers!",
          "📖 Reflect on three years: A slideshow of the journey through photos and work",
          "🎤 Each person shares one sentence: Art taught me…",
          "🌟 Welcome parents to the graduation exhibition",
          "📌 Theory Note: Three years of growth means these children step into the 7–9 class carrying the eyes of an artist"
        ]}
      ]
    }
  }
};
