// 앱 설치용 서비스 워커: 화면 파일은 항상 서버에 새 버전이 있는지 확인하고 가져와요
const V = '2';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(fetch(e.request, { cache: 'no-cache' }).catch(() => fetch(e.request)));
});
