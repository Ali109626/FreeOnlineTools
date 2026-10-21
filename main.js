// FreeOnlineTools - Global Registry & Utilities
const TOOLS = [
  // 1. Image Tools
  {
    id: 'image-compressor',
    name: 'Image Compressor',
    cat: 'image',
    catName: 'Image Tools',
    icon: '📉',
    url: 'image-compressor.html',
    desc: 'Compress JPG, PNG & WebP images to smaller file sizes without losing quality.',
    keywords: ['compress', 'optimize', 'shrink', 'photo size', 'reduce mb', 'reduce kb']
  },
  {
    id: 'image-resizer',
    name: 'Image Resizer',
    cat: 'image',
    catName: 'Image Tools',
    icon: '📐',
    url: 'image-resizer.html',
    desc: 'Resize images to custom width & height in pixels with aspect ratio lock.',
    keywords: ['resize', 'dimensions', 'width', 'height', 'scale', 'aspect ratio']
  },
  {
    id: 'image-converter',
    name: 'Image Converter',
    cat: 'image',
    catName: 'Image Tools',
    icon: '🔄',
    url: 'image-converter.html',
    desc: 'Convert JPG to PNG, PNG to JPG, or WebP format instantly in your browser.',
    keywords: ['convert', 'format', 'png to jpg', 'jpg to png', 'webp', 'jpeg']
  },
  {
    id: 'image-cropper',
    name: 'Image Cropper',
    cat: 'image',
    catName: 'Image Tools',
    icon: '✂️',
    url: 'image-cropper.html',
    desc: 'Crop photos with custom selection or fixed aspect ratios (1:1, 16:9, 4:3).',
    keywords: ['crop', 'cut', 'aspect ratio', 'square', 'avatar', 'photo crop']
  },

  // 2. Text Tools
  {
    id: 'word-counter',
    name: 'Word & Character Counter',
    cat: 'text',
    catName: 'Text Tools',
    icon: '📝',
    url: 'word-counter.html',
    desc: 'Count words, characters, sentences, paragraphs and calculate reading time.',
    keywords: ['word counter', 'character count', 'letters', 'sentences', 'reading time']
  },
  {
    id: 'roman-to-urdu',
    name: 'Roman to Urdu Converter',
    cat: 'text',
    catName: 'Text Tools',
    icon: '✍️',
    url: 'roman-to-urdu.html',
    desc: 'Type Urdu phonetically in English/Roman alphabet and get authentic Urdu Nastaliq text.',
    keywords: ['roman to urdu', 'urdu typing', 'transliteration', 'urdu converter', 'urdu keyboard']
  },
  {
    id: 'text-to-speech',
    name: 'Text to Speech (TTS)',
    cat: 'text',
    catName: 'Text Tools',
    icon: '🔊',
    url: 'text-to-speech.html',
    desc: 'Convert any written text to natural voice speech with Urdu and English voice support.',
    keywords: ['tts', 'speech synthesis', 'read aloud', 'voice', 'audio', 'urdu voice']
  },
  {
    id: 'case-converter',
    name: 'Case Converter',
    cat: 'text',
    catName: 'Text Tools',
    icon: '🔠',
    url: 'case-converter.html',
    desc: 'Switch text case: UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case.',
    keywords: ['case', 'uppercase', 'lowercase', 'title case', 'capitalization', 'camelcase']
  },
  {
    id: 'remove-duplicate-lines',
    name: 'Remove Duplicate Lines',
    cat: 'text',
    catName: 'Text Tools',
    icon: '🧹',
    url: 'remove-duplicate-lines.html',
    desc: 'Clean up lists by deleting duplicate lines, trimming whitespace, and sorting alphabetically.',
    keywords: ['deduplicate', 'unique lines', 'remove duplicates', 'sort lines', 'clean list']
  },

  // 3. Calculators
  {
    id: 'zakat-calculator',
    name: 'Zakat Calculator',
    cat: 'calc',
    catName: 'Calculators',
    icon: '🪙',
    url: 'zakat-calculator.html',
    desc: 'Accurately calculate 2.5% Zakat on Gold, Silver, Cash, Business inventory and Liabilities.',
    keywords: ['zakat', 'nisab', 'gold zakat', 'silver', 'islamic finance', 'charity']
  },
  {
    id: 'electricity-bill-calculator',
    name: 'Electricity Bill Calculator (Pakistan)',
    cat: 'calc',
    catName: 'Calculators',
    icon: '⚡',
    url: 'electricity-bill-calculator.html',
    desc: 'Estimate LESCO, MEPCO, FESCO & K-Electric electricity bills with editable slab rates & taxes.',
    keywords: ['electricity bill', 'bijli bill', 'lesco', 'mepco', 'k-electric', 'pakistan bill', 'fpa', 'slabs']
  },
  {
    id: 'age-calculator',
    name: 'Age Calculator',
    cat: 'calc',
    catName: 'Calculators',
    icon: '🎂',
    url: 'age-calculator.html',
    desc: 'Calculate exact chronological age in years, months, days, plus next birthday countdown.',
    keywords: ['age', 'birthday', 'how old am i', 'dob', 'date of birth']
  },
  {
    id: 'discount-calculator',
    name: 'Discount & Percentage Calculator',
    cat: 'calc',
    catName: 'Calculators',
    icon: '🏷️',
    url: 'discount-calculator.html',
    desc: 'Compute sales discounts, final price, money saved, and percentage increase/decrease.',
    keywords: ['discount', 'percentage', 'sale', 'off', 'savings', 'percent calculator']
  },
  {
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    cat: 'calc',
    catName: 'Calculators',
    icon: '⚖️',
    url: 'bmi-calculator.html',
    desc: 'Calculate Body Mass Index (BMI) in Metric or Imperial with healthy weight suggestions.',
    keywords: ['bmi', 'body mass index', 'health', 'weight', 'height', 'fitness']
  },

  // 4. PDF & File Tools
  {
    id: 'merge-pdfs',
    name: 'Merge PDFs',
    cat: 'pdf',
    catName: 'PDF & File Tools',
    icon: '📑',
    url: 'merge-pdfs.html',
    desc: 'Combine multiple PDF documents into one ordered file 100% inside your browser.',
    keywords: ['merge pdf', 'combine pdf', 'join pdf', 'pdf joiner', 'pdf binder']
  },
  {
    id: 'images-to-pdf',
    name: 'Images to PDF Converter',
    cat: 'pdf',
    catName: 'PDF & File Tools',
    icon: '🖼️',
    url: 'images-to-pdf.html',
    desc: 'Convert JPG, PNG, and WebP pictures into a clean multi-page PDF document.',
    keywords: ['images to pdf', 'jpg to pdf', 'photos to pdf', 'png to pdf', 'make pdf']
  },
  {
    id: 'split-pdf',
    name: 'Split PDF',
    cat: 'pdf',
    catName: 'PDF & File Tools',
    icon: '✂️',
    url: 'split-pdf.html',
    desc: 'Extract specific pages or page ranges from a PDF document into a new PDF.',
    keywords: ['split pdf', 'extract pdf pages', 'separate pdf', 'cut pdf', 'pdf divider']
  },
  {
    id: 'compress-pdf',
    name: 'Compress PDF',
    cat: 'pdf',
    catName: 'PDF & File Tools',
    icon: '📉',
    url: 'compress-pdf.html',
    desc: 'Reduce PDF file size in your browser without quality loss. 100% private.',
    keywords: ['compress pdf', 'reduce pdf size', 'shrink pdf', 'pdf optimizer', 'small pdf']
  },
  {
    id: 'pdf-to-images',
    name: 'PDF to Images Converter',
    cat: 'pdf',
    catName: 'PDF & File Tools',
    icon: '📸',
    url: 'pdf-to-images.html',
    desc: 'Convert all pages of a PDF document into high-resolution JPG or PNG images.',
    keywords: ['pdf to images', 'pdf to jpg', 'pdf to png', 'extract images from pdf', 'pdf photo']
  },

  // 5. Generators
  {
    id: 'qr-code-generator',
    name: 'QR Code Generator',
    cat: 'gen',
    catName: 'Generators',
    icon: '📱',
    url: 'qr-code-generator.html',
    desc: 'Generate downloadable PNG QR codes for websites, plain text, WiFi networks and contacts.',
    keywords: ['qr code', 'make qr', 'wifi qr', 'barcode', 'qr maker']
  },
  {
    id: 'password-generator',
    name: 'Strong Password Generator',
    cat: 'gen',
    catName: 'Generators',
    icon: '🔑',
    url: 'password-generator.html',
    desc: 'Generate cryptographically secure, random passwords with strength indicators.',
    keywords: ['password generator', 'random password', 'strong password', 'security', 'pin']
  },
  {
    id: 'color-picker',
    name: 'Color Picker & Palette Generator',
    cat: 'gen',
    catName: 'Generators',
    icon: '🎨',
    url: 'color-picker.html',
    desc: 'Pick colors, get HEX/RGB/HSL values and create complementary & triadic color schemes.',
    keywords: ['color picker', 'palette generator', 'hex code', 'rgb', 'color harmony']
  },
  {
    id: 'random-picker',
    name: 'Random Name & Team Picker',
    cat: 'gen',
    catName: 'Generators',
    icon: '🎲',
    url: 'random-picker.html',
    desc: 'Pick lucky winners from a list or divide a group into balanced random teams.',
    keywords: ['random picker', 'team generator', 'lucky draw', 'raffle', 'winner']
  },

  // 6. Fun & Utility
  {
    id: 'todo-list',
    name: 'To-Do List',
    cat: 'util',
    catName: 'Fun & Utility',
    icon: '✅',
    url: 'todo-list.html',
    desc: 'Clean task organizer with categories, priorities, and local storage auto-save.',
    keywords: ['todo', 'task list', 'checklist', 'task manager', 'reminders']
  },
  {
    id: 'stopwatch-timer',
    name: 'Stopwatch & Timer',
    cat: 'util',
    catName: 'Fun & Utility',
    icon: '⏱️',
    url: 'stopwatch-timer.html',
    desc: 'Millisecond-accurate stopwatch with lap recording and countdown timer with chime alarm.',
    keywords: ['stopwatch', 'timer', 'countdown', 'laps', 'pomodoro', 'alarm']
  },
  {
    id: 'unit-converter',
    name: 'Unit Converter',
    cat: 'util',
    catName: 'Fun & Utility',
    icon: '📏',
    url: 'unit-converter.html',
    desc: 'Convert length, weight, temperature, digital storage, and speed units instantly.',
    keywords: ['unit converter', 'length', 'weight', 'temperature', 'metric', 'lbs to kg']
  },
  {
    id: 'currency-converter',
    name: 'PKR Currency Converter',
    cat: 'util',
    catName: 'Fun & Utility',
    icon: '💱',
    url: 'currency-converter.html',
    desc: 'Convert USD, EUR, GBP, SAR, AED, and foreign currencies to PKR with editable rates.',
    keywords: ['currency converter', 'pkr', 'usd to pkr', 'sar to pkr', 'aed to pkr', 'exchange rate']
  },

  // 7. Finance Tools
  {
    id: 'salary-tax-calculator',
    name: 'Pakistan Salary Tax Calculator 2026-27',
    cat: 'fin',
    catName: 'Finance Tools',
    icon: '🇵🇰',
    url: 'salary-tax-calculator.html',
    desc: 'Calculate monthly and yearly income tax under latest FBR slabs for 2026-27 with take-home pay.',
    keywords: ['salary tax', 'pakistan income tax', 'fbr tax slabs', 'salary tax calculator', 'take home pay', '2026 tax', 'fbr']
  },
  {
    id: 'loan-calculator',
    name: 'EMI & Loan Calculator',
    cat: 'fin',
    catName: 'Finance Tools',
    icon: '🏦',
    url: 'loan-calculator.html',
    desc: 'Calculate monthly loan EMI, total interest, and total payment with editable rate and years.',
    keywords: ['emi calculator', 'loan calculator', 'car loan', 'home mortgage', 'monthly installment', 'interest rate']
  },
  {
    id: 'compound-interest-calculator',
    name: 'Compound Interest Calculator',
    cat: 'fin',
    catName: 'Finance Tools',
    icon: '📈',
    url: 'compound-interest-calculator.html',
    desc: 'Forecast investment growth with initial deposit, monthly addition, interest rate, and year-by-year table.',
    keywords: ['compound interest', 'investment growth', 'future value', 'savings calculator', 'interest table']
  },
  {
    id: 'savings-goal-planner',
    name: 'Savings Goal Planner',
    cat: 'fin',
    catName: 'Finance Tools',
    icon: '🎯',
    url: 'savings-goal-planner.html',
    desc: 'Calculate how much you need to save each month to hit your target financial goals.',
    keywords: ['savings goal', 'goal planner', 'monthly savings', 'financial goal', 'target savings', 'budget goal']
  }
];

