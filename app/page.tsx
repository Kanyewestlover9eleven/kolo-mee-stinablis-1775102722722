"use client";
import { useState } from 'react';

const basePath = '/kolo-mee-stinablis-1775102722722';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Name: ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/0142899656?text=${msg}`, '_blank');
  };

  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const products = [{ n: 'Product 1', d: 'Kolo Putih: Our signature white kolo mee, served with a light and savory sauce, springy noodles, and a variety of toppings to choose from.', icon: 'domain' }, { n: 'Product 2', d: 'Kolo Merah: Our red kolo mee, tossed in a sweet and spicy sauce, offering a flavorful twist on the classic dish.', icon: 'architecture' }, { n: 'Product 3', d: 'Kolo Kicap: For those who prefer a darker and richer flavor, our kolo kicap is cooked in a mixture of soy sauce and spices, creating a deep and satisfying taste experience.', icon: 'chair' }, { n: 'Product 4', d: 'Wantan: Our wantan noodles are served in a light broth with dumplings filled with pork or chicken, providing a comforting and nourishing meal option.', icon: 'eco' }, { n: 'Product 5', d: 'Mee Pok: Our mee pok is a classic flat noodle dish, served dry or in a soup, and accompanied by a variety of ingredients such as minced pork, boiled egg, and vegetables.', icon: 'precision_manufacturing' }];

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <span className="text-2xl font-black text-primary font-headline">Kolo mee stinablis</span>
          <div className="hidden md:flex gap-8">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <button key={item} onClick={() => scroll(item.toLowerCase())} className="font-bold text-sm uppercase text-on-surface/70 hover:text-primary">{item}</button>
            ))}
          </div>
          <a href={`https://wa.me/0142899656`} target="_blank" className="bg-primary text-white px-6 py-2 rounded-md font-bold text-sm">WhatsApp</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-primary">
        <div className="text-center text-white px-8">
          <span className="uppercase tracking-widest text-accent text-sm font-bold">Welcome to</span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold mt-4 mb-6">Kolo mee stinablis</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">best kolo me</p>
          <a href={`https://wa.me/0142899656`} target="_blank" className="inline-flex items-center gap-2 bg-accent text-primary px-10 py-5 rounded-md font-bold text-lg">Contact Us</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <span className="text-primary font-bold tracking-widest text-xs uppercase">About Us</span>
          <h2 className="font-headline text-4xl font-extrabold mt-2 mb-8">Kolo mee stinablis</h2>
          <p className="text-on-surface-variant text-lg max-w-3xl mb-12">Kolo Mee Stinablis is a renowned destination for authentic and delicious kolo mee. Established with a passion for traditional Sarawakian cuisine, we strive to bring people together through the joy of food.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div><h4 className="font-bold text-primary">Vision</h4><p className="text-sm text-on-surface-variant">To become the leading kolo mee brand, celebrated for its exceptional taste and quality, while promoting the unique culinary heritage of Sarawak.</p></div>
            <div><h4 className="font-bold text-primary">Mission</h4><p className="text-sm text-on-surface-variant">To provide our customers with an unforgettable dining experience, serving the best kolo mee and other traditional dishes with dedication and excellence.</p></div>
            <div><h4 className="font-bold text-primary">haha</h4><p className="text-sm text-on-surface-variant">Quality and Authenticity: We are committed to using only the freshest ingredients and adhering to traditional recipes to ensure the authenticity and quality of our dishes.</p></div>
            <div><h4 className="font-bold text-primary">lmao</h4><p className="text-sm text-on-surface-variant">Customer Satisfaction: We prioritize customer satisfaction, striving to exceed expectations through excellent service, a welcoming atmosphere, and consistently delicious food.</p></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">Our Services</span>
            <h2 className="font-headline text-4xl font-extrabold mt-2">What We Offer</h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">{p.icon}</span>
                <h3 className="font-bold text-lg mb-2">{p.n}</h3>
                <p className="text-sm text-on-surface-variant">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-8">
          <div className="bg-primary text-white rounded-2xl p-12">
            <h2 className="font-headline text-3xl font-extrabold mb-8">Get in Touch</h2>
            <form onSubmit={submit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" required placeholder="Your Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full bg-white/10 rounded px-4 py-3 text-white placeholder:text-white/40" />
                <input type="email" required placeholder="Your Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full bg-white/10 rounded px-4 py-3 text-white placeholder:text-white/40" />
              </div>
              <textarea required rows={4} placeholder="Your Message" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="w-full bg-white/10 rounded px-4 py-3 text-white placeholder:text-white/40" />
              <button type="submit" className="w-full bg-accent text-primary py-4 rounded font-bold">Send via WhatsApp</button>
            </form>
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-white/80 text-sm">
              <div><strong className="text-white">Address</strong><p>123 Main St</p></div>
              <div><strong className="text-white">Email</strong><p>judeparu123@gmail.com</p></div>
              <div><strong className="text-white">Phone</strong><p>0142899656</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white font-bold">Kolo mee stinablis</div>
          <div className="flex gap-6"><a href={`https://wa.me/0142899656`} target="_blank" className="text-white/60 hover:text-white text-sm">WhatsApp</a></div>
          <p className="text-white/60 text-sm">&copy; {new Date().getFullYear()} Kolo mee stinablis</p>
        </div>
      </footer>
    </div>
  );
}
