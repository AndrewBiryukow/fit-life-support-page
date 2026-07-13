/**
 * Google Apps Script for FitLife Contact Form
 * 
 * Instructions:
 * 1. Go to script.google.com and create a new project.
 * 2. Paste this code into Code.gs.
 * 3. Create a Google Sheet and copy its ID (from the URL).
 * 4. Replace 'YOUR_SHEET_ID_HERE' with your Sheet ID.
 * 5. Deploy -> New deployment -> Select type 'Web app'.
 * 6. Set 'Execute as' to 'Me' and 'Who has access' to 'Anyone'.
 * 7. Deploy, authorize, and copy the Web App URL.
 * 8. Paste the Web App URL into src/components/Contact.tsx (line 17).
 */

const SHEET_ID = 'YOUR_SHEET_ID_HERE'; // Replace with your Sheet ID
const SHEET_NAME = 'Contacts';

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME) || 
                  SpreadsheetApp.openById(SHEET_ID).insertSheet(SHEET_NAME);
    
    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Message']);
      sheet.getRange(1, 1, 1, 5).setFontWeight('bold');
    }

    const data = JSON.parse(e.postData.contents);
    const { name, email, phone, message } = data;
    const timestamp = new Date().toISOString(); // Save as UTC string
    
    sheet.appendRow([timestamp, name, email, phone, message]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Data saved successfully" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (e.g. when opening the script URL directly in a browser)
function doGet(e) {
  return ContentService.createTextOutput("FitLife Backend Script is active and listening for POST requests.");
}

// Handle preflight requests for CORS (if applicable)
function doOptions(e) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400"
  };
  return ContentService.createTextOutput("").setMimeType(ContentService.MimeType.JSON).setHeaders(headers);
}
