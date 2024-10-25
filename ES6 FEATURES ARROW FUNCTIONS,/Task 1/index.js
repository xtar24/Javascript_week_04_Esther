const arrowFunction = (dob, year, name, location) => {
  
  const age = year - dob;

  console.log(`Hello ${name} from ${location}, your current age is ${age}`);
  
  return age;

};

arrowFunction(1980, 2024, "Ade", "Lagos");
