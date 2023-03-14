import React from "react";

import { FiTwitter, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const Social = () => {
  return (
    <div className="my-5 mx-5 flex flex-row gap-5 ">
      <a href="https://twitter.com/" target="_blank">
        <FiTwitter className="h-7 w-7 hover:scale-110 hover:text-first" />
      </a>

      <a href="https://instagram.com/msalman_af" target="_blank">
        <FiInstagram className="h-7 w-7 hover:scale-110 hover:text-first" />
      </a>

      <a href="https://linkedin.com/in/muhammadsalmoon" target="_blank">
        <FiLinkedin className="h-7 w-7 hover:scale-110 hover:text-first" />
      </a>

      <a href="https://github.com/MuhammadSalmanAlfarisi" target="_blank">
        <FiGithub className="h-7 w-7 hover:scale-110 hover:text-first" />
      </a>
    </div>
  );
};

export default Social;
