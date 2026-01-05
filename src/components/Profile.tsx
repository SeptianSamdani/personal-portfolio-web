import { socialLinks } from "@/constants"
// import { Button } from '@/components/ui/button';
import { MapPin } from "lucide-react";

export const Profile = () => {
    return (
    <aside className="max-w-5xl ml-6 min-h-screen lg:sticky lg:left-0 lg:top-20 lg:w-96">
      <div className="border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm rounded-2xl overflow-hidden">
        
        <div className="p-6">
          {/* Avatar */}
          <div className="mb-6">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              alt="Septian Samdani"
              className="w-full aspect-square object-cover rounded-xl border border-neutral-700"
            />
          </div>

          {/* Name & Title */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-1">
              Septian Samdani
            </h1>
            <p className="text-neutral-400 text-sm">
              Fullstack Javascript Developer
            </p>
          </div>

          {/* Info */}
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <div className="size-2 rounded-full bg-primary"></div>
              </div>
              <div>
                <p className="text-xs text-neutral-500 mb-0.5">Specialization</p>
                <p className="text-sm text-neutral-300">
                  Software Engineering & Machine Learning
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="size-4 text-neutral-500 mt-0.5" />
              <div>
                <p className="text-xs text-neutral-500 mb-0.5">Location</p>
                <p className="text-sm text-neutral-300">
                  Ciamis, West Java - Indonesia
                </p>
              </div>
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
                  className="flex-1 flex items-center justify-center border border-neutral-700 hover:border-primary hover:text-primary p-2.5 rounded-lg transition-all duration-200"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}