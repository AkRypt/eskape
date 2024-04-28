const button = document.querySelector('button');

button.addEventListener('click', () => {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            setTimeout(() => {
                const notification = new Notification(
                    'Example Notif',
                    {
                        body: 'Hello World',
                        data: {
                            url: 'https://google.com',
                            hello: 'world',
                        },
                        icon: 'https://via.placeholder.com/150',
                    }
                );
                notification.addEventListener("error", (error) => {
                    alert(error);
                });
                navigator.serviceWorker.ready.then(function (registration) {
                    registration.showNotification('Notification with ServiceWorker');
                });
            }, 2000);
        }
    });
});