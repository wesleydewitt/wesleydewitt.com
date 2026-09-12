import { Link } from "react-router";
import "../styles/components/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} Wesley De Witt. All rights reserved.
    </footer>
  );
};

export default Footer;
