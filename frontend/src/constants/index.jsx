import { Tag } from "lucide-react";
import { Images } from "lucide-react";
import { Cloud } from "lucide-react";
import { User } from "lucide-react";
import { Plus } from "lucide-react";
import { Brain } from 'lucide-react';
import { UserCog } from 'lucide-react';


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const features = [
  {
    icon: <Tag />,
    text: "Tag your dataset category and sub category wise",
    description:
      "You can create a category and create a sub category for your data for more precision",
  },
  {
    icon: <Images />,
    text: "Label different forms of data",
    description: "You can label audio, video and many more forms of data",
  },
  {
    icon: <Cloud />,
    text: "Share your progress with team",
    description: "Have synced access with your team with our cloud feature",
  },
  {
    icon: <Plus/>,
    text: "Exclusive tools to label data",
    description: "Make labelling easier with our specialised tools",
  },
  {
    icon:<Brain/>,
    text:"AI tool for labelling data",
    description:"Get preannotated data with our ai tool"
  },
  {
    icon:<UserCog/>,
    text:"Great customer support",
    description:"Get customer support 24*7"

  }
];

export const pricingoptions = [
  {
    icon: <User />,
    title: "Free",
    price: "$0",
    features: ["Image labelling", "100 images","3D Data support"],
  },
  {
    title: "Pro",
    price: "$20",
    features: [
      "Image,Video labelling",
      "1000 images, 1000 Videos",
      "Cloud storage upto 10gb",
    ],
  },
  {
    title: "Enterprise",
    price: "$2000",
    features: ["All forms of data labelling", "Unlimited cloud storage","AI tool"],
  },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];