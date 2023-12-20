function calculateTotalSpentByCategory(transactions) {
  // Create an object to store the total spent for each category
  const categoryTotals = {};

  // Iterate through each transaction
  transactions.forEach(transaction => {
    const { category, price } = transaction;

    // If the category is already in the totals object, add the price to it
    if (categoryTotals[category]) {
      categoryTotals[category] += price;
    } else {
      // If the category is not in the totals object, create a new entry
      categoryTotals[category] = price;
    }
  });

  // Convert the categoryTotals object into an array of objects with the required format
  const result = Object.keys(categoryTotals).map(category => ({
    category,
    totalSpent: categoryTotals[category],
  }));

  return result;
}

// Example usage:
const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656076810000,
    price: 20,
    category: 'Clothing',
    itemName: 'T-shirt',
  },
  {
    id: 3,
    timestamp: 1656076820000,
    price: 15,
    category: 'Food',
    itemName: 'Burger',
  },
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);
