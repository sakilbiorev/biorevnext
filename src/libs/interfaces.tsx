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

export interface GallryMenuData {
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

export interface MenuProps {
  items: MenuItem[];
}
