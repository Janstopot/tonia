export interface Exhibition {
    title: string;
    subtitle: string;
    location: string;
    leftText: string;
    rightText: string;
}

const exhibitionData: Record<string, Exhibition> = {
    paris2022: {
        title: 'PARIS 2022',
        subtitle: '« PERLES ET RITES »',
        location: "L'expo Montmartre, 30 rue des Trois Frères, 75018, Paris",
        leftText: 'The visitor was able to participate in a “match game” where three installations were set up. The visitor had to guess which necklace the installation corresponded to. Each time, it made it possible to visualize the context from which the elements of collars came. Thus, the exhibition brought the visitor another light on these necklaces of pearls of Africa, which are much more than beautiful objects.',
        rightText: 'The artist is an epidemiologist, and as such, she has lived and worked in several African countries, which she impregnated to document the history of pearls and their different functions, social, ritual, religious… Tonia has just returned from an exhibition in an art gallery in New Orleans, she has exhibited in three continents and this is her second exhibition in Paris.',
    },
    neworleans2022: {
        title: 'NEW ORLEANS 2022',
        subtitle: '« AFRICAN BEADS REMIX »',
        location: "Sullivan Gallery, 3827 Magazine St., New Orleans, Louisiana",
        leftText: 'Having lived and worked as an epidemiologist in several African countries, my passion brought me to visit some of the most distant markets and antique dealers to find beads and build my collection. As the beads come from my personal collection my necklaces are often unique or made in limited edition. I imagined and designed those contemporary creations inspired by sometimes ancient African beads.',
        rightText: 'Certain beads are still used today in rituals, and I documented many of those functions. I chose to exhibit my creations at Sullivan Gallery, a stained glass studio, because my work is like stained glass, it is fragments of history, of cultural heritage, brought together by the design of a necklace. To wear a necklace created by me is a trip through time. Suddenly you put on a part of Africa’s history, of its heritage.',
    },
    santlouis2021: {
        title: 'SANT LOUIS 2021',
        subtitle: '« RITUALS »',
        location: "Intersect Art Gallery, St Louis, Missouri, USA",
        leftText: 'Intersect Arts Gallery features 117 works by 44 artists that explore the phenomenon of ritual. From the sacred to the mundane we invite you into contemplations of rituals that may be personal or corporate, ancient or contemporary, organized or completely of the artist’s invention, spiritual, religious, political or of daily life. You will glimpse rituals that reference ideas of healing, connection, lament, promise, and protection. You will see rituals of repentance, resistance, and routine. Rituals feel superfluous in many ways. They are not necessarily necessary. You can eat lunch without ceremony, and it will still nourish your body.  Rituals can be practiced with a high degree of intentionality, or they may be absorbed into daily life by rote, carried on from the traditions of past generations. You may have rituals so ingrained in you from birth that you hardly recognize them as separate from your DNA.',
        rightText: 'You may have developed new rituals during this time of Covid.  You may love your rituals, you may loathe some of your rituals, you may roll your eyes at some forms of ritualization by others. These things that we do, these rituals, with ceremony and with repetition, they are not just habits. Rituals are the embellishment of necessity, the soul of why we do what we do. They are the distillation of a universe of intricate and expansive ideas often surpassing comprehension into a tangible, enact-able structure of gestures, words, and objects. They not only nourish our bodies, but are vital to nourish our minds and our souls. Our thriving does depend on them, whether we are conscious of it or not.',
    },
    algiers2017: {
        title: 'DAKAR 2018',
        subtitle: '« PASSÉ PRÉSENT »',
        location: "",
        leftText: 'The Kemboury Gallery welcomed Tonia for  «Passé Présent», a solo exhibition as part of the 7th edition of the Dakar Art Galery Festival, «PARTcours». Wearing a necklace created by Tonia is a journey through time. Suddenly you are carrying a part of Africa’s history, of its heritage, a testimony of incessant cultural exchanges within Africa as well as with Europe and Asia. ndeed, these contemporary necklaces were imagined and designed by Tonia from very old African beads often used in rituals, from birth to death.',
        rightText: 'The exhibition sheds another light on these necklaces of African beads, which are much more than beautiful objects. To enhance these beads, she creates her necklaces by associating their authenticity and history with modernity in design. Tonia has lived in and traveled to several African countries during her many work assignments as an epidemiologist. Her passion for beads led her to look for them in the most distant markets.',
    },
    dakar2018: {
        title: 'ALGIERS 2017',
        subtitle: '« SAHARA INSPIRE »',
        location: "Expo Palais des Rais",
        leftText: 'As part of the collective exhibition «Sahara Inspire» in Algiers, Tonia presented her necklaces related to the Sahara. This Ottoman palace was a superb XXL jewel box for Tonia’s necklaces. Each necklace exhibited has a connection to the Sahara: beads from the desert, or having crossed the desert on camels, or made and worn by the desert people.',
        rightText: 'Beads, witnesses of historical and cultural exchanges allowed by the Sahara between East and West, North and South. Sahara, immense sea rich in trade. What a pleasure to share these stories with people, even if Tonia repeats them 20 times a day. It allows for great people to meet!',
    }
};

export default exhibitionData;