const companies = [
    {
      name: "Mission",
      description: "Nous nous efforçons d'aider les marques à prendre des décisions éclairées, en utilisant les données pour assurer la satisfaction de leurs clients. Forts d'une équipe de plus de 150 membres, nous collaborons avec plus de 500 entreprises à travers le monde pour offrir quotidiennement des expériences et des produits digitaux de qualité à leur clientèle.",
    },
    {
      name: "Offre",
      description: "Nous mettons à disposition une plateforme complète qui répond aux besoins de toutes les équipes. Grâce à nos solutions d'A/B testing, de développement full stack et de personnalisation, les marketeurs, les équipes produits et les développeurs peuvent accroître les conversions, l'engagement et le chiffre d'affaires, tout en travaillant avec leurs outils favoris dans des environnements sécurisés et riches en fonctionnalités.",
    },
    {
      name: "Valeurs",
      description: "Nous nous consacrons entièrement à la protection des intérêts de nos clients, en nous ajustant avec souplesse à leurs exigences. Ensemble, nous affrontons les défis, explorons l'innovation sans réserve et adoptons une approche honnête envers les opportunités qui se présentent. Rejoignez-nous dans cette aventure captivante où la technologie rencontre un service client d'exception !",
    },
    {
      name: "Confiance",
      description: "De nombreuses marques ont déjà opté pour notre solution comme partenaire de confiance. De multiples entreprises, dans votre secteur, personnalisent déjà l'expérience de leurs visiteurs grâce à notre plateforme.",
    },
  ];

  
  
  // Fonction d'affichage des informations sur l'entreprise
  const displayCompanyInfo = (company) => {
    document.getElementById("company-name").innerText = company.name;
    document.getElementById("company-description").innerText = company.description;
    document.getElementById("company-info").style.display = "block";
  };
  const resizeImages = () => {
    const images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
      images[i].style.maxWidth = "200px";
    }
  };


  // Function to position footer at the bottom
const positionFooterAtBottom = () => {
    const footer = document.querySelector("footer");
    const html = document.documentElement;
    const body = document.body;
  
    const htmlHeight = Math.max(html.scrollHeight, html.offsetHeight);
    const bodyHeight = Math.max(body.scrollHeight, body.offsetHeight);
  
    if (htmlHeight > bodyHeight) {
      footer.style.position = "absolute";
      footer.style.bottom = 0;
      footer.style.width = "100%";
    } else {
      footer.style.position = "relative";
    }
  };
  
  // Ajoute la liste des images
  document.getElementById("mission").addEventListener("click", () => {
    displayCompanyInfo(companies[0]);
  });
  
  document.getElementById("offre").addEventListener("click", () => {
    displayCompanyInfo(companies[1]);
  });
  
  document.getElementById("valeurs").addEventListener("click", () => {
    displayCompanyInfo(companies[2]);
  });
  
  document.getElementById("confiance").addEventListener("click", () => {
    displayCompanyInfo(companies[3]);
  });

  resizeImages();
  positionFooterAtBottom();