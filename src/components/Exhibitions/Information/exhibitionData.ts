export interface Exhibition {
    title: string;
    subtitle: string;
    location: string;
    leftTextEng: string;
    rightTextEng: string;
    leftTextFr: string;
    rightTextFr: string;
    place: string;
}

const exhibitionData: Record<string, Exhibition> = {
    gallerium2023: {
        title: 'GALLERIUM ART ONLINE 2023',
        subtitle: '',
        location: "",
        leftTextEng: '',
        rightTextEng: '',
        leftTextFr: '',
        rightTextFr: '',
        place: 'gallerium',
    },
    paris2022: {
        title: 'PARIS 2022',
        subtitle: '« PERLES ET RITES »',
        location: "L'expo Montmartre, 30 rue des Trois Frères, 75018, Paris",
        leftTextEng: 'The visitor was able to participate in a “match game” where three installations were set up. The visitor had to guess which necklace the installation corresponded to. Each time, it made it possible to visualize the context from which the elements of collars came. Thus, the exhibition brought the visitor another light on these necklaces of pearls of Africa, which are much more than beautiful objects.',
        rightTextEng: 'The artist is an epidemiologist, and as such, she has lived and worked in several African countries, which she impregnated to document the history of pearls and their different functions, social, ritual, religious… Tonia has just returned from an exhibition in an art gallery in New Orleans, she has exhibited in three continents and this is her second exhibition in Paris.',
        leftTextFr: 'Le visiteur a pu participer à un « match game » où trois installations ont été installées. Le visiteur devait deviner à quel collier correspondait l’installation. A chaque fois, il permettait de visualiser le contexte d’où venaient les éléments de colliers. Ainsi, l’exposition a apporté au visiteur une autre lumière sur ces colliers de perles d’Afrique, qui sont bien plus que de beaux objets.',
        rightTextFr: 'L’artiste est épidémiologiste, et à ce titre, elle a vécu et travaillé dans plusieurs pays africains, qu’elle a fécondé pour documenter l’histoire des perles et leurs différentes fonctions, sociales, rituelles, religieuses… Tonia vient de rentrer d’une exposition dans une galerie d’art de la Nouvelle-Orléans, elle a exposé sur trois continents et c’est sa deuxième exposition à Paris.',
        place: 'paris',
    },
    neworleans2022: {
        title: 'NEW ORLEANS 2022',
        subtitle: '« AFRICAN BEADS REMIX »',
        location: "Sullivan Gallery, 3827 Magazine St., New Orleans, Louisiana",
        leftTextEng: 'Having lived and worked as an epidemiologist in several African countries, my passion brought me to visit some of the most distant markets and antique dealers to find beads and build my collection. As the beads come from my personal collection my necklaces are often unique or made in limited edition. I imagined and designed those contemporary creations inspired by sometimes ancient African beads.',
        rightTextEng: 'Certain beads are still used today in rituals, and I documented many of those functions. I chose to exhibit my creations at Sullivan Gallery, a stained glass studio, because my work is like stained glass, it is fragments of history, of cultural heritage, brought together by the design of a necklace. To wear a necklace created by me is a trip through time. Suddenly you put on a part of Africa’s history, of its heritage.',
        leftTextFr: 'Ayant vécu et travaillé comme épidémiologiste dans plusieurs pays africains, ma passion m’a amené à visiter certains des marchés les plus éloignés et des antiquaires pour trouver des perles et construire ma collection. Comme les perles proviennent de ma collection personnelle, mes colliers sont souvent uniques ou fabriqués en édition limitée. J’ai imaginé et conçu ces créations contemporaines inspirées de perles africaines parfois anciennes.',
        rightTextFr: 'Certaines perles sont encore utilisées aujourd’hui dans les rituels, et j’ai documenté beaucoup de ces fonctions. J’ai choisi d’exposer mes créations à la Sullivan Gallery, un atelier de vitrail, car mon travail est comme un vitrail, ce sont des fragments d’histoire, de patrimoine culturel, réunis par la conception d’un collier. Porter un collier créé par moi est un voyage dans le temps. Tout à coup, on met une partie de l’histoire de l’Afrique, de son patrimoine.',
        place: 'neworleans',
    },
    santlouis2021: {
        title: 'ST LOUIS, USA 2021',
        subtitle: '« RITUALS »',
        location: "Intersect Art Gallery, St Louis, Missouri, USA",
        leftTextEng: 'Intersect Arts Gallery features 117 works by 44 artists that explore the phenomenon of ritual. From the sacred to the mundane we invite you into contemplations of rituals that may be personal or corporate, ancient or contemporary, organized or completely of the artist’s invention, spiritual, religious, political or of daily life. You will glimpse rituals that reference ideas of healing, connection, lament, promise, and protection. You will see rituals of repentance, resistance, and routine. Rituals feel superfluous in many ways. They are not necessarily necessary. You can eat lunch without ceremony, and it will still nourish your body.  Rituals can be practiced with a high degree of intentionality, or they may be absorbed into daily life by rote, carried on from the traditions of past generations. You may have rituals so ingrained in you from birth that you hardly recognize them as separate from your DNA.',
        rightTextEng: 'You may have developed new rituals during this time of Covid.  You may love your rituals, you may loathe some of your rituals, you may roll your eyes at some forms of ritualization by others. These things that we do, these rituals, with ceremony and with repetition, they are not just habits. Rituals are the embellishment of necessity, the soul of why we do what we do. They are the distillation of a universe of intricate and expansive ideas often surpassing comprehension into a tangible, enact-able structure of gestures, words, and objects. They not only nourish our bodies, but are vital to nourish our minds and our souls. Our thriving does depend on them, whether we are conscious of it or not.',
        leftTextFr: 'Intersect Arts Gallery présente 117 œuvres de 44 artistes qui explorent le phénomène du rituel. Du sacré au mondain nous vous invitons à des contemplations de rituels qui peuvent être personnels ou corporatifs, anciens ou contemporains, organisés ou complètement de l’invention de l’artiste, spirituels, religieux, politiques ou de la vie quotidienne. Vous apercevrez des rituels qui font référence à des idées de guérison, de connexion, de lamentation, de promesse et de protection. Vous verrez des rituels de repentance, de résistance et de routine. Les rituels semblent superflus à bien des égards. Ils ne sont pas nécessairement nécessaires. Vous pouvez déjeuner sans cérémonie et cela nourrira votre corps. Les rituels peuvent être pratiqués avec un haut degré d’intentionnalité, ou ils peuvent être absorbés dans la vie quotidienne par cœur, perpétués à partir des traditions des générations passées. Vous avez peut-être des rituels si enracinés en vous dès la naissance que vous les reconnaissez à peine comme étant séparés de votre ADN.',
        rightTextFr: 'Vous avez peut-être développé de nouveaux rituels pendant cette période de Covid.  Vous pouvez aimer vos rituels, vous pouvez détester certains de vos rituels, vous pouvez rouler vos yeux à certaines formes de ritualisation par d’autres. Ces choses que nous faisons, ces rituels, avec cérémonie et répétition, ce ne sont pas seulement des habitudes. Les rituels sont l’embellissement de la nécessité, l’âme de pourquoi nous faisons ce que nous faisons. Ils sont la distillation d’un univers d’idées complexes et expansives qui dépassent souvent la compréhension en une structure tangible et réalisable de gestes, de mots et d’objets. Non seulement ils nourrissent notre corps, mais ils sont vitaux pour nourrir notre esprit et notre âme. Notre prospérité dépend d’eux, que nous en soyons conscients ou non.',
        place: 'stlouis',
    },
    provence2020: {
        title: 'SALON DE PROVENCE 2020',
        subtitle: 'Conférence « FONCTIONS DES PERLES D’AFRIQUE »',
        location: "La Cour des Créateurs",
        leftTextEng: 'Beads give me the freedom to create, to travel in time and space. Beads from Venice, Bohemia, the Indus and other parts of the world… Some beads have marked the history of the slave trade in Africa, they helped confiscate their freedom from human beings.',
        rightTextEng: 'They remind me today how expensive and fragile freedom is!',
        leftTextFr: 'Les perles m’offrent la liberté de créer, de voyager dans le temps et l’espace. Perles de Venise, de Bohême, de l’Indus et d’autres régions du monde... Certaines perles ont marqué l’histoire de la traite négrière en Afrique, elles ont contribué à confisquer leur liberté à des êtres humains.',
        rightTextFr: 'Elles me rappellent aujourd’hui combien la liberté est chère et fragile !',
        place: 'provence',
    },
    montpellier2019: {
        title: 'MONTPELLIER 2019',
        subtitle: '« MAGIE DES PERLES D’AFRIQUE »',
        location: "",
        leftTextEng: '',
        rightTextEng: '',
        leftTextFr: '',
        rightTextFr: '',
        place: 'montpellier',
    },
    dakar2018: {
        title: 'DAKAR 2018',
        subtitle: '« PASSÉ PRÉSENT »',
        location: "",
        leftTextEng: 'The Kemboury Gallery welcomed Tonia for  «Passé Présent», a solo exhibition as part of the 7th edition of the Dakar Art Galery Festival, «PARTcours». Wearing a necklace created by Tonia is a journey through time. Suddenly you are carrying a part of Africa’s history, of its heritage, a testimony of incessant cultural exchanges within Africa as well as with Europe and Asia. ndeed, these contemporary necklaces were imagined and designed by Tonia from very old African beads often used in rituals, from birth to death.',
        rightTextEng: 'The exhibition sheds another light on these necklaces of African beads, which are much more than beautiful objects. To enhance these beads, she creates her necklaces by associating their authenticity and history with modernity in design. Tonia has lived in and traveled to several African countries during her many work assignments as an epidemiologist. Her passion for beads led her to look for them in the most distant markets.',
        leftTextFr: 'La galerie Kemboury a accueilli Tonia pour «Passé Présent», une exposition solo dans le cadre de la 7ème édition du festival des galeries d’art de Dakar, le «PARTcours». Se parer d’un collier créé par Tonia est un voyage dans le temps. Tout à coup vous portez une partie de l’histoire d’Afrique, de son patrimoine, un témoignage de croisements culturels incessants à l’intérieur de l’Afrique ainsi qu’avec l’Europe et l’Asie. En effet, ces œuvres contemporaines ont été imaginées et conçues par Tonia à partir de perles d’Afrique parfois très anciennes. Des perles souvent utilisées dans des rituels, de la naissance à la mort.',
        rightTextFr: 'L’exposition apporte au visiteur une autre lumière sur ces colliers de perles d’Afrique, qui sont bien plus que de beaux objets. Pour mettre en valeur ces perles, elle montre ses colliers en associant leur authenticité et leur histoire avec la modernité dans le design. Tonia a vécu dans plusieurs pays d’Afrique et en a sillonné d’autres durant ses nombreuses missions de travail en tant qu’épidémiologiste. Sa passion pour les perles l’a amené à les rechercher dans les marchés les plus lointains.',
        place: 'dakar',
    },
    algiers2017: {
        title: 'ALGIERS 2017',
        subtitle: '« SAHARA INSPIRE »',
        location: "Expo Palais des Rais",
        leftTextEng: 'As part of the collective exhibition «Sahara Inspire» in Algiers, Tonia presented her necklaces related to the Sahara. This Ottoman palace was a superb XXL jewel box for Tonia’s necklaces. Each necklace exhibited has a connection to the Sahara: beads from the desert, or having crossed the desert on camels, or made and worn by the desert people.',
        rightTextEng: 'Beads, witnesses of historical and cultural exchanges allowed by the Sahara between East and West, North and South. Sahara, immense sea rich in trade. What a pleasure to share these stories with people, even if Tonia repeats them 20 times a day. It allows for great people to meet!',
        leftTextFr: 'Dans le cadre de l’exposition collective « Sahara Inspire » à Alger, Tonia a présenté ses colliers ayant une relation avec le Sahara. Ce palais Ottoman fut un superbe écrin XXL pour accueillir les colliers de Tonia. Chaque collier exposé a un lien direct avec le Sahara: des perles provenant du désert, ou ayant traversé le désert à dos d’un chameau, ou fabriquées et portées par les gens du désert.',
        rightTextFr: 'Perles, témoins des échanges historiques et culturels, transportées à travers le Sahara du Nord au Sud, l’Est à l’Ouest. Sahara, immense mer riche d’échanges. Quel plaisir de partager ces histoires avec les gens, même si Tonia les répète 20 fois par jour. Cela permet de belles rencontres!',
        place: 'algiers',
    }
};

export default exhibitionData;