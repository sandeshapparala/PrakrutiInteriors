import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"
import { useEffect, useRef } from "react"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
  speed?: number // Animation speed in seconds (default: 25)
}

export function TestimonialsWithMarquee({ 
  title,
  description,
  testimonials,
  className,
  speed = 25 // Default speed: 25 seconds for full cycle
}: TestimonialsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    // Add the animation
    scrollElement.style.animation = 'none';
    void scrollElement.offsetHeight; // Trigger reflow
    scrollElement.style.animation = `marqueeScroll ${speed}s linear infinite`;

    return () => {
      if (scrollElement) {
        scrollElement.style.animation = 'none';
      }
    };
  }, [testimonials, speed]);

  // Create duplicate testimonials for seamless loop
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marqueeScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `
      }} />
      
      <section className={cn(
        "bg-background text-foreground",
        "py-12 sm:py-24 md:py-32 px-0",
        className
      )}>
        <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
          <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
            <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
              {title}
            </h2>
            <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
              {description}
            </p>
          </div>

          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <div 
              ref={scrollRef}
              className="flex gap-4 py-4"
              style={{ width: 'fit-content' }}
              onMouseEnter={() => {
                if (scrollRef.current) {
                  scrollRef.current.style.animationPlayState = 'paused';
                }
              }}
              onMouseLeave={() => {
                if (scrollRef.current) {
                  scrollRef.current.style.animationPlayState = 'running';
                }
              }}
            >
              {allTestimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={i}
                  {...testimonial}
                  className="flex-shrink-0 w-80"
                />
              ))}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent" />
          </div>
        </div>
      </section>
    </>
  )
}
