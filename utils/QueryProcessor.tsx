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

  if (query.toLowerCase().includes("What is your name?")) {
    return ( "rmmahmou-313" );
  }

  if (query.toLowerCase().includes("Which of the following numbers is the largest:")) {
    const numbers = [81, 98, 3];
    const largest = Math.max(...numbers);
    return `The largest number is ${largest}`;
  }

  return "";
}



