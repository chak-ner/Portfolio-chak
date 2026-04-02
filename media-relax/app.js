// ข้อมูลที่คุณได้มา (ในอนาคตแยกเป็นไฟล์ JSON ได้)
const iptvData = {
  tv: [
    {
      "name": "vipa",
      "image": "https://vipa.me/favicon.ico",
      "url": "https://fastly.live.brightcove.com/1846248737588002042/ap-southeast-1/6075037809001/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3N0IjoibzRoaGc2LmVncmVzcy5zYjBmOGsiLCJhY2NvdW50X2lkIjoiNjA3NTAzNzgwOTAwMSIsImVobiI6ImZhc3RseS5saXZlLmJyaWdodGNvdmUuY29tIiwiaXNzIjoiYmxpdmUtcGxheWJhY2stc291cmNlLWFwaSIsInN1YiI6InBhdGhtYXB0b2tlbiIsImF1ZCI6WyI2MDc1MDM3ODA5MDAxIl0sImp0aSI6IjE4NDYyNDg3Mzc1ODgwMDIwNDIifQ.HbjGHxGv87ivAdsCtAdEDjj2SVCfRnCUMYWn2fCkVPY/playlist-hls.m3u8"
    },
    {
      "name": "ช่อง 3 HD",
      "image": "https://ais-s.ais-vidnt.com/ais/play/origin/LIVE/channelicon/LOGO3HD.PNG",
      "url": "https://ch3-33-web.cdn.byteark.com/live/playlist_1080p/index.m3u8"
    },
    {
      "name": "ช่อง 3 HD",
      "image": "https://ais-s.ais-vidnt.com/ais/play/origin/LIVE/channelicon/LOGO3HD.PNG",
      "url": "https://livefta.malimarcdn.com/ftaedge00/nat.sdp/chunklist.m3u8",
      "referer": ""
    },
    {
      "name": "ช่อง 7HD",
      "image": "https://ais-s.ais-vidnt.com/ais/play/origin/LIVE//channelicon/0018.png",
      "url": "https://live-cdn.ch7.com/out/v1/eafeb02c55b64a15b278b1e66c7fc776/playlist.m3u8"
    },
    {
      "name": "MCOT9",
      "info": "FHD",
      "image": "https://ais-s.ais-vidnt.com/ais/play/origin/LIVE/channelicon/MCOT_new.png",
      "url": "https://mcothd-streaming-edge-cdn.mcot.net/tencentmcot/smil:tencentmcot.smil/playlist.m3u8",
      "referer": "https://www.mcot.net/",
      "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)"
    },
    {
      "name": "MCOT9",
      "info": "FHD",
      "image": "https://ais-s.ais-vidnt.com/ais/play/origin/LIVE/channelicon/MCOT_new.png",
      "url": "https://lb1-live-mv.v2h-cdn.com/hls/ffbb/gdhk/gdhk.m3u8",
      "referer": "https://www.mcot.net/",
      "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)"
    },
    {
      "name": "Thai PBS (ช่อง 3)",
      "image": "https://ais-s.ais-vidnt.com/ais/play/origin/LIVE//channelicon/0014.png",
      "url": "https://thaipbs-mcx0wm.cdn.byteark.com/live/playlist.m3u8"
    },
    {
      "name": "NBT",
      "image": "https://nbt2hd.prd.go.th/th/file/get/file/20250426cd13a0bc7debcb7df74d2f8c3d183858103515.jpg",
      "url": "https://cdn-edge.iiptvcdn.com/live_event/smil:6ee0-5126-0cee-7ba2-18b7.smil/playlist.m3u8"
    },
    {
      "name": "CH5",
      "info": "FHD",
      "image": "https://ais-s.ais-vidnt.com/ais/play/origin/LIVE//channelicon//ch5new.logo.png",
      "url": "https://639bc5877c5fe.streamlock.net/tv5hdlive/tv5hdlive/playlist.m3u8",
      "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)"
    },
    {
      "name": "THAIRAT TV",
      "info": "FHD",
      "image": "https://ais-s.ais-vidnt.com/ais/play/origin/LIVE/channelicon/0013_R.png",
      "url": "https://ssai-streaming.thairath.co.th/bamm-csai/720p/index.m3u8",
      "referer": "https://www.thairath.co.th/",
      "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)"
    },
    {
      "name": "Amarin TV 34 HD",
      "image": "https://ais-s.ais-vidnt.com/ais/play/origin/LIVE/channelicon/AmarinTV_NEW512.png",
      "url": "https://amarin-ks7jcc.cdn.byteark.com/live/playlist.m3u8?x_ark_access_id=fleet-868&x_ark_auth_type=ark-v2&x_ark_expires=1775133979&x_ark_path_prefix=%2Flive%2F&x_ark_signature=IgXQy6jD-Rj4uAxuG5i4tA"
    },
    {
      "name": "Amarin TV 34 HD",
      "image": "https://ais-s.ais-vidnt.com/ais/play/origin/LIVE/channelicon/AmarinTV_NEW512.png",
      "url": "https://amarin-ks7jcc.cdn.byteark.com/live/playlist.m3u8?x_ark_access_id=fleet-868&x_ark_auth_type=ark-v2&x_ark_expires=1775133979&x_ark_path_prefix=%2Flive%2F&x_ark_signature=IgXQy6jD-Rj4uAxuG5i4tA"
    },
    {
      "name": "PPTV HD 36",
      "image": "https://ais-s.ais-vidnt.com/ais/play/origin/LIVE/channelicon/PPTV_2024e.jpg",
      "url": "https://pptv36-9h0yba.cdn.byteark.com/bamm-csai/playlist.m3u8?x_ark_access_id=fleet-2966&x_ark_auth_type=ark-v2&x_ark_expires=1775068201&x_ark_path_prefix=%2Fbamm-csai%2F&x_ark_signature=8xGvdWMogiogM8sEWiwoPA"
    },
    {
      "name": "PPTV HD 36",
      "image": "https://ais-s.ais-vidnt.com/ais/play/origin/LIVE/channelicon/PPTV_2024e.jpg",
      "url": "https://pptv36-9h0yba.cdn.byteark.com/bamm-csai/playlist.m3u8?x_ark_access_id=fleet-2966&x_ark_auth_type=ark-v2&x_ark_expires=1775068201&x_ark_path_prefix=%2Fbamm-csai%2F&x_ark_signature=8xGvdWMogiogM8sEWiwoPA"
    },
    {
      "name": "TNN 16",
      "info": "FHD",
      "image": "https://ais-s.ais-vidnt.com/ais/play/origin/LIVE/channelicon/R2_0053.png",
      "url": "https://tnnthailand-1mertz.cdn.byteark.com/live/playlist.m3u8?x_ark_access_id=fleet-1891&x_ark_auth_type=ark-v2&x_ark_expires=1775072384&x_ark_path_prefix=%2Flive&x_ark_signature=-Y1s3Vky5B5PjmBMAoDUjw"
    },
    {
      "name": "TNN 16",
      "info": "HD",
      "image": "https://ais-s.ais-vidnt.com/ais/play/origin/LIVE/channelicon/R2_0053.png",
      "url": "https://tnnthailand-1mertz.cdn.byteark.com/live/playlist.m3u8?x_ark_access_id=fleet-1891&x_ark_auth_type=ark-v2&x_ark_expires=1775072384&x_ark_path_prefix=%2Flive&x_ark_signature=-Y1s3Vky5B5PjmBMAoDUjw",
      "referer": ""
    },
    {
      "name": "NATION",
      "info": "FHD",
      "image": "https://ais-s.ais-vidnt.com/ais/play/origin/LIVE/channelicon/22_Nation_2025.png",
      "url": "https://nationtv-1jdcjo.cdn.byteark.com/fleetstream/nationtvlive/1080p/index.m3u8",
      "referer": "https://www.nationtv.tv/category/nationtv/live",
      "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)"
    },
    {
      "name": "NATION",
      "info": "HD",
      "image": "https://ais-s.ais-vidnt.com/ais/play/origin/LIVE/channelicon/22_Nation_2025.png",
      "url": "https://nationtv-1jdcjo.cdn.byteark.com/fleetstream/nationtvlive/720p/index.m3u8",
      "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)"
    },
    {
      "name": "NEW1",
      "image": "https://news1live.com/images/social-share-logo.png",
      "url": "https://server1.streamssl.com/stream/news1_mid.m3u8"
    },
    {
      "name": "TOPNEWS",
      "image": "https://ais-s.ais-vidnt.com/ais/play/origin/LIVE//channelicon/TOPNEWS.PNG",
      "url": "https://live.topnews.co.th/hls/mobile_v1.m3u8"
    },
    {
      "name": "WORKPOINT",
      "info": "FHD",
      "image": "https://media-mvtv-app.imgix.net/uploads/channel/124_y_wdHhkAYqUKmjbZ1Rz0xSXyCB56o7PuaT.png",
      "url": "https://global-media.sooplive.com/live/workpoint/1920x1080/master.m3u8",
      "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)"
    },
    {
      "name": "True4U 24",
      "image": "https://ais-s.ais-vidnt.com/ais/play/origin/LIVE/channelicon/0054.png",
      "url": "https://www.livedoomovies.com/02_TRUE4U_480p/chunklist.m3u8",
      "referer": "https://www.livedoomovies.com"
    },
    {
      "name": "ONE31",
      "info": "FHD",
      "image": "https://ais-s.ais-vidnt.com/ais/play/origin/LIVE/channelicon/0012.png",
      "url": "https://bcovlive-a.akamaihd.net/b6603a14ea59440a95e9235e14bc9332/ap-southeast-1/6415628290001/9c3d7fc7d10840a69e48b5939ae886e0/playlist_ssaiM.m3u8",
      "referer": "https://www.oned.net",
      "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)"
    },
    {
      "name": "GMM25",
      "info": "FHD",
      "image": "https://ais-s.ais-vidnt.com/ais/play/origin/LIVE/channelicon/0019.png",
      "url": "https://bcovlive-a.akamaihd.net/57d4bf695e80436d9335f4f50adbe438/ap-southeast-1/6415628290001/7e85dc4a59904e45b4fdffebd62e1d82/playlist_ssaiM.m3u8",
      "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)"
    },
    {
      "name": "ช่อง 8",
      "image": "https://ais-s.ais-vidnt.com/ais/play/origin/LIVE/channelicon//0006.png",
      "url": "https://prsmedia-mykojh.cdn.byteark.com/fleetstream/live/720p/index.m3u8"
    },
    {
      "name": "MONO29",
      "image": "https://ais-s.ais-vidnt.com/ais/play/origin/LIVE/channelicon/0016.png",
      "url": "https://monomax-uiripn.cdn.byteark.com/plain/th/playlist.m3u8",
      "referer": "https://www.monomax.me"
    },
    {
      "name": "T Sports 7",
      "image": "https://ais-s.ais-vidnt.com/ais/play/origin/LIVE/channelicon/T-SPorts_7_Final.png",
      "url": "https://www.livedoomovies.com/02_T_Sports_480p/chunklist.m3u8",
      "referer": "https://www.livedoomovies.com"
    },
    {
      "name": "ALTV",
      "info": "FHD",
      "image": "https://ais-s.ais-vidnt.com/ais/play/origin/LIVE//channelicon/ALTV.PNG",
      "url": "https://thaipbs-ujxrch.cdn.byteark.com/live/playlist.m3u8",
      "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)"
    },
    {
      "name": "Tptv",
      "info": "FHD",
      "image": "https://ais-s.ais-vidnt.com/ais/play/origin/LIVE//channelicon/0048.png",
      "url": "https://tv-live.tpchannel.org/live/tv_1080p.m3u8?vhost=tv-live.tpchannel.org",
      "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)"
    }
  ],
  movies: [
    {
      name: "Avatar: The Way of Water",
      image: "https://placehold.co/400x600?text=Avatar2",
      info: "Action",
      url: "URL_M3U8",
    },
  ],
  series: [
    {
      name: "Daredevil: Born Again",
      image:
        "https://www.serie-days.com/wp-content/uploads/2026/03/Daredevil-Born-Again-Season-2-2026.jpg",
      info: "Season 2 (2026)",
      url: "https://main.24playerhd.com/m3u8/...",
    },
  ],
  anime: [
    {
      name: "One Piece",
      image: "https://placehold.co/400x600?text=One+Piece",
      info: "EP 1110",
      url: "URL_M3U8",
    },
  ],
};

function renderAll() {
  renderCategory("tv", "list-tv");
  renderCategory("movies", "list-movies");
  renderCategory("series", "list-series");
  renderCategory("anime", "list-anime");
}

function renderCategory(catName, targetId) {
  const container = document.getElementById(targetId);
  const items = iptvData[catName];
  let html = "";

  items.forEach((item) => {
    // เมื่อคลิก จะส่งค่าไปที่หน้า player.html
    html += `
            <div class="col">
                <div class="movie-card" onclick="goToPlayer('${item.url}', '${item.name}')">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                    <div class="movie-info">
                        <p class="movie-title">${item.name}</p>
                        <p class="movie-meta">${item.info}</p>
                    </div>
                </div>
            </div>
        `;
  });
  container.innerHTML = html;
}

function goToPlayer(url, title) {
  // ส่งข้อมูลไปหน้าเล่นหนังผ่าน URL Parameter
  window.location.href = `player.html?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
}

// รันระบบเมื่อโหลดหน้าเว็บเสร็จ
document.addEventListener("DOMContentLoaded", renderAll);
