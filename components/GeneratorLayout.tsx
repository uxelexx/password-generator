type GeneratorLayoutProps = {
  children: React.ReactNode;
};

export default function GeneratorLayout({ children }: GeneratorLayoutProps) {
  return (
    <div className="w-full flex flex-col items-center space-y-5 max-w-lg">
      <h1 className="text-2xl tracking-wide font-semibold capitalize text-white text-opacity-50">
        Password generator
      </h1>
      {children}
    </div>
  );
}
