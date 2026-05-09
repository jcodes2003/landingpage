export type Shoe = {
  id: number;
  name: string;
  price: string;
  tag: string;
  tagColor: string;
  color: string;
  bg: string;
  accent: string;
  desc: string;
  emoji: string;
  svg: string;
  image: string;
  imageScale?: number;
  imageOffsetY?: number;
};

export type FeaturedItem = {
  name: string;
  price: string;
  color: string;
  desc: string;
  tag: string;
};

export type ShoeSVGProps = {
  color: string;
  image?: string;
  imageScale?: number;
  imageOffsetY?: number;
  size?: number;
};

export type NavbarProps = {
  scrolled: boolean;
};
