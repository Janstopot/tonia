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
        subtitle: '« LORE IPSUM »',
        location: "New Orleans",
        leftText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rightText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    santlouis2021: {
        title: 'SANT LOUIS 2021',
        subtitle: '« Lorem ipsum dolor »',
        location: "L'expo Montmartre, 30 rue des Trois Frères, 75018, Paris",
        leftText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rightText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    algiers2017: {
        title: 'DAKAR 2018',
        subtitle: '« Lorem ipsum dolor »',
        location: "L'expo Montmartre, 30 rue des Trois Frères, 75018, Paris",
        leftText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rightText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    dakar2018: {
        title: 'ALGIERS 2017',
        subtitle: '« Lorem ipsum dolor »',
        location: "L'expo Montmartre, 30 rue des Trois Frères, 75018, Paris",
        leftText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rightText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }
};

export default exhibitionData;