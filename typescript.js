var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
var photoInput = document.getElementById('photo');
var photoPreview = document.getElementById('photoPreview');
// Handle photo preview
if (photoInput && photoPreview) {
    photoInput.addEventListener('change', function () {
        var _a;
        var file = (_a = photoInput.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                if (photoPreview) {
                    photoPreview.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                }
            };
            reader.readAsDataURL(file);
        }
    });
}
// Function to generate resume
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var fname = document.getElementById('fname').value;
        var dob = document.getElementById('dob').value;
        var martial = document.getElementById('martial').value;
        var gender = document.getElementById('gender').value;
        var cnic = document.getElementById('cnic').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var address = document.getElementById('address').value;
        var nationality = document.getElementById('nationality').value;
        var resumeHTML = "\n      <h2>Generated Resume</h2>\n      <img src=\"".concat(photoPreview === null || photoPreview === void 0 ? void 0 : photoPreview.src, "\" alt=\"Uploaded Photo\" style=\"max-width: 200px; max-height: 200px; border: 1px solid #ccc;\">\n      <p><strong>Full Name:</strong> ").concat(name, "</p>\n      <p><strong>Father's Name:</strong> ").concat(fname, "</p>\n      <p><strong>Date of Birth:</strong> ").concat(dob, "</p>\n      <p><strong>Marital Status:</strong> ").concat(martial, "</p>\n      <p><strong>Gender:</strong> ").concat(gender, "</p>\n      <p><strong>CNIC:</strong> ").concat(cnic, "</p>\n      <p><strong>Email:</strong> ").concat(email, "</p>\n      <p><strong>Phone:</strong> ").concat(phone, "</p>\n      <p><strong>Address:</strong> ").concat(address, "</p>\n      <p><strong>Nationality:</strong> ").concat(nationality, "</p>\n    ");
        resumeOutput.innerHTML = resumeHTML;
    });
}
else {
    console.log('Form or output div not found in the DOM!');
}
