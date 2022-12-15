const insert = (content) => {
    console.log(content);
    const elements = document.querySelectorAll('span[data-text="true"]');

    if (elements.length === 0) {
		return;
	}

    const element = elements[0];
    element.innerText = content; //idk what if \n in content
    // const parentDiv = element.parentNode;
    // element.remove();
    // const newSpan = document.createElement("span");
    // newSpan.setAttribute("data-text", "true");
    // newSpan.innertext = content;
    // parentDiv.appendChild(newSpan);

    return true;

}

chrome.runtime.onMessage.addListener(
  // This is the message listener
  (request, sender, sendResponse) => {
    if (request.message === 'inject') {
      const { content } = request;
		
      const result = insert(content);
			
      if (!result) {
        sendResponse({ status: 'failed' });
      }

      sendResponse({ status: 'success' });
    }
  }
);