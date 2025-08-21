'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { usePathname } from 'next/navigation';

export function PixelatedBottomGradient() {
  const [windowWidth, setWindowWidth] = useState(1200);
  const [pixels, setPixels] = useState<React.ReactElement[]>([]);
  const mousePositionRef = useRef({ x: 600, y: 400 }); // Initialize to center-ish
  const circlePositionRef = useRef({ x: 150, y: 600 });
  const pathname = usePathname();
  const isReturningToCenterRef = useRef(false);
  const isInitialLoadRef = useRef(true);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mousePositionRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    // Set initial width and circle position
    setWindowWidth(window.innerWidth);
    circlePositionRef.current = { x: window.innerWidth / 2, y: -150 }; // Start from above the screen
    mousePositionRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 }; // Initialize mouse position to center

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleResize, handleMouseMove]);

  // Animation loop for circle movement
  useEffect(() => {
    let animationId: number;

    const animate = () => {
      const centerX = windowWidth / 2;
      const centerY = window.innerHeight / 2;

      if (isInitialLoadRef.current) {
        // Initial entrance animation from top
        const currentY = circlePositionRef.current.y;

        if (currentY >= centerY - 5) {
          // Allow small tolerance
          // Reached center, stop initial animation
          circlePositionRef.current = { x: centerX, y: centerY };
          isInitialLoadRef.current = false;
        } else {
          // Move down towards center with easing
          const easing = 0.05;
          const newY = currentY + (centerY - currentY) * easing;
          circlePositionRef.current = { x: centerX, y: newY };
        }
      } else if (isReturningToCenterRef.current) {
        // Smooth return to center animation
        const currentX = circlePositionRef.current.x;
        const currentY = circlePositionRef.current.y;

        const distanceToCenter = Math.sqrt(Math.pow(centerX - currentX, 2) + Math.pow(centerY - currentY, 2));

        if (distanceToCenter < 5) {
          // Close enough to center, stop animation
          circlePositionRef.current = { x: centerX, y: centerY };
          isReturningToCenterRef.current = false;
        } else {
          // Move towards center with easing
          const easing = 0.05;
          const newX = currentX + (centerX - currentX) * easing;
          const newY = currentY + (centerY - currentY) * easing;
          circlePositionRef.current = { x: newX, y: newY };
        }
      } else {
        // Normal repulsion effect
        const mouseDistance = Math.sqrt(
          Math.pow(mousePositionRef.current.x - circlePositionRef.current.x, 2) +
            Math.pow(mousePositionRef.current.y - circlePositionRef.current.y, 2),
        );

        // Repulsion strength (stronger when closer)
        const repulsionRadius = 250;
        const maxRepulsion = 100;
        const repulsion = mouseDistance < repulsionRadius ? (1 - mouseDistance / repulsionRadius) * maxRepulsion : 0;

        // Calculate repulsion direction (away from mouse)
        const repulsionX =
          mouseDistance > 0
            ? ((circlePositionRef.current.x - mousePositionRef.current.x) / mouseDistance) * repulsion
            : 0;
        const repulsionY =
          mouseDistance > 0
            ? ((circlePositionRef.current.y - mousePositionRef.current.y) / mouseDistance) * repulsion
            : 0;

        // Update circle position
        const newCenterX = circlePositionRef.current.x + repulsionX;
        const newCenterY = circlePositionRef.current.y + repulsionY;

        // Keep circle within window bounds
        const boundedCenterX = Math.max(150, Math.min(windowWidth - 150, newCenterX));
        const boundedCenterY = Math.max(150, Math.min(window.innerHeight - 150, newCenterY));

        circlePositionRef.current = { x: boundedCenterX, y: boundedCenterY };
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [windowWidth]);

  // Trigger return to center when page changes
  useEffect(() => {
    isReturningToCenterRef.current = true;
  }, [pathname]);

  // Update pixels when circle moves
  useEffect(() => {
    let animationId: number;

    const updatePixels = () => {
      const pixelSize = 16;
      const centerX = circlePositionRef.current.x;
      const centerY = circlePositionRef.current.y;
      const radius = 120;

      const newPixels: React.ReactElement[] = [];

      // Generate pixels only around the circle position
      const circleAreaSize = 300;
      const startX = Math.max(0, centerX - circleAreaSize / 2);
      const startY = Math.max(0, centerY - circleAreaSize / 2);
      const endX = Math.min(windowWidth, centerX + circleAreaSize / 2);
      const endY = Math.min(window.innerHeight, centerY + circleAreaSize / 2);

      let pixelIndex = 0;
      for (let x = startX; x < endX; x += pixelSize) {
        for (let y = startY; y < endY; y += pixelSize) {
          // Calculate distance from center for semi-circle effect
          const distanceFromCenter = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));

          // Create full circle shape
          const isInCircle = distanceFromCenter < radius;

          if (!isInCircle) continue;

          // Calculate intensity based on distance from center
          const intensity = Math.max(0, 1 - distanceFromCenter / radius);

          // Add pixel art noise
          const noise = Math.sin(x * 0.1 + y * 0.1) * 0.2;
          const finalIntensity = Math.max(0, Math.min(1, intensity + noise));

          // Convert to purple color with opacity
          const opacity = finalIntensity * 0.6;

          newPixels.push(
            <rect
              key={pixelIndex++}
              x={x}
              y={y}
              width={pixelSize}
              height={pixelSize}
              fill={`rgba(173, 70, 255, ${opacity})`}
            />,
          );
        }
      }

      setPixels(newPixels);
      animationId = requestAnimationFrame(updatePixels);
    };

    updatePixels();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [windowWidth]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          background: 'transparent',
        }}
      >
        {pixels}
      </svg>
    </div>
  );
}
