import React ,{useState,useEffect}from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { Button, Card , Image} from 'semantic-ui-react'
import JobAdvertService from '../services/jobAdvertService';

export default function JobAdvertDetail() {

let {id} = useParams();

const [jobAdvert, setJobAdvert] = useState({})


useEffect (()=>{
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.getById(id).then((result)=>setJobAdvert(result.data.data))
},[])

    return (
        <div>
           
        <Card fluid >
       
          <Card.Content>
            {/* <Card.Header> <div style={{marginBottom:"20px",boxShadow:"3px 7px 5px #473c8b"}}> <h1 style={{color:"white",backgroundColor:"darkcyan",borderRadius:"15px",border:"solid"}}> {jobAdvert?.employer?.companyName} şirketi</h1></div> </Card.Header> */}
            <Card fluid style={{height:"30px", marginTop:"5px"}} color="blue" header={jobAdvert?.employer?.companyName} color="violet"></Card>
            <div style={{float:"left",margin:"5px"}}><Image src={"../../assets/logo.png"} size='small' spaced  style={{borderRadius:"15px"}}/> </div>
            
            <div style={{textAlign:"left"}}>
            <Card.Meta><h3><i>Pozisyon</i>  : <mark>{jobAdvert?.jobPosition?.jobPosition} </mark></h3></Card.Meta>
            <Card.Description >
            <div style={{margin:"10px"}}> <b> İş Tanımı :</b>  {jobAdvert.description}  </div>
            </Card.Description>
            <Card.Description>
             <div style={{margin:"10px"}}> <b>Maaş Aralığı : <ins>{jobAdvert.salaryMin} ₺ - {jobAdvert.salaryMax} ₺</ins> </b>  </div>  
            </Card.Description>
            
            <Card.Description style={{marginLeft:"173px"}}>            
             <b>Lokasyon :</b> {jobAdvert?.city?.name}
            </Card.Description>
            </div>
          </Card.Content>
          <Card.Content extra>
            <Link>
              <Button basic color="green" style={{ width: "49.4%" }}>
                Başvur
              </Button>
              </Link>
              <Link to="/jobAdverts">
              <Button basic color="red" style={{ width: "49.4%" }}>
                Geri
              </Button>
              </Link>
          </Card.Content>
        </Card>
     
        </div>
    )
}