// const modal = document.getElementById("formModal");
// const openBtn = document.getElementById("openFormBtn");
// const closeBtn = document.getElementById("closeFormBtn");
// const submitBtn = document.getElementById("submitBtn");
// const phoneInput = document.getElementById("phoneInput");
// const statusMsg = document.getElementById("statusMsg");

// const API_URL = "https://script.google.com/macros/s/AKfycby5FXIUAeRIJgsJpeEf4lJOcogzfgDMtOQWR-KQ45R-ic314UuDKTVaKo04whL8dp5iQA/exec"; // from Apps Script deployment

// openBtn.addEventListener("click", () => modal.classList.remove("hidden"));
// closeBtn.addEventListener("click", () => modal.classList.add("hidden"));

// submitBtn.addEventListener("click", async () => {
//   const phone = phoneInput.value.trim();
//   if (!phone) {
//     statusMsg.textContent = "Please enter a phone number.";
//     statusMsg.className = "text-red-500 text-center text-sm";
//     return;
//   }
//   statusMsg.textContent = "Saving...";
//   statusMsg.className = "text-gray-500 text-center text-sm";

//   try {
//     const res = await fetch(API_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ phone })
//     });
//     const data = await res.json();
//     if (data.status === "success") {
//       statusMsg.textContent = "Phone number saved!";
//       statusMsg.className = "text-green-500 text-center text-sm";
//       phoneInput.value = "";
//     } else {
//       statusMsg.textContent = "Error saving data.";
//       statusMsg.className = "text-red-500 text-center text-sm";
//     }
//   } catch (err) {
//     statusMsg.textContent = "Error connecting to server.";
//     statusMsg.className = "text-red-500 text-center text-sm";
//   }
// });



    // const openPopup = document.getElementById("openPopup");
    // const openPopup = document.getElementsByClassName("openPopup")[0];
    // const openPopupButtons = document.querySelectorAll(".openPopup");
    // const popupOverlay = document.getElementById("popupOverlay");
    // const closePopup = document.getElementById("closePopup");
    // const closePopupBottom = document.getElementById("closePopupBottom");

    // openPopup.addEventListener("click", () => {
    //   popupOverlay.classList.remove("hidden");
    // });

    // closePopup.addEventListener("click", () => {
    //   popupOverlay.classList.add("hidden");
    // });

    // closePopupBottom.addEventListener("click", () => {
    //   popupOverlay.classList.add("hidden");
    // });

    // // Close popup when clicking outside the box
    // popupOverlay.addEventListener("click", (e) => {
    //   if (e.target === popupOverlay) {
    //     popupOverlay.classList.add("hidden");
    //   }
    // });




    const openPopupButtons = document.querySelectorAll(".openPopup");
const popupOverlay = document.getElementById("popupOverlay");
const closePopup = document.getElementById("closePopup");
const closePopupBottom = document.getElementById("closePopupBottom");

// Open popup from all buttons with .openPopup
openPopupButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    popupOverlay.classList.remove("hidden");
  });
});

// Close popup
closePopup.addEventListener("click", () => {
  popupOverlay.classList.add("hidden");
});

closePopupBottom.addEventListener("click", () => {
  popupOverlay.classList.add("hidden");
});

// Close popup when clicking outside the box
popupOverlay.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.classList.add("hidden");
  }
});