// Initialize live search & header interactions
document.addEventListener('DOMContentLoaded', () => {
  setupSearch();
  setupMobileNav();
});

// Setup Live Search
function setupSearch() {
  const searchInputs = document.querySelectorAll('.live-search-input');
  searchInputs.forEach(input => {
    const dropdownId = input.dataset.dropdownTarget || 'header-search-results';
    let dropdown = document.getElementById(dropdownId);
    
    // Create dropdown container if needed
    if (!dropdown) {
      dropdown = document.createElement('div');
      dropdown.id = dropdownId;
      dropdown.className = 'search-results-dropdown';
      input.parentElement.appendChild(dropdown);
    }

    input.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (!query) {
        dropdown.classList.remove('active');
        dropdown.innerHTML = '';
        return;
      }

      const matches = TOOLS.filter(tool => {
        const titleMatch = tool.name.toLowerCase().includes(query);
        const descMatch = tool.desc.toLowerCase().includes(query);
        const catMatch = tool.catName.toLowerCase().includes(query);
        const keywordMatch = tool.keywords.some(k => k.toLowerCase().includes(query));
        return titleMatch || descMatch || catMatch || keywordMatch;
      });

      if (matches.length === 0) {
        dropdown.innerHTML = `
          <div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 0.875rem;">
            No tools found matching "<strong>${escapeHtml(query)}</strong>"
          </div>`;
      } else {
        dropdown.innerHTML = matches.map(tool => `
          <a href="${tool.url}" class="search-result-item">
            <span class="search-result-icon">${tool.icon}</span>
            <div class="search-result-info">
              <div class="search-result-title">${escapeHtml(tool.name)}</div>
              <div class="search-result-desc">${escapeHtml(tool.desc)}</div>
            </div>
            <span class="search-result-badge badge-${tool.cat}">${tool.catName}</span>
          </a>
        `).join('');
      }

      dropdown.classList.add('active');
    });

    // Close search dropdown on click outside
    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });

    // Handle escape key
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdown.classList.remove('active');
      }
    });
  });
}

