// Hole.jsx
export default function Hole({ isActive, onClick }) {
  // If isActive is true, add 'active', otherwise it's just 'hole'
  return (
    <div className={`hole ${isActive ? 'active' : ''}`} onClick={onClick}>
      <span className="mole">🐹</span>
    </div>
  );
}
