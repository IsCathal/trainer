// trainClassifier.js

const natural = require('natural');
const classifier = new natural.BayesClassifier();

// Add training data for each category
classifier.addDocument('The French Revolution reshaped European politics', 'History & Society');
classifier.addDocument('Ancient Rome was a hub of political innovation', 'History & Society');
classifier.addDocument('The caste system structured Indian society for centuries', 'History & Society');
classifier.addDocument('Industrialization transformed labor practices worldwide', 'History & Society');
classifier.addDocument('The Great Depression affected millions across the globe', 'History & Society');
classifier.addDocument('Colonial powers reshaped the political map of Africa', 'History & Society');
classifier.addDocument('The Renaissance sparked a cultural rebirth in Europe', 'History & Society');
classifier.addDocument('The abolition of slavery was a turning point in history', 'History & Society');
classifier.addDocument('Feudalism defined the socio-political order of medieval Europe', 'History & Society');
classifier.addDocument('The suffragette movement advocated for women\'s voting rights', 'History & Society');
classifier.addDocument('The Enlightenment emphasized reason and science', 'History & Society');
classifier.addDocument('World War I reshaped geopolitical alliances', 'History & Society');
classifier.addDocument('The Treaty of Versailles ended a brutal global conflict', 'History & Society');
classifier.addDocument('Nomadic tribes often adapted to changing environments', 'History & Society');
classifier.addDocument('The discovery of the New World led to cultural exchanges', 'History & Society');
classifier.addDocument('Civil wars often leave lasting scars on societies', 'History & Society');
classifier.addDocument('Empires have risen and fallen throughout history', 'History & Society');
classifier.addDocument('Trade routes like the Silk Road connected distant cultures', 'History & Society');
classifier.addDocument('The Cold War was marked by ideological competition', 'History & Society');
classifier.addDocument('Revolutions have altered the course of history', 'History & Society');
classifier.addDocument('The invention of the printing press revolutionized knowledge sharing', 'History & Society');
classifier.addDocument('The Magna Carta laid the foundation for constitutional law', 'History & Society');
classifier.addDocument('The concept of democracy originated in ancient Greece', 'History & Society');
classifier.addDocument('Social hierarchies were prevalent in ancient civilizations', 'History & Society');
classifier.addDocument('The Ottoman Empire spanned three continents', 'History & Society');
classifier.addDocument('Geography often influenced historical outcomes', 'History & Society');
classifier.addDocument('The spread of Islam reshaped cultural and political landscapes', 'History & Society');
classifier.addDocument('Wars of religion were common in early modern Europe', 'History & Society');
classifier.addDocument('The Vikings were known for their seafaring and exploration', 'History & Society');
classifier.addDocument('Nationalism often fuels both unity and division', 'History & Society');
classifier.addDocument('The Roman Empire influenced legal systems worldwide', 'History & Society');
classifier.addDocument('The Industrial Revolution began in Great Britain', 'History & Society');
classifier.addDocument('Exploration led to the colonization of the Americas', 'History & Society');
classifier.addDocument('The Reformation challenged the authority of the Church', 'History & Society');
classifier.addDocument('Philosophers like Rousseau influenced political thought', 'History & Society');
classifier.addDocument('Geopolitical tensions often result in border disputes', 'History & Society');
classifier.addDocument('The fall of the Berlin Wall symbolized the end of the Cold War', 'History & Society');
classifier.addDocument('Revolutions often emerge from economic disparity', 'History & Society');
classifier.addDocument('Cultural exchanges shape the evolution of societies', 'History & Society');
classifier.addDocument('The invention of agriculture transformed human settlements', 'History & Society');
classifier.addDocument('Medieval knights upheld a code of chivalry', 'History & Society');
classifier.addDocument('Colonization led to the exploitation of indigenous populations', 'History & Society');
classifier.addDocument('Economic policies often influence historical events', 'History & Society');
classifier.addDocument('Historical documents preserve the legacy of past civilizations', 'History & Society');
classifier.addDocument('Global conflicts often have complex causes', 'History & Society');
classifier.addDocument('The American Civil War divided the nation', 'History & Society');
classifier.addDocument('The rise of empires is often linked to military strength', 'History & Society');
classifier.addDocument('The abolitionist movement sought to end slavery', 'History & Society');
classifier.addDocument('The Industrial Age brought both progress and challenges', 'History & Society');

