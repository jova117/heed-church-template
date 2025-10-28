/**
 * Content Provider
 * 
 * Provides easy access to all content configuration.
 * This acts as a single interface for all content across the site.
 */

import {
  HERO_CONTENT,
  NAVIGATION_CONTENT,
  ABOUT_CONTENT,
  SERVICE_TIMES_CONTENT,
  CAMPUS_CONTENT,
  SMALL_GROUPS_CONTENT,
  GIVING_CONTENT,
  CONTACT_CONTENT,
  FOOTER_CONTENT,
  FIRST_TIME_CONTENT,
  SERMON_CONTENT,
  SMALL_GROUPS_CONTENT_DETAILED,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  LOADING_MESSAGES
} from './content-config';

// Main content object that can be easily imported
export const Content = {
  hero: HERO_CONTENT,
  navigation: NAVIGATION_CONTENT,
  about: ABOUT_CONTENT,
  serviceTimes: SERVICE_TIMES_CONTENT,
  campus: CAMPUS_CONTENT,
  smallGroups: SMALL_GROUPS_CONTENT,
  giving: GIVING_CONTENT,
  contact: CONTACT_CONTENT,
  footer: FOOTER_CONTENT,
  firstTime: FIRST_TIME_CONTENT,
  sermon: SERMON_CONTENT,
  smallGroupsDetailed: SMALL_GROUPS_CONTENT_DETAILED,
  errors: ERROR_MESSAGES,
  success: SUCCESS_MESSAGES,
  loading: LOADING_MESSAGES
};

// Individual exports for specific use cases
export {
  HERO_CONTENT,
  NAVIGATION_CONTENT,
  ABOUT_CONTENT,
  SERVICE_TIMES_CONTENT,
  CAMPUS_CONTENT,
  SMALL_GROUPS_CONTENT,
  GIVING_CONTENT,
  CONTACT_CONTENT,
  FOOTER_CONTENT,
  FIRST_TIME_CONTENT,
  SERMON_CONTENT,
  SMALL_GROUPS_CONTENT_DETAILED,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  LOADING_MESSAGES
};

// Helper function to get content by path
export const getContent = (path: string) => {
  const keys = path.split('.');
  let content: unknown = Content;
  
  for (const key of keys) {
    if (content && typeof content === 'object' && key in content) {
      content = (content as Record<string, unknown>)[key];
    } else {
      return null;
    }
  }
  
  return content;
};

// Helper function to update content (for AI agents)
export const updateContent = (path: string, value: unknown) => {
  const keys = path.split('.');
  let current: Record<string, unknown> = Content;
  
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) {
      current[keys[i]] = {};
    }
    current = current[keys[i]] as Record<string, unknown>;
  }
  
  current[keys[keys.length - 1]] = value;
};
