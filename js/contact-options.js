document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("topic");
  const adoptionBox = document.getElementById("adoptionBox");
  const volunteeringBox = document.getElementById("volunteeringBox");
  const donationBox = document.getElementById("donationBox");

  select.addEventListener("change", () => {
    // 默认全部隐藏
    adoptionBox.style.display = "none";
    volunteeringBox.style.display = "none";
    donationBox.style.display = "none";

    // 根据选择显示对应的输入框
    if (select.value === "adoption") {
      adoptionBox.style.display = "block";
    } else if (select.value === "volunteering") {
      volunteeringBox.style.display = "block";
    } else if (select.value === "donation") {
      donationBox.style.display = "block";
    }
    // general 不需要额外输入框，所以不处理
  });
});
