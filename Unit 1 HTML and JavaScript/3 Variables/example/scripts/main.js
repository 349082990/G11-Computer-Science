// user information
let firstName = 'Joel';
let lastName = 'Osteen';
let username = 'joelosteen';
let verifiedStatus = true;

// tweet/message information
let message;
let retweetCount;
let favouriteCount;
let date;
let time;

loadTweet();
updateContent();

// assign starting tweet information
function loadTweet() {
    message = 'A true friend walks in when everyone else walks out. A true friend doesn\'t rub it in when you make a mistake. They rub it out.';
    retweetCount = 2238;
    favouriteCount = 1227;
    date = '31 Oct 13';
    time = '4:25 PM';
}

/*
pre: HTML elements exist with the following ids:
    name - for the user's first and last name
    username - for the user's twitter handle
    message - for the tweet/message
    counts - for the number of retweets and likes
    datetime - for the date and time the tweet was sent

post: show tweet information in the HTML elements listed above.
*/
function updateContent() {
    document.getElementById('name').innerText = firstName + " " + lastName + " " + verifiedStatus;
    document.getElementById('username').innerText = "@" + username;
    document.getElementById('tweet').innerText = message;
    document.getElementById('interactions').innerText = retweetCount + " Retweets" + "\n" + favouriteCount + " Favourites";
    document.getElementById('time').innerText = time + " * " + date;
}


/*
post: variables have been assigned new data
*/
function updateTweet() {
    firstName = 'Spencer';
    lastName = 'Boldman';
    username = 'spencerboldman';
    message = 'Success is not built on success. It\'s built on failure. It\'s built on frustration. Sometimes it\'s built on catastrophe.'
    retweetCount = 77;
    favouriteCount = 188;
    date = '23 May 2015'
    time = '4:38 PM'
    updateContent();
}
