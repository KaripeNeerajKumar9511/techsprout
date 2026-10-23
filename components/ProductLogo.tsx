type Props = {
  src: string;
  alt: string;
  surface?: "light" | "dark";
  size?: "sm" | "md" | "lg";
};

export default function ProductLogo({ src, alt, surface = "light", size = "md" }: Props) {
  return (
    <span className={`logo-plate is-${surface} logo-${size}`}>
      <img src={src} alt={alt} />
    </span>
  );
}
