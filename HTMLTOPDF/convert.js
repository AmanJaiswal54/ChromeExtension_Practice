// html2pdf()
//   .from(document.body)
//   .set({ format: pageSize, orientation: orientation })
//   .toPdf()
//   .get("datauristring")
//   .then((pdf) => {
//     chrome.runtime.sendMessage({ message: "html2pdf_complete", pdf: pdf });
//   });

// -------------------------------

// var element = document.body;
// var options = {
//   margin: 1,
//   filename: "myfile.pdf",
//   image: { type: "jpeg", quality: 0.98 },
//   html2canvas: { scale: 2 },
//   jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
// };
// html2pdf(element, options);

html2pdf(document.body);

// -------------------------------

// chrome.storage.sync.get(["pageSize", "orient"], (result) => {
//   html2pdf()
//   .from(document.body)
//   .set({ format: result.pageSize, orientation: result.orient })
//   .toPdf()
//   .get("datauristring")
//   .then((pdf) => {
//     chrome.runtime.sendMessage({ message: "html2pdf_complete", pdf: pdf });
//   });
// });

// ----------------------------