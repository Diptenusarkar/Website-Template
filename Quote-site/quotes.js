var arrayOfQuotes = [
        {
        "author": "Oscar Wilde",
        "quotes":"Be yourself everyone else is already taken."
        },
        {
        "author": "Marilyn Monroe",
        "quotes":"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
        },
        {
        "author": "Albert Einstein",
        "quotes":"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
        },
        {
        "author": "Frank Zappa",
        "quotes":"So many books, so little time."
        },
        {
        "author": "Marcus Tullius Cicero",
        "quotes":"A room without books is like a body without a soul."
        },
        {
        "author": "Bernard M. Baruch",
        "quotes":"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
        },
        {
        "author": "William W. Purkey",
        "quotes": "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth."
        },
        {
        "author": " Dr. Seuss",
        "quotes": "You know you're in love when you can't fall asleep because reality is finally better than your dreams."
        },
        {
        "author": "Mae West",
        "quotes": 'You only live once, but if you do it right, once is enough.'
        },
        {
        "author": "Mahatma Gandhi",
        "quotes":"Be the change that you wish to see in the world."
        },
        {
        "author": "Robert Frost",
        "quotes": "In three words I can sum up everything I've learned about life: it goes on."
        },
        {
        "author": "J.K. Rowling",
        "quotes":"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."
        },
        {
        "author": "Mark Twain",
        "quotes":"If you tell the truth, you don't have to remember anything."
        },
        {
        "author": "Elbert Hubbard",
        "quotes":"A friend is someone who knows all about you and still loves you."
        }
        
]

function randomSelector(arrayLength){
    return Math.floor(Math.random() * arrayLength);
}

function generateQuotes(){
    var randomNumber = randomSelector(arrayOfQuotes.length);
    document.getElementById("quoteOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].quotes + '"';
    document.getElementById("authorOutput").innerHTML = '_ ' + arrayOfQuotes[randomNumber].author;

}



















