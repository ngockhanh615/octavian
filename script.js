document.addEventListener('DOMContentLoaded', function() {
    // Lắng nghe sự kiện khi liên kết được nhấp vào
   var mainMenu = document.getElementById('main-menu');
    
      if (mainMenu) {
        mainMenu.addEventListener('click', function (e) {
          var selectedLink = e.target.closest('a'); 
      if (selectedLink) {
        // Loại bỏ class 'selected' từ tất cả các liên kết
        var menuLinks = document.querySelectorAll('.menu li a');
        menuLinks.forEach(function(link) {
          link.classList.remove('selected');
        });
  
        // Thêm class 'selected' cho liên kết được chọn
        selectedLink.classList.add('selected');
      }
    });
      }
  });
  
  
  function showContent(contentId, url) {
    var iframe = document.getElementById('frame');
     if (iframe) {
    iframe.src = url;
     }
    var contents = document.querySelectorAll('.content-container > div');
    contents.forEach(function(content) {
      content.style.display = 'none';
    });
  
    var selectedContent = document.getElementById(contentId);
    if (selectedContent) {
      selectedContent.style.display = 'block';
    }
  }
  