const courses = [
  {
    title: "Food Hygiene and Safety Level 1",
    originalPrice: 49,
    price: 19,
    icon: "shield-check",
    tone: "teal",
    description:
      "Introductory food safety awareness for people working around food, service areas, counters and basic kitchen tasks."
  },
  {
    title: "Food Hygiene and Safety Level 2 for Catering",
    originalPrice: 59,
    price: 24,
    icon: "utensils",
    tone: "coral",
    description:
      "Core catering hygiene training covering contamination, safe storage, cleaning, personal hygiene and safe food handling."
  },
  {
    title: "Food Hygiene and Safety Level 3 for Supervisors",
    originalPrice: 89,
    price: 39,
    icon: "clipboard-check",
    tone: "gold",
    description:
      "Supervisor-level knowledge for monitoring food safety standards, supporting teams and improving day-to-day compliance."
  },
  {
    title: "HACCP Level 2 Awareness",
    originalPrice: 59,
    price: 24,
    icon: "list-checks",
    tone: "leaf",
    description:
      "Explains hazard analysis, critical control points and how HACCP thinking supports safer food business operations."
  },
  {
    title: "Food Allergen Awareness",
    originalPrice: 49,
    price: 19,
    icon: "badge-alert",
    tone: "coral",
    description:
      "Practical allergen knowledge for hospitality staff who take orders, prepare food or answer customer questions."
  },
  {
    title: "Restaurant Management Fundamentals",
    originalPrice: 89,
    price: 39,
    icon: "store",
    tone: "teal",
    description:
      "A clear introduction to restaurant operations, service standards, staff coordination and daily management duties."
  },
  {
    title: "Hospitality Management Essentials",
    originalPrice: 89,
    price: 39,
    icon: "briefcase-business",
    tone: "gold",
    description:
      "Covers hospitality workplace expectations, guest experience, team communication and service quality principles."
  },
  {
    title: "Customer Service in Hospitality",
    originalPrice: 59,
    price: 24,
    icon: "smile",
    tone: "leaf",
    description:
      "Builds confidence in greeting guests, handling requests, solving issues and creating a professional service experience."
  },
  {
    title: "Waiter Training and Table Service Skills",
    originalPrice: 69,
    price: 29,
    icon: "concierge-bell",
    tone: "coral",
    description:
      "Teaches table service, order taking, serving etiquette, guest communication and restaurant floor confidence."
  },
  {
    title: "Front of House and Restaurant Receptionist Training",
    originalPrice: 69,
    price: 29,
    icon: "clipboard-list",
    tone: "teal",
    description:
      "Supports learners working on bookings, greetings, guest flow, complaints, reception duties and service handovers."
  },
  {
    title: "Barista Training and Coffee Brewing Skills",
    originalPrice: 69,
    price: 29,
    icon: "coffee",
    tone: "gold",
    description:
      "Introduces espresso drinks, brewing basics, grinder awareness, milk texturing and coffee shop service standards."
  },
  {
    title: "Chef Training Fundamentals",
    originalPrice: 89,
    price: 39,
    icon: "chef-hat",
    tone: "leaf",
    description:
      "Entry-level chef knowledge covering kitchen roles, preparation habits, basic cooking awareness and professional conduct."
  },
  {
    title: "Kitchen Management for Chefs",
    originalPrice: 89,
    price: 39,
    icon: "cooking-pot",
    tone: "teal",
    description:
      "Explores kitchen organisation, stock awareness, team coordination, workflow, cleanliness and service preparation."
  },
  {
    title: "Catering Management Basics",
    originalPrice: 69,
    price: 29,
    icon: "calendar-check",
    tone: "coral",
    description:
      "Covers catering planning, service preparation, portion control, event readiness and practical coordination."
  },
  {
    title: "Menu Planning and Food Cost Control",
    originalPrice: 69,
    price: 29,
    icon: "receipt-text",
    tone: "gold",
    description:
      "Shows how menu choices, ingredients, portions and waste affect food business profit and customer experience."
  },
  {
    title: "Food Waste Management",
    originalPrice: 49,
    price: 19,
    icon: "recycle",
    tone: "leaf",
    description:
      "Helps staff reduce waste through smarter storage, rotation, planning, portion awareness and workplace habits."
  },
  {
    title: "Conflict Management in Hospitality",
    originalPrice: 59,
    price: 24,
    icon: "messages-square",
    tone: "coral",
    description:
      "Supports calm handling of complaints, difficult guests, team tension and pressure during busy service periods."
  },
  {
    title: "Health and Safety in Hospitality",
    originalPrice: 59,
    price: 24,
    icon: "heart-pulse",
    tone: "teal",
    description:
      "Covers common risks in restaurants, cafes and catering environments, with practical workplace safety awareness."
  },
  {
    title: "Manual Handling for Kitchen and Restaurant Staff",
    originalPrice: 49,
    price: 19,
    icon: "package-check",
    tone: "gold",
    description:
      "Guidance for safer lifting, carrying, moving stock, handling deliveries and reducing strain during busy shifts."
  },
  {
    title: "COSHH Awareness for Hospitality and Cleaning Chemicals",
    originalPrice: 49,
    price: 19,
    icon: "flask-conical",
    tone: "leaf",
    description:
      "Introduces safe use, storage and handling of cleaning chemicals commonly found in hospitality workplaces."
  }
];

const courseGrid = document.querySelector("#courseGrid");

courseGrid.innerHTML = courses
  .map(
    (course) => `
      <article class="course-card">
        <div class="course-top">
          <span class="course-icon ${course.tone}" aria-hidden="true">
            <i data-lucide="${course.icon}"></i>
          </span>
        </div>
        <div class="course-body">
          <h3>${course.title}</h3>
          <p>${course.description}</p>
          <a class="mini-button" href="mailto:sales@example.com?subject=Buy%20${encodeURIComponent(course.title)}">
            Buy this course
          </a>
        </div>
        <span class="course-price">
          <span class="course-old-price">&pound;${course.originalPrice}</span>
          &pound;${course.price}
        </span>
      </article>
    `
  )
  .join("");

window.addEventListener("load", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
