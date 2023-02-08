// This program is used for creating a dating site. The actual website is in the HTML file.
// user information
let firstName;
let lastName;
let hairColour;
let eyeColour;
let age;
let description;

/* This function will update the profile information when used. It will print out the profile information */
function updateInformation() {
    document.getElementById('image').src = image
    document.getElementById('first').innerText = 'First Name: ' + firstName
    document.getElementById('last').innerText = 'Last Name: ' + lastName
    document.getElementById('hair').innerText = 'Hair Colour: ' + hairColour
    document.getElementById('eye').innerText = 'Eye Colour: ' + eyeColour
    document.getElementById('age').innerText = 'Age: ' + age
    document.getElementById('info').innerText = 'Description: ' + description
}

// This function sets the variables for Lightning Mcqueen's appearance and description. It will also print out his information.
function profile1() {
    image = 'https://m.media-amazon.com/images/I/71zjkbH6xzL._AC_SX425_.jpg';
    firstName = 'Lightning'
    lastName = 'McQueen'
    hairColour = 'Red'
    eyeColour = 'Blue'
    age = 45
    description = 'Montgomery "Lightning" McQueen is a fictional anthropomorphic stock car who is the protagonist of the animated Pixar franchise Cars, including Cars, Cars 2, and Cars 3. He also appears in the TV series Cars Toons and Cars on the Road. McQueen is a playable character in each of the Cars video game installments and in other Disney/Pixar video games as well. He makes a cameo appearance in Planes: Fire & Rescue.[1] Lightning McQueen is the face of the Cars brand, and he is a popular mascot for Disney. (en.wikipedia.org)'
    updateInformation();
}

// This function sets the variables for Mater's appearance and description. It will also print out his information.
function profile2() {
    image = 'https://upload.wikimedia.org/wikipedia/en/f/f7/Mater_%28Cars%29.png';
    firstName = 'Mater'
    lastName = '?'
    hairColour = 'Brown'
    eyeColour = 'Brown'
    age = 71
    description = 'Sir Tow Mater, most commonly referred to as Tow Mater or simply Mater is a fictional character in the Cars media franchise produced by Pixar. Mater debuted as a supporting character in the film Cars, as the local tow truck in Radiator Springs, eventually becoming the best friend of series protagonist Lightning McQueen.(en.wikipedia.org)'
    updateInformation();
}

// This function sets the variables for Chick Hicks appearance and description. It will also print out his information.
function profile3() {
    image = 'https://static.wikia.nocookie.net/pixar/images/7/71/Cars_chick_hicks.jpg/revision/latest?cb=20080712053156';
    firstName = 'Chick'
    lastName = 'Hicks'
    hairColour = 'Green'
    eyeColour = 'Amber'
    age = 43
    description = 'Chick Hicks is the main antagonist of the 2006 Disney/Pixar animated film, Cars. He is a racer who likes cheating. After winning the Piston Cup, Chick apparently lost his career.(disney.fandom.com)'
    updateInformation();
}

// This function will print blank characters when called. Basically, the user would be "logging off"
function logOff() {
    document.getElementById('image').src = ''
    document.getElementById('first').innerText = ''
    document.getElementById('last').innerText = ''
    document.getElementById('hair').innerText = ''
    document.getElementById('eye').innerText = ''
    document.getElementById('age').innerText = ''
    document.getElementById('info').innerText = ''
}