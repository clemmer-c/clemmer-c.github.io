// ---- Your certifications ----
// To add a new one: copy an entire { ... }, block below and edit its three values.
//   title  -> the certification's name
//   issuer -> who issued it
//   pdf    -> the filename of the certificate PDF, once you've uploaded it into the "certs" folder
//             (if you don't have the PDF yet, set this to null and no link will show)
// Commas matter: every entry except the last one needs a comma right after its closing }.

const certifications = [
  {
    title: "Google AI Essentials",
    issuer: "Google",
    pdf: "certs/google-ai-essentials.pdf"
  },

  // Example of how your next one will look — copy this shape, then delete the // marks:
  // {
  //   title: "Certification Name",
  //   issuer: "Issuing Organization",
  //   pdf: "certs/your-file-name.pdf"
  // },
];

// ---- Rendering code — you shouldn't need to touch anything below this line ----
const certList = document.getElementById("cert-list");

certifications.forEach((cert) => {
  const item = document.createElement("div");
  item.className = "cert-item";

  const info = document.createElement("div");
  info.innerHTML = `<h3>${cert.title}</h3><span class="issuer">${cert.issuer}</span>`;
  item.appendChild(info);

  if (cert.pdf) {
    const link = document.createElement("a");
    link.className = "go";
    link.href = cert.pdf;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "View certificate →";
    item.appendChild(link);
  }

  certList.appendChild(item);
});
