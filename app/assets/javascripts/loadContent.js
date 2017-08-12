function loadContent(content_name) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById("content_container").innerHTML = xmlhttp.responseText;
      $('div#menu a').each(function () {
        if (this.id == content_name)
          this.className = "selected";
        else
          this.className = "";
      });
    }
  }
  xmlhttp.open("GET", "get_content.php?name=" + content_name, true);
  xmlhttp.send();
}