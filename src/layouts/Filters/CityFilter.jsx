import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import CityService from "../../services/cityService";

export default function CityFilter({ onSelect }) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getall().then((result) => setCities(result.data.data));
  }, []);

  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.name,
    value: city.id,
  }));

  return (
    <div className="ui category search">
      {/* <Dropdown
        placeholder="şehir seçiniz"
        selection
        search
        clearable
        options={cityOption}
        onChange={handleChange}
      />   */}
      <Dropdown
        options={cityOption}
        onChange={handleChange}
        selection
        clearable
        search
        icon="search"
        iconPosition="left"
        placeholder="Şehire göre ara"
        style={{
          marginBottom: "20px",
          marginLeft: "100%",
          marginTop: "15px",
          color: "purple",
        }}
      />
      {/* <Input
              action={{ color: "violet", content: "Ara"}}
              icon="search"
              iconPosition="left"
              placeholder="Çalışma tipine göre ara" style={{marginBottom:"20px", marginLeft:"10%",marginTop:"15px"}}
            />  */}
    </div>
  );

  function handleChange(event, data) {
    onSelect(data.value);
  }
}
