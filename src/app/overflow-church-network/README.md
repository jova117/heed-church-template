# Overflow Church Network Demo

A comprehensive demo site showcasing the HEED Church Site template capabilities with Mars-themed content.

## 🚀 Overview

This demo site demonstrates how churches can use the HEED Church Site template to create a professional, multi-campus church website. The demo uses Mars-themed content to avoid real-world conflicts while showcasing all template features.

## 📁 Project Structure

```
src/app/overflow-church-network/
├── components/           # Shared components
│   ├── Navigation.tsx   # Main navigation component
│   ├── Footer.tsx      # Shared footer component
│   ├── LoadingSpinner.tsx
│   └── ErrorBoundary.tsx
├── hooks/              # Custom React hooks
│   └── useAsync.ts     # Async operation hook
├── utils/              # Utility functions
│   ├── validation.ts   # Form validation
│   └── testRunner.ts   # Test utilities
├── mars-central/       # Campus-specific pages
├── valles-marineris/
├── phobos-station/
├── new-terra/
├── first-time/         # First-time visitor page
├── small-groups/       # Small groups finder
├── sermon/            # Sermon page
├── mock-data.ts       # Mars-themed mock data
└── page.tsx          # Main homepage
```

## 🎯 Key Features Demonstrated

### 1. **Multi-Campus Architecture**
- Four distinct campus pages with unique branding
- Consistent navigation and footer across all pages
- Campus-specific information and features

### 2. **Responsive Design**
- Mobile-first approach with progressive enhancement
- Optimized for all screen sizes
- Touch-friendly interactions

### 3. **Error Handling & Loading States**
- Comprehensive error boundaries
- Loading spinners for async operations
- Graceful degradation

### 4. **Mock Data Integration**
- Centralized data management
- Easy content customization
- Type-safe data structures

### 5. **User Experience**
- First-time visitor flow
- Small group finder with filtering
- Sermon streaming capabilities
- Campus selection and planning

## 🛠️ Technical Implementation

### **Components**
- **Navigation**: Sticky header with mobile menu
- **Footer**: Consistent across all pages
- **LoadingSpinner**: Reusable loading component
- **ErrorBoundary**: Catches and handles errors gracefully

### **Hooks**
- **useAsync**: Manages async operations with loading/error states

### **Utils**
- **validation.ts**: Form validation utilities
- **testRunner.ts**: Simple test framework for demo validation

### **Mock Data**
- **mockCampusData**: Campus information and features
- **mockPastorData**: Pastor information and contact details
- **mockSmallGroupsData**: Small group information

## 🎨 Design System

### **Color Palette**
- **Primary**: Orange (#f97316) - Mars theme
- **Secondary**: Various campus-specific colors
- **Neutral**: Gray scale for text and backgrounds

### **Typography**
- **Headings**: Bold, large sizes with proper hierarchy
- **Body**: Readable font sizes with good line height
- **Responsive**: Scales appropriately across devices

### **Spacing**
- **Consistent**: Uses Tailwind's spacing scale
- **Responsive**: Adapts to screen size
- **Accessible**: Proper touch targets and spacing

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)

## 🧪 Testing

The demo includes a simple test runner that validates:
- Mock data structure and integrity
- Component imports and exports
- Validation function correctness
- Campus data completeness

Run tests with:
```typescript
import { runAndLogTests } from './utils/testRunner';
await runAndLogTests();
```

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **View Demo**
   - Open http://localhost:3000/overflow-church-network
   - Navigate through different pages and features

## 📝 Customization Guide

### **Adding New Campuses**
1. Add campus data to `mock-data.ts`
2. Create campus page in appropriate directory
3. Update navigation links
4. Add campus to footer

### **Modifying Content**
1. Update mock data in `mock-data.ts`
2. Modify component props and data flow
3. Update validation rules if needed

### **Styling Changes**
1. Modify Tailwind classes in components
2. Update color palette in design system
3. Adjust responsive breakpoints as needed

## 🔧 Development Notes

### **Error Handling**
- All components wrapped in ErrorBoundary
- Async operations have loading states
- Form validation with user-friendly messages

### **Performance**
- Lazy loading for heavy components
- Optimized images and assets
- Efficient state management

### **Accessibility**
- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly

## 📚 Documentation

- **Component Documentation**: Each component has JSDoc comments
- **API Documentation**: Mock data structure documented
- **Usage Examples**: Code examples in components

## 🤝 Contributing

1. Follow the existing code structure
2. Add tests for new features
3. Update documentation
4. Ensure responsive design
5. Test error handling

## 📄 License

This demo is part of the HEED Church Site template project.

---

**Note**: This is a demo site using Mars-themed content. For production use, replace all Mars-themed content with your church's actual information.
