function sendReminder() {
  var name = '';
  var birthDate = '';
  var emailAddress = '';
  var todayDate = new Date();
  allData.slice(1, allData.length).forEach(function (birthDayArr) {
    birthDate = new Date(birthDayArr[2]);
    if (birthDate.getDate() == todayDate.getDate() && birthDate.getMonth() == todayDate.getMonth()) {
      name = birthDayArr[0];
      emailAddress = birthDayArr[1];
      try {
        GmailApp.sendEmail(emailAddress, "Happy birthday!", "Happy birthday, " + name);
      }
      catch (e) {
        try {
          GmailApp.sendEmail(errorEmail, "Error sending email", "There was an error sending email to " + name + " - " + emailAddress + " with script ID " + ScriptApp.getScriptId);
        }
        catch (e) {
          Logger.log("Failed to send email for " + name + " to " + emailAddress + ". Make sure the data in the sheet is valid (valid email address). If it is, is the API down?");
        }
      }
    }
  })
}

function createTrigger() {
  ScriptApp.newTrigger('sendReminder')
    .timeBased()
    .everyDays(1)
    .atHour(6)
    .create();
}