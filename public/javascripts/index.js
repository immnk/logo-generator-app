var LogoFactory = (function() {
  function init() {
    console.log("init called.");
    var rows = document.getElementById("rows");
  }

  function download(index) {
    console.log("download called at:", index);
    var col = rows.getElementsByClassName("col-md-4")[index];
    domtoimage.toJpeg(col.getElementsByClassName("fal")[0], {
        quality: 0.95
      })
      .then(function(dataUrl) {
        var link = document.createElement('a');
        link.download = col.getElementsByClassName("card-text")[0].innerText + '.jpeg';
        link.href = dataUrl;
        link.click();
      });
  }

  return {
    init: init,
    download: download
  }
})();

LogoFactory.init();
