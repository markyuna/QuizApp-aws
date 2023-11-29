// // src/data/questions.js


const generalKnowledgeQuestions = [
    {
        question: "What is the capital city of France?",
        options: [
            { id:"0", options:"A", answer: "Berlin", isCorrect: false },
            { id:"1", options:"B", answer: "Madrid", isCorrect: false },
            { id:"2", options:"C", answer: "Paris", isCorrect: true },
            { id:"3", options:"D", answer: "Rome", isCorrect: false },
        ],
        correctAnswerIndex: 2,
    },
    {
        question: "In which year did World War I begin?",
        options: [
            { id:"0", options:"A", answer: "1914", isCorrect: true },
            { id:"1", options:"B", answer: "1916", isCorrect: false },
            { id:"2", options:"C", answer: "1918", isCorrect: false },
            { id:"3", options:"D", answer: "1920", isCorrect: false },
        ],
        correctAnswerIndex: 0,
    },
    {
        question: "Who painted the Mona Lisa?",
        options: [
            { id:"0", options:"A", answer: "Vincent van Gogh", isCorrect: false },
            { id:"1", options:"B", answer: "Leonardo da Vinci", isCorrect: true },
            { id:"2", options:"C", answer: "Pablo Picasso", isCorrect: false },
            { id:"3", options:"D", answer: "Claude Monet", isCorrect: false },
        ],
        correctAnswerIndex: 1,
    },
    {
        question: "What is the largest mammal in the world?",
        options: [
            { id:"0", options:"A", answer: "Elephant", isCorrect: false },
            { id:"1", options:"B", answer: "Blue Whale", isCorrect: true },
            { id:"2", options:"C", answer: "Giraffe", isCorrect: false },
            { id:"3", options:"D", answer: "Polar Bear", isCorrect: false },
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: [
            { id:"0", options:"A", answer: "William Shakespeare", isCorrect: true },
            { id:"1", options:"B", answer: "Jane Austen", isCorrect: false },
            { id:"2", options:"C", answer: "Charles Dickens", isCorrect: false },
            { id:"3", options:"D", answer: "Mark Twain", isCorrect: false },
        ],
        correctAnswerIndex: 0
    }
]

export const categories = [
    {
        category: "Classique",
        image: require("../../assets/images/music_icon.png"),
        pointsRequired: 0,
        question: generalKnowledgeQuestions,
    },
];

// const generalKnowledgeQuestions = [
// {
//     question: "What is the capital city of France?",
//     options: [
//     { id:"0", option:"A", answer: "Berlin", isCorrect: false },
//     { id:"1", option:"B", answer: "Madrid", isCorrect: false },
//     { id:"2", option:"C", answer: "Paris", isCorrect: true },
//     { id:"3", option:"D", answer: "Rome", isCorrect: false },
//     ],
//     correctAnswerIndex: 2,
// },
// {
//     question: "In which year did World War I begin?",
//     options: [
//     { id:"0", option:"A", answer: "1914", isCorrect: true },
//     { id:"1", option:"B", answer: "1916", isCorrect: false },
//     { id:"2", option:"C", answer: "1918", isCorrect: false },
//     { id:"3", option:"D", answer: "1920", isCorrect: false },
//     ],
//     correctAnswerIndex: 0,
// },
// {
//     question: "Who painted the Mona Lisa?",
//     options: [
//     { id:"0", option:"A", answer: "Vincent van Gogh", isCorrect: false },
//     { id:"1", option:"B", answer: "Leonardo da Vinci", isCorrect: true },
//     { id:"2", option:"C", answer: "Pablo Picasso", isCorrect: false },
//     { id:"3", option:"D", answer: "Claude Monet", isCorrect: false },
//     ],
// },
// {
//     question: "What is the largest mammal in the world?",
//     options: [
//     { answer: "Elephant", isCorrect: false },
//     { answer: "Blue Whale", isCorrect: true },
//     { answer: "Giraffe", isCorrect: false },
//     { answer: "Polar Bear", isCorrect: false },
//     ],
// },
// {
//     question: "Who wrote 'Romeo and Juliet'?",
//     options: [
//     { answer: "William Shakespeare", isCorrect: true },
//     { answer: "Jane Austen", isCorrect: false },
//     { answer: "Charles Dickens", isCorrect: false },
//     { answer: "Mark Twain", isCorrect: false },
//     ],
// },
// ];

// const sportsQuestions = [
// {
//     question: "Which country won the FIFA World Cup in 2018?",
//     options: [
//     { answer: "Germany", isCorrect: false },
//     { answer: "Brazil", isCorrect: false },
//     { answer: "France", isCorrect: true },
//     { answer: "Spain", isCorrect: false },
//     ],
// },
// {
//     question: "In which sport would you perform a slam dunk?",
//     options: [
//     { answer: "Tennis", isCorrect: false },
//     { answer: "Basketball", isCorrect: true },
//     { answer: "Golf", isCorrect: false },
//     { answer: "Swimming", isCorrect: false },
//     ],
// },
// {
//     question: "Who is often called 'The Greatest' in the history of boxing?",
//     options: [
//     { answer: "Mike Tyson", isCorrect: false },
//     { answer: "Muhammad Ali", isCorrect: true },
//     { answer: "Floyd Mayweather Jr.", isCorrect: false },
//     { answer: "Manny Pacquiao", isCorrect: false },
//     ],
// },
// {
//     question: "Which city hosted the 2016 Summer Olympics?",
//     options: [
//     { answer: "Beijing", isCorrect: false },
//     { answer: "London", isCorrect: false },
//     { answer: "Rio de Janeiro", isCorrect: true },
//     { answer: "Tokyo", isCorrect: false },
//     ],
// },
// {
//     question: "In golf, what is the term for completing a hole in one stroke under par?",
//     options: [
//     { answer: "Eagle", isCorrect: true },
//     { answer: "Birdie", isCorrect: false },
//     { answer: "Bogey", isCorrect: false },
//     { answer: "Albatross", isCorrect: false },
//     ],
// },
// ];

// const scienceAndTechnologyQuestions = [
// {
//     question: "Who developed the theory of relativity?",
//     options: [
//     { answer: "Isaac Newton", isCorrect: false },
//     { answer: "Albert Einstein", isCorrect: true },
//     { answer: "Stephen Hawking", isCorrect: false },
//     { answer: "Niels Bohr", isCorrect: false },
//     ],
// },
// {
//     question: "What is the chemical symbol for the element gold?",
//     options: [
//     { answer: "Au", isCorrect: true },
//     { answer: "Ag", isCorrect: false },
//     { answer: "Fe", isCorrect: false },
//     { answer: "Hg", isCorrect: false },
//     ],
// },
// {
//     question: "In computing, what does CPU stand for?",
//     options: [
//     { answer: "Central Processing Unit", isCorrect: true },
//     { answer: "Central Process Unit", isCorrect: false },
//     { answer: "Computer Personal Unit", isCorrect: false },
//     { answer: "Central Processor Unit", isCorrect: false },
//     ],
// },
// {
//     question: "Which planet is known as the Red Planet?",
//     options: [
//     { answer: "Venus", isCorrect: false },
//     { answer: "Mars", isCorrect: true },
//     { answer: "Jupiter", isCorrect: false },
//     { answer: "Saturn", isCorrect: false },
//     ],
// },
// {
//     question: "Who is considered the 'Father of the Computer'?",
//     options: [
//     { answer: "Bill Gates", isCorrect: false },
//     { answer: "Charles Babbage", isCorrect: true },
//     { answer: "Alan Turing", isCorrect: false },
//     { answer: "Ada Lovelace", isCorrect: false },
//     ],
// },
// ];

// const moviesAndTvQuestions = [
// {
//     question: "Which movie won the Academy Award for Best Picture in 1994?",
//     options: [
//     { answer: "Forrest Gump", isCorrect: true },
//     { answer: "Pulp Fiction", isCorrect: false },
//     { answer: "The Shawshank Redemption", isCorrect: false },
//     { answer: "Schindler's List", isCorrect: false },
//     ],
// },
// {
//     question: "Who played the character Jack Dawson in the movie 'Titanic'?",
//     options: [
//     { answer: "Tom Hanks", isCorrect: false },
//     { answer: "Leonardo DiCaprio", isCorrect: true },
//     { answer: "Brad Pitt", isCorrect: false },
//     { answer: "Johnny Depp", isCorrect: false },
//     ],
// },
// {
//     question: "In the TV series 'Friends,' what is the name of Ross Geller's second wife?",
//     options: [
//     { answer: "Rachel Green", isCorrect: false },
//     { answer: "Emily Waltham", isCorrect: true },
//     { answer: "Monica Geller", isCorrect: false },
//     { answer: "Janice Litman", isCorrect: false },
//     ],
// },
// {
//     question: "Who directed the movie 'The Dark Knight'?",
//     options: [
//     { answer: "Christopher Nolan", isCorrect: true },
//     { answer: "Martin Scorsese", isCorrect: false },
//     { answer: "Steven Spielberg", isCorrect: false },
//     { answer: "Quentin Tarantino", isCorrect: false },
//     ],
// },
// {
//     question: "Which animated film features a character named Simba?",
//     options: [
//     { answer: "Finding Nemo", isCorrect: false },
//     { answer: "The Lion King", isCorrect: true },
//     { answer: "Shrek", isCorrect: false },
//     { answer: "Toy Story", isCorrect: false },
//     ],
// },
// ];

// const musiqueQuestions = [
// {
//     question: "Which artist released the album 'Thriller'?",
//     options: [
//     { answer: "Prince", isCorrect: false },
//     { answer: "Michael Jackson", isCorrect: true },
//     { answer: "Madonna", isCorrect: false },
//     { answer: "David Bowie", isCorrect: false },
//     ],
// },
// {
//     question: "In which year did The Beatles release their album 'Abbey Road'?",
//     options: [
//     { answer: "1967", isCorrect: false },
//     { answer: "1969", isCorrect: true },
//     { answer: "1971", isCorrect: false },
//     { answer: "1973", isCorrect: false },
//     ],
// },
// {
//     question: "Who is known as the 'Queen of Pop'?",
//     options: [
//     { answer: "Beyoncé", isCorrect: false },
//     { answer: "Madonna", isCorrect: true },
//     { answer: "Lady Gaga", isCorrect: false },
//     { answer: "Adele", isCorrect: false },
//     ],
// },
// {
//     question: "Which rock band performed the song 'Stairway to Heaven'?",
//     options: [
//     { answer: "Led Zeppelin", isCorrect: true },
//     { answer: "The Rolling Stones", isCorrect: false },
//     { answer: "The Who", isCorrect: false },
//     { answer: "Pink Floyd", isCorrect: false },
//     ],
// },
// {
//     question: "Who sang the hit song 'Billie Jean'?",
//     options: [
//     { answer: "Stevie Wonder", isCorrect: false },
//     { answer: "Elton John", isCorrect: false },
//     { answer: "Michael Jackson", isCorrect: true },
//     { answer: "Prince", isCorrect: false },
//     ],
// },
// ];
  
// export const categories = [
//     {
//         category: "Classique",
//         image: require("../../assets/images/music_icon.png"),
//         pointsRequired: 0,
//         questions: generalKnowledgeQuestions,
//     },
//     {
//         category: "Sports",
//         image: require("../../assets/images/music_icon.png"),
//         pointsRequired: 100,
//         questions: sportsQuestions,
//     },
//     {
//         category: "Science",
//         image: require("../../assets/images/music_icon.png"),
//         pointsRequired: 200,
//         questions: scienceAndTechnologyQuestions,
//     },
//     {
//         category: "Films",
//         image: require("../../assets/images/music_icon.png"),
//         pointsRequired: 300,
//         questions: moviesAndTvQuestions,
//     },
//     {
//         category: "Musique",
//         image: require("../../assets/images/music_icon.png"),
//         pointsRequired: 400,
//         questions: musiqueQuestions,
//     },
// ];