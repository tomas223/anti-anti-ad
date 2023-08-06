document.getElementById("execute").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting
      .executeScript({
        target: { tabId: tabs[0].id },
        files: ["js/contentScript.js"],
      })
      .then((response) => {
        // const statusElem = document.getElementById("status");
        // statusElem.innerHTML = "Script executed successfully.";
      })
      .catch((error) => {
        // this seem not to be working
        const statusElem = document.getElementById("status");
        statusElem.innerHTML = "Script execution failed: " + error.message;
        // statusElem.classList.add("alert");
      });
  });
});
