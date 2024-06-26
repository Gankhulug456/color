// Create and append the canvas element
const canvas = document.createElement('canvas');
canvas.id = 'colorWheel';
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);

// Create and append the image element
const imageElement = document.createElement('img');
imageElement.id = 'selectedImage';
imageElement.style.display = 'none'; // Hide the image initially
document.body.appendChild(imageElement);

// Create and append the name and info text elements
const nameElement = document.createElement('div');
nameElement.id = 'colorName';
document.body.appendChild(nameElement);

const infoElement = document.createElement('div');
infoElement.id = 'colorInfo';
document.body.appendChild(infoElement);

// Set up the canvas for drawing
canvas.style.backgroundColor = 'transparent';
const ctx = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 130;

// Define the colors and corresponding names and info
const colors = [
    "#CB0100", "#DE1619", "#E72F1D", "#F14700",
    "#F67405", "#F7D036", "#E9C200", "#F3B400",
    "⌗F7C603", "#F5CF6F", "#BECF5B", "#519F61",
    "#06924D", "#5AABB1", "#91C2CC", "#005AA2",
    "#40719A", "#090C23", "#150074", "#6C47B2",
    "#7E67FE", "#990050", "#F2306E", "#EE9BB5"
];
const names = [
    "Red", "Bright Red", "Crimson", "Orange Red",
    "Orange", "Yellow Orange", "Gold", "Amber",
    "Yellow", "Pale Yellow", "Light Green", "Green",
    "Dark Green", "Light Blue", "Sky Blue", "Blue",
    "Dark Blue", "Indigo", "Violet", "Purple",
    "Lavender", "Magenta", "Pink", "Light Pink"
];
const infos = [
    "Info about Red", "Info about Bright Red", "Info about Crimson", "Info about Orange Red",
    "Info about Orange", "Info about Yellow Orange", "Info about Gold", "Info about Amber",
    "Info about Yellow", "Info about Pale Yellow", "Info about Light Green", "Info about Green",
    "Info about Dark Green", "Info about Light Blue", "Info about Sky Blue", "Info about Blue",
    "Info about Dark Blue", "Info about Indigo", "Info about Violet", "Info about Purple",
    "Info about Lavender", "Info about Magenta", "Info about Pink", "Info about Light Pink"
];

// Function to draw a segment of the color wheel
function drawArcSegment(color, angleStart, angleEnd) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, angleStart, angleEnd);
    ctx.lineWidth = 100; // Adjust line width as needed
    ctx.strokeStyle = color;
    ctx.stroke();
}

// Function to draw the entire color wheel
function drawColorWheel() {
    const angleIncrement = (2 * Math.PI) / colors.length;
    for (let i = 0; i < colors.length; i++) {
        drawArcSegment(colors[i], angleIncrement * i, angleIncrement * (i + 1));
    }
}

// Add event listener to handle clicks on the canvas
canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const angle = Math.atan2(y - centerY, x - centerX) + Math.PI;
    const colorIndex = Math.floor(angle / (2 * Math.PI) * colors.length);
    const color = colors[colorIndex];

    imageElement.src = `images/${color}.png`; // Update the path as needed


    console.log(color);
    imageElement.style.display = 'block';
    nameElement.textContent = names[colorIndex]; // Update the name text
    infoElement.textContent = infos[colorIndex]; // Update the info text
});

// Draw the color wheel initially
drawColorWheel();
