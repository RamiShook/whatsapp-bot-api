const { Client } = require("pg");
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
client.connect();

const readSession = async () => {
  try {
    const res = await client.query(
      "SELECT * FROM wa_sessions ORDER BY created_at DESC LIMIT 1"
    );
    if (res.rows.length) return res.rows[0].session;
    return "";
  } catch (err) {
    throw err;
  }
};

const saveSession = (session) => {
  client.query(
    "INSERT INTO wa_sessions (session) VALUES($1)",
    [session],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("session saved");
      }
    }
  );
};

const removeSession = () => {
  client.query("DELETE FROM wa_sessions", (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Session removed from database");
    }
  });
};

const saveMessage = (phone, msg, deviceType) => {
  client.query(
    "INSERT INTO clients (phone,message,device_type) VALUES($1,$2,$3)",
    [phone, msg, deviceType],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Message Data Sent To Database " + result);
      }
    }
  );
};

module.exports = {
  readSession,
  removeSession,
  saveSession,
  saveMessage,
};
