import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {profile.name} · Hecho con React y Vite</p>
    </footer>
  );
}
