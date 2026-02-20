import idCard from "../assets/products/plastic-id-card-holder.jpg";
import idCard2 from "../assets/products/1.jpg";
import idCard3 from "../assets/products/1.1.jpg";
import idCard4 from "../assets/products/1.2.jpg";
import idcard15 from "../assets/products/2 Matel-id-silver.jpg";
import idCard5 from "../assets/products/2.1.jpg";
import idCard6 from "../assets/products/2.2.jpg";
import idCard7 from "../assets/products/3.jpg";
import idCard9 from "../assets/products/4 .jpg";
import idCard10 from "../assets/products/4.1.jpg";
import idCard11 from "../assets/products/4.2.jpg";
import idCard8 from "../assets/products/3.1.jpg";
import idCard12 from "../assets/products/5.jpg";
import idCard13 from "../assets/products/5.1.jpg";
import idCard14 from "../assets/products/5.2.jpg";
import visiting from "../assets/products/brochure.jpg";
import banner from "../assets/products/flex-banner.jpg";
import poster from "../assets/products/poster-printing.jpg";
import brochure from "../assets/products/brochure.jpg";

import id1 from "../assets/products/1/img1.webp";
import id2 from "../assets/products/1/img2.webp";
import id3 from "../assets/products/1/img3.webp";
import id4 from "../assets/products/1/img4.webp";

const products = [
  {
    id: 1,
    title: "Premium PVC ID Holder",
    slug: "premium-pvc-id-holder",
    desc: "Crystal clear durability for daily corporate use.",
    fullDesc: "Engineered for high-traffic environments, our Premium PVC holders offer maximum clarity and protection against wear and tear. Ideal for corporate offices and large-scale events.",
    image: id1,
    images: [id1, id2, id3, id4], // Gallery support
    category: "id-card",
    dimensions: "90mm x 60mm",
    material: "High-Grade PVC",
    thickness: "0.8mm",
    finish: "Glossy Clear",
    moq: 50,
    leadTime: "2-3 Days",
    isComingSoon: false,
    isBestSeller: true,
    tags: ["corporate", "security", "office"],
    features: ["Waterproof", "UV Resistant", "Reinforced Slot"],
  },
    { id: 2,
    title: "Classic Golden Badge Holder",
    slug: "classic-golden-badge-holder",
    desc: "Standard protection for student & staff IDs.",
    fullDesc: "A cost-effective, reliable solution for schools and colleges. Lightweight yet sturdy enough for daily use.",
    image: idCard2,
    images: [idCard2, idCard3, idCard4],
    category: "id-card",
    dimensions: "85mm x 55mm",
    material: "Standard PVC",
    thickness: "0.5mm",
    finish: "Semi-Gloss",
    moq: 100,
    leadTime: "3-4 Days",
    isComingSoon: false,
    features: ["Lightweight", "Budget Friendly", "Standard Fit"],
  },
  // {
  //   id: 3,
  //   title: "Eco-Soft ID Sleeve",
  //   slug: "eco-soft-id-sleeve",
  //   desc: "Flexible and lightweight ID protection.",
  //   image: idCard3,
  //   category: "id-card",
  //   material: "Flexible Vinyl",
  //   moq: 50,
  //   isComingSoon: false,
  // },
  // {
  //   id: 4,
  //   title: "Heavy Duty Card Case",
  //   slug: "heavy-duty-case",
  //   desc: "Rigid protection for proximity cards.",
  //   image: idCard4,
  //   category: "id-card",
  //   material: "Hard Polycarbonate",
  //   moq: 50,
  //   isComingSoon: false,
  // },
  {
    id: 5,
    title: "Classic Silver Badge Holder",
    slug: "classic-silver-badge-holder",
    desc: "Sleek vertical orientation for modern badges.",
    image: idcard15,
    images: [idcard15, idCard5, idCard8],
    category: "id-card",
    material: "Clear Acrylic",
    moq: 50,
    isComingSoon: false,
  },
  // {
  //   id: 6,
  //   title: "Multi-Card Dispenser",
  //   slug: "multi-card-dispenser",
  //   desc: "Holds up to 3 cards simultaneously.",
  //   image: idCard6,
  //   category: "id-card",
  //   material: "ABS Plastic",
  //   moq: 50,
  //   isComingSoon: false,
  // },
  // {
  //   id: 7,
  //   title: "Frosted Security Sleeve",
  //   slug: "frosted-security-sleeve",
  //   desc: "Anti-glare finish for easy scanning.",
  //   image: idCard7,
  //   category: "id-card",
  //   finish: "Matte Frosted",
  //   moq: 100,
  //   isComingSoon: false,
  // },
  {
    id: 9,
    title: "Matte Black Metal Holder",
    slug: "matte-black-metal-holder",
    desc: "Premium executive metal series.",
    fullDesc: "Our high-end metal series is designed for executives. The matte black finish provides a sophisticated look that complements professional attire.",
    image: idCard9,
    images: [idCard9, idCard10, idCard11],
    category: "id-card",
    material: "Anodized Aluminum",
    finish: "Matte Black",
    moq: 25,
    leadTime: "5-7 Days",
    isComingSoon: false,
    isBestSeller: true,
    features: ["Scratch Resistant", "RFID Blocking", "Premium Weight"],
  },
  {
    id: 12,
    title: "Tray-Style Pasting ID",
    slug: "pasting-tray-id",
    desc: "Secure tray system for printed IDs.",
    image: idCard12,
    images: [idCard12, idCard13, idCard14],
    category: "id-card",
    material: "Composite Plastic",
    moq: 50,
    isComingSoon: false,
  },
  {
    id: 15,
    title: "Premium Gifts & Visiting Cards",
    slug: "premium-gifts-visiting-cards",
    desc: "Make a lasting first impression.",
    fullDesc: "Ultra-thick 400 GSM cards with multiple finish options including spot UV and gold foiling.",
    image: visiting,
    category: "visiting-card",
    material: "400 GSM Art Card",
    finish: "Matte / Velvet",
    moq: 50,
    leadTime: "3-5 Days",
    isComingSoon: false,
    features: ["High Color Accuracy", "Dual-sided Printing", "Premium Texture"],
  },
  {
    id: 16,
    title: "Ultra-HD Flex Banner",
    slug: "ultra-hd-flex-banner",
    desc: "Weatherproof outdoor advertising.",
    image: banner,
    category: "marketing",
    material: "Heavy Duty Flex",
    isComingSoon: true,
  },
  {
    id: 17,
    title: "Cinematic Poster Print",
    slug: "cinematic-poster-print",
    desc: "High-resolution indoor wall posters.",
    image: poster,
    category: "marketing",
    material: "200 GSM Photo Paper",
    isComingSoon: true,
  },
  {
    id: 18,
    title: "Corporate Brochures",
    slug: "corporate-brochures",
    desc: "Multi-page professional storytellers.",
    image: brochure,
    category: "marketing",
    material: "Glossy Paper",
    isComingSoon: true,
  },
];

export default products;