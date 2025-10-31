// script.js - Adds interactive and animated effects for the portfolio site

document.addEventListener('DOMContentLoaded', function() {
  // Loading screen fade out
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.style.display = 'none';
        document.body.classList.remove('loading');
      }, 600);
    }, 2200);
  }

  // Typing animation for hero name
  const typingText = document.querySelector('.typing-text');
  if (typingText && typingText.dataset.text) {
    const text = typingText.dataset.text;
    let i = 0;
    typingText.textContent = '';
    function typeChar() {
      if (i < text.length) {
        typingText.textContent += text[i++];
        setTimeout(typeChar, 80);
      }
    }
    typeChar();
  }

  // Animate skill bars
  document.querySelectorAll('.skill-progress').forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    if (progress) {
      setTimeout(() => {
        bar.style.width = progress + '%';
      }, 800);
    }
  });

  // Skills Network Graph
  const networkCanvas = document.getElementById('skillsNetwork');
  if (networkCanvas) {
    const ctx = networkCanvas.getContext('2d');
    const rect = networkCanvas.getBoundingClientRect();
    let w = rect.width || 550;
    let h = rect.height || 550;
    
    // Set canvas size
    networkCanvas.width = w;
    networkCanvas.height = h;
    
    // Enable high DPI
    const dpr = window.devicePixelRatio || 1;
    networkCanvas.width = w * dpr;
    networkCanvas.height = h * dpr;
    ctx.scale(dpr, dpr);
    networkCanvas.style.width = w + 'px';
    networkCanvas.style.height = h + 'px';

    // Node definitions - well spaced layout
    // Shift everything up significantly to make room for bottom legend
    const verticalOffset = -60;
    const nodes = [
      { id: 'center', label: 'B.M. Khashrul Alam', x: w/2, y: h/2 + verticalOffset, size: 38, color: '#ffd700', category: 'center' },
      // Backend & Systems (Green) - Top-left quadrant - Well spaced
      { id: 'laravel', label: 'Laravel', x: w/2 - 160, y: h/2 - 85 + verticalOffset, size: 26, color: '#39ff14', category: 'backend' },
      { id: 'microservices', label: 'Microservices', x: w/2 - 190, y: h/2 - 155 + verticalOffset, size: 24, color: '#39ff14', category: 'backend' },
      { id: 'restapi', label: 'REST APIs', x: w/2 - 120, y: h/2 - 35 + verticalOffset, size: 24, color: '#39ff14', category: 'backend' },
      { id: 'php', label: 'PHP', x: w/2 - 220, y: h/2 - 110 + verticalOffset, size: 20, color: '#39ff14', category: 'backend' },
      { id: 'mysql', label: 'MySQL', x: w/2 - 220, y: h/2 - 50 + verticalOffset, size: 20, color: '#39ff14', category: 'backend' },
      { id: 'redis', label: 'Redis', x: w/2 - 130, y: h/2 - 140 + verticalOffset, size: 20, color: '#39ff14', category: 'backend' },
      // Cloud & DevOps (Blue) - Top-right quadrant - Well spaced
      { id: 'aws', label: 'AWS', x: w/2 + 180, y: h/2 - 110 + verticalOffset, size: 24, color: '#4a90e2', category: 'cloud' },
      { id: 'docker', label: 'Docker', x: w/2 + 150, y: h/2 - 65 + verticalOffset, size: 20, color: '#4a90e2', category: 'cloud' },
      { id: 'elk', label: 'ELK Stack', x: w/2 + 200, y: h/2 - 160 + verticalOffset, size: 20, color: '#4a90e2', category: 'cloud' },
      { id: 'kubernetes', label: 'Kubernetes', x: w/2 + 230, y: h/2 - 65 + verticalOffset, size: 20, color: '#4a90e2', category: 'cloud' },
      { id: 'cicd', label: 'CI/CD', x: w/2 + 180, y: h/2 - 25 + verticalOffset, size: 20, color: '#4a90e2', category: 'cloud' },
      // AI & Innovation (Yellow) - Bottom-left quadrant - Well spaced
      { id: 'llms', label: 'LLMs', x: w/2 - 180, y: h/2 + 80 + verticalOffset, size: 24, color: '#ffd700', category: 'ai' },
      { id: 'prompt', label: 'Prompt Engine', x: w/2 - 120, y: h/2 + 155 + verticalOffset, size: 20, color: '#ffd700', category: 'ai' },
      { id: 'aiintegration', label: 'AI Integration', x: w/2 - 150, y: h/2 + 110 + verticalOffset, size: 22, color: '#ffd700', category: 'ai' },
      // Leadership (Red) - Bottom-right quadrant - Well spaced
      { id: 'systemdesign', label: 'System Design', x: w/2 + 170, y: h/2 + 80 + verticalOffset, size: 24, color: '#ff6b6b', category: 'leadership' },
      { id: 'mentoring', label: 'Mentoring', x: w/2 + 220, y: h/2 + 80 + verticalOffset, size: 20, color: '#ff6b6b', category: 'leadership' },
      { id: 'agile', label: 'Agile/Scrum', x: w/2 + 220, y: h/2 + 145 + verticalOffset, size: 24, color: '#ff6b6b', category: 'leadership' },
      { id: 'leadership', label: 'Team Leadership', x: w/2 + 170, y: h/2 + 155 + verticalOffset, size: 22, color: '#ff6b6b', category: 'leadership' },
    ];

    // Connections - matching the reference design exactly
    const connections = [
      // All nodes connect to center
      ['center', 'laravel'], ['center', 'microservices'], ['center', 'php'], ['center', 'mysql'],
      ['center', 'restapi'], ['center', 'redis'],
      ['center', 'aws'], ['center', 'docker'], ['center', 'kubernetes'], ['center', 'elk'], ['center', 'cicd'],
      ['center', 'llms'], ['center', 'prompt'], ['center', 'aiintegration'],
      ['center', 'systemdesign'], ['center', 'mentoring'], ['center', 'agile'], ['center', 'leadership'],
      // Backend & Systems cluster connections
      ['laravel', 'microservices'], ['laravel', 'php'], ['laravel', 'mysql'], ['laravel', 'redis'], ['laravel', 'restapi'],
      ['microservices', 'php'],
      ['php', 'mysql'],
      ['redis', 'restapi'],
      // Cloud & DevOps cluster connections
      ['aws', 'elk'], ['aws', 'docker'], ['aws', 'kubernetes'],
      ['docker', 'kubernetes'], ['docker', 'cicd'],
      ['kubernetes', 'cicd'],
      // AI & Innovation cluster connections
      ['llms', 'prompt'], ['llms', 'aiintegration'], ['prompt', 'aiintegration'],
      // Leadership cluster connections
      ['systemdesign', 'mentoring'], ['systemdesign', 'agile'], ['systemdesign', 'leadership'],
      ['mentoring', 'agile'], ['agile', 'leadership'],
    ];

    let highlightedNode = null;
    let selectedNode = null;
    let animationFrame = null;
    let animationProgress = 0;

    function getConnectedNodes(nodeId) {
      const connectedIds = new Set([nodeId]);
      connections.forEach(([from, to]) => {
        if (from === nodeId) connectedIds.add(to);
        if (to === nodeId) connectedIds.add(from);
      });
      return connectedIds;
    }

    function animate(target, callback) {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
      
      animationProgress = target; // Set immediately
      draw(); // Draw immediately
      
      if (callback) callback();
    }

    function draw() {
      // Clear canvas properly to avoid trails
      ctx.clearRect(0, 0, w, h);

      // Get the currently hovered/selected node (only ONE node)
      const activeNode = selectedNode || highlightedNode;
      const centerNode = nodes.find(n => n.id === 'center');

      // Draw connections
      connections.forEach(([from, to]) => {
        const fromNode = nodes.find(n => n.id === from);
        const toNode = nodes.find(n => n.id === to);
        if (fromNode && toNode) {
          // Check if this is the connection from hovered node to center
          const isHoveredConnection = activeNode && (
            (from === activeNode.id && to === 'center') || 
            (to === activeNode.id && from === 'center')
          );
          
          if (isHoveredConnection && animationProgress > 0) {
            // Highlight the line from hovered node to center
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.lineWidth = 2;
          } else {
            // All other connections are dimmed
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
            ctx.lineWidth = 1;
          }
          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.lineTo(toNode.x, toNode.y);
          ctx.stroke();
        }
      });

      // Draw nodes
      nodes.forEach(node => {
        const isHighlighted = highlightedNode && highlightedNode.id === node.id;
        const isSelected = selectedNode && selectedNode.id === node.id;
        const isHoveredNode = isHighlighted || isSelected;
        
        // Calculate size - ONLY hovered node scales up
        let actualSize = node.size;
        if (isHoveredNode && animationProgress > 0) {
          // Only the hovered node scales up, and only when animationProgress > 0
          actualSize = node.size * (1 + 0.8 * animationProgress);
        }

        // Outer glow - ONLY for hovered node
        if (isHoveredNode && animationProgress > 0) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, actualSize + 3, 0, 2 * Math.PI);
          const gradient = ctx.createRadialGradient(node.x, node.y, actualSize, node.x, node.y, actualSize + 15);
          gradient.addColorStop(0, node.color);
          gradient.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = gradient;
          ctx.globalAlpha = 0.5 * animationProgress;
          ctx.fill();
          ctx.globalAlpha = 1;
        }

        // Main circle - base opacity for all
        ctx.beginPath();
        ctx.arc(node.x, node.y, actualSize, 0, 2 * Math.PI);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = 0.7; // Same for all nodes
        ctx.fill();
        ctx.globalAlpha = 1;
        
        // Selected border
        if (isSelected) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, actualSize + 3, 0, 2 * Math.PI);
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
        
        ctx.globalAlpha = 1;

        // Text - under the bubble with smooth scaling
        ctx.save();
        ctx.fillStyle = isHoveredNode ? '#ffffff' : 'rgba(255, 255, 255, 0.9)';
        
        // Scale font size smoothly for hovered nodes ONLY
        let fontSize;
        if (isHoveredNode && animationProgress > 0) {
          if (node.id === 'center') {
            const baseSize = 13;
            const targetSize = 18;
            fontSize = 'bold ' + (baseSize + (targetSize - baseSize) * animationProgress) + 'px';
          } else {
            const baseSize = 10;
            const targetSize = 14;
            fontSize = (baseSize + (targetSize - baseSize) * animationProgress) + 'px';
          }
        } else {
          fontSize = node.id === 'center' ? 'bold 13px' : '10px';
        }
        ctx.font = fontSize + ' Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        
        // Add text shadow for better visibility
        ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
        ctx.shadowBlur = 3;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;
        
        // Increase spacing between node and text label for better visibility
        const textOffset = actualSize + 12;
        if (node.label.includes('\n')) {
          const lines = node.label.split('\n');
          lines.forEach((line, i) => {
            ctx.fillText(line, node.x, node.y + textOffset + i * 15);
          });
        } else {
          ctx.fillText(node.label, node.x, node.y + textOffset);
        }
        ctx.restore();
      });
    }

    draw();

    // Handle window resize
    window.addEventListener('resize', () => {
      const rect = networkCanvas.getBoundingClientRect();
      w = rect.width || 550;
      h = rect.height || 550;
      const dpr = window.devicePixelRatio || 1;
      networkCanvas.width = w * dpr;
      networkCanvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      draw();
    });

    // Make canvas interactive
    let mouseX = 0;
    let mouseY = 0;
    
    networkCanvas.addEventListener('mousemove', (e) => {
      const rect = networkCanvas.getBoundingClientRect();
      // Get mouse position in canvas coordinates (no need to scale by DPR since we already scaled the context)
      const x = (e.clientX - rect.left);
      const y = (e.clientY - rect.top);
      
      mouseX = x;
      mouseY = y;

      // Find node under cursor - use strict detection with base size only
      // Sort by distance (closest first) and size (smaller first for z-ordering)
      const candidates = nodes
        .map(n => {
          const dist = Math.sqrt((x - n.x) ** 2 + (y - n.y) ** 2);
          // Use base size only for detection (not scaled size)
          // Stricter detection - only within base radius + small buffer for easier hovering
          return { node: n, distance: dist, within: dist <= n.size + 8 };
        })
        .filter(c => c.within)
        .sort((a, b) => {
          // First sort by distance (closest first)
          if (Math.abs(a.distance - b.distance) > 2) {
            return a.distance - b.distance;
          }
          // If similar distance, prefer smaller nodes (they're usually on top)
          return a.node.size - b.node.size;
        });
      
      const node = candidates.length > 0 ? candidates[0].node : null;

      if (node) {
        networkCanvas.style.cursor = 'pointer';
        // Only update if different node
        if (highlightedNode?.id !== node.id) {
          highlightedNode = node;
          animate(1.0, () => {});
        }
      } else {
        networkCanvas.style.cursor = 'default';
        // Clear highlight only if not selected
        if (highlightedNode && !selectedNode) {
          highlightedNode = null;
          animate(0.0, () => {});
        }
      }
    });
    
    // Track mouse leave to clear hover state
    networkCanvas.addEventListener('mouseleave', () => {
      if (highlightedNode && !selectedNode) {
        highlightedNode = null;
        animate(0.0, () => {}); // Animate back to normal
      }
    });

    networkCanvas.addEventListener('click', (e) => {
      const rect = networkCanvas.getBoundingClientRect();
      const x = (e.clientX - rect.left);
      const y = (e.clientY - rect.top);

      // Find node under cursor for click - same logic as hover
      const candidates = nodes
        .map(n => {
          const dist = Math.sqrt((x - n.x) ** 2 + (y - n.y) ** 2);
          return { node: n, distance: dist, within: dist <= n.size + 8 };
        })
        .filter(c => c.within)
        .sort((a, b) => {
          if (Math.abs(a.distance - b.distance) > 2) {
            return a.distance - b.distance;
          }
          return a.node.size - b.node.size;
        });
      
      const node = candidates.length > 0 ? candidates[0].node : null;

      if (node) {
        // Toggle selection - if clicking same node, deselect
        if (selectedNode?.id === node.id) {
          selectedNode = null;
          animate(0.0, () => {});
        } else {
          selectedNode = node;
          animate(1.0, () => {});
        }
        highlightedNode = null;
      }
    });
  }

  // Constellation background effect
  const canvas = document.getElementById('constellation');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    let points = [];
    const POINTS = 70;
    for (let i = 0; i < POINTS; i++) {
      points.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < POINTS; i++) {
        let p = points[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, 2 * Math.PI);
        ctx.fillStyle = '#39ff14';
        ctx.fill();
        for (let j = i + 1; j < POINTS; j++) {
          let q = points[j];
          let dx = p.x - q.x;
          let dy = p.y - q.y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = 'rgba(57,255,20,0.13)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    }
    function update() {
      for (let p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
    }
    function animate() {
      update();
      draw();
      requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener('resize', () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    });
  }

  // Smooth animated scrolling for navigation menu
  function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    // Navigation links initialized
    
    navLinks.forEach(link => {
      // Remove any existing event listeners
      link.removeEventListener('click', handleNavClick);
      // Add new event listener
      link.addEventListener('click', handleNavClick);
    });
  }

  function handleNavClick(e) {
    e.preventDefault(); // Prevent default anchor behavior
    e.stopPropagation(); // Stop event bubbling
    
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    // Navigating to section
    
    if (targetSection) {
      // Try modern scrollIntoView first (fallback)
      if (targetSection.scrollIntoView) {
        // Using scrollIntoView method
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        // Fallback to custom smooth scroll
        const navHeight = document.querySelector('.terminal-nav').offsetHeight || 80;
        const targetPosition = targetSection.offsetTop - navHeight;
        
        // Using custom smooth scroll
        smoothScrollTo(targetPosition, 1000);
      }
    }
  }

  // Smooth scroll function with easing
  function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset || window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    // Starting smooth scroll

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function (easeInOutCubic)
      const ease = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      const currentPosition = startPosition + distance * ease;
      window.scrollTo(0, currentPosition);
      
      if (progress < 1) {
        requestAnimationFrame(animation);
      } else {
        // Smooth scroll completed
      }
    }
    
    requestAnimationFrame(animation);
  }

  // Initialize smooth scroll
  initSmoothScroll();

  // Contact Form Email Functionality
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    // Initialize EmailJS with public key
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
    
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('.submit-btn');
      const btnText = submitBtn.querySelector('.btn-text');
      const originalText = btnText.textContent;
      
      // Disable button and show loading state
      submitBtn.disabled = true;
      btnText.textContent = 'Sending...';
      submitBtn.style.opacity = '0.6';
      
      // Get form data
      const formData = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        to_email: 'khashrul.cse@gmail.com'
      };
      
      // Send email using EmailJS
      // Note: You need to:
      // 1. Sign up at https://www.emailjs.com (free account)
      // 2. Create an email service (Gmail, Outlook, etc.)
      // 3. Create an email template
      // 4. Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' with your actual values
      
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
        .then(function(response) {
          // Success message
          btnText.textContent = 'Message Sent! ✓';
          submitBtn.style.backgroundColor = '#39ff14';
          submitBtn.style.color = '#000';
          
          // Reset form
          contactForm.reset();
          
          // Reset button after 3 seconds
          setTimeout(() => {
            btnText.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            submitBtn.style.backgroundColor = '';
            submitBtn.style.color = '';
          }, 3000);
          
          // Show success notification
          showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        }, function(error) {
          // Error message
          btnText.textContent = 'Error - Try Again';
          submitBtn.style.backgroundColor = '#ff6b6b';
          submitBtn.style.color = '#fff';
          
          // Reset button after 3 seconds
          setTimeout(() => {
            btnText.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            submitBtn.style.backgroundColor = '';
            submitBtn.style.color = '';
          }, 3000);
          
          // Show error notification
          showNotification('Failed to send message. Please try again or email me directly.', 'error');
          
          // Log error for debugging (remove in production or use proper logging service)
          if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.error('EmailJS Error:', error);
          }
        });
    });
  }

  // Notification function
  function showNotification(message, type) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
      existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: ${type === 'success' ? '#39ff14' : '#ff6b6b'};
      color: ${type === 'success' ? '#000' : '#fff'};
      padding: 1rem 1.5rem;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      z-index: 10000;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.9rem;
      max-width: 400px;
      animation: slideIn 0.3s ease-out;
    `;
    
    // Add animation style if not exists
    if (!document.querySelector('#notification-styles')) {
      const style = document.createElement('style');
      style.id = 'notification-styles';
      style.textContent = `
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(400px);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease-out';
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 5000);
  }
});
