//Safen User Input Part I - htmlspecialchars

function htmlspecialchars(formData) {
    return formData.replace(/&/g, "&amp;")
                 .replace(/"/g, "&quot;")
                 .replace(/</g, "&lt;")
                 .replace(/>/g, "&gt;");
  // Insert your code here
}