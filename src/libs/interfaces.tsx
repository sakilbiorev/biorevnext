export interface MenuItem {
  id: number;
  label: string;
  url: string;
  isExternal: boolean;
  children?: MenuItem[];
}

export interface GallryImageItem {
  id: number;
  label: string;
  imgURL: string;
}

export interface GallryMenuItem {
  galleryTitle: string;
  galleryImages: GallryImageItem[];
  contactInfoTitle: string;
  address: string;
  email: string;
  phone: string;
  twitterLink: string;
  facebookLink: string;
  linkedinLink: string;
  instagramLink: string;
  pinterestLink: string;
}

export interface TitleAndDescriptionData {
  TitleItem: SectionTitleData;
  Description: string;
}

export interface SectionTitleData {
  SectionTitle: string;
  SectionMainTitle: string;
}

export interface MenuProps {
  items: MenuItem[];
}

export interface ThreeColumnBoxItem {
  id: number;
  Title: string;
  Icon: string;
  BgImg: string;
  HoverBgImg: string;
  Description: string;
  LinkUrl: string;
  LinkText: string;
}

export interface ThreeColumnBoxesProps {
  TitleItem: SectionTitleData;
  items: ThreeColumnBoxItem[];
}

export interface HomeClientItem {
  id: number;
  src: string;
  alt: string;
}

export interface HeaderBanner {
  title: string;
  BgImgURL: string;
}

export interface TestimonialsSliderItem {
  id: number;
  avatar: string;
  designation: string;
  name: string;
  description: string;
}
