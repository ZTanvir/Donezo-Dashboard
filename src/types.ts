export type LoginResponse = {
  id: string;
  email: string;
  token: string;
};

export type Overview = {
  totalUsers: number;
  activeUsers: number;
  revenue: number;
  growth: number;
};

export type User = {
  id: number;
  name: string;
  email: string;
  status: string;
  joinDate: string;
};

export type Analytic = {
  date: string;
  views: number;
  clicks: number;
  conversions: number;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  sales: number;
  category: string;
};

export type Dashboard = {
  overview: Overview;
  users: User[];
  analytics: Analytic[];
  products: Product[];
};
