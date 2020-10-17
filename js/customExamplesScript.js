const getExamplesScript = (exampleList) => {
  const result = `
    let currentExampleIndex = 0;
    const previousExample = document.getElementById("previous-example");
    const nextExample = document.getElementById("next-example");
    const example1 = document.getElementById("example-0");
    const example2 = document.getElementById("example-1");
    const example3 = document.getElementById("example-2");
    const exampleList = [example1, example2, example3];
    
    example2.classList.add("hide");
    example3.classList.add("hide");
    
    function selectExample(exampleList, showIndex) {
      exampleList.map((example, index) => {
        example.classList.add("hide");
        if (index === showIndex) {
          example.classList.remove("hide");
        }
      });
    }
    
    function selectNextExample(exampleList) {
      currentExampleIndex = (currentExampleIndex + 1) % 3;
      const showIndex = currentExampleIndex;
      
      selectExample(exampleList, showIndex);
    }
    
    function selectPreviousExample(exampleList) {
      currentExampleIndex = currentExampleIndex === 0 ? exampleList.length - 1 : (currentExampleIndex - 1);
      const showIndex = currentExampleIndex;
      
      selectExample(exampleList, showIndex);
    }
    
    nextExample.addEventListener('click', () => {
      selectNextExample(exampleList);
    });
    
    previousExample.addEventListener('click', () => {
      selectPreviousExample(exampleList);
    });
  `;

  return result;
};

module.exports = getExamplesScript;
