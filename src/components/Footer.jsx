import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaFacebook,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-zinc-800">

            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-white">
                            AI<span className="text-orange-500">Stock</span>
                        </h2>

                        <p className="text-gray-400 mt-4 leading-relaxed">
                            Empowering investors with AI-powered market intelligence,
                            predictive analytics, and modern portfolio insights.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Product
                        </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Dashboard</a></li>
                            <li><a href="#">Analytics</a></li>
                            <li><a href="#">Pricing</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Company
                        </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Connect
                        </h3>

                        <div className="flex gap-4">

                            <a
                                href="#"
                                className="p-3 bg-zinc-900 rounded-xl hover:bg-orange-500 transition"
                            >
                                <FaFacebook size={20} className="text-white" />
                            </a>

                            <a
                                href="#"
                                className="p-3 bg-zinc-900 rounded-xl hover:bg-orange-500 transition"
                            >
                                <FaInstagram size={20} className="text-white" />
                            </a>

                            <a
                                href="#"
                                className="p-3 bg-zinc-900 rounded-xl hover:bg-orange-500 transition"
                            >
                                <FaLinkedin size={20} className="text-white" />
                            </a>

                            <a
                                href="#"
                                className="p-3 bg-zinc-900 rounded-xl hover:bg-orange-500 transition"
                            >
                                <FaGithub size={20} className="text-white" />
                            </a>

                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-zinc-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

                    <p className="text-gray-500 text-sm">
                        © 2026 AIStock. All rights reserved.
                    </p>

                    <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-500">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookies</a>
                    </div>

                </div>

            </div>

        </footer>
    );
}