

 function scrapeComments() {
  console.log("i started working")
   setTimeout(()=>{
    let comments = [];
    // Use querySelectorAll to select elements containing the comments
    let commentElements = document.querySelectorAll('ytd-comment-thread-renderer #content-text .yt-core-attributed-string');
  
    commentElements.forEach(element => {
      comments.push(element.innerText);
    });
      console.log(comments);

    chrome.runtime.sendMessage({message : comments},(respoinse)=>{
      console.log(respoinse)
    })

  },6000);
  
}


// Scrape comments and filter questions
let comments = scrapeComments();

// shubhamdtu20@gmail.com

// bhamshu
