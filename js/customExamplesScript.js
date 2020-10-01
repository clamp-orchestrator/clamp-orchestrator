const getExamplesScript = (tabData) => {
  const result = `
    const header1 = document.getElementById('${tabData[0].headerId}');
    const header2 = document.getElementById('${tabData[1].headerId}');
    const header3 = document.getElementById('${tabData[2].headerId}');
    const image1 = document.getElementById('${tabData[0].imageId}');
    const image2 = document.getElementById('${tabData[1].imageId}');
    const image3 = document.getElementById('${tabData[2].imageId}');
    
    const headerImageList = [
      {
        header: header1,
        image: image1
      },
      {
        header: header2,
        image: image2
      },
      {
        header: header3,
        image: image3
      },
    ];
    
    function addClass(element, className) {
      element.classList.add(className);
    }
    
    function removeClass(element, className) {
      element.classList.remove(className);
    }
    
    addClass(header1, 'highlight');
    addClass(image2, 'hide');
    addClass(image3, 'hide');
    
    function onHeaderClick(index) {
      headerImageList.map(function (element, elementIndex) {
        removeClass(element.header, 'highlight');
        addClass(element.image, 'hide');
        if (index === elementIndex) {
          addClass(element.header, 'highlight');
          removeClass(element.image, 'hide');
        }
      });
    }
    
    header1.addEventListener('click', function() { onHeaderClick(0) });
    header2.addEventListener('click', function() { onHeaderClick(1) });
    header3.addEventListener('click', function() { onHeaderClick(2) });
  `;

  return result;
};

module.exports = getExamplesScript;
