export default function BannerGrid() {
  const banners = [
    {
      id: "headphone",
      alt: "Headphone",
      src: "https://digital.pixaa.ir/wp-content/uploads/2026/06/Headphone.webp",
      href: "/",
    },
    {
      id: "smartwatch",
      alt: "smartwatch",
      src: "https://digital.pixaa.ir/wp-content/uploads/2026/06/smartwatch.webp",
      href: "/",
    },
  ];

  return (
    <div className="max-w-screen mx-5 relative my-4 grid gap-4 px-4 grid-cols-1 lg:grid-cols-2">
      {banners.map((banner) => (
        <div
          key={banner.id}
          className="min-w-0  relative overflow-hidden rounded-xl"
        >
          <a className="block " href={banner.href}>
            <img
              loading="lazy"
              decoding="async"
              alt={banner.alt}
              src={banner.src}
              className="block h-auto relative z-10 w-full object-cover"
            />
          </a>
            <div className="absolute w-full h-11 bg-white top-0"></div>
        </div>
      ))}
    </div>
  );
}