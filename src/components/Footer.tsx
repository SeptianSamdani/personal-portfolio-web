import { navLinks, socialLinks } from "@/constants";

export const Footer = () => {
    return (
        <footer className="mt-30 border-t border-neutral-800 pt-10 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
                {/* Brand Section */}
                <div>
                    <h3 className="text-xl font-bold mb-3">Septian Samdani</h3>
                    <p className="text-neutral-400 text-sm">
                        Fullstack Javascript Developer passionate about creating amazing web experiences.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2">
                        {navLinks.map((link) => (
                            <li key={link.link}>
                                <a 
                                    href={link.link}
                                    className="text-neutral-400 hover:text-primary transition-colors text-sm"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-3">Follow Me</h4>
                    <div className="flex gap-3">
                        {socialLinks.map((social, i) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={i}
                                    href={social.link}
                                    className="border border-neutral-700 hover:border-primary p-2 rounded-full hover:text-primary transition-all"
                                    aria-label={social.label}
                                >
                                    <Icon className="size-4" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}