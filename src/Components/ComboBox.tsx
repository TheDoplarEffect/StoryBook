import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { PostType } from "../routes";
import { Link } from "react-router-dom";

type Input = {
  listOfPosts: PostType[];
};

export function MyCombobox({ listOfPosts }: Input) {
  const [selectedPerson, setSelectedPerson] = useState(listOfPosts[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? listOfPosts
      : listOfPosts.filter((person) => {
          return person.title.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="w-40">
      <Combobox value={selectedPerson} onChange={setSelectedPerson}>
        <Combobox.Input
          onChange={(event) => setQuery(event.target.value)}
          className="w-full overflow-hidden rounded-lg bg-slate-100 text-center shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm border-2"
        />
        <Combobox.Options className="mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm flex flex-col gap-2">
          {filteredPeople.map((person) => (
            <Combobox.Option key={person.id} value={person.id}>
              <Link to={`/blog/${person.id}`}>{person.title}</Link>
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
}