classifier.addDocument('Leonardo da Vinci’s work continues to inspire artists', 'Literature & Art');
classifier.addDocument('Greek mythology is rich with captivating stories', 'Literature & Art');
classifier.addDocument('This symphony by Beethoven is timeless', 'Literature & Art');
classifier.addDocument('The novel explores themes of love and betrayal', 'Literature & Art');
classifier.addDocument('Shakespeare’s tragedies are considered literary masterpieces', 'Literature & Art');
classifier.addDocument('The painting depicts a serene countryside', 'Literature & Art');
classifier.addDocument('Pablo Neruda’s poems evoke profound emotions', 'Literature & Art');
classifier.addDocument('Ancient epics like the Iliad narrate heroic tales', 'Literature & Art');
classifier.addDocument('The sculpture captures the essence of human struggle', 'Literature & Art');
classifier.addDocument('Romanticism celebrated nature and emotion in art', 'Literature & Art');
classifier.addDocument('The play incorporates elements of both tragedy and comedy', 'Literature & Art');
classifier.addDocument('Renaissance art reflected humanism and individualism', 'Literature & Art');
classifier.addDocument('The poet’s imagery vividly portrays the beauty of spring', 'Literature & Art');
classifier.addDocument('Abstract art challenges traditional notions of form and meaning', 'Literature & Art');
classifier.addDocument('Biographies often reveal the personal struggles of great figures', 'Literature & Art');
classifier.addDocument('The sonnet structure lends a lyrical quality to the poem', 'Literature & Art');
classifier.addDocument('Mythological references enrich the depth of the narrative', 'Literature & Art');
classifier.addDocument('Modernist literature often experiments with form and structure', 'Literature & Art');
classifier.addDocument('The museum exhibits highlight diverse artistic traditions', 'Literature & Art');
classifier.addDocument('Symbolism in this novel opens doors to multiple interpretations', 'Literature & Art');
classifier.addDocument('Classic literature often reflects the values of its time', 'Literature & Art');
classifier.addDocument('The artist’s use of color evokes a sense of nostalgia', 'Literature & Art');
classifier.addDocument('The opera’s libretto tells a tale of love and sacrifice', 'Literature & Art');
classifier.addDocument('Art movements like Cubism broke conventional norms', 'Literature & Art');
classifier.addDocument('The mural depicts the struggles of the working class', 'Literature & Art');
classifier.addDocument('Literary criticism provides insights into deeper meanings', 'Literature & Art');
classifier.addDocument('Folk tales preserve the oral traditions of cultures', 'Literature & Art');
classifier.addDocument('The novelist uses allegory to convey social criticism', 'Literature & Art');
classifier.addDocument('The performance breathed new life into the classic play', 'Literature & Art');
classifier.addDocument('Haiku poetry captures fleeting moments of nature', 'Literature & Art');
classifier.addDocument('The artist’s brushstrokes convey a sense of urgency', 'Literature & Art');
classifier.addDocument('The cathedral’s architecture reflects Gothic influences', 'Literature & Art');
classifier.addDocument('The storyteller wove tales of valor and mystery', 'Literature & Art');
classifier.addDocument('Surrealist paintings explore the subconscious mind', 'Literature & Art');
classifier.addDocument('The movie adapts a beloved classic novel', 'Literature & Art');
classifier.addDocument('The essay analyzes the cultural impact of a literary work', 'Literature & Art');
classifier.addDocument('Calligraphy is a revered art form in many cultures', 'Literature & Art');
classifier.addDocument('The philosopher’s writings challenge traditional beliefs', 'Literature & Art');
classifier.addDocument('Literature often mirrors the struggles of society', 'Literature & Art');
classifier.addDocument('The play’s dramatic monologue is deeply moving', 'Literature & Art');
classifier.addDocument('The myth recounts the creation of the world', 'Literature & Art');
classifier.addDocument('The painting is renowned for its intricate detail', 'Literature & Art');
classifier.addDocument('Fairy tales often carry moral lessons for children', 'Literature & Art');
classifier.addDocument('The composer’s symphony evokes the grandeur of nature', 'Literature & Art');
classifier.addDocument('Romantic literature emphasizes emotion over reason', 'Literature & Art');
classifier.addDocument('Medieval manuscripts are adorned with elaborate illustrations', 'Literature & Art');
classifier.addDocument('The artist’s self-portrait reveals a haunting vulnerability', 'Literature & Art');
classifier.addDocument('The novel’s protagonist grapples with existential questions', 'Literature & Art');
classifier.addDocument('The ballet tells a timeless story through graceful movement', 'Literature & Art');
classifier.addDocument('The anthology includes works from diverse literary traditions', 'Literature & Art');


