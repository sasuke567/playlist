/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = [
    "Congratulations",
    "Better Now",
    "White Iverson",
    "it's different"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var links = [
    "https://www.youtube.com/watch?v=SC4xMk98Pdc",

    "https://www.youtube.com/watch?v=UYwF-jdcVjY",
    "https://www.youtube.com/watch?v=SLsTskih7_I",
    "https://www.youtube.com/watch?v=UHbDJ1oPuGo"
    ]
var images = [
    '<img src="https://i.ytimg.com/vi/SC4xMk98Pdc/maxresdefault.jpg">',
    '<img src="https://throwbackmag.com/site/wp-content/uploads/2018/10/postmalonebymicanews.jpg">',
    '<img src="https://i1.sndcdn.com/artworks-000154908266-8yy6fb-t500x500.jpg">',
    '<img src="http://cdnlinks.linkfire.com/5b3b5be8ea862_400x400bb.jpg">'
    ];




    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
    songs.forEach(function(song) {
     $("#songs").append("<p>" + song + "</p>");   
    })

    images.forEach(function(image) {
        $("#images").append("<p>" + image + "</p>");
    })

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
}




function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
