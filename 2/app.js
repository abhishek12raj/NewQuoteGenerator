function generate(){
    var quotes={
        "– Elaine Davis ": '“Loved you yesterday, love you still, always have, always will.”',
        " – Angelita Lim" : '“I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.”',
        "-Hermann Hesse" : '“If I know what love is, it is because of you.” ',
        "– Leo Christopher": '“I swear I couldn’t love you more than I do right now, and yet I know I will tomorrow.” ',
        " – A. A. Milne" : '“If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.”'
    }
    let authors=Object.keys(quotes);
    
let author= authors[Math.floor(Math.random()* authors.length)]
let quote = quotes[author];

document.getElementById("gyan").innerHTML=quote;
document.getElementById("author").innerHTML=author;
}