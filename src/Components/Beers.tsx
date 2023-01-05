import { useEffect, useState } from "react";
import { Combobox } from "@headlessui/react";
import { PostType } from "../routes";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoMdBeer } from "react-icons/io";

const people: string[] = [];

type Input = {
  listOfPosts: PostType[];
};
type API = {
  name: string;
  image_url: string;
};
const beers: string[] = [];
export function Beers() {
  useEffect(() => {
    GetBeers();
  }, []);
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [query, setQuery] = useState("");

  async function GetBeers() {
    await axios.get("https://api.punkapi.com/v2/beers").then((x) =>
      x.data.map((y: API) => {
        people.push(y.name);
        beers.push(y.image_url);
      })
    );
  }

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="w-40">
      <Combobox value={selectedPerson} onChange={setSelectedPerson}>
        <Combobox.Input
          onChange={(event) => setQuery(event.target.value)}
          className="w-full overflow-hidden rounded-lg bg-slate-100 text-center shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm border-2"
        />
        <Combobox.Options className="mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm flex flex-col gap-2">
          {filteredPeople.map((person, index) => (
            <div className="flex gap-1 items-center px-2">
              <Combobox.Label>
                <img src={beers[index]} alt="" className="h-8" />
              </Combobox.Label>
              <Combobox.Option key={person} value={person}>
                {person}
              </Combobox.Option>
            </div>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
}
