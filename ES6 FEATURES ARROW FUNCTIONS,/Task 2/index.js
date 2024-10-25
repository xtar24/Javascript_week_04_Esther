function userBioContent(userBio) {
  const { gender, occupation } = userBio;
  console.log(`This user is a ${gender} and works as a ${occupation}.`);
};

userBioContent({
  occupation: "Software Developer",
  height: "5.5ft",
  gender: "female",
  nationality: "Nigerian",
});

userBioContent({
  occupation: "Reseacher",
  height: "6ft",
  gender: "female",
  nationality: "British",
});

userBioContent({
  occupation: "Teacher",
  height: "5.8ft",
  gender: "Male",
  nationality: "American",
});
