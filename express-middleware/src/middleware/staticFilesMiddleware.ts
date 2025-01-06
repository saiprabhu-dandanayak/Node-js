import express from 'express';

/* Serve static files from the "public" directory 
*/
export const serveStaticFiles = express.static('public');
