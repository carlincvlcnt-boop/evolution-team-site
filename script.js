// Botão de matrícula pelo WhatsApp
const whatsapp = document.createElement("a");

whatsapp.href = "https://wa.me/5585988072152?text=" +
  encodeURIComponent(
    "Olá! Tenho interesse em conhecer a Evolution Team e fazer minha matrícula. Gostaria de mais informações."
  );

whatsapp.target = "_blank";
whatsapp.rel = "noopener noreferrer";
whatsapp.innerText = "MATRICULE-SE PELO WHATSAPP";

whatsapp.style.position = "fixed";
whatsapp.style.bottom = "20px";
whatsapp.style.right = "15px";
whatsapp.style.background = "#d4af37";
whatsapp.style.color = "#111";
whatsapp.style.padding = "14px 18px";
whatsapp.style.borderRadius = "30px";
whatsapp.style.fontWeight = "bold";
whatsapp.style.fontSize = "12px";
whatsapp.style.textDecoration = "none";
whatsapp.style.zIndex = "9999";
whatsapp.style.boxShadow = "0 3px 12px #000";

document.body.appendChild(whatsapp);