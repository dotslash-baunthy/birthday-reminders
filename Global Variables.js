var rootSheet = SpreadsheetApp.getActive();
var birthdayReminderSheet = rootSheet.getSheetByName('Birthday reminders');
var allData = birthdayReminderSheet.getDataRange().getValues();
var errorEmail = "akshit.baunthy@baunthy.co.in";