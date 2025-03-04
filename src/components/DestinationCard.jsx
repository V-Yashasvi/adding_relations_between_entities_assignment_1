import './DestinationCard.css'

const DestinationCard = ({data}) => {

  return (
    <div className="container">
      <img src={data.image} alt={data.name} />
      <div className="box">
        <h1>{data.name}</h1>
        <h2>{data.location}</h2>
        <p>{data.description}</p>
        <h3>Price: {data.price}</h3>
      </div>
    </div>
  );
}

export default DestinationCard
