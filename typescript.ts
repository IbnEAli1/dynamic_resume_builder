const resumeForm = document.getElementById('resumeForm') as HTMLFormElement | null;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement | null;
const photoInput = document.getElementById('photo') as HTMLInputElement | null;
const photoPreview = document.getElementById('photoPreview') as HTMLImageElement | null;

// Handle photo preview
if (photoInput && photoPreview) {
  photoInput.addEventListener('change', () => {
    const file = photoInput.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (photoPreview) {
          photoPreview.src = e.target?.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  });
}

// Function to generate resume
if (resumeForm && resumeOutput) {
  resumeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const fname = (document.getElementById('fname') as HTMLInputElement).value;
    const dob = (document.getElementById('dob') as HTMLInputElement).value;
    const martial = (document.getElementById('martial') as HTMLInputElement).value;
    const gender = (document.getElementById('gender') as HTMLInputElement).value;
    const cnic = (document.getElementById('cnic') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const nationality = (document.getElementById('nationality') as HTMLInputElement).value;

    const resumeHTML = `
      <h2>Generated Resume</h2>
      <img src="${photoPreview?.src}" alt="Uploaded Photo" style="max-width: 200px; max-height: 200px; border: 1px solid #ccc;">
      <p><strong>Full Name:</strong> ${name}</p>
      <p><strong>Father's Name:</strong> ${fname}</p>
      <p><strong>Date of Birth:</strong> ${dob}</p>
      <p><strong>Marital Status:</strong> ${martial}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>CNIC:</strong> ${cnic}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Nationality:</strong> ${nationality}</p>
    `;
    resumeOutput.innerHTML = resumeHTML;
  });
} else {
  console.log('Form or output div not found in the DOM!');
}
