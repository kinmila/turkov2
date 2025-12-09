const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[hsl(0,0%,22%)] border-t border-border/20 py-6 px-4 md:px-6">
      <div className="container mx-auto">
        <p className="text-center text-muted-foreground text-sm">
          © {currentYear} Serhii "KM" Turkov. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;