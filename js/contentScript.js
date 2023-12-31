function main() {
  console.log("Removing ads");
  const targetClass = "pla-unit";
  const markerAttribute = "data-3a-processed";

  // Find all elements with given class
  const elements = document.getElementsByClassName(targetClass);

  if (elements.length < 1) {
    console.warn("Anti-Anti-Ad: No Ads found");
  }

  Array.from(elements).forEach((element) => {
    // Check if element is already processed
    if (element.getAttribute(markerAttribute)) return;

    // Find first child "<a>" element with HREF that doesn't start with "http(s)://www.googleadservices.com"
    const filteredLinks = Array.from(element.getElementsByTagName("a")).filter(
      (a) =>
        !a.href.startsWith("http://www.googleadservices.com") &&
        !a.href.startsWith("https://www.googleadservices.com")
    );
    const targetLink = filteredLinks[0];

    if (targetLink) {
      // Now go again and find all <a> children and replace their href with the targetLink's href
      const allLinks = Array.from(element.getElementsByTagName("a"));
      allLinks.forEach((link) => (link.href = targetLink.href));
    }

    // Mark each element so you don't have to do it again
    element.setAttribute(markerAttribute, "true");
  });
}

main();
