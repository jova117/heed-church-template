// Validation utilities for the Overflow Church Network demo

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export const validateEmail = (email: string): ValidationResult => {
  const errors: string[] = [];
  
  if (!email) {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Please enter a valid email address');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export const validatePhone = (phone: string): ValidationResult => {
  const errors: string[] = [];
  
  if (!phone) {
    errors.push('Phone number is required');
  } else if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(phone)) {
    errors.push('Please enter a valid phone number in format (555) 123-4567');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export const validateName = (name: string): ValidationResult => {
  const errors: string[] = [];
  
  if (!name) {
    errors.push('Name is required');
  } else if (name.length < 2) {
    errors.push('Name must be at least 2 characters long');
  } else if (name.length > 50) {
    errors.push('Name must be less than 50 characters');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export const validateCampusSelection = (campusId: string): ValidationResult => {
  const errors: string[] = [];
  
  if (!campusId) {
    errors.push('Please select a campus');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export const validateForm = (formData: Record<string, unknown>): ValidationResult => {
  const errors: string[] = [];
  
  // Validate required fields
  if (!formData.name) {
    errors.push('Name is required');
  }
  
  if (!formData.email) {
    errors.push('Email is required');
  }
  
  if (!formData.campus) {
    errors.push('Campus selection is required');
  }
  
  // Validate email format
  if (formData.email && typeof formData.email === 'string' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push('Please enter a valid email address');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};
