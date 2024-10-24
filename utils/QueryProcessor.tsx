export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "rmmahmou" );
  }

  if (query.includes("What is your name?")) {
    return ( "rmmahmou-313" );
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest:")) {
    // Extract numbers from the query using a regular expression
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers) {
      const largest = Math.max(...numbers);
      return `The largest number is ${largest}`;
    }
    return "No numbers found in the query";
  }

  return "";
}



