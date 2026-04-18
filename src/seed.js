const fs = require('fs');

// --- Configuration ---
const NUMBER_OF_PETS = 100; // You can change this to 200 or 500!

const breeds = ["Golden Retriever", "Husky", "Beagle", "Siamese Cat", "Persian Cat", "Bulldog", "Poodle", "African Basenji"];
const categories = ["Dog", "Cat", "Other"];
const names = ["Buddy", "Luna", "Charlie", "Misty", "Max", "Bella", "Rocky", "Simba", "Coco", "Duke", "Zoe"];

const generateData = () => {
  const pets = [];
  
  for (let i = 1; i <= NUMBER_OF_PETS; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const breed = breeds[Math.floor(Math.random() * breeds.length)];
    const name = names[Math.floor(Math.random() * names.length)];
    
    pets.push({
      id: i.toString(),
      name: `${name} ${i}`, // e.g., Buddy 42
      breed: breed,
      category: category,
      // Random high-quality images based on the pet category
      image_url: `https://loremflickr.com/400/300/${category.toLowerCase()}?lock=${i}`,
      description: `This sweet ${breed} is healthy, vaccinated, and looking for a loving home!`,
      isFavorite: Math.random() > 0.85 // About 15% will be marked as favorites
    });
  }

  // Final structure for db.json
  const dbContent = {
    pets: pets,
    organizations: [
      { 
        id: "1", 
        name: "Petflix Rescue Center", 
        location: "Nairobi", 
        email: "adopt@petflix.com",
        phone: "+254 700 000 000"
      }
    ],
    users: []
  };

  // Convert the object to a string and save it to db.json
  fs.writeFileSync('db.json', JSON.stringify(dbContent, null, 2));
  console.log(`🚀 Success! Generated ${NUMBER_OF_PETS} pets in db.json`);
};

generateData();