// State
const names = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const occupations = ["Writer", "Teacher", "Programmer", "Designer", "Consultant"];
const freelancers = [
  { name: "Alice", occupation: "Writer", startingPrice: 30 },
  { name: "Bob", occupation: "Teacher", startingPrice: 50 }
];

// DOM Manipulation
const freelancerContainer = document.getElementById("freelancerContainer");

// Initial Rendering
function renderFreelancers() {
  freelancerContainer.innerHTML = "" ;
  freelancers.forEach((freelancer) => {
    const freelancerDiv = document.createElement("div");
    freelancerDiv.textContent = `${freelancer.name}, ${freelancer.occupation}, $${freelancer.startingPrice}`;
    freelancerContainer.appendChild(freelancerDiv);
  });
}

// Average Starting Price 
function calculateAverageStartingPrice() {
  const totalStartingPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
  return totalStartingPrice / freelancers.length || 0; 
}

// Updating DOM with Average Starting Price
function updateAverageStartingPrice() {
  const averageStartingPrice = calculateAverageStartingPrice();
  const message = document.createElement("p");
  message.textContent = `Average Starting Price: $${averageStartingPrice.toFixed(2)}`;
  freelancerContainer.appendChild(message);
}

// Freelancer Generation
function generateRandomFreelancer() {
  console.log("Generating random freelancer");
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  const randomStartingPrice = Math.floor(Math.random() * 100) + 30; 

  const newFreelancer = { name: randomName, occupation: randomOccupation, startingPrice: randomStartingPrice };
  freelancers.push(newFreelancer);

  renderFreelancers();
  updateAverageStartingPrice();
}

// Interval for Adding Freelancers
setInterval(generateRandomFreelancer, 4500 ); 

renderFreelancers();
updateAverageStartingPrice();
