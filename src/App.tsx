import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ABSelect from "./Components/Select";
import ABButton from "./Components/Button";
import ABInput from "./Components/Input";
import ABDatePicker from "./Components/DatePicker";
import ABIconButton from "./Components/IconButton";
import Table from "./Components/Table";
import ABSwitch from "./Components/Switch";
import BasicDatePicker from "./Components/DatePicker";

function App() {
  //BUTTON
  const btnClicked = () => {
    alert("YOU CLICKED");
  };

  // SELECT

  const [gender, setGender] = useState<string>();
  const onChange = (e: any) => {
    setGender(e.target.value);
  };


  // // TABLE COMPONENTS
  const data = [
    {
      id: 1,
      name: "Ammad",
      course: "Hyrbrid Development",
      enrolled: true,
    },
    {
      id: 2,
      name: "Shahzaib",
      course: "Hyrbrid Development",
      enrolled: true,
    },
    {
      id: 3,
      name: "Hassan",
      course: "Hyrbrid Development",
      enrolled: true,
    },
    {
      id: 4,
      name: "Haris",
      course: "Hyrbrid Development",
      enrolled: false,
    },
    {
      id: 5,
      name: "Shahmeer",
      course: "Hyrbrid Development",
      enrolled: false,
    },
  ];
  return (
    <div className="text-center container body ">
      <h1>BOILER PLATE</h1>
      <>
        <div className="border border-4 border-dark p-4 m-3">
          <h1>BUTTON</h1>
          <ABButton
            btnText="CLICK HERE"
            btnVariant="contained"
            btnSize="large"
            btnClick={btnClicked}
          />
        </div>
      </>
      <>
        <div className="border border-4 border-dark p-4 m-3">
          <h1>SELECT</h1>
          <ABSelect
            handleChange={onChange}
            value={gender}
            optionsList={["Male", "Female", "Other"]}
            label={"Gender"}
          />
          <h1>GENDER: {gender}</h1>
        </div>
      </>
      <>
        <div className="border border-4 border-dark p-4 m-3">
          <h1>INPUT</h1>
          <ABInput inpClasses="m-2" inpVariant="standard" inpLabel="NAME" />
          <ABInput inpClasses="m-2" inpColor="secondary" inpLabel="AGE" />
        </div>
      </>

      <>
        <div className="border border-4 border-dark p-4 m-3">
          <h1>DATE PICKER</h1>
          <BasicDatePicker />
        </div>
      </>
      <>
        <div className="border border-4 border-dark p-4 m-3">
          <h1>ICON BUTTON</h1>
          <ABIconButton btnLabel="ICON" btnSize="large" />
        </div>
      </>
      <>
        <div className="border border-4 border-dark p-4 m-3">
          <h1>SWITCH</h1>
          <ABSwitch />
        </div>
      </>
      <>
        <div className="border border-4 border-dark p-4 m-3">
          <h1>TABLE</h1>
          <Table
            label="TESTING TABLE"
            dataSource={data}
            cols={[
              {
                displayName: "Id",
                key: "id",
              },
              {
                displayName: "Name",
                key: "name",
              },
              {
                displayName: "Course",
                key: "course",
              },
            ]}
          />
        </div>
      </>
    </div>
  );
}

export default App;
