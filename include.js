function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '');

  elements.forEach(el => {
    const file = el.getAttribute('data-include');
    fetch(file)
      .then(res => res.text())
      .then(html => {
        el.innerHTML = html;

        if (file === 'header.html') {
          const links = el.querySelectorAll('.nav-link');
          links.forEach(link => {
            const page = link.getAttribute('data-page');
            // หน้าแรก (index.html) อาจไม่มีชื่อไฟล์ใน URL
            if (page === currentPage || (page === 'index' && currentPage === '')) {
              link.classList.add('active');
            }
          });
        }
      })
      .catch(() => {
        el.innerHTML = `<div class="text-danger">โหลดไฟล์ ${file} ไม่สำเร็จ</div>`;
      });
  });
  // ปิดเมนูคลิกขวา
   //document.addEventListener('contextmenu', event => event.preventDefault());

  // ปิดกด F12
   //document.addEventListener('keydown', function(event) {
    // กด F12 (key code 123)
 //    if (event.key === 'F12' || event.keyCode === 123) {
  //     event.preventDefault();
  //   }
    // ปิด Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C (Developer Tools)
  //   if (event.ctrlKey && event.shiftKey && 
   //      (event.key === 'I' || event.key === 'J' || event.key === 'C')) {
  //     event.preventDefault();
  //   }
  //   // ปิด Ctrl+U (ดู source)
  //   if (event.ctrlKey && event.key === 'u') {
  //     event.preventDefault();
  //   }
  // });
}

window.addEventListener('DOMContentLoaded', includeHTML);

// หน้า Portfolio //

function openPanel(imageUrl) {
  const panel = document.getElementById('fullscreenPanel');
  const panelImage = document.getElementById('panelImage');

  // เคลียร์รูปก่อน
  panelImage.src = '';
  
  // ป้องกัน cache (โหลดใหม่ทุกครั้ง)
  const cacheBuster = '?t=' + new Date().getTime();
  panelImage.src = imageUrl + cacheBuster;

  // เปิดแถบ
  panel.classList.add('open');
}

function closePanel() {
  const panel = document.getElementById('fullscreenPanel');
  const panelImage = document.getElementById('panelImage');

  panel.classList.remove('open');
  panelImage.src = '';
}

//