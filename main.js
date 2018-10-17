var movieTitle = [
    "Deadpool",
    "Iron Man",
    "Thor",
    "Captain America: The First Avenger",
    "The Avengers",
    "Deadpool 2",
    "Iron Man 3",
    "Thor Ragnarok",
    "Captain America: Civil War",
    "The Avengers: Infinity War"
];
document.getElementById("movie_title").innerHTML = movieTitle;

var bookTitle = [
    "39 Clues: The Maze of Bones",
    "The Maze Runner",
    "The Fellowship of the Ring",
    "Harry Potter and the Sorcerer's Stone",
    "Ranger's Apprentice: The Ruins of Gorlan",
    "39 Clues: Into the Gauntlet",
    "The Death Cure",
    "The Return of the King",
    "Harry Potter and the Deathly Hollows",
    "Ranger's Apprentice: The Royal Ranger"
];
document.getElementById("book_title").innerHTML = bookTitle;

var mangaTitle = [
    "Dragon Ball Vol. 1",
    "Bleach Vol. 1",
    "Naruto Vol. 1",
    "Fairy Tail Vol. 1",
    "One Piece Vol. 1",
    "Dragon Ball Super Vol. 7",
    "Bleach Vol. 74",
    "Naruto Vol. 72",
    "Fairy Tail Vol. 63",
    "One Piece Vol. 84"
];
document.getElementById("manga_title").innerHTML = mangaTitle;

var gameTitle = [
    "Final Fantasy",
    "Gears of War",
    "God of War",
    "Uncharted: Drake's Fortune",
    "Resident Evil I",
    "Final Fantasy XV",
    "Gears of War 3",
    "God of War 4",
    "Uncharted 4: A Thief's End",
    "Resident Evil VII: Biohazard"
];
document.getElementById("game_title").innerHTML = gameTitle;

function alphaOnly(event) {
    var key;
    if (window.event) {
        key = window.event.key;
    } else if (e) {
        key = e.which;
    }
    }
}

function emailValidation(mail) {
    if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            myForm.emailAddr.value
        )
    ) {
        return true;
    }
    return false;
}
document.getElementById("email").innerHTML = emailValidation(mail);

function phonenumber(inputtxt) {
    var phoneno = /^\d{10}$/;
    if (inputtxt.value.match(phoneno)) {
        return value.match(/\d/g).length===10;
    } else {
        return false;
    }
}
document.getElementById("phonenumber").innerHTML = phonenumber(inputtxt);

function addressValidation(val) {
    console.log("val: " + val);
    var streetregex = /^[a-zA-Z0-9-\/] ?([a-zA-Z0-9-\/]|[a-zA-Z0-9-\/] )*[a-zA-Z0-9-\/]$/;
    if (streetregex.test(val)) 
    {
        console.log("true");
    } 
    else 
    {
        console.log("false");
    }
}
document.getElementById("address").innerHTML = addressValidation(val);
