import React from "react";
import styles from "./styles.css";

type Category = {
  id: string,
  name: string,
  slug: string
};

type Props = {
  departments: [Category],
  handleSetSlug: any
};

/**
 * Este componente sirve para pintar y manejar un select de departamentos
 * @param departments departamentos con los que cuenta nuestra tienda VTEX
 * @param handleSetSlug hook useState
 * @returns un select con sus opciones de departamento
 */

/** */
const DepartmentGroup = ({ departments, handleSetSlug }: Props) => {

  const onHandleSetSlug = (event: any) => handleSetSlug(`${event.target.value}?_q=${event.target.value}&map=ft`); // Valor del select que será buscado en la url

  const departmentOptions: any = departments.map((department: Category) => {                                      // Me imprime una option con cada departamento
    return (
      <option value={department.slug} key={department.id}>
        {department.name}
      </option>
    );
  });

  return (
    <select defaultValue="value0" onChange={onHandleSetSlug} className={`${styles.department__select}`}>
      <option value="value0">Selecciona una opción</option>
      {departmentOptions}
    </select>
  );
};

export default DepartmentGroup;
