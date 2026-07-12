// Calculates current age from a birth year/month, recomputed every
// time this runs (page load) rather than being a hardcoded number
// baked into the data — so it stays accurate without manual edits.
export function calculateAge(birthYear, birthMonth) {
  const today = new Date();
  const birthMonthIndex = birthMonth - 1; // JS months are 0-indexed

  let age = today.getFullYear() - birthYear;
  if (today.getMonth() < birthMonthIndex) {
    age--;
  }
  return age;
}
