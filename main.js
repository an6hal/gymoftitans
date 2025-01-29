$(document).ready(function () {
  const $menuBtn = $("#menu-btn");
  const $navLinks = $("#nav-links");
  const $menuBtnIcon = $menuBtn.find("i");

  // Menu Toggle with jQuery
  $menuBtn.on("click", function () {
    $navLinks.toggleClass("open");
    const isOpen = $navLinks.hasClass("open");
    $menuBtnIcon.attr("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });

  // Close Menu on Nav Link Click with jQuery
  $navLinks.on("click", function () {
    $navLinks.removeClass("open");
    $menuBtnIcon.attr("class", "ri-menu-line");
  });
});


const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".facility__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".facility__content p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".mentor__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".banner__content h2", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".banner__content p", {
  ...scrollRevealOption,
  delay: 500,
});
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nic = document.getElementById("nic").value.trim();
  const firstName = document.getElementById("firstName").value.trim();
  const surname = document.getElementById("surname").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  // Validation
  if (nic.length !== 14) {
    alert("NIC must contain 14 characters.");
    document.getElementById("nic").focus();
    return;
  }

  if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(surname)) {
    alert("First Name and Surname should contain only letters.");
    return;
  }

  if (!/^\d{7}$/.test(phone)) {
    alert("Phone number must contain exactly 7 digits.");
    return;
  }

  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
    alert("Email is invalid. Use format username@domain.com.");
    return;
  }

  if (username.length <= 8 || !nic) {
    alert("Username must contain more than 8 characters and include NIC details.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  alert("Registration Successful!");
  window.location.href = "nextpage.html"; // Redirect to next page
});

// Reset Button Warning
$("#resetBtn").on("click", function (e) { //jQuery 
  if (!confirm("Are you sure you want to reset the form?")) {
    e.preventDefault(); // Prevents the default form reset action if the user cancels
  }
});


// Preferences Checkbox Message
$('input[type="checkbox"]').on("change", function () { //jQuery 
  alert(`You selected: ${$(this).val()}`);
});


// Pool of Gym-related Questions (40 Questions)
const questionPool = [
  { 
    question: "What is the primary muscle worked during a bench press?", 
    options: ["Biceps", "Triceps", "Pectorals", "Quadriceps"], 
    answer: "Pectorals" 
  },
  { 
    question: "How many calories are approximately burned to lose 1 pound of fat?", 
    options: ["1000", "2000", "3500", "5000"], 
    answer: "3500" 
  },
  { 
    question: "What does BMI stand for?", 
    options: ["Body Muscle Index", "Body Mass Index", "Basic Metabolic Intake", "Body Movement Index"], 
    answer: "Body Mass Index" 
  },
  { 
    question: "Which exercise is best for strengthening the core?", 
    options: ["Deadlift", "Push-up", "Plank", "Squats"], 
    answer: "Plank" 
  },
  { 
    question: "What is the recommended daily water intake for adults?", 
    options: ["1 liter", "2-3 liters", "4-5 liters", "6 liters"], 
    answer: "2-3 liters" 
  },
  { 
    question: "Which of the following is a compound exercise?", 
    options: ["Bicep Curl", "Bench Press", "Tricep Extension", "Calf Raise"], 
    answer: "Bench Press" 
  },
  { 
    question: "What is the main muscle targeted in a squat?", 
    options: ["Quadriceps", "Hamstrings", "Glutes", "Lower Back"], 
    answer: "Quadriceps" 
  },
  { 
    question: "Which vitamin is primarily obtained from sunlight?", 
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], 
    answer: "Vitamin D" 
  },
  { 
    question: "How many sets are recommended for strength training per exercise?", 
    options: ["1-2", "3-5", "6-8", "10-12"], 
    answer: "3-5" 
  },
  { 
    question: "What does HIIT stand for?", 
    options: ["High Intensity Interval Training", "High Impact Intense Training", "High Interval Intensity Training", "High Impact Isometric Training"], 
    answer: "High Intensity Interval Training" 
  },
  { 
    question: "What is the primary muscle worked in a deadlift?", 
    options: ["Quadriceps", "Hamstrings", "Lower Back", "Glutes"], 
    answer: "Hamstrings" 
  },
  { 
    question: "Which macronutrient is the primary source of energy for the body?", 
    options: ["Protein", "Carbohydrates", "Fats", "Vitamins"], 
    answer: "Carbohydrates" 
  },
  { 
    question: "How many essential amino acids are there?", 
    options: ["5", "9", "12", "20"], 
    answer: "9" 
  },
  { 
    question: "What is the role of protein in muscle building?", 
    options: ["Energy storage", "Muscle repair and growth", "Hydration", "Joint lubrication"], 
    answer: "Muscle repair and growth" 
  },
  { 
    question: "Which exercise improves cardiovascular endurance?", 
    options: ["Bench Press", "Push-up", "Running", "Pull-up"], 
    answer: "Running" 
  },
  { 
    question: "Which exercise primarily targets the latissimus dorsi (lats)?", 
    options: ["Push-up", "Pull-up", "Leg Press", "Tricep Dip"], 
    answer: "Pull-up" 
  },
  { 
    question: "What is the ideal heart rate zone for fat burning?", 
    options: ["30-50% of max HR", "50-70% of max HR", "70-90% of max HR", "90-100% of max HR"], 
    answer: "50-70% of max HR" 
  },
  { 
    question: "What is the purpose of a warm-up?", 
    options: ["Relax muscles", "Prevent injury", "Increase muscle size", "Build endurance"], 
    answer: "Prevent injury" 
  },
  { 
    question: "Which type of exercise increases flexibility?", 
    options: ["Strength training", "Cardio", "Yoga", "HIIT"], 
    answer: "Yoga" 
  },
  { 
    question: "How long should you rest between sets when lifting for strength?", 
    options: ["15-30 seconds", "30-60 seconds", "1-2 minutes", "3-5 minutes"], 
    answer: "3-5 minutes" 
  },
  { 
    question: "What is the recommended sleep duration for muscle recovery?", 
    options: ["4-5 hours", "6-7 hours", "7-9 hours", "10+ hours"], 
    answer: "7-9 hours" 
  },
  { 
    question: "Which food is a good source of healthy fats?", 
    options: ["Avocado", "Chicken", "Bread", "Broccoli"], 
    answer: "Avocado" 
  },
  { 
    question: "What is overtraining?", 
    options: ["Training every day", "Not training enough", "Training too hard without recovery", "Skipping cardio"], 
    answer: "Training too hard without recovery" 
  },
  { 
    question: "How many days per week is it recommended to train for general fitness?", 
    options: ["2-3", "3-5", "5-6", "7"], 
    answer: "3-5" 
  },
  { 
    question: "Which nutrient helps with hydration and muscle contraction?", 
    options: ["Calcium", "Potassium", "Iron", "Vitamin K"], 
    answer: "Potassium" 
  },
  { 
    question: "What type of workout uses bodyweight only?", 
    options: ["Plyometrics", "Isometrics", "Calisthenics", "Cardio"], 
    answer: "Calisthenics" 
  },
  { 
    question: "What does the plank exercise primarily target?", 
    options: ["Biceps", "Glutes", "Core", "Triceps"], 
    answer: "Core" 
  },
  { 
    question: "Which exercise is best for improving leg strength?", 
    options: ["Squats", "Push-ups", "Pull-ups", "Planks"], 
    answer: "Squats" 
  },
  { 
    question: "What is progressive overload?", 
    options: ["Resting more", "Gradually increasing weight or reps", "Lifting light weights", "Skipping workouts"], 
    answer: "Gradually increasing weight or reps" 
  }
];

