window.SFM_I18N = {
  current: localStorage.getItem('sfm_lang') || 'ja',
  setLang(lang) {
    this.current = lang;
    localStorage.setItem('sfm_lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = (window.PAGE_I18N && window.PAGE_I18N[lang] && window.PAGE_I18N[lang][key]) || (window.PAGE_I18N && window.PAGE_I18N['ja'] && window.PAGE_I18N['ja'][key]) || '';
      if (text) el.innerHTML = text;
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      const text = (window.PAGE_I18N && window.PAGE_I18N[lang] && window.PAGE_I18N[lang][key]) || (window.PAGE_I18N && window.PAGE_I18N['ja'] && window.PAGE_I18N['ja'][key]) || '';
      if (text) el.title = text;
    });
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.style.borderColor = btn.getAttribute('data-lang-btn') === lang ? '#4fc3f7' : '#555';
    });
  },
  mountButtons(containerId='lang-switcher') {
    const root = document.getElementById(containerId);
    if (!root) return;
    root.innerHTML = `
      <button data-lang-btn="ja" onclick="SFM_I18N.setLang('ja')">日本語</button>
      <button data-lang-btn="en" onclick="SFM_I18N.setLang('en')">English</button>
      <button data-lang-btn="zh" onclick="SFM_I18N.setLang('zh')">中文</button>
    `;
    this.setLang(this.current);
  }
};