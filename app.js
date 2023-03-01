"use strict";

const API = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';

console.log("Let's get this party started!");

$('form').on('submit', getGif);


/** getGif: use form value to GET gif search results, invoking add gif to page,
 *  and clearing the form
 */
async function getGif(event) {
    event.preventDefault();
    const searchTermValue = $("#gif-search").val();
    const response = await axios.get(`http://api.giphy.com/v1/gifs/search`,
    {params: {q: searchTermValue, api_key: API}});
    const gifImageURL = response.data.data[0].images.original.url
    displayGif(gifImageURL);
    // $("form").get(0).reset();
    $("#gif-search").val('');
}

/** displayGif: appends gif to the DOM */
function displayGif(gifImgUrl) {
    const gifImg = `<img src=${gifImgUrl}>`;
    $('#Gif-container').append(gifImg);
}


$('button').on("click", deleteGifs);

/** deleteGifs: removes all gif from DOM */
function deleteGifs(event) {
    $('#Gif-container').html('');
}
