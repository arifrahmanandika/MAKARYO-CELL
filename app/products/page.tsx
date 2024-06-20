const categories = [
  {
    name: "MAKARYO Reload",
    href: "#",
    imageSrc: "./mk-produk.jpg",
    imageAlt: "Makaryo Reload, Download on Playstore.",
    description:
      "MAKARYO Reload adalah Aplikasi yang membantu memudahkan konsumen untuk melakukan pembelian Kuota Internet, Pulsa All Operator, Token PLN, Voucher Game. cocok untuk pengembangan bisnis UMKM.",
  },
  {
    name: "MAKARYO Sparepart & Accesories",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg",
    imageAlt:
      "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description:
      "The rest of the house will still be a mess, but your desk will look great.",
  },
  {
    name: "MAKARYO Service",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg",
    imageAlt:
      "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
    description:
      "Be more productive than enterprise project managers with a single piece of paper.",
  },
];

export default function Products() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Produk dan Layanan kami
        </h2>
        <p className="mt-4 text-base text-gray-500">
          Jangan ragu untuk menghubungi kami siap membantu dan memberikan Produk
          dan Layanan terbaik untuk anda.
        </p>

        <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {categories.map((category) => (
            <a key={category.name} href={category.href} className="group block">
              <div
                aria-hidden="true"
                className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
              >
                <img
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                {category.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {category.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
