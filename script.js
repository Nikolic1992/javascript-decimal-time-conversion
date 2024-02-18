function toIndustrial(time) {
  if (typeof time === "string") {
    const [hours, minutes] = time.split(":").map(Number);
    return parseFloat((hours + minutes / 60).toFixed(2));
  } else if (typeof time === "number") {
    return parseFloat((time / 60).toFixed(2));
  } else {
    throw new Error("Invalid input");
  }
}

function toNormal(time) {
  let hours = Math.floor(time);
  let minutes = Math.round((time - hours) * 60);
  if (minutes >= 60) {
    minutes -= 60;
    hours += 1;
  }
  return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
}

// Test cases
console.log(toIndustrial(1)); // Output: 0.02
console.log(toIndustrial("1:45")); // Output: 1.75
console.log(toNormal(0.33)); // Output: "0:20"
