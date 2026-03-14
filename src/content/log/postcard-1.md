---
date: "2025-03-10"
content: "Spent the morning debugging a tricky WebSocket connection issue. Turns out the server was sending data faster than the client could process. Added a throttle mechanism and it's running smoothly now."
---

Just shipped a fix for that connection issue we've been having. Added a simple throttle to prevent data overwhelm. Sometimes the simplest solutions are the best.