import LetterPullup from "@/components/magicui/letter-pullup";
import DotPattern from "@/components/magicui/dot-pattern";
import ShinyButton from "@/components/magicui/shiny-button";
import { AnimatedList } from "@/components/magicui/animated-list";
import AnimatedSubtitle from "@/components/AnimatedSubtitle";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center relative overflow-hidden p-4">
      <DotPattern
        width={16}
        height={16}
        cx={1}
        cy={1}
        cr={1}
        className="absolute inset-0 z-0 text-gray-300 opacity-30"
      />
      <div className="z-10 flex flex-col items-center max-w-6xl w-full">
        <LetterPullup words="Intersubjective Rhizome" className="text-black" />
        <AnimatedSubtitle />
        <div className="mt-8 w-full flex justify-center">
          <AnimatedList className="text-center" maxHeight="300px">
            <p className="text-gray-700 font-semibold">Collaborative Research Projects</p>
            <p className="text-gray-700 font-semibold">Peer-to-Peer Knowledge Sharing</p>
            <p className="text-gray-700 font-semibold">Blockchain Technology Workshops</p>
            <p className="text-gray-700 font-semibold">Decentralized Governance Experiments</p>
            <p className="text-gray-700 font-semibold">Cutting-edge Publication Opportunities</p>
          </AnimatedList>
        </div>
        
        <BentoGrid className="mt-16 mb-12">
          <BentoCard
            name="Our Members"
            description="Diverse experts from various fields collaborating on cutting-edge research."
            icon="users"
            gradient="bg-gradient-to-br from-purple-500 to-indigo-500"
            href="/members"
          />
          <BentoCard
            name="Our Vision"
            description="Advancing decentralized technologies to create a more equitable and innovative future."
            icon="lightbulb"
            gradient="bg-gradient-to-br from-blue-500 to-teal-500"
            href="/vision"
          />
          <BentoCard
            name="Past Activities"
            description="Successful workshops, published papers, and breakthrough discoveries in blockchain technology."
            icon="chart"
            gradient="bg-gradient-to-br from-green-500 to-emerald-500"
            href="/activities"
          />
          <BentoCard
            name="Research Focus"
            description="Exploring the intersection of blockchain, AI, and sustainable technologies."
            icon="beaker"
            gradient="bg-gradient-to-br from-red-500 to-pink-500"
            href="/research"
          />
          <BentoCard
            name="Collaboration Opportunities"
            description="Open calls for research partners, internships, and joint projects."
            icon="cog"
            gradient="bg-gradient-to-br from-yellow-500 to-orange-500"
            href="/collaborate"
          />
          <BentoCard
            name="Community Impact"
            description="Real-world applications of our research improving lives and industries."
            icon="globe"
            gradient="bg-gradient-to-br from-cyan-500 to-blue-500"
            href="/impact"
          />
        </BentoGrid>
        
        <ShinyButton className="mt-8 text-black">What's this?</ShinyButton>
      </div>
    </main>
  );
}
