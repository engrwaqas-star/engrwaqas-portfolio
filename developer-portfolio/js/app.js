const projects = [
  {
    title: "OmniCart",
    type: "SANDBOX • E-COMMERCE",
    description: "Interactive e-commerce practice build demonstrating product UI, cart state, quantity controls and client-side pricing logic.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "ecommerce-preview.html"
  },
  {
    title: "Nova SaaS",
    type: "SANDBOX • SAAS",
    description: "Responsive SaaS pricing/product interface with a monthly/yearly switch and polished marketing UI.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "landing-page-preview.html"
  },
  {
    title: "Helix Dashboard",
    type: "SANDBOX • DASHBOARD",
    description: "Admin dashboard practice build with task interactions, metrics and lightweight data visualization.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "dashboard-preview.html"
  }
];

const grid = document.querySelector("#project-grid");
if (grid) {
  grid.innerHTML = projects.map((p) => `
    <article class="project-card">
      <div class="project-thumb" aria-hidden="true">
        <span class="mock-badge">${p.type}</span>
        <div class="mock-ui">
          <div class="mock-bar"></div>
          <div class="mock-content">
            <div class="mock-side"></div>
            <div class="mock-main">
              <div class="mock-title"></div>
              <div class="mock-lines">
                <i></i><i></i><i></i><i></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <p class="project-kicker">${p.type}</p>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
        <div class="card-links">
          <a href="${p.demo}">Interactive demo ↗</a>
        </div>
      </div>
    </article>
  `).join("");
}

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#site-menu");
if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
}

const form = document.querySelector("#contact-form");
const status = document.querySelector("#form-status");
if (form && status) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.classList.remove("invalid-shake");
      void form.offsetWidth;
      form.classList.add("invalid-shake");
      status.textContent = "Please complete the required fields before preparing the email.";
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = encodeURIComponent(`Frontend project enquiry from ${name}`);
    const body = encodeURIComponent(
      `Hi Waqas,\n\nName: ${name}\nEmail: ${email}\n\nProject details:\n${message}\n\nSent from your portfolio.`
    );
    status.textContent = "Opening your email client with a prepared message…";
    window.location.href = `mailto:waqasashiq0381@gmail.com?subject=${subject}&body=${body}`;
  });
}

document.querySelector("#year")?.append(new Date().getFullYear());
