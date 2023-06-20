export interface MenuItem {
  id: number;
  label: string;
  url: string;
  isExternal: boolean;
  children?: MenuItem[];
}

export interface MenuProps {
  items: MenuItem[];
}
