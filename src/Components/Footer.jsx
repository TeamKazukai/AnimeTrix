import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

function Footer() {

  const githubUrl = () => {
    window.open('https://github.com/phoenix-monarch')
  }

  const instagramUrl = () => {
    window.open('https://www.instagram.com/x.e.n.o.x/')
  }
  const discordUrl = () => {
    window.open('https://discord.gg/#')
  }
  return (
    <div className="footer">
      <h1>
        <span className="white">Anime</span>Trix
      </h1>
      <p className="footer-about">
        AnimeTrix is not affiliated with or endorsed by any of the anime studios
        behind the creation of the anime presented on this site. This website is
        only an user interface presenting/linking various self-hosted files
        across the internet by other third-party providers for easy access.
        AnimeTrix never downloads the video from any source provider, link will
        be returned from the response hence it is completely not subjected to
        DMCA compliant.
      </p>
      <Link to="/terms" className="terms">Terms and conditon</Link>
      <div className="footer-social">
      <button onClick={()=>discordUrl()} aria-label="discord icon"><i class="fa-brands fa-discord"></i></button>
        <button onClick={() => instagramUrl()} aria-label="instagram icon">
          <InstagramIcon/>
        </button>
        <button onClick={() => githubUrl()} aria-label="github icon">
          <GitHubIcon />
        </button>
      </div>
    </div>
  );
}
export default Footer;
