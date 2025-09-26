# 🔄 Sorting Algorithm Visualizer

A dynamic and interactive web application built with React and Vite that visualizes various sorting algorithms in real-time. Watch how different algorithms work step by step with customizable speed controls and beautiful animations.

## 📊 Supported Sorting Algorithms

### **Bubble Sort**

- **Time Complexity:** O(n²) average and worst case, O(n) best case
- **Space Complexity:** O(1)
- **Description:** Repeatedly steps through the list, compares adjacent elements and swaps them if they're in wrong order. Simple but inefficient for large datasets.

### **Selection Sort**

- **Time Complexity:** O(n²) for all cases
- **Space Complexity:** O(1)
- **Description:** Finds the minimum element and places it at the beginning, then repeats for the remaining unsorted portion.

### **Insertion Sort**

- **Time Complexity:** O(n²) average and worst case, O(n) best case
- **Space Complexity:** O(1)
- **Description:** Builds the sorted array one element at a time by inserting each element into its correct position among the previously sorted elements.

### **Quick Sort**

- **Time Complexity:** O(n log n) average case, O(n²) worst case
- **Space Complexity:** O(log n)
- **Description:** Divides the array using a pivot element, recursively sorts elements smaller and larger than the pivot. Very efficient for large datasets.

## ✨ Features

- **Real-time Visualization:** Watch sorting algorithms work step by step
- **Multiple Algorithms:** Compare different sorting techniques
- **Speed Control:** Adjust animation speed (Slow, Normal, Fast, Very Fast)
- **Interactive Controls:** Generate new random arrays, start/stop visualization
- **Responsive Design:** Works on desktop and mobile devices
- **Color-coded Animation:** Yellow for comparisons, Green for swaps/movements

## 🚀 Installation Guide

### Prerequisites

- **Node.js** (version 14.0 or higher)
- **npm** or **yarn** package manager

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/ankitpokhrel08/sorting-visualize.git
   cd sorting-visualize
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)


## 📁 Folder Structure

```
sorting-visualize/
├── 📄 README.md                 # Project documentation
├── 📄 package.json              # Dependencies and scripts
├── 📄 vite.config.js             # Vite configuration
├── 📄 eslint.config.js           # ESLint configuration
├── 📄 index.html                 # Main HTML template
│
├── 📁 public/                    # Static assets
│   ├── 🖼️ vite.svg              # Vite logo
│   └── 🖼️ sort.png              # App icon
│
├── 📁 screenshots/               # Application screenshots
│   ├── 🖼️ interface.png         # Main interface
│   ├── 🖼️ insertion_sort.png    # Insertion sort demo
│   └── 🖼️ quick_sort.png        # Quick sort demo
│
└── 📁 src/                       # Source code
    ├── 📄 main.jsx               # Application entry point
    ├── 📄 App.jsx                # Main App component
    ├── 🎨 App.css                # App-specific styles
    ├── 🎨 index.css              # Global styles
    │
    └── 📁 components/            # React components
        ├── 📄 Visualizer.jsx     # Main visualizer component
        └── 🎨 visualizer.css     # Visualizer styles
```

## 🛠️ Technologies Used

- **React 18.3.1** - Frontend framework
- **Vite 5.4.10** - Build tool and dev server
- **CSS3** - Styling and animations
- **ESLint** - Code linting and formatting

## 🎮 How to Use

1. **Generate New Array:** Click "New Graph" to create a random array
2. **Select Algorithm:** Choose your preferred sorting algorithm from the dropdown
3. **Adjust Speed:** Set the animation speed using the speed selector
4. **Start Visualization:** Click "Visualize" to begin the sorting animation
5. **Cancel Anytime:** Use "Cancel" button to stop the current visualization

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Add new sorting algorithms
- Improve the UI/UX
- Fix bugs or optimize performance
- Add new features

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ by [Ankit Pokhrel](https://github.com/ankitpokhrel08)
