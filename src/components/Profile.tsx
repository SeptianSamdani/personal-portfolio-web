import { socialLinks } from "@/constants"
import { Button } from '@/components/ui/button';
import { Download, Sparkles } from "lucide-react";

export const Profile = () => {
    return (
    <aside className="max-w-5xl ml-6 min-h-screen lg:sticky lg:left-0 lg:top-6 lg:w-96">
      <div className="relative border border-neutral-700 bg-linear-to-br from-neutral-900 via-neutral-900 to-neutral-800 text-white rounded-3xl overflow-hidden">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-neutral-100/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-neutral-100/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 p-8">
          {/* Avatar with glow effect */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-linear-to-br from-neutral-100/20 to-transparent rounded-3xl blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              alt="Septian Samdani"
              className="relative w-full aspect-square object-cover rounded-3xl border-2 border-neutral-700/50"
            />
          </div>

          {/* Name & Title */}
          <div className="mb-6">
            <div className="flex items-start gap-2 mb-2">
              <h1 className="text-3xl font-bold bg-linear-to-br from-white to-neutral-400 bg-clip-text text-transparent">
                Septian Samdani
              </h1>
              <Sparkles className="w-5 h-5 text-neutral-100 mt-1" />
            </div>
            <p className="text-neutral-400 text-sm">
              Fullstack Javascript Developer
            </p>
          </div>

          {/* Info Cards */}
          <div className="space-y-3 mb-6">
            <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-4 hover:bg-neutral-800/70 transition-colors">
              <p className="text-xs text-neutral-400 mb-1 uppercase tracking-wider">Specialization</p>
              <p className="text-sm font-medium leading-relaxed">
                Software Engineering & Machine Learning
              </p>
            </div>

            <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-4 hover:bg-neutral-800/70 transition-colors">
              <p className="text-xs text-neutral-400 mb-1 uppercase tracking-wider flex items-center gap-1.5">
                Based in
              </p>
              <p className="text-sm font-medium">
                Ciamis, West Java - Indonesia
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-2 mb-6">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.link}
                  className="flex-1 flex items-center justify-center bg-neutral-800/50 hover:bg-neutral-700/50 border border-neutral-700/50 hover:border-neutral-600 p-3 rounded-xl transition-all hover:scale-105"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3">
            <Button className="flex-1" size="lg">
              Let's Connect
            </Button>
            <Button variant="outline" size="lg" className="aspect-square p-0">
              <Download className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}