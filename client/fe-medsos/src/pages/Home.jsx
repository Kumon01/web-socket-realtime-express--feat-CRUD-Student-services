import React, { useState } from "react";

const styles = {
  container: {
    maxWidth: 600,
    margin: "0 auto",
    padding: 16,
    backgroundColor: "white",
    color: "#222",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: 16,
  },
  form: {
    marginBottom: 24,
  },
  textarea: {
    width: "100%",
    padding: 8,
    borderRadius: 4,
    border: "1px solid #ccc",
    fontSize: "1rem",
    fontFamily: "inherit",
    resize: "none",
  },
  postButton: {
    marginTop: 8,
    backgroundColor: "#3182ce",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: 4,
    cursor: "pointer",
  },
  thread: {
    display: "flex",
    gap: 16,
    marginBottom: 24,
    paddingBottom: 16,
    borderBottom: "1px solid #ddd",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    objectFit: "cover",
  },
  name: {
    fontWeight: 600,
    color: "#111",
  },
  usernameTime: {
    fontSize: "0.875rem",
    color: "#666",
  },
  content: {
    marginTop: 8,
    color: "#333",
  },
  actions: {
    marginTop: 12,
    display: "flex",
    gap: 24,
    fontSize: "0.875rem",
    color: "#666",
  },
  button: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    color: "inherit",
    transition: "color 0.2s ease",
  },
};

const Home = () => {
  const [threads, setThreads] = useState([
    {
      id: 1,
      name: "Kapeke",
      username: "@laba",
      avatar: "public/pp1.jpg",
      content: "lagi santai kawan",
      time: "2 jam lalu",
    },
    {
      id: 2,
      name: "Jane Doe",
      username: "@om ijo",
      avatar: "public/pp2.jpg",
      content: "aku lagi sakit ey",
      time: "5 jam lalu",
    },
    {
      id: 3,
      name: "Jane Doe",
      username: "@umi",
      avatar: "public/pp3.jpg",
      content: "olahraga",
      time: "5 jam lalu",
    },
  ]);

  const [newContent, setNewContent] = useState("");

  const handlePost = () => {
    if (newContent.trim() === "") return;

    const newThread = {
      id: Date.now(),
      name: "aku",
      username: "aku",
      avatar: "public/pp4.jpg",
      content: newContent,
      time: "baru saja",
    };

    setThreads([newThread, ...threads]);
    setNewContent("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Beranda</h1>

      <div style={styles.form}>
        <textarea
          style={styles.textarea}
          rows="3"
          placeholder="Apa yang sedang kamu pikirkan?"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
        <button style={styles.postButton} onClick={handlePost}>
          Posting
        </button>
      </div>

      {threads.map((thread) => (
        <div key={thread.id} style={styles.thread}>
          <img src={thread.avatar} alt="avatar" style={styles.avatar} />
          <div>
            <div style={styles.name}>{thread.name}</div>
            <div style={styles.usernameTime}>
              {thread.username} · {thread.time}
            </div>
            <p style={styles.content}>{thread.content}</p>
            <div style={styles.actions}>
              <button
                style={styles.button}
              >
                ❤️ Suka
              </button>
              <button
                style={styles.button}
              >
                💬 Balas
              </button>
              <button
                style={styles.button}
              >
                🔁 Repost
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