classifier.addDocument('The Eiffel Tower is a famous landmark in Paris', 'Places & Spaces');
classifier.addDocument('Mount Everest is the tallest mountain on Earth', 'Places & Spaces');
classifier.addDocument('The Great Wall of China spans over 13,000 miles', 'Places & Spaces');
classifier.addDocument('Machu Picchu is a well-preserved Incan city', 'Places & Spaces');
classifier.addDocument('The Colosseum in Rome was used for gladiator battles', 'Places & Spaces');
classifier.addDocument('The Sahara Desert is the largest hot desert in the world', 'Places & Spaces');
classifier.addDocument('The Amazon rainforest is home to diverse ecosystems', 'Places & Spaces');
classifier.addDocument('The Taj Mahal is an iconic symbol of love and architecture', 'Places & Spaces');
classifier.addDocument('The Grand Canyon showcases stunning natural landscapes', 'Places & Spaces');
classifier.addDocument('Stonehenge remains a mystery of prehistoric construction', 'Places & Spaces');
classifier.addDocument('The pyramids of Giza are wonders of ancient engineering', 'Places & Spaces');
classifier.addDocument('The Vatican City is the smallest independent state in the world', 'Places & Spaces');
classifier.addDocument('The Leaning Tower of Pisa is a marvel of architecture', 'Places & Spaces');
classifier.addDocument('The city of Venice is famous for its canals', 'Places & Spaces');
classifier.addDocument('The Sydney Opera House is a landmark of modern design', 'Places & Spaces');
classifier.addDocument('The Brooklyn Bridge connects Manhattan and Brooklyn', 'Places & Spaces');
classifier.addDocument('The Serengeti is known for its wildlife migrations', 'Places & Spaces');
classifier.addDocument('Antarctica is the coldest continent on Earth', 'Places & Spaces');
classifier.addDocument('The Amazon River flows through South America', 'Places & Spaces');
classifier.addDocument('The Acropolis in Athens holds significant historical value', 'Places & Spaces');
classifier.addDocument('Niagara Falls is a breathtaking natural wonder', 'Places & Spaces');
classifier.addDocument('The Alps stretch across several European countries', 'Places & Spaces');
classifier.addDocument('The Forbidden City was the imperial palace of China', 'Places & Spaces');
classifier.addDocument('Times Square is a bustling center of activity in New York City', 'Places & Spaces');
classifier.addDocument('The Louvre Museum houses the Mona Lisa', 'Places & Spaces');
classifier.addDocument('Yellowstone National Park is known for its geysers', 'Places & Spaces');
classifier.addDocument('The Rocky Mountains span the western United States', 'Places & Spaces');
classifier.addDocument('The Eiffel Tower lights up beautifully at night', 'Places & Spaces');
classifier.addDocument('The island of Bali is a popular tourist destination', 'Places & Spaces');
classifier.addDocument('The Berlin Wall divided East and West Germany', 'Places & Spaces');
classifier.addDocument('The Tower of London has a rich and bloody history', 'Places & Spaces');
classifier.addDocument('The Andes Mountains are the longest mountain range', 'Places & Spaces');
classifier.addDocument('The Golden Gate Bridge is an iconic landmark in San Francisco', 'Places & Spaces');
classifier.addDocument('The Sphinx of Giza guards the pyramids in Egypt', 'Places & Spaces');
classifier.addDocument('The city of Kyoto is known for its historic temples', 'Places & Spaces');
classifier.addDocument('The Dead Sea is one of the saltiest bodies of water', 'Places & Spaces');
classifier.addDocument('The Burj Khalifa is the tallest building in the world', 'Places & Spaces');
classifier.addDocument('The Galápagos Islands are home to unique wildlife', 'Places & Spaces');
classifier.addDocument('The Kremlin is the heart of Russian politics', 'Places & Spaces');
classifier.addDocument('The Great Barrier Reef is the largest coral reef system', 'Places & Spaces');
classifier.addDocument('The Amalfi Coast is famous for its scenic beauty', 'Places & Spaces');
classifier.addDocument('The city of Istanbul spans two continents', 'Places & Spaces');
classifier.addDocument('The Palace of Versailles is an example of opulent architecture', 'Places & Spaces');
classifier.addDocument('The North Pole is a remote and icy expanse', 'Places & Spaces');
classifier.addDocument('The Louvre Pyramid is a modern addition to a historic site', 'Places & Spaces');
classifier.addDocument('The Scottish Highlands are known for their rugged landscapes', 'Places & Spaces');
classifier.addDocument('The Blue Mosque is a stunning example of Islamic architecture', 'Places & Spaces');
classifier.addDocument('The island of Santorini is famous for its whitewashed buildings', 'Places & Spaces');
classifier.addDocument('The Appalachian Trail stretches across the eastern United States', 'Places & Spaces');


