import { client } from "../utils/contentful";
import type { Asset, EntryFields } from "contentful";
import Image from "next/image";

interface TypeTeamFields {
  contentTypeId: "team";
  fields: {
    name: EntryFields.Symbol;
    role: EntryFields.Symbol;
    profilpic: Asset;
  };
}

export async function fetchArticle() {
  try {
    const data = await client.getEntries<TypeTeamFields>();
    // console.log(data.items[0].fields.profilpic); // untuk lihat hasil json dari datanya
    return data?.items;
  } catch (err) {
    console.log(err);
  }
}

export default async function Teams() {
  const people = await fetchArticle();
  return (
    <div className="bg-white pt-10">
      <div className="mx-auto max-w-7xl p-6 text-center lg:p-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people?.map((person) => {
            // const { fields }: { fields: { file: { url: string } } } =
            //   person.fields.profilpic;
            const profilePicUrl = person?.fields?.profilpic?.fields?.file?.url;
            return (
              <li key={person.sys.id}>
                <img
                  className="mx-auto h-56 w-56 rounded-full"
                  // src={`https:${fields.file.url}`}
                  src={`https:${profilePicUrl}`}
                  alt=""
                />
                <h3
                  key={person.sys.id}
                  className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900"
                >
                  {person.fields.name}
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  {person.fields.role}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
