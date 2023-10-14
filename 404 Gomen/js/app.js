var messages = {
    'en': '404 - Page Not Found',
    'es': '404 - Página no encontrada',
    'fr': '404 - Page non trouvée',
    'de': '404 - Seite nicht gefunden',
    'it': '404 - Pagina non trovata',
    'pt': '404 - Página não encontrada',
    'ja': '404 - ページが見つかりません',
    'zh-CN': '404 - 页面未找到',
    'zh-TW': '404 - 頁面未找到',
    'ko': '404 - 페이지를 찾을 수 없습니다',
    'ru': '404 - Страница не найдена',
    'ar': '404 - الصفحة غير موجودة',
    'el': '404 - Η σελίδα δεν βρέθηκε',
    'tr': '404 - Sayfa bulunamadı',
    'nl': '404 - Pagina niet gevonden'
  };
  
  var userLanguage = navigator.language || navigator.userLanguage;
  var message = messages[userLanguage] || '404 - Page Not Found';
  
  // メッセージをHTMLに表示
  var errorMessageElement = document.getElementById('error-message');
  errorMessageElement.textContent = message;