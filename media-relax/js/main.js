function renderCategory(data, targetId) {
    const container = document.getElementById(targetId);
    if (!container || !data) return;

    let html = '';
    data.forEach(item => {
        // --- ส่วนที่แก้ไข: เช็คว่าถ้าไม่มี url ตรงๆ ให้ไปดึงจากตอนแรกใน stations แทน ---
        let finalUrl = item.url;
        if (!finalUrl && item.stations && item.stations.length > 0) {
            finalUrl = item.stations[0].url;
        }

        html += `
            <div class="col">
                <div class="movie-card" onclick="goToPlayer('${finalUrl}', '${item.name}')">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                    <div class="movie-info">
                        <p class="movie-title">${item.name}</p>
                        <p class="movie-meta">${item.author || item.info || ''}</p>
                    </div>
                </div>
            </div>`;
    });
    container.innerHTML = html;
}

function goToPlayer(url, title) {
    window.location.href = `player.html?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof tvData !== 'undefined') renderCategory(tvData, 'list-tv');
    if (typeof movieData !== 'undefined') renderCategory(movieData, 'list-movies');
    if (typeof seriesData !== 'undefined') renderCategory(seriesData, 'list-series');
    if (typeof animeData !== 'undefined') {
        const sortedAnime = [...animeData].reverse(); 
        renderCategory(sortedAnime, 'list-anime');
    }
});