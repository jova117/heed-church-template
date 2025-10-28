/**
 * Data Provider - Single source of truth for all church data
 * 
 * This file provides a clean interface for accessing church data.
 * AI agents can easily update the church-config.ts file to customize the entire site.
 */

import { 
  CHURCH_INFO, 
  LEAD_PASTOR, 
  CAMPUSES, 
  SMALL_GROUPS, 
  MESSAGES, 
  SERVICE_TIMES, 
  CONTACT_INFO,
  USE_MOCK_DATA 
} from './church-config';

// Export all data through a single interface
export const ChurchData = {
  // Basic church information
  info: CHURCH_INFO,
  leadPastor: LEAD_PASTOR,
  
  // Campus data
  campuses: CAMPUSES,
  
  // Small groups
  smallGroups: SMALL_GROUPS,
  
  // Recent messages/sermons
  messages: MESSAGES,
  
  // Service times
  serviceTimes: SERVICE_TIMES,
  
  // Contact information
  contact: CONTACT_INFO,
  
  // Configuration
  useMockData: USE_MOCK_DATA
};

// Helper functions for common data access patterns
export const getCampusById = (id: string) => {
  return CAMPUSES.find(campus => campus.id === id);
};

export const getCampusByName = (name: string) => {
  return CAMPUSES.find(campus => campus.name === name);
};

export const getSmallGroupsByCampus = (campusName: string) => {
  return SMALL_GROUPS.filter(group => group.campus === campusName);
};

export const getSmallGroupsByLifeStage = (lifeStage: string) => {
  return SMALL_GROUPS.filter(group => group.lifeStage === lifeStage);
};

export const getServiceTimesByCampus = (campusName: string) => {
  return SERVICE_TIMES.find(service => service.name === campusName);
};

// Note: Individual data exports removed - use ChurchData object instead
// For backward compatibility, access data through ChurchData.campuses, ChurchData.leadPastor, etc.
