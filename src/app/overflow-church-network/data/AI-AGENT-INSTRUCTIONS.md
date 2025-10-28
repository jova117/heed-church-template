# AI Agent Instructions for Church Data Customization

This document provides clear instructions for AI agents on how to customize the HEED Church Site template with a church's actual data.

## Overview

The HEED Church Site uses a centralized data management system that makes it easy for AI agents to customize the entire site by updating a single configuration file.

## Quick Start

1. **Locate the data file**: `src/app/overflow-church-network/data/church-config.ts`
2. **Set USE_MOCK_DATA to false**: Change `export const USE_MOCK_DATA = true;` to `export const USE_MOCK_DATA = false;`
3. **Replace all mock data** with the church's actual information
4. **Test the site** to ensure all data displays correctly

## Data Structure

### Church Information
```typescript
export const CHURCH_INFO = {
  name: "Church Name",
  tagline: "Church Tagline",
  description: "Church Description",
  website: "https://church.com",
  email: "info@church.com",
  phone: "(555) 123-4567",
  address: { /* address object */ },
  socialMedia: { /* social media links */ }
};
```

### Lead Pastor
```typescript
export const LEAD_PASTOR = {
  name: "Pastor Name",
  title: "Pastor Title",
  email: "pastor@church.com",
  phone: "(555) 123-4567",
  bio: "Pastor bio",
  image: "/images/pastors/pastor.jpg"
};
```

### Campuses
```typescript
export const CAMPUSES = [
  {
    id: 'campus-id',
    name: 'Campus Name',
    address: 'Campus Address',
    city: 'City',
    state: 'State',
    zip: '12345',
    phone: '(555) 123-4567',
    email: 'campus@church.com',
    lat: 40.7128, // Latitude for maps
    lng: -74.0060, // Longitude for maps
    serviceTimes: [ /* service times array */ ],
    features: [ /* campus features array */ ],
    image: '/images/campus.jpg',
    pastor: { /* campus pastor info */ }
  }
];
```

### Small Groups
```typescript
export const SMALL_GROUPS = [
  {
    id: 1,
    name: 'Group Name',
    leader: 'Leader Name',
    campus: 'Campus Name',
    day: 'Day of Week',
    time: 'Time',
    lifeStage: 'Life Stage',
    interests: ['Interest1', 'Interest2'],
    description: 'Group description',
    location: 'Location',
    capacity: 'Current/Max',
    image: '👥'
  }
];
```

### Recent Messages
```typescript
export const RECENT_MESSAGES = [
  {
    title: "Message Title",
    speaker: "Speaker Name",
    date: "Date",
    duration: "Duration",
    image: "🎯",
    description: "Message description"
  }
];
```

## AI Agent Workflow

### Step 1: Gather Church Information
- Church name, tagline, description
- Contact information (phone, email, address)
- Website and social media links
- Lead pastor information
- Campus locations and details
- Service times for each campus
- Small groups information
- Recent messages/sermons

### Step 2: Update Configuration File
1. Open `src/app/overflow-church-network/data/church-config.ts`
2. Set `USE_MOCK_DATA = false`
3. Replace all mock data with real church data
4. Ensure all required fields are filled
5. Verify data consistency across all sections

### Step 3: Test and Validate
1. Run the development server: `npm run dev`
2. Navigate through all pages to ensure data displays correctly
3. Check that all campus information is accurate
4. Verify small groups display properly
5. Confirm contact information is correct

## Data Validation Checklist

- [ ] Church name and tagline are updated
- [ ] Contact information is accurate
- [ ] All campuses have complete information
- [ ] Service times are correct for each campus
- [ ] Small groups have accurate information
- [ ] Recent messages are up-to-date
- [ ] All images have correct paths
- [ ] Social media links are functional
- [ ] Pastor information is complete

## Common Issues and Solutions

### Issue: Images not displaying
**Solution**: Ensure image paths are correct and images exist in the `public/images` directory

### Issue: Campus information not updating
**Solution**: Check that campus IDs match between different data sections

### Issue: Small groups not filtering correctly
**Solution**: Verify campus names match exactly between campuses and small groups

### Issue: Service times not displaying
**Solution**: Ensure service times are in the correct format and campus names match

## Best Practices

1. **Consistency**: Use consistent naming conventions across all data
2. **Completeness**: Fill in all required fields to avoid display issues
3. **Accuracy**: Double-check all contact information and service times
4. **Testing**: Always test the site after making changes
5. **Backup**: Keep a backup of the original mock data for reference

## Template File

A template file is available at `src/app/overflow-church-network/data/church-data-template.ts` that provides a clean starting point for customization.

## Support

If you encounter issues or need assistance, refer to the main project documentation or create an issue in the repository.
