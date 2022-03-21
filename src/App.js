import { useState, useEffect } from "react";
import "./App.css";
import { Title } from "./components/Title";
import { SearchFilter } from "./components/SearchFilter";
import { ContactList } from "./components/ContactList";
import { fetchUsers } from "./helper/ApiCall";
import { Spinner } from "./components/Spinner";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchUsers().then((data) => {
      setContacts(data.results);
      setUser(data.results);
      setLoading(false);
    });
  }, []);

  const handleOnGenderChange = (e) => {
    setLoading(true);
    const { value } = e.target;
    const params = `results=20&gender=${value}`;
    fetchUsers(params).then((data) => {
      setContacts(data.results);
      setUser(data.results);
      setLoading(false);
    });
  };

  const hanldeOnSearch = (e) => {
    const { value } = e.target;
    //filter
    const filterArgs = user.filter((user) => {
      const userName = (user.name.first + "" + user.name.last).toLowerCase();
      if (userName.includes(value.toLowerCase())) {
        return true;
      }
    });
    setContacts(filterArgs);
  };

  return (
    <>
      <header className="header container">
        {/* title section */}
        <Title />

        {/* search and filter section */}
        <SearchFilter
          handleOnGenderChange={handleOnGenderChange}
          hanldeOnSearch={hanldeOnSearch}
        />
        {/* user count  */}
        <div className="row">
          <div className="col  text-md-center mb-4">
            {contacts.length} user found
          </div>
        </div>
      </header>

      {loading && <Spinner />}

      <main className="container">
        {/* contact list cards */}
        <ContactList users={contacts} />
      </main>
    </>
  );
};

export default App;