classifier.addDocument('The performance of the orchestra was breathtaking', 'Performance & Expression');
classifier.addDocument('She expressed herself through modern dance', 'Performance & Expression');
classifier.addDocument('The theater production captivated the audience', 'Performance & Expression');
classifier.addDocument('Improvisation is a key element of jazz music', 'Performance & Expression');
classifier.addDocument('The actor’s monologue conveyed deep emotion', 'Performance & Expression');
classifier.addDocument('Her poetry recital was met with thunderous applause', 'Performance & Expression');
classifier.addDocument('The ritual involved chanting and rhythmic drumming', 'Performance & Expression');
classifier.addDocument('Street performers often bring art to life in public spaces', 'Performance & Expression');
classifier.addDocument('The opera’s aria showcased the soprano’s vocal range', 'Performance & Expression');
classifier.addDocument('The festival included traditional folk dances', 'Performance & Expression');
classifier.addDocument('The painter’s live demonstration was mesmerizing', 'Performance & Expression');
classifier.addDocument('Spoken word poetry often tackles contemporary issues', 'Performance & Expression');
classifier.addDocument('The drummer’s solo was the highlight of the concert', 'Performance & Expression');
classifier.addDocument('The choir’s harmonies filled the cathedral with sound', 'Performance & Expression');
classifier.addDocument('The storyteller captivated listeners with her animated delivery', 'Performance & Expression');
classifier.addDocument('The ballet told a story through graceful movements', 'Performance & Expression');
classifier.addDocument('The comedian’s timing and delivery were impeccable', 'Performance & Expression');
classifier.addDocument('The puppet show delighted children and adults alike', 'Performance & Expression');
classifier.addDocument('The art installation invited audience interaction', 'Performance & Expression');
classifier.addDocument('The director’s vision brought the play to life', 'Performance & Expression');
classifier.addDocument('The fireworks display synchronized with the music', 'Performance & Expression');
classifier.addDocument('The pianist’s interpretation of the piece was unique', 'Performance & Expression');
classifier.addDocument('The film’s visual effects were truly groundbreaking', 'Performance & Expression');
classifier.addDocument('The ritual dance honored the traditions of the tribe', 'Performance & Expression');
classifier.addDocument('The spoken word performance tackled themes of justice', 'Performance & Expression');
classifier.addDocument('The violinist’s solo brought tears to the audience', 'Performance & Expression');
classifier.addDocument('The painting contest encouraged creative expression', 'Performance & Expression');
classifier.addDocument('The musician played an ancient flute with skill', 'Performance & Expression');
classifier.addDocument('The storyteller used props to enhance her performance', 'Performance & Expression');
classifier.addDocument('The DJ’s set energized the crowd at the festival', 'Performance & Expression');
classifier.addDocument('The mime artist communicated emotion without words', 'Performance & Expression');
classifier.addDocument('The poetry slam showcased diverse voices', 'Performance & Expression');
classifier.addDocument('The choreographer created a routine inspired by nature', 'Performance & Expression');
classifier.addDocument('The live performance blended music and visual art', 'Performance & Expression');
classifier.addDocument('The gospel choir sang with soulful passion', 'Performance & Expression');
classifier.addDocument('The magician’s act left the audience spellbound', 'Performance & Expression');
classifier.addDocument('The musician improvised a beautiful melody', 'Performance & Expression');
classifier.addDocument('The circus acrobat performed daring stunts', 'Performance & Expression');
classifier.addDocument('The poetry reading explored themes of love and loss', 'Performance & Expression');
classifier.addDocument('The rapper’s lyrics addressed societal issues', 'Performance & Expression');
classifier.addDocument('The theater troupe performed an experimental play', 'Performance & Expression');
classifier.addDocument('The duet was a harmonious blend of voices', 'Performance & Expression');
classifier.addDocument('The drumming circle brought the community together', 'Performance & Expression');
classifier.addDocument('The street artist created a mural in real time', 'Performance & Expression');
classifier.addDocument('The concert ended with a stunning encore', 'Performance & Expression');
classifier.addDocument('The actor portrayed the character with remarkable depth', 'Performance & Expression');
classifier.addDocument('The dance routine incorporated elements of hip-hop', 'Performance & Expression');
classifier.addDocument('The ritual chant echoed through the sacred grounds', 'Performance & Expression');
classifier.addDocument('The ensemble performed with flawless coordination', 'Performance & Expression');


