import EcommerceGif from '../img/mern_ecommerce.gif';
import EcommercePng from '../img/mern_ecommerce.png';
import MotorcyclesGif from '../img/react_motorcycles.gif';
import MotorcyclesPng from '../img/react_motorcycles.png';
import TenantGif from '../img/tenant_management.gif';
import TenantPng from '../img/tenant_management.png';

export const project_data = [
  {
    id: 0,
    title: 'MERN Stack Ecommerce App',
    description: 'This is a responsive e-commerce application using MERN stack. In the shop page, customers can browse the products and add them to a cart for purchasing. After loging in, they can see info in the cart, modify the quantity for each item and place an order. In the admin page, only authorized admin user can add, edit and delete a product. This was a good project to learn a full stack with CRUD.',
    languages: ['React JS', 'Bootstrap 5', 'Node/Express JS', 'MongoDB'],
    img: EcommercePng,
    gif: EcommerceGif,
    website: 'https://nore-works.onrender.com',
    github: 'https://github.com/takyokota/mern-ecommerce-wheels'
  },
  {
    id: 1,
    title: 'React Motorcycle Comparison App',
    description: 'This is a responsive motorcycle comparison single page application (SPA) using React, Tailwind and an API. A user can pick a set of years, makes and models of motorcycles to compare. After the submit button is clicked, a table shows a comparison of the specifications between two selected motorcycles. To make this project simple, the selections of years, makes, models are limited.',
    languages: ['React JS', 'Tailwind CSS', 'RapidAPI (Motorcycles by API-Ninjas)'],
    img: MotorcyclesPng,
    gif: MotorcyclesGif,
    website: 'https://motorcycle-comparison.onrender.com',
    github: 'https://github.com/takyokota/react-motorcycle-comparison-app'
  },
  {
    id: 2,
    title: 'Tenant Management App',
    description: 'This is a tenant management application using React and PHP. An apartment manager can list all tenants or only tenants filtered by the apartment building numbers that can be configured in settings. The manager also can search tenants by their last or first name. Tenant information can be added, edited and deleted. Finally, email address of selected tenants can be copied to clipboard. They can be pasted into To, Cc or Bcc in any email services.',
    languages: ['React JS', 'Tailwind CSS', 'PHP', 'PostgreSQL'],
    img: TenantPng,
    gif: TenantGif,
    website: '',
    github: 'https://github.com/takyokota/Tenant-Management-App'
  },
];