import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo and tagline */}
        <div>
          <h2 className="text-xl font-semibold text-white">Bark</h2>
          <p className="text-sm">
            Connecting professionals with job opportunities
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="#" aria-label="Facebook" className="hover:text-white">
            <Facebook />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white">
            <Instagram />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white">
            <LinkedIn />
          </a>
        </div>
      </div>

      <div className="text-center text-sm mt-6 text-gray-500">
        © {new Date().getFullYear()} Bark. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