classifier.addDocument('Human emotions are deeply complex and varied', 'The Human Experience');
classifier.addDocument('He reminisced about his childhood with fondness', 'The Human Experience');
classifier.addDocument('Dreams often reflect our subconscious desires', 'The Human Experience');
classifier.addDocument('The feast was a celebration of unity and community', 'The Human Experience');
classifier.addDocument('Love and loss are universal experiences', 'The Human Experience');
classifier.addDocument('The elderly man shared stories from his youth', 'The Human Experience');
classifier.addDocument('She felt a surge of joy as the sun rose', 'The Human Experience');
classifier.addDocument('The story explores themes of grief and healing', 'The Human Experience');
classifier.addDocument('Childhood memories often shape our identities', 'The Human Experience');
classifier.addDocument('The act of forgiveness brought peace to their hearts', 'The Human Experience');
classifier.addDocument('Fear can be a powerful motivator in times of danger', 'The Human Experience');
classifier.addDocument('The taste of the meal brought back vivid memories', 'The Human Experience');
classifier.addDocument('They found solace in the beauty of nature', 'The Human Experience');
classifier.addDocument('Friendship provided a source of strength during hardship', 'The Human Experience');
classifier.addDocument('The character struggles with feelings of isolation', 'The Human Experience');
classifier.addDocument('A mother’s love is often seen as unconditional', 'The Human Experience');
classifier.addDocument('The joy of parenthood transformed their lives', 'The Human Experience');
classifier.addDocument('She found comfort in the routine of daily life', 'The Human Experience');
classifier.addDocument('Anger can lead to both destruction and renewal', 'The Human Experience');
classifier.addDocument('The anticipation of the journey filled him with excitement', 'The Human Experience');
classifier.addDocument('Memories of her lost love lingered in her thoughts', 'The Human Experience');
classifier.addDocument('The fear of failure kept him from pursuing his dreams', 'The Human Experience');
classifier.addDocument('Hunger and thirst are primal human experiences', 'The Human Experience');
classifier.addDocument('The community came together to support those in need', 'The Human Experience');
classifier.addDocument('The story captures the bittersweet nature of nostalgia', 'The Human Experience');
classifier.addDocument('She felt a deep connection to her ancestral roots', 'The Human Experience');
classifier.addDocument('The arrival of spring symbolized renewal and hope', 'The Human Experience');
classifier.addDocument('He struggled with the moral implications of his choices', 'The Human Experience');
classifier.addDocument('The loss of a pet can be as painful as losing a friend', 'The Human Experience');
classifier.addDocument('The joy of discovering a new passion is unparalleled', 'The Human Experience');
classifier.addDocument('The novel delves into the complexity of human relationships', 'The Human Experience');
classifier.addDocument('The reunion was filled with tears of joy and relief', 'The Human Experience');
classifier.addDocument('The protagonist grapples with the concept of mortality', 'The Human Experience');
classifier.addDocument('Laughter is often the best medicine for sorrow', 'The Human Experience');
classifier.addDocument('The aroma of the bakery evoked childhood memories', 'The Human Experience');
classifier.addDocument('The family meal was a tradition passed down for generations', 'The Human Experience');
classifier.addDocument('She faced her fears and emerged stronger than before', 'The Human Experience');
classifier.addDocument('The novel portrays the fragility of human connections', 'The Human Experience');
classifier.addDocument('The act of sharing a meal fosters human bonds', 'The Human Experience');
classifier.addDocument('The protagonist’s internal struggle is central to the story', 'The Human Experience');
classifier.addDocument('The loss of innocence is a recurring theme in the book', 'The Human Experience');
classifier.addDocument('He felt a profound sense of gratitude for the small things', 'The Human Experience');
classifier.addDocument('The simple act of kindness changed her perspective', 'The Human Experience');
classifier.addDocument('The community’s resilience was tested during the storm', 'The Human Experience');
classifier.addDocument('The character reflects on the passage of time', 'The Human Experience');
classifier.addDocument('The celebration marked a new chapter in their lives', 'The Human Experience');
classifier.addDocument('Her tears spoke of both sadness and relief', 'The Human Experience');
classifier.addDocument('The novel explores the fragility and strength of the human spirit', 'The Human Experience');


