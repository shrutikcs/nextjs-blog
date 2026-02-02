import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 md:py-32 overflow-hidden">
        {/* Background gradient decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="text-center space-y-6 sm:space-y-8 px-2">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Welcome to{" "}
            <span className="bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Blog<span className="outline-1">ify</span>
            </span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Share your thoughts, discover new ideas, and connect with a
            community of passionate writers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4 px-4">
            <Link
              href="/blog"
              className={buttonVariants({
                size: "lg",
                className: "text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6",
              })}
            >
              Explore Posts
            </Link>
            <Link
              href="/create"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6",
              })}
            >
              Start Writing
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 md:py-28">
        <div className="text-center mb-10 sm:mb-16 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Why Choose Blogify?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Everything you need to share your stories with the world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Feature 1 */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <CardContent className="pt-6 sm:pt-8 pb-4 sm:pb-6 text-center space-y-3 sm:space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Easy Writing</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Simple, distraction-free editor that lets you focus on what
                matters most - your content.
              </p>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <CardContent className="pt-6 sm:pt-8 pb-4 sm:pb-6 text-center space-y-3 sm:space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Lightning Fast</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Built with Next.js for blazing-fast performance and seamless
                user experience.
              </p>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 sm:col-span-2 md:col-span-1">
            <CardContent className="pt-6 sm:pt-8 pb-4 sm:pb-6 text-center space-y-3 sm:space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Dark Mode</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Beautiful themes that adapt to your preference. Read and write
                comfortably, day or night.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 md:py-28">
        <div className="text-center space-y-5 sm:space-y-8 max-w-3xl mx-auto px-2">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Ready to Share Your Story?
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground">
            Join our community of writers and readers. Start your blogging
            journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link
              href="/auth/sign-up"
              className={buttonVariants({
                size: "lg",
                className: "text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6",
              })}
            >
              Get Started Free
            </Link>
            <Link
              href="/blog"
              className={buttonVariants({
                variant: "ghost",
                size: "lg",
                className: "text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6",
              })}
            >
              Browse Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 border-t border-border">
        <div className="flex flex-col items-center gap-4 sm:gap-6 text-center">
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-bold">
              Blog<span className="text-primary">ify</span>
            </span>
          </div>
          <p className="text-muted-foreground text-xs sm:text-sm">
            © 2026 Blogify. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/shrutikcs/nextjs-blog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
