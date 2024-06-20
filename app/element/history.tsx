const timeline = [
  {
    name: "Demian Reload",
    description:
      "Berawal dari Agen Saldo Pulsa Multi All Operator. Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.",
    date: "Juli 2011",
    dateTime: "2011-07",
  },
  {
    name: "MAKARYO CELL",
    description:
      "Reseller Handphone Baru dan Distribusi ke Outlet Partner. Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.",
    date: "Dec 2013",
    dateTime: "2013-12",
  },
  {
    name: "MARGOTOTO CELL & MAKARYO CELL 29",
    description:
      "Retail Outlet cabang wilayah Margoto dan Banjarsari dibuka. Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.",
    date: "Feb 2015",
    dateTime: "2015-02",
  },
  {
    name: "MAKARYO GROUP",
    description:
      "MAKARYO Group sampai saat ini telah memiliki lebih dari 200 Outlet Partner. Melayani pendaftaran Agen Saldo Pulsa Multi Operator, Service HP, Sparepart, Accesories, Penjualan HP baru dan Second.",
    date: "Dec 2016",
    dateTime: "2016-12",
  },
];

const stats = [
  { id: 1, name: "Outlet Partner", value: "200+" },
  { id: 2, name: "Master Agen Saldo", value: "300+" },
  { id: 3, name: "Kepuasan Pelanggan", value: "98.9%" },
  { id: 4, name: "Teams", value: "25+" },
];

export default function History() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.name}>
              <time
                dateTime={item.dateTime}
                className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
              >
                <svg
                  viewBox="0 0 4 4"
                  className="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                />
              </time>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {item.name}
              </p>
              <p className="mt-1 text-base leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl pt-32 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Terpercaya dan terus Berkembang!
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Terpercaya dalam bidang industri teknologi informasi dan
              komunikasi, serta terus berkembang.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
