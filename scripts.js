        function togglePopup(index) {
            const items = document.querySelectorAll('.grid-item');
            items.forEach((item, i) => {
                const popup = item.querySelector('.grid-item > .popup');
                if(popup == null) {
                    return;
                }
                if (i === index) {
                    popup.classList.add('active');
                } else {
                    popup.classList.remove('active');
                }
            });
        }
        function removePopups() {
            const items = document.querySelectorAll('.grid-item');
            items.forEach((item, i) => {
                const popup = item.querySelector('.grid-item > .popup');
                if(popup == null) {
                    return;
                }
                popup.classList.remove('active');
            });
        }
    