classifier.addDocument('The author employs a unique narrative perspective', "The Creator's Lens");
classifier.addDocument('The use of symbolism adds layers of meaning to the text', "The Creator's Lens");
classifier.addDocument('The poem’s structure reflects the passage of time', "The Creator's Lens");
classifier.addDocument('The novel’s pacing creates a sense of urgency', "The Creator's Lens");
classifier.addDocument('The playwright uses dialogue to reveal character intentions', "The Creator's Lens");
classifier.addDocument('The narrative alternates between past and present', "The Creator's Lens");
classifier.addDocument('The use of alliteration enhances the poem’s rhythm', "The Creator's Lens");
classifier.addDocument('The metaphor of the storm mirrors the protagonist’s turmoil', "The Creator's Lens");
classifier.addDocument('The story’s setting reinforces its central themes', "The Creator's Lens");
classifier.addDocument('The artist experiments with light and shadow to create depth', "The Creator's Lens");
classifier.addDocument('The character’s inner conflict drives the narrative forward', "The Creator's Lens");
classifier.addDocument('The text explores multiple layers of meaning', "The Creator's Lens");
classifier.addDocument('The author’s choice of words evokes a specific mood', "The Creator's Lens");
classifier.addDocument('The cinematography uses color to reflect the mood of the scene', "The Creator's Lens");
classifier.addDocument('The juxtaposition of ideas challenges the reader’s perspective', "The Creator's Lens");
classifier.addDocument('The structure of the book reflects its themes of fragmentation', "The Creator's Lens");
classifier.addDocument('The poem employs enjambment to create a sense of continuity', "The Creator's Lens");
classifier.addDocument('The director’s use of framing highlights the characters’ emotions', "The Creator's Lens");
classifier.addDocument('The interplay between text and subtext enriches the story', "The Creator's Lens");
classifier.addDocument('The use of unreliable narration adds complexity to the plot', "The Creator's Lens");
classifier.addDocument('The narrative voice shifts to reflect different characters’ perspectives', "The Creator's Lens");
classifier.addDocument('The use of irony highlights the story’s deeper meanings', "The Creator's Lens");
classifier.addDocument('The poet uses vivid imagery to depict the landscape', "The Creator's Lens");
classifier.addDocument('The book’s chapters are structured around thematic motifs', "The Creator's Lens");
classifier.addDocument('The choice of setting amplifies the tension in the story', "The Creator's Lens");
classifier.addDocument('The author blends genres to create a unique narrative style', "The Creator's Lens");
classifier.addDocument('The text invites the reader to interpret its open ending', "The Creator's Lens");
classifier.addDocument('The use of stream-of-consciousness writing immerses the reader', "The Creator's Lens");
classifier.addDocument('The writer uses foreshadowing to build suspense', "The Creator's Lens");
classifier.addDocument('The descriptive language paints a vivid picture of the scene', "The Creator's Lens");
classifier.addDocument('The interplay between dialogue and silence creates dramatic tension', "The Creator's Lens");
classifier.addDocument('The story’s fragmented structure mirrors the protagonist’s mind', "The Creator's Lens");
classifier.addDocument('The use of allegory allows the text to comment on societal issues', "The Creator's Lens");
classifier.addDocument('The narrator’s tone shifts as the story progresses', "The Creator's Lens");
classifier.addDocument('The book’s prologue sets the tone for the unfolding narrative', "The Creator's Lens");
classifier.addDocument('The poet’s use of contrast emphasizes key themes', "The Creator's Lens");
classifier.addDocument('The play incorporates elements of both realism and absurdism', "The Creator's Lens");
classifier.addDocument('The filmmaker uses long takes to create a sense of intimacy', "The Creator's Lens");
classifier.addDocument('The text challenges traditional notions of genre', "The Creator's Lens");
classifier.addDocument('The writer’s use of ambiguity invites multiple interpretations', "The Creator's Lens");
classifier.addDocument('The poem’s brevity enhances its impact', "The Creator's Lens");
classifier.addDocument('The narrative style reflects the cultural context of the story', "The Creator's Lens");
classifier.addDocument('The recurring motif of the ocean symbolizes freedom', "The Creator's Lens");
classifier.addDocument('The author employs flashbacks to deepen the backstory', "The Creator's Lens");
classifier.addDocument('The interplay of light and shadow in the painting creates contrast', "The Creator's Lens");
classifier.addDocument('The text’s nonlinear structure reflects its thematic complexity', "The Creator's Lens");
classifier.addDocument('The epilogue ties together the story’s central themes', "The Creator's Lens");
classifier.addDocument('The author uses detailed description to immerse the reader', "The Creator's Lens");
classifier.addDocument('The story’s title holds symbolic significance', "The Creator's Lens");
classifier.addDocument('The painter’s brushstrokes convey both motion and stillness', "The Creator's Lens");


// Train the classifier
classifier.train();

// Save the classifier to a JSON file
classifier.save('classifier.json', function (err, classifier) {
  if (err) {
    console.error('Error saving classifier:', err);
  } else {
    console.log('Classifier saved successfully.');
  }
});
