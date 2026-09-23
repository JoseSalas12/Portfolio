import GithubIcon from '../assets/icons/Github.svg?react';
import LinkedinIcon from '../assets/icons/Linkedin.svg?react';
import TwitterIcon from '../assets/icons/Twitter.svg?react';
import socialLinks from '../data/socialLinks.js';

function SocialLinks(){
    return(
    <>
        <div className="flex items-center gap-5.75">
           {socialLinks.map((item) =>(
            <a key={item.id} href={item.href} className="flex items-center">
                {item.title === "Github" && <GithubIcon />}
                {item.title === "Linkedin" && <LinkedinIcon />}
                {item.title === "Twitter" && <TwitterIcon />}
            </a>
           ))}
        </div>
    </>
    );
}

export default SocialLinks;