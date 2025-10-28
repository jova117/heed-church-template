# Church Configuration System

This directory contains the configuration system for the HEED Church Site template. This is the **single source of truth** for all church data and can be easily updated by AI agents or manually.

## Files Overview

### Core Configuration Files
- `church-config.ts` - **Main configuration file** (customize this for your church)
- `church-config.template.ts` - **Template file** (copy to church-config.ts and customize)
- `data-provider.ts` - Data access layer and helper functions
- `component-config.ts` - Component configuration and variants

### Migration and Documentation
- `MIGRATION-GUIDE.md` - Guide for migrating from old data system
- `README.md` - This file

## Quick Start

### 1. Copy the Template
```bash
cp church-config.template.ts church-config.ts
```

### 2. Customize Your Church Data
Edit `church-config.ts` with your church's information:
- Church name, address, contact info
- Pastor information
- Campus locations and service times
- Small groups and ministries
- Recent messages and events

### 3. Add Your Images
Place your church images in the appropriate directories:
- `/public/images/campuses/` - Campus photos
- `/public/images/pastors/` - Pastor photos
- `/public/images/groups/` - Small group photos
- `/public/images/messages/` - Sermon thumbnails
- `/public/images/events/` - Event photos
- `/public/images/ministries/` - Ministry photos

## Configuration Structure

### Church Information
```typescript
export const CHURCH_INFO = {
  name: "Your Church Name",
  tagline: "Your church tagline",
  description: "Church description",
  website: "https://yourchurch.com",
  email: "info@yourchurch.com",
  phone: "(555) 123-4567",
  address: { /* address object */ },
  socialMedia: { /* social media links */ }
};
```

### Campus Data
```typescript
export const CAMPUSES = [
  {
    id: 'main-campus',
    name: 'Main Campus',
    address: '123 Main Street',
    // ... more campus data
  }
];
```

### Small Groups
```typescript
export const SMALL_GROUPS = [
  {
    id: 'young-adults',
    name: 'Young Adults Group',
    description: 'Group description',
    campus: 'Main Campus',
    day: 'Tuesday',
    time: '7:00 PM',
    // ... more group data
  }
];
```

## AI Integration

This configuration system is designed to work seamlessly with AI agents:

### AI Agent Capabilities
- **Update church information** - Change names, addresses, contact info
- **Add/remove campuses** - Modify campus data and service times
- **Manage small groups** - Add new groups, update existing ones
- **Update content** - Add new messages, events, ministries
- **Customize styling** - Modify component variants and layouts

### AI Agent Usage
```typescript
// AI agents can easily update configuration
import { updateChurchInfo, addCampus, addSmallGroup } from './data-provider';

// Update church name
await updateChurchInfo({ name: 'New Church Name' });

// Add a new campus
await addCampus({
  id: 'south-campus',
  name: 'South Campus',
  address: '789 South Street',
  // ... other campus data
});

// Add a new small group
await addSmallGroup({
  id: 'mens-group',
  name: 'Men\'s Bible Study',
  day: 'Saturday',
  time: '8:00 AM',
  // ... other group data
});
```

## Data Flow

```
church-config.ts → data-provider.ts → Components
     ↓                    ↓              ↓
  Raw Data        Helper Functions    UI Display
```

1. **Configuration** - Data defined in `church-config.ts`
2. **Provider** - Helper functions in `data-provider.ts` access and transform data
3. **Components** - React components consume data through the provider

## Best Practices

### 1. Keep Data Consistent
- Use consistent naming conventions
- Ensure all required fields are present
- Validate data before using in components

### 2. Use Helper Functions
- Don't access configuration directly in components
- Use the data provider functions for data access
- This allows for easy data transformation and validation

### 3. Handle Missing Data
- Always provide fallback values
- Use optional chaining for nested properties
- Display appropriate messages for missing data

### 4. Optimize for AI
- Use clear, descriptive field names
- Provide examples in comments
- Keep data structure consistent across similar entities

## Troubleshooting

### Common Issues

1. **Missing Images**
   - Ensure image paths match the actual file locations
   - Use relative paths from the public directory
   - Check file extensions and case sensitivity

2. **Data Not Updating**
   - Clear browser cache
   - Restart the development server
   - Check for TypeScript errors

3. **TypeScript Errors**
   - Ensure all required fields are present
   - Check data types match the expected interfaces
   - Use the template file as a reference

### Getting Help

- Check the [main README](../../README.md) for general setup
- Review the [migration guide](MIGRATION-GUIDE.md) for data migration
- Open an issue on GitHub for bugs or questions

## Examples

### Adding a New Campus
```typescript
// In church-config.ts
export const CAMPUSES = [
  // ... existing campuses
  {
    id: 'east-campus',
    name: 'East Campus',
    address: '456 East Avenue',
    city: 'Your City',
    state: 'Your State',
    zip: '12347',
    phone: '(555) 123-4571',
    email: 'east@yourchurch.com',
    lat: 40.7505,
    lng: -73.9934,
    serviceTimes: [
      { day: 'Sunday', time: '10:30 AM', type: 'Worship Service' }
    ],
    features: ['Worship Center', 'Children\'s Ministry'],
    image: '/images/campuses/east-campus.jpg',
    pastor: {
      name: 'Pastor Mike Johnson',
      email: 'mike@yourchurch.com',
      phone: '(555) 123-4571'
    }
  }
];
```

### Adding a New Small Group
```typescript
// In church-config.ts
export const SMALL_GROUPS = [
  // ... existing groups
  {
    id: 'womens-study',
    name: 'Women\'s Bible Study',
    description: 'A weekly study for women of all ages.',
    campus: 'Main Campus',
    day: 'Wednesday',
    time: '10:00 AM',
    location: 'Room 205',
    leader: 'Sarah Wilson',
    leaderEmail: 'sarah@yourchurch.com',
    capacity: 12,
    currentMembers: 8,
    lifeStage: 'All Ages',
    interests: ['Bible Study', 'Fellowship', 'Prayer'],
    image: '/images/groups/womens-study.jpg'
  }
];
```

---

**Note**: This configuration system is designed to be the single source of truth for your church website. All changes should be made here, and the components will automatically reflect the updates.
