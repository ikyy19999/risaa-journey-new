"use client"

import { useState } from "react"
import { Navbar } from "../components/navbar"
import { GalleryIcon } from "../components/icons/gallery-icon"
import { CloseIcon } from "../components/icons/close-icon"
import { Footer } from "../components/footer"

const galleryItems = [
  {
    id: 1,
    type: "image",
    src: "/assets/1.jpg",
    title: "Photobooth at BTM Mall",
    description: "",
    category: "bogor",
    subCategory: "bogor-tengah",
  },
  {
    id: 2,
    type: "image",
    src: "/assets/2.jpg",
    title: "Photobooth at BTM Mall",
    description: "",
    category: "bogor",
    subCategory: "bogor-tengah",
  },
  {
    id: 3,
    type: "image",
    src: "/assets/3.jpg",
    title: "Photobooth at BTM Mall",
    description: "",
    category: "bogor",
    subCategory: "bogor-tengah",
  },
  {
    id: 4,
    type: "image",
    src: "/assets/4.jpg",
    title: "Photobooth at BTM Mall",
    description: "",
    category: "bogor",
    subCategory: "bogor-tengah",
  },
  {
    id: 5,
    type: "image",
    src: "/assets/5.jpg",
    title: "Photobooth at Blok M",
    description: "",
    category: "jakarta",
    subCategory: "jakarta-selatan",
  },
  {
    id: 6,
    type: "image",
    src: "/assets/6.jpg",
    title: "Photobooth at Blok M",
    description: "",
    category: "jakarta",
    subCategory: "jakarta-selatan",
  },
  {
    id: 7,
    type: "image",
    src: "/assets/7.jpg",
    title: "Photobooth at Blok M",
    description: "",
    category: "jakarta",
    subCategory: "jakarta-selatan",
  },
  {
    id: 8,
    type: "image",
    src: "/assets/8.jpg",
    title: "Photobooth at Blok M",
    description: "",
    category: "jakarta",
    subCategory: "jakarta-selatan",
  },
  {
    id: 9,
    type: "image",
    src: "/assets/9.jpg",
    title: "Photobooth at Blok M",
    description: "",
    category: "jakarta",
    subCategory: "jakarta-selatan",
  },
  {
    id: 10,
    type: "image",
    src: "/assets/10.jpg",
    title: "Photobooth at Blok M",
    description: "",
    category: "jakarta",
    subCategory: "jakarta-selatan",
  },
  {
    id: 11,
    type: "image",
    src: "/assets/11.jpg",
    title: "Photobooth at Blok M",
    description: "",
    category: "jakarta",
    subCategory: "jakarta-selatan",
  },
  {
    id: 12,
    type: "image",
    src: "/assets/12.jpg",
    title: "Photobooth at Blok M",
    description: "",
    category: "jakarta",
    subCategory: "jakarta-selatan",
  },
  {
    id: 13,
    type: "image",
    src: "/assets/13.jpg",
    title: "At Sequoia Coffee And Space",
    description: "",
    category: "bogor",
    subCategory: "bogor-tengah",
  },
  {
    id: 14,
    type: "image",
    src: "/assets/14.jpg",
    title: "At Sequoia Coffee And Space",
    description: "",
    category: "bogor",
    subCategory: "bogor-tengah",
  },
  {
    id: 15,
    type: "image",
    src: "/assets/15.jpg",
    title: "At Sequoia Coffee And Space",
    description: "",
    category: "bogor",
    subCategory: "bogor-tengah",
  },
  {
    id: 16,
    type: "image",
    src: "/assets/16.jpg",
    title: "At Sequoia Coffee And Space",
    description: "",
    category: "bogor",
    subCategory: "bogor-tengah",
  },
  {
    id: 17,
    type: "image",
    src: "/assets/17.jpg",
    title: "At Sequoia Coffee And Space",
    description: "",
    category: "bogor",
    subCategory: "bogor-tengah",
  },
  {
    id: 18,
    type: "image",
    src: "/assets/18.jpg",
    title: "At Sequoia Coffee And Space",
    description: "",
    category: "bogor",
    subCategory: "bogor-tengah",
  },
  {
    id: 19,
    type: "image",
    src: "/assets/19.jpg",
    title: "At Sequoia Coffee And Space",
    description: "",
    category: "bogor",
    subCategory: "bogor-tengah",
  },
  {
    id: 20,
    type: "image",
    src: "/assets/20.jpg",
    title: "At Sequoia Coffee And Space",
    description: "",
    category: "bogor",
    subCategory: "bogor-tengah",
  },
  {
    id: 21,
    type: "image",
    src: "/assets/21.jpg",
    title: "At Sequoia Coffee And Space",
    description: "",
    category: "bogor",
    subCategory: "bogor-tengah",
  },
  {
    id: 22,
    type: "image",
    src: "/assets/22.jpg",
    title: "At Sequoia Coffee And Space",
    description: "",
    category: "bogor",
    subCategory: "bogor-tengah",
  },
  {
    id: 23,
    type: "image",
    src: "/assets/23.jpg",
    title: "At Sequoia Coffee And Space",
    description: "",
    category: "bogor",
    subCategory: "bogor-tengah",
  },
  {
    id: 24,
    type: "image",
    src: "/assets/24.jpg",
    title: "At Sequoia Coffee And Space",
    description: "",
    category: "bogor",
    subCategory: "bogor-tengah",
  },
  {
    "id": 25,
    "type": "image",
    "src": "/assets/Burger.avif",
    "title": "At The Rock Burger Timoho",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 26,
    "type": "image",
    "src": "/assets/Burger 2.avif",
    "title": "At The Rock Burger Timoho",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 27,
    "type": "image",
    "src": "/assets/Gelato.avif",
    "title": "At Tempo Gelato",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 28,
    "type": "image",
    "src": "/assets/Jogja Heritage.avif",
    "title": "At Jogja Heritage",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 29,
    "type": "image",
    "src": "/assets/Jogja Heritage 2.avif",
    "title": "At Museum Sonobudoyo Unit",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 30,
    "type": "image",
    "src": "/assets/Jogja Heritage 3.avif",
    "title": "At Museum Sonobudoyo",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 31,
    "type": "image",
    "src": "/assets/Jogja Heritage 4.avif",
    "title": "At Museum Sonobudoyo",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 32,
    "type": "image",
    "src": "/assets/Jogja Heritage 5.avif",
    "title": "At Museum Sonobudoyo",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 33,
    "type": "image",
    "src": "/assets/Jogja Heritage 6.avif",
    "title": "At Museum Sonobudoyo",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 34,
    "type": "image",
    "src": "/assets/Jogja Heritage 7.avif",
    "title": "At Museum Sonobudoyo",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 35,
    "type": "image",
    "src": "/assets/Jogja Heritage 8.avif",
    "title": "At Museum Sonobudoyo",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 36,
    "type": "image",
    "src": "/assets/Jogja Heritage 9.avif",
    "title": "At Museum Sonobudoyo",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 37,
    "type": "image",
    "src": "/assets/Jogja Heritage 10.avif",
    "title": "At Museum Sonobudoyo",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 38,
    "type": "image",
    "src": "/assets/Jogja Heritage 11.avif",
    "title": "At Museum Sonobudoyo",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 39,
    "type": "image",
    "src": "/assets/Jogja Heritage 12.avif",
    "title": "At Museum Sonobudoyo",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 40,
    "type": "image",
    "src": "/assets/KANO MARITIM BAROS.avif",
    "title": "At Kano Maritim Baros",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "bantul"
  },
  {
    "id": 41,
    "type": "image",
    "src": "/assets/Keraton Yogyakarta.avif",
    "title": "At Kraton Ngayogyakarta Hadiningrat",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 42,
    "type": "image",
    "src": "/assets/L'Union Pizza.avif",
    "title": "At L'Union Pizza",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 43,
    "type": "image",
    "src": "/assets/Malioboro 2.avif",
    "title": "At Malioboro",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 44,
    "type": "image",
    "src": "/assets/Pasar Ngasem.avif",
    "title": "At Pasar Ngasem",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 45,
    "type": "image",
    "src": "/assets/Pasar Beringharjo Yogyakarta.avif",
    "title": "At Pasar Beringharjo",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 46,
    "type": "image",
    "src": "/assets/Pasar prawirotaman.avif",
    "title": "At Pasar Prawirotaman",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 47,
    "type": "image",
    "src": "/assets/PICTNIQ.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 48,
    "type": "image",
    "src": "/assets/PICTNIQ 2.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 49,
    "type": "image",
    "src": "/assets/PICTNIQ 3.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 50,
    "type": "image",
    "src": "/assets/PICTNIQ 4.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 51,
    "type": "image",
    "src": "/assets/PICTNIQ 5.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 52,
    "type": "image",
    "src": "/assets/PICTNIQ 6.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 53,
    "type": "image",
    "src": "/assets/PICTNIQ 7.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 54,
    "type": "image",
    "src": "/assets/PICTNIQ 8.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 55,
    "type": "image",
    "src": "/assets/PICTNIQ 9.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 56,
    "type": "image",
    "src": "/assets/PICTNIQ 10.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 57,
    "type": "image",
    "src": "/assets/PICTNIQ 11.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 58,
    "type": "image",
    "src": "/assets/PICTNIQ 12.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 59,
    "type": "image",
    "src": "/assets/PICTNIQ 13.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 60,
    "type": "image",
    "src": "/assets/PICTNIQ 14.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 61,
    "type": "image",
    "src": "/assets/PICTNIQ 15.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 62,
    "type": "image",
    "src": "/assets/PICTNIQ 16.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 63,
    "type": "image",
    "src": "/assets/PICTNIQ 17.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 64,
    "type": "image",
    "src": "/assets/PICTNIQ 18.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 65,
    "type": "image",
    "src": "/assets/PICTNIQ 19.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 66,
    "type": "image",
    "src": "/assets/PICTNIQ 20.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 67,
    "type": "image",
    "src": "/assets/PICTNIQ 21.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 68,
    "type": "image",
    "src": "/assets/PICTNIQ 22.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 69,
    "type": "image",
    "src": "/assets/PICTNIQ 23.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 70,
    "type": "image",
    "src": "/assets/PICTNIQ 24.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 71,
    "type": "image",
    "src": "/assets/PICTNIQ 25.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 72,
    "type": "image",
    "src": "/assets/PICTNIQ 26.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 73,
    "type": "image",
    "src": "/assets/PICTNIQ 27.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 74,
    "type": "image",
    "src": "/assets/PICTNIQ 28.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 75,
    "type": "image",
    "src": "/assets/PICTNIQ 29.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 76,
    "type": "image",
    "src": "/assets/PICTNIQ 30.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 77,
    "type": "image",
    "src": "/assets/PICTNIQ 31.avif",
    "title": "At PICTNIQ",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "kidul"
  },
  {
    "id": 78,
    "type": "image",
    "src": "/assets/Taman Sari.avif",
    "title": "At Taman Sari",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 79,
    "type": "image",
    "src": "/assets/Taman Sari 2.avif",
    "title": "At Taman Sari",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 80,
    "type": "image",
    "src": "/assets/Taman Sari 3.avif",
    "title": "At Taman Sari",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 81,
    "type": "image",
    "src": "/assets/Taman Sari 4.avif",
    "title": "At Taman Sari",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 82,
    "type": "image",
    "src": "/assets/Taman Sari 5.avif",
    "title": "At Taman Sari",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 83,
    "type": "image",
    "src": "/assets/Taman Sari 6.avif",
    "title": "At Taman Sari",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 84,
    "type": "image",
    "src": "/assets/Taman Sari 7.avif",
    "title": "At Taman Sari",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 85,
    "type": "image",
    "src": "/assets/Taman Sari 8.avif",
    "title": "At Taman Sari",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 86,
    "type": "image",
    "src": "/assets/Taman Sari 9.avif",
    "title": "At Taman Sari",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 87,
    "type": "image",
    "src": "/assets/Taman Sari 10.avif",
    "title": "At Taman Sari",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
  {
    "id": 88,
    "type": "image",
    "src": "/assets/Taman Sari 11.avif",
    "title": "At Taman Sari",
    "description": "",
    "category": "yogyakarta",
    "subCategory": "yogya-kota"
  },
]

// Struktur kategori hierarkis
const categoryStructure = {
  all: { label: "All", parent: null },
  jakarta: { 
    label: "Jakarta", 
    parent: null,
    children: ["jakarta-pusat", "jakarta-selatan", "jakarta-utara", "jakarta-timur", "jakarta-barat"]
  },
  yogyakarta: { 
    label: "Yogyakarta", 
    parent: null,
    children: ["yogya-kota", "sleman", "bantul", "kidul"]
  },
  bogor: { 
    label: "Bogor", 
    parent: null,
    children: ["bogor-tengah", "bogor-barat", "bogor-timur", "puncak", "cianjur"]
  },
  // Sub-categories Jakarta
  "jakarta-pusat": { label: "Jakarta Pusat", parent: "jakarta" },
  "jakarta-selatan": { label: "Jakarta Selatan", parent: "jakarta" },
  "jakarta-utara": { label: "Jakarta Utara", parent: "jakarta" },
  "jakarta-timur": { label: "Jakarta Timur", parent: "jakarta" },
  "jakarta-barat": { label: "Jakarta Barat", parent: "jakarta" },
  // Sub-categories Yogyakarta
  "yogya-kota": { label: "Kota Yogyakarta", parent: "yogyakarta" },
  "sleman": { label: "Sleman", parent: "yogyakarta" },
  "bantul": { label: "Bantul", parent: "yogyakarta" },
  "kidul": { label: "Gunung Kidul", parent: "yogyakarta" },
  // Sub-categories Bogor
  "bogor-tengah": { label: "Bogor Tengah", parent: "bogor" },
  "bogor-barat": { label: "Bogor Barat", parent: "bogor" },
  "bogor-timur": { label: "Bogor Timur", parent: "bogor" },
  "puncak": { label: "Puncak", parent: "bogor" },
  "cianjur": { label: "Cianjur", parent: "bogor" },
}

// Function to get item count for each category
const getCategoryCount = (categoryId) => {
  if (categoryId === "all") return galleryItems.length
  
  const category = categoryStructure[categoryId]
  if (category.children) {
    // Parent category: count all items in subcategories
    return galleryItems.filter(item => item.category === categoryId).length
  } else {
    // Sub-category: count items with matching subCategory
    return galleryItems.filter(item => item.subCategory === categoryId).length
  }
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState(null)
  const [expandedCategory, setExpandedCategory] = useState(null)

  // Filter items based on selected category
  const filteredItems = () => {
    if (selectedCategory === "all") return galleryItems
    
    const category = categoryStructure[selectedCategory]
    if (category.children) {
      // Parent category selected: show all items from that category
      return galleryItems.filter(item => item.category === selectedCategory)
    } else {
      // Sub-category selected: show items from that specific sub-category
      return galleryItems.filter(item => item.subCategory === selectedCategory)
    }
  }

  // Get main categories for display
  const mainCategories = Object.keys(categoryStructure).filter(key => 
    categoryStructure[key].parent === null
  )

  // Get sub-categories for a parent category
  const getSubCategories = (parentId) => {
    const parent = categoryStructure[parentId]
    return parent.children ? parent.children : []
  }

  // Get all sub-categories that have assets
  const getSubCategoriesWithAssets = () => {
    const allSubCategories = Object.keys(categoryStructure).filter(key => 
      categoryStructure[key].parent !== null && getCategoryCount(key) > 0
    )
    return allSubCategories
  }

  // Toggle category expansion
  const toggleCategory = (categoryId) => {
    if (categoryId === "all") {
      setExpandedCategory(expandedCategory === "all" ? null : "all")
      setSelectedCategory(categoryId)
    } else if (categoryStructure[categoryId].children) {
      setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
      setSelectedCategory(categoryId)
    } else {
      setSelectedCategory(categoryId)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <Navbar />

      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center py-16">
          <GalleryIcon className="w-16 h-16 text-pink-500 mx-auto mb-6 animate-heartbeat" />
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Captured{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Memories</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Beautiful memories captured in photos and videos from every meaningful moment of our journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-col gap-4">
            {/* Main Categories */}
            <div className="flex flex-wrap justify-center gap-3">
              {mainCategories.map((categoryId) => (
                <div key={categoryId} className="flex flex-col items-center">
                  <button
                    onClick={() => toggleCategory(categoryId)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === categoryId
                        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-pink-50 hover:text-pink-600 shadow-md"
                    }`}
                  >
                    {categoryStructure[categoryId].label} ({getCategoryCount(categoryId)})
                  </button>
                </div>
              ))}
            </div>

            {/* Sub Categories */}
            {expandedCategory === "all" ? (
              // Show all sub-categories that have assets when "Semua" is expanded
              <div className="flex flex-wrap justify-center gap-2 mt-4 animate-fade-in-up">
                <div className="w-full text-center mb-3">
                  <span className="text-sm text-gray-500 font-medium">Our Locations in Photos</span>
                </div>
                {getSubCategoriesWithAssets().map((subCategoryId) => (
                  <button
                    key={subCategoryId}
                    onClick={() => setSelectedCategory(subCategoryId)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === subCategoryId
                        ? "bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-md"
                        : "bg-pink-50 text-pink-700 hover:bg-pink-100 hover:text-pink-800 border border-pink-200"
                    }`}
                  >
                    {categoryStructure[subCategoryId].label} ({getCategoryCount(subCategoryId)})
                    <span className="text-xs opacity-75 ml-1">
                      • {categoryStructure[categoryStructure[subCategoryId].parent].label}
                    </span>
                  </button>
                ))}
              </div>
            ) : expandedCategory && categoryStructure[expandedCategory].children ? (
              // Show sub-categories for specific parent category
              <div className="flex flex-wrap justify-center gap-2 mt-4 animate-fade-in-up">
                {getSubCategories(expandedCategory).map((subCategoryId) => (
                  <button
                    key={subCategoryId}
                    onClick={() => setSelectedCategory(subCategoryId)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === subCategoryId
                        ? "bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-md"
                        : "bg-pink-50 text-pink-700 hover:bg-pink-100 hover:text-pink-800 border border-pink-200"
                    }`}
                  >
                    {categoryStructure[subCategoryId].label} ({getCategoryCount(subCategoryId)})
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-6xl mx-auto pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems().map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-playfair text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    {categoryStructure[item.subCategory]?.label || categoryStructure[item.category]?.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* No items message */}
          {filteredItems().length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No memories here yet. Have a place we should visit?</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden animate-fade-in-up">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
            >
              <CloseIcon className="w-6 h-6 text-gray-700" />
            </button>

            {/* Image */}
            <div className="aspect-video overflow-hidden">
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {categoryStructure[selectedImage.category]?.label}
                </span>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                  {categoryStructure[selectedImage.subCategory]?.label}
                </span>
              </div>
              <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h2>
              <p className="text-gray-600 leading-relaxed">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}