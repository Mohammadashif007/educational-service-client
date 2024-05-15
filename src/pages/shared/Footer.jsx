import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content dark:bg-blue-950 dark:text-white">
            <aside>
                <Link
                    to="/"
                    className="font-extrabold text-3xl text-[#124076] dark:text-white"
                >
                    Educator.org
                </Link>
                <div className="mt-4">
                    <Link to="www.fb.com" className="flex gap-2 items-center mb-4">
                        <FaLinkedin className="text-3xl"/>
                        <p className="font-semibold text-xl">LinkedIn</p>
                    </Link>
                    <Link to="www.fb.com" className="flex gap-2 items-center mb-4">
                        <FaFacebookSquare className="text-3xl"/>
                        <p className="font-semibold text-xl">Facebook</p>
                    </Link>
                    <Link to="www.fb.com" className="flex gap-2 items-center mb-4">
                        <FaXTwitter className="text-3xl"/>
                        <p className="font-semibold text-xl">Twitter</p>
                    </Link>
                </div>
                <div className="flex justify-center items-center gap-1 font-semibold"><p>Copy right</p> <AiOutlineCopyright/> <p>{new Date().getFullYear()}</p></div>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;
