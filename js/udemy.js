// Variables Declarations
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let date = document.getElementById('date');
let length = document.getElementById('length');
let course = document.getElementById('course');
let teacher = document.getElementById('teacher');
let form = document.getElementById('form');
let container = document.querySelector('.container');

let certificate_no = 'UC-3308c41b-93cb-485a-9ee3-450729f8ef73';

// Random Number Generation
const rand = (length) => {
  let minVal = '';
  let maxVal = '';

  for (let i = 0; i < length; i++) {
    minVal += 0;
    maxVal += 9;
  }

  return (
    Math.floor(Math.random() * (parseInt(maxVal) - parseInt(minVal))) +
    parseInt(minVal)
  );
};

const certificateNumber = `UC-${rand(4)}c${rand(2)}b-${rand(2)}cb-${rand(3)}a-${rand(2)}ee${rand(2)}-${rand(6)}f${rand(1)}ef${rand(2)}`; //prettier-ignore

// Main Code Starts Here
let generate = document.getElementById('Generate');
generate.addEventListener('click', (e) => {
  e.preventDefault();
  let instruct = teacher.value.includes(',') ? 'Instructors' : 'Instructor';

  form.style.display = 'none';
  container.style.backgroundColor = 'white';

  let certificate = document.getElementById('certificate');
  certificate.style.backgroundColor = 'rgba(200, 194, 194, 0.073)';
  certificate.style.display = 'block';
  certificate.innerHTML = `<div class="logo">
    <img id="udemy-logo" src="img/udemy-logo.png" alt="">
      <div class="right-side">
        <div class="c-no">Certificate no: ${certificateNumber}</div>
        <div class="c-url">Certificate url: ude.my/${certificateNumber}</div>
        <div class="ref-no">Reference Number: ${rand(4)}</div>
      </div>
  </div>
  <div class="content">
    <h3>CERTIFICATE OF COMPLETION</h3>
    <h1 id="course-name">${course.value}</h1>
    <h4>${instruct}&nbsp;<b>${teacher.value}</b></h4>
  </div>
  <div class="user">
    <h1 id="name">${fname.value} ${lname.value}</h1>
    <h4>Date &nbsp;<b>${date.value}</b></h4>
    <h4>Length &nbsp;<b>${length.value} total hours</b></h4>
  </div>
`;
  document.getElementById('download').style.display = 'block';
});

//Download PDF

let download = document.getElementById('download');
download.addEventListener('click', () => {
  var opt = {
    margin: 1,
    filename: `${certificateNumber}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'px', format: 'c2', orientation: 'landscape' },
  };

  html2pdf().set(opt).from(certificate).save();
});
