const translations = {
    es: {
        'toggle-ads': 'Ocultar Anuncios',
        'orange-mode': 'Modo Naranja',
        'login': 'Iniciar Sesión con Google',
        'download-video': 'Descargar Video 1080p 60fps'
    },
    en: {
        'toggle-ads': 'Hide Ads',
        'orange-mode': 'Orange Mode',
        'login': 'Login with Google',
        'download-video': 'Download Video 1080p 60fps'
    },
    fr: {
        'toggle-ads': 'Masquer les Publicités',
        'orange-mode': 'Mode Orange',
        'login': 'Se Connecter avec Google',
        'download-video': 'Télécharger la Vidéo 1080p 60fps'
    },
    de: {
        'toggle-ads': 'Werbung Ausblenden',
        'orange-mode': 'Orange Modus',
        'login': 'Mit Google Anmelden',
        'download-video': 'Video 1080p 60fps Herunterladen'
    },
    it: {
        'toggle-ads': 'Nascondi Annunci',
        'orange-mode': 'Modalità Arancione',
        'login': 'Accedi con Google',
        'download-video': 'Scarica Video 1080p 60fps'
    },
    pt: {
        'toggle-ads': 'Ocultar Anúncios',
        'orange-mode': 'Modo Laranja',
        'login': 'Entrar com Google',
        'download-video': 'Baixar Vídeo 1080p 60fps'
    },
    nl: {
        'toggle-ads': 'Advertenties Verbergen',
        'orange-mode': 'Oranje Modus',
        'login': 'Aanmelden met Google',
        'download-video': 'Video 1080p 60fps Downloaden'
    },
    ru: {
        'toggle-ads': 'Скрыть Рекламу',
        'orange-mode': 'Оранжевый Режим',
        'login': 'Войти с Google',
        'download-video': 'Скачать Видео 1080p 60fps'
    }
};

document.getElementById('language-select').addEventListener('change', function() {
    const lang = this.value;
    updateLanguage(lang);
});

function updateLanguage(lang) {
    const buttons = document.querySelectorAll('.controls button');
    buttons.forEach(button => {
        const id = button.id;
        button.textContent = translations[lang][id];
    });
}

document.getElementById('toggle-ads').addEventListener('click', function() {
    const iframe = document.getElementById('youtube-iframe');
    iframe.contentWindow.postMessage('{"event":"command","func":"setPlaybackQuality","args":"small"}', '*');
});

document.getElementById('orange-mode').addEventListener('click', function() {
    document.body.classList.toggle('orange-mode');
});

document.getElementById('login').addEventListener('click', function() {
    const clientId = 'YOUR_GOOGLE_CLIENT_ID';
    const redirectUri = 'YOUR_REDIRECT_URI';
    const responseType = 'token';
    const scope = 'https://www.googleapis.com/auth/youtube.force-ssl';
    const url = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

    window.location.href = url;
});

document.getElementById('download-video').addEventListener('click', function() {
    const videoUrl = prompt("Introduce la URL del video de YouTube que deseas descargar:");
    if (videoUrl) {
        const downloadUrl = `https://example.com/download?url=${encodeURIComponent(videoUrl)}`;
        window.open(downloadUrl, '_blank');
    }
});
