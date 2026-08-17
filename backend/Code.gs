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
 * 8. Paste the Web App URL into index.html (around line 234) inside the action="..." attribute of the <form>.
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

    // Read from e.parameter because the static HTML form sends application/x-www-form-urlencoded
    const { name, email, phone, message } = e.parameter;
    const timestamp = new Date().toISOString(); // Save as UTC string
    
    sheet.appendRow([timestamp, name, email, phone, message]);
    
    const htmlSuccess = "<html><body style='font-family: sans-serif; text-align: center; padding-top: 50px;'><h2>Thank you!</h2><p>Your message has been sent successfully.</p><script>setTimeout(()=>window.close(), 4000)</script></body></html>";
    return HtmlService.createHtmlOutput(htmlSuccess);
      
  } catch (error) {
    const htmlError = "<html><body style='font-family: sans-serif; text-align: center; padding-top: 50px;'><h2>Error</h2><p>" + error.toString() + "</p></body></html>";
    return HtmlService.createHtmlOutput(htmlError);
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
