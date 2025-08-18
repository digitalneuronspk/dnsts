let dataset = [];

// Load JSON file
data = "./inter_data.json"

fetch(data) // Your JSON file path
  .then(res => res.json())
  .then(data => {
    dataset = data;
    console.log("Dataset loaded:", dataset.length, "rows");
  })
  .catch(err => console.error("Error loading JSON:", err));

  document.getElementById("searchBtn").addEventListener("click", () => {
  const cnic = document.getElementById("cnicInput").value.trim();
  const resultDiv = document.getElementById("result");

  const record = dataset.find(row => String(row.CNIC).trim() === cnic);

  if (record) {
    resultDiv.innerHTML = `
      <div class="p-4 bg-green-100 rounded-lg">
        <p><strong>Serial:</strong> ${record.Serial}</p>
        <p><strong>Seat No:</strong> ${record.SeatNo}</p>
        <p><strong>Name:</strong> ${record.CandidateName}</p>
        <p><strong>CNIC:</strong> ${record.CNIC}</p>
        <p><strong>District:</strong> ${record.District}</p>
        <p><strong>Score:</strong> ${record.Score}</p>
        <p><strong>Gender:</strong> ${record.Gender}</p>
      </div>
    `;
  } else {
    resultDiv.innerHTML = `<p class="text-red-500">No record found for CNIC or incorrect : ${cnic}</p>`;
  }
});


// // Search function
// document.getElementById("searchBtn").addEventListener("click", () => {
    
//   const cnic = document.getElementById("cnicInput").value.trim();
//   const resultDiv = document.getElementById("result");

//   if (!cnic) {
//     resultDiv.innerHTML = `<p class="text-red-500">Please enter a CNIC.</p>`;
//     return;
//   }

//   // Find matching record
//   const record = dataset.find(row => String(row.CNIC) === cnic);

//   if (record) {
//     resultDiv.innerHTML = `
//       <div class="p-4 bg-green-100 rounded-lg">
//         <p><strong>Serial:</strong> ${record.Serial}</p>
//         <p><strong>Seat No:</strong> ${record.SeatNo}</p>
//         <p><strong>Name:</strong> ${record.CandidateName}</p>
//         <p><strong>CNIC:</strong> ${record.CNIC}</p>
//         <p><strong>District:</strong> ${record.District}</p>
//         <p><strong>Score:</strong> ${record.Score}</p>
//         <p><strong>Gender:</strong> ${record.Gender}</p>
//       </div>
//     `;
//   } else {
//     resultDiv.innerHTML = `<p class="text-red-500">No record found for CNIC: ${cnic}</p>`;
//   }
// });
