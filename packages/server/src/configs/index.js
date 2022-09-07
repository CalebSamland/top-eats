export const PORT = process.env.PORT || 3001;
export const API_URL = process.env.API_URL ? `/${process.env.API_URL}` : '/api';
export const DB_URL = process.env.DB_URL || 'mongodb://localhost/dbname';
