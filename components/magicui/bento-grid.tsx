import { ReactNode } from 'react';
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { 
  BeakerIcon, 
  ChartBarIcon, 
  CogIcon, 
  LightBulbIcon, 
  UserGroupIcon, 
  GlobeAltIcon 
} from '@heroicons/react/24/outline';
import Link from 'next/link';

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[20rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

interface BentoCardProps {
  name: string;
  description: string;
  icon: 'beaker' | 'chart' | 'cog' | 'lightbulb' | 'users' | 'globe';
  gradient: string;
  href: string;
}

const iconComponents = {
  beaker: BeakerIcon,
  chart: ChartBarIcon,
  cog: CogIcon,
  lightbulb: LightBulbIcon,
  users: UserGroupIcon,
  globe: GlobeAltIcon,
};

const BentoCard = ({
  name,
  description,
  icon,
  gradient,
  href,
}: BentoCardProps) => {
  const Icon = iconComponents[icon];
  
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl p-6 transition-all hover:shadow-lg",
        gradient
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/0 transition-opacity group-hover:opacity-0" />
      
      {/* Inner face */}
      <div className="absolute inset-1 rounded-lg bg-white/10 shadow-inner" />
      
      <div className="relative z-10">
        <Icon className="h-10 w-10 text-white mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-sm text-white/80">{description}</p>
      </div>
      <Button 
        variant="ghost" 
        size="sm" 
        className="mt-4 self-start text-white hover:bg-white/20 relative z-10"
        asChild
      >
        <Link href={href}>
          Learn More
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
};

export { BentoCard, BentoGrid };
