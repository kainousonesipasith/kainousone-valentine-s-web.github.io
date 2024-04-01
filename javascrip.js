
function onYesClick() {
    document.getElementById('noButton').style.display = ''; // Hide the No button
    document.getElementById('displayedImage').src = "hfull.jpg";
    document.getElementById('yesButton').classList.add('smaller');
  }
  

  var clickCount = 0;

function onChangeClick() {
    // Get the displayed image element
    var displayedImage = document.getElementById('displayedImage');
    document.getElementById('yesButton').classList.add('bigger');

    // Toggle between two images based on the click count
    if (clickCount  === 0) {
        displayedImage.src = "holding kerb f.png";
        document.getElementById("demo").innerHTML ="hai o krd eik thuea "
    } else{
        displayedImage.src = "heart broken.png";
        document.getElementById("demo").innerHTML ="elee wa T-T"
        document.getElementById("demo1").innerHTML ="(u can click yes only)"
    }
    
    // Increment the click count
    clickCount++;
}
function onNoClick() {
    // Remove the 'bigger' class from the 'yesButton' element
    document.getElementById('yesButton').classList.remove('bigger');

    // Hide the No button
    document.getElementById('noButton').style.display = 'none';

    // Return default values
    return getDefaultValues();
}
  