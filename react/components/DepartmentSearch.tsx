import React, { useState } from "react";
import { SearchBar } from "vtex.store-components";                    // * (Dependencia) Colección de componentes VTEX - en este caso SearchBar
import { useQuery } from "react-apollo";                              // * (Dependecia) Para ejecutar consultas en una app Apollo
import DepartmentGroup from "./DepartmentGroup";                      // * (Componente) Opciones de departamentos a elegir
import QUERY_VALUE from "../graphql/getDepartmentGroup.graphql";      // * Consulta de GraphQL
import styles from "./styles.css";

/**
 * Este componente me sirve para desplegar un select y una searchbar que me busca por departamento junto con el valor del input
 * @returns select y searchbar
 */

const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE);      // * Consultador de GraphQL
  const [slug, setSlug] = useState("");                 // Manejador del select

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
