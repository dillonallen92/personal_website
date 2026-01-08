/**
 * Utility functions for path management
 */

/**
 * Get the base path for the application
 * In production, this is '/personal_website', locally it's empty
 * @returns The base path string
 */
export const getBasePath = (): string => {
  return process.env.NODE_ENV === 'production' ? '/personal_website' : '';
};
