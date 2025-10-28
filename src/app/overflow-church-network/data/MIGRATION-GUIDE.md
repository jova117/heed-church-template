# Migration Guide: From Mock Data to Centralized Data System

This guide explains how to migrate from the old mock-data.ts system to the new centralized data management system.

## Overview

The new system provides:
- Single source of truth for all church data
- Easy AI agent customization
- Better data organization
- Improved maintainability

## Migration Steps

### Step 1: Update Imports

**Old way:**
```typescript
import { mockCampusData, mockPastorData, mockContactData } from '../mock-data';
```

**New way:**
```typescript
import { ChurchData, getCampusById, getSmallGroupsByCampus } from '../data/data-provider';
```

### Step 2: Update Data Access

**Old way:**
```typescript
const campuses = mockCampusData;
const leadPastor = mockPastorData.leadPastor;
const contactInfo = mockContactData;
```

**New way:**
```typescript
const campuses = ChurchData.campuses;
const leadPastor = ChurchData.leadPastor;
const contactInfo = ChurchData.contact;
```

### Step 3: Update Component Logic

**Old way:**
```typescript
const selectedCampus = mockCampusData.find(campus => campus.id === selectedId);
```

**New way:**
```typescript
const selectedCampus = getCampusById(selectedId);
```

## Component-Specific Updates

### Homepage (page.tsx)
```typescript
// Old
import { mockCampusData, mockServiceTimes } from './mock-data';

// New
import { ChurchData } from './data/data-provider';

// Update usage
const campuses = ChurchData.campuses;
const serviceTimes = ChurchData.serviceTimes;
```

### Small Groups Page
```typescript
// Old
const groups = mockSmallGroups;

// New
const groups = ChurchData.smallGroups;
```

### Campus Pages
```typescript
// Old
const campus = mockCampusData.find(c => c.id === 'mars-central');

// New
const campus = getCampusById('mars-central');
```

## Benefits of the New System

1. **Single Source of Truth**: All data comes from one place
2. **AI Agent Friendly**: Easy to customize with AI agents
3. **Better Organization**: Data is logically grouped
4. **Type Safety**: Better TypeScript support
5. **Maintainability**: Easier to update and modify

## Backward Compatibility

The old mock-data.ts file is still available for backward compatibility, but it's marked as deprecated. All new development should use the centralized data system.

## Testing

After migration:
1. Run `npm run dev` to start the development server
2. Navigate through all pages to ensure data displays correctly
3. Check that all campus information is accurate
4. Verify small groups display properly
5. Confirm contact information is correct

## Troubleshooting

### Issue: Data not displaying
**Solution**: Check that imports are updated to use the new data provider

### Issue: Type errors
**Solution**: Ensure all data access is using the new ChurchData object

### Issue: Missing data
**Solution**: Verify that all required data is present in the church-config.ts file

## Next Steps

1. Update all components to use the new data system
2. Remove references to the old mock-data.ts file
3. Test thoroughly to ensure everything works
4. Update documentation to reflect the new system
