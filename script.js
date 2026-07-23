// =============================================
// TAQI AL-DEN PORTFOLIO — SCRIPT
// =============================================

// ── Navbar ──────────────────────────────────
const navbar    = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');
const navLinks  = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.pageYOffset > 80);
    updateActiveNav();
});

navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('active');
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = open ? 'rotate(45deg) translate(5px, 5px)' : 'none';
    spans[1].style.opacity   = open ? '0' : '1';
    spans[2].style.transform = open ? 'rotate(-45deg) translate(7px, -6px)' : 'none';
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.getElementById(href.substring(1));
            if (target) {
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
        }
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity   = '1';
        spans[2].style.transform = 'none';
    });
});

function updateActiveNav() {
    const pos = window.pageYOffset + 120;
    document.querySelectorAll('section[id]').forEach(section => {
        if (pos >= section.offsetTop && pos < section.offsetTop + section.offsetHeight) {
            navLinks.forEach(l => l.classList.remove('active'));
            const match = document.querySelector(`.nav-link[href="#${section.id}"]`);
            if (match) match.classList.add('active');
        }
    });
}

// ── Typewriter ──────────────────────────────
const roles = ['Full-Stack (MERN) Developer', 'Android Developer', 'Security-Focused Dev'];
let roleIdx = 0, charIdx = 0, deleting = false;
const typeEl = document.getElementById('typewriter');

function type() {
    if (!typeEl) return;
    const current = roles[roleIdx];
    typeEl.textContent = current.substring(0, charIdx);

    let delay = deleting ? 55 : 100;

    if (!deleting && charIdx === current.length) {
        delay = 2000;
        deleting = true;
    } else if (deleting && charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        delay = 400;
    }

    charIdx += deleting ? -1 : 1;
    setTimeout(type, delay);
}
setTimeout(type, 800);

// ── Intersection Observer ───────────────────
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Animate language bar fills
            entry.target.querySelectorAll('.bar-fill').forEach(bar => {
                bar.classList.add('animate');
            });
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in, .lang-section').forEach(el => io.observe(el));

// ── Project card click ──────────────────────
document.querySelectorAll('.project-item[data-url]').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.project-gh-link')) {
            window.open(card.dataset.url, '_blank', 'noopener,noreferrer');
        }
    });
});

// ── Contact Form ────────────────────────────
const contactForm  = document.getElementById('contactForm');
const formMessage  = document.getElementById('formMessage');

(function () { emailjs.init("dFK3xqLME20j9i1Qn"); })();

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = {
            name:    contactForm.name.value.trim(),
            email:   contactForm.email.value.trim(),
            subject: contactForm.subject.value.trim(),
            message: contactForm.message.value.trim()
        };

        if (!data.name || !data.email || !data.subject || !data.message) {
            showMsg('Please fill in all fields.', 'error'); return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            showMsg('Please enter a valid email address.', 'error'); return;
        }

        const btn = contactForm.querySelector('.btn-submit');
        btn.classList.add('loading');
        btn.querySelector('.btn-text').textContent = 'Sending…';

        try {
            const res = await emailjs.send('service_1lh1iia', 'template_y92olre', {
                from_name:  data.name,
                from_email: data.email,
                subject:    data.subject,
                message:    data.message,
                to_email:   'taqidev1@gmail.com'
            });
            if (res.status === 200) {
                showMsg("Message sent! I'll get back to you soon.", 'success');
                contactForm.reset();
            } else throw new Error();
        } catch (err) {
            showMsg('Something went wrong. Please try again later.', 'error');
        } finally {
            btn.classList.remove('loading');
            btn.querySelector('.btn-text').textContent = 'Send Message';
        }
    });
}

function showMsg(msg, type) {
    formMessage.textContent = msg;
    formMessage.className   = `form-message ${type}`;
    setTimeout(() => { formMessage.className = 'form-message'; }, 5000);
}

// ── Console easter egg ──────────────────────
console.log('%cHey 👋', 'color:#38e8ff;font-size:2rem;font-weight:bold');
console.log('%cBuilt with passion by Taqi Al-Den', 'color:#a3f571;font-size:1rem');
console.log('%ctaqidev1@gmail.com', 'color:#6b7a99;font-size:0.85rem');

// ── Prevent form resubmit on reload ─────────
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}
