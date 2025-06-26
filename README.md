# 📝 Blog Comment System (with XSS Practice)

This is a simple blog comment system built using HTML, CSS, and JavaScript. It allows users to post comments dynamically using a form, and displays them on the page using `innerHTML`.

⚠️ **Note**: This version is intentionally vulnerable to **DOM-based XSS**, making it ideal for practicing and understanding how client-side injection works.

---

## 🚀 Features

- Add name and comment through a simple form
- Comments are displayed dynamically using JavaScript
- Uses an in-memory array to store comments temporarily
- Great for learning DOM manipulation and XSS basics

---

## 🛠️ Technologies

- HTML
- CSS
- JavaScript (Vanilla)

---

## ⚠️ Security Notice

This version uses:
```javascript
commentList.innerHTML += newComment;
