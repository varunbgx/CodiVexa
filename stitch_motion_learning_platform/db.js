// db.js - Shared LocalStorage Database Controller for Codivexa LMS

(function() {
    const DEFAULT_COURSES = [
        {
            id: "course-1",
            name: "AI & Machine Learning",
            category: "Artificial Intelligence",
            level: "Intermediate",
            duration: "12 Hours",
            videosCount: 12,
            price: 499,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsqvaFAtmYyOzoctWazq1RfxEpZwUVDXWhj7P4ygfIej8ZxIn27yMUzth9NuZCpiw6f0zl9_WjtOl-DI_P0L0lLLV7EPOGb6A6py0j6urJuEbcuygiWeo5NoN9OdZOi6AcZOtADS1vPnqy6QtRiqHlaAcIdO8ykjol8TaUa42K1l1h370mbrpNNo28TKLvqsTt-IOnznf81UBihgemV0aWJbcOiTofMLTVQ5Wp-hgSKyseH1L9NebB9ahAtEKIbx2yR4pLVvgKz1s",
            description: "Master neural network architectures, predictive modeling, and deep learning algorithms using TensorFlow and Python.",
            videos: [
                { id: "v1-1", title: "1. Introduction to Neural Networks", duration: "15:30" },
                { id: "v1-2", title: "2. Foundations of Machine Learning", duration: "12:45" },
                { id: "v1-3", title: "3. Setting up your Environment", duration: "14:20" },
                { id: "v1-4", title: "4. Data Preprocessing Techniques", duration: "18:10" },
                { id: "v1-5", title: "5. Linear Regression in Python", duration: "16:40" },
                { id: "v1-6", title: "6. Logistic Regression Models", duration: "13:15" },
                { id: "v1-7", title: "7. Supervised Learning Workshop", duration: "21:05" },
                { id: "v1-8", title: "8. Understanding Loss Functions", duration: "17:50" },
                { id: "v1-9", title: "9. Backpropagation Explained", duration: "19:25" },
                { id: "v1-10", title: "10. Optimization Algorithms", duration: "14:40" },
                { id: "v1-11", title: "11. Building your first Perceptron", duration: "22:10" },
                { id: "v1-12", title: "12. Final Module: Course Review", duration: "11:55" }
            ],
            assessment: {
                passingMarks: 60,
                questions: [
                    {
                        id: "q1-1",
                        text: "Which activation function is most commonly used in the hidden layers of a deep neural network to avoid the vanishing gradient problem while maintaining computational efficiency?",
                        options: ["Sigmoid Function", "Rectified Linear Unit (ReLU)", "Hyperbolic Tangent (tanh)", "Softmax Function"],
                        correctOption: 1
                    },
                    {
                        id: "q1-2",
                        text: "What is the primary goal of Gradient Descent in training neural networks?",
                        options: ["Maximize the learning rate", "Minimize the loss function", "Increase model complexity", "Normalize the input features"],
                        correctOption: 1
                    },
                    {
                        id: "q1-3",
                        text: "Which of the following is considered a supervised learning algorithm?",
                        options: ["K-Means Clustering", "Principal Component Analysis (PCA)", "Linear Regression", "Apriori Association Rule"],
                        correctOption: 2
                    },
                    {
                        id: "q1-4",
                        text: "What phenomenon occurs when a model performs exceptionally well on training data but poorly on unseen test data?",
                        options: ["Underfitting", "Overfitting", "Bias drift", "Feature leakage"],
                        correctOption: 1
                    },
                    {
                        id: "q1-5",
                        text: "What does SVM stand for in machine learning terminology?",
                        options: ["Static Vector Model", "Support Vector Machine", "Supervised Valued Matrix", "Systematic Velocity Mapping"],
                        correctOption: 1
                    }
                ]
            }
        },
        {
            id: "course-2",
            name: "Python Programming",
            category: "Python Development",
            level: "Beginner",
            duration: "10 Hours",
            videosCount: 10,
            price: 399,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqCEve9yAPbQpii6oaZw6muL8VxMgNXYQkGro9_thN6ypXaAd0LN9OGncT0ufKGurApiaetiIXMucYeC5uW8-F61s6RwN0_0zp5D6zMeKcYMEk06KWpqNpke8PjWyaRaekLuLsw2Et2UvNLLDfv9AxevweafAUobpR_6jdqwqrlZSztv4W9dO8zdQU4vuAzaSTw1Z9vpGDUrLCKWH1ueiDXxDgSdFGoQAPIK992GFUyfaEOpBaW1L7HK5n2dG-3sqjV68XRQ2sXAQ",
            description: "Go from zero to hero in Python. Cover basic syntax, object-oriented programming, data structures, and FastAPI backend development.",
            videos: [
                { id: "v2-1", title: "1. Python Installation and Setup", duration: "10:15" },
                { id: "v2-2", title: "2. Variables, Types, and Basic Operators", duration: "15:40" },
                { id: "v2-3", title: "3. Control Flows: If statements and Loops", duration: "18:25" },
                { id: "v2-4", title: "4. Defining Functions and Variable Scope", duration: "14:10" },
                { id: "v2-5", title: "5. Lists, Tuples, Dictionaries, and Sets", duration: "20:05" },
                { id: "v2-6", title: "6. Object-Oriented Programming (OOP) Basics", duration: "25:30" },
                { id: "v2-7", title: "7. Working with Files and Error Handling", duration: "16:20" },
                { id: "v2-8", title: "8. Modules, Packages, and virtualenv", duration: "12:15" },
                { id: "v2-9", title: "9. Building a Simple API with FastAPI", duration: "22:50" },
                { id: "v2-10", title: "10. Best Practices and PEP 8 Guidelines", duration: "15:00" }
            ],
            assessment: {
                passingMarks: 60,
                questions: [
                    {
                        id: "q2-1",
                        text: "Which of the following data types in Python is immutable?",
                        options: ["List", "Dictionary", "Set", "Tuple"],
                        correctOption: 3
                    },
                    {
                        id: "q2-2",
                        text: "How do you start a block of code in Python?",
                        options: ["Using curly braces {}", "Using indentation", "Using brackets []", "Using semicolons ;"],
                        correctOption: 1
                    },
                    {
                        id: "q2-3",
                        text: "What is the correct output of print(type([]) == list)?",
                        options: ["True", "False", "None", "Error"],
                        correctOption: 0
                    },
                    {
                        id: "q2-4",
                        text: "Which keyword is used to define a function in Python?",
                        options: ["func", "function", "def", "define"],
                        correctOption: 2
                    },
                    {
                        id: "q2-5",
                        text: "What does pip stand for in Python?",
                        options: ["Python Instance Packager", "Preferred Installer Program", "Python Installation Processor", "Primary Input Path"],
                        correctOption: 1
                    }
                ]
            }
        },
        {
            id: "course-3",
            name: "Java Full Stack",
            category: "Web Development",
            level: "Advanced",
            duration: "15 Hours",
            videosCount: 15,
            price: 599,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrc1VwICG6eAju2TAmKNwB9Pwe0t2RtIoX6Z2O-rsJAmkyRhvPncoBajOEFlctmhBeye1z3nZv7lEJxcqWUzgsetFdXXrv1Ai-zRfrqxPwDZsP7dzmrXlc-O8YuQl1yHrjeG3tejoIOG6wKpnm0faPxlO3qoDOEUPEz4s9QVFyvmaIIP2U2uStMpkVTKH3LmQodHiAbE-MW-J-SEbf6VliInPhJ14htFvS1Xz0o2aIgXoNshPUtXBvY0RlSmjfKBeNgh5oVtlBeqs",
            description: "Master backend services with Spring Boot and frontend creation with modern JavaScript frameworks.",
            videos: [
                { id: "v3-1", title: "1. Java Syntax and Object-Oriented Principles", duration: "15:20" },
                { id: "v3-2", title: "2. Exception Handling and Logging", duration: "12:10" },
                { id: "v3-3", title: "3. Collections Framework & Generics", duration: "20:45" },
                { id: "v3-4", title: "4. Multithreading and Concurrency", duration: "18:15" },
                { id: "v3-5", title: "5. Build Tools: Maven and Gradle", duration: "10:30" },
                { id: "v3-6", title: "6. Introduction to Spring Framework", duration: "16:40" },
                { id: "v3-7", title: "7. Spring Boot Configuration and Starter Kits", duration: "14:15" },
                { id: "v3-8", title: "8. Spring Data JPA and Database Migrations", duration: "22:10" },
                { id: "v3-9", title: "9. Creating RESTful APIs with Spring Boot", duration: "25:00" },
                { id: "v3-10", title: "10. Spring Security & JWT Authentication", duration: "28:30" },
                { id: "v3-11", title: "11. HTML5 and CSS3 Refresher", duration: "12:00" },
                { id: "v3-12", title: "12. Modern JavaScript Essentials", duration: "15:10" },
                { id: "v3-13", title: "13. Integrating Backend REST APIs with UI", duration: "24:35" },
                { id: "v3-14", title: "14. Testing Java Applications (JUnit & Mockito)", duration: "19:50" },
                { id: "v3-15", title: "15. Deploying to Cloud & CI/CD Pipelines", duration: "18:10" }
            ],
            assessment: {
                passingMarks: 60,
                questions: [
                    {
                        id: "q3-1",
                        text: "Which of the following annotations is used in Spring Boot to map HTTP GET requests?",
                        options: ["@PostMapping", "@PutMapping", "@GetMapping", "@RequestMapping"],
                        correctOption: 2
                    },
                    {
                        id: "q3-2",
                        text: "What does JVM stand for?",
                        options: ["Java Variable Machine", "Java Virtual Machine", "Joint Value Manager", "Java Version Method"],
                        correctOption: 1
                    },
                    {
                        id: "q3-3",
                        text: "Which class is the superclass of all classes in Java?",
                        options: ["String", "Object", "Class", "System"],
                        correctOption: 1
                    },
                    {
                        id: "q3-4",
                        text: "Which of the following is NOT a feature of Java?",
                        options: ["Platform Independent", "Object Oriented", "Pointers Support", "Robust Architecture"],
                        correctOption: 2
                    },
                    {
                        id: "q3-5",
                        text: "What does ORM stand for in Hibernate/JPA context?",
                        options: ["Object Relational Mapping", "Online Resource Management", "Optimal Response Method", "Original Registered Modal"],
                        correctOption: 0
                    }
                ]
            }
        },
        {
            id: "course-4",
            name: "Data Science",
            category: "Data Science",
            level: "Intermediate",
            duration: "14 Hours",
            videosCount: 14,
            price: 499,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkmZ2DBTbPXEmPqKun5V_MT4onmAEbqj-ZTEtdyap3Vh5kT1ONwVmYIyCMojgk3CodOEo-HAwxgFILnB0YR3EJSFIv9lci_h7zyNOKPWrWeQ_-Ldi6dozyuw5ESC5CXstYDxgKww2rmhrKuwYPxh9SV8JiCz357IH-UPIIYMkWGf2bbgm97gyddor8y4Yto-SzHenelsmVtEALqbwESgR8CXvvAD_VgLQrzM-_CYcUZbqB5l0HRY0rtWSg3Hs1u249qmggIy5-Ljk",
            description: "Analyze large datasets, clean data, and construct statistical reports using Pandas, NumPy, Matplotlib, and SQL.",
            videos: [
                { id: "v4-1", title: "1. Data Science Lifecycle Overview", duration: "12:10" },
                { id: "v4-2", title: "2. Setting up Jupyter Notebooks", duration: "10:35" },
                { id: "v4-3", title: "3. NumPy Arrays and Multi-dimensional Data", duration: "15:40" },
                { id: "v4-4", title: "4. Pandas Series and DataFrames", duration: "22:15" },
                { id: "v4-5", title: "5. Data Cleaning: Handling Missing Values", duration: "18:30" },
                { id: "v4-6", title: "6. Data Filtering and Sorting in Pandas", duration: "16:15" },
                { id: "v4-7", title: "7. Merging, Joining, and Grouping Data", duration: "20:50" },
                { id: "v4-8", title: "8. Descriptive Statistics with Python", duration: "14:10" },
                { id: "v4-9", title: "9. Data Visualization with Matplotlib", duration: "19:25" },
                { id: "v4-10", title: "10. Advanced Styling with Seaborn", duration: "17:40" },
                { id: "v4-11", title: "11. Introduction to SQL for Data Queries", duration: "25:10" },
                { id: "v4-12", title: "12. Connecting Python with SQL Databases", duration: "18:00" },
                { id: "v4-13", title: "13. Exploratory Data Analysis (EDA) Project", duration: "30:45" },
                { id: "v4-14", title: "14. Communicating Insights and Dashboards", duration: "15:20" }
            ],
            assessment: {
                passingMarks: 60,
                questions: [
                    {
                        id: "q4-1",
                        text: "Which Python library is primary designed for tabular data manipulation and analysis?",
                        options: ["NumPy", "TensorFlow", "Pandas", "Matplotlib"],
                        correctOption: 2
                    },
                    {
                        id: "q4-2",
                        text: "In statistics, what does the median represent?",
                        options: ["The average value", "The middle value when sorted", "The most frequent value", "The range between max and min"],
                        correctOption: 1
                    },
                    {
                        id: "q4-3",
                        text: "What does CSV stand for?",
                        options: ["Command Segregated Values", "Comma Separated Values", "Connected Series Variable", "Central Statistical Value"],
                        correctOption: 1
                    },
                    {
                        id: "q4-4",
                        text: "Which SQL clause is used to filter records based on a condition?",
                        options: ["WHERE", "GROUP BY", "ORDER BY", "HAVING"],
                        correctOption: 0
                    },
                    {
                        id: "q4-5",
                        text: "Which function in Pandas is used to drop rows with missing values?",
                        options: ["drop()", "dropna()", "fillna()", "clear()"],
                        correctOption: 1
                    }
                ]
            }
        },
        {
            id: "course-5",
            name: "Cyber Security",
            category: "Cyber Security",
            level: "Intermediate",
            duration: "8 Hours",
            videosCount: 8,
            price: 449,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPpZQd0kryptu6KaV40kZA6jucljSDics_RY49orS3wHR66VQxxUkQ13xWpfALtw1l2RDjc3B7dafoR7EewEvUVz9G85Gp0CLWrr_o2hLc4C_DwFxtxsbN8OTHjVDQkcE3qHygZGu9rJquFpsk0sNr3WiCe1fhy8TDQ8tYMo_dIxcdjCiP24i2bM4xbXp0NWoVRGj6lwGWRne4maiBaOvLiD0tlYwpqLL9WqGlTl3hXdsMi6gLC_AiAWOJId_ZJK5O5H2yrzS1VsI",
            description: "Learn threat analysis, network defense, security compliance, encryption algorithms, and ethical hacking fundamentals.",
            videos: [
                { id: "v5-1", title: "1. Core Security Concepts & CIA Triad", duration: "12:15" },
                { id: "v5-2", title: "2. Networking Fundamentals & TCP/IP Security", duration: "18:40" },
                { id: "v5-3", title: "3. Common Attack Vectors: Malware & Phishing", duration: "14:20" },
                { id: "v5-4", title: "4. Cryptography: Symmetric vs Asymmetric", duration: "22:10" },
                { id: "v5-5", title: "5. Firewalls, IDSs, and Network Hardening", duration: "19:35" },
                { id: "v5-6", title: "6. Secure Web Architectures and HTTPS Protocols", duration: "16:50" },
                { id: "v5-7", title: "7. Identity and Access Management (IAM)", duration: "13:10" },
                { id: "v5-8", title: "8. Incident Response and Cyber Law", duration: "15:45" }
            ],
            assessment: {
                passingMarks: 60,
                questions: [
                    {
                        id: "q5-1",
                        text: "What does the CIA triad stand for in cyber security?",
                        options: ["Central Intelligence Agency", "Confidentiality, Integrity, Availability", "Connection, Installation, Authentication", "Cryptography, Inspection, Auditing"],
                        correctOption: 1
                    },
                    {
                        id: "q5-2",
                        text: "Which encryption type uses a public key to encrypt and a private key to decrypt?",
                        options: ["Symmetric Encryption", "Asymmetric Encryption", "Hashing", "Obfuscation"],
                        correctOption: 1
                    },
                    {
                        id: "q5-3",
                        text: "Which port is used by default for secure HTTP (HTTPS) communication?",
                        options: ["Port 80", "Port 21", "Port 443", "Port 22"],
                        correctOption: 2
                    },
                    {
                        id: "q5-4",
                        text: "What is social engineering primarily designed to exploit?",
                        options: ["Social norms", "Hardware vulnerabilities", "Human psychology", "Network configuration errors"],
                        correctOption: 2
                    },
                    {
                        id: "q5-5",
                        text: "Which tool is commonly used for network packet analysis?",
                        options: ["Nmap", "Wireshark", "Metasploit", "Burp Suite"],
                        correctOption: 1
                    }
                ]
            }
        },
        {
            id: "course-6",
            name: "Web Development",
            category: "Web Development",
            level: "Beginner",
            duration: "20 Hours",
            videosCount: 20,
            price: 299,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf_UajBAc-ZNw2i9UU9Fp-Q-xom-o7oWjs0rd1bFo-rQFmhxlsc9XjLuC0mPofvQC4txeM6K254JXoN7qLnmoZ1crRac9wELAVelrY5Iagd-bno649aqmc98beyeZgGjKu9I9A-QAkjeGK3TzEp641bpNVL0Dma-vgEU80yeyrcR8AAZG4WIzXasVDLLkkpJewqRjJq9_i28tWqDA80p5nc7pBJsDRQHEV-zrvwjF2uVenAUPfQc3oGxGMkXP6blnas7WjDk-ZRng",
            description: "Learn HTML, CSS, JavaScript, flexbox layouts, grid models, and modern responsive website deployment strategies.",
            videos: [
                { id: "v6-1", title: "1. Web Architecture and How Browsers Work", duration: "10:45" },
                { id: "v6-2", title: "2. HTML5 Semantic Layout Elements", duration: "12:15" },
                { id: "v6-3", title: "3. CSS Selectors, Colors, and Typography", duration: "14:30" },
                { id: "v6-4", title: "4. The CSS Box Model and Margin Collapse", duration: "15:20" },
                { id: "v6-5", title: "5. Flexbox Layout Principles", duration: "18:10" },
                { id: "v6-6", title: "6. CSS Grid: Grids, Tracks, and Areas", duration: "20:05" },
                { id: "v6-7", title: "7. Media Queries and Responsive UI Design", duration: "17:45" },
                { id: "v6-8", title: "8. Intro to JavaScript Programming", duration: "16:20" },
                { id: "v6-9", title: "9. JavaScript Operators, Variables, and Logic", duration: "14:15" },
                { id: "v6-10", title: "10. Working with Arrays and Objects", duration: "19:00" },
                { id: "v6-11", title: "11. Loops and Conditional Statements", duration: "15:35" },
                { id: "v6-12", title: "12. DOM Manipulation: Selecting & Modifying Elements", duration: "22:40" },
                { id: "v6-13", title: "13. JavaScript Event Listeners and Callbacks", duration: "21:15" },
                { id: "v6-14", title: "14. Fetching Data from Public APIs", duration: "24:50" },
                { id: "v6-15", title: "15. JSON Parsing and Dynamic Render loops", duration: "18:30" },
                { id: "v6-16", title: "16. LocalStorage and State Retention", duration: "16:10" },
                { id: "v6-17", title: "17. Intro to CSS Preprocessors (SASS)", duration: "13:00" },
                { id: "v6-18", title: "18. Working with Git and Github Versions", duration: "25:20" },
                { id: "v6-19", title: "19. Deploying Sites to Netlify and Vercel", duration: "14:30" },
                { id: "v6-20", title: "20. Final Frontend Portfolio Project Review", duration: "28:10" }
            ],
            assessment: {
                passingMarks: 60,
                questions: [
                    {
                        id: "q6-1",
                        text: "Which HTML5 tag is used to define semantic navigation links?",
                        options: ["<navigation>", "<nav>", "<links>", "<menu>"],
                        correctOption: 1
                    },
                    {
                        id: "q6-2",
                        text: "In CSS Flexbox, which property is used to align items along the primary axis?",
                        options: ["align-items", "justify-content", "align-content", "flex-direction"],
                        correctOption: 1
                    },
                    {
                        id: "q6-3",
                        text: "What does DOM stand for in web browsers?",
                        options: ["Document Object Model", "Digital Office Management", "Data Output Module", "Directed Order Mapping"],
                        correctOption: 0
                    },
                    {
                        id: "q6-4",
                        text: "Which keyword is used to declare a block-scoped variable in modern JavaScript?",
                        options: ["var", "let", "declare", "define"],
                        correctOption: 1
                    },
                    {
                        id: "q6-5",
                        text: "What is the standard payload format used to exchange structured data over HTTP?",
                        options: ["XML", "JSON", "CSV", "YAML"],
                        correctOption: 1
                    }
                ]
            }
        }
    ];

    const DEFAULT_USERS = [
        {
            id: "user-admin",
            name: "Alex Thompson",
            email: "admin@codivexa.com",
            mobile: "+91 99999 88888",
            password: "admin123",
            role: "admin",
            status: "active",
            registrationDate: "2024-01-10T12:00:00Z"
        },
        {
            id: "user-student",
            name: "Alex Johnson",
            email: "student@codivexa.com",
            mobile: "+91 98765 43210",
            password: "student123",
            role: "student",
            status: "active",
            registrationDate: "2024-02-15T09:30:00Z"
        }
    ];

    const DEFAULT_ENROLLMENTS = [
        {
            id: "enroll-1",
            userId: "user-student",
            courseId: "course-1",
            paymentStatus: "completed",
            paymentMethod: "UPI",
            enrollmentDate: "2024-02-16T10:00:00Z",
            completedVideos: ["v1-1", "v1-2", "v1-3", "v1-4", "v1-5", "v1-6", "v1-7", "v1-8", "v1-9", "v1-10"], // 10/12 videos
            progress: 83, // 83%
            assessmentScore: null,
            passedAssessment: false
        }
    ];

    const DEFAULT_TRANSACTIONS = [
        {
            id: "tx-1",
            userId: "user-student",
            userName: "Alex Johnson",
            courseId: "course-1",
            courseName: "AI & Machine Learning",
            amount: 499,
            status: "success",
            paymentMethod: "UPI",
            date: "2024-02-16T10:00:00Z"
        }
    ];

    // Helper: Safely get and set items from localStorage
    function getStore(key, defaults) {
        const item = localStorage.getItem(key);
        if (!item) {
            localStorage.setItem(key, JSON.stringify(defaults));
            return defaults;
        }
        try {
            return JSON.parse(item);
        } catch(e) {
            return defaults;
        }
    }

    function setStore(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    // Initialize stores
    let courses = getStore("codivexa_courses", DEFAULT_COURSES);
    let users = getStore("codivexa_users", DEFAULT_USERS);
    let enrollments = getStore("codivexa_enrollments", DEFAULT_ENROLLMENTS);
    let transactions = getStore("codivexa_transactions", DEFAULT_TRANSACTIONS);
    let certificates = getStore("codivexa_certificates", []);
    let comments = getStore("codivexa_comments", {});

    // Database functions exposed to the window
    window.db = {
        // AUTHENTICATION
        getLoggedInUser: function() {
            const userId = localStorage.getItem("codivexa_logged_in_user_id");
            if (!userId) return null;
            const u = users.find(x => x.id === userId);
            if (!u || u.status !== 'active') {
                localStorage.removeItem("codivexa_logged_in_user_id");
                return null;
            }
            return u;
        },

        registerUser: function(name, email, mobile, password) {
            const emailClean = email.toLowerCase().trim();
            const exists = users.some(x => x.email.toLowerCase().trim() === emailClean);
            if (exists) return { success: false, message: "Email is already registered!" };

            const newUser = {
                id: "user-" + Date.now(),
                name: name,
                email: emailClean,
                mobile: mobile,
                password: password,
                role: "student",
                status: "active",
                registrationDate: new Date().toISOString()
            };

            users.push(newUser);
            setStore("codivexa_users", users);
            localStorage.setItem("codivexa_logged_in_user_id", newUser.id);
            return { success: true, user: newUser };
        },

        loginUser: function(email, password) {
            const emailClean = email.toLowerCase().trim();
            const user = users.find(x => x.email.toLowerCase().trim() === emailClean && x.password === password);
            if (!user) return { success: false, message: "Invalid email or password!" };
            if (user.status !== "active") return { success: false, message: "Your account is deactivated. Contact admin!" };

            localStorage.setItem("codivexa_logged_in_user_id", user.id);
            return { success: true, user: user };
        },

        logoutUser: function() {
            localStorage.removeItem("codivexa_logged_in_user_id");
        },

        updateProfile: function(name, email, mobile) {
            const currentUser = this.getLoggedInUser();
            if (!currentUser) return { success: false, message: "Not logged in!" };

            users = users.map(u => {
                if (u.id === currentUser.id) {
                    u.name = name;
                    u.email = email.toLowerCase().trim();
                    u.mobile = mobile;
                }
                return u;
            });
            setStore("codivexa_users", users);
            return { success: true };
        },

        // COURSE MANAGEMENT
        getCourses: function() {
            return getStore("codivexa_courses", DEFAULT_COURSES);
        },

        getCourse: function(id) {
            courses = this.getCourses();
            return courses.find(x => x.id === id) || null;
        },

        addCourse: function(courseData) {
            courses = this.getCourses();
            const newCourse = {
                id: "course-" + Date.now(),
                name: courseData.name,
                category: courseData.category || "General",
                level: courseData.level || "Beginner",
                duration: courseData.duration || "10 Hours",
                videosCount: parseInt(courseData.videosCount) || 5,
                price: parseFloat(courseData.price) || 0,
                image: courseData.image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500",
                description: courseData.description || "Course description goes here.",
                videos: courseData.videos || [],
                assessment: courseData.assessment || {
                    passingMarks: 60,
                    questions: [
                        {
                            id: "q-default-1",
                            text: "What is primary component of web frontend?",
                            options: ["HTML", "C++", "Python", "SQL"],
                            correctOption: 0
                        }
                    ]
                }
            };

            // If empty videos, generate dummy videos
            if (newCourse.videos.length === 0) {
                for (let i = 1; i <= newCourse.videosCount; i++) {
                    newCourse.videos.push({
                        id: "v-" + newCourse.id + "-" + i,
                        title: `${i}. Course Lesson Module ${i}`,
                        duration: "10:00"
                    });
                }
            }

            courses.push(newCourse);
            setStore("codivexa_courses", courses);
            return newCourse;
        },

        updateCourse: function(courseId, courseData) {
            courses = this.getCourses();
            courses = courses.map(c => {
                if (c.id === courseId) {
                    c.name = courseData.name || c.name;
                    c.category = courseData.category || c.category;
                    c.level = courseData.level || c.level;
                    c.duration = courseData.duration || c.duration;
                    c.videosCount = parseInt(courseData.videosCount) || c.videosCount;
                    c.price = parseFloat(courseData.price) || c.price;
                    c.image = courseData.image || c.image;
                    c.description = courseData.description || c.description;
                    if (courseData.videos) c.videos = courseData.videos;
                }
                return c;
            });
            setStore("codivexa_courses", courses);
            return this.getCourse(courseId);
        },

        deleteCourse: function(id) {
            courses = this.getCourses();
            courses = courses.filter(x => x.id !== id);
            setStore("codivexa_courses", courses);
            return true;
        },

        // STUDENTS MANAGEMENT
        getStudents: function() {
            return getStore("codivexa_users", DEFAULT_USERS).filter(x => x.role === "student");
        },

        deactivateStudent: function(userId) {
            users = getStore("codivexa_users", DEFAULT_USERS);
            users = users.map(u => {
                if (u.id === userId) u.status = "inactive";
                return u;
            });
            setStore("codivexa_users", users);
            return true;
        },

        activateStudent: function(userId) {
            users = getStore("codivexa_users", DEFAULT_USERS);
            users = users.map(u => {
                if (u.id === userId) u.status = "active";
                return u;
            });
            setStore("codivexa_users", users);
            return true;
        },

        editStudent: function(userId, name, email, mobile) {
            users = getStore("codivexa_users", DEFAULT_USERS);
            users = users.map(u => {
                if (u.id === userId) {
                    u.name = name;
                    u.email = email;
                    u.mobile = mobile;
                }
                return u;
            });
            setStore("codivexa_users", users);
            return true;
        },

        // ENROLLMENT & TRANSACTIONS
        getEnrollments: function() {
            return getStore("codivexa_enrollments", DEFAULT_ENROLLMENTS);
        },

        getUserEnrollments: function(userId) {
            enrollments = this.getEnrollments();
            return enrollments.filter(x => x.userId === userId);
        },

        enrollUserInCourse: function(userId, courseId, paymentMethod) {
            enrollments = this.getEnrollments();
            const course = this.getCourse(courseId);
            if (!course) return { success: false, message: "Course not found!" };

            const isAlreadyEnrolled = enrollments.some(x => x.userId === userId && x.courseId === courseId);
            if (isAlreadyEnrolled) return { success: true, message: "Already enrolled!" };

            // Create enrollment
            const newEnrollment = {
                id: "enroll-" + Date.now(),
                userId: userId,
                courseId: courseId,
                paymentStatus: "completed",
                paymentMethod: paymentMethod || "UPI",
                enrollmentDate: new Date().toISOString(),
                completedVideos: [],
                progress: 0,
                assessmentScore: null,
                passedAssessment: false
            };

            enrollments.push(newEnrollment);
            setStore("codivexa_enrollments", enrollments);

            // Record transaction
            users = getStore("codivexa_users", DEFAULT_USERS);
            const user = users.find(x => x.id === userId);
            const tx = {
                id: "tx-" + Date.now(),
                userId: userId,
                userName: user ? user.name : "Unknown",
                courseId: courseId,
                courseName: course.name,
                amount: course.price,
                status: "success",
                paymentMethod: paymentMethod || "UPI",
                date: new Date().toISOString()
            };
            transactions = this.getTransactions();
            transactions.push(tx);
            setStore("codivexa_transactions", transactions);

            return { success: true, enrollment: newEnrollment, transaction: tx };
        },

        getTransactions: function() {
            return getStore("codivexa_transactions", DEFAULT_TRANSACTIONS);
        },

        // PROGRESS TRACKING
        updateProgress: function(userId, courseId, videoId, completed) {
            enrollments = this.getEnrollments();
            let course = this.getCourse(courseId);
            if (!course) return null;

            let updatedEnrollment = null;
            enrollments = enrollments.map(e => {
                if (e.userId === userId && e.courseId === courseId) {
                    if (completed) {
                        if (!e.completedVideos.includes(videoId)) {
                            e.completedVideos.push(videoId);
                        }
                    } else {
                        e.completedVideos = e.completedVideos.filter(x => x !== videoId);
                    }
                    e.progress = Math.round((e.completedVideos.length / course.videos.length) * 100);
                    updatedEnrollment = e;
                }
                return e;
            });
            setStore("codivexa_enrollments", enrollments);
            return updatedEnrollment;
        },

        // ASSESSMENT
        getEnrollment: function(userId, courseId) {
            enrollments = this.getEnrollments();
            return enrollments.find(e => e.userId === userId && e.courseId === courseId) || null;
        },

        saveAssessmentResult: function(userId, courseId, score) {
            enrollments = this.getEnrollments();
            const course = this.getCourse(courseId);
            if (!course) return { success: false, message: "Course not found!" };

            const passingScore = course.assessment.passingMarks || 60;
            const passed = score >= passingScore;

            let success = false;
            enrollments = enrollments.map(e => {
                if (e.userId === userId && e.courseId === courseId) {
                    e.assessmentScore = score;
                    e.passedAssessment = passed;
                    success = true;
                }
                return e;
            });

            setStore("codivexa_enrollments", enrollments);

            if (passed) {
                // Auto generate certificate
                this.issueCertificate(userId, courseId);
            }

            return { success: success, passed: passed };
        },

        // CERTIFICATES
        getCertificates: function() {
            return getStore("codivexa_certificates", []);
        },

        getUserCertificate: function(userId, courseId) {
            certificates = this.getCertificates();
            return certificates.find(c => c.userId === userId && c.courseId === courseId && c.status === "issued") || null;
        },

        issueCertificate: function(userId, courseId) {
            certificates = this.getCertificates();
            const exists = certificates.find(c => c.userId === userId && c.courseId === courseId);
            
            if (exists) {
                if (exists.status !== "issued") {
                    exists.status = "issued";
                    exists.issueDate = new Date().toISOString();
                    setStore("codivexa_certificates", certificates);
                }
                return exists;
            }

            const newCert = {
                id: "CDV-" + Math.floor(1000 + Math.random() * 9000) + "-XL-" + new Date().getFullYear(),
                userId: userId,
                courseId: courseId,
                issueDate: new Date().toISOString(),
                status: "issued"
            };

            certificates.push(newCert);
            setStore("codivexa_certificates", certificates);
            return newCert;
        },

        revokeCertificate: function(certificateId) {
            let certificates = this.getCertificates();
            certificates = certificates.map(c => {
                if (c.id === certificateId) c.status = "revoked";
                return c;
            });
            setStore("codivexa_certificates", certificates);
            return true;
        },

        reinstateCertificate: function(certificateId) {
            let certificates = this.getCertificates();
            certificates = certificates.map(c => {
                if (c.id === certificateId) c.status = "issued";
                return c;
            });
            setStore("codivexa_certificates", certificates);
            return true;
        },

        getUsers: function() {
            return getStore("codivexa_users", DEFAULT_USERS);
        },

        toggleUserBlock: function(userId) {
            let users = getStore("codivexa_users", DEFAULT_USERS);
            users = users.map(u => {
                if (u.id === userId) {
                    u.status = u.status === "active" ? "inactive" : "active";
                }
                return u;
            });
            setStore("codivexa_users", users);
            return true;
        },

        // COMMENTS/DISCUSSION
        getComments: function(courseId, lessonId) {
            comments = getStore("codivexa_comments", {});
            const key = `${courseId}_${lessonId}`;
            return comments[key] || [];
        },

        addComment: function(courseId, lessonId, userName, text) {
            comments = getStore("codivexa_comments", {});
            const key = `${courseId}_${lessonId}`;
            if (!comments[key]) comments[key] = [];

            const newComment = {
                id: "comment-" + Date.now(),
                userName: userName,
                text: text,
                date: new Date().toISOString()
            };

            comments[key].push(newComment);
            setStore("codivexa_comments", comments);
            return newComment;
        }
    };
})();
