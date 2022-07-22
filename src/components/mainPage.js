// import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import CardComp from './card';

function mainPage() {
  const cardInfo = [
    {
      image:
        "s1.png",
      name: "Mike",
      gpa: 3.8
    },
    {
      image:
        "s2.png",
      name: "Manal",
      gpa: 3.6
    },
    {
      image:
        "s3.png",
      name: "Moe",
      gpa: 3.2
    },
    {
      image:
        "s4.png",
      name: "Mary",
      gpa: 2.6
    }
  ];

  const data1 = cardInfo.find((cardInfo) => cardInfo.name === "Mike");
  const data2 = cardInfo.find((cardInfo) => cardInfo.name === "Manal");
  const data3 = cardInfo.find((cardInfo) => cardInfo.name === "Moe");
  const data4 = cardInfo.find((cardInfo) => cardInfo.name === "Mary");

  return (
    <div>
      <h1 className='title'>Students list</h1>
      <CardComp image={data1.image} name={data1.name} gpa={data1.gpa}/>
      <CardComp image={data2.image} name={data2.name} gpa={data2.gpa}/>
      <CardComp image={data3.image} name={data3.name} gpa={data3.gpa}/>
      <CardComp image={data4.image} name={data4.name} gpa={data4.gpa}/>
    </div>
  );
}
export default mainPage;  
