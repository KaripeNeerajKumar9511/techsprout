export type Founder = {
  slug: string;
  name: string;
  role: string;
  /** Optional portrait. Drop the file in public/images/founders/ and set the path. */
  photo?: string;
  /** Optional short bio, shown under the role when provided. */
  bio?: string;
  /** Optional LinkedIn URL, shown as a link when provided. */
  linkedin?: string;
};

export const founders: Founder[] = [
  {
    slug: "vishwanath-srirangam",
    name: "Vishwanath Srirangam",
    role: "Founder and CEO",
    photo: "/images/founders/vishwanath-srirangam.jpg",
  },
  {
    slug: "raghu-chandra-gidda",
    name: "Raghu Chandra Gidda",
    role: "Co-founder",
    photo: "/images/founders/raghu-chandra-gidda.jpg",
  },
  {
    slug: "ramanatha-bv",
    name: "Ramanatha BV",
    role: "Co-founder",
    photo: "/images/founders/ramanatha-bv.jpg",
  },
];
