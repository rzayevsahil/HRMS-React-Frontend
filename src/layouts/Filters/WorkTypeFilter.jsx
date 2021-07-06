import React, { useEffect, useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import WorkTypeService from '../../services/workTypeService'

export default function WorkTypeFilter({onSelect}) {

    const [workTypes, setWorkTypes] = useState([])

    useEffect(()=>{
        let workTypeService=new WorkTypeService()
        workTypeService.getWorkTypes().then((result)=>setWorkTypes(result.data.data))
    },[])

    const workTypeOption = workTypes.map((workType,index)=>({
        key:index,
        text:workType.workType,
        value:workType.id

    }))

    function handleChange(event,data){
        onSelect(data.value)        
    }

    return (
        <div>
            <Dropdown
        options={workTypeOption}
        onChange={handleChange}
        selection
        clearable
        search
        icon="search"
        iconPosition="left"
        placeholder="Çalışma şekline göre ara"
        style={{
          marginBottom: "20px",
          marginLeft: "180%",
          marginTop: "15px",
          color: "purple",
          
        }}
      />
        </div>
    )
}
