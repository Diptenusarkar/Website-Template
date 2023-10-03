const comicPage = document.getElementById("comic-page");
const currentZoomElement = document.getElementById("currentZoomNo");
let currentZoom = 1;

document.getElementById("zoomInBtn").addEventListener("click", function() {
    if (currentZoom < 1) {
        currentZoom += 0.1;
    } else {
        currentZoom = 1;
    }
    comicPage.style.transform = `scale(${currentZoom})`;
    currentZoomElement.textContent = `${Math.round(currentZoom * 100)}%`;
});

document.getElementById("zoomOutBtn").addEventListener("click", function() {
    if (currentZoom > 0.1) {
        currentZoom -= 0.1;
    } else {
        currentZoom = 0.1;
    }
    comicPage.style.transform = `scale(${currentZoom})`;
    currentZoomElement.textContent = `${Math.round(currentZoom * 100)}%`;
});