"use client";
import Select from "react-select";
import {FieldValues, useForm, Controller} from "react-hook-form";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import Toast from "./Toast";

const Developer = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
});

const schema = z.object({
  productId: z.number().optional(),
  productName: z.string().min(3),
  productOwnerName: z.string().min(3),
  developers: z.array(Developer).optional(),
  scrumMasterName: z.string().min(3),
  startDate: z.string().optional(),
  methodology: z.string(),
  location: z.string().min(3),
});

interface Developer {
  id: number;
  name: string;
  role: string;
}

interface Props {
  productInfo?: FormData;
}

type FormData = z.infer<typeof schema>;

const ProductForm = ({productInfo}: Props) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [employees, setEmployees] = useState<any>([]);
  const [status, setStatus] = useState<any>();
  const router = useRouter();

  const {
    reset,
    register,
    control,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: productInfo,
  });

  const Methodologies = [
    {
      name: "Waterfall",
      value: "WATERFALL",
    },
    {
      name: "Agile",
      value: "AGILE",
    },
  ];

  useEffect(() => {
    const defaultDev = employees
      .filter((employee: Developer) => employee.role === "DEV")
      .map((employee: Developer) => ({
        id: employee.id,
        value: employee.id,
        label: employee.name,
        key: employee.id,
      }));

    if (productInfo) {
      const dev: any = productInfo?.developers;
      const loadedDev = defaultDev.filter(
        (employee: Developer) => employee.id !== dev.id
      );
      setSelectedOptions(loadedDev);
    }
  }, [employees]);

  useEffect(() => {
    const getData = async () => {
      const query = await fetch("/api/employees/");
      const response = await query.json();
      setEmployees(response);
    };
    getData();
  }, []);

  const onSubmit = (data: FieldValues) => {
    const url = productInfo
      ? `/api/products/${productInfo?.productId}`
      : "/api/products/";
    const method = productInfo ? "PUT" : "POST";

    fetch(url, {
      method,
      body: JSON.stringify(data),
    })
      .then(function (response) {
        setStatus(response.status);
        if (response.status === 201) {
          reset();
          setSelectedOptions([]);
        }
        return response.json();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSelectChange = (selectedOptions: any) => {
    if (selectedOptions.length <= 5) {
      setSelectedOptions(selectedOptions);
      setValue("developers", selectedOptions);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label htmlFor="productName" className="label">
            <span className="label-text">Product Name</span>
            <span className="label-text-alt">*</span>
          </label>
          <input
            {...register("productName")}
            id="productName"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.productName && <p>{errors.productName.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label htmlFor="productOwnerName" className="label">
            <span className="label-text">Product Owner</span>
          </label>
          <Controller
            name="productOwnerName"
            control={control}
            defaultValue=""
            render={({field}) => (
              <select
                {...register("productOwnerName")}
                className="select select-bordered"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {employees
                  .filter((employee: any) => employee.role === "PRODUCTOWNER")
                  .map((owner: any) => (
                    <option key={owner.id} value={owner.name}>
                      {owner.name}
                    </option>
                  ))}
              </select>
            )}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label htmlFor="developers" className="label">
            <span className="label-text">Developers</span>
          </label>
          <Controller
            name="developers"
            control={control}
            render={({field}) => (
              <Select
                {...field}
                isMulti
                options={employees
                  .filter((employee: any) => employee.role === "DEV")
                  .map((dev: any, index: number) => ({
                    id: dev.id,
                    value: dev.id,
                    label: `${dev.name}`,
                    key: index,
                  }))}
                className="w-full p-2 bg-white border rounded-lg focus:outline-none focus:border-blue-500"
                onChange={handleSelectChange}
                isOptionDisabled={() => selectedOptions.length >= 5}
                instanceId="uniqueId"
                id="developers-multi-select"
                value={selectedOptions}
              />
            )}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label htmlFor="scrumMasterName" className="label">
            <span className="label-text">Scrum Master</span>
          </label>
          <Controller
            name="scrumMasterName"
            control={control}
            defaultValue=""
            render={({field}) => (
              <select
                {...register("scrumMasterName")}
                className="select select-bordered"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {employees
                  .filter((employee: any) => employee.role === "SCRUMMASTER")
                  .map((owner: any) => (
                    <option key={owner.id} value={owner.name}>
                      {owner.name}
                    </option>
                  ))}
              </select>
            )}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label htmlFor="methodology" className="label">
            <span className="label-text">Methodology</span>
          </label>
          <Controller
            name="methodology"
            control={control}
            defaultValue=""
            render={({field}) => (
              <select
                {...register("methodology")}
                className="select select-bordered"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {Object.values(Methodologies).map((Methodology) => (
                  <option key={Methodology.name} value={Methodology.value}>
                    {Methodology.value}
                  </option>
                ))}
              </select>
            )}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label htmlFor="location" className="label">
            <span className="label-text">Location</span>
            <span className="label-text-alt"></span>
          </label>
          <input
            {...register("location")}
            id="location"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          {productInfo ? "Update" : "Save"}
        </button>
        {/* {status && <Toast status={status} />} */}
      </form>
    </>
  );
};

export default ProductForm;
