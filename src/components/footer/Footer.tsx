import { navItems } from '../../utils';
import './footer.module.css';

export const Footer = () => (
  <div className="footer">
    <hr className="line" />
    <div className="flex-center-between pv-4 ph-4">
      <div className="d-flex gap-2">
        {navItems.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </div>
      <div>
        Copyright &copy; {new Date().getFullYear()} <b>Isaac Ayodele</b>.
      </div>
    </div>
  </div>
);
