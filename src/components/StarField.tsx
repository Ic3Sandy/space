import { useEffect, useRef } from 'preact/hooks';

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // TypeScript helper - canvas and ctx are guaranteed non-null after checks above
    const canvasElement = canvas;
    const context = ctx;

    let animationFrameId: number;
    let stars: Star[] = [];

    // Set canvas size
    const resizeCanvas = (): void => {
      canvasElement.width = window.innerWidth;
      canvasElement.height = window.innerHeight;
      initStars();
    };

    // Create star class
    class Star {
      x: number;
      y: number;
      size: number;
      speedY: number;
      opacity: number;
      twinkleSpeed: number;
      twinkleDirection: 1 | -1;

      constructor() {
        this.x = 0;
        this.y = 0;
        this.size = 0;
        this.speedY = 0;
        this.opacity = 0;
        this.twinkleSpeed = 0;
        this.twinkleDirection = 1;
        this.reset();
      }

      reset(): void {
        this.x = Math.random() * canvasElement.width;
        this.y = Math.random() * canvasElement.height;
        this.size = Math.random() * 2;
        this.speedY = Math.random() * 0.1;
        this.opacity = Math.random();
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
        this.twinkleDirection = Math.random() > 0.5 ? 1 : -1;
      }

      update(): void {
        // Parallax scroll effect
        this.y += this.speedY;

        // Twinkle effect
        this.opacity += this.twinkleSpeed * this.twinkleDirection;
        if (this.opacity <= 0 || this.opacity >= 1) {
          this.twinkleDirection *= -1;
        }

        // Reset if star goes off screen
        if (this.y > canvasElement.height) {
          this.y = 0;
          this.x = Math.random() * canvasElement.width;
        }
      }

      draw(): void {
        context.save();
        context.globalAlpha = this.opacity;
        context.fillStyle = '#ffffff';
        context.shadowBlur = this.size * 2;
        context.shadowColor = '#ffffff';
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }
    }

    // Initialize stars
    const initStars = (): void => {
      stars = [];
      const starCount = Math.floor((canvasElement.width * canvasElement.height) / 3000);
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
      }
    };

    // Animation loop
    const animate = (): void => {
      context.clearRect(0, 0, canvasElement.width, canvasElement.height);

      stars.forEach((star: Star) => {
        star.update();
        star.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    animate();

    // Handle resize
    window.addEventListener('resize', resizeCanvas);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}
