window.onload = function () {
  const html2pdf = window.html2pdf;
  document.getElementById("download")
      .addEventListener("click", () => {
          const prescription = this.document.getElementById("prescription");
          console.log(prescription);
          console.log(window);
          var opt = {
              margin: 1,
              filename: 'myPrescription.pdf',
              image: { type: 'jpeg', quality: 0.98 },
              html2canvas: { scale: 2 },
              jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
          };
          html2pdf().from(prescription).set(opt).save();
      })
}