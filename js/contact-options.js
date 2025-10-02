document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("topic");
  const adoptionBox = document.getElementById("adoptionBox");
  const volunteeringBox = document.getElementById("volunteeringBox");
  const donationBox = document.getElementById("donationBox");

  select.addEventListener("change", () => {
    
    adoptionBox.style.display = "none";
    volunteeringBox.style.display = "none";
    donationBox.style.display = "none";

    
    if (select.value === "adoption") {
      adoptionBox.style.display = "block";
    } else if (select.value === "volunteering") {
      volunteeringBox.style.display = "block";
    } else if (select.value === "donation") {
      donationBox.style.display = "block";
    }
    
  });
});
