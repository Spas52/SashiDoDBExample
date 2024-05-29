// Import Parse
const Parse = require('parse/node');

// Initialize Parse
Parse.initialize('YOUR_APPLICATION_ID', 'YOUR_JAVASCRIPT_KEY');
Parse.serverURL = 'https://YOUR_APP_NAME.sashido.io/parse';  // Update with your server URL

// Function to create an entry
const createEntry = async (data) => {
  const YourClass = Parse.Object.extend('YourClassName'); // Replace 'YourClassName' with the name of your class
  const entry = new YourClass();

  // Set fields
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      entry.set(key, data[key]);
    }
  }

  try {
    const result = await entry.save();
    console.log('Entry inserted successfully:', result);
  } catch (error) {
    console.error('Error inserting entry:', error);
  }
};

// Define your data
const entry1 = { field1: 'value1', field2: 'value2' }; // Replace with your actual field names and values
const entry2 = { field1: 'value3', field2: 'value4' };
const entry3 = { field1: 'value5', field2: 'value6' };

// Insert entries
createEntry(entry1);
createEntry(entry2);
createEntry(entry3);