// Randomly select 10 questions
function getRandomQuestions(pool, number) {
  const shuffled = pool.sort(() => Math.random() - 0.5); // Shuffle the pool
  return shuffled.slice(0, number); // Get only the first 10 questions
}

// Generate Quiz
const quizContainer = document.getElementById("quiz-questions");
let selectedQuestions = getRandomQuestions(questionPool, 10); // Only fetch 10 questions

function displayQuestions() {
  // Clear previous questions if any exist
  quizContainer.innerHTML = '';
  
  selectedQuestions.forEach((q, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `
      <p>${index + 1}. ${q.question}</p>
      <div class="options">
        ${q.options
          .map(
            (option) =>
              `<label>
                <input type="radio" name="question${index}" value="${option}"> ${option}
              </label>`
          )
          .join("")}
      </div>
    `;
    quizContainer.appendChild(questionElement);
  });
}

// Calculate Score
function calculateScore() {
  let score = 0;

  selectedQuestions.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
    if (selectedOption && selectedOption.value === q.answer) {
      score++;
    }
  });

  // Display Score
  const scoreDiv = document.getElementById("score");
  scoreDiv.innerHTML = `You scored ${score} out of 10!`;
}

// Event Listeners
document.getElementById("submit-btn").addEventListener("click", calculateScore);

// Initialize Quiz
displayQuestions();
document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll("#star-rating span");
  const ratingInput = document.getElementById("rating");
  const feedbackForm = document.getElementById("feedback-form");
  const feedbackDisplay = document.querySelector(".feedback-display");

  // Handle star rating selection
  stars.forEach((star) => {
    star.addEventListener("click", () => {
      const ratingValue = star.getAttribute("data-value");
      ratingInput.value = ratingValue;

      // Highlight selected stars
      stars.forEach((s, index) => {
        s.style.color = index < ratingValue ? "#ffc107" : "#ddd";
      });
    });
  });

  // Handle feedback form submission
  feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const rating = document.getElementById("rating").value;
    const comments = document.getElementById("comments").value;

    if (!rating) {
      alert("Please select a star rating!");
      return;
    }

    // Add new feedback to the display
    const feedbackItem = document.createElement("div");
    feedbackItem.classList.add("feedback-item");
    feedbackItem.innerHTML = `
      <p class="feedback-text">"${comments}"</p>
      <p class="feedback-name">- ${name}</p>
      <p class="feedback-rating">${"⭐".repeat(rating)}</p>
    `;
    feedbackDisplay.appendChild(feedbackItem);

    // Clear the form
    feedbackForm.reset();
    stars.forEach((s) => (s.style.color = "#ddd"));
    ratingInput.value = 0;

    alert("Thank you for your feedback!");
  });
});
