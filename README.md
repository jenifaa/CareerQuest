# **CareerQuest - Career Counseling Website**
 
**Live Site URL**: [CareerQuest]([https://jenifa-career-counseling.surge.sh])

---

### **Overview:**

CareerQuest is an interactive career counseling platform designed to help individuals explore various career paths, interact with professional counselors, and receive tailored advice. The website features an intuitive and responsive interface, where users can register, log in, and browse through available services.

---
## **📷 Screenshot**
![Product Recommendation System Screenshot](https://i.ibb.co.com/nw6NxJC/project2.png)


### **Key Features:**

1. **User-Friendly Authentication**:  
   Users can easily register and log in using their email or Google for quick access. The system supports password validation with security rules (minimum length, character diversity) and error messages are shown if necessary.

2. **Interactive Product and Service Display**:  
   Service cards provide users with detailed information like service descriptions, pricing, availability, and counselor details. Users can also provide feedback or comments on each service.

3. **Dynamic and Personalized User Interface**:  
   The Navbar dynamically updates based on the user’s authentication status, showing "LogOut" and "User" links for logged-in users. Additionally, it features an interactive modal for adding items to the cart and managing the wishlist.

4. **Mobile-Responsive Design**:  
   The website is designed with a responsive layout, ensuring it adapts well to various screen sizes, including smaller devices. On smaller screens, the navigation menu is collapsible for a clean user experience.

5. **Real-Time Data Management**:  
   Real-time data is loaded from external sources with hooks like `useEffect` and `useLoaderData`, ensuring that users always see up-to-date information. User interactions, such as adding feedback or comments, are visible immediately after submission.

---

### **Technologies Used:**
- **Frontend**: React, React Router
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Authentication
- **Deployment**: Firebase Hosting

---

### **Dependencies:**
- `react`
- `react-router-dom`
- `firebase`
- `tailwindcss`
- `react-icons`
- `react-toastify`

---

### **Installation Instructions:**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/jenifaa/career-counseling.git
   cd career-counseling
2. **Install Dependencies:** To install the necessary dependencies for the project, run the following command in the root directory of your project:

```bash
npm install
```

3.**Run the Project Locally:** To start the project on your local machine, use:

```bash
npm run dev
```




