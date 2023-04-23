// Variables Declarations
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let date = document.getElementById("date");
let length = document.getElementById("length");
let course = document.getElementById("course");
let teacher = document.getElementById("teacher");
let instruct = "Instructors";
let form = document.getElementById("form");
let container = document.querySelector(".container");
let unit = document.getElementById("unit");

let certificate_no = "UC-3308c41b-93cb-485a-9ee3-450729f8ef73";

// Random Number Generation for Certificate Number & Reference Number
a = 400000; //Min value
b = 485000; //Max Value
let rand = a + (b - 1) * Math.random(); //Main Formula
let rand2 = Math.round(rand);

c = 30; //Min value
d = 90; //Max Value
let rand3 = c + (d - 1) * Math.random(); //Main Formula
let rand4 = Math.round(rand3);

e = 1; //Min value
f = 9; //Max Value
let rand5 = e + (f - 1) * Math.random(); //Main Formula
let rand6 = Math.round(rand5);

// Main Code Starts Here
let generate = document.getElementById("Generate");
generate.addEventListener("click", (e) => {
    let first_name = fname.value;
    let last_name = lname.value;
    let selectedUnit = unit.value;
    let Date = date.value;
    let c_length = length.value;
    let course_name = course.value;
    let instructor = teacher.value;
    if (instructor.includes(",")) {
        instruct = "Instructors";
    }
    e.preventDefault();
    fname.value = "";
    lname.value = "";
    course.value = "";
    date.value = "";
    teacher.value = "";
    length.value = "";
    if (selectedUnit === 'hours') {
        selectedUnit = 'hours';
    } else if (selectedUnit === 'mins') {
        selectedUnit = 'mins';
    }
    form.style.display = "none";
    container.style.backgroundColor = "white";

    const output = document.getElementById('output');
    let certificate = document.getElementById("certificate");
    // store the certificate number in variable
    let certificate_no = `UC-3308c41b-93cb-485a-9ee3-${rand2}f8ef${rand4}`;
    certificate.style.backgroundColor = "rgba(200, 194, 194, 0.073)";
    certificate.style.display = "block";
    certificate.innerHTML = `<div class="logo">
  <img id="udemy-logo" src="img/udemy-logo.png" alt="">
  <div class="right-side">
                    <div class="c-no">Certificate no: ${certificate_no}</div>
                    <div class="c-url">Certificate url: ude.my/UC-3308c41b-93cb-485a-9ee3-${rand2}f8ef${rand4}</div>
                    <div class="ref-no">Reference Number: 000${rand6}</div>
                </div>
</div>
<div class="content">
  <h3>CERTIFICATE OF COMPLETION</h3>
  <h1 id="course-name">${course_name}</h1>
  <h4 id="instructor">${instruct}&nbsp;<b>${instructor}</b></h4>
</div>
<div class="user">
  <h1 id="name">${first_name} ${last_name}</h1>
  <h4>Date &nbsp;<b>${Date}</b></h4>
  <h4>Length &nbsp;<b>${c_length} total ${selectedUnit}</b></h4>
</div>
`;
    document.getElementById("download").style.display = "block";
});

//Download PDF
let download = document.getElementById("download");
download.addEventListener("click", () => {
    var certificate = document.getElementById("certificate");
    var opt = {
        margin: 1,
        filename: `${certificate_no}.pdf`,
        image: {type: "png", quality: 1},
        html2canvas: {scale: 1},
        jsPDF: {
            unit: "px",
            format: [certificate.offsetWidth, certificate.offsetHeight], // Set the format to the width and height of the
            // Certificate div
            orientation: certificate.offsetWidth > certificate.offsetHeight ? "landscape" : "portrait" // Set the orientation based on the aspect ratio of the Certificate div
        },
    };


    html2pdf().set(opt).from(certificate).save();
});
