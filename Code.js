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
        GmailApp.sendEmail(errorEmail, "Error sending email", "There was an error sending email with script ID " + ScriptApp.getScriptId);
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