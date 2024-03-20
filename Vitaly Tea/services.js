document.addEventListener('DOMContentLoaded', function () {
    const itemImages = document.querySelectorAll('.itemimage');
    const closeBtn = document.querySelectorAll('.btn-close');

    itemImages.forEach((image, index) => {
        image.addEventListener('click', function () {
            const overlayId = `overlay-${index + 1}`;
            const overlay = document.getElementById(overlayId);
            overlay.style.display = 'block';
        });
    });

    closeBtn.forEach((btn) => {
        btn.addEventListener('click', function () {
            hideAllOverlays();
        });
    });

    function hideAllOverlays() {
        const overlays = document.querySelectorAll('.menuitem');
        overlays.forEach((overlay) => {
            overlay.style.display = 'none';
        });
    }
});
