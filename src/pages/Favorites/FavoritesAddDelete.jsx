import React, { useEffect, useState } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import FavoriteService from '../../services/favoritesService'

export default function FavoritesAddDelete({jobSeeker,jobAdvert}) {
    


    const [favorite, setFavorite] = useState({})
    const [changeIcon, setChangeIcon] = useState(true); //icon

    useEffect(() => {
        let favoriteService= new FavoriteService()
        favoriteService.getByJobSeekerIdAndJobAdvertId(jobSeeker?.id,jobAdvert?.id).then((result)=>setFavorite(result.data.data))
        console.log(favorite);
    }, [])
    return (
        <div>
             
              {favorite?(
                <Icon
                onClick={() => {
                  console.log(jobAdvert, jobSeeker);
                  let favoritesService = new FavoriteService();
                  favoritesService
                    .delete(jobSeeker?.id, jobAdvert?.id)
                    .then((result) => console.log(result.data.data));
                  setChangeIcon(!changeIcon);
                  window.location.reload(2000)
                }}
                name="fas fa-heart"
                size="big"
                style={{ marginLeft: "-60px",color:"red" }}
              />
              ):(
                <i
                      onClick={() => {
                        let values = {
                          //ilk kısımdaki isimlendirme swagger tarafıyla aynı olmalı
                          jobSeeker: jobSeeker,
                          jobAdvert: jobAdvert,
                        };
                        console.log(jobAdvert, jobSeeker);
                        let favoritesService = new FavoriteService();
                        favoritesService
                          .add(values)
                          .then((result) => console.log(result.data.data));
                        setChangeIcon(!changeIcon);
                        window.location.reload(2000)
                      }}
                      className="far fa-2x fa-heart"
                      style={{ marginLeft: "-60px",color:"red" }}
                    ></i>
              )}
                   
              
        </div>
    )
}
