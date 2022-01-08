// Axios Request to API to retrieve search data
async function getGif(search) {
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', 
    { params: { q: search, api_key: 'UyKxr8V3DW9ORMWcibS18FwEwEepSIVu' }});
    console.log(res.data);
   
    const obj = res.data.data; // Array of objects with gif data
    const randomKey = obj[randomValue(obj)]; // use randomValue() to extract a single gif image

    // Append Gif to results section
    try{
        const results = document.getElementById('results');
        const gif = document.createElement('img');
        gif.classList.add('w-25');
        gif.src = randomKey.images.original.url; // retrieves original url endpoint
        results.append(gif);
    } catch(error){
        alert('Invalid Search!');
    }
}

// Selects a random key from the object array (Randomizes gif results on screen)
function randomValue(obj){
    const objArr = Object.keys(obj); // Object.keys returns an array of objects property names
    return objArr[Math.floor(Math.random() * objArr.length)];
}

// Retrieve Gif data on submit
const form = document.getElementById('search-form');
form.addEventListener("submit", function(e){
    e.preventDefault();
    const search = document.getElementById('search-bar').value;
    getGif(search);
})

// Remove all images button
const removeBtn = document.getElementById('removeBtn');
removeBtn.addEventListener("click", function(e){
    results.innerHTML = "";
})