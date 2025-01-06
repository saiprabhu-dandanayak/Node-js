import express from 'express';

/*
 Body-parser middleware to handle JSON bodies
 */ 
export const jsonParser = express.json();

/* Body-parser middleware to handle URL-encoded bodies 
*/
export const urlEncodedParser = express.urlencoded({ extended: true });
