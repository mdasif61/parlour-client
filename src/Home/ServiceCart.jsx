const ServiceCart = ({service}) => {
    const {name,price,description,category}=service
    return (
        <div>
           <div>
                <h1>{name}</h1> 
           </div> 
        </div>
    );
};

export default ServiceCart;