import Button from "./components/Button";
import Input from "./components/Input";
import Select from "./components/Select";


export let getElementFromApi_ = (value: any, index: any, elementClient: any , elementScore:any ,setElementClient:any , setElementScore:any) => {  //RENDERIZAR COMPONENTE DE ACUERDO AL TIPO
    if (value.type === "button")
      return <Button key={index} property={value}></Button>;

    if (value.type === "input")
      return (
        <Input
          key={index}
          property={value}
          state={value.side === "personal" && elementClient}
          setState={setElementClient}
        ></Input>
      );

    if (value.type === "select")
      return (
        <Select
          key={index}
          property={value}
          state={value.side === "score"?elementScore:elementClient}
          setState={value.side === "score"?setElementScore:setElementClient}
        ></Select>
      );
  };
