
export const CarData = {
    name: "car", // Unique identifier for the schema
    type: "document", // Declares this as a document schema
    title: "Car Data", // Display name in Sanity Studio
    fields: [
      {
        name: "carName",
        type: "string",
        title: "Car Name", // Proper capitalization
      },
      {
        name: "purpose",
        type: "string",
        title: "Purpose", 
      },
      {
        name: "length",
        type: "number",
        title: "Length of Car", 
      },
      {
        name: "price",
        type: "string",
        title: "Price of Rent", // Fixed capitalization
      },
      {
        name: "carImage",
        type: "image",
        title: "Car Image", // Fixed property name and capitalization
        options: {
          hotspot: true, // Enables cropping and hotspot functionality
        },
      },
      {
        name: "carDescription",
        type: "string",
        title: "Detailed Description", // Renamed for better clarity
      },
      {
        name:"id",
        type:"string",
        tittle:"give me Car id"
      }
    ],
  };
  