const products = [
  {
    badge: "Flagship",
    icon: "keyboard",
    title: "AeroType Mechanical Keyboard",
    description:
      "Low-profile tactile switches, smart backlighting, and crafted aluminum body for creators and coders.",
  },
  {
    badge: "New",
    icon: "mouse",
    title: "FlowSense Precision Mouse",
    description:
      "Ultra-responsive sensor, silent click system, and ergonomic shape for all-day comfort and speed.",
  },
];

const features = [
  {
    icon: "deployed_code",
    title: "Seamless Device Switching",
    description: "Move instantly between laptop, tablet, and desktop with one touch.",
  },
  {
    icon: "battery_charging_full",
    title: "Long Battery Life",
    description: "Weeks of productivity from a quick Type-C charge.",
  },
  {
    icon: "shield",
    title: "Premium Build Quality",
    description: "Durable components engineered for reliability and comfort.",
  },
];

function App() {
  return (
    <>
      <div className="liquid-bg liquid-bg--one"></div>
      <div className="liquid-bg liquid-bg--two"></div>
      <div className="liquid-bg liquid-bg--three"></div>

      <header className="topbar glass">
        <div className="brand">
          <span className="material-symbols-outlined">keyboard</span>
          <span>GadgetPro</span>
        </div>
        <nav>
          <a href="#products">Products</a>
          <a href="#why">Why GadgetPro</a>
          <a href="#contact">Contact</a>
        </nav>
        <md-filled-button>Shop now</md-filled-button>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">Precision Hardware. Liquid Elegance.</p>
          <h1>Keyboards &amp; Mice designed to feel like the future.</h1>
          <p className="subhead">
            GadgetPro combines minimal industrial design with pro-level performance,
            inspired by the refined simplicity of Apple-style experiences.
          </p>
          <div className="hero-actions">
            <md-filled-tonal-button>
              <span slot="icon" className="material-symbols-outlined">shopping_bag</span>
              Explore Collection
            </md-filled-tonal-button>
            <md-outlined-button>
              <span slot="icon" className="material-symbols-outlined">play_circle</span>
              Watch Demo
            </md-outlined-button>
          </div>
        </section>

        <section id="products" className="products">
          {products.map((product) => (
            <article key={product.title} className="product-card glass">
              <div className="product-badge">{product.badge}</div>
              <span className="material-symbols-outlined product-icon">{product.icon}</span>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <md-text-button>Learn more</md-text-button>
            </article>
          ))}
        </section>

        <section id="why" className="features glass">
          <h2>Why professionals choose GadgetPro</h2>
          <div className="feature-grid">
            {features.map((feature) => (
              <div key={feature.title}>
                <span className="material-symbols-outlined">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <p>© 2026 GadgetPro. Designed for creators, gamers, and builders.</p>
        <md-filled-button>Contact Sales</md-filled-button>
      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
