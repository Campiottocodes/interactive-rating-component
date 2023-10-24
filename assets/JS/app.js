
document.addEventListener('DOMContentLoaded', function () {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`rating-${i}`).addEventListener('click', function () {
            for (let j = 1; j <= 5; j++) {
                document.getElementById(`rating-${j}`).classList.remove('selected');
            }
            this.classList.add('selected');
        });
    }

    document.getElementById('submitBtn').addEventListener('click', function () {
        const selectedRating = document.querySelector('.rating .selected');
        if (selectedRating) {
            document.getElementById('rating-point').innerText = selectedRating.innerText;
            document.querySelector('.fc').style.display = 'none';
            document.querySelector('.bc').style.display = 'flex';
        }
    });
});
