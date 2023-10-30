import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, Container, Image } from "react-bootstrap";
import ReactPlayer from "react-player";
import axios from "axios";
import { useNavigate } from "react-router-dom";
  
const GameDetails = () => {
  let params = useParams();

  const url = `https://statsapi.mlb.com/api/v1/game/${params.id}/content`;
 
  const [data, setData] = useState({});
   
  const previewUrl =`https://dapi.cms.mlbinfra.com/v2/content/EN-us/stories/gamepreview-${params.id}`
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        
         setData(res.data.editorial.recap.mlb);
      })

      .catch((err) => {
        console.log(err.message);
      });

   
  }, []);

   if (data) {
    // const pic = data.photo.templateUrl.replace('/{formatInstructions}','')
    // console.log('PIC',pic)
    console.log("DATA", data);
  }

  
  
  
 

  const regex = /(<([^>]+)>)/ig;

  let pic = "";
  if (data.photo) {
 
    pic = data.photo.cuts[7].src;
  } else {
    console.log("NO PHOTO");
  }

  // const body = data.body.replace(regex, '');

  //GET VIDEO CLIP OF GAME

  let video = "";
  if (data.media) {
    video = data.media.playbacks[0].url;
  } else {
    console.log("NO MEDIA");
  }

 
  if (!data.headline  ) {
    return <div>
        <h1 class = "fw-bolder"> No Info, Game Starts Soon....</h1>
        </div>;
  }


  return (
    <Container>
      <Card class="d-flex align-items-center">
        <Card.Header>
          <Card.Title class="d-flex justify-content-center">
            <h3 class="fw-bolder">{data.headline}</h3>
          </Card.Title>
        </Card.Header>
        <Card.Body
          class="d-flex justify-content-center"
          style={{ alignItems: "center" }}
        >
          <Image
            class="img-fluid. max-width: 100%"
            src={pic}
            style={{ height: "20rem" }}
          />
          <p className = 'blurb'>{data.blurb}...</p>
        </Card.Body>
      </Card>
      <div className="video">
        <ReactPlayer url={video} controls={true} width="800px" height="450px" />
      </div>
      <div>
       <p className ='body'>{data.body.replace(regex, '')}</p>

        
      </div>

      <div className ='pitchers'>
         

        
        
      </div>





    </Container>
  );
};

export default GameDetails;
