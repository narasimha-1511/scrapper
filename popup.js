document.getElementById('scrapeButton').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: scrapeCommentsAndFilter
      });
    });
  });
  
  function scrapeCommentsAndFilter() {
    function scrapeComments() {
      let comments = [];
      // Use querySelectorAll to select elements containing the comments
      let commentElements = document.querySelectorAll('ytd-comment-thread-renderer #content-text .yt-core-attributed-string');
  
      commentElements.forEach(element => {
        comments.push(element.innerText);
      });
  
      return comments;
    }
  
    function filterQuestions(comments) {
      return comments.filter(comment => comment.includes('?'));
    }
  
    function downloadCSV(questions) {
      let csvContent = "data:text/csv;charset=utf-8,";
      questions.forEach(question => {
        csvContent += question + "\r\n";
      });
  
      let encodedUri = encodeURI(csvContent);
      let link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "questions.csv");
      document.body.appendChild(link);
      link.click();
    }
  
    let comments = scrapeComments();
    let questions = filterQuestions(comments);
    downloadCSV(questions);
  }
  