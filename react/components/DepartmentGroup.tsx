import React from "react";
import styles from "./styles.css";

type Props = {
  departments: [Category],
  handleSetSlug: any
};

type Category = {
  id: string,
  name: string,
  slug: string
};

const DepartmentGroup = ({ departments, handleSetSlug }: Props) => {
  console.log("Mi grupo de departamento es:", departments);

  const onHandleSetSlug = (event: any) => {
    return handleSetSlug(`${event.target.value}/$\{term\}&map=ft`);
  };

  const departmentOptions: any = departments.map((department: Category) => {
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
