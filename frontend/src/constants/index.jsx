import { Tag } from 'lucide-react';
import { Images } from 'lucide-react';
import { Cloud } from 'lucide-react';

export const navItems = [
    { label: "Features", href: "#" },
    { label: "Workflow", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Testimonials", href: "#" },
];

export const features = [
    {
    icon : <Tag/>,
    text : "Tag your dataset category and sub category wise",
    description : "You can create a category and create a sub category for your data for more precision",
    },
    {
    icon : <Images/>,
    text: "Label different forms of data",
    description:"You can label audio, video and many more forms of data"
    },
    {
    icon : <Cloud/>,
    text:"Share your progress with team",
    description:"Have synced access with your team with our cloud feature"
    }
]