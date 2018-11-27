var LogoFactory = (function() {
  function init() {
    console.log("init called.");
    var rows = document.getElementById("rows");
    previewNotification(0);
  }

  function download(index) {
    console.log("download called at:", index);
    var col = rows.getElementsByClassName("col-md-4")[index];
    domtoimage.toJpeg(col.getElementsByClassName("icon")[0], {
        quality: 0.95
      })
      .then(function(dataUrl) {
        var link = document.createElement('a');
        link.download = col.getElementsByClassName("card-text")[0].innerText + '.jpeg';
        link.href = dataUrl;
        link.click();
      });
  }

  function hideLogo(index) {
    console.log("hide logo called at: ", index);
    var col = rows.getElementsByClassName("col-md-4")[index];
    var logoElement = col.getElementsByClassName("logo")[0];
    var display = logoElement.style.display;
    if (display == "" || display == "block")
      logoElement.style.display = "none";
    else
      logoElement.style.display = "block";
  }

  function previewNotification(index) {
    var node = rows.getElementsByClassName("col-md-4")[index].getElementsByClassName("icon")[0];
    domtoimage.toPng(node)
      .then(function(dataUrl) {
        document.getElementById("image_holder").src = dataUrl;
      })
      .catch(function(error) {
        console.error('oops, something went wrong!', error);
      });
  }

  function downloadAll() {
    for(var i=0;i<4;i++) {
      download(i);
    }
  }

  return {
    init: init,
    download: download,
    hideLogo: hideLogo,
    preview: previewNotification,
    downloadAll: downloadAll
  }
})();

LogoFactory.init();
