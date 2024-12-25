// THE CLASS BELOW IS PLACEHOLDER DATA AND SHOULD BE REPLACED WITH REAL DATA

class Notification{
  constructor(id, title, message, type, timestamp)

    {

      this.id = id;
      this.title = title;
      this.type = type;
      this.message = message;
      this.timestamp = timestamp;

  }
}

const notifications = [
  new Notification(1, "New Message", "You have a new message from John.", "2024-12-21"),
  new Notification(2, "System Update", "12 apps need an urgent update", "2024-12-21"),
  new Notification(3, "WhatsApp", "Caroline sent you a message", "2024-12-21"),
  new Notification(4, "Facebook", "You have 4 new friends suggestions.", "2024-12-21"),
  new Notification(5, "Android System", "Your battery is below 15% connect to a charger now.", "2024-12-21"),
];


export default notifications;
