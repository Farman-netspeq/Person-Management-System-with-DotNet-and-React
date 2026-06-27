import { useForm } from "react-hook-form";
import PersonForm from "./PersonForm";
import PersonList from "./PersonList";
import { useEffect, useState } from "react";
import axios from "axios";

function Person() {
  const BASE_URL = import.meta.env.VITE_BASE_API_URL + "/people";
  const [people, setPeople] = useState([]);
  const [editData, setEditdata] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      const loadPeople = async () => {
        var peopleData = (await axios.get(BASE_URL)).data;
        setPeople(peopleData);
        console.log("people", peopleData);
      };

      loadPeople();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    methods.reset(editData);
  }, [editData]);
  const defaultFormValues = {
    id: 0,
    firstName: "",
    lastName: "",
  };
  const methods = useForm({
    defaultValues: defaultFormValues,
  });
  const handleFormSubmit = async (person) => {
    setLoading(true);
    if (person.id <= 0) {
      console.log("add");
      const createdPerson = (await axios.post(BASE_URL, person)).data;
      setPeople((previousPerson) => [...previousPerson, person]);
    } else {
      console.log("edit");
      await axios.put(`${BASE_URL}/${person.id}`, person);
      setPeople((previousPeople) =>
        previousPeople.map((p) => (p.id === person.id ? person : p)),
      );
    }
    setLoading(false);
    methods.reset(defaultFormValues);
    console.log(data);
  };

  const handlePersonDelete = async (person) => {
    if (
      !confirm(
        `Are you sure want to delete a person: ${person.firstName} ${person.lastName}`,
      )
    ) {
      return;
    }
    setLoading(true);
    await axios.delete(`${BASE_URL}/${person.id}`, person);
    setPeople((previousPerson) =>
      previousPerson.filter((p) => p.id !== person.id),
    );
    setLoading(false);
    console.log(person);
  };
  const handlePersonEdit = (person) => {
    setEditdata(person);
    console.log(person);
  };
  const handleFormReset = () => {
    methods.reset(defaultFormValues);
  };
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Person Management
          </h1>
          {loading && <p>Loading...!</p>}
        </div>

        <PersonForm
          methods={methods}
          onFormReset={handleFormReset}
          onFormSubmit={handleFormSubmit}
        />
        <PersonList
          peopleList={people}
          onPersonDelete={handlePersonDelete}
          onPersonEdit={handlePersonEdit}
        />
      </div>
    </div>
  );
}

export default Person;
