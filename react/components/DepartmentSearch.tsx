import React, { useState } from "react";
import { useQuery } from "react-apollo";
import QUERY_VALUE from "../graphql/getDepartmentGroup.graphql";
import DepartmentGroup from "./DepartmentGroup";
import { SearchBar } from "vtex.store-components";
import styles from "./styles.css";

const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE);
  const [slug, setSlug] = useState("");
  console.log("Mi slug seleccionado es:", slug);

  return loading ?
  <div>Loading...</div> :
  <div className={`${styles.department__search}`}>
    <h1 className={`${styles["department__search--title"]}`}>Deparment Search</h1>
    <div className={`flex ${styles.group__searhbar}`}>
      <DepartmentGroup
        departments={data?.categories[0]?.children}
        handleSetSlug={setSlug}
      />
      <SearchBar
        customSearchPageUrl={slug}
        placeholder="¿Qué buscas en VTEX University?"
        displayMode="search-and-clear-buttons"
      />
    </div>
  </div>
};

export default DepartmentSearch;
