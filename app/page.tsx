import {
  ArrowRight,
  Leaf,
  Recycle,
  Users,
  Coins,
  MapPin,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function AnimatedGlobe() {
  return (
    <div className="relative w-32 h-32 mx-auto mb-8">
      <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-pulse" />
      <div className="absolute inset-2 rounded-full bg-green-400 opacity-40 animate-ping" />
      <div className="absolute inset-4 rounded-full bg-green-300 opacity-60 animate-spin" />
      <div className="absolute inset-6 rounded-full bg-green-200 opacity-80 animate-bounce" />
      <Leaf className="absolute inset-0 m-auto h-16 w-16 text-green-600 animate-pulse" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center mb-20">
        <AnimatedGlobe />
        <h1 className="text-6xl font-bold mb-6 text-gray-800 tracking-tight">
          WasteX <span className="text-green-600">Waste Management</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
          Join the movement towards a cleaner and greener future and rewarding.
        </p>
        <Button className="bg-green-600 hover:bg-green-700 text-white text-lg py-6 px-10 rounded-full">
          Report Waste
        </Button>
      </section>

      <section className="grid md:grid-cols-3 gap-10 mb-20">
        <FeatureCard
          icon={Leaf}
          title="Eco-Friendly"
          description="We are commited to reducing waste and promoting eco-friendly practices."
        />
        <FeatureCard
          icon={Coins}
          title="Earn Rewards"
          description="We are commited to reducing waste and promoting eco-friendly practices."
        />
        <FeatureCard
          icon={MapPin}
          title="Eco-Friendly"
          description="We are commited to reducing waste and promoting eco-friendly practices."
        />
      </section>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div
      className="bg-white p-8 rounded-xl shadow-md 
    hover:shadow-lg transition-all duration-300 ease-in-out 
    flex flex-col items-center text-center"
    >
      <div className="bg-green-100 p-4 rounded-full mb-6">
        <Icon className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
