import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <p>{t('footer.rights')}</p>
        <div className="footer-links">
          <a href="https://github.com/iarthurlago" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}