// Mobile Nav Toggle with full UX (outside click, link click, keyboard & icon switch)
function setupMobileNav() {
  const toggleBtn = document.getElementById('menu-toggle');
  const nav = document.getElementById('header-nav');
  if (toggleBtn && nav) {
    const closeNav = () => {
      nav.classList.remove('mobile-nav-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.textContent = '☰';
    };

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = nav.classList.toggle('mobile-nav-open');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggleBtn.textContent = isOpen ? '✕' : '☰';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !toggleBtn.contains(e.target) && nav.classList.contains('mobile-nav-open')) {
        closeNav();
      }
    });

    // Close menu when clicking any nav link
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeNav);
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('mobile-nav-open')) {
        closeNav();
      }
    });
  }
}

// Helper: Toast Notifications
function showToast(message, duration = 3000) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✓</span> <span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.2s ease';
    setTimeout(() => toast.remove(), 200);
  }, duration);
}

// Helper: Copy Text to Clipboard
async function copyToClipboard(text, successMessage = 'Copied to clipboard!') {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    showToast(successMessage);
  } catch (err) {
    console.error('Failed to copy text: ', err);
    showToast('Failed to copy. Please select and copy manually.');
  }
}

// Helper: Format Bytes to KB/MB
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Helper: Escape HTML
function escapeHtml(text) {
  if (typeof text !== 'string') return text;
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
