const admin = require("firebase-admin");
const { parse } = require("json2csv");
const fs = require("fs");

// 🔹 Replace with your Firebase project credentials JSON file
const serviceAccount = require("./service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function exportEmails() {
  try {
    const snapshot = await db.collection("subscribers").get();
    const emails = [];

    snapshot.forEach((doc) => {
      emails.push({
        email: doc.data().email,
        date: doc.data().timestamp?.toDate().toLocaleString(),
      });
    });

    if (emails.length === 0) {
      console.log("No emails found.");
      return;
    }

    const csv = parse(emails);
    fs.writeFileSync("emails.csv", csv);

    console.log("✅ Emails exported successfully to emails.csv");
  } catch (error) {
    console.error("Error exporting emails:", error);
  }
}

exportEmails();
