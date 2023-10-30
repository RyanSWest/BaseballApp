
import React from 'react'; 
// import 'bootstrap/dist/css/bootstrap.css'; 
import '../styles/App.scss'
import{ Carousel,Container, Badge} from 'react-bootstrap'; 
  
const Scroll=() =>{ 
  return ( 
    < Container fluid className= 'Sport'> 
           <header className='header'
            style ={{backgroundImage: "url(https://png.pngtree.com/background/20230522/original/pngtree-baseball-field-in-a-3d-animated-video-picture-image_2693316.jpg)"}}

           
           
           >
<Badge class ='w-100'>
<img 
 className="medium"
 
src ='https://wordsabovereplacement.com/wp-content/uploads/2020/06/mlb.png'/>

{/* <Badge className= 'Sport'> */}
  <h1>Baseball Stats API</h1>
</Badge>
 </header>
    
      <Carousel> 
 
        {/* <Carousel.Item interval={1500}> 
          <img  h-auto
               className="c-img"

               src="https://nypost.com/wp-content/uploads/sites/2/2022/06/Shohei-Ohtani-5.jpg?resize=1536,1118&quality=75&strip=all"            alt="Image One"
          /> 
           
        </Carousel.Item>  */}

       


        <Carousel.Item interval={500}> 
          <img 
           className="c-img"
          

            src = 'https://www.vsin.com/assets/1/16/alonso.jpg?8632'
             alt="Image Two"
          /> 
          
           
        </Carousel.Item> 

        
        
        
        <Carousel.Item interval={500}> 
          <img 
               className="c-img"
 
            src= "https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w1536/mlb/rj3ngvdvtists9ppfdcc.jpg"
            alt="Image Two"
          /> 
           
        </Carousel.Item> 

        <Carousel.Item interval={500}> 
          <img 
            className="c-img"
 
            src= "https://library.sportingnews.com/styles/crop_style_16_9_desktop_webp/s3/2023-10/nba-plain--663521ae-fe58-4c20-a296-82f7065f6caf.jpeg.webp"
            alt="Image Two"
          /> 
             
        </Carousel.Item> 
        <Carousel.Item interval={500}> 
          <img 
                 className="c-img"

            src = 'https://cdn-sportsinsight.pressidium.com/wp-content/uploads/2013/06/Justin-Verlander-e1370957290658.jpg'
             alt="Image Two"
          /> 
          
             
    
           
        </Carousel.Item> 
        <Carousel.Item interval={500}> 
          <img 
            className="c-img"
            src = 'https://ftw.usatoday.com/wp-content/uploads/sites/90/2021/05/GTY-1232957571-e1621339800471.jpg?w=1000&h=600&crop=1'
             alt="Image Two"
          /> 
          
          
        </Carousel.Item>  

        <Carousel.Item interval={500}> 
          <img 
            className="c-img"
            src = 'https://cdn.vox-cdn.com/thumbor/Mpv3CVNEwYv9zyUNn6b3qHU2Cig=/0x172:533x527/1200x800/filters:focal(0x172:533x527)/cdn.vox-cdn.com/photo_images/7641585/20120627_ajl_aa3_055.jpg'
             alt="Image Two"
          /> 
          
            
        </Carousel.Item>  
        
       
        <Carousel.Item interval={500}> 
          <img 
            className="c-img"
            src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3x8KF5bujeIdYw00w4BqSWALI4VZU9MLgw&usqp=CAU'
             alt="Image Two"
          /> 
          
           
        </Carousel.Item> 
        <Carousel.Item interval={500}> 
          <img 
            className="c-img"
            src = 'https://www.pennlive.com/resizer/ZsErxk_GeZsK-pUtdDzbPVZsb-E=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/BGR7MGE3AVCQDHIVDHQ355IBQE.jpg'
             alt="Image Two"
          /> 
          
       
          
        </Carousel.Item>  
        <Carousel.Item interval={500}> 
          <img 
            className="c-img"
            src = 'https://www.freep.com/gcdn/-mm-/9472408d4a60b5ec98c0f82bfd99720b847f7b10/c=0-116-2270-1398/local/-/media/2015/08/28/DetroitFreePress/DetroitFreePress/635763964556978363-GTY-485621380.jpg?width=700&height=396&fit=crop&format=pjpg&auto=webp'
             alt="Image Two"
          /> 
          
        
          
        </Carousel.Item>  

        <Carousel.Item interval={500}> 
          <img 
            className="c-img"
            src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Ronald_Acuna_%2850337465807%29_%28cropped%29.jpg/1200px-Ronald_Acuna_%2850337465807%29_%28cropped%29.jpg'
             alt="Image Two"
          /> 
          
             
           
          
        </Carousel.Item> 
        
        <Carousel.Item interval={500}> 
          <img 
            className="c-img"
            src = 'https://img.mlbstatic.com/mlb-images/image/private/t_2x1/t_w1536/mlb/r7yxy9rn6u2mi6pqb6by.jpg'
             alt="Image Two"
          /> 
          
          
        </Carousel.Item> 
        
      </Carousel> 
    </Container> 
  ); 
  
}
export default Scroll
