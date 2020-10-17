const getChangeLogoLinkScript = () => {
  const result = `
    const logoLink = document.getElementsByTagName('header')[0].childNodes[0];
    
    logoLink.href = "https://www.sahaj.ai?utm_source=clamp";
  `;

  return result;
}

module.exports = getChangeLogoLinkScript